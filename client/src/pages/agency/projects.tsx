import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";

interface AgencyProject {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  client?: string;
  date?: string;
  url?: string;
  githubUrl?: string;
  featured?: boolean;
}

interface AgencyProfile {
  name: string;
}

// Sample projects data (in a real app, this would come from a JSON file)
const sampleProjects: AgencyProject[] = [
  {
    id: "1",
    title: "AI-Powered Customer Service Platform",
    description: "An intelligent customer service platform that uses natural language processing to automate responses and improve customer satisfaction.",
    image: "https://via.placeholder.com/600x400?text=AI+Customer+Service",
    category: "AI & Machine Learning",
    technologies: ["Python", "TensorFlow", "React", "Node.js"],
    client: "TechCorp International",
    date: "2023",
    url: "https://example.com/project1",
    featured: true
  },
  {
    id: "2",
    title: "Blockchain-Based Supply Chain Solution",
    description: "A transparent and secure supply chain management system built on blockchain technology for improved traceability and efficiency.",
    image: "https://via.placeholder.com/600x400?text=Blockchain+Supply+Chain",
    category: "Blockchain",
    technologies: ["Solidity", "Ethereum", "React", "Web3.js"],
    client: "LogisticsPro",
    date: "2023",
    url: "https://example.com/project2",
    featured: true
  },
  {
    id: "3",
    title: "Smart City Traffic Management",
    description: "An intelligent traffic management system that uses IoT sensors and AI to optimize traffic flow and reduce congestion in urban areas.",
    image: "https://via.placeholder.com/600x400?text=Smart+City+Traffic",
    category: "Smart City",
    technologies: ["IoT", "Python", "TensorFlow", "React"],
    client: "Metropolitan Transport Authority",
    date: "2022",
    url: "https://example.com/project3",
    featured: true
  },
  {
    id: "4",
    title: "E-Commerce Platform with AI Recommendations",
    description: "A modern e-commerce platform with AI-powered product recommendations to enhance user experience and increase sales.",
    image: "https://via.placeholder.com/600x400?text=E-Commerce+AI",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "TensorFlow"],
    client: "RetailNow",
    date: "2022",
    url: "https://example.com/project4"
  },
  {
    id: "5",
    title: "Healthcare Data Analytics Dashboard",
    description: "A comprehensive analytics dashboard for healthcare providers to visualize patient data and improve clinical decision-making.",
    image: "https://via.placeholder.com/600x400?text=Healthcare+Analytics",
    category: "AI & Machine Learning",
    technologies: ["Python", "React", "D3.js", "PostgreSQL"],
    client: "HealthPlus",
    date: "2022",
    url: "https://example.com/project5"
  },
  {
    id: "6",
    title: "Mobile Banking Application",
    description: "A secure and user-friendly mobile banking application with advanced features like biometric authentication and real-time notifications.",
    image: "https://via.placeholder.com/600x400?text=Mobile+Banking",
    category: "Mobile Development",
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
    client: "FinServe Solutions",
    date: "2021",
    url: "https://example.com/project6"
  }
];

export default function ProjectsPage() {
  const { data: agencyProfile } = useQuery<AgencyProfile>({
    queryKey: ["/data/agencyProfile.json"],
    staleTime: Infinity,
  });

  const [projects] = useState<AgencyProject[]>(sampleProjects);
  const [filteredProjects, setFilteredProjects] = useState<AgencyProject[]>(sampleProjects);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(projects.map(project => project.category)))];

  // Filter projects by category
  const filterProjects = (category: string) => {
    setActiveFilter(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
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

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={activeFilter === category ? "default" : "outline"}
                  onClick={() => filterProjects(category)}
                  className="mb-2"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={{
                animate: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={projectVariants}
                  className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-border"
                >
                  <div className="relative aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/600x400?text=Project";
                      }}
                    />
                    {project.featured && (
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary mb-2">{project.category}</div>
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="text-xs bg-muted px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {project.client && (
                      <div className="text-sm mb-4">
                        <span className="font-medium">Client:</span> {project.client}
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center mt-4">
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm flex items-center"
                        >
                          View Project <i className="fas fa-external-link-alt ml-1"></i>
                        </a>
                      )}
                      {project.date && (
                        <span className="text-muted-foreground text-sm">{project.date}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
      <BackToTop />
    </motion.div>
  );
}
