import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
  variant?: "default" | "gradient" | "angled";
}

/**
 * Reusable Call-to-Action section with headline, subtext, and CTA button
 */
export function CTASection({
  title,
  description = "Request a tailored demo and see how Astella transforms operations.",
  buttonText = "Request Demo",
  buttonLink = "/contact",
  className,
  variant = "default",
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

  // Determine background based on variant
  const backgroundClasses = {
    default: "bg-muted",
    gradient: "bg-gradient-to-br from-primary/10 to-white dark:from-[#0f172a]/40 dark:to-background",
    angled: "bg-background relative overflow-hidden",
  };

  return (
    <section
      className={cn(
        "py-24 px-4 sm:px-6 lg:px-8",
        backgroundClasses[variant],
        className
      )}
    >
      {/* Angled background for the angled variant */}
      {variant === "angled" && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-white dark:from-[#0f172a]/40 dark:to-background transform -skew-y-6"></div>
        </div>
      )}

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div className="text-center space-y-6" variants={containerVariants}>
          <motion.h2
            className="text-3xl sm:text-4xl font-semibold text-center mb-4"
            variants={itemVariants}
          >
            {title}
          </motion.h2>

          {description && (
            <motion.p
              className="text-center text-muted-foreground max-w-2xl mx-auto mb-6"
              variants={itemVariants}
            >
              {description}
            </motion.p>
          )}

          <motion.div className="flex justify-center" variants={itemVariants}>
            <Button asChild>
              <Link href={buttonLink}>{buttonText}</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
