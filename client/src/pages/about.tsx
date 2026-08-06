import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
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
    title: "Governance by Design",
    description: "Routing, approvals, state, and audit paths are designed before execution is automated.",
    icon: PuzzleIcon,
  },
  {
    title: "Production Discipline",
    description: "Engineering choices are made for resilience, security, continuity, and long-term ownership.",
    icon: WrenchIcon,
  },
  {
    title: "Practical Intelligence",
    description: "AI is used where it improves judgment, workflow visibility, or operating speed without weakening control.",
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
    title: "Wakala OS And Governed Operations",
    description:
      "Structured execution for agentic workflows, onboarding, reporting, business processes, and accountable operations.",
  },
  {
    label: "03",
    title: "Operational Intelligence",
    description:
      "Decision-support systems that make critical work visible, measurable, and easier to govern under pressure.",
  },
];

export default function About() {
  const [activePrinciple, setActivePrinciple] = useState(0);
  const shouldReduceMotion = useReducedMotion();

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
        title="About Codegx Technologies | Dependable Software Systems"
        description="Codegx Technologies builds dependable software platforms, governed workflow systems, and operational intelligence for organizations that need secure, maintainable execution."
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
                Codegx Technologies builds software platforms, governed workflow systems, and operational intelligence
                for organizations that need security, clarity, and long-term maintainability.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#c8a951] dark:text-[#d6b464] md:text-base">
                Wakala OS sits within this mandate as the Codegx platform for structured business process execution
                and accountable agentic workflows.
              </p>
            </div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="relative z-10 lg:col-span-5"
            >
              <div className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Operating Mandate
              </div>
              <div className="relative flex min-h-[300px] flex-col items-center justify-center gap-7 py-4 md:block md:min-h-[270px] md:py-0">
                <motion.div
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.35, delay: 0.1 }}
                  className="absolute left-1/2 top-5 h-3 w-3 -translate-x-1/2 rotate-45 border border-[#c8a951] bg-[#c8a951]/20 dark:border-[#d6b464] md:top-1/2 md:-translate-y-1/2"
                />

                <motion.div
                  aria-hidden="true"
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.45, delay: 0.25 }}
                  className="pointer-events-none absolute bottom-4 left-1/2 top-4 w-px origin-top bg-[#c8a951]/35 md:bottom-auto md:left-1/2 md:top-[16%] md:h-[34%] md:w-px md:-translate-x-1/2"
                />
                <motion.div
                  aria-hidden="true"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.45, delay: 0.4 }}
                  className="pointer-events-none absolute left-[23%] top-[62%] hidden h-px w-[27%] origin-right rotate-[20deg] bg-[#c8a951]/35 md:block"
                />
                <motion.div
                  aria-hidden="true"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.45, delay: 0.55 }}
                  className="pointer-events-none absolute right-[23%] top-[62%] hidden h-px w-[27%] origin-left -rotate-[20deg] bg-[#c8a951]/35 md:block"
                />

                {["Secure by design", "Governed by default", "Maintainable after launch"].map((item, index) => (
                  <motion.div
                    key={item}
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                    transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.45, delay: 0.35 + index * 0.12 }}
                    className={`relative z-10 flex w-full items-center gap-3 pl-6 md:absolute md:w-auto md:max-w-[180px] md:pl-0 ${
                      index === 0
                        ? "md:left-1/2 md:top-[8%] md:-translate-x-1/2 md:text-center"
                        : index === 1
                          ? "md:bottom-[7%] md:left-0"
                          : "md:bottom-[7%] md:right-0 md:text-right"
                    }`}
                  >
                    <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rotate-45 bg-[#c8a951] dark:bg-[#9f7b42]" />
                    <span className="text-sm font-medium text-slate-900 dark:text-white">{item}</span>
                  </motion.div>
                ))}
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
          <div className="grid gap-8 md:grid-cols-2 md:gap-0">
            <motion.div variants={itemVariants} className="md:border-r md:border-border md:pr-8">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8a951]">Operating Philosophy</div>
              <h2 className="mb-3 text-xl font-bold text-slate-950 dark:text-white md:text-2xl">
                Design for control, continuity, and clear ownership.
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Our work turns complex software delivery, reporting, and decision workflows into systems teams can
                run with confidence long after launch.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="md:pl-8">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8a951]">Direction</div>
              <h2 className="mb-3 text-xl font-bold text-slate-950 dark:text-white md:text-2xl">
                Make intelligent operations accountable, not ornamental.
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                We position Codegx around governed execution: systems where routing, state, automation, AI assistance,
                and human oversight work inside clear operating boundaries.
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
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8a951]">
              Operating Principles
            </div>
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white md:text-3xl">
              The standards behind our engineering work
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.5fr)] md:gap-12">
            <div role="tablist" aria-label="Operating principles" className="border-l border-border">
              {principles.map((principle, index) => {
                const isActive = activePrinciple === index;
                return (
                  <button
                    key={principle.title}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`principle-panel-${index}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActivePrinciple(index)}
                    onFocus={() => setActivePrinciple(index)}
                    onKeyDown={(event) => {
                      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                        event.preventDefault();
                        const nextIndex = (index + 1) % principles.length;
                        setActivePrinciple(nextIndex);
                        document.getElementById(`principle-tab-${nextIndex}`)?.focus();
                      }
                      if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                        event.preventDefault();
                        const previousIndex = (index - 1 + principles.length) % principles.length;
                        setActivePrinciple(previousIndex);
                        document.getElementById(`principle-tab-${previousIndex}`)?.focus();
                      }
                    }}
                    id={`principle-tab-${index}`}
                    className={`group relative flex w-full items-center gap-4 border-b border-border px-5 py-4 text-left transition-colors duration-300 first:border-t md:py-5 ${
                      isActive ? "text-slate-950 dark:text-white" : "text-muted-foreground hover:text-slate-950 dark:hover:text-white"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute -left-px top-0 h-full w-0.5 origin-center bg-[#c8a951] transition-transform duration-300 ${
                        isActive ? "scale-y-100" : "scale-y-0"
                      }`}
                    />
                    <span className="text-xs font-semibold tracking-[0.2em] text-[#c8a951]">{`0${index + 1}`}</span>
                    <span className="text-sm font-semibold md:text-base">{principle.title}</span>
                  </button>
                );
              })}
            </div>

            <div className="min-h-[220px] md:min-h-[260px]" aria-live="polite">
              {principles.map((principle, index) => {
                if (activePrinciple !== index) return null;
                const IconComponent = principle.icon;
                return (
                  <motion.div
                    key={principle.title}
                    id={`principle-panel-${index}`}
                    role="tabpanel"
                    aria-labelledby={`principle-tab-${index}`}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3, ease: "easeOut" }}
                    className="border-b border-border pb-8 md:border-b-0 md:pb-0"
                  >
                    <div className="mb-6 flex h-12 w-12 items-center justify-start text-[#c8a951] dark:text-[#d6b464]">
                      <IconComponent size={28} />
                    </div>
                    <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8a951]">{`0${index + 1}`}</div>
                    <h3 className="text-2xl font-bold text-slate-950 dark:text-white md:text-3xl">{principle.title}</h3>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">{principle.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="px-4 py-8 sm:px-6 md:px-0 md:py-12"
        >
          <div className="border-y border-border bg-[#111827] px-5 py-7 text-white dark:bg-[#15111a] md:px-7 md:py-9">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#d6b464]">
                  What We Build
                </div>
                <h2 className="text-2xl font-bold md:text-3xl">A focused technical estate</h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  We do not treat AI, automation, and software as separate buzzwords. We compose them into systems with clear routing, state, and observability so they
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
            Talk to us about software, governed operations, or Wakala OS workflows that need to remain visible,
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
