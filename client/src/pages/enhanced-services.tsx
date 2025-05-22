import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Head } from "@/components/head";
import { CTASection } from "@/components/layouts/CTASection";
import { Badge } from "@/components/ui/badge";

export default function EnhancedServices() {
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
      features: ["AI Readiness Assessment", "Technology Selection", "Implementation Roadmap", "ROI Analysis"],
      href: "/services/ai-strategy",
      badge: "Popular",
      badgeVariant: "secondary",
    },
    {
      icon: "fas fa-brain",
      title: "Machine Learning Solutions",
      description: "Custom ML models that deliver actionable insights and automate complex decision processes.",
      features: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Deep Learning"],
      href: "/services/machine-learning",
    },
    {
      icon: "fas fa-chart-line",
      title: "Predictive Analytics",
      description: "Transform your data into accurate forecasts and strategic business intelligence.",
      features: ["Demand Forecasting", "Risk Assessment", "Customer Behavior Analysis", "Market Trends"],
      href: "/services/predictive-analytics",
    },
    {
      icon: "fas fa-comments",
      title: "Conversational AI",
      description: "Intelligent chatbots and virtual assistants that enhance customer experience and operational efficiency.",
      features: ["Natural Language Processing", "Intent Recognition", "Sentiment Analysis", "Multi-channel Integration"],
      href: "/services/conversational-ai",
      badge: "New",
      badgeVariant: "secondary",
    },
    {
      icon: "fas fa-cogs",
      title: "Process Automation",
      description: "Streamline workflows and reduce costs with intelligent automation solutions.",
      features: ["Workflow Analysis", "RPA Implementation", "Cognitive Automation", "Process Optimization"],
      href: "/services/process-automation",
    },
    {
      icon: "fas fa-shield-alt",
      title: "AI Governance & Ethics",
      description: "Ensure your AI implementations are responsible, transparent, and compliant with regulations.",
      features: ["Ethical AI Framework", "Bias Detection", "Compliance Monitoring", "Transparency Tools"],
      href: "/services/ai-governance",
    },
  ];

  return (
    <>
      <Head
        title="Astella AI | Services"
        description="Explore our comprehensive AI services designed to transform your business with cutting-edge technology."
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
                  Our Services
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight"
                >
                  Comprehensive <span className="text-secondary">AI</span> Solutions
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl text-muted-foreground"
                >
                  From strategy to implementation, we provide end-to-end AI services tailored to your business needs.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                  className="bg-card border border-border rounded-2xl p-8 shadow-sm transition-all h-full flex flex-col"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center">
                      <i className={`${service.icon} text-xl`}></i>
                    </div>
                    {service.badge && (
                      <Badge variant={service.badgeVariant}>{service.badge}</Badge>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="mt-auto">
                    <div className="border-t border-border pt-4 mb-6">
                      <h4 className="text-sm font-medium mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm">
                            <i className="fas fa-check text-accent mr-2 text-xs"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link href={service.href}>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Process</h2>
              <p className="text-lg text-muted-foreground">
                We follow a proven methodology to ensure successful AI implementation and adoption.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border hidden md:block"></div>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-12 relative"
              >
                {[
                  {
                    number: "01",
                    title: "Discovery & Assessment",
                    description: "We analyze your business needs, data landscape, and technical requirements to identify the right AI opportunities.",
                    icon: "fas fa-search"
                  },
                  {
                    number: "02",
                    title: "Solution Design",
                    description: "Our experts design a tailored solution architecture and implementation plan aligned with your objectives.",
                    icon: "fas fa-pencil-ruler"
                  },
                  {
                    number: "03",
                    title: "Development & Testing",
                    description: "We develop, train, and rigorously test AI models to ensure accuracy, reliability, and performance.",
                    icon: "fas fa-code"
                  },
                  {
                    number: "04",
                    title: "Deployment & Integration",
                    description: "We seamlessly integrate AI solutions into your existing systems and workflows with minimal disruption.",
                    icon: "fas fa-rocket"
                  },
                  {
                    number: "05",
                    title: "Monitoring & Optimization",
                    description: "We continuously monitor performance and refine models to ensure optimal results and ROI.",
                    icon: "fas fa-chart-line"
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                  >
                    <div className="md:w-1/2 relative">
                      <div className="bg-card border border-border rounded-2xl p-8 shadow-sm relative z-10">
                        <div className="bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center mb-6">
                          <i className={`${step.icon} text-xl`}></i>
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold z-20 hidden md:flex">
                        {step.number}
                      </div>
                    </div>
                    <div className="md:w-1/2"></div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <CTASection
          title="Ready to get started?"
          description="Contact us today to discuss how our AI services can help your business."
          buttonText="Contact Us"
          buttonLink="/contact"
          variant="gradient"
        />
      </MainLayout>
    </>
  );
}
