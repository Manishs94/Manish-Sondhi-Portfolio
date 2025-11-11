import express, { Request, Response } from 'express';
import cors from 'cors';
import { aiService } from './lib/ai-service';

const app = express();
const PORT = process.env.DEV_SERVER_PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Dev server is running' });
});

// Chat endpoint: receives POST /api/chat and calls aiService.generateResponse
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Missing or invalid "message" field' });
    }

    console.log(`[${new Date().toISOString()}] Chat request: "${message.substring(0, 50)}..."`);

    // Call aiService to generate response (uses Bedrock if credentials are set, otherwise local responder)
    const response = await aiService.generateResponse(message);

    res.json({ response });
  } catch (error) {
    console.error('Error in /api/chat endpoint:', error);
    res.status(500).json({
      error: 'Failed to generate response',
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`
  ╔═══════════════════════════════════════════════════════╗
  ║  Dev Server Started Successfully                      ║
  ║  Listening on: http://localhost:${PORT}                  ║
  ║  Endpoint: POST /api/chat                             ║
  ╚═══════════════════════════════════════════════════════╝
  `);
});
