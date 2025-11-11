import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";
import { portfolioKnowledgeBase } from './portfolio-knowledge-base';

const getEnv = (key: string) => process.env[key] || process.env[`NEXT_PUBLIC_${key}`] || '';

class AIService {
  private client?: BedrockRuntimeClient;
  private useBedrock: boolean;

  constructor() {
    const accessKey = getEnv('AWS_ACCESS_KEY_ID');
    const secretKey = getEnv('AWS_SECRET_ACCESS_KEY');
    const region = getEnv('AWS_REGION') || getEnv('NEXT_PUBLIC_AWS_REGION') || 'us-east-1';

    this.useBedrock = !!(accessKey && secretKey) && !getEnv('FORCE_LOCAL_RESPONDER');

    if (this.useBedrock) {
      try {
        this.client = new BedrockRuntimeClient({
          region,
          credentials: {
            accessKeyId: accessKey,
            secretAccessKey: secretKey,
          },
        });
      } catch (err) {
        console.warn('Failed to initialize Bedrock client, falling back to local responder:', err);
        this.useBedrock = false;
      }
    }
  }

  // Build a richer system prompt from the knowledge base (used when Bedrock is available)
  private buildSystemPrompt(): string {
    const pb = portfolioKnowledgeBase;
    const current = pb.careerHistory[0];

    // Limit the number of projects and achievements to avoid overly long prompts
    const maxProjects = 3;
    const maxAchievements = 5;

    const projectDetails = current.keyProjects
      .slice(0, maxProjects)
      .map((p) => `- ${p.name}: ${p.description} (Impact: ${p.impact || 'N/A'})`)
      .join('\n');

    const achievements = current.achievements
      ?.slice(0, maxAchievements)
      .join(', ') || 'N/A';

    return `### AI Assistant Prompt ###

You are an AI assistant for a professional portfolio website. Respond concisely, accurately, and professionally. Use the context below to answer questions. Avoid hallucinating facts outside the provided context.

---

**Professional Summary:**
${pb.personalProfile.summary}

**Current Role:**
- Company: ${current.company}
- Role: ${current.role}
- Period: ${current.period}
- Location: ${current.location}
- Key Achievements: ${achievements}

**Highlighted Projects (Top ${maxProjects}):**
${projectDetails}

**Core Skills:**
- Design: ${pb.technicalSkills.design.tools.join(', ')}
- Frontend: ${pb.technicalSkills.technical.frontend.join(', ')}
- AI: ${pb.technicalSkills.technical.ai.join(', ')}

---

When answering, prioritize:
1. Technical skills and tools.
2. Recent projects and their impact.
3. Metrics and measurable outcomes.

If the user asks about unavailable details, acknowledge the limitation and suggest follow-up questions.
`;
  }

  // Very small local responder that uses the portfolio knowledge base to answer common prompts when Bedrock is unavailable.
  private localResponder(prompt: string): string {
    const q = (prompt || '').toLowerCase();

    if (q.includes('portfolio') || q.includes('overview')) {
      return `Professional Summary:\n${portfolioKnowledgeBase.personalProfile.summary}\n\nCore Proficiencies: ${portfolioKnowledgeBase.personalProfile.coreProficiencies?.join(', ') || ''}`;
    }

    if (q.includes('experience') || q.includes('background')) {
      const ch = portfolioKnowledgeBase.careerHistory.map((c) => `- ${c.company} (${c.period}) — ${c.role}`).join('\n');
      return `Experience:\n${ch}\n\nAsk about a specific company or project for more details.`;
    }

    if (q.includes('cync') || q.includes('cync software') || q.includes('loan') || q.includes('collateral')) {
      const c = portfolioKnowledgeBase.careerHistory[0];
      return `CYNC Software — ${c.role} (${c.period}) in ${c.location}\n\nKey projects include: ${c.keyProjects.map(p=>p.name).join(', ')}\n\nHighlights:\n- ${c.responsibilities?.productStrategy?.slice(0,3).join('\n- ') || 'Product strategy details available on request.'}\n\nAsk for more details about any project.`;
    }

    if (q.includes('skills') || q.includes('technologies')) {
      return `Skills:\nDesign: ${portfolioKnowledgeBase.technicalSkills.design.tools.join(', ')}\nDevelopment: ${portfolioKnowledgeBase.technicalSkills.technical.frontend.join(', ')}\nAI: ${portfolioKnowledgeBase.technicalSkills.technical.ai.join(', ')}`;
    }

    // Fallback: echo context-aware summary plus recommend follow-ups
    return `I couldn't find a direct match, but here's a summary of the portfolio: \n${portfolioKnowledgeBase.personalProfile.summary}\n\nYou can ask about: projects, experience, skills, certifications, or publications.`;
  }

  // When Bedrock is configured, call it; otherwise use local responder.
  async generateResponse(prompt: string): Promise<string> {
    if (!prompt) return 'Please provide a question.';

    if (!this.useBedrock || !this.client) {
      // Local responder is synchronous but return Promise for same API.
      return Promise.resolve(this.localResponder(prompt));
    }

    try {
      const systemPrompt = this.buildSystemPrompt();
      const finalPrompt = `${systemPrompt}\nUser question: ${prompt}`;

      const input = {
        modelId: getEnv('BEDROCK_MODEL_ID') || getEnv('NEXT_PUBLIC_BEDROCK_MODEL_ID') || 'anthropic.claude-v2',
        contentType: 'application/json',
        accept: 'application/json',
        body: JSON.stringify({
          prompt: `\n\nHuman: ${finalPrompt}\n\nAssistant:`,
          max_tokens_to_sample: 1500,
          temperature: 0.7,
        }),
      };

      const command = new InvokeModelCommand(input as any);
      const response = await this.client!.send(command);
      const text = new TextDecoder().decode(response.body as any);

      try {
        const parsed = JSON.parse(text);
        return parsed.completion || parsed.output?.[0]?.content?.[0]?.text || parsed.outputText || text;
      } catch (e) {
        return text;
      }
    } catch (err) {
      console.error('Bedrock call failed, falling back to local responder:', err);
      return this.localResponder(prompt);
    }
  }
}

export const aiService = new AIService();