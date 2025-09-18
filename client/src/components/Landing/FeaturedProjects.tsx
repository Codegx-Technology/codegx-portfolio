import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { ProjectCard, Project } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { projects as personalProjects } from "@/lib/data";

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

interface UnifiedProject extends Project {
  projectType: "personal" | "agency";
  techStack?: string[];
}

export function FeaturedProjects() {
  const { data: agencyProjectsData } = useQuery<AgencyProjectsData>({
    queryKey: ["/data/agencyProjects.json"],
    staleTime: Infinity,
  });

  // Convert agency projects to the unified format
  const convertedAgencyProjects: UnifiedProject[] = agencyProjectsData?.projects
    .filter(project => project.featured)
    .map(project => ({
      id: parseInt(project.id) || Math.random(),
      title: project.title,
      description: project.description,
      image: project.image,
      category: project.category.toLowerCase(),
      technologies: project.techStack,
      techStack: project.techStack,
      githubUrl: project.githubUrl || undefined,
      liveUrl: project.liveUrl || undefined,
      projectType: "agency",
    })) || [];

  // Convert personal projects to the unified format
  const convertedPersonalProjects: UnifiedProject[] = personalProjects
    .filter((_, index) => index < 3) // Just take the first 3 for featured
    .map(project => ({
      ...project,
      projectType: "personal",
    }));

  // Combine both project types
  const featuredProjects = [...convertedPersonalProjects, ...convertedAgencyProjects].slice(0, 6);

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
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold font-inter mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my personal work and agency projects, demonstrating expertise across various technologies and domains.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project) => (
            <motion.div key={`${project.projectType}-${project.id}`} variants={itemVariants}>
              <div className="relative group h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-purple-600/50 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative h-full bg-card rounded-lg overflow-hidden border border-border shadow-md hover:shadow-xl transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x200?text=Project+Image";
                      }}
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant={project.projectType === "personal" ? "default" : "secondary"} className="text-xs">
                        {project.projectType === "personal" ? "Personal" : "Agency"}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 line-clamp-1">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(project.technologies || project.techStack || []).slice(0, 3).map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {(project.technologies || project.techStack || []).length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{(project.technologies || project.techStack || []).length - 3} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <i className="fab fa-github text-lg"></i>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <i className="fas fa-external-link-alt text-lg"></i>
                        </a>
                      )}
                      <Button variant="ghost" size="sm" className="ml-auto">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => window.location.href = "/portfolio"}
              variant="outline"
              className="rounded-full px-6"
            >
              <i className="fas fa-user mr-2"></i>
              View All Personal Projects
            </Button>
            <Button
              onClick={() => window.location.href = "/agency/projects"}
              variant="outline"
              className="rounded-full px-6"
            >
              <i className="fas fa-building mr-2"></i>
              View All Agency Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
