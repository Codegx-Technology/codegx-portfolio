import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface CaseStudyCardProps {
  id: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  impact: string[];
  technologies: string[];
  image: string;
  featured?: boolean;
  year?: number;
  onClick?: () => void;
}

export function CaseStudyCard({
  id,
  title,
  client,
  industry,
  summary,
  impact,
  technologies,
  image,
  featured,
  year,
  onClick
}: CaseStudyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group h-full"
      onClick={onClick}
    >
      <div className="relative h-full rounded-lg overflow-hidden border border-border bg-card shadow-md hover:shadow-xl transition-all duration-300">
        {featured && (
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="default" className="bg-primary text-white">
              Featured
            </Badge>
          </div>
        )}
        
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x200?text=Case+Study";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-4 text-white">
              <div className="text-sm font-medium opacity-80">{industry}</div>
              <h3 className="text-xl font-bold line-clamp-1">{title}</h3>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-center mb-3">
            <div className="font-medium text-primary">{client}</div>
            {year && <div className="text-sm text-muted-foreground">{year}</div>}
          </div>
          
          <p className="text-muted-foreground mb-4 line-clamp-3">{summary}</p>
          
          {impact && impact.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2">Key Impact:</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                {impact.slice(0, 2).map((item, index) => (
                  <li key={index} className="line-clamp-1">{item}</li>
                ))}
                {impact.length > 2 && (
                  <li className="text-primary font-medium">+ {impact.length - 2} more results</li>
                )}
              </ul>
            </div>
          )}
          
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 3).map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {technologies.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{technologies.length - 3} more
              </Badge>
            )}
          </div>
          
          <div className="mt-auto pt-2">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-center hover:bg-primary/10 hover:text-primary"
              onClick={(e) => {
                e.stopPropagation();
                onClick && onClick();
              }}
            >
              View Case Study <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CaseStudyCard;
