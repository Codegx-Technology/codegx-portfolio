import React from "react";
import { cn } from "@/lib/utils";

interface EnterpriseContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
  children: React.ReactNode;
}

/**
 * Enterprise-grade container component with consistent max-width constraints
 */
export function EnterpriseContainer({
  size = "lg",
  className,
  children,
  ...props
}: EnterpriseContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 md:px-8",
        {
          "max-w-screen-sm": size === "sm", // 640px
          "max-w-screen-md": size === "md", // 768px
          "max-w-screen-lg": size === "lg", // 1024px
          "max-w-screen-xl": size === "xl", // 1280px
          "max-w-[1400px]": size === "full", // 1400px
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface EnterpriseSectionProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children: React.ReactNode;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  containerClassName?: string;
  withContainer?: boolean;
}

/**
 * Enterprise-grade section component with consistent spacing
 */
export function EnterpriseSection({
  className,
  children,
  containerSize = "lg",
  containerClassName,
  withContainer = true,
  ...props
}: EnterpriseSectionProps) {
  return (
    <section
      className={cn("py-12 md:py-16 lg:py-20", className)}
      {...props}
    >
      {withContainer ? (
        <EnterpriseContainer size={containerSize} className={containerClassName}>
          {children}
        </EnterpriseContainer>
      ) : (
        children
      )}
    </section>
  );
}

interface EnterpriseGridProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
}

/**
 * Enterprise-grade grid component with responsive columns
 */
export function EnterpriseGrid({
  className,
  children,
  cols = 3,
  gap = "md",
  ...props
}: EnterpriseGridProps) {
  return (
    <div
      className={cn(
        "grid",
        {
          "grid-cols-1": cols === 1,
          "grid-cols-1 md:grid-cols-2": cols === 2,
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3": cols === 3,
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4": cols === 4,
          "gap-4": gap === "sm",
          "gap-6": gap === "md",
          "gap-8": gap === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
