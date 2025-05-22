import React, { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { PageWrapper, PageSection } from "@/components/layouts/PageWrapper";
import { Button } from "@/components/ui/button";
import { Head } from "@/components/head";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/layouts/CTASection";
import { EnterpriseGrid } from "@/components/ui/enterprise-container";
import { EnterpriseCard } from "@/components/ui/enterprise-card";
import { Heading2, Heading3, Paragraph } from "@/components/ui/typography";

// Define project types
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  featured?: boolean;
  demoUrl?: string;
  githubUrl?: string;
  detailsUrl: string;
}

// Define skill types
interface Skill {
  name: string;
  icon: string;
  category: string;
  level: number;
}

export default function Portfolio() {
  // Refs for scroll animations
  const heroRef = useRef<HTMLDivElement>(null);

  // Filter state
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Sample projects data
  const projects: Project[] = [
    {
      id: "1",
      title: "AI-Powered Analytics Dashboard",
      description: "A comprehensive analytics platform with predictive capabilities and real-time data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["React", "TensorFlow.js", "D3.js", "Node.js"],
      category: "AI & Machine Learning",
      featured: true,
      demoUrl: "https://demo.example.com/analytics",
      githubUrl: "https://github.com/example/analytics",
      detailsUrl: "/portfolio/ai-analytics-dashboard"
    },
    {
      id: "2",
      title: "Blockchain Supply Chain Solution",
      description: "A transparent supply chain management system built on blockchain technology for enhanced traceability.",
      image: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      technologies: ["Solidity", "Ethereum", "React", "Web3.js"],
      category: "Blockchain",
      featured: true,
      githubUrl: "https://github.com/example/blockchain-supply",
      detailsUrl: "/portfolio/blockchain-supply-chain"
    },
    {
      id: "3",
      title: "Smart City IoT Platform",
      description: "An IoT platform for smart cities that collects and analyzes data from various sensors across urban environments.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      technologies: ["Python", "MQTT", "MongoDB", "React"],
      category: "IoT",
      demoUrl: "https://demo.example.com/smart-city",
      detailsUrl: "/portfolio/smart-city-iot"
    },
    {
      id: "4",
      title: "Fintech Payment Gateway",
      description: "A secure and scalable payment processing system with fraud detection capabilities.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Node.js", "Express", "PostgreSQL", "Stripe API"],
      category: "Fintech",
      githubUrl: "https://github.com/example/payment-gateway",
      detailsUrl: "/portfolio/fintech-payment-gateway"
    },
    {
      id: "5",
      title: "Healthcare Data Platform",
      description: "A HIPAA-compliant platform for healthcare data management and analysis.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Python", "Django", "PostgreSQL", "Docker"],
      category: "Healthcare",
      featured: true,
      detailsUrl: "/portfolio/healthcare-data-platform"
    },
    {
      id: "6",
      title: "E-commerce Recommendation Engine",
      description: "An AI-powered recommendation system that increases conversion rates through personalized product suggestions.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Python", "TensorFlow", "Flask", "Redis"],
      category: "AI & Machine Learning",
      demoUrl: "https://demo.example.com/recommendation",
      detailsUrl: "/portfolio/ecommerce-recommendation-engine"
    },
  ];

  // Skills data
  const skills: Skill[] = [
    { name: "React", icon: "fab fa-react", category: "Frontend", level: 95 },
    { name: "Node.js", icon: "fab fa-node-js", category: "Backend", level: 90 },
    { name: "Python", icon: "fab fa-python", category: "Backend", level: 85 },
    { name: "TensorFlow", icon: "fas fa-brain", category: "AI & ML", level: 80 },
    { name: "Blockchain", icon: "fas fa-link", category: "Blockchain", level: 85 },
    { name: "AWS", icon: "fab fa-aws", category: "Cloud", level: 90 },
    { name: "Docker", icon: "fab fa-docker", category: "DevOps", level: 85 },
    { name: "MongoDB", icon: "fas fa-database", category: "Database", level: 90 },
    { name: "PostgreSQL", icon: "fas fa-database", category: "Database", level: 85 },
    { name: "TypeScript", icon: "fab fa-js", category: "Frontend", level: 90 },
    { name: "GraphQL", icon: "fas fa-project-diagram", category: "API", level: 80 },
    { name: "Kubernetes", icon: "fas fa-dharmachakra", category: "DevOps", level: 75 },
  ];

  // Filter categories
  const categories = ["all", ...new Set(projects.map(project => project.category))];

  // Filtered projects
  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  // Featured projects
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <>
      <Head
        title="Portfolio | Peter O. Oluoch"
        description="Explore my portfolio of software engineering and blockchain projects."
      />

      <PageWrapper
        withContainer={false}
        navbarVariant="transparent"
        showSearch={false}
      >
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="relative min-h-[80vh] flex items-center overflow-hidden"
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
                  Software Engineer & Blockchain Developer
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white"
                >
                  Peter O. <span className="text-[#c8a951] dark:text-[#9f7b42]">Oluoch</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-xl text-slate-300 max-w-2xl"
                >
                  I build innovative solutions at the intersection of blockchain, AI, and web technologies. Explore my portfolio of projects that solve real-world problems.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-xs text-[#c8a951]/80 dark:text-[#9f7b42]/80 font-medium"
                >
                  Founder of Codegx Technologies & Astella AI
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
                    <a href="#projects">View Projects</a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-[#c8a951] text-[#c8a951] hover:bg-[#c8a951]/10 dark:border-[#9f7b42] dark:text-[#9f7b42] dark:hover:bg-[#9f7b42]/10"
                  >
                    <Link href="/contact">Contact Me</Link>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="lg:col-span-5 relative hidden lg:block"
              >
                {/* Profile image with overlays */}
                <div className="relative">
                  <div className="absolute -left-6 -top-6 right-6 bottom-6 border-2 border-[#c8a951]/20 dark:border-[#9f7b42]/20 rounded-xl"></div>
                  <div className="absolute -left-3 -top-3 right-9 bottom-9 border-2 border-[#c8a951]/10 dark:border-[#9f7b42]/10 rounded-xl"></div>
                  <div className="relative rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                      alt="Peter O. Oluoch"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2c1a22]/80 via-[#2c1a22]/20 to-transparent"></div>

                    {/* Floating badge */}
                    <div className="absolute bottom-6 left-6 bg-[#c8a951]/90 dark:bg-[#9f7b42]/90 text-[#2c1a22] dark:text-[#1f1a2c] px-4 py-2 rounded-lg font-medium shadow-lg">
                      Full Stack Developer
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
            <span className="text-slate-400 text-sm mb-2">Explore My Work</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.section>
        {/* Skills Section */}
        <PageSection
          background="muted"
          spacing="xl"
          className="relative overflow-hidden"
        >
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full translate-x-1/3 -translate-y-1/3 z-0"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/3 translate-y-1/3 z-0"></div>

          <div className="relative z-10">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4 border border-primary/20"
              >
                Technical Expertise
              </motion.div>

              <Heading2
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                My <span className="text-primary">Skills</span>
              </Heading2>

              <Paragraph
                className="text-lg max-w-3xl mx-auto mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                I specialize in a range of technologies across the full stack, with particular expertise in blockchain, AI, and modern web development.
              </Paragraph>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="h-full"
                >
                  <EnterpriseCard className="p-6 h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-4">
                        <i className={`${skill.icon} text-xl`}></i>
                      </div>
                      <div>
                        <Heading3 className="text-base font-semibold">{skill.name}</Heading3>
                        <Paragraph className="text-sm text-muted-foreground">{skill.category}</Paragraph>
                      </div>
                    </div>

                    <div className="w-full bg-muted rounded-full h-2.5 mb-1">
                      <div
                        className="bg-primary h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="text-right text-xs text-muted-foreground">{skill.level}%</div>
                  </EnterpriseCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </PageSection>

        {/* Projects Section */}
        <PageSection
          id="projects"
          background="pattern"
          spacing="xl"
          className="relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4 border border-primary/20"
              >
                My Work
              </motion.div>

              <Heading2
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Featured <span className="text-primary">Projects</span>
              </Heading2>

              <Paragraph
                className="text-lg max-w-3xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Explore a selection of my most impactful projects across various domains and technologies.
              </Paragraph>
            </div>

            {/* Project Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === category
                      ? "bg-primary text-white"
                      : "bg-card text-foreground hover:bg-muted"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </div>

            {/* Projects Grid */}
            <EnterpriseGrid cols={3} gap="lg">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="h-full"
                >
                  <EnterpriseCard className="overflow-hidden h-full group" interactive>
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>

                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary/90 text-white border-0">
                          {project.category}
                        </Badge>
                      </div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-white/90 text-foreground border-0 flex items-center gap-1">
                            <i className="fas fa-star text-primary text-xs"></i>
                            Featured
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <Heading3 className="mb-2">{project.title}</Heading3>
                      <Paragraph className="mb-4 line-clamp-2">{project.description}</Paragraph>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-muted rounded text-xs font-medium text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex justify-between items-center pt-4 border-t border-border">
                        <Link
                          href={project.detailsUrl}
                          className="text-primary font-medium text-sm hover:underline flex items-center"
                        >
                          View Details
                          <i className="fas fa-arrow-right ml-2 text-xs transition-transform group-hover:translate-x-1"></i>
                        </Link>

                        <div className="flex gap-3">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary"
                            >
                              <i className="fab fa-github"></i>
                            </a>
                          )}
                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary"
                            >
                              <i className="fas fa-external-link-alt"></i>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </EnterpriseCard>
                </motion.div>
              ))}
            </EnterpriseGrid>

            {/* Show More Button */}
            <div className="text-center mt-12">
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <Link href="/portfolio/all">View All Projects</Link>
              </Button>
            </div>
          </div>
        </PageSection>

        {/* CTA Section */}
        <CTASection
          title="Interested in working together?"
          description="Let's discuss how I can help bring your ideas to life with innovative technology solutions."
          buttonText="Get in Touch"
          buttonLink="/contact"
          variant="gradient"
        />
      </PageWrapper>
    </>
  );
}
