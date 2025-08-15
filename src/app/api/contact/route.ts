import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const { name, email, message } = await request.json();

        // Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Check environment variables
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error('Missing email environment variables');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        console.log('🚀 Attempting to send email...'); // For debugging

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Verify transporter
        await transporter.verify();
        console.log('✅ Email transporter verified'); // For debugging

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'yashwanthmanchu059@gmail.com',
            subject: `🌟 Portfolio Contact: ${name}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Portfolio Contact</title>
                </head>
                <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
                        <h1 style="color: white; margin: 0; font-size: 28px;">New Portfolio Contact</h1>
                        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Someone reached out through your website!</p>
                    </div>
                    
                    <div style="background: #f8fafc; padding: 25px; border-radius: 10px; border-left: 4px solid #667eea;">
                        <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
                        <p><strong style="color: #667eea;">👤 Name:</strong> ${name}</p>
                        <p><strong style="color: #667eea;">📧 Email:</strong> <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></p>
                        <p><strong style="color: #667eea;">📝 Message:</strong></p>
                        <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; margin-top: 10px;">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                    
                    <div style="margin-top: 30px; text-align: center; padding: 20px; background: #f1f5f9; border-radius: 10px;">
                        <p style="margin: 0; color: #64748b; font-size: 14px;">
                            📅 Sent on ${new Date().toLocaleDateString('en-IN', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                                timeZone: 'Asia/Kolkata'
                            })} IST
                        </p>
                        <p style="margin: 10px 0 0 0; color: #64748b; font-size: 12px;">
                            From your portfolio website contact form
                        </p>
                    </div>
                    
                    <div style="text-align: center; margin-top: 20px;">
                        <a href="mailto:${email}" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 25px; display: inline-block; font-weight: bold;">
                            Reply to ${name}
                        </a>
                    </div>
                </body>
                </html>
            `,
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('✅ Email sent successfully:', info.messageId); // For debugging

        return NextResponse.json(
            { 
                message: 'Email sent successfully',
                messageId: info.messageId 
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('❌ Error sending email:', error);
        
        // Return different error messages based on error type
        if (error instanceof Error) {
            if (error.message.includes('Invalid login')) {
                return NextResponse.json(
                    { error: 'Email authentication failed. Please check credentials.' },
                    { status: 500 }
                );
            }
        }
        
        return NextResponse.json(
            { error: 'Failed to send email. Please try again.' },
            { status: 500 }
        );
    }
}