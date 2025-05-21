import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

interface AgencyProjectCardProps {
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
}

export function AgencyProjectCard({
  id,
  title,
  description,
  image,
  category,
  techStack,
  githubUrl,
  liveUrl,
  featured = false,
  client,
  year
}: AgencyProjectCardProps) {
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
        
        {/* Category Badge */}
        <div className="absolute bottom-2 left-2">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
            {category}
          </Badge>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-xl font-semibold line-clamp-1">{title}</h3>
          {year && <span className="text-sm text-muted-foreground">{year}</span>}
        </div>
        
        {client && (
          <p className="text-sm text-muted-foreground mb-3">
            <span className="font-medium">Client:</span> {client}
          </p>
        )}
        
        <p className="text-muted-foreground mb-4 line-clamp-3">{truncatedDescription}</p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
          {techStack.slice(0, 4).map((tech, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {techStack.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{techStack.length - 4} more
            </Badge>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2 mt-2">
          <Link href={`/agency/projects/${id}`} className="flex-1">
            <Button variant="default" className="w-full" size="sm">
              View Details
            </Button>
          </Link>
          
          <div className="flex gap-2">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="h-9 w-9" title="View on GitHub">
                  <i className="fab fa-github"></i>
                </Button>
              </a>
            )}
            
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="h-9 w-9" title="View Live Demo">
                  <i className="fas fa-external-link-alt"></i>
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AgencyProjectCard;
