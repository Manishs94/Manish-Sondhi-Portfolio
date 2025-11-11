import { aiService } from '@/lib/ai-service';
import { portfolioKnowledgeBase } from '@/lib/portfolio-knowledge-base';

export async function POST(request: Request) {
  let userMessage: string;
  let conversationHistory: any[];
  
  try {
    const body = await request.json();
    userMessage = body.message;
    conversationHistory = body.history || [];

    if (!userMessage) {
      throw new Error('No message provided');
    }

    // Create a context-aware prompt using portfolio knowledge and conversation history
    const contextPrompt = `
Current Portfolio Knowledge:
${portfolioKnowledgeBase.personalProfile.summary}

Current Role at ${portfolioKnowledgeBase.careerHistory[0].company}:
- Position: ${portfolioKnowledgeBase.careerHistory[0].role}
- Location: ${portfolioKnowledgeBase.careerHistory[0].location}
- Period: ${portfolioKnowledgeBase.careerHistory[0].period}

Key Projects:
${portfolioKnowledgeBase.careerHistory[0].keyProjects.map(project => 
  `- ${project.name}: ${project.description}
   Impact: ${project.impact ? project.impact.join(', ') : ''}
   Technologies: ${project.technologies ? project.technologies.join(', ') : ''}`
).join('\n')}

Technical Skills:
- Design Tools: ${portfolioKnowledgeBase.technicalSkills.design.tools.join(', ')}
- Development: ${portfolioKnowledgeBase.technicalSkills.technical.frontend.join(', ')}
- AI/ML: ${portfolioKnowledgeBase.technicalSkills.technical.ai.join(', ')}

Specializations:
- Financial Domain: ${portfolioKnowledgeBase.specializationAreas.financialDomain.expertise.join(', ')}
- AI Integration: ${portfolioKnowledgeBase.specializationAreas.aiIntegration.capabilities.join(', ')}

Previous conversation:
${conversationHistory.map((msg: any) => `${msg.sender}: ${msg.content}`).join('\n')}

Current message: ${userMessage}

Please provide a detailed, accurate response based on this portfolio information while maintaining a professional and friendly tone.
`;

    const response = await aiService.generateResponse(contextPrompt);

    // Log successful response
    console.log('Successfully generated response for:', {
      userMessage,
      historyLength: conversationHistory.length,
      timestamp: new Date().toISOString()
    });

    return new Response(JSON.stringify({ response }), {
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store'
      },
    });

  } catch (error) {
    console.error('Error in chat API:', error);
    
    // Determine the type of error for better error handling
    const errorMessage = error instanceof Error 
      ? `Error: ${error.message}`
      : 'An unexpected error occurred';
    
    console.log('Detailed error information:', {
      error,
      userMessage,
      historyLength: conversationHistory?.length,
      timestamp: new Date().toISOString()
    });

    return new Response(
      JSON.stringify({ 
        error: errorMessage,
        suggestion: 'Please try asking your question again, or rephrase it slightly.',
        status: 'error'
      }), {
        status: 500,
        headers: { 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store'
        },
      }
    );
  }
}