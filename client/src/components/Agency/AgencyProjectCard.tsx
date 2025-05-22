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
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="bg-white dark:bg-[#2c1a22] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-[#3d2128] h-full flex flex-col group"
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://via.placeholder.com/600x400?text=Project";
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#2c1a22]/80 to-transparent"></div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-[#c8a951]/90 dark:bg-[#9f7b42]/90 text-[#2c1a22] dark:text-[#1f1a2c] border-0 px-3 py-1">
              <i className="fas fa-star text-xs mr-1"></i> Featured
            </Badge>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <Badge className="bg-white/90 text-[#2c1a22] border-0 backdrop-blur-sm px-3 py-1">
            {category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-xl font-bold line-clamp-1 text-[#2c1a22] dark:text-white group-hover:text-[#c8a951] dark:group-hover:text-[#9f7b42] transition-colors">{title}</h3>
          {year && (
            <span className="text-sm bg-gray-100 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md">
              {year}
            </span>
          )}
        </div>

        {client && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 flex items-center">
            <i className="fas fa-building mr-2 text-[#c8a951] dark:text-[#9f7b42]"></i>
            <span className="font-medium">Client:</span> {client}
          </p>
        )}

        <p className="text-gray-700 dark:text-gray-300 mb-5 line-clamp-3">{truncatedDescription}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5 mt-auto">
          {techStack.slice(0, 4).map((tech, index) => (
            <Badge key={index} className="bg-gray-100 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 hover:bg-[#c8a951]/10 hover:text-[#c8a951] dark:hover:bg-[#9f7b42]/10 dark:hover:text-[#9f7b42] transition-colors border-0 px-3 py-1">
              {tech}
            </Badge>
          ))}
          {techStack.length > 4 && (
            <Badge className="bg-gray-100 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 border-0 px-3 py-1">
              +{techStack.length - 4} more
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-2 pt-4 border-t border-gray-100 dark:border-gray-800">
          <Link href={`/agency/projects/${id}`} className="flex-1">
            <Button className="w-full bg-[#c8a951] hover:bg-[#c8a951]/90 text-[#2c1a22] dark:bg-[#9f7b42] dark:hover:bg-[#9f7b42]/90 dark:text-[#1f1a2c] font-medium" size="sm">
              View Details
            </Button>
          </Link>

          <div className="flex gap-2">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="h-9 w-9 border-[#c8a951]/20 dark:border-[#9f7b42]/20 text-[#c8a951] dark:text-[#9f7b42] hover:bg-[#c8a951]/10 dark:hover:bg-[#9f7b42]/10 hover:text-[#c8a951] dark:hover:text-[#9f7b42]" title="View on GitHub">
                  <i className="fab fa-github"></i>
                </Button>
              </a>
            )}

            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="h-9 w-9 border-[#c8a951]/20 dark:border-[#9f7b42]/20 text-[#c8a951] dark:text-[#9f7b42] hover:bg-[#c8a951]/10 dark:hover:bg-[#9f7b42]/10 hover:text-[#c8a951] dark:hover:text-[#9f7b42]" title="View Live Demo">
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
