import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ProjectFilterMenuProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  className?: string;
}

export function ProjectFilterMenu({
  categories,
  activeCategory,
  onCategoryChange,
  className = ""
}: ProjectFilterMenuProps) {
  return (
    <div className={`flex flex-wrap justify-center gap-2 mb-8 ${className}`}>
      {categories.map((category, index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => onCategoryChange(category)}
            className="mb-2"
          >
            {category}
          </Button>
        </motion.div>
      ))}
    </div>
  );
}

export default ProjectFilterMenu;
