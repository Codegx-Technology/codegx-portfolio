import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Define the contact form schema locally
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  position: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      position: "",
      subject: "",
      message: ""
    },
  });

  const submitContactForm = async (data: ContactFormData) => {
    const response = await apiRequest("POST", "/api/contact", data);
    return response.json();
  };

  const mutation = useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => {
      toast({
        title: "Partnership Request Received",
        description: "Thank you for your interest in collaboration. A response will be provided within 48 business hours.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Request Submission Error",
        description: "Your partnership request could not be processed at this time. Please try again or contact us directly via email.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: ContactFormData) {
    mutation.mutate(data);
  }
  
  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Business Inquiries",
      details: ["enterprise@johndoe.dev", "partnerships@johndoe.dev"]
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Office Location",
      details: ["Corporate Plaza, 5th Avenue", "New York, NY 10022"]
    },
    {
      icon: "fas fa-phone-alt",
      title: "Direct Line",
      details: ["+1 (555) 123-4567", "Business Hours: 9am-5pm EST"]
    },
    {
      icon: "fas fa-briefcase",
      title: "Availability",
      details: ["Available for consulting", "Contract & project-based work"]
    }
  ];
  
  const socialLinks = [
    { icon: "fab fa-github", url: "https://github.com" },
    { icon: "fab fa-linkedin-in", url: "https://linkedin.com" },
    { icon: "fab fa-twitter", url: "https://twitter.com" },
    { icon: "fab fa-medium-m", url: "https://medium.com" }
  ];
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-card/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold font-inter bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent inline-block">
              Enterprise Partnerships
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mt-2"></div>
            <p className="mt-4 text-lg opacity-80">Discuss how my expertise in AI, blockchain, and smart city technologies can drive your organization's digital transformation</p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold font-inter mb-6">Corporate Contact</h3>
            <p className="text-muted-foreground mb-6">Reach out to discuss large-scale deployments, enterprise solutions, and technology consulting services.</p>
            
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
            
            <div className="mt-10">
              <h4 className="font-medium mb-4">Professional Profiles</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-background/80 backdrop-blur-sm shadow-sm border border-primary/10 flex items-center justify-center hover:bg-primary/10 transition"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${link.icon.includes('github') ? 'GitHub' : link.icon.includes('linkedin') ? 'LinkedIn' : link.icon.includes('twitter') ? 'Twitter' : 'Medium'} profile`}
                  >
                    <i className={`${link.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Follow my professional activities and industry insights on these platforms</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold font-inter mb-6">Request a Consultation</h3>
            <p className="text-muted-foreground mb-6">Fill out this form to discuss potential collaborations, technology partnerships, or consulting opportunities.</p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input 
                          type="text"
                          placeholder="Enter your name" 
                          autoComplete="name"
                          className="bg-background/50 backdrop-blur-sm border-primary/20 shadow-sm focus:border-primary focus:ring-primary"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="Enter your email" 
                          autoComplete="email"
                          className="bg-background/50 backdrop-blur-sm border-primary/20 shadow-sm focus:border-primary focus:ring-primary"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your organization" 
                            className="bg-background/50 backdrop-blur-sm border-primary/20 shadow-sm focus:border-primary focus:ring-primary"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Position</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your role" 
                            className="bg-background/50 backdrop-blur-sm border-primary/20 shadow-sm focus:border-primary focus:ring-primary"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter subject" 
                          className="bg-background/50 backdrop-blur-sm border-primary/20 shadow-sm focus:border-primary focus:ring-primary"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Enter your message" 
                          className="bg-background/50 backdrop-blur-sm border-primary/20 shadow-sm focus:border-primary focus:ring-primary"
                          rows={5}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/30 rounded-full py-6 min-h-[52px]"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? (
                    <><i className="fas fa-spinner fa-spin mr-2"></i> Submitting Request...</>
                  ) : (
                    <><i className="fas fa-paper-plane mr-2"></i> Request Partnership</>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
