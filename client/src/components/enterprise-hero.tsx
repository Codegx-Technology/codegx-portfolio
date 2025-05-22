import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

interface EnterpriseHeroProps {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  description?: string | React.ReactNode;
  primaryCta?: {
    text: string;
    href: string;
    icon?: React.ReactNode;
  };
  secondaryCta?: {
    text: string;
    href: string;
    icon?: React.ReactNode;
  };
  image?: string;
  imageAlt?: string;
  backgroundPattern?: boolean;
  align?: "left" | "center" | "right";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
}

export function EnterpriseHero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  image,
  imageAlt = "Hero image",
  backgroundPattern = true,
  align = "center",
  size = "lg",
  className,
  children,
}: EnterpriseHeroProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  return (
    <section
      className={cn(
        "relative overflow-hidden",
        {
          "py-16 md:py-20": size === "sm",
          "py-20 md:py-28": size === "md",
          "py-24 md:py-32 lg:py-40": size === "lg",
        },
        className
      )}
    >
      {/* Background pattern */}
      {backgroundPattern && (
        <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20">
          <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>
      )}

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className={cn(
            "max-w-4xl mx-auto",
            {
              "text-left": align === "left",
              "text-center mx-auto": align === "center",
              "text-right ml-auto": align === "right",
            }
          )}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Subtitle */}
          {subtitle && (
            <motion.div variants={itemVariants} className="mb-4">
              {typeof subtitle === "string" ? (
                <p className="text-secondary font-medium tracking-wide text-sm md:text-base uppercase">
                  {subtitle}
                </p>
              ) : (
                subtitle
              )}
            </motion.div>
          )}

          {/* Title */}
          <motion.div variants={itemVariants} className="mb-6">
            {typeof title === "string" ? (
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                {title.split(" ").map((word, i) => (
                  <span key={i}>
                    {i > 0 && " "}
                    <span className="inline-block">
                      {word.split("").map((char, j) => (
                        <motion.span
                          key={j}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.5 + i * 0.1 + j * 0.05,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="inline-block"
                        >
                          {char}
                        </motion.span>
                      ))}
                    </span>
                  </span>
                ))}
              </h1>
            ) : (
              title
            )}
          </motion.div>

          {/* Description */}
          {description && (
            <motion.div variants={itemVariants} className="mb-8">
              {typeof description === "string" ? (
                <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                  {description}
                </p>
              ) : (
                description
              )}
            </motion.div>
          )}

          {/* Call to action buttons */}
          {(primaryCta || secondaryCta) && (
            <motion.div
              variants={itemVariants}
              className={cn(
                "flex gap-4 mt-8",
                {
                  "justify-start": align === "left",
                  "justify-center": align === "center",
                  "justify-end": align === "right",
                  "flex-col sm:flex-row": align === "center",
                }
              )}
            >
              {primaryCta && (
                <Button
                  variant="electric"
                  size="lg"
                  asChild
                  className="font-medium"
                >
                  <Link href={primaryCta.href}>
                    {primaryCta.icon && <span className="mr-2">{primaryCta.icon}</span>}
                    {primaryCta.text}
                  </Link>
                </Button>
              )}
              {secondaryCta && (
                <Button
                  variant="soft"
                  size="lg"
                  asChild
                  className="font-medium"
                >
                  <Link href={secondaryCta.href}>
                    {secondaryCta.icon && <span className="mr-2">{secondaryCta.icon}</span>}
                    {secondaryCta.text}
                  </Link>
                </Button>
              )}
            </motion.div>
          )}

          {/* Optional children */}
          {children && (
            <motion.div
              variants={itemVariants}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}

          {/* Hero image */}
          {image && (
            <motion.div
              variants={itemVariants}
              className="mt-12 md:mt-16"
            >
              <motion.img
                src={image}
                alt={imageAlt}
                className="w-full h-auto rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
