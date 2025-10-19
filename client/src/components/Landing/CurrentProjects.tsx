import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
 */
export function CurrentProjects({
  caseStudies,
  className,
}: {
  caseStudies: Omit<CurrentProjectProps, 'index'>[];
  className?: string;
}) {
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

  return (
    <div className={cn("w-full", className)}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
          Current Projects
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Transforming industries with cutting-edge AI and innovative solutions
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
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
                <div className="p-8 h-full flex flex-col">
                  {/* Number badge */}
                  <div className="mb-6">
                    <span
                      className={cn(
                        "inline-flex items-center justify-center w-10 h-10 rounded-full font-bold text-white text-sm",
                        `bg-gradient-to-r ${accentColors[index]}`
                      )}
                    >
                      {index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                    style={{
                      backgroundImage: `linear-gradient(to right, var(--color-start), var(--color-end))`,
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Industry tag */}
                  <div className="mb-4">
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
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* CTA Link */}
                  <div className="flex items-center text-sm font-semibold text-slate-900 dark:text-white group-hover:gap-2 transition-all duration-300">
                    <span>Explore Project</span>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
                    `bg-gradient-to-r ${accentColors[index]} blur-2xl -z-10`
                  )}
                  style={{ filter: "blur(40px)" }}
                />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center"
      >
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Want to see more of our work?
        </p>
        <Link href="/case-studies">
          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-base font-semibold"
          >
            <i className="fas fa-briefcase mr-2"></i>
            View All Projects
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}

export default CurrentProjects;

