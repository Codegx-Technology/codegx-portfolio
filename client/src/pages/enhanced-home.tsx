import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Head } from "@/components/head";
import { CTASection } from "@/components/layouts/CTASection";
import { Testimonials } from "@/components/sections/Testimonials";
import { CaseStudyGrid } from "@/components/ui/CaseStudyCard";

export default function EnhancedHome() {
  // Sample testimonials
  const testimonials = [
    {
      quote: "Codegx Technologies helped us convert manual delivery steps into reliable operating workflows.",
      name: "Elena Park",
      title: "CTO",
      company: "Innovex Solutions",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      quote: "The automation systems developed by Codegx increased our operational efficiency by 40% in just three months.",
      name: "Michael Chen",
      title: "Director of Operations",
      company: "Global Logistics Inc.",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      quote: "Working with Codegx gave us practical engineering guidance and systems we can maintain as we scale.",
      name: "Sarah Johnson",
      title: "CEO",
      company: "TechVision Enterprises",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
  ];

  // Sample case studies
  const caseStudies = [
    {
      title: "Supply Chain Optimization",
      description: "Implemented predictive analytics to optimize inventory management and reduce costs by 30%.",
      industry: "Manufacturing",
      logo: "https://via.placeholder.com/120x40?text=ManufactureCo",
      href: "/case-studies/supply-chain",
    },
    {
      title: "Smart City Traffic Management",
      description: "Developed an AI system that reduced traffic congestion by 25% and improved emergency response times.",
      industry: "Public Sector",
      logo: "https://via.placeholder.com/120x40?text=SmartCity",
      href: "/case-studies/smart-city",
    },
    {
      title: "Blockchain-Based Financial Platform",
      description: "Created a secure, transparent platform that reduced transaction costs by 45% and eliminated fraud.",
      industry: "Finance",
      logo: "https://via.placeholder.com/120x40?text=FinTech",
      href: "/case-studies/blockchain-finance",
    },
  ];

  return (
    <>
      <Head
        title="Codegx Technologies | Enterprise Technology Solutions"
        description="Codegx Technologies delivers enterprise software, automation, and digital transformation solutions for measurable operational results."
      />
      
      <MainLayout 
        withContainer={false} 
        navbarVariant="transparent"
        showSearch={true}
        showNotifications={true}
      >
        {/* Hero Section */}
        <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50 dark:from-background dark:via-background dark:to-background/80 z-0"></div>
          <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-10 z-0"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4 md:space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-xs md:text-sm font-medium mb-2"
                >
                  Enterprise Automation Solutions
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight"
                >
                  Improve Operations with <span className="text-secondary">Dependable</span> Automation
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-xs md:text-sm text-muted-foreground max-w-lg"
                >
                  Codegx Technologies delivers software and automation systems that improve operations, visibility, and measurable delivery outcomes.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4"
                >
                  <Button asChild size="sm" variant="electric">
                    <Link href="/quote">Get Started</Link>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <Link href="/case-studies">View Case Studies</Link>
                  </Button>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                  <img 
                    src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Enterprise automation implementation" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg max-w-xs"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-full p-2 text-primary">
                      <i className="fas fa-chart-line text-lg"></i>
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">Proven Results</h3>
                      <p className="text-xs text-muted-foreground">Our automation systems deliver an average 35% ROI within the first year</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <Testimonials
          title="What Our Clients Say"
          testimonials={testimonials}
          className="py-20 bg-muted/30"
        />
        
        {/* Case Studies Section */}
        <CaseStudyGrid
          title="Featured Case Studies"
          description="Explore how we've helped organizations achieve business goals with automation, software delivery, and secure systems."
          caseStudies={caseStudies}
          className="py-20"
        />
        
        {/* CTA Section */}
        <CTASection
          title="Ready to improve enterprise operations?"
          description="Request a tailored demo and see how Wakala Agency improves operational workflows."
          buttonText="Request Demo"
          buttonLink="/contact"
          variant="gradient"
        />
      </MainLayout>
    </>
  );
}
