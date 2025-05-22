import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { PageWrapper, PageSection, PageHeader } from "@/components/layouts/PageWrapper";
import AgencyProjectCard from "@/components/Agency/AgencyProjectCard";
import ProjectFilterMenu from "@/components/Projects/ProjectFilterMenu";
import { Paragraph } from "@/components/ui/typography";
import { Link } from "wouter";

interface AgencyProject {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  order?: number;
  client?: string;
  year?: number;
  challenge?: string;
  solution?: string;
  results?: string[];
}

interface AgencyProjectsData {
  projects: AgencyProject[];
}

interface AgencyProfile {
  name: string;
}

export default function ProjectsPage() {
  const { data: agencyProfile } = useQuery<AgencyProfile>({
    queryKey: ["/data/agencyProfile.json"],
    staleTime: Infinity,
  });

  const { data: projectsData, isLoading } = useQuery<AgencyProjectsData>({
    queryKey: ["/data/agencyProjects.json"],
    staleTime: Infinity,
  });

  const [activeFilter, setActiveFilter] = useState<string>("All");

  // Get projects from the data or use empty array if loading
  const projects = projectsData?.projects || [];

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(projects.map(project => project.category)))];

  // Filter projects by category
  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveFilter(category);
  };

  // Set page title based on agency name
  useEffect(() => {
    document.title = agencyProfile ? `${agencyProfile.name} – Projects` : "Agency – Projects";
  }, [agencyProfile]);

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Section transition variants
  const sectionVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  // Project card variants
  const projectVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <PageWrapper>
      <div className="relative py-20 overflow-hidden bg-gradient-to-br from-[#2c1a22] via-[#3d2128] to-[#2c1a22] dark:from-[#1f1a2c] dark:via-[#2a1f3d] dark:to-[#1f1a2c]">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 z-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 H40 M20 0 V40" stroke="currentColor" strokeWidth="0.5" fill="none" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center px-4 py-1.5 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 rounded-full text-[#c8a951] dark:text-[#9f7b42] text-sm font-medium mb-4 border border-[#c8a951]/20 dark:border-[#9f7b42]/20"
            >
              <span className="flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#c8a951] dark:bg-[#9f7b42] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8a951] dark:bg-[#9f7b42]"></span>
              </span>
              Our Work
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 text-white">
              Our <span className="text-[#c8a951] dark:text-[#9f7b42]">Projects</span>
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our portfolio of innovative solutions that have helped businesses transform and grow.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Loading State */}
      {isLoading ? (
        <PageSection>
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#c8a951] dark:border-[#9f7b42]"></div>
          </div>
        </PageSection>
      ) : (
        <PageSection className="py-20 bg-white dark:bg-[#121212] relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c8a951]/5 dark:bg-[#9f7b42]/5 rounded-full translate-x-1/3 -translate-y-1/3 z-0"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c8a951]/5 dark:bg-[#9f7b42]/5 rounded-full -translate-x-1/3 translate-y-1/3 z-0"></div>

          {/* Circuit pattern overlay */}
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
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ProjectFilterMenu
                categories={categories}
                activeCategory={activeFilter}
                onCategoryChange={handleCategoryChange}
                className="mb-16"
              />
            </motion.div>

            {/* Projects Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.length > 0 ? (
                  filteredProjects
                    .sort((a, b) => {
                      // Sort by featured first, then by order
                      if (a.featured && !b.featured) return -1;
                      if (!a.featured && b.featured) return 1;
                      return (a.order || 999) - (b.order || 999);
                    })
                    .map((project) => (
                      <AgencyProjectCard
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        category={project.category}
                        techStack={project.techStack}
                        githubUrl={project.githubUrl}
                        liveUrl={project.liveUrl}
                        featured={project.featured}
                        client={project.client}
                        year={project.year}
                      />
                    ))
                ) : (
                  <div className="col-span-3 text-center py-20">
                    <h3 className="text-2xl font-bold mb-4 text-[#2c1a22] dark:text-white">No projects found</h3>
                    <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
                      No projects match the selected category. Try selecting a different category.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-20 text-center"
            >
              <Link href="/contact">
                <a className="inline-flex items-center gap-2 bg-[#c8a951] hover:bg-[#c8a951]/90 text-[#2c1a22] dark:bg-[#9f7b42] dark:hover:bg-[#9f7b42]/90 dark:text-[#1f1a2c] px-8 py-4 rounded-md font-medium transition-colors">
                  <span>Start Your Project</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </Link>
            </motion.div>
          </div>
        </PageSection>
      )}
    </PageWrapper>
  );
}
