// Server-only: imported by api/chat.ts (Vercel) and src/dev-server.ts (local).
// Never import this from browser code — it reads AWS credentials from process.env.
import Anthropic from '@anthropic-ai/sdk';
import { AnthropicBedrockMantle } from '@anthropic-ai/bedrock-sdk';
import { portfolioKnowledgeBase } from './portfolio-knowledge-base.js';

export interface ChatHistoryItem {
  content: string;
  sender: 'user' | 'ai';
}

export class AIUnavailableError extends Error {}

const AI_GATEWAY_URL = 'https://ai-gateway.vercel.sh';
const DEFAULT_GATEWAY_MODEL = 'anthropic/claude-opus-5';
const DEFAULT_BEDROCK_MODEL = 'anthropic.claude-opus-5';
const MAX_MESSAGE_CHARS = 2000;
const MAX_HISTORY_MESSAGES = 12;

// Accept the legacy NEXT_PUBLIC_* names too, since existing env files use them.
const getEnv = (key: string) => process.env[key] || process.env[`NEXT_PUBLIC_${key}`] || '';

// Legacy InvokeModel IDs (e.g. anthropic.claude-v2, ...-v2:0) don't work with the Messages API client.
const resolveBedrockModel = () => {
  const configured = getEnv('BEDROCK_MODEL_ID');
  if (!configured || /claude-(v2|instant)|:\d+$/.test(configured)) return DEFAULT_BEDROCK_MODEL;
  return configured;
};

// The full knowledge base is stable across requests, so it sits in a cached system block.
const SYSTEM_PROMPT = `You are the AI assistant on ${portfolioKnowledgeBase.personalProfile.name}'s product design portfolio website. Visitors are mostly recruiters, hiring managers, product managers, and designers evaluating ${portfolioKnowledgeBase.personalProfile.name} for a role.

Answer using only the portfolio knowledge base below. If something isn't covered, say so plainly and suggest a related topic you can speak to, or suggest reaching out through the contact form. Never invent employers, metrics, dates, or projects.

Tailor depth to the question: a short, recruiter-friendly answer for broad questions; a detailed walkthrough (challenge, approach, key decisions, impact) when someone asks to go deep on a project or process. Refer to ${portfolioKnowledgeBase.personalProfile.name} in the third person.

The chat window renders plain text only. Do not use Markdown syntax (no #, **, or tables). Use short paragraphs, and "•" for bullet points. Keep most answers under 200 words.

<portfolio_knowledge_base>
${JSON.stringify(portfolioKnowledgeBase, null, 2)}
</portfolio_knowledge_base>`;

const toMessages = (history: ChatHistoryItem[], message: string): Anthropic.MessageParam[] => {
  const messages: Anthropic.MessageParam[] = history
    .filter((m) => m && typeof m.content === 'string' && m.content.trim())
    .slice(-MAX_HISTORY_MESSAGES)
    .map((m) => ({
      role: m.sender === 'user' ? 'user' : 'assistant',
      content: m.content.slice(0, 4000),
    }));

  // The conversation must start with a user turn (drops the canned greeting).
  while (messages.length && messages[0].role !== 'user') messages.shift();

  messages.push({ role: 'user', content: message });
  return messages;
};

class AIService {
  private bedrockClient?: AnthropicBedrockMantle;

  // Preferred: Vercel AI Gateway. On Vercel deployments the OIDC token comes from the
  // `x-vercel-oidc-token` request header, so no API keys are needed. Locally, set
  // AI_GATEWAY_API_KEY (or VERCEL_OIDC_TOKEN). AWS Bedrock is an optional alternative.
  private resolveProvider(gatewayToken?: string) {
    const token = gatewayToken || getEnv('AI_GATEWAY_API_KEY') || getEnv('VERCEL_OIDC_TOKEN');
    if (token) {
      return {
        client: new Anthropic({ apiKey: token, baseURL: AI_GATEWAY_URL, timeout: 45_000 }),
        model: getEnv('AI_GATEWAY_MODEL') || DEFAULT_GATEWAY_MODEL,
      };
    }

    if (getEnv('AWS_ACCESS_KEY_ID') && getEnv('AWS_SECRET_ACCESS_KEY')) {
      this.bedrockClient ??= new AnthropicBedrockMantle({
        awsRegion: getEnv('AWS_REGION') || 'us-east-1',
        awsAccessKey: getEnv('AWS_ACCESS_KEY_ID'),
        awsSecretAccessKey: getEnv('AWS_SECRET_ACCESS_KEY'),
        awsSessionToken: getEnv('AWS_SESSION_TOKEN') || null,
        timeout: 45_000,
      });
      return { client: this.bedrockClient, model: resolveBedrockModel() };
    }

    throw new AIUnavailableError('No AI provider configured (AI Gateway or AWS Bedrock)');
  }

  async generateResponse(
    message: string,
    history: ChatHistoryItem[] = [],
    gatewayToken?: string
  ): Promise<string> {
    const { client, model } = this.resolveProvider(gatewayToken);

    const response = await client.messages.create({
      model,
      max_tokens: 4000,
      // Chat answers don't need deep reasoning; low effort keeps replies fast.
      output_config: { effort: 'low' },
      system: [{ type: 'text', text: SYSTEM_PROMPT, cache_control: { type: 'ephemeral' } }],
      messages: toMessages(history, message.slice(0, MAX_MESSAGE_CHARS)),
    });

    if (response.stop_reason === 'refusal') {
      throw new AIUnavailableError('Model declined the request');
    }

    const text = response.content
      .filter((block): block is Anthropic.TextBlock => block.type === 'text')
      .map((block) => block.text)
      .join('\n')
      .trim();

    if (!text) throw new AIUnavailableError('Model returned an empty response');
    return text;
  }
}

export const aiService = new AIService();
