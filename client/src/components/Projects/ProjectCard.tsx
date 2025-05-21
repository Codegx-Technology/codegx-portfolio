import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

// Common properties for both personal and agency projects
interface BaseProjectProps {
  id: string;
  title: string;
  description: string;
  image: string;
  featured?: boolean;
  type: "personal" | "agency";
}

// Personal project specific properties
interface PersonalProjectProps extends BaseProjectProps {
  type: "personal";
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
}

// Agency project specific properties
interface AgencyProjectProps extends BaseProjectProps {
  type: "agency";
  category: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  client?: string;
  year?: number;
}

// Union type for all possible project props
type ProjectCardProps = PersonalProjectProps | AgencyProjectProps;

export function ProjectCard(props: ProjectCardProps) {
  const { id, title, description, image, featured = false, type } = props;
  
  // Truncate description if it's too long
  const truncatedDescription = description.length > 150 
    ? `${description.substring(0, 150)}...` 
    : description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-border h-full flex flex-col"
    >
      {/* Project Image */}
      <div className="relative aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://via.placeholder.com/600x400?text=Project";
          }}
        />
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-2 right-2">
            <Badge variant="default" className="bg-primary text-primary-foreground">
              Featured
            </Badge>
          </div>
        )}
        
        {/* Category/Type Badge */}
        <div className="absolute bottom-2 left-2">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
            {type === "agency" ? props.category : "Personal"}
          </Badge>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-xl font-semibold line-clamp-1">{title}</h3>
          {type === "agency" && props.year && (
            <span className="text-sm text-muted-foreground">{props.year}</span>
          )}
        </div>
        
        {type === "agency" && props.client && (
          <p className="text-sm text-muted-foreground mb-3">
            <span className="font-medium">Client:</span> {props.client}
          </p>
        )}
        
        <p className="text-muted-foreground mb-4 line-clamp-3">{truncatedDescription}</p>
        
        {/* Tech Stack/Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
          {type === "agency" ? (
            // Agency tech stack
            <>
              {props.techStack.slice(0, 4).map((tech, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {props.techStack.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{props.techStack.length - 4} more
                </Badge>
              )}
            </>
          ) : (
            // Personal project tags
            <>
              {props.tags.slice(0, 4).map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {props.tags.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{props.tags.length - 4} more
                </Badge>
              )}
            </>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2 mt-2">
          <Link href={type === "agency" ? `/agency/projects/${id}` : `/projects/${id}`} className="flex-1">
            <Button variant="default" className="w-full" size="sm">
              View Details
            </Button>
          </Link>
          
          <div className="flex gap-2">
            {type === "agency" ? (
              // Agency buttons
              <>
                {props.githubUrl && (
                  <a href={props.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="h-9 w-9" title="View on GitHub">
                      <i className="fab fa-github"></i>
                    </Button>
                  </a>
                )}
                
                {props.liveUrl && (
                  <a href={props.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="h-9 w-9" title="View Live Demo">
                      <i className="fas fa-external-link-alt"></i>
                    </Button>
                  </a>
                )}
              </>
            ) : (
              // Personal project buttons
              <>
                {props.codeUrl && (
                  <a href={props.codeUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="h-9 w-9" title="View Code">
                      <i className="fab fa-github"></i>
                    </Button>
                  </a>
                )}
                
                {props.demoUrl && (
                  <a href={props.demoUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="h-9 w-9" title="View Demo">
                      <i className="fas fa-external-link-alt"></i>
                    </Button>
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
