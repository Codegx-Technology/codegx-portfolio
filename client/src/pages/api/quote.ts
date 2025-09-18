import { z } from "zod";
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { env } from "@/utils/env";

const quoteSchema = z.object({
  businessType: z.string().min(1),
  goal: z.string().min(1),
  budget: z.string().min(1),
  urgency: z.string().min(1),
  name: z.string().min(1),
  email: z.string().email(),
});

// Initialize Resend with API key
const resend = new Resend(env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const data = quoteSchema.parse(req.body);

    await resend.emails.send({
      from: `${env.FROM_NAME} <${env.FROM_EMAIL}>`,
      to: env.FOUNDER_INBOX || "hello@codegx.tech",
      subject: `New Quote Request from ${data.name}`,
      html: `
        <h2>Quote Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Business Type:</strong> ${data.businessType}</p>
        <p><strong>Goal:</strong> ${data.goal}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p><strong>Urgency:</strong> ${data.urgency}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err: any) {
    return res.status(400).json({ error: err.message || "Invalid input" });
  }
}
