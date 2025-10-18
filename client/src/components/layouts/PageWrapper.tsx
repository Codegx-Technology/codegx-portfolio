import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Layout } from "@/components/layout";
import { SectionDivider } from "@/components/ui/section-divider";

interface PageWrapperProps {
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
  withAnimation?: boolean;
  withContainer?: boolean;
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  navbarVariant?: "default" | "transparent" | "elevated" | "bordered";
  showSearch?: boolean;
  showNotifications?: boolean;
}

/**
 * PageWrapper component for consistent page layout
 * Applies enterprise-grade styling to all pages
 */
export function PageWrapper({
  children,
  title,
  description,
  className,
  withAnimation = true,
  withContainer = true,
  spacing = "lg",
  navbarVariant,
  showSearch,
  showNotifications,
}: PageWrapperProps) {
  // Define spacing classes - mobile-first with reduced spacing
  const spacingClasses = {
    none: "space-y-0",
    sm: "space-y-3 sm:space-y-4 md:space-y-8",
    md: "space-y-4 sm:space-y-6 md:space-y-12",
    lg: "space-y-6 sm:space-y-8 md:space-y-16",
    xl: "space-y-8 sm:space-y-10 md:space-y-20",
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Render with Layout component
  return (
    <Layout
      withContainer={withContainer}
      className={className}
      navbarVariant={navbarVariant}
      showSearch={showSearch}
      showNotifications={showNotifications}
    >
      {withAnimation ? (
        <motion.div
          className={cn(spacingClasses[spacing])}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {children}
        </motion.div>
      ) : (
        <div className={cn(spacingClasses[spacing])}>
          {children}
        </div>
      )}
    </Layout>
  );
}

interface PageSectionProps {
  children: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  className?: string;
  withDivider?: boolean;
  dividerVariant?: "line" | "gradient" | "dots" | "wave" | "angle" | "none";
  dividerColor?: "default" | "primary" | "secondary" | "muted";
  withAnimation?: boolean;
  // Additional props used in pages
  background?: "default" | "muted" | "primary" | "gradient" | "pattern" | "none";
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  id?: string;
  dividerPosition?: "top" | "bottom" | "both";
}

/**
 * PageSection component for consistent section layout within pages
 */
export function PageSection({
  children,
  title,
  description,
  className,
  withDivider = false,
  dividerVariant = "line",
  dividerColor = "default",
  withAnimation = true,
  background,
  spacing,
  id,
  dividerPosition,
}: PageSectionProps) {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const content = (
    <>
      {title && (
        <div className="mb-6">
          {typeof title === "string" ? (
            <h2 className="text-3xl sm:text-4xl font-medium mb-3 text-primary">{title}</h2>
          ) : (
            title
          )}
          
          {description && (
            <div className="mt-3">
              {typeof description === "string" ? (
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{description}</p>
              ) : (
                description
              )}
            </div>
          )}
        </div>
      )}
      
      {children}
      
      {withDivider && (
        <div className="mt-16">
          <SectionDivider variant={dividerVariant} color={dividerColor} spacing="none" />
        </div>
      )}
    </>
  );

  return withAnimation ? (
    <motion.section
      className={cn("py-4 md:py-8 px-4 sm:px-6 lg:px-8", className)}
      variants={sectionVariants}
      id={id}
    >
      {content}
    </motion.section>
  ) : (
    <section className={cn("py-4 md:py-8 px-4 sm:px-6 lg:px-8", className)} id={id}>
      {content}
    </section>
  );
}

/**
 * PageHeader component for consistent page headers
 */
export function PageHeader({
  title,
  description,
  className,
}: {
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={cn("mb-12", className)}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        },
      }}
    >
      {typeof title === "string" ? (
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight mb-4">
          {title}
        </h1>
      ) : (
        title
      )}
      
      {description && (
        <div className="mt-4">
          {typeof description === "string" ? (
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {description}
            </p>
          ) : (
            description
          )}
        </div>
      )}
    </motion.div>
  );
}

/**
 * PageDivider component for consistent horizontal dividers
 */
export function PageDivider({ className }: { className?: string }) {
  return (
    <motion.hr
      className={cn("border-t border-border/30 my-16", className)}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.5 },
        },
      }}
    />
  );
}
