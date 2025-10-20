import { motion } from "framer-motion";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Head } from "@/components/head";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  RocketIcon,
  CodeIcon,
  BrainIcon,
  PuzzleIcon,
  ShieldIcon,
  WrenchIcon,
} from "@/components/icons/DocumentationIcons";

export default function Documentation() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const docs = [
    {
      title: "Getting Started",
      description: "Learn the basics of working with Codegx Technologies solutions",
      icon: RocketIcon,
      sections: [
        "Introduction to our platform",
        "Account setup and configuration",
        "First project setup",
        "API key generation"
      ]
    },
    {
      title: "API Reference",
      description: "Complete API documentation for developers",
      icon: CodeIcon,
      sections: [
        "Authentication",
        "Endpoints overview",
        "Request/Response formats",
        "Error handling"
      ]
    },
    {
      title: "AI & ML Solutions",
      description: "Documentation for our AI and machine learning services",
      icon: BrainIcon,
      sections: [
        "Model deployment",
        "Training custom models",
        "Inference optimization",
        "Performance monitoring"
      ]
    },
    {
      title: "Integration Guides",
      description: "Step-by-step guides for integrating with popular platforms",
      icon: PuzzleIcon,
      sections: [
        "REST API integration",
        "Webhook setup",
        "SDK installation",
        "Third-party integrations"
      ]
    },
    {
      title: "Security & Compliance",
      description: "Security best practices and compliance information",
      icon: ShieldIcon,
      sections: [
        "Data encryption",
        "Access control",
        "Compliance standards",
        "Security audits"
      ]
    },
    {
      title: "Troubleshooting",
      description: "Common issues and solutions",
      icon: WrenchIcon,
      sections: [
        "Common errors",
        "Performance issues",
        "Connection problems",
        "FAQ"
      ]
    },
  ];

  return (
    <>
      <Head
        title="Documentation | Codegx Technologies"
        description="Complete documentation and guides for Codegx Technologies solutions, APIs, and services."
      />

      <MainLayout withContainer={true} navbarVariant="default">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-6 md:py-10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Documentation
            </h1>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
              Comprehensive guides and API documentation for Codegx Technologies solutions
            </p>
          </div>
        </motion.section>

        {/* Documentation Sections */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-6 md:py-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {docs.map((doc, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-3">
                  <doc.icon size={32} className="text-[#c8a951] dark:text-[#9f7b42]" />
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-2 text-slate-900 dark:text-white">
                  {doc.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-3">
                  {doc.description}
                </p>
                <ul className="space-y-1 mb-4">
                  {doc.sections.map((section, idx) => (
                    <li key={idx} className="text-xs text-slate-600 dark:text-slate-400 flex items-center">
                      <span className="mr-2">•</span>
                      {section}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" className="w-full text-xs">
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Quick Links */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-6 md:py-8 bg-slate-50 dark:bg-slate-900/50 rounded-lg p-4 md:p-6"
        >
          <h2 className="text-lg md:text-xl font-bold mb-4 text-slate-900 dark:text-white">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Resources</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-xs text-[#c8a951] dark:text-[#9f7b42] hover:underline">API Status</a></li>
                <li><a href="#" className="text-xs text-[#c8a951] dark:text-[#9f7b42] hover:underline">Code Examples</a></li>
                <li><a href="#" className="text-xs text-[#c8a951] dark:text-[#9f7b42] hover:underline">SDKs & Libraries</a></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Support</h3>
              <ul className="space-y-1">
                <li><a href="/contact" className="text-xs text-[#c8a951] dark:text-[#9f7b42] hover:underline">Contact Support</a></li>
                <li><a href="#" className="text-xs text-[#c8a951] dark:text-[#9f7b42] hover:underline">Community Forum</a></li>
                <li><a href="#" className="text-xs text-[#c8a951] dark:text-[#9f7b42] hover:underline">Report an Issue</a></li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-6 md:py-10 text-center"
        >
          <h2 className="text-lg md:text-2xl font-bold mb-3 text-slate-900 dark:text-white">
            Need Help?
          </h2>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-4 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <Link href="/contact">
            <Button size="sm" className="rounded-full px-6 py-2 text-xs md:text-sm font-semibold">
              Contact Support
            </Button>
          </Link>
        </motion.section>
      </MainLayout>
    </>
  );
}

