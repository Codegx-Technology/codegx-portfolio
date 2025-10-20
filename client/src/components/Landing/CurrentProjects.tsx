import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { TendaNowIcon, CodeCrusherIcon, BizGenIcon } from "@/components/icons/CustomSVGIcons";

interface CurrentProjectProps {
  title: string;
  description: string;
  industry: string;
  href: string;
  index: number;
}

/**
 * CurrentProjects component - Unique corporate layout for featured projects
 * Displays TendaNow, CodeCrusher, and BizGen with distinctive design
 * Mobile: 1 item per page with pagination
 * Desktop: 3 items per page
 */
export function CurrentProjects({
  caseStudies,
  className,
}: {
  caseStudies: Omit<CurrentProjectProps, 'index'>[];
  className?: string;
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(caseStudies.length / itemsPerPage);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Unique accent colors for each project
  const accentColors = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-amber-500 to-orange-500",
  ];

  const borderColors = [
    "border-blue-500/30 hover:border-blue-500/60",
    "border-purple-500/30 hover:border-purple-500/60",
    "border-amber-500/30 hover:border-amber-500/60",
  ];

  const bgGradients = [
    "bg-gradient-to-br from-blue-500/5 to-cyan-500/5",
    "bg-gradient-to-br from-purple-500/5 to-pink-500/5",
    "bg-gradient-to-br from-amber-500/5 to-orange-500/5",
  ];

  // Project icons
  const projectIcons = [
    TendaNowIcon,
    CodeCrusherIcon,
    BizGenIcon,
  ];

  // Icon colors matching accent colors
  const iconColors = [
    "text-blue-500",
    "text-purple-500",
    "text-amber-500",
  ];

  return (
    <div className={cn("w-full", className)}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 md:mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
          Current Projects
        </h2>
        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Delivering enterprise-grade solutions across AI, digital transformation, and custom development
        </p>
      </motion.div>

      {/* Desktop View - 3 items per page */}
      <div className="hidden md:block">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8"
        >
          {caseStudies.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group"
            >
              <Link href={project.href}>
                <div
                  className={cn(
                    "relative h-full rounded-2xl border-2 transition-all duration-300 overflow-hidden",
                    "backdrop-blur-sm bg-white/50 dark:bg-slate-900/50",
                    borderColors[index],
                    bgGradients[index],
                    "hover:shadow-2xl hover:scale-105 cursor-pointer"
                  )}
                >
                  {/* Accent bar at top */}
                  <div
                    className={cn(
                      "h-1 w-full bg-gradient-to-r",
                      accentColors[index]
                    )}
                  />

                  {/* Content */}
                  <div className="p-6 md:p-8 h-full flex flex-col">
                    {/* Project Icon */}
                    <div className="mb-4 md:mb-6">
                      {projectIcons[index] && (
                        <div className={cn("w-12 h-12", iconColors[index])}>
                          {projectIcons[index]()}
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                      style={{
                        backgroundImage: `linear-gradient(to right, var(--color-start), var(--color-end))`,
                      }}
                    >
                      {project.title}
                    </h3>

                    {/* Industry tag */}
                    <div className="mb-3 md:mb-4">
                      <span
                        className={cn(
                          "inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider",
                          "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        )}
                      >
                        {project.industry}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 md:mb-6 flex-grow">
                      {project.description}
                    </p>

                    {/* CTA Link */}
                    <div className="flex items-center text-xs md:text-sm font-semibold text-slate-900 dark:text-white group-hover:gap-2 transition-all duration-300">
                      <span>Learn More</span>
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div
                    className={cn(
                      "absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none",
                      `bg-gradient-to-r ${accentColors[index]} blur-2xl -z-10`
                    )}
                    style={{ filter: "blur(40px)" }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile View - 1 item per page with pagination */}
      <div className="md:hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          {caseStudies.slice(currentPage, currentPage + 1).map((project, index) => {
            const actualIndex = currentPage + index;
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group"
              >
                <Link href={project.href}>
                  <div
                    className={cn(
                      "relative h-full rounded-2xl border-2 transition-all duration-300 overflow-hidden",
                      "backdrop-blur-sm bg-white/50 dark:bg-slate-900/50",
                      borderColors[actualIndex],
                      bgGradients[actualIndex],
                      "hover:shadow-2xl hover:scale-105 cursor-pointer"
                    )}
                  >
                    {/* Accent bar at top */}
                    <div
                      className={cn(
                        "h-1 w-full bg-gradient-to-r",
                        accentColors[actualIndex]
                      )}
                    />

                    {/* Content */}
                    <div className="p-6 h-full flex flex-col">
                      {/* Project Icon */}
                      <div className="mb-4">
                        {projectIcons[actualIndex] && (
                          <div className={cn("w-12 h-12", iconColors[actualIndex])}>
                            {projectIcons[actualIndex]()}
                          </div>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                      </h3>

                      {/* Industry tag */}
                      <div className="mb-3">
                        <span
                          className={cn(
                            "inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider",
                            "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                          )}
                        >
                          {project.industry}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4 flex-grow">
                        {project.description}
                      </p>

                      {/* CTA Link */}
                      <div className="flex items-center text-xs font-semibold text-slate-900 dark:text-white group-hover:gap-2 transition-all duration-300">
                        <span>Explore Project</span>
                        <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                          →
                        </span>
                      </div>
                    </div>

                    {/* Hover glow effect */}
                    <div
                      className={cn(
                        "absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none",
                        `bg-gradient-to-r ${accentColors[actualIndex]} blur-2xl -z-10`
                      )}
                      style={{ filter: "blur(40px)" }}
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile Pagination Controls */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setCurrentPage((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)}
            className="p-2 rounded-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5 text-slate-900 dark:text-white" />
          </button>

          <div className="flex gap-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === currentPage
                    ? "w-8 bg-slate-900 dark:bg-white"
                    : "w-2 bg-gray-300 dark:bg-slate-600 hover:bg-gray-400 dark:hover:bg-slate-500"
                )}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((prev) => (prev + 1) % caseStudies.length)}
            className="p-2 rounded-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5 text-slate-900 dark:text-white" />
          </button>
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center"
      >
        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-4">
          Ready to transform your business with our expertise?
        </p>
        <Link href="/services">
          <Button
            size="sm"
            className="rounded-full px-6 py-2 text-xs md:text-sm font-semibold"
          >
            <i className="fas fa-arrow-right mr-2"></i>
            Explore Our Services
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}

export default CurrentProjects;

