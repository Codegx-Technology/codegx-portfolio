import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import { useQuery } from "@tanstack/react-query";
import AgencyProjectCard from "@/components/Agency/AgencyProjectCard";
import ProjectFilterMenu from "@/components/Projects/ProjectFilterMenu";

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
    <motion.div
      className="min-h-screen bg-background text-foreground"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Navbar />

      <main>
        <motion.section
          className="py-16 bg-background"
          variants={sectionVariants}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our portfolio of innovative solutions that have helped businesses transform and grow.
              </p>
            </motion.div>

            {/* Loading State */}
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
            ) : (
              <>
                {/* Category Filter */}
                <ProjectFilterMenu
                  categories={categories}
                  activeCategory={activeFilter}
                  onCategoryChange={handleCategoryChange}
                  className="mb-12"
                />

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
                        <h3 className="text-xl font-medium mb-2">No projects found</h3>
                        <p className="text-muted-foreground">
                          No projects match the selected category. Try selecting a different category.
                        </p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </>
            )}
          </div>
        </motion.section>
      </main>

      <Footer />
      <BackToTop />
    </motion.div>
  );
}
