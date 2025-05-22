import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  className?: string;
  variant?: "default" | "gradient" | "diagonal" | "glow";
  size?: "sm" | "md" | "lg";
  align?: "left" | "center" | "right";
}

export function CTASection({
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
  variant = "default",
  size = "md",
  align = "center",
}: CTASectionProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Determine background and text styles based on variant
  const sectionClasses = cn(
    "relative overflow-hidden",
    {
      "py-12 md:py-16": size === "sm",
      "py-16 md:py-24": size === "md",
      "py-20 md:py-32": size === "lg",
      "bg-muted": variant === "default",
      "bg-gradient-to-r from-primary/10 to-secondary/10": variant === "gradient",
      "bg-transparent": variant === "diagonal" || variant === "glow",
    },
    className
  );

  const contentClasses = cn(
    "relative z-10 container mx-auto px-4 sm:px-6 lg:px-8",
    {
      "text-left": align === "left",
      "text-center": align === "center",
      "text-right": align === "right",
    }
  );

  const titleClasses = cn(
    "font-heading font-bold tracking-tight",
    {
      "text-2xl md:text-3xl": size === "sm",
      "text-3xl md:text-4xl": size === "md",
      "text-4xl md:text-5xl": size === "lg",
    }
  );

  const descriptionClasses = cn(
    "text-muted-foreground max-w-3xl",
    {
      "text-base": size === "sm",
      "text-lg": size === "md",
      "text-xl": size === "lg",
      "mx-auto": align === "center",
      "ml-auto": align === "right",
    }
  );

  const buttonContainerClasses = cn(
    "flex gap-4 mt-8",
    {
      "justify-start": align === "left",
      "justify-center": align === "center",
      "justify-end": align === "right",
      "flex-col sm:flex-row": align === "center",
    }
  );

  return (
    <section className={sectionClasses}>
      {/* Diagonal background */}
      {variant === "diagonal" && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 transform -skew-y-6"></div>
        </div>
      )}

      {/* Glow effect */}
      {variant === "glow" && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square bg-gradient-radial from-secondary/20 via-primary/5 to-transparent rounded-full"></div>
        </div>
      )}

      <motion.div
        className={contentClasses}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="max-w-4xl mx-auto" variants={itemVariants}>
          <motion.h2 className={titleClasses} variants={itemVariants}>
            {title}
          </motion.h2>
          
          {description && (
            <motion.p className={cn(descriptionClasses, "mt-4")} variants={itemVariants}>
              {description}
            </motion.p>
          )}
          
          <motion.div className={buttonContainerClasses} variants={itemVariants}>
            <Button
              variant={variant === "default" ? "default" : "electric"}
              size="lg"
              asChild
              className={variant === "glow" ? "shadow-lg shadow-secondary/20" : ""}
            >
              <Link href={primaryCta.href}>
                {primaryCta.text}
              </Link>
            </Button>
            
            {secondaryCta && (
              <Button
                variant={variant === "default" ? "outline" : "soft"}
                size="lg"
                asChild
              >
                <Link href={secondaryCta.href}>
                  {secondaryCta.text}
                </Link>
              </Button>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
