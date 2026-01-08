export const generateAdminEmail = (data: {
    name: string;
    email: string;
    phone?: string;
    date?: string;
    interest?: string;
    message: string;
}) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Inquiry Request</title>
        <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px; }
            .header { background-color: #000; color: #fff; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .header h2 { margin: 0; color: #FF6B00; }
            .content { padding: 30px 20px; background-color: #f9f9f9; }
            .field { margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 15px; }
            .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #888; margin-bottom: 5px; font-weight: bold; }
            .value { font-size: 16px; color: #000; font-weight: 500; }
            .message-box { background: #fff; padding: 20px; border-left: 4px solid #FF6B00; margin-top: 10px; }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #888; border-top: 1px solid #eee; margin-top: 20px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>New Booking Inquiry</h2>
                <p style="margin: 5px 0 0; opacity: 0.8; font-size: 14px;">from ${data.name}</p>
            </div>
            
            <div class="content">
                <div class="field">
                    <div class="label">Client Name</div>
                    <div class="value">${data.name}</div>
                </div>

                <div class="field">
                    <div class="label">Contact Email</div>
                    <div class="value"><a href="mailto:${data.email}" style="color: #FF6B00; text-decoration: none;">${data.email}</a></div>
                </div>

                ${data.phone ? `
                <div class="field">
                    <div class="label">Phone Number</div>
                    <div class="value">${data.phone}</div>
                </div>
                ` : ''}

                ${data.date ? `
                <div class="field">
                    <div class="label">Preferred Date</div>
                    <div class="value">${data.date}</div>
                </div>
                ` : ''}

                ${data.interest ? `
                <div class="field">
                    <div class="label">Interest / Tour</div>
                    <div class="value" style="color: #FF6B00;">${data.interest}</div>
                </div>
                ` : ''}

                <div class="field" style="border: none;">
                    <div class="label">Message</div>
                    <div class="message-box">
                        ${data.message.replace(/\n/g, '<br>')}
                    </div>
                </div>
            </div>

            <div class="footer">
                <p>This inquiry was sent from the SM Tours Contact Form.</p>
                <p style="margin-top: 5px;">${new Date().toLocaleString()}</p>
            </div>
        </div>
    </body>
    </html>
    `;
};

export const generateCustomerEmail = (name: string) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>We Received Your Inquiry</title>
        <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { text-align: center; padding-bottom: 30px; border-bottom: 2px solid #000; margin-bottom: 30px; }
            .logo-text { font-size: 24px; font-weight: 900; letter-spacing: -1px; }
            .accent { color: #FF6B00; }
            .content { padding: 0 10px; }
            .greeting { font-size: 22px; margin-bottom: 20px; font-weight: bold; }
            .text { color: #555; margin-bottom: 20px; }
            .signature { margin-top: 40px; font-style: italic; color: #888; }
            .footer { border-top: 1px solid #eee; margin-top: 40px; padding-top: 20px; text-align: center; font-size: 11px; color: #aaa; text-transform: uppercase; letter-spacing: 1px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="logo-text">SM <span class="accent">TOURS</span></div>
            </div>
            
            <div class="content">
                <div class="greeting">Ayubowan, ${name}!</div>
                
                <p class="text">
                    Thank you for reaching out to us. We have successfully received your inquiry for your upcoming journey to Sri Lanka.
                </p>
                
                <p class="text">
                    One of our dedicated travel experts is currently reviewing your details and will get back to you within 24 hours with a personalized itinerary or to discuss your requirements further.
                </p>
                
                <p class="text">
                    In the meantime, feel free to browse our <a href="https://smtours.lk/tours" style="color: #FF6B00; text-decoration: none; font-weight: bold;">latest tours</a> for more inspiration.
                </p>

                <div class="signature">
                    Safe travels,<br>
                    The SM Tours Team
                </div>
            </div>

            <div class="footer">
                SM Tours Sri Lanka<br>
                No. 105, Kahanthota Road, Malabe, Sri Lanka<br>
                +94 77 640 4091<br>
                info@smtourssrilanka.com
            </div>
        </div>
    </body>
    </html>
    `;
};
