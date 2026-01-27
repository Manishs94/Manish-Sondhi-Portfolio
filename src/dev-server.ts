import express, { Request, Response } from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { aiService } from './lib/ai-service';

const app = express();
const PORT = process.env.DEV_SERVER_PORT || 3001;

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_ADDRESS || 'Manishsondhi94@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD || 'Rachnas01.', // Use Google App Password
  },
});

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Dev server is running' });
});

// Contact form submission endpoint
app.post('/api/contact', async (req: Request, res: Response) => {
  try {
    const { name, email, company, message, projectType, files } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields: name, email, message' });
    }

    // Email to you (owner)
    const ownerMailOptions = {
      from: process.env.GMAIL_ADDRESS || 'Manishsondhi94@gmail.com',
      to: process.env.GMAIL_ADDRESS || 'Manishsondhi94@gmail.com',
      subject: `New Contact Form Submission: ${projectType}`,
      html: `
        <h2>New Inquiry</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p style="color: #888; font-size: 12px; margin-top: 20px;">
          Files attached: ${files && files.length > 0 ? files.length : 0}
        </p>
      `,
    };

    // Confirmation email to sender
    const senderMailOptions = {
      from: process.env.GMAIL_ADDRESS || 'Manishsondhi94@gmail.com',
      to: email,
      subject: 'I received your message',
      html: `
        <h2>Thank You, ${name}</h2>
        <p>I received your inquiry and will personally review it.</p>
        <p>I typically respond within 24 business hours.</p>
        <hr>
        <h3>Your Message:</h3>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #888; font-size: 12px;">
          If you have any follow-up questions in the meantime, feel free to reach out directly.
        </p>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(senderMailOptions),
    ]);

    console.log(`[${new Date().toISOString()}] Contact form submitted by ${name} (${email})`);

    res.json({ 
      success: true, 
      message: 'Message sent successfully. You will receive a confirmation email shortly.' 
    });
  } catch (error) {
    console.error('Error in /api/contact endpoint:', error);
    res.status(500).json({
      error: 'Failed to send message',
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
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
