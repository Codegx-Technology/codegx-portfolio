import { useEffect } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import ContactForm from "@/components/Forms/ContactForm";
import { z } from "zod";

// Define the contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

// Define the type for the form data
type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle form submission
  const handleSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      return await response.json();
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  };

  // Contact information
  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      details: ["contact@codegx.tech", "peter@codegx.tech"]
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      details: ["Nairobi, Kenya"]
    },
    {
      icon: "fas fa-phone-alt",
      title: "Phone",
      details: ["+254 XXX XXX XXX", "Business Hours: 9am-5pm EAT"]
    },
    {
      icon: "fas fa-briefcase",
      title: "Services",
      details: ["AI Solutions", "Web Development", "Blockchain Development"]
    }
  ];

  // Social links
  const socialLinks = [
    { icon: "fab fa-github", url: "https://github.com/Codegx-Technology", label: "GitHub" },
    { icon: "fab fa-linkedin-in", url: "https://linkedin.com/in/peteroduor", label: "LinkedIn" },
    { icon: "fab fa-twitter", url: "https://twitter.com/peteroduor", label: "Twitter" },
  ];

  return (
    <Layout>
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold font-inter mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? We'd love to hear from you.
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-card rounded-lg p-6 shadow-md border border-border h-full">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                        <i className={`${info.icon} text-primary`}></i>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="font-medium mb-3">Connect With Us</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                        aria-label={link.label}
                      >
                        <i className={link.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="bg-card rounded-lg p-6 shadow-md border border-border">
                <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                <ContactForm onSubmit={handleSubmit} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
