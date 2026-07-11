import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: "Invalid contact form submission" });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return res.status(500).json({ message: "Email service is not configured" });
  }

  const data = parsed.data;
  const resend = new Resend(resendApiKey);
  const to = process.env.CONTACT_TO_EMAIL || "info@codegxtechnologies.org";
  const from = process.env.FROM_EMAIL || "Codegx Technologies <onboarding@resend.dev>";

  const html = `
    <h2>Website enquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    ${data.company ? `<p><strong>Company:</strong> ${escapeHtml(data.company)}</p>` : ""}
    <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
  `;

  const { error } = await resend.emails.send({
    from,
    to,
    subject: data.subject,
    html,
    replyTo: data.email,
  });

  if (error) {
    return res.status(500).json({ message: "Failed to send message" });
  }

  return res.status(200).json({ message: "Message sent successfully" });
}
