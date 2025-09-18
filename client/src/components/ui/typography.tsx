import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";

interface TypographyProps extends MotionProps {
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
  animate?: boolean;
}

/**
 * Heading1 component for consistent h1 styling
 */
export function Heading1({
  children,
  className,
  as: Component = "h1",
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "heading-1 scroll-m-20",
        className
      )}
    >
      {children}
    </Component>
  );
}

/**
 * Heading2 component for consistent h2 styling
 */
export function Heading2({
  children,
  className,
  as: Component = "h2",
  animate = false,
  ...motionProps
}: TypographyProps) {
  if (animate) {
    const MotionComponent = motion[Component as keyof typeof motion] as any;
    return (
      <MotionComponent
        className={cn(
          "heading-2 scroll-m-20 border-b pb-2 first:mt-0",
          className
        )}
        {...motionProps}
      >
        {children}
      </MotionComponent>
    );
  }

  return (
    <Component
      className={cn(
        "heading-2 scroll-m-20 border-b pb-2 first:mt-0",
        className
      )}
    >
      {children}
    </Component>
  );
}

/**
 * Heading3 component for consistent h3 styling
 */
export function Heading3({
  children,
  className,
  as: Component = "h3",
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "heading-3 scroll-m-20",
        className
      )}
    >
      {children}
    </Component>
  );
}

/**
 * Heading4 component for consistent h4 styling
 */
export function Heading4({
  children,
  className,
  as: Component = "h4",
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "heading-4 scroll-m-20",
        className
      )}
    >
      {children}
    </Component>
  );
}

/**
 * Paragraph component for consistent paragraph styling
 */
export function Paragraph({
  children,
  className,
  as: Component = "p",
  animate = false,
  ...motionProps
}: TypographyProps) {
  if (animate) {
    const MotionComponent = motion[Component as keyof typeof motion] as any;
    return (
      <MotionComponent
        className={cn(
          "body-base leading-7 [&:not(:first-child)]:mt-6",
          className
        )}
        {...motionProps}
      >
        {children}
      </MotionComponent>
    );
  }

  return (
    <Component
      className={cn(
        "body-base leading-7 [&:not(:first-child)]:mt-6",
        className
      )}
    >
      {children}
    </Component>
  );
}

/**
 * Lead component for larger, more prominent paragraphs
 */
export function Lead({
  children,
  className,
  as: Component = "p",
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "body-lg text-muted-foreground",
        className
      )}
    >
      {children}
    </Component>
  );
}

/**
 * Large component for larger text
 */
export function Large({
  children,
  className,
  as: Component = "div",
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "body-xl font-semibold",
        className
      )}
    >
      {children}
    </Component>
  );
}

/**
 * Small component for smaller text
 */
export function Small({
  children,
  className,
  as: Component = "small",
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "body-sm font-medium leading-none",
        className
      )}
    >
      {children}
    </Component>
  );
}

/**
 * Subtle component for muted text
 */
export function Subtle({
  children,
  className,
  as: Component = "p",
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "body-sm text-muted-foreground",
        className
      )}
    >
      {children}
    </Component>
  );
}

/**
 * BlockQuote component for quotations
 */
export function BlockQuote({
  children,
  className,
  as: Component = "blockquote",
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "mt-6 border-l-2 pl-6 italic",
        className
      )}
    >
      {children}
    </Component>
  );
}

/**
 * SectionTitle component for section headings
 */
export function SectionTitle({
  children,
  className,
  as: Component = "h2",
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "section-title mb-6",
        className
      )}
    >
      {children}
    </Component>
  );
}

/**
 * SectionSubtitle component for section subheadings
 */
export function SectionSubtitle({
  children,
  className,
  as: Component = "p",
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "section-subtitle mb-8",
        className
      )}
    >
      {children}
    </Component>
  );
}
