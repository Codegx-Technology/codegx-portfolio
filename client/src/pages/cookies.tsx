import { motion } from "framer-motion";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Head } from "@/components/head";
import { IntelligentBackButton } from "@/components/ui/intelligent-back-button";

const cookieSections = [
  {
    title: "1. Purpose",
    content:
      "Cookies and similar browser storage help the Codegx website operate reliably, remember basic preferences, and understand site performance. We keep this use limited and operational.",
  },
  {
    title: "2. Cookies We Use",
    content:
      "Essential cookies support basic site behavior. Preference cookies may remember display choices. Analytics or diagnostic cookies, when enabled, help us understand page performance, navigation issues, and errors.",
  },
  {
    title: "3. What We Do Not Use Cookies For",
    content:
      "We do not use cookies to sell personal information. We also avoid cookie practices that conflict with the trust, security, and governance expectations of the organizations we serve.",
  },
  {
    title: "4. Third-Party Services",
    content:
      "Some site functions may rely on providers for hosting, analytics, security, forms, or diagnostics. Those providers may process limited technical data under their own privacy and security terms.",
  },
  {
    title: "5. Managing Cookies",
    content:
      "You can manage or delete cookies through your browser settings. Blocking certain cookies may affect preferences, forms, analytics accuracy, or normal site behavior.",
  },
  {
    title: "6. Changes",
    content:
      "We may update this policy as our website and operating practices evolve. Material changes will be reflected on this page.",
  },
  {
    title: "7. Contact",
    content:
      "Questions about cookie use can be sent to privacy@codegxtechnologies.org or through https://codegxtechnologies.org.",
  },
];

export default function Cookies() {
  return (
    <>
      <Head
        title="Cookie Policy | Codegx Technologies"
        description="How Codegx Technologies uses limited cookies and browser storage for website operation, preferences, and diagnostics."
      />

      <MainLayout withContainer={true} navbarVariant="default">
        <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 md:px-0 md:py-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="border-b border-slate-200 pb-8 dark:border-slate-800"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#b88a3d]">
              Browser Storage
            </p>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Cookie Policy
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
              A concise note on the limited browser storage used to keep the website functional,
              measurable, and secure.
            </p>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-500">
              Last reviewed: July 10, 2026
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            className="mt-10 divide-y divide-slate-200 dark:divide-slate-800"
          >
            {cookieSections.map((section) => (
              <motion.section
                key={section.title}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
                }}
                className="grid gap-3 py-6 md:grid-cols-[220px_1fr] md:gap-8"
              >
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {section.title}
                </h2>
                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                  {section.content}
                </p>
              </motion.section>
            ))}
          </motion.div>

          <div className="pt-10">
            <IntelligentBackButton fallbackHref="/" label="Back" align="center" />
          </div>
        </section>
      </MainLayout>
    </>
  );
}
