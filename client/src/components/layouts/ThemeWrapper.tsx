import React, { ReactNode, useEffect } from "react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ThemeWrapperProps {
  children: ReactNode;
  className?: string;
  enableTransitions?: boolean;
  enableAnimations?: boolean;
}

/**
 * ThemeWrapper component that applies Tailwind class themes (light/dark)
 * and handles font loading and theme transitions
 */
export function ThemeWrapper({
  children,
  className,
  enableTransitions = true,
  enableAnimations = true,
}: ThemeWrapperProps) {
  const { theme } = useTheme();

  // Apply theme class to html element
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove both theme classes first
    root.classList.remove("light", "dark");
    
    // Add the current theme class
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }

    // Add or remove reduced motion class based on user preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.classList.add("motion-reduce");
    } else {
      root.classList.remove("motion-reduce");
    }
  }, [theme]);

  // Base wrapper styles
  const wrapperClasses = cn(
    // Base styles
    "font-sans antialiased min-h-screen",
    
    // Theme-specific background and text colors
    "bg-background text-foreground",
    
    // Transition styles (only if enabled)
    enableTransitions && "transition-colors duration-300",
    
    // Custom class
    className
  );

  // If animations are disabled, just return the wrapper with classes
  if (!enableAnimations) {
    return <div className={wrapperClasses}>{children}</div>;
  }

  // With animations enabled, use Framer Motion
  return (
    <motion.div
      className={wrapperClasses}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

/**
 * ThemeContent component for wrapping page content with consistent styling
 */
export function ThemeContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main
      className={cn(
        "flex-grow w-full mx-auto",
        "pt-safe pb-safe px-safe", // Safe area insets for mobile
        className
      )}
    >
      {children}
    </main>
  );
}

/**
 * ThemeSection component for consistent section styling
 */
export function ThemeSection({
  children,
  className,
  containerClassName,
  fullWidth = false,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
}) {
  return (
    <section className={cn("py-12 md:py-16 lg:py-20", className)}>
      <div
        className={cn(
          "mx-auto px-4 sm:px-6 lg:px-8",
          !fullWidth && "max-w-7xl",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
