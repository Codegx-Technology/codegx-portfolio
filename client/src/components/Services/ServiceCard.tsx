import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { getIcon } from "@/lib/iconMap";
import { useHoverCapability } from "@/hooks/use-desktop";
import { cn } from "@/lib/utils";

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
  // Get icon component from optimized icon map
  const IconComponent = getIcon(icon);
  const canHover = useHoverCapability();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={canHover ? { y: -10, scale: 1.02, transition: { duration: 0.2 } } : {}}
      className="group h-full"
    >
      <div className={cn(
        "relative h-full rounded-xl overflow-hidden border border-gray-100 dark:border-[#2c1a22]/50 bg-white dark:bg-[#1a1a1a] shadow-lg transition-all duration-300",
        canHover && "lg:hover:shadow-2xl lg:hover:shadow-[#c8a951]/20 dark:lg:hover:shadow-[#9f7b42]/20"
      )}>
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#c8a951]/20 to-[#3d2128]/20 dark:from-[#9f7b42]/20 dark:to-[#2a1f3d]/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>

        <div className="relative h-full p-8 flex flex-col">
          <div className="mb-6">
            <div className={cn(
              "w-14 h-14 rounded-lg bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center text-[#c8a951] dark:text-[#9f7b42] transition-all duration-300",
              canHover && "lg:group-hover:scale-110 lg:group-hover:rotate-3 lg:group-hover:bg-[#c8a951]/20 dark:lg:group-hover:bg-[#9f7b42]/20"
            )}>
              <IconComponent className="w-7 h-7" />
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 text-[#2c1a22] dark:text-white group-hover:text-[#c8a951] dark:group-hover:text-[#9f7b42] transition-colors">{title}</h3>

          <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">{description}</p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.slice(0, 2).map((tag, i) => (
                <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 text-[#c8a951] dark:text-[#9f7b42] font-medium">
                  {tag}
                </span>
              ))}
              {tags.length > 2 && (
                <span className="text-xs px-3 py-1.5 rounded-full bg-[#c8a951]/5 dark:bg-[#9f7b42]/5 text-[#c8a951] dark:text-[#9f7b42] font-medium">
                  +{tags.length - 2}
                </span>
              )}
            </div>
          )}

          <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
            <Link href={`/services/${slug}`}>
              <Button
                variant="ghost"
                className="w-full justify-between text-[#2c1a22] dark:text-white hover:bg-[#c8a951]/10 hover:text-[#c8a951] dark:hover:bg-[#9f7b42]/10 dark:hover:text-[#9f7b42] transition-colors"
              >
                Learn More
                <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
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
