// lib/email.ts
import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  name: string;
  message: string;
}

export async function sendEmail(options: EmailOptions): Promise<boolean> {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "adnanaftabxisc@gmail.com",
      pass: process.env.MY_PASSWORD!,
    },
  });

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 40px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); min-height: 100vh;">
      <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); overflow: hidden;">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; text-align: center; color: white;">
          <h1 style="font-size: 32px; font-weight: 700; margin: 0;">Edutalk</h1>
          <p style="font-size: 16px; opacity: 0.95; margin: 10px 0 0;">${options.subject}</p>
        </div>

        <!-- Content -->
        <div style="padding: 40px;">
          <h2 style="color: #1a202c; font-size: 24px; margin: 0 0 20px;">
            Hello <strong>${options.name}</strong>,
          </h2>
          
          <div style="background: #f7fafc; border-radius: 12px; padding: 24px; border-left: 4px solid #4299e1; margin-bottom: 24px;">
            <p style="color: #2d3748; line-height: 1.7; font-size: 16px; margin: 0;">
              ${options.message.replace(/\n/g, '<br>')}
            </p>
          </div>

          <div style="background: #edf2f7; padding: 20px; border-radius: 12px; font-size: 14px;">
            <p style="color: #4a5568; margin: 0 0 8px;"><strong>Account Info:</strong></p>
            <p style="color: #718096; margin: 0; line-height: 1.6;">
              📧 <strong>${options.to}</strong>
            </p>
          </div>
        </div>

        <!-- Footer -->
        <div style="background: #2d3748; color: #a0aec0; padding: 24px; text-align: center; font-size: 14px;">
          <p style="margin: 0 0 8px;">
            Questions? Reply to this email or contact 
            <a href="mailto:support@edutalk.com" style="color: #63b3ed;">support@edutalk.com</a>
          </p>
          <p style="margin: 0; opacity: 0.8;">© 2026 Edutalk. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: `"Edutalk" <${process.env.MY_EMAIL}>`,
      to: options.to,
      subject: options.subject,
      html,
    });
    console.log('✅ Email sent to:', options.to);
    return true;
  } catch (error) {
    console.error('❌ Email failed:', error);
    return false;
  }
}
