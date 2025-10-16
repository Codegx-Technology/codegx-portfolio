import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  isVisible: boolean;
}

export function ProjectCard({ project, isVisible }: ProjectCardProps) {
  const categoryColors = {
    ai: "bg-purple-500",
    blockchain: "bg-primary",
    data: "bg-blue-500",
    web: "bg-green-500",
    mobile: "bg-orange-500",
    enterprise: "bg-red-500"
  };
  
  const getCategoryColor = (category: string) => {
    return categoryColors[category as keyof typeof categoryColors] || "bg-gray-500";
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.9,
        height: isVisible ? "auto" : 0
      }}
      transition={{ duration: 0.3 }}
      className={`${isVisible ? 'block' : 'hidden'}`}
    >
      <Card className="overflow-hidden h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="relative overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-52 object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-3 right-3">
            <span className={`${getCategoryColor(project.category)} text-white text-xs font-medium px-2 py-1 rounded`}>
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </span>
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
            <a href="#" className="text-primary hover:text-primary/80 transition flex items-center gap-1 min-h-[44px] py-2">
              View Project <i className="fas fa-arrow-right text-xs"></i>
            </a>
            <div className="flex gap-4">
              <a href={project.githubUrl} className="text-muted-foreground hover:text-primary transition min-w-[44px] min-h-[44px] flex items-center justify-center" target="_blank" rel="noreferrer" aria-label="View on GitHub">
                <i className="fab fa-github text-lg"></i>
              </a>
              <a href={project.liveUrl} className="text-muted-foreground hover:text-primary transition min-w-[44px] min-h-[44px] flex items-center justify-center" target="_blank" rel="noreferrer" aria-label="View live demo">
                <i className="fas fa-external-link-alt text-lg"></i>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
