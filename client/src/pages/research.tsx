import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Head } from "@/components/head";
import { PageWrapper, PageSection } from "@/components/layouts/PageWrapper";
import { PageBackNav } from "@/components/ui/page-back-nav";
import { Heading1, Heading2, Heading3, Paragraph, Lead, BlockQuote } from "@/components/ui/typography";
import { EnterpriseCard } from "@/components/ui/enterprise-card";
import { Button } from "@/components/ui/button";

const themes = [
  {
    title: "Engineering governance",
    question: "How should authority, responsibility and evidence be represented within AI-assisted engineering?",
  },
  {
    title: "Engineering execution",
    question: "How should engineering activities be organised and carried out within a governed architectural framework?",
  },
  {
    title: "Engineering reasoning",
    question: "How can reasoning support engineering work while remaining consistent with governance and execution constraints?",
  },
  {
    title: "Engineering infrastructure",
    question: "What reusable architectural components are required to support governed AI-assisted engineering?",
  },
  {
    title: "Architectural integration",
    question: "How should these themes interact to form a coherent and extensible engineering architecture?",
  },
];

const platformRoles = [
  "An implementation environment for the architectural ideas the programme proposes.",
  "A setting for controlled experimentation with different architectural approaches and workflows.",
  "A source of empirical evidence used to evaluate hypotheses and refine the architecture.",
];

const artefacts = [
  {
    name: "Governance Principles",
    detail: "The rules under which governed work is permitted, versioned alongside the code it constrains.",
    href: "https://github.com/peteroluoch/governance-principles",
  },
  {
    name: "Supervisor Bootstrap Protocol",
    detail: "Governance runtime. Verify, plan and apply against hash-verified managed files and a pinned canonical commit.",
    href: "https://github.com/peteroluoch/supervisor-bootstrap-protocol",
  },
  {
    name: "RPEK",
    detail: "Prompt execution kernel. Governed task definition, prompt build, admission, and execution evidence.",
    href: "https://pypi.org/project/rpek-lite/",
  },
];

const fields = [
  "Engineering AI governance",
  "Trustworthy artificial intelligence",
  "AI systems architecture",
  "Software engineering",
  "Engineering intelligence",
  "Human–AI collaboration",
  "Distributed intelligent systems",
  "Systems thinking",
  "Engineering knowledge management",
  "AI assurance and accountability",
];

export default function Research() {
  return (
    <PageWrapper>
      <Head
        title="Research | Codegx Technologies"
        description="An independent research programme investigating whether AI-assisted engineering can be organised around explicit architectural principles rather than collections of prompts."
      />

      <PageSection background="pattern" spacing="lg" className="relative overflow-hidden py-8 md:py-12">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <PageBackNav fallbackHref="/" className="relative z-10 mb-8" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-3xl"
        >
          <Heading1 className="mb-3">Research</Heading1>
          <Lead className="max-w-3xl">
            An independent programme investigating whether AI-assisted engineering can be organised around
            explicit architectural principles, rather than collections of prompts and tool-specific practice.
          </Lead>
        </motion.div>
      </PageSection>

      <PageSection spacing="lg">
        <div className="max-w-3xl">
          <Heading2 className="mb-4">General Engineering Intelligence Architecture</Heading2>
          <Paragraph className="mb-6">
            Most work on AI in software engineering asks how models can become more capable. This programme
            asks a different question: how should engineering intelligence be organised? It separates
            governance, execution, reasoning and engineering infrastructure into distinct architectural
            layers, each with a defined purpose and responsibility.
          </Paragraph>
          <BlockQuote className="my-8">
            Can a structured architectural approach improve the reliability, governance and reproducibility of
            AI-assisted engineering, compared with conventional interaction-based approaches?
          </BlockQuote>
          <Paragraph>
            The programme does not propose a foundation model, does not depend on a particular vendor, and does
            not treat any single implementation as the research itself. It is presented as an open agenda, not
            as a set of settled conclusions.
          </Paragraph>
        </div>
      </PageSection>

      <PageSection background="muted" spacing="lg">
        <div className="max-w-3xl mb-8">
          <Heading2 className="mb-3">Research themes</Heading2>
          <Paragraph>
            Five connected themes, investigated together rather than in isolation. Each one is a question the
            programme treats as open.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <EnterpriseCard className="h-full p-5 md:p-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-xs font-medium text-primary tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Heading3 className="text-base md:text-lg">{theme.title}</Heading3>
                </div>
                <Paragraph className="text-sm">{theme.question}</Paragraph>
              </EnterpriseCard>
            </motion.div>
          ))}
        </div>
      </PageSection>

      <PageSection spacing="lg">
        <div className="max-w-3xl">
          <Heading2 className="mb-3">Natural Distributed Intelligence Infrastructure</Heading2>
          <Paragraph className="mb-6">
            The reference implementation. It provides the environment in which the architectural ideas are
            realised in software, observed and evaluated, so that claims can be examined rather than asserted.
          </Paragraph>
          <ul className="space-y-3 mb-6">
            {platformRoles.map((role) => (
              <li key={role} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span>{role}</span>
              </li>
            ))}
          </ul>
          <Paragraph>
            It is a research platform, not a commercial product. Its purpose is to support investigation of the
            architecture under realistic engineering conditions, not to demonstrate a finished system.
          </Paragraph>
        </div>
      </PageSection>

      <PageSection background="muted" spacing="lg">
        <div className="max-w-3xl mb-8">
          <Heading2 className="mb-3">Governance artefacts</Heading2>
          <Paragraph>
            The programme is supported by working components rather than description alone. Each one can be
            cloned, installed or run.
          </Paragraph>
        </div>

        <div className="max-w-3xl divide-y divide-border">
          {artefacts.map((artefact) => (
            <div key={artefact.name} className="py-5 first:pt-0 last:pb-0">
              <Heading3 className="text-base md:text-lg mb-1">
                <a
                  href={artefact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary inline-flex items-center gap-2"
                >
                  {artefact.name}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Heading3>
              <Paragraph className="text-sm">{artefact.detail}</Paragraph>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection spacing="lg">
        <div className="max-w-3xl mb-8">
          <Heading2 className="mb-3">Fields of interest</Heading2>
          <Paragraph>
            The wider field the programme draws on and contributes to.
          </Paragraph>
        </div>

        <div className="max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-x-8">
          {fields.map((field) => (
            <div key={field} className="border-b border-border py-3 text-sm text-muted-foreground">
              {field}
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection background="muted" spacing="lg">
        <div className="max-w-3xl">
          <Heading2 className="mb-3">Collaboration</Heading2>
          <Paragraph className="mb-6">
            The programme is intended for academic collaboration — supervision, critical evaluation, comparative
            study and joint publication. Findings are treated as open questions rather than positions to defend,
            and evidence that challenges the architecture is as useful as evidence that supports it.
          </Paragraph>
          <Paragraph className="mb-8">
            For the research prospectus, or to discuss collaboration, get in touch.
          </Paragraph>
          <Button asChild>
            <Link href="/contact">
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </PageSection>
    </PageWrapper>
  );
}
