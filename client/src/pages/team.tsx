import { motion } from "framer-motion";
import { Link } from "wouter";
import { Head } from "@/components/head";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { CodeIcon, PuzzleIcon, ShieldIcon, WrenchIcon } from "@/components/icons/DocumentationIcons";

const leaders = [
  {
    name: "Peter O. Oluoch",
    role: "Founder & Chief Technology Architect",
    focus:
      "Architecture, platform direction, governance, and the technical operating standards behind Codegx systems.",
    initials: "PO",
  },
  {
    name: "AWK Michaels",
    role: "Operations Manager",
    focus:
      "Delivery coordination, operating rhythm, client follow-through, and the discipline that keeps execution visible.",
    initials: "AM",
  },
];

const practiceAreas = [
  {
    title: "Engineering Practice",
    description: "Platform engineering, backend systems, integrations, and maintainable software delivery.",
    icon: CodeIcon,
  },
  {
    title: "AI & Automation Practice",
    description: "Workflow automation, accountable agents, operational intelligence, and control-first execution.",
    icon: PuzzleIcon,
  },
  {
    title: "Product & Delivery Advisory",
    description: "Discovery, requirements shaping, implementation planning, and client operating alignment.",
    icon: WrenchIcon,
  },
  {
    title: "Research & Documentation",
    description: "Knowledge systems, technical writing, policy-aware documentation, and structured delivery records.",
    icon: ShieldIcon,
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Team() {
  return (
    <>
      <Head
        title="Our Team | Codegx Technologies"
        description="Meet the Codegx Technologies leadership and delivery practice areas behind our software, automation, and governed operations work."
      />

      <MainLayout withContainer={true} navbarVariant="default">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden px-4 py-8 sm:px-6 md:px-0 md:py-14"
        >
          <div className="absolute right-0 top-8 h-64 w-64 rounded-full bg-[#c8a951]/10 blur-3xl dark:bg-[#9f7b42]/10" />
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex rounded-full border border-[#c8a951]/30 bg-[#c8a951]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#c8a951] dark:text-[#d6b464]">
              Team
            </div>
            <h1 className="text-3xl font-bold leading-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              A Lean Team Built Around Engineering Discipline
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
              Codegx Technologies is founder-led, operations-aware, and supported by focused delivery practices for
              software platforms, governed automation, and operational intelligence.
            </p>
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
              Core Leadership
            </div>
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white md:text-3xl">
              Clear ownership at the centre
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            {leaders.map((leader) => (
              <motion.article
                key={leader.name}
                variants={itemVariants}
                className="rounded-lg border border-border bg-card p-5 shadow-sm transition-colors duration-300 hover:border-[#c8a951]/50 md:p-6"
              >
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md border border-[#c8a951]/30 bg-[#c8a951]/10 text-base font-bold text-[#c8a951] dark:text-[#d6b464]">
                    {leader.initials}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">{leader.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-[#9f7b42] dark:text-[#d6b464]">{leader.role}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{leader.focus}</p>
              </motion.article>
            ))}
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
                  Delivery Model
                </div>
                <h2 className="text-2xl font-bold md:text-3xl">A compact team, extended by practice depth</h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  The public team stays deliberately precise. Around the leadership core, delivery is organised by
                  capability so each engagement has the right technical and operational attention.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
                {practiceAreas.map((area) => {
                  const Icon = area.icon;
                  return (
                    <motion.article
                      key={area.title}
                      variants={itemVariants}
                      className="rounded-lg border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-[#d6b464]/50"
                    >
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-[#c8a951]/10 text-[#d6b464]">
                        <Icon size={24} />
                      </div>
                      <h3 className="mb-3 text-base font-bold">{area.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-300">{area.description}</p>
                    </motion.article>
                  );
                })}
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
            Work With The Codegx Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Speak with us about software platforms, governed workflows, or operational systems that need clear
            ownership from discovery to launch.
          </p>
          <div className="mt-6 flex justify-center">
            <Link href="/contact">
              <Button size="sm" className="rounded-full px-6 py-2 text-xs font-semibold md:text-sm">
                Start a Conversation
              </Button>
            </Link>
          </div>
        </motion.section>
      </MainLayout>
    </>
  );
}
