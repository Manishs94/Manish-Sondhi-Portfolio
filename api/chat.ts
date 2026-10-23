import { aiService, AIUnavailableError } from '../src/lib/ai-service.js';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, history = [] } = (req.body || {}) as {
    message?: unknown;
    history?: unknown;
  };

  if (typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ error: 'Missing or invalid "message" field' });
  }

  try {
    const oidcToken = req.headers?.['x-vercel-oidc-token'];
    const response = await aiService.generateResponse(
      message.trim(),
      Array.isArray(history) ? history : [],
      typeof oidcToken === 'string' ? oidcToken : undefined
    );
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json({ response });
  } catch (error) {
    console.error('Chat API error:', error);
    // `fallback: true` tells the client to answer from its built-in responder.
    return res.status(error instanceof AIUnavailableError ? 503 : 502).json({
      error: 'AI response unavailable',
      fallback: true,
    });
  }
}
