import { motion } from "framer-motion";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

interface CurrentProjectProps {
  title: string;
  description: string;
  industry: string;
  href: string;
}

export function CurrentProjects({
  caseStudies,
  className,
}: {
  caseStudies: CurrentProjectProps[];
  className?: string;
}) {
  return (
    <section className={cn("w-full", className)}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 md:mb-10"
      >
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#c8a951]/20 bg-[#c8a951]/10 text-[#c8a951] dark:text-[#9f7b42] text-xs md:text-sm font-medium mb-3">
          Active Platform Work
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 items-end">
          <h2 className="lg:col-span-5 text-2xl md:text-3xl font-bold text-[#2c1a22] dark:text-white">
            Current Projects
          </h2>
          <p className="lg:col-span-7 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            Selected platform work currently shaping the Codegx technical estate and its operating mandate.
          </p>
        </div>
      </motion.div>

      <div className="overflow-x-auto pb-2">
        <div className="grid w-full min-w-[1120px] grid-cols-4 overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-[#3d2128] dark:bg-[#2c1a22]">
          {caseStudies.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="border-r border-gray-200 last:border-r-0 dark:border-[#3d2128]"
            >
              <Link
                href={project.href}
                className="group flex h-full min-h-[310px] flex-col p-5 transition-colors hover:bg-[#c8a951]/5 md:p-6"
              >
                <div className="mb-8 flex items-start justify-between gap-4">
                  <span className="text-xs uppercase tracking-[0.22em] text-[#c8a951] dark:text-[#9f7b42]">
                    0{index + 1}
                  </span>
                  <span className="max-w-[160px] text-right text-xs uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">
                    {project.industry}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#2c1a22] dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>

                <div className="mt-6 border-t border-gray-200 pt-4 text-sm font-medium text-[#c8a951] dark:border-[#3d2128] dark:text-[#9f7b42]">
                  <span className="sr-only">Open {project.title}</span>
                  <span
                    aria-hidden="true"
                    className="inline-flex items-center gap-2 transition-transform group-hover:translate-x-1"
                  >
                    Open <span>-&gt;</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CurrentProjects;
