import React, { useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Head } from "@/components/head";
import { CTASection } from "@/components/layouts/CTASection";
import { FeedbackSection } from "@/components/sections/FeedbackSection";
import { CaseStudyGrid } from "@/components/ui/CaseStudyCard";
import { Badge } from "@/components/ui/badge";

export default function ProfessionalHome() {
  // Refs for scroll animations
  const heroRef = useRef<HTMLDivElement>(null);

  // Animation controls
  const controls = useAnimation();

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  // Removed testimonials as they're replaced by the dynamic feedback section

  // Sample case studies
  const caseStudies = [
    {
      title: "Enterprise AI Integration",
      description: "Implemented a comprehensive AI solution that increased operational efficiency by 35% and reduced costs by 28%.",
      industry: "Manufacturing",
      logo: "https://via.placeholder.com/120x40?text=EnterpriseAI",
      href: "/case-studies/enterprise-ai",
    },
    {
      title: "Predictive Analytics Platform",
      description: "Developed a custom predictive analytics platform that improved decision-making accuracy by 42% and accelerated time-to-insight.",
      industry: "Healthcare",
      logo: "https://via.placeholder.com/120x40?text=HealthTech",
      href: "/case-studies/predictive-analytics",
    },
    {
      title: "Digital Transformation Initiative",
      description: "Led a comprehensive digital transformation that modernized legacy systems and created a 65% improvement in customer satisfaction.",
      industry: "Financial Services",
      logo: "https://via.placeholder.com/120x40?text=FinTech",
      href: "/case-studies/digital-transformation",
    },
  ];

  // Services offered
  const services = [
    {
      title: "AI & Machine Learning",
      description: "Custom AI solutions that solve complex business challenges and drive innovation.",
      icon: "fas fa-brain",
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation strategies that modernize your business.",
      icon: "fas fa-sync-alt",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable, secure cloud infrastructure and migration services.",
      icon: "fas fa-cloud",
    },
    {
      title: "Custom Software Development",
      description: "Bespoke software solutions tailored to your unique business needs.",
      icon: "fas fa-code",
    },
  ];

  return (
    <>
      <Head
        title="Codegx Technologies | Enterprise Technology Solutions"
        description="Codegx Technologies delivers innovative technology solutions that drive business growth and digital transformation."
      />

      <MainLayout
        withContainer={false}
        navbarVariant="transparent"
        showSearch={false}
      >
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="relative min-h-[90vh] flex items-center overflow-hidden"
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY
          }}
        >
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2c1a22] via-[#3d2128] to-[#2c1a22] dark:from-[#1f1a2c] dark:via-[#2a1f3d] dark:to-[#1f1a2c] z-0"></div>

          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 z-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 20 H40 M20 0 V40" stroke="currentColor" strokeWidth="0.5" fill="none" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>

          {/* Hero Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-7 space-y-8"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="inline-flex items-center px-4 py-1.5 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 rounded-full text-[#c8a951] dark:text-[#9f7b42] text-sm font-medium mb-2 border border-[#c8a951]/20 dark:border-[#9f7b42]/20"
                >
                  <span className="flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#c8a951] dark:bg-[#9f7b42] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8a951] dark:bg-[#9f7b42]"></span>
                  </span>
                  Innovation Through Technology
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white"
                >
                  Transforming Businesses <br />
                  Through <span className="text-[#c8a951] dark:text-[#9f7b42]">Advanced</span> Technology
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-xl text-slate-300 max-w-2xl"
                >
                  Codegx Technologies delivers innovative solutions that drive digital transformation, operational efficiency, and sustainable growth for enterprises worldwide.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#c8a951] hover:bg-[#c8a951]/90 text-[#2c1a22] dark:bg-[#9f7b42] dark:hover:bg-[#9f7b42]/90 dark:text-[#1f1a2c]"
                  >
                    <Link href="/contact">Schedule a Consultation</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-[#c8a951] text-[#c8a951] hover:bg-[#c8a951]/10 dark:border-[#9f7b42] dark:text-[#9f7b42] dark:hover:bg-[#9f7b42]/10"
                  >
                    <Link href="/solutions">Explore Solutions</Link>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="lg:col-span-5 relative hidden lg:block"
              >
                {/* Hero image with overlays */}
                <div className="relative">
                  <div className="absolute -left-6 -top-6 right-6 bottom-6 border-2 border-[#c8a951]/20 dark:border-[#9f7b42]/20 rounded-xl"></div>
                  <div className="absolute -left-3 -top-3 right-9 bottom-9 border-2 border-[#c8a951]/10 dark:border-[#9f7b42]/10 rounded-xl"></div>
                  <div className="relative rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Digital Transformation"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2c1a22]/80 via-[#2c1a22]/20 to-transparent"></div>

                    {/* Floating badge */}
                    <div className="absolute bottom-6 left-6 bg-[#c8a951]/90 dark:bg-[#9f7b42]/90 text-[#2c1a22] dark:text-[#1f1a2c] px-4 py-2 rounded-lg font-medium shadow-lg">
                      Enterprise Solutions
                    </div>
                  </div>
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
            <span className="text-slate-400 text-sm mb-2">Discover More</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <section className="py-20 bg-white dark:bg-[#121212]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-[#2c1a22] dark:text-white">Who We Are</h2>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                  Codegx Technologies is a leading technology solutions provider specializing in AI, digital transformation, and custom software development. We partner with enterprises to solve complex business challenges and drive innovation.
                </p>
                <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
                  With a team of experienced engineers, data scientists, and business consultants, we deliver end-to-end solutions that create measurable business value and competitive advantage.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center text-[#c8a951] dark:text-[#9f7b42] mr-4">
                      <i className="fas fa-users text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2c1a22] dark:text-white">Expert Team</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Industry-leading professionals</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center text-[#c8a951] dark:text-[#9f7b42] mr-4">
                      <i className="fas fa-cogs text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2c1a22] dark:text-white">Proven Process</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Reliable, repeatable results</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 p-6 rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-[#c8a951]/20 dark:bg-[#9f7b42]/20 flex items-center justify-center text-[#c8a951] dark:text-[#9f7b42] mb-4">
                        <i className="fas fa-lightbulb text-xl"></i>
                      </div>
                      <h3 className="font-semibold mb-2 text-[#2c1a22] dark:text-white">Innovation</h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300">Cutting-edge solutions for modern challenges</p>
                    </div>
                    <div className="bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 p-6 rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-[#c8a951]/20 dark:bg-[#9f7b42]/20 flex items-center justify-center text-[#c8a951] dark:text-[#9f7b42] mb-4">
                        <i className="fas fa-shield-alt text-xl"></i>
                      </div>
                      <h3 className="font-semibold mb-2 text-[#2c1a22] dark:text-white">Security</h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300">Enterprise-grade security in everything we build</p>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 p-6 rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-[#c8a951]/20 dark:bg-[#9f7b42]/20 flex items-center justify-center text-[#c8a951] dark:text-[#9f7b42] mb-4">
                        <i className="fas fa-chart-line text-xl"></i>
                      </div>
                      <h3 className="font-semibold mb-2 text-[#2c1a22] dark:text-white">Results</h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300">Measurable outcomes and ROI</p>
                    </div>
                    <div className="bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 p-6 rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-[#c8a951]/20 dark:bg-[#9f7b42]/20 flex items-center justify-center text-[#c8a951] dark:text-[#9f7b42] mb-4">
                        <i className="fas fa-handshake text-xl"></i>
                      </div>
                      <h3 className="font-semibold mb-2 text-[#2c1a22] dark:text-white">Partnership</h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300">Long-term relationships built on trust</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50 dark:bg-[#1a1a1a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold mb-4 text-[#2c1a22] dark:text-white"
              >
                Our Services
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
              >
                We offer a comprehensive suite of technology solutions designed to address your most pressing business challenges.
              </motion.p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
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
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                  className="bg-white dark:bg-[#2c1a22] rounded-xl p-8 shadow-lg border border-gray-100 dark:border-[#3d2128] hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center text-[#c8a951] dark:text-[#9f7b42] mb-6">
                    <i className={`${service.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#2c1a22] dark:text-white">{service.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Feedback Section */}
        <FeedbackSection
          title="Client Feedback"
          description="See what our clients have to say and share your own experience with our services."
          className="py-20"
        />

        {/* Case Studies Section */}
        <CaseStudyGrid
          title="Featured Case Studies"
          description="Explore how we've helped organizations achieve their business goals with our innovative technology solutions."
          caseStudies={caseStudies}
          className="py-20 bg-gray-50 dark:bg-[#1a1a1a]"
        />

        {/* CTA Section */}
        <CTASection
          title="Ready to transform your business?"
          description="Schedule a consultation with our experts to explore how Codegx Technologies can help you achieve your goals."
          buttonText="Get Started Today"
          buttonLink="/contact"
          variant="gradient"
        />
      </MainLayout>
    </>
  );
}
