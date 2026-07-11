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
      description: "Accountability and digital portfolio platform turning goals, learning progress, and completed work into verifiable records of growth across Web, WhatsApp, and Telegram.",
      industry: "Learning Journey / Portfolio Evidence",
      logo: "https://via.placeholder.com/120x40?text=TendaNow",
      href: "/case-studies/tendanow",
    },
    {
      title: "CodeCrusher",
      description: "Semantic code intelligence for enterprise teams. Discover hidden patterns, enforce architecture, and reduce technical debt through systems that map how your code actually behaves.",
      industry: "Developer Tools",
      logo: "https://via.placeholder.com/120x40?text=CodeCrusher",
      href: "/case-studies/codecrusher",
    },
    {
      title: "BizGen",
      description: "The thinking partner for founders. Validate market opportunities 3-4x faster with real market signals, founder community insights, and predictive modeling.",
      industry: "Entrepreneurship",
      logo: "https://via.placeholder.com/120x40?text=BizGen",
      href: "/case-studies/bizgen",
    },
  ];

  // Services offered (Cloud Solutions removed)
  const services = [
    {
      title: "Trusted AI Operations",
      description: "Embed AI into enterprise operations with clear controls, traceability, observability, and accountable decision boundaries.",
      icon: AIMLIcon,
    },
    {
      title: "Operational Intelligence",
      description: "Build systems that sharpen decision-making, automate intricate operations, and keep critical workflows visible under pressure.",
      icon: AIMLIcon,
    },
    {
      title: "Enterprise Software Engineering",
      description: "Purpose-built platforms engineered for security, scale, maintainability, and long-term operational permanence.",
      icon: CustomSoftwareIcon,
    },
  ];

  const principalPlatforms = [
    {
      name: "NDII",
      summary: "Operational intelligence for critical infrastructure, deterministic analysis, policy-governed recommendations, and traceability.",
      type: "Operational Intelligence",
    },
    {
      name: "NDII-Kernel",
      summary: "Reusable execution and orchestration framework for governed AI systems with stringent operational requirements.",
      type: "Execution Framework",
    },
    {
      name: "RPEK-Lite",
      summary: "Digital government platform for modern public service delivery and administrative transformation.",
      type: "Digital Government",
    },
    {
      name: "Wakala OS",
      summary: "Automation operating system for agentic workflows and structured business process automation.",
      type: "Governed Automation",
    },
    {
      name: "CodeCrusher",
      summary: "AI-assisted developer platform for repository transformation and systematic automated refactoring.",
      type: "Developer Platform",
    },
    {
      name: "BizGen",
      summary: "Multilingual business intelligence platform for concept generation and entrepreneurial development.",
      type: "Business Intelligence",
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
        title="Codegx Technologies | Dependable Software & Governed Systems"
        description="Codegx Technologies builds dependable software platforms, governed workflow systems, and operational intelligence for organizations that require integrity, security, and production discipline."
      />

      <MainLayout
        withContainer={false}
        navbarVariant="transparent"
        showSearch={false}
      >
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="relative overflow-hidden pt-6 pb-10 sm:pt-8 sm:pb-12 md:min-h-[80vh] md:flex md:items-center md:pt-20 md:pb-0"
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY
          }}
        >
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[#2c1a22] dark:bg-[#1f1a2c] z-0"></div>

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
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-7 space-y-4 md:space-y-6 flex flex-col items-start"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="inline-flex max-w-full items-center px-3 sm:px-4 py-1.5 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 rounded-full text-[#c8a951] dark:text-[#9f7b42] text-[11px] sm:text-xs md:text-sm font-medium mb-1 md:mb-2 border border-[#c8a951]/20 dark:border-[#9f7b42]/20"
                >
                  <i className="fas fa-shield-alt mr-2 shrink-0"></i>
                  <span className="truncate">Dependable Software & Governed Systems</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold tracking-tight leading-tight text-white text-left max-w-3xl"
                >
                  Engineering Judgement for Systems That{" "}
                  <span className="text-[#c8a951] dark:text-[#9f7b42]">Cannot Fail Quietly</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-sm md:text-base lg:text-sm text-slate-300 max-w-2xl leading-relaxed"
                >
                  Building Intelligent Systems. Powering the Future. We construct dependable software platforms for organizations where system integrity, security, and operational permanence are not optional extras.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.55 }}
                  className="text-sm md:text-base lg:text-sm text-[#c8a951] dark:text-[#9f7b42] max-w-2xl font-medium leading-relaxed"
                >
                  Deterministic where it must be. Adaptive where it can be.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.58 }}
                  className="w-full lg:hidden"
                >
                  <div className="rounded-xl border border-[#c8a951]/20 bg-[#111827] shadow-xl overflow-hidden">
                    <img
                      src="/assets/brand/codegx-full-lockup.webp"
                      alt="Codegx Technologies official logo"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-3 pt-2 md:pt-4 w-full sm:w-auto"
                >
                  <Button
                    asChild
                    size="sm"
                    className="min-h-11 bg-[#c8a951] hover:bg-[#c8a951]/90 text-[#2c1a22] dark:bg-[#9f7b42] dark:hover:bg-[#9f7b42]/90 dark:text-[#1f1a2c] text-sm rounded-full px-6 md:px-8 w-full sm:w-auto"
                  >
                    <Link href="/contact">Schedule a Consultation</Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="min-h-11 border-[#c8a951] text-[#c8a951] hover:bg-[#c8a951]/10 dark:border-[#9f7b42] dark:text-[#9f7b42] dark:hover:bg-[#9f7b42]/10 text-sm rounded-full px-6 md:px-8 w-full sm:w-auto"
                  >
                    <Link href="/services">Our Services</Link>
                  </Button>
                </motion.div>

                {/* Discover More Indicator */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="hidden md:flex flex-col items-center pt-8 md:pt-12 lg:pt-16"
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
                {/* Spacious brand lockup: full logo belongs here, not in the navbar. */}
                <div className="relative">
                  <div className="absolute -left-6 -top-6 right-6 bottom-6 border-2 border-[#c8a951]/20 dark:border-[#9f7b42]/20 rounded-xl"></div>
                  <div className="absolute -left-3 -top-3 right-9 bottom-9 border-2 border-[#c8a951]/10 dark:border-[#9f7b42]/10 rounded-xl"></div>
                  <div className="relative rounded-xl overflow-hidden shadow-2xl bg-[#111827]">
                    <img
                      src="/assets/brand/codegx-full-lockup.webp"
                      alt="Codegx Technologies official logo"
                      className="w-full h-auto object-contain rounded-xl"
                    />

                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* About Section - Enterprise Grade */}
        <section className="py-14 md:py-24 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-white dark:bg-[#121212] z-0"></div>

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

          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mx-auto mb-12 max-w-3xl text-center md:mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-1.5 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 rounded-full text-[#c8a951] dark:text-[#9f7b42] text-xs md:text-sm font-medium mb-5 border border-[#c8a951]/20 dark:border-[#9f7b42]/20"
              >
                Our Identity
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl md:text-3xl font-bold mb-5 text-[#2c1a22] dark:text-white"
              >
                Who We <span className="text-[#c8a951] dark:text-[#9f7b42]">Are</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xs md:text-sm text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
              >
                Codegx Technologies constructs dependable software platforms for organizations that require strict operational governance. The practice unites resilient engineering with practical AI governance to produce systems that are secure, scalable, and maintainable long after launch.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-5 lg:pt-4"
              >
                <div className="relative">
                  {/* Background layers for depth */}
                  <div className="absolute -right-6 -bottom-6 left-6 top-6 border-2 border-[#c8a951]/20 dark:border-[#9f7b42]/20 rounded-xl"></div>
                  <div className="absolute -right-3 -bottom-3 left-9 top-9 border-2 border-[#c8a951]/10 dark:border-[#9f7b42]/10 rounded-xl"></div>

                  <div
                    className="relative min-h-[340px] overflow-hidden rounded-xl border border-[#c8a951]/20 bg-[#101014] shadow-2xl md:min-h-[420px]"
                    aria-label="Enterprise systems architecture visual"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1769147339214-076740872485?auto=format&fit=crop&w=1200&h=800&q=85"
                      alt="Precision engineering blueprint workspace"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2c1a22]/78 via-[#2c1a22]/45 to-black/55" />
                    <svg className="hidden absolute inset-0 h-full w-full opacity-15" viewBox="0 0 900 560" role="img" aria-hidden="true">
                      <defs>
                        <pattern id="identity-grid" width="44" height="44" patternUnits="userSpaceOnUse">
                          <path d="M44 0H0V44" fill="none" stroke="rgba(200,169,81,0.12)" strokeWidth="1" />
                        </pattern>
                      </defs>
                      <rect width="900" height="560" fill="url(#identity-grid)" />
                      <g fill="none" stroke="rgba(200,169,81,0.55)" strokeWidth="2">
                        <path d="M160 280H320" />
                        <path d="M580 280H740" />
                        <path d="M450 160V230" />
                        <path d="M450 330V400" />
                        <path d="M320 280C360 220 400 200 450 230" />
                        <path d="M580 280C540 340 500 360 450 330" />
                      </g>
                      <g>
                        <rect x="320" y="230" width="260" height="100" rx="14" fill="rgba(200,169,81,0.14)" stroke="rgba(200,169,81,0.55)" />
                        <text x="450" y="275" textAnchor="middle" fill="#f8f3df" fontSize="20" fontWeight="700">GOVERNANCE CORE</text>
                        <text x="450" y="302" textAnchor="middle" fill="rgba(248,243,223,0.74)" fontSize="13">policy • observability • security</text>
                      </g>
                      {[
                        [86, 242, "INPUTS"],
                        [690, 242, "SYSTEMS"],
                        [352, 82, "CONTROL"],
                        [350, 410, "AUDIT"],
                      ].map(([x, y, label]) => (
                        <g key={label as string}>
                          <rect x={x as number} y={y as number} width="160" height="76" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.16)" />
                          <circle cx={(x as number) + 28} cy={(y as number) + 38} r="8" fill="#c8a951" />
                          <text x={(x as number) + 52} y={(y as number) + 43} fill="rgba(255,255,255,0.82)" fontSize="15" fontWeight="700">{label as string}</text>
                        </g>
                      ))}
                    </svg>
                    <div className="hidden absolute inset-x-6 top-8 bottom-28 [perspective:900px] md:inset-x-10">
                      <div className="relative h-full w-full [transform-style:preserve-3d] [transform:rotateX(50deg)_rotateZ(-10deg)]">
                        <div className="absolute left-[28%] top-[34%] h-28 w-[44%] rounded-xl border border-[#c8a951]/60 bg-[#c8a951]/20 shadow-[0_28px_60px_rgba(0,0,0,0.46),0_0_30px_rgba(200,169,81,0.18)] [transform:translateZ(58px)]">
                          <div className="absolute inset-x-3 top-3 h-px bg-[#c8a951]/50" />
                          <div className="flex h-full flex-col items-center justify-center px-4 text-center [transform:rotateZ(10deg)_rotateX(-50deg)_scale(1.14)]">
                            <div className="text-[11px] font-semibold tracking-[0.18em] text-[#c8a951]">GOVERNANCE CORE</div>
                            <div className="mt-1 text-base font-bold text-white md:text-lg">Controls by Design</div>
                            <div className="mt-1 text-[10px] text-white/70 md:text-xs">Policy | Observability | Security</div>
                          </div>
                        </div>

                        {[
                          ["INPUTS", "left-[0%] top-[39%]"],
                          ["SYSTEMS", "right-[0%] top-[39%]"],
                          ["CONTROL", "left-[32%] top-[0%]"],
                          ["AUDIT", "left-[32%] bottom-[0%]"],
                        ].map(([label, position]) => (
                          <div
                            key={label}
                            className={`${position} absolute h-24 w-40 rounded-lg border border-white/20 bg-white/[0.09] shadow-[0_18px_40px_rgba(0,0,0,0.36)] [transform:translateZ(32px)]`}
                          >
                            <div className="absolute left-4 top-4 h-2 w-2 rounded-full bg-[#c8a951]" />
                            <div className="flex h-full items-center justify-center text-[13px] font-bold tracking-[0.12em] text-white [transform:rotateZ(10deg)_rotateX(-50deg)_scale(1.12)] md:text-sm">
                              {label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="hidden absolute inset-x-6 top-10 bottom-32 [perspective:1000px] md:inset-x-10 md:top-12">
                      <div className="relative mx-auto h-full max-w-[460px] [transform-style:preserve-3d]">
                        <div className="absolute inset-x-12 top-24 h-28 rounded-[18px] bg-black/35 blur-2xl md:top-32" />

                        <div className="absolute left-[12%] right-[8%] top-[22%] h-28 rounded-2xl border border-white/14 bg-white/[0.08] shadow-[0_22px_50px_rgba(0,0,0,0.34)] [transform:rotateX(58deg)_rotateZ(-12deg)_translateZ(4px)]" />
                        <div className="absolute left-[7%] right-[13%] top-[29%] h-28 rounded-2xl border border-[#c8a951]/25 bg-[#c8a951]/10 shadow-[0_24px_55px_rgba(0,0,0,0.38)] [transform:rotateX(58deg)_rotateZ(-12deg)_translateZ(18px)]" />

                        <div className="absolute left-[3%] right-[3%] top-[36%] rounded-2xl border border-[#c8a951]/45 bg-[#2c1a22]/92 p-5 shadow-[0_30px_70px_rgba(0,0,0,0.52),0_0_34px_rgba(200,169,81,0.14)] [transform:rotateX(58deg)_rotateZ(-12deg)_translateZ(38px)]">
                          <div className="flex items-center justify-between gap-4 [transform:rotateZ(12deg)_rotateX(-58deg)_scale(1.04)]">
                            <div>
                              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c8a951]">Governance Core</div>
                              <div className="mt-2 text-xl font-bold text-white md:text-2xl">Controls by Design</div>
                            </div>
                            <div className="hidden rounded-full border border-[#c8a951]/35 bg-[#c8a951]/10 px-3 py-1 text-xs font-medium text-[#e6d391] sm:block">
                              Traceable
                            </div>
                          </div>
                        </div>

                        <div className="absolute left-[5%] top-[9%] rounded-full border border-white/12 bg-black/25 px-4 py-2 text-xs font-semibold text-white/85 shadow-lg backdrop-blur-sm">
                          Secure Systems
                        </div>
                        <div className="absolute right-[2%] top-[18%] rounded-full border border-white/12 bg-black/25 px-4 py-2 text-xs font-semibold text-white/85 shadow-lg backdrop-blur-sm">
                          Observability
                        </div>
                        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 rounded-full border border-[#c8a951]/25 bg-[#c8a951]/10 px-4 py-2 text-xs font-semibold text-[#ead89e] shadow-lg backdrop-blur-sm">
                          Audit Trail
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                      <div className="inline-flex rounded-full border border-[#c8a951]/30 bg-[#2c1a22]/70 px-4 py-2 text-sm font-medium text-[#f0dfaa] shadow-lg backdrop-blur-sm">
                        Systems Engineering Practice
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mission statement */}
                <div className="mt-10 bg-white dark:bg-[#2c1a22] p-5 rounded-xl shadow-lg border border-gray-100 dark:border-[#3d2128] relative">
                  <div className="absolute top-0 left-8 transform -translate-y-1/2 bg-[#c8a951] dark:bg-[#9f7b42] text-white px-4 py-2 rounded-full text-xs md:text-sm font-medium">
                    Our Mission
                  </div>
                  <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 mt-4">
                    "We build software platforms that sharpen decisions, automate intricate operations, and strengthen operational control for enterprise, government, and growth-focused teams."
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
                <div className="bg-white dark:bg-[#2c1a22] rounded-xl p-6 md:p-8 shadow-xl border border-gray-100 dark:border-[#3d2128]">
                  <h3 className="text-lg md:text-xl font-bold mb-6 text-[#2c1a22] dark:text-white">Governance by Design</h3>

                  <div className="space-y-7">
                    <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300">
                      Every engagement is approached with production readiness and governance by design. The method prioritizes deterministic execution where required, alongside rigorous security, observability, and long-term maintainability.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7 mt-8">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center text-[#c8a951] dark:text-[#9f7b42]">
                            <InnovationDNAIcon />
                          </div>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm md:text-base font-semibold text-[#2c1a22] dark:text-white">Innovation DNA</h4>
                          <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 mt-1">
                            We design practical solutions for complex enterprise challenges, with a focus on measurable outcomes and maintainable systems.
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
                    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="text-sm md:text-base font-semibold text-[#2c1a22] dark:text-white mb-4">Our Core Values</h4>
                      <div className="flex flex-wrap gap-3">
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

        {/* Principal Platforms Section */}
        <section className="py-12 md:py-16 bg-[#f8f6f1] dark:bg-[#15111a] relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="platform-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M0 24 H48 M24 0 V48" stroke="currentColor" strokeWidth="0.5" fill="none" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#platform-grid)" />
            </svg>
          </div>

          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-1.5 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 rounded-full text-[#c8a951] dark:text-[#9f7b42] text-xs md:text-sm font-medium mb-2 md:mb-3 border border-[#c8a951]/20 dark:border-[#9f7b42]/20"
              >
                Principal Platforms
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl md:text-3xl font-bold mb-3 text-[#2c1a22] dark:text-white"
              >
                The Codegx <span className="text-[#c8a951] dark:text-[#9f7b42]">Technical Estate</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xs md:text-sm text-gray-700 dark:text-gray-300"
              >
                Six systems form the core of what Codegx builds and maintains. Wakala OS sits within this estate as the operating layer for governed agentic workflows.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
              {principalPlatforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white dark:bg-[#2c1a22] border border-gray-100 dark:border-[#3d2128] rounded-lg p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-[#2c1a22] dark:text-white">{platform.name}</h3>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-[#c8a951] dark:text-[#9f7b42] mt-1">
                        {platform.type}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-md bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center text-[#c8a951] dark:text-[#9f7b42] shrink-0">
                      <i className="fas fa-layer-group text-sm"></i>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {platform.summary}
                  </p>
                  {platform.name === "Wakala OS" && (
                    <div className="mt-4 rounded-md border border-[#c8a951]/20 bg-[#c8a951]/5 px-3 py-2 text-xs text-[#6f5823] dark:text-[#d8c179]">
                      Flagship platform: Wakala OS anchors Codegx governed operations work.
                    </div>
                  )}
                </motion.div>
              ))}
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

          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
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
                We deliver governed technology systems designed to address your organization's most complex challenges and sustain long-term operational growth.
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
                      Enterprise Capability
                    </div>

                    <h3 className="text-lg md:text-xl font-bold mb-3 text-[#2c1a22] dark:text-white">
                      Governed AI Systems
                    </h3>

                    <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 mb-4">
                      Our automation and machine learning solutions support business operations, improve decision-making, and create measurable value through dependable implementation.
                    </p>

                    <ul className="space-y-2 mb-4">
                      {[
                        "Governance controls for model-assisted workflows",
                        "Predictive analytics and forecasting systems",
                        "Structured process automation",
                        "Observability for production AI behavior",
                        "Document and operational intelligence systems"
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
                      <Link href="/services">Learn More</Link>
                    </Button>
                  </div>

                  <div className="relative h-64 lg:h-auto min-h-[400px]">
                    <img
                      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=85"
                      alt="Enterprise systems infrastructure"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#2c1a22]/60"></div>

                  </div>
                </div>
              </div>
            </motion.div>

            {/* Service Carousel - Desktop: 3 items, Mobile: 1 item */}
            <div className="relative">
              {/* Desktop View */}
              <div className="hidden lg:grid lg:grid-cols-3 border border-gray-200 dark:border-[#3d2128] rounded-xl overflow-hidden bg-white dark:bg-[#2c1a22]">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="group flex flex-col h-full border-r last:border-r-0 border-gray-200 dark:border-[#3d2128]"
                  >
                    <div className="p-7 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-xs uppercase tracking-[0.2em] text-[#c8a951] dark:text-[#9f7b42]">
                          0{index + 1}
                        </div>
                        <div className="w-10 h-10 rounded-md bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center text-[#c8a951] dark:text-[#9f7b42]">
                          <service.icon />
                        </div>
                      </div>

                      <h3 className="text-lg font-bold mb-4 text-[#2c1a22] dark:text-white">{service.title}</h3>

                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 flex-grow leading-relaxed">{service.description}</p>

                      <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                        <Link
                          href={`/solutions/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-[#c8a951] dark:text-[#9f7b42] font-medium text-sm hover:underline flex items-center"
                        >
                          Learn More
                          <i className="fas fa-arrow-right ml-2 text-xs transition-transform group-hover:translate-x-1"></i>
                        </Link>
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
                          className="bg-white dark:bg-[#2c1a22] rounded-xl overflow-hidden border border-gray-200 dark:border-[#3d2128] flex flex-col h-full"
                        >
                          <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center justify-between mb-5">
                              <div className="text-xs uppercase tracking-[0.2em] text-[#c8a951] dark:text-[#9f7b42]">
                                0{index + 1}
                              </div>
                              <div className="w-10 h-10 rounded-md bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center text-[#c8a951] dark:text-[#9f7b42]">
                                <service.icon />
                              </div>
                            </div>

                            <h3 className="text-lg font-bold mb-4 text-[#2c1a22] dark:text-white">{service.title}</h3>

                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 flex-grow leading-relaxed">{service.description}</p>

                            <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                              <Link
                                href={`/solutions/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                                className="text-[#c8a951] dark:text-[#9f7b42] font-medium text-sm hover:underline flex items-center"
                              >
                                Learn More
                                <i className="fas fa-arrow-right ml-2 text-xs"></i>
                              </Link>
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
              className="mx-auto mt-10 md:mt-12 max-w-5xl relative overflow-hidden"
            >
              <div className="rounded-xl overflow-hidden shadow-xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1581089781785-603411fa81e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Enterprise systems delivery environment"
                  className="h-[260px] w-full object-cover md:h-[340px] lg:h-[420px]"
                />
                <div className="absolute inset-0 bg-[#2c1a22]/80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">Turning Process Gaps into Working Systems</h3>
                  <p className="text-sm text-slate-300 max-w-2xl">Our automation and software delivery work helps teams reduce manual effort, improve visibility, and serve customers more reliably.</p>
                </div>
              </div>
            </motion.div>

            {/* Enterprise solutions banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 md:mt-12 bg-[#2c1a22] dark:bg-[#1f1a2c] rounded-2xl p-6 md:p-8 relative overflow-hidden"
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
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
