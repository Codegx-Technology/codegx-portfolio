import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import * as LucideIcons from "lucide-react";

interface ServiceCardProps {
  id: string;
  slug: string;
  title: string;
  icon: string;
  description: string;
  tags?: string[];
  index?: number;
}

export function ServiceCard({ id, slug, title, icon, description, tags = [], index = 0 }: ServiceCardProps) {
  // Dynamically get the icon component from Lucide
  const IconComponent = LucideIcons[icon as keyof typeof LucideIcons] || LucideIcons.Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group h-full"
    >
      <div className="relative h-full rounded-lg overflow-hidden border border-border bg-card shadow-md hover:shadow-xl transition-all duration-300">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        <div className="relative h-full p-6 flex flex-col">
          <div className="mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <IconComponent className="w-6 h-6" />
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          
          <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
          
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 2).map((tag, i) => (
                <span key={i} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                  {tag}
                </span>
              ))}
              {tags.length > 2 && (
                <span className="text-xs px-2 py-1 rounded-full bg-primary/5 text-primary">
                  +{tags.length - 2}
                </span>
              )}
            </div>
          )}
          
          <div className="mt-auto pt-2">
            <Link href={`/services/${slug}`}>
              <Button
                variant="ghost"
                className="w-full justify-between group-hover:bg-primary/10 group-hover:text-primary transition-colors"
              >
                Learn More
                <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">
                  <i className="fas fa-arrow-right ml-2"></i>
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
