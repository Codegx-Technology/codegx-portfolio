import { motion } from "framer-motion";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Head } from "@/components/head";
import { Button } from "@/components/ui/button";
import { PageBackNav } from "@/components/ui/page-back-nav";
import { Link } from "wouter";
import {
  CodeIcon,
  PuzzleIcon,
  ShieldIcon,
  WrenchIcon,
} from "@/components/icons/DocumentationIcons";

const docs = [
  {
    title: "Operating Model",
    description: "How Codegx scopes dependable platforms, governed automation, and Wakala OS workflows.",
    icon: PuzzleIcon,
    sections: ["Engagement boundaries", "Workflow ownership", "Control requirements", "Operating handoff"],
  },
  {
    title: "Delivery Standards",
    description: "Engineering expectations for secure, maintainable, and observable systems.",
    icon: CodeIcon,
    sections: ["Architecture notes", "Release discipline", "Documentation baseline", "Support readiness"],
  },
  {
    title: "Governance Controls",
    description: "How access, approvals, escalation, and audit visibility are treated in delivery.",
    icon: ShieldIcon,
    sections: ["Access control", "Decision boundaries", "Audit trails", "Exception handling"],
  },
  {
    title: "Support and Change",
    description: "How we handle maintenance, workflow improvement, and operational continuity after launch.",
    icon: WrenchIcon,
    sections: ["Issue reporting", "Change requests", "Operational review", "Knowledge transfer"],
  },
];

export default function Documentation() {
  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <Head
        title="Documentation | Codegx Technologies"
        description="Documentation for Codegx Technologies delivery standards, governed automation, Wakala OS workflows, and support practices."
      />

      <MainLayout withContainer={true} navbarVariant="default">
        <PageBackNav fallbackHref="/" className="px-4 pt-8 sm:px-6 md:px-0" />

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-4 py-8 sm:px-6 md:px-0 md:py-12"
        >
          <div className="max-w-4xl">
            <div className="mb-4 inline-flex rounded-full border border-[#c8a951]/30 bg-[#c8a951]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-[#c8a951] dark:text-[#d6b464]">
              Documentation
            </div>
            <h1 className="text-3xl font-bold leading-tight text-slate-950 dark:text-white md:text-5xl">
              Delivery Notes for Systems That Must Stay Governed
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
              This hub summarizes how Codegx approaches software platforms, Wakala OS workflows, automation governance,
              and support. It is intentionally practical: scope, controls, ownership, and maintenance.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 gap-4 px-4 py-6 sm:px-6 md:grid-cols-2 md:px-0 md:py-10"
        >
          {docs.map((doc) => (
            <motion.div
              key={doc.title}
              variants={itemVariants}
              className="rounded-lg border border-border bg-card p-5 md:p-6"
            >
              <doc.icon size={30} className="mb-4 text-[#c8a951] dark:text-[#9f7b42]" />
              <h2 className="mb-2 text-lg font-bold text-slate-950 dark:text-white">{doc.title}</h2>
              <p className="mb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{doc.description}</p>
              <ul className="space-y-2">
                {doc.sections.map((section) => (
                  <li key={section} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <span className="h-1.5 w-1.5 rotate-45 bg-[#c8a951] dark:bg-[#9f7b42]" />
                    {section}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-4 my-8 rounded-lg border border-border bg-slate-50 p-5 dark:bg-[#15111a] sm:mx-6 md:mx-0 md:p-6"
        >
          <h2 className="mb-3 text-xl font-bold text-slate-950 dark:text-white">Need a Specific Delivery Note?</h2>
          <p className="mb-5 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            If you need documentation for an active implementation, integration boundary, support arrangement, or Wakala OS
            operating workflow, contact us and we will provide the relevant project-specific note.
          </p>
          <Link href="/contact">
            <Button size="sm" className="rounded-md px-5">
              Request Documentation
            </Button>
          </Link>
        </motion.section>

        <div className="px-4 pb-12 pt-2 sm:px-6 md:px-0">
          <PageBackNav fallbackHref="/" />
        </div>
      </MainLayout>
    </>
  );
}
