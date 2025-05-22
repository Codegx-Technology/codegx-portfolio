import { z } from "zod";
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const quoteSchema = z.object({
  businessType: z.string().min(1, "Business type is required"),
  goal: z.string().min(1, "Goal is required"),
  budget: z.string().min(1, "Budget is required"),
  urgency: z.string().min(1, "Timeline is required"),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
});

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Validate request body
    const data = quoteSchema.parse(req.body);

    // Send email via Resend
    const { data: emailData, error } = await resend.emails.send({
      from: "Codegx Technologies <quotes@codegxtechnologies.com>",
      to: process.env.FOUNDER_INBOX || "info@codegxtechnologies.com", // Fallback to a default email
      subject: `New Simple Quote Request from ${data.name}`,
      html: `
        <h2>Quote Request</h2>
        <p><strong>Submitted on:</strong> ${new Date().toLocaleString()}</p>
        
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Business Type:</strong> ${data.businessType}</p>
        <p><strong>Goal:</strong> ${data.goal}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p><strong>Urgency:</strong> ${data.urgency}</p>
      `,
      reply_to: data.email,
    });

    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    // Return success response
    return res.status(200).json({ 
      success: true,
      message: 'Quote request submitted successfully'
    });

  } catch (err) {
    console.error('Error processing quote request:', err);
    
    // Handle validation errors
    if (err instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Validation error',
        details: err.errors
      });
    }
    
    // Handle other errors
    return res.status(500).json({
      error: 'Internal server error',
      message: err instanceof Error ? err.message : 'Unknown error'
    });
  }
}
