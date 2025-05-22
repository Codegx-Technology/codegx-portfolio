import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface EnhancedThemeToggleProps {
  className?: string;
  variant?: "icon" | "button" | "dropdown";
  showLabel?: boolean;
}

export function EnhancedThemeToggle({
  className,
  variant = "icon",
  showLabel = false,
}: EnhancedThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  // Icon toggle variant
  if (variant === "icon") {
    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={cn(
          "relative h-10 w-10 rounded-full overflow-hidden",
          className
        )}
        aria-label="Toggle theme"
      >
        <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 rounded-full transform scale-0 transition-transform duration-300 ease-out group-hover:scale-100" />
        
        <AnimatePresence mode="wait" initial={false}>
          {theme === "dark" ? (
            <motion.div
              key="dark"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Moon className="h-5 w-5" />
            </motion.div>
          ) : (
            <motion.div
              key="light"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Sun className="h-5 w-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>
    );
  }

  // Button variant
  if (variant === "button") {
    return (
      <Button
        variant="soft"
        size="sm"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={cn(
          "relative overflow-hidden",
          className
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          {theme === "dark" ? (
            <motion.div
              key="dark-button"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center"
            >
              <Moon className="h-4 w-4 mr-2" />
              {showLabel && <span>Dark</span>}
            </motion.div>
          ) : (
            <motion.div
              key="light-button"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center"
            >
              <Sun className="h-4 w-4 mr-2" />
              {showLabel && <span>Light</span>}
            </motion.div>
          )}
        </AnimatePresence>
      </Button>
    );
  }

  // Dropdown variant
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "relative h-10 w-10 rounded-full",
            className
          )}
          aria-label="Select theme"
        >
          <AnimatePresence mode="wait" initial={false}>
            {theme === "dark" ? (
              <motion.div
                key="dark-dropdown"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Moon className="h-5 w-5" />
              </motion.div>
            ) : theme === "light" ? (
              <motion.div
                key="light-dropdown"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Sun className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div
                key="system-dropdown"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Monitor className="h-5 w-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="h-4 w-4 mr-2" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="h-4 w-4 mr-2" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Monitor className="h-4 w-4 mr-2" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
