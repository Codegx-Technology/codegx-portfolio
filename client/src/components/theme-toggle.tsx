import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={`relative h-9 w-9 rounded-full ${className}`}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ 
          opacity: theme === "dark" ? 0 : 1, 
          rotate: theme === "dark" ? -45 : 0,
          scale: theme === "dark" ? 0.5 : 1
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Sun className="h-5 w-5" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, rotate: 45 }}
        animate={{ 
          opacity: theme === "dark" ? 1 : 0, 
          rotate: theme === "dark" ? 0 : 45,
          scale: theme === "dark" ? 1 : 0.5
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Moon className="h-5 w-5" />
      </motion.div>
    </Button>
  );
}
