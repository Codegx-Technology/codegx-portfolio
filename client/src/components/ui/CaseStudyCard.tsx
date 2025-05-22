import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

interface CaseStudyCardProps {
  title: string;
  description: string;
  industry: string;
  logo: string;
  href: string;
  className?: string;
}

/**
 * CaseStudyCard component to highlight enterprise projects and outcomes
 */
export function CaseStudyCard({
  title,
  description,
  industry,
  logo,
  href,
  className,
}: CaseStudyCardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-lg transition-all space-y-4",
        className
      )}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="h-10">
        {logo ? (
          <img
            src={logo}
            alt={title}
            className="h-10 w-auto mb-2"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://via.placeholder.com/120x40?text=Logo";
            }}
          />
        ) : (
          <div className="h-10 w-32 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
            {title}
          </div>
        )}
      </div>
      
      <h3 className="text-xl font-semibold">{title}</h3>
      
      <p className="text-sm text-muted-foreground">{description}</p>
      
      <p className="text-xs uppercase font-medium text-primary">{industry}</p>
      
      <Link href={href} className="text-sm font-medium text-primary hover:underline inline-block">
        Read full case study →
      </Link>
    </motion.div>
  );
}

interface CaseStudyGridProps {
  title?: string;
  description?: string;
  caseStudies: Omit<CaseStudyCardProps, 'className'>[];
  className?: string;
}

/**
 * CaseStudyGrid component to display multiple case studies in a grid
 */
export function CaseStudyGrid({
  title,
  description,
  caseStudies,
  className,
}: CaseStudyGridProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section className={cn("py-24", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {title && (
          <div className="text-center space-y-4">
            <motion.h2
              className="text-3xl sm:text-4xl font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h2>
            
            {description && (
              <motion.p
                className="text-muted-foreground max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {description}
              </motion.p>
            )}
          </div>
        )}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caseStudies.map((caseStudy, index) => (
            <motion.div key={index} variants={itemVariants}>
              <CaseStudyCard {...caseStudy} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
