import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import * as z from 'zod';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Define validation schema
const quoteSchema = z.object({
  // Business Type
  businessType: z.string().min(1, "Business type is required"),
  
  // Project Goals
  projectGoals: z.array(z.string()).min(1, "At least one project goal is required"),
  
  // Budget
  budget: z.string().min(1, "Budget range is required"),
  
  // Urgency
  urgency: z.string().min(1, "Timeline is required"),
  
  // Contact Info
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().optional(),
  
  // Recommendations (optional)
  recommendedService: z.string().optional(),
  estimatedRange: z.string().optional(),
});

// Business type mapping
const businessTypeMap: Record<string, string> = {
  startup: "Startup (1-10 employees)",
  small: "Small Business (11-50 employees)",
  medium: "Medium Business (51-200 employees)",
  large: "Large Enterprise (201+ employees)",
  nonprofit: "Non-profit Organization",
  government: "Government Agency",
  individual: "Individual/Freelancer"
};

// Project goals mapping
const projectGoalsMap: Record<string, string> = {
  automate: "Automate repetitive tasks",
  chatbot: "Build an AI chatbot or assistant",
  analytics: "Implement predictive analytics",
  vision: "Add computer vision capabilities",
  nlp: "Natural language processing",
  integration: "Integrate AI with existing systems",
  strategy: "Develop an AI strategy",
  training: "AI training for team members"
};

// Budget range mapping
const budgetMap: Record<string, string> = {
  under10k: "Under $10,000",
  "10k-25k": "$10,000 - $25,000",
  "25k-50k": "$25,000 - $50,000",
  "50k-100k": "$50,000 - $100,000",
  over100k: "Over $100,000",
  flexible: "Flexible / Not sure yet"
};

// Urgency mapping
const urgencyMap: Record<string, string> = {
  immediate: "Immediate (ASAP)",
  "1month": "Within 1 month",
  "3months": "Within 3 months",
  "6months": "Within 6 months",
  flexible: "Flexible timeline"
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Validate request body
    const data = quoteSchema.parse(req.body);
    
    // Format project goals
    const formattedGoals = data.projectGoals.map(goal => 
      projectGoalsMap[goal] || goal
    ).join(", ");
    
    // Compose email HTML
    const emailHtml = `
      <h1>New Quote Request from ${data.name}</h1>
      <p><strong>Submitted on:</strong> ${new Date().toLocaleString()}</p>
      
      <h2>Business Information</h2>
      <p><strong>Business Type:</strong> ${businessTypeMap[data.businessType] || data.businessType}</p>
      <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
      
      <h2>Project Details</h2>
      <p><strong>Project Goals:</strong> ${formattedGoals}</p>
      <p><strong>Budget Range:</strong> ${budgetMap[data.budget] || data.budget}</p>
      <p><strong>Timeline:</strong> ${urgencyMap[data.urgency] || data.urgency}</p>
      
      <h2>Recommendations</h2>
      <p><strong>Recommended Service:</strong> ${data.recommendedService || 'Not specified'}</p>
      <p><strong>Estimated Price Range:</strong> $${data.estimatedRange || 'Not specified'}</p>
      
      <h2>Contact Information</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      
      <h2>Additional Message</h2>
      <p>${data.message || 'No additional message provided.'}</p>
    `;
    
    // Send email via Resend
    const { data: emailData, error } = await resend.emails.send({
      from: 'Codegx Technologies <quotes@codegxtechnologies.com>',
      to: ['info@codegxtechnologies.com'], // Replace with your actual email
      subject: `New Quote Request: ${data.name} - ${data.recommendedService || 'AI Services'}`,
      html: emailHtml,
      reply_to: data.email,
    });

    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    // Return success response
    return res.status(200).json({ 
      success: true, 
      message: 'Quote request submitted successfully',
      data: emailData
    });
    
  } catch (error) {
    console.error('Error processing quote request:', error);
    
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        error: 'Validation error', 
        details: error.errors 
      });
    }
    
    // Handle other errors
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
