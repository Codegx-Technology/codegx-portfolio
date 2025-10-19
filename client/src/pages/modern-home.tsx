import React, { useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Head } from "@/components/head";
import { CTASection } from "@/components/layouts/CTASection";
import { Testimonials } from "@/components/sections/Testimonials";
import { CaseStudyGrid } from "@/components/ui/CaseStudyCard";
import { Badge } from "@/components/ui/badge";

export default function ModernHome() {
  // Refs for scroll animations
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  
  // Animation controls
  const controls = useAnimation();
  const statsControls = useAnimation();
  
  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 50]);
  
  // Trigger animations on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          statsControls.start("visible");
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [statsControls]);
  
  // Sample testimonials
  const testimonials = [
    {
      quote: "Codegx Technologies has transformed our digital infrastructure with their innovative AI solutions.",
      name: "Elena Park",
      title: "CTO",
      company: "Innovex Solutions",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      quote: "The AI solutions developed by Codegx have increased our operational efficiency by 40% in just three months.",
      name: "Michael Chen",
      title: "Director of Operations",
      company: "Global Logistics Inc.",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      quote: "Working with Codegx has been transformative. Their expertise in AI and blockchain is unmatched in the industry.",
      name: "Sarah Johnson",
      title: "CEO",
      company: "TechVision Enterprises",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
  ];

  // Sample case studies
  const caseStudies = [
    {
      title: "AI-Powered Supply Chain Optimization",
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
        title="Codegx Technologies | Enterprise AI Solutions"
        description="Codegx Technologies delivers cutting-edge artificial intelligence solutions for enterprise, education, and public service."
      />
      
      <MainLayout 
        withContainer={false} 
        navbarVariant="transparent"
        showSearch={true}
      >
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden"
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY
          }}
        >
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2c1a22] via-[#3d2128] to-[#2c1a22]/90 dark:from-[#1f1a2c] dark:via-[#2a1f3d] dark:to-[#1f1a2c]/90 z-0"></div>

          {/* Animated background grid */}
          <div className="absolute inset-0 z-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="grid-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 50 H100 M50 0 V100" stroke="currentColor" strokeWidth="0.5" fill="none" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>

          {/* Floating elements */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-16 h-16 rounded-full bg-[#c8a951]/5 dark:bg-[#9f7b42]/5"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, Math.random() * 30 - 15],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Hero Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4 md:space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="inline-flex items-center px-4 py-1.5 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 rounded-full text-[#c8a951] dark:text-[#9f7b42] text-xs md:text-sm font-medium mb-2 md:mb-3 border border-[#c8a951]/20 dark:border-[#9f7b42]/20"
                >
                  <span className="flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#c8a951] dark:bg-[#9f7b42] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8a951] dark:bg-[#9f7b42]"></span>
                  </span>
                  Pioneering Digital Transformation
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight text-white"
                >
                  Elevate Your Business with <br />
                  <span className="text-[#c8a951] dark:text-[#9f7b42]">Intelligent</span> Technology
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-xs md:text-sm text-slate-300 max-w-lg"
                >
                  Codegx Technologies delivers cutting-edge artificial intelligence solutions that drive real business results and measurable ROI.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4"
                >
                  <Button
                    asChild
                    size="sm"
                    className="bg-[#c8a951] hover:bg-[#c8a951]/90 text-[#2c1a22] dark:bg-[#9f7b42] dark:hover:bg-[#9f7b42]/90 dark:text-[#1f1a2c]"
                  >
                    <Link href="/quote">Get Started</Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="border-[#c8a951] text-[#c8a951] hover:bg-[#c8a951]/10 dark:border-[#9f7b42] dark:text-[#9f7b42] dark:hover:bg-[#9f7b42]/10"
                  >
                    <Link href="/case-studies">View Case Studies</Link>
                  </Button>
                </motion.div>
                
                {/* Trusted by logos */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="pt-8"
                >
                  <p className="text-sm text-slate-400 mb-4">Trusted by industry leaders:</p>
                  <div className="flex flex-wrap items-center gap-6">
                    {["https://via.placeholder.com/120x40?text=Client1", 
                      "https://via.placeholder.com/120x40?text=Client2", 
                      "https://via.placeholder.com/120x40?text=Client3"].map((logo, i) => (
                      <img 
                        key={i} 
                        src={logo} 
                        alt="Client logo" 
                        className="h-8 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative hidden lg:block"
              >
                {/* 3D-like layered graphics */}
                <div className="relative">
                  {/* Background layer */}
                  <motion.div 
                    className="absolute -right-8 -top-8 w-full h-full bg-[#4d2c35]/30 dark:bg-[#3d2a5d]/30 rounded-2xl"
                    animate={{ 
                      x: [0, 5, 0], 
                      y: [0, -5, 0],
                      rotate: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                  />
                  
                  {/* Middle layer */}
                  <motion.div 
                    className="absolute -right-4 -top-4 w-full h-full bg-[#4d2c35]/50 dark:bg-[#3d2a5d]/50 rounded-2xl"
                    animate={{ 
                      x: [0, 8, 0], 
                      y: [0, -8, 0],
                      rotate: [0, 2, 0]
                    }}
                    transition={{ 
                      duration: 10, 
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 0.5
                    }}
                  />
                  
                  {/* Main image */}
                  <motion.div 
                    className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#4d2c35] dark:border-[#3d2a5d]"
                    animate={{ 
                      x: [0, 10, 0], 
                      y: [0, -10, 0],
                      rotate: [0, 3, 0]
                    }}
                    transition={{ 
                      duration: 12, 
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 1
                    }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="AI Innovation" 
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2c1a22]/80 to-transparent"></div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-slate-400 text-sm mb-2">Scroll to explore</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.section>
        
        {/* Stats Section */}
        <section 
          ref={statsRef} 
          className="py-20 bg-[#2c1a22]/5 dark:bg-[#1f1a2c]/5 relative overflow-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate={statsControls}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                { value: "98%", label: "Client Satisfaction", icon: "fas fa-smile" },
                { value: "40%", label: "Average Efficiency Increase", icon: "fas fa-chart-line" },
                { value: "250+", label: "Enterprise Clients", icon: "fas fa-building" },
                { value: "24/7", label: "Support & Monitoring", icon: "fas fa-headset" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                  className="bg-white dark:bg-[#2c1a22] rounded-xl p-6 shadow-lg border border-[#c8a951]/10 dark:border-[#9f7b42]/10 text-center relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c8a951]/5 to-transparent dark:from-[#9f7b42]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center text-[#c8a951] dark:text-[#9f7b42]">
                      <i className={`${stat.icon} text-xl`}></i>
                    </div>
                    <h3 className="text-3xl font-bold mb-2 text-[#2c1a22] dark:text-white">{stat.value}</h3>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <Testimonials
          title="What Our Clients Say"
          testimonials={testimonials}
          className="py-20"
        />
        
        {/* Case Studies Section */}
        <CaseStudyGrid
          title="Featured Case Studies"
          description="Explore how we've helped organizations achieve their business goals with AI and blockchain solutions."
          caseStudies={caseStudies}
          className="py-20 bg-[#2c1a22]/5 dark:bg-[#1f1a2c]/5"
        />
        
        {/* CTA Section */}
        <CTASection
          title="Ready to transform your business?"
          description="Schedule a consultation with our experts to explore how Codegx Technologies can help you achieve your goals."
          buttonText="Book a Consultation"
          buttonLink="/contact"
          variant="gradient"
        />
      </MainLayout>
    </>
  );
}
