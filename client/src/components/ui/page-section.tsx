import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";

interface PageSectionProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  background?: "default" | "muted" | "primary" | "gradient" | "pattern" | "none";
  animate?: boolean;
  fullWidth?: boolean;
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  as?: "section" | "div" | "article";
  motionProps?: MotionProps;
  // Additional props used in pages
  id?: string;
  title?: ReactNode;
  withDivider?: boolean;
  dividerVariant?: "gradient" | "solid" | "dashed";
  dividerPosition?: "top" | "bottom" | "both";
}

/**
 * PageSection component for consistent page sections with enterprise styling
 */
export function PageSection({
  children,
  className,
  containerClassName,
  background = "default",
  animate = false,
  fullWidth = false,
  spacing = "lg",
  as = "section",
  motionProps,
  id,
  title,
  withDivider,
  dividerVariant,
  dividerPosition,
  ...props
}: PageSectionProps) {
  // Define spacing classes
  const spacingClasses = {
    none: "",
    sm: "py-6 md:py-8",
    md: "py-10 md:py-12",
    lg: "py-16 md:py-20",
    xl: "py-20 md:py-28 lg:py-32",
  };

  // Define background classes
  const backgroundClasses = {
    default: "bg-background",
    muted: "bg-muted/50",
    primary: "bg-primary/5",
    gradient: "bg-gradient-to-r from-primary/5 to-secondary/5",
    pattern: "bg-grid-pattern-light dark:bg-grid-pattern-dark bg-background",
    none: "",
  };

  // Base section classes
  const sectionClasses = cn(
    spacingClasses[spacing],
    backgroundClasses[background],
    className
  );

  // Container classes
  const containerClasses = cn(
    "mx-auto px-4 sm:px-6 lg:px-8",
    !fullWidth && "max-w-7xl",
    containerClassName
  );

  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Render with motion if animate is true
  if (animate) {
    const MotionComponent = motion[as] as any;
    return (
      <MotionComponent
        className={sectionClasses}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={variants}
        id={id}
        {...motionProps}
        {...props}
      >
        <div className={containerClasses}>{children}</div>
      </MotionComponent>
    );
  }

  // Render without motion
  const Component = as;
  return (
    <Component className={sectionClasses} id={id} {...props}>
      <div className={containerClasses}>{children}</div>
    </Component>
  );
}

interface PageSectionHeaderProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

/**
 * PageSectionHeader component for consistent section headers
 */
export function PageSectionHeader({
  title,
  subtitle,
  align = "left",
  className,
  titleClassName,
  subtitleClassName,
}: PageSectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-12",
        {
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right",
        },
        className
      )}
    >
      {title && (
        <h2
          className={cn(
            "heading-2 mb-4",
            titleClassName
          )}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          className={cn(
            "body-lg text-muted-foreground max-w-3xl",
            align === "center" && "mx-auto",
            align === "right" && "ml-auto",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface PageSectionContentProps {
  children: ReactNode;
  className?: string;
}

/**
 * PageSectionContent component for consistent section content
 */
export function PageSectionContent({
  children,
  className,
}: PageSectionContentProps) {
  return (
    <div className={cn("prose prose-lg dark:prose-invert max-w-none", className)}>
      {children}
    </div>
  );
}
