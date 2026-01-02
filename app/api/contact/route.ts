import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { generateAdminEmail, generateCustomerEmail } from '@/lib/email-templates';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, date, interest, message } = body;

        console.log("DEBUG: POST /api/contact");
        console.log("DEBUG: Email:", process.env.SMTP_EMAIL);
        console.log("DEBUG: Password Length:", process.env.SMTP_PASSWORD ? process.env.SMTP_PASSWORD.length : 0);

        // Basic server-side validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Configure Transporter
        // NOTE: For best results with Gmail, use an "App Password"
        // If the user provided Client ID/Secret, we need a refresh token which is hard to get here.
        // We will default to the standard user/pass (App Password) method as it's most robust for server-side.
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_EMAIL, // tourssrilankasm@gmail.com
                pass: process.env.SMTP_PASSWORD, // App Password
            },
        });

        // 1. Send Admin Notification
        // We explicitly send this to the business owner's email
        const adminEmail = process.env.ADMIN_EMAIL || "tourssrilankasm@gmail.com";

        await transporter.sendMail({
            from: process.env.SMTP_EMAIL,
            to: adminEmail,
            subject: `New Inquiry: ${name} - ${interest || 'General'}`,
            html: generateAdminEmail({ name, email, phone, date, interest, message }),
            replyTo: email,
        });

        // 2. Send Customer Confirmation
        await transporter.sendMail({
            from: `"SM Tours" <${process.env.SMTP_EMAIL}>`,
            to: email,
            subject: "We've received your inquiry - SM Tours",
            html: generateCustomerEmail(name),
        });

        return NextResponse.json({ success: true, message: 'Emails sent successfully' });

    } catch (error) {
        console.error('Email sending failed:', error);

        // Return a generic error but log the specific one
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
}
