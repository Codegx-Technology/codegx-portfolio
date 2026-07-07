import { motion } from "framer-motion";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Head } from "@/components/head";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  CodeIcon,
  PuzzleIcon,
  ShieldIcon,
  WrenchIcon,
} from "@/components/icons/DocumentationIcons";

const principles = [
  {
    title: "Operational Integrity",
    description: "Systems must remain understandable, observable, and maintainable after launch.",
    icon: ShieldIcon,
  },
  {
    title: "Governed Automation",
    description: "Automation is designed with clear controls, traceability, and accountable decision boundaries.",
    icon: PuzzleIcon,
  },
  {
    title: "Production Discipline",
    description: "Engineering choices are made for resilience, security, continuity, and long-term ownership.",
    icon: WrenchIcon,
  },
  {
    title: "Practical Intelligence",
    description: "AI is used where it improves real workflows, not where it only creates novelty.",
    icon: CodeIcon,
  },
];

const capabilities = [
  {
    label: "01",
    title: "Dependable Software Platforms",
    description:
      "Purpose-built systems for organizations that need secure workflows, durable architecture, and practical operating control.",
  },
  {
    label: "02",
    title: "Wakala OS And Governed Workflows",
    description:
      "Structured automation for agentic workflows, onboarding, reporting, business process execution, and accountable operations.",
  },
  {
    label: "03",
    title: "Operational Intelligence",
    description:
      "Decision-support systems that make critical work visible, measurable, and easier to govern under pressure.",
  },
];

export default function About() {
  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55 },
    },
  };

  return (
    <>
      <Head
        title="About Codegx Technologies | Dependable Systems & Governed Automation"
        description="Codegx Technologies builds dependable software platforms, governed automation systems, and operational intelligence for organizations that need secure, maintainable execution."
      />

      <MainLayout withContainer={true} navbarVariant="default">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden px-4 py-8 sm:px-6 md:px-0 md:py-14"
        >
          <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-[#c8a951]/10 blur-3xl dark:bg-[#9f7b42]/10" />
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="relative z-10 lg:col-span-7">
              <div className="mb-4 inline-flex rounded-full border border-[#c8a951]/30 bg-[#c8a951]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#c8a951] dark:text-[#d6b464]">
                Codegx Technologies
              </div>
              <h1 className="max-w-4xl text-3xl font-bold leading-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
                Engineering Dependable Systems For Work That Must Stay Accountable
              </h1>
              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
                Codegx Technologies builds software platforms, governed automation, and operational intelligence systems
                for organizations that need security, clarity, and long-term maintainability.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#c8a951] dark:text-[#d6b464] md:text-base">
                Wakala OS sits within this mandate as the Codegx platform for structured business process automation
                and accountable agentic workflows.
              </p>
            </div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="relative z-10 lg:col-span-5"
            >
              <div className="rounded-lg border border-border bg-card/70 p-5 shadow-xl backdrop-blur md:p-6">
                <div className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Operating Mandate
                </div>
                <div className="space-y-4">
                  {["Secure by design", "Governed by default", "Maintainable after launch"].map((item) => (
                    <div key={item} className="flex items-center gap-3 border-b border-border pb-4 last:border-b-0 last:pb-0">
                      <div className="h-2.5 w-2.5 rotate-45 bg-[#c8a951] dark:bg-[#9f7b42]" />
                      <span className="text-sm font-medium text-slate-900 dark:text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="px-4 py-8 sm:px-6 md:px-0 md:py-12"
        >
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            <motion.div variants={itemVariants} className="rounded-lg border border-border bg-card p-5 md:p-6">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8a951]">Mission</div>
              <h2 className="mb-3 text-xl font-bold text-slate-950 dark:text-white md:text-2xl">
                Build systems that improve operational control.
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Our work turns complex delivery, automation, reporting, and decision workflows into dependable
                platforms that teams can operate with confidence.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="rounded-lg border border-border bg-card p-5 md:p-6">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8a951]">Direction</div>
              <h2 className="mb-3 text-xl font-bold text-slate-950 dark:text-white md:text-2xl">
                Make automation accountable, not ornamental.
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                We are positioning Codegx around governed execution: systems where automation, AI assistance, and
                human oversight work inside clear operating boundaries.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="px-4 py-8 sm:px-6 md:px-0 md:py-12"
        >
          <div className="mb-6 max-w-3xl">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8a951]">
              Operating Principles
            </div>
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white md:text-3xl">
              The standards behind our engineering work
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {principles.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <motion.div
                  key={principle.title}
                  variants={itemVariants}
                  transition={{ delay: index * 0.05 }}
                  className="group rounded-lg border border-border bg-card p-5 transition-colors duration-300 hover:border-[#c8a951]/50"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-[#c8a951]/10 text-[#c8a951] dark:text-[#d6b464]">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="mb-3 text-base font-bold text-slate-950 dark:text-white">{principle.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{principle.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="px-4 py-8 sm:px-6 md:px-0 md:py-12"
        >
          <div className="rounded-lg border border-border bg-[#111827] p-5 text-white dark:bg-[#15111a] md:p-7">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#d6b464]">
                  What We Build
                </div>
                <h2 className="text-2xl font-bold md:text-3xl">A focused technical estate</h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  We do not treat AI, automation, and software as separate buzzwords. We compose them into systems that
                  support real operating responsibilities.
                </p>
              </div>

              <div className="space-y-4 lg:col-span-8">
                {capabilities.map((capability) => (
                  <motion.div
                    key={capability.label}
                    variants={itemVariants}
                    className="grid gap-3 border-b border-white/10 pb-4 last:border-b-0 last:pb-0 md:grid-cols-[80px_1fr]"
                  >
                    <div className="text-sm font-semibold text-[#d6b464]">{capability.label}</div>
                    <div>
                      <h3 className="text-lg font-bold">{capability.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">{capability.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="px-4 py-8 text-center sm:px-6 md:px-0 md:py-12"
        >
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white md:text-3xl">
            Build With Operational Confidence
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Talk to us about software, governed automation, or Wakala OS workflows that need to remain visible,
            secure, and accountable in production.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact">
              <Button size="sm" className="rounded-full px-6 py-2 text-xs font-semibold md:text-sm">
                Start a Conversation
              </Button>
            </Link>
            <Link href="/agency">
              <Button size="sm" variant="outline" className="rounded-full px-6 py-2 text-xs font-semibold md:text-sm">
                Explore Wakala OS
              </Button>
            </Link>
          </div>
        </motion.section>
      </MainLayout>
    </>
  );
}
