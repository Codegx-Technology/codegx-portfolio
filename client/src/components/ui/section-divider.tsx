import React from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface SectionDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: "line" | "gradient" | "dots" | "wave" | "angle" | "none";
  color?: "default" | "primary" | "secondary" | "muted";
  spacing?: "none" | "sm" | "md" | "lg";
  width?: "full" | "container";
}

/**
 * SectionDivider component for visually separating page sections
 */
export function SectionDivider({
  className,
  variant = "line",
  color = "default",
  spacing = "md",
  width = "full",
  ...props
}: SectionDividerProps) {
  // Define spacing classes - Mobile First
  const spacingClasses = {
    none: "",
    sm: "my-2 md:my-4",
    md: "my-4 md:my-8",
    lg: "my-6 md:my-12",
  };

  // Define color classes
  const colorClasses = {
    default: "bg-border",
    primary: "bg-primary/20",
    secondary: "bg-secondary/20",
    muted: "bg-muted-foreground/20",
  };

  // Define width classes
  const widthClasses = {
    full: "w-full",
    container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  };

  // Base container classes
  const containerClasses = cn(
    spacingClasses[spacing],
    widthClasses[width],
    className
  );

  // Render based on variant
  switch (variant) {
    case "line":
      return (
        <div className={containerClasses} {...props}>
          <Separator className={cn("h-px", colorClasses[color])} />
        </div>
      );

    case "gradient":
      return (
        <div className={containerClasses} {...props}>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      );

    case "dots":
      return (
        <div className={cn(containerClasses, "flex justify-center")} {...props}>
          <div className="flex items-center space-x-2">
            <div className={cn("h-1.5 w-1.5 rounded-full", colorClasses[color])} />
            <div className={cn("h-1.5 w-1.5 rounded-full", colorClasses[color])} />
            <div className={cn("h-1.5 w-1.5 rounded-full", colorClasses[color])} />
          </div>
        </div>
      );

    case "wave":
      return (
        <div className={containerClasses} {...props}>
          <div className="w-full h-12 md:h-16 overflow-hidden">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-full"
              fill="currentColor"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className={cn("fill-current", colorClasses[color].replace("bg-", "text-"))}
              />
            </svg>
          </div>
        </div>
      );

    case "angle":
      return (
        <div className={containerClasses} {...props}>
          <div className="relative h-16 md:h-24 overflow-hidden">
            <div
              className={cn(
                "absolute inset-0 transform -skew-y-3",
                colorClasses[color]
              )}
            />
          </div>
        </div>
      );

    case "none":
    default:
      return null;
  }
}

interface GradientDividerProps {
  className?: string;
  direction?: "horizontal" | "vertical";
  colors?: "primary" | "secondary" | "accent" | "rainbow";
  width?: number;
  opacity?: number;
}

/**
 * GradientDivider component for creating gradient divider lines
 */
export function GradientDivider({
  className,
  direction = "horizontal",
  colors = "primary",
  width = 1,
  opacity = 0.2,
}: GradientDividerProps) {
  // Define gradient classes based on colors
  const gradientClasses = {
    primary: "from-primary/0 via-primary to-primary/0",
    secondary: "from-secondary/0 via-secondary to-secondary/0",
    accent: "from-accent/0 via-accent to-accent/0",
    rainbow: "from-blue-500 via-purple-500 to-pink-500",
  };

  // Define direction classes
  const directionClasses = {
    horizontal: "w-full h-px bg-gradient-to-r",
    vertical: "h-full w-px bg-gradient-to-b",
  };

  return (
    <div
      className={cn(
        directionClasses[direction],
        gradientClasses[colors],
        `opacity-${opacity * 100}`,
        className
      )}
      style={{ 
        height: direction === "horizontal" ? `${width}px` : undefined,
        width: direction === "vertical" ? `${width}px` : undefined
      }}
    />
  );
}
