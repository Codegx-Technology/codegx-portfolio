import { useEffect } from "react";
import { motion } from "framer-motion";
import { PageWrapper, PageSection } from "@/components/layouts/PageWrapper";
import ContactForm from "@/components/Forms/ContactForm";
import { Head } from "@/components/head";
import { Heading1, Heading2, Heading3, Paragraph } from "@/components/ui/typography";
import { EnterpriseCard } from "@/components/ui/enterprise-card";
import { submitContactForm } from "@/utils/api";
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
      await submitContactForm({
        name: data.name,
        email: data.email,
        company: data.company,
        subject: 'Contact Form Submission',
        message: data.message
      });
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
      details: ["info@codegxtechnologies.org", "peter@codegxtechnologies.org"]
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      details: ["Nairobi, Kenya"]
    },
    {
      icon: "fas fa-phone-alt",
      title: "Phone",
      details: ["+254 734 957 121", "Business Hours: 9am-5pm EAT"]
    },
    {
      icon: "fas fa-briefcase",
      title: "Core Services",
      details: [
        "🤖 AI Integration & Solutions",
        "⚙️ Enterprise Automation",
        "🚀 Digital Transformation"
      ]
    }
  ];

  // Social links
  const socialLinks = [
    { icon: "fab fa-github", url: "https://github.com/Codegx-Technology", label: "GitHub" },
    { icon: "fab fa-linkedin-in", url: "https://linkedin.com/in/peteroduor", label: "LinkedIn" },
    { icon: "fab fa-twitter", url: "https://twitter.com/peteroduor", label: "Twitter" },
  ];

  return (
    <PageWrapper>
      <Head
        title="Contact Us | Codegx Technologies"
        description="Get in touch with our team to discuss your project or collaboration opportunities."
      />

      <PageSection
        className="relative overflow-hidden py-20"
      >
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 relative z-10"
        >
          <Heading1 className="mb-4">Get in Touch</Heading1>
          <Paragraph className="text-xl max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? We'd love to hear from you.
            Fill out the form below and we'll get back to you as soon as possible.
          </Paragraph>
        </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <EnterpriseCard className="p-6 h-full">
                <Heading2 className="text-2xl mb-6">Contact Information</Heading2>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                        <i className={`${info.icon} text-primary`}></i>
                      </div>
                      <div>
                        <Heading3 className="text-base font-medium mb-1">{info.title}</Heading3>
                        {info.details.map((detail, idx) => (
                          <Paragraph key={idx} className="text-sm text-muted-foreground">{detail}</Paragraph>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Heading3 className="text-base font-medium mb-3">Connect With Us</Heading3>
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
              </EnterpriseCard>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <EnterpriseCard className="p-6">
                <Heading2 className="text-2xl mb-6">Send Us a Message</Heading2>
                <ContactForm onSubmit={handleSubmit} />
              </EnterpriseCard>
            </motion.div>
          </div>
      </PageSection>
    </PageWrapper>
  );
}
