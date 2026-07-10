import { motion } from "framer-motion";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Head } from "@/components/head";
import { IntelligentBackButton } from "@/components/ui/intelligent-back-button";

const sections = [
  {
    title: "1. Scope",
    content:
      "This notice explains how Codegx Technologies handles information collected through this website, contact forms, consultation requests, and related Codegx or Wakala OS communications.",
  },
  {
    title: "2. Information We Collect",
    content:
      "We may collect contact details you submit, including name, email address, phone number, organization, role, project context, and message content. We may also collect limited technical data such as browser type, IP address, pages visited, timestamps, and cookie preferences.",
  },
  {
    title: "3. How We Use Information",
    content:
      "We use information to respond to enquiries, prepare consultations, operate the website, maintain security, support project communication, and keep appropriate business or legal records.",
  },
  {
    title: "4. Protection and Retention",
    content:
      "We use reasonable administrative and technical safeguards to protect information. We keep information only as long as needed for the purpose collected, operational records, support history, or legal obligations.",
  },
  {
    title: "5. Sharing",
    content:
      "We do not sell personal information. We may share information with service providers that help us operate the website, communicate with you, secure systems, or meet legal requirements.",
  },
  {
    title: "6. Your Choices",
    content:
      "You may contact us to request access, correction, or deletion of information you have provided, subject to legal and operational retention requirements.",
  },
  {
    title: "7. Contact",
    content:
      "For privacy questions, contact Codegx Technologies at privacy@codegxtechnologies.org or visit https://codegxtechnologies.org.",
  },
];

export default function Privacy() {
  return (
    <>
      <Head
        title="Privacy Policy | Codegx Technologies"
        description="Privacy notice for Codegx Technologies website, contact data, operational communications, and security practices."
      />

      <MainLayout withContainer={true} navbarVariant="default">
        <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="px-4 py-8 sm:px-6 md:px-0 md:py-12">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-4 text-3xl font-bold text-slate-950 dark:text-white md:text-5xl">Privacy Policy</h1>
            <p className="text-sm text-slate-600 dark:text-slate-300">Last reviewed: July 10, 2026</p>
          </div>
        </motion.section>

        <section className="mx-auto max-w-4xl space-y-8 px-4 pb-12 sm:px-6 md:px-0">
          {sections.map((section) => (
            <motion.div key={section.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="mb-3 text-xl font-bold text-slate-950 dark:text-white">{section.title}</h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">{section.content}</p>
            </motion.div>
          ))}
          <IntelligentBackButton fallbackHref="/" label="Back" align="center" />
        </section>
      </MainLayout>
    </>
  );
}
