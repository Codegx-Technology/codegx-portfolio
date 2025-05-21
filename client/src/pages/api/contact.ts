import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { Resend } from 'resend';

// Initialize Resend with API key
// In production, use environment variables
const resend = new Resend(process.env.RESEND_API_KEY || 'your_resend_api_key');

// Define the contact form schema for validation
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

// Define response types
type SuccessResponse = {
  success: true;
  message: string;
};

type ErrorResponse = {
  success: false;
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    // Validate the request body
    const validatedData = contactFormSchema.parse(req.body);
    
    // Prepare email content
    const { name, email, company, message } = validatedData;
    
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Use your verified domain in production
      to: 'contact@codegx.tech', // Your email address
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
    
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ 
        success: false, 
        error: 'Failed to send email' 
      });
    }
    
    // Return success response
    return res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully' 
    });
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        success: false, 
        error: 'Validation error: ' + error.errors.map(e => e.message).join(', ') 
      });
    }
    
    // Handle other errors
    return res.status(500).json({ 
      success: false, 
      error: 'Internal server error' 
    });
  }
}
