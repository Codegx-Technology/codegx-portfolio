import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlassmorphismCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  intensity?: "light" | "medium" | "heavy";
  border?: boolean;
  hover?: boolean;
  animate?: boolean;
}

/**
 * Glassmorphism Card component with backdrop blur effect
 */
export function GlassmorphismCard({
  className,
  children,
  intensity = "medium",
  border = true,
  hover = false,
  animate = false,
  ...props
}: GlassmorphismCardProps) {
  const intensityClasses = {
    light: "bg-background/40 backdrop-blur-sm",
    medium: "bg-background/60 backdrop-blur-md",
    heavy: "bg-background/80 backdrop-blur-lg",
  };

  const cardContent = (
    <div
      className={cn(
        "rounded-xl",
        intensityClasses[intensity],
        border && "border border-border/50",
        hover && "transition-all duration-300 hover:shadow-lg hover:border-primary/20",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-primary/5 rounded-xl blur-xl transform scale-105 -z-10" />
        {cardContent}
      </motion.div>
    );
  }

  return (
    <div className="relative">
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-primary/5 rounded-xl blur-xl transform scale-105 -z-10" />
      {cardContent}
    </div>
  );
}

interface GlassmorphismFormCardProps extends Omit<GlassmorphismCardProps, 'title'> {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  footer?: React.ReactNode;
}

/**
 * Glassmorphism Form Card component with title and description
 */
export function GlassmorphismFormCard({
  className,
  children,
  title,
  description,
  footer,
  ...props
}: GlassmorphismFormCardProps) {
  return (
    <GlassmorphismCard
      className={cn("p-6 md:p-8", className)}
      {...props}
    >
      {title && (
        <div className="mb-6">
          {typeof title === "string" ? (
            <h2 className="text-2xl font-bold">{title}</h2>
          ) : (
            title
          )}
          
          {description && (
            <div className="mt-2">
              {typeof description === "string" ? (
                <p className="text-muted-foreground">{description}</p>
              ) : (
                description
              )}
            </div>
          )}
        </div>
      )}
      
      <div>
        {children}
      </div>
      
      {footer && (
        <div className="mt-6 pt-6 border-t border-border/50">
          {footer}
        </div>
      )}
    </GlassmorphismCard>
  );
}
