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
        <div className="inline-flex items-center rounded-full border border-[#c8a951]/20 bg-[#c8a951]/10 px-4 py-1.5 text-xs font-medium text-[#c8a951] dark:text-[#9f7b42] md:text-sm">
          Active Platform Work
        </div>
        <div className="mt-3 grid grid-cols-1 items-end gap-4 lg:grid-cols-12 lg:gap-10">
          <h2 className="text-2xl font-bold text-[#2c1a22] dark:text-white md:text-3xl lg:col-span-5">
            Current Projects
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-300 lg:col-span-7">
            Selected platform work currently shaping the Codegx technical estate and its operating mandate.
          </p>
        </div>
      </motion.div>

      <div className="border-t border-[#2c1a22]/15 dark:border-white/15">
        {caseStudies.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="group border-b border-[#2c1a22]/15 dark:border-white/15"
          >
            <Link
              href={project.href}
              className="grid gap-5 py-6 transition-colors hover:bg-[#c8a951]/5 focus-visible:bg-[#c8a951]/5 focus-visible:outline-none md:grid-cols-[72px_minmax(180px,0.85fr)_minmax(0,1.55fr)_auto] md:items-center md:gap-6 md:py-7"
            >
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#c8a951] dark:text-[#9f7b42]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <span className="mb-1 block text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#c8a951]/90 dark:text-[#9f7b42]">
                  {project.industry}
                </span>
                <h3 className="text-xl font-bold text-[#2c1a22] transition-colors group-hover:text-[#8f7130] dark:text-white dark:group-hover:text-[#c8a951]">
                  {project.title}
                </h3>
              </div>

              <p className="max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {project.description}
              </p>

              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-[#2c1a22] transition-transform group-hover:translate-x-1 dark:text-white">
                Open <span aria-hidden="true">-&gt;</span>
                <span className="sr-only">{project.title}</span>
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default CurrentProjects;
