import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Head } from "@/components/head";
import { CTASection } from "@/components/layouts/CTASection";
import { PageWrapper, PageSection, PageHeader } from "@/components/layouts/PageWrapper";

export default function EnhancedAgency() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Services data
  const services = [
    {
      icon: "fas fa-robot",
      title: "AI Strategy Consulting",
      description: "Develop a comprehensive AI roadmap tailored to your business objectives and industry challenges.",
      href: "/services/ai-strategy",
    },
    {
      icon: "fas fa-brain",
      title: "Machine Learning Solutions",
      description: "Custom ML models that deliver actionable insights and automate complex decision processes.",
      href: "/services/machine-learning",
    },
    {
      icon: "fas fa-chart-line",
      title: "Predictive Analytics",
      description: "Transform your data into accurate forecasts and strategic business intelligence.",
      href: "/services/predictive-analytics",
    },
    {
      icon: "fas fa-comments",
      title: "Conversational AI",
      description: "Intelligent chatbots and virtual assistants that enhance customer experience and operational efficiency.",
      href: "/services/conversational-ai",
    },
    {
      icon: "fas fa-cogs",
      title: "Process Automation",
      description: "Streamline workflows and reduce costs with intelligent automation solutions.",
      href: "/services/process-automation",
    },
    {
      icon: "fas fa-shield-alt",
      title: "AI Governance & Ethics",
      description: "Ensure your AI implementations are responsible, transparent, and compliant with regulations.",
      href: "/services/ai-governance",
    },
  ];

  return (
    <>
      <Head
        title="Astella AI | Agency"
        description="Astella AI is a premier agency delivering cutting-edge artificial intelligence solutions for enterprise clients."
      />
      
      <MainLayout 
        withContainer={false} 
        navbarVariant="default"
        showSearch={true}
      >
        {/* Hero Section */}
        <section className="relative py-24 bg-muted/30">
          <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-10 z-0"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-2"
                >
                  Why Choose Astella
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight"
                >
                  A Stellar Force for <span className="text-secondary">AI</span> Innovation
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl text-muted-foreground"
                >
                  We combine deep technical expertise with strategic business acumen to deliver AI solutions that create measurable value.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Our Approach Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Approach</h2>
              <p className="text-lg text-muted-foreground">
                We don't just implement AI – we transform businesses through a proven methodology that ensures measurable results.
              </p>
            </div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  number: "01",
                  title: "Discover",
                  description: "We start by understanding your business challenges, objectives, and data landscape.",
                  icon: "fas fa-search"
                },
                {
                  number: "02",
                  title: "Design",
                  description: "Our experts design custom AI solutions tailored to your specific needs and constraints.",
                  icon: "fas fa-pencil-ruler"
                },
                {
                  number: "03",
                  title: "Deliver",
                  description: "We implement, test, and deploy solutions with a focus on integration and adoption.",
                  icon: "fas fa-rocket"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card border border-border rounded-2xl p-8 shadow-sm relative overflow-hidden"
                >
                  <div className="absolute -top-4 -right-4 text-8xl font-bold text-primary/5">
                    {step.number}
                  </div>
                  <div className="relative z-10">
                    <div className="bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center mb-6">
                      <i className={`${step.icon} text-xl`}></i>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Services</h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive AI solutions designed to address your most complex business challenges.
              </p>
            </div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="bg-card border border-border rounded-2xl p-8 shadow-sm transition-all"
                >
                  <div className="bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center mb-6">
                    <i className={`${service.icon} text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Link href={service.href} className="text-primary hover:underline inline-flex items-center">
                    Learn more <i className="fas fa-arrow-right ml-2 text-xs"></i>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* CTA Section */}
        <CTASection
          title="Ready to transform your business with AI?"
          description="Schedule a consultation with our experts to explore how Astella can help you achieve your goals."
          buttonText="Book a Consultation"
          buttonLink="/contact"
          variant="angled"
        />
      </MainLayout>
    </>
  );
}
