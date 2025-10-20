import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Head } from "@/components/head";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CurrentProjects } from "@/components/Landing/CurrentProjects";
import { CTASection } from "@/components/layouts/CTASection";
import {
  InnovationDNAIcon,
  EnterpriseSecurityIcon,
  MeasurableResultsIcon,
  StrategicPartnershipIcon,
  AIMLIcon,
  DigitalTransformationIcon,
  CustomSoftwareIcon,
  InnovationValueIcon,
  CollaborationIcon,
  AgilityIcon,
  IntegrityIcon,
} from "@/components/icons/CustomSVGIcons";

export default function ProfessionalHome() {
  // Refs for scroll animations
  const heroRef = useRef<HTMLDivElement>(null);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  // Removed testimonials as they're replaced by the dynamic feedback section

  // Current Projects - TendaNow, CodeCrusher, BizGen
  const caseStudies = [
    {
      title: "TendaNow",
      description: "AI-powered accountability platform with WhatsApp integration. 42% increase in goal completion rates, 29% improvement in retention.",
      industry: "Behavioral Change / Wellness",
      logo: "https://via.placeholder.com/120x40?text=TendaNow",
      href: "/case-studies/tendanow",
    },
    {
      title: "CodeCrusher",
      description: "AI-augmented developer productivity platform. 68% reduction in code review time, 35% improvement in code quality metrics.",
      industry: "Developer Tools",
      logo: "https://via.placeholder.com/120x40?text=CodeCrusher",
      href: "/case-studies/codecrusher",
    },
    {
      title: "BizGen",
      description: "Predictive entrepreneurship platform for business validation. 52% faster ideation-to-validation cycles, 85% user satisfaction.",
      industry: "Entrepreneurship",
      logo: "https://via.placeholder.com/120x40?text=BizGen",
      href: "/case-studies/bizgen",
    },
  ];

  // Services offered (Cloud Solutions removed)
  const services = [
    {
      title: "AI Integration",
      description: "Seamlessly embed intelligent automation into your existing systems. We integrate custom AI solutions that enhance workflows, unlock hidden data insights, and accelerate decision-making across your enterprise.",
      icon: AIMLIcon,
    },
    {
      title: "AI & Machine Learning",
      description: "Build advanced ML models tailored to your business objectives. We develop intelligent systems that predict trends, optimize processes, and drive measurable competitive advantage through data-driven innovation.",
      icon: AIMLIcon,
    },
    {
      title: "Custom Software Development",
      description: "Purpose-built solutions engineered for your unique challenges. We create bespoke software that scales with your growth, integrates seamlessly with existing systems, and delivers exceptional business value.",
      icon: CustomSoftwareIcon,
    },
  ];

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = services.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

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
          className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden pt-4 md:pt-8"
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-7 space-y-4 md:space-y-6 flex flex-col items-center lg:items-start"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="inline-flex items-center px-4 py-1.5 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 rounded-full text-[#c8a951] dark:text-[#9f7b42] text-xs md:text-sm font-medium mb-2 border border-[#c8a951]/20 dark:border-[#9f7b42]/20"
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
                  className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight text-white"
                >
                  Transforming Businesses <br />
                  Through <span className="text-[#c8a951] dark:text-[#9f7b42]">Advanced</span> Technology
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-xs md:text-sm text-slate-300 max-w-2xl"
                >
                  Codegx Technologies delivers innovative solutions that drive digital transformation, operational efficiency, and sustainable growth for enterprises worldwide.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-3 pt-2 md:pt-4 w-full sm:w-auto"
                >
                  <Button
                    asChild
                    size="sm"
                    className="bg-[#c8a951] hover:bg-[#c8a951]/90 text-[#2c1a22] dark:bg-[#9f7b42] dark:hover:bg-[#9f7b42]/90 dark:text-[#1f1a2c] text-xs md:text-sm rounded-full px-6 md:px-8 w-full sm:w-auto"
                  >
                    <Link href="/contact">Schedule a Consultation</Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="border-[#c8a951] text-[#c8a951] hover:bg-[#c8a951]/10 dark:border-[#9f7b42] dark:text-[#9f7b42] dark:hover:bg-[#9f7b42]/10 text-xs md:text-sm rounded-full px-6 md:px-8 w-full sm:w-auto"
                  >
                    <Link href="/solutions">Explore Solutions</Link>
                  </Button>
                </motion.div>

                {/* Discover More Indicator - Centered Below Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="flex flex-col items-center pt-8 md:pt-12 lg:pt-16"
                >
                  <span className="text-slate-400 text-xs md:text-sm mb-2">Discover More</span>
                  <motion.svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="md:w-6 md:h-6"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </motion.svg>
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
        </motion.section>

        {/* About Section - Enterprise Grade */}
        <section className="py-12 md:py-16 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-[#121212] dark:to-[#1a1a1a] z-0"></div>

          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 z-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="about-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 20 H40 M20 0 V40" stroke="currentColor" strokeWidth="0.5" fill="none" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#about-pattern)" />
            </svg>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#c8a951]/5 dark:bg-[#9f7b42]/5 rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c8a951]/5 dark:bg-[#9f7b42]/5 rounded-full translate-x-1/3 translate-y-1/3 z-0"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-1.5 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 rounded-full text-[#c8a951] dark:text-[#9f7b42] text-xs md:text-sm font-medium mb-2 md:mb-3 border border-[#c8a951]/20 dark:border-[#9f7b42]/20"
              >
                Our Identity
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl md:text-3xl font-bold mb-2 md:mb-3 text-[#2c1a22] dark:text-white"
              >
                Who We <span className="text-[#c8a951] dark:text-[#9f7b42]">Are</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xs md:text-sm text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8"
              >
                Codegx Technologies is an innovative technology startup focused on delivering cutting-edge AI, digital transformation, and custom software development solutions that help businesses thrive in the digital age.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-5"
              >
                <div className="relative">
                  {/* Background layers for depth */}
                  <div className="absolute -right-6 -bottom-6 left-6 top-6 border-2 border-[#c8a951]/20 dark:border-[#9f7b42]/20 rounded-xl"></div>
                  <div className="absolute -right-3 -bottom-3 left-9 top-9 border-2 border-[#c8a951]/10 dark:border-[#9f7b42]/10 rounded-xl"></div>

                  {/* Main image with overlay */}
                  <div className="relative rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Codegx Team"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2c1a22]/80 via-[#2c1a22]/20 to-transparent"></div>

                    {/* Vision overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                        <div className="text-lg font-bold text-white mb-1">Innovative Solutions for Tomorrow's Challenges</div>
                        <div className="text-sm text-white/80">Driving Digital Transformation</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mission statement */}
                <div className="mt-6 bg-white dark:bg-[#2c1a22] p-4 rounded-xl shadow-lg border border-gray-100 dark:border-[#3d2128] relative">
                  <div className="absolute top-0 left-8 transform -translate-y-1/2 bg-[#c8a951] dark:bg-[#9f7b42] text-white px-4 py-2 rounded-full text-xs md:text-sm font-medium">
                    Our Mission
                  </div>
                  <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 mt-2">
                    "To empower organizations through innovative technology solutions that drive meaningful business transformation and sustainable growth."
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="lg:col-span-7"
              >
                <div className="bg-white dark:bg-[#2c1a22] rounded-xl p-6 shadow-xl border border-gray-100 dark:border-[#3d2128]">
                  <h3 className="text-lg md:text-xl font-bold mb-4 text-[#2c1a22] dark:text-white">Enterprise Excellence</h3>

                  <div className="space-y-4">
                    <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300">
                      As an innovative technology startup, we bring fresh perspectives and cutting-edge approaches to solving business challenges. Our agile team of talented engineers, data scientists, and creative problem-solvers is passionate about helping organizations of all sizes harness the power of technology.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center text-[#c8a951] dark:text-[#9f7b42]">
                            <InnovationDNAIcon />
                          </div>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm md:text-base font-semibold text-[#2c1a22] dark:text-white">Innovation DNA</h4>
                          <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 mt-1">
                            We pioneer cutting-edge solutions that address the most complex enterprise challenges, staying ahead of technological trends.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center text-[#c8a951] dark:text-[#9f7b42]">
                            <EnterpriseSecurityIcon />
                          </div>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm md:text-base font-semibold text-[#2c1a22] dark:text-white">Enterprise Security</h4>
                          <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 mt-1">
                            Our solutions adhere to the highest security standards, ensuring your data and systems remain protected at all times.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center text-[#c8a951] dark:text-[#9f7b42]">
                            <MeasurableResultsIcon />
                          </div>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm md:text-base font-semibold text-[#2c1a22] dark:text-white">Measurable Results</h4>
                          <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 mt-1">
                            We focus on delivering quantifiable business outcomes with clear ROI metrics that demonstrate tangible value.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center text-[#c8a951] dark:text-[#9f7b42]">
                            <StrategicPartnershipIcon />
                          </div>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm md:text-base font-semibold text-[#2c1a22] dark:text-white">Strategic Partnership</h4>
                          <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 mt-1">
                            We build long-term relationships, serving as trusted advisors who are invested in your organization's success.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Core values */}
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="text-sm md:text-base font-semibold text-[#2c1a22] dark:text-white mb-3">Our Core Values</h4>
                      <div className="flex flex-wrap gap-2">
                        <div className="bg-gray-100 dark:bg-[#1a1a1a] px-3 py-1 rounded-lg text-xs font-medium text-gray-800 dark:text-gray-200 flex items-center">
                          <div className="w-4 h-4 text-[#c8a951] dark:text-[#9f7b42] mr-2 flex items-center justify-center">
                            <InnovationValueIcon />
                          </div>
                          Innovation
                        </div>
                        <div className="bg-gray-100 dark:bg-[#1a1a1a] px-3 py-1 rounded-lg text-xs font-medium text-gray-800 dark:text-gray-200 flex items-center">
                          <div className="w-4 h-4 text-[#c8a951] dark:text-[#9f7b42] mr-2 flex items-center justify-center">
                            <CollaborationIcon />
                          </div>
                          Collaboration
                        </div>
                        <div className="bg-gray-100 dark:bg-[#1a1a1a] px-3 py-1 rounded-lg text-xs font-medium text-gray-800 dark:text-gray-200 flex items-center">
                          <div className="w-4 h-4 text-[#c8a951] dark:text-[#9f7b42] mr-2 flex items-center justify-center">
                            <AgilityIcon />
                          </div>
                          Agility
                        </div>
                        <div className="bg-gray-100 dark:bg-[#1a1a1a] px-3 py-1 rounded-lg text-xs font-medium text-gray-800 dark:text-gray-200 flex items-center">
                          <div className="w-4 h-4 text-[#c8a951] dark:text-[#9f7b42] mr-2 flex items-center justify-center">
                            <IntegrityIcon />
                          </div>
                          Integrity
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section - Enterprise Grade */}
        <section className="py-12 md:py-16 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-[#1a1a1a] dark:to-[#121212] z-0"></div>

          {/* Decorative elements */}
          <div className="absolute top-40 right-0 w-96 h-96 bg-[#c8a951]/5 dark:bg-[#9f7b42]/5 rounded-full translate-x-1/2 z-0"></div>
          <div className="absolute bottom-20 left-0 w-64 h-64 bg-[#c8a951]/5 dark:bg-[#9f7b42]/5 rounded-full -translate-x-1/2 z-0"></div>

          {/* Circuit board pattern */}
          <div className="absolute inset-0 z-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 50 H100 M50 0 V100 M25 25 L75 75 M75 25 L25 75" stroke="currentColor" strokeWidth="0.5" fill="none" />
                <circle cx="50" cy="50" r="3" fill="currentColor" />
                <circle cx="25" cy="25" r="2" fill="currentColor" />
                <circle cx="75" cy="25" r="2" fill="currentColor" />
                <circle cx="25" cy="75" r="2" fill="currentColor" />
                <circle cx="75" cy="75" r="2" fill="currentColor" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-1.5 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 rounded-full text-[#c8a951] dark:text-[#9f7b42] text-xs md:text-sm font-medium mb-2 md:mb-3 border border-[#c8a951]/20 dark:border-[#9f7b42]/20"
              >
                Enterprise Solutions
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl md:text-3xl font-bold mb-2 md:mb-3 text-[#2c1a22] dark:text-white"
              >
                Our <span className="text-[#c8a951] dark:text-[#9f7b42]">Services</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xs md:text-sm text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
              >
                We deliver a comprehensive suite of enterprise-grade technology solutions designed to address your organization's most complex challenges and drive sustainable growth.
              </motion.p>
            </div>

            {/* Featured Service */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 md:mb-12"
            >
              <div className="bg-white dark:bg-[#2c1a22] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-[#3d2128]">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <div className="inline-flex items-center px-3 py-1 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 rounded-full text-[#c8a951] dark:text-[#9f7b42] text-xs md:text-sm font-medium mb-3 self-start">
                      Featured Service
                    </div>

                    <h3 className="text-lg md:text-xl font-bold mb-3 text-[#2c1a22] dark:text-white">
                      Enterprise AI Solutions
                    </h3>

                    <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 mb-4">
                      Our flagship AI solutions leverage cutting-edge machine learning, natural language processing, and computer vision technologies to transform your business operations, enhance decision-making, and create competitive advantage.
                    </p>

                    <ul className="space-y-2 mb-4">
                      {[
                        "Custom AI model development and deployment",
                        "Predictive analytics and forecasting systems",
                        "Intelligent process automation",
                        "Computer vision for quality control and monitoring",
                        "Natural language processing for document analysis"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#c8a951]/20 dark:bg-[#9f7b42]/20 flex items-center justify-center mt-0.5 mr-2">
                            <i className="fas fa-check text-xs text-[#c8a951] dark:text-[#9f7b42]"></i>
                          </div>
                          <span className="text-xs md:text-sm text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      className="bg-[#c8a951] hover:bg-[#c8a951]/90 text-[#2c1a22] dark:bg-[#9f7b42] dark:hover:bg-[#9f7b42]/90 dark:text-[#1f1a2c] self-start"
                    >
                      <Link href="/solutions/ai">Learn More</Link>
                    </Button>
                  </div>

                  <div className="relative h-64 lg:h-auto min-h-[400px]">
                    <img
                      src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                      alt="Enterprise AI Solutions"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2c1a22]/70 to-[#2c1a22]/30"></div>

                    {/* Stats overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-white mb-1">40%</div>
                          <div className="text-xs text-white/80">Average Efficiency Gain</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-white mb-1">3.5x</div>
                          <div className="text-xs text-white/80">ROI Within 12 Months</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Service Carousel - Desktop: 3 items, Mobile: 1 item */}
            <div className="relative">
              {/* Desktop View - Show all 3 */}
              <div className="hidden lg:grid lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="bg-white dark:bg-[#2c1a22] rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-[#3d2128] group flex flex-col h-full"
                  >
                    {/* Service header with gradient */}
                    <div className="h-3 bg-gradient-to-r from-[#c8a951] to-[#d4b968] dark:from-[#9f7b42] dark:to-[#b08c4f]"></div>

                    <div className="p-8 flex flex-col flex-grow">
                      <div className="w-16 h-16 rounded-lg bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center text-[#c8a951] dark:text-[#9f7b42] mb-6 group-hover:bg-[#c8a951]/20 dark:group-hover:bg-[#9f7b42]/20 transition-colors">
                        <service.icon />
                      </div>

                      <h3 className="text-xl font-bold mb-4 text-[#2c1a22] dark:text-white">{service.title}</h3>

                      <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">{service.description}</p>

                      <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
                        <Link
                          href={`/solutions/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-[#c8a951] dark:text-[#9f7b42] font-medium text-sm hover:underline flex items-center"
                        >
                          Learn More
                          <i className="fas fa-arrow-right ml-2 text-xs transition-transform group-hover:translate-x-1"></i>
                        </Link>

                        {/* Enterprise badge */}
                        <div className="bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 px-2 py-1 rounded text-xs font-medium text-[#c8a951] dark:text-[#9f7b42]">
                          Enterprise
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mobile View - Carousel with 1 item */}
              <div className="lg:hidden relative">
                <div className="overflow-hidden">
                  <motion.div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {services.map((service, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-2">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6 }}
                          className="bg-white dark:bg-[#2c1a22] rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-[#3d2128] flex flex-col h-full"
                        >
                          {/* Service header with gradient */}
                          <div className="h-3 bg-gradient-to-r from-[#c8a951] to-[#d4b968] dark:from-[#9f7b42] dark:to-[#b08c4f]"></div>

                          <div className="p-8 flex flex-col flex-grow">
                            <div className="w-16 h-16 rounded-lg bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center text-[#c8a951] dark:text-[#9f7b42] mb-6">
                              <service.icon />
                            </div>

                            <h3 className="text-xl font-bold mb-4 text-[#2c1a22] dark:text-white">{service.title}</h3>

                            <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">{service.description}</p>

                            <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
                              <Link
                                href={`/solutions/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                                className="text-[#c8a951] dark:text-[#9f7b42] font-medium text-sm hover:underline flex items-center"
                              >
                                Learn More
                                <i className="fas fa-arrow-right ml-2 text-xs"></i>
                              </Link>

                              {/* Enterprise badge */}
                              <div className="bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 px-2 py-1 rounded text-xs font-medium text-[#c8a951] dark:text-[#9f7b42]">
                                Enterprise
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-[#2c1a22] p-2 rounded-full shadow-lg border border-gray-200 dark:border-[#3d2128] hover:bg-[#c8a951]/10 dark:hover:bg-[#9f7b42]/10 transition-colors z-10"
                  aria-label="Previous service"
                >
                  <ChevronLeft className="w-5 h-5 text-[#c8a951] dark:text-[#9f7b42]" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-[#2c1a22] p-2 rounded-full shadow-lg border border-gray-200 dark:border-[#3d2128] hover:bg-[#c8a951]/10 dark:hover:bg-[#9f7b42]/10 transition-colors z-10"
                  aria-label="Next service"
                >
                  <ChevronRight className="w-5 h-5 text-[#c8a951] dark:text-[#9f7b42]" />
                </button>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? 'w-8 bg-[#c8a951] dark:bg-[#9f7b42]'
                          : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-[#c8a951]/50 dark:hover:bg-[#9f7b42]/50'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Services illustration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 relative overflow-hidden"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1581089781785-603411fa81e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="AI Technology Solutions"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c1a22]/90 via-[#2c1a22]/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Transforming Ideas into Intelligent Solutions</h3>
                  <p className="text-slate-300 max-w-2xl mb-6">Our AI-powered technologies help businesses automate processes, gain insights, and create exceptional customer experiences.</p>
                </div>
              </div>
            </motion.div>

            {/* Enterprise solutions banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 md:mt-12 bg-gradient-to-r from-[#2c1a22] to-[#3d2128] dark:from-[#1f1a2c] dark:to-[#2a1f3d] rounded-2xl p-6 md:p-8 relative overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="enterprise-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1" fill="currentColor" />
                    <circle cx="0" cy="0" r="1" fill="currentColor" />
                    <circle cx="0" cy="40" r="1" fill="currentColor" />
                    <circle cx="40" cy="0" r="1" fill="currentColor" />
                    <circle cx="40" cy="40" r="1" fill="currentColor" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#enterprise-pattern)" />
                </svg>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
                <div className="lg:col-span-8">
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-3">
                    Ready for Enterprise-Grade Solutions?
                  </h3>
                  <p className="text-xs md:text-sm text-slate-300 mb-4 lg:mb-0 max-w-2xl">
                    Our team of experts is ready to help you identify the right solutions for your organization's unique challenges and objectives.
                  </p>
                </div>
                <div className="lg:col-span-4 flex justify-center lg:justify-end">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#c8a951] hover:bg-[#c8a951]/90 text-[#2c1a22] dark:bg-[#9f7b42] dark:hover:bg-[#9f7b42]/90 dark:text-[#1f1a2c]"
                  >
                    <Link href="/contact">Schedule a Consultation</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>



        {/* Current Projects Section */}
        <div className="py-12 md:py-16 bg-gray-50 dark:bg-[#1a1a1a]">
          <div className="container mx-auto px-4">
            <CurrentProjects
              caseStudies={caseStudies}
              className="w-full"
            />
          </div>
        </div>

        {/* CTA Section */}
        <CTASection
          title="Explore Our Complete Project Portfolio"
          description="Discover all our case studies and see how we've helped organizations across industries achieve their goals."
          buttonText="View All Projects"
          buttonLink="/case-studies"
          variant="gradient"
        />
      </MainLayout>
    </>
  );
}