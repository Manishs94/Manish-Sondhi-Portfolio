import nodemailer from 'nodemailer';

type ContactAttachment = {
  filename: string;
  content: string;
  contentType: string;
};

const requiredEnv = ['GMAIL_ADDRESS', 'GMAIL_APP_PASSWORD'] as const;

const getMissingEnv = () =>
  requiredEnv.filter((key) => !process.env[key] || process.env[key]?.trim() === '');

const createTransporter = () =>
  nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_ADDRESS,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const missingEnv = getMissingEnv();
  if (missingEnv.length > 0) {
    return res.status(500).json({
      error: 'Missing email configuration',
      missing: missingEnv,
    });
  }

  try {
    const { name, email, company, message, projectType, attachments = [] } = req.body as {
      name?: string;
      email?: string;
      company?: string;
      message?: string;
      projectType?: string;
      attachments?: ContactAttachment[];
    };

    if (!name || !email || !message || !projectType) {
      return res.status(400).json({
        error: 'Missing required fields: name, email, message, projectType',
      });
    }

    const transporter = createTransporter();

    const safeAttachments = attachments.map((file) => ({
      filename: file.filename,
      content: file.content,
      encoding: 'base64' as const,
      contentType: file.contentType,
    }));

    const ownerMailOptions = {
      from: process.env.GMAIL_ADDRESS,
      to: process.env.GMAIL_ADDRESS,
      replyTo: email,
      subject: `Portfolio Inquiry: ${projectType}`,
      html: `
        <h2>New Portfolio Inquiry</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Inquiry Type:</strong> ${projectType}</p>
        <h3>Message</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p style="color:#666;font-size:12px;margin-top:20px;">
          Attachments: ${safeAttachments.length}
        </p>
      `,
      attachments: safeAttachments,
    };

    const senderMailOptions = {
      from: process.env.GMAIL_ADDRESS,
      to: email,
      subject: 'I received your message',
      html: `
        <h2>Thank you, ${name}</h2>
        <p>I received your inquiry and will review it personally.</p>
        <p>I typically respond within 24 business hours.</p>
        <hr>
        <p><strong>Inquiry Type:</strong> ${projectType}</p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(senderMailOptions),
    ]);

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully.',
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return res.status(500).json({
      error: 'Failed to send message',
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
