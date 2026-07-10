import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { PageWrapper, PageSection } from "@/components/layouts/PageWrapper";
import ServiceCard from "@/components/Services/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Heading2, Paragraph } from "@/components/ui/typography";

interface Service {
  id: string;
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
}

interface ServicesData {
  services: Service[];
}

export default function Services() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const { data, isLoading, error } = useQuery<ServicesData>({
    queryKey: ["/data/services.json"],
    staleTime: Infinity,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allTags = data?.services
    ? Array.from(new Set(data.services.flatMap(service => service.tags)))
    : [];

  const filteredServices = data?.services
    ? data.services.filter(service => {
        const matchesSearch = searchQuery === "" ||
          service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesTag = activeTag === null || service.tags.includes(activeTag);

        return matchesSearch && matchesTag;
      })
    : [];

  return (
    <PageWrapper>
      <div className="relative py-8 md:py-12 overflow-hidden bg-[#2c1a22] dark:bg-[#1f1a2c] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 mb-8 md:mb-12">
        <div className="absolute inset-0 z-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 H40 M20 0 V40" stroke="currentColor" strokeWidth="0.5" fill="none" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center px-4 py-1.5 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 rounded-full text-[#c8a951] dark:text-[#9f7b42] text-xs md:text-sm font-medium mb-2 md:mb-3 border border-[#c8a951]/20 dark:border-[#9f7b42]/20"
            >
              <i className="fas fa-shield-alt mr-2"></i>
              Governed Delivery Catalogue
            </motion.div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-2 md:mb-3 text-white">
              Software, Workflow, and Intelligence Systems Built for <span className="text-[#c8a951] dark:text-[#9f7b42]">Operational Control</span>
            </h1>

            <p className="text-xs md:text-sm text-slate-300 max-w-3xl mx-auto">
              We help organizations turn complex workflows into secure, traceable, and maintainable systems.
              Services are organized around platform engineering, governed workflow systems, operational intelligence, and capability enablement.
            </p>
          </motion.div>
        </div>
      </div>

      <PageSection className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c8a951]/5 dark:bg-[#9f7b42]/5 rounded-full translate-x-1/3 -translate-y-1/3 z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c8a951]/5 dark:bg-[#9f7b42]/5 rounded-full -translate-x-1/3 translate-y-1/3 z-0"></div>

        <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-8">
            {[
              ["Control", "Decision boundaries, roles, and approval paths remain visible."],
              ["State", "Systems preserve operating context across handoffs and tools."],
              ["Traceability", "Logs, evidence, and audit paths are treated as core behavior."],
              ["Maintainability", "Architecture is built to be owned after launch."]
            ].map(([title, description]) => (
              <div key={title} className="rounded-lg border border-[#c8a951]/15 dark:border-[#9f7b42]/20 bg-white/80 dark:bg-[#1a1a1a]/80 p-4">
                <h2 className="text-sm font-semibold text-[#2c1a22] dark:text-white">{title}</h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg border border-gray-100 dark:border-[#2c1a22]/50 p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 px-4 rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-[#2c1a22] focus:border-[#c8a951] dark:focus:border-[#9f7b42] focus:ring-[#c8a951]/20 dark:focus:ring-[#9f7b42]/20"
                />
              </div>
              <Button
                variant={activeTag === null ? "default" : "outline"}
                onClick={() => setActiveTag(null)}
                className={`whitespace-nowrap h-12 px-6 ${
                  activeTag === null
                    ? 'bg-[#c8a951] hover:bg-[#c8a951]/90 text-[#2c1a22] dark:bg-[#9f7b42] dark:hover:bg-[#9f7b42]/90 dark:text-[#1f1a2c]'
                    : 'border-[#c8a951]/20 text-[#c8a951] hover:bg-[#c8a951]/10 dark:border-[#9f7b42]/20 dark:text-[#9f7b42] dark:hover:bg-[#9f7b42]/10'
                }`}
              >
                All Services
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 mb-2">
              {allTags.map(tag => (
                <Badge
                  key={tag}
                  variant={activeTag === tag ? "default" : "outline"}
                  className={`cursor-pointer px-3 py-1.5 text-sm font-medium ${
                    activeTag === tag
                      ? 'bg-[#c8a951]/20 text-[#c8a951] dark:bg-[#9f7b42]/20 dark:text-[#9f7b42] border-0'
                      : 'border-[#c8a951]/20 text-[#c8a951] hover:bg-[#c8a951]/10 dark:border-[#9f7b42]/20 dark:text-[#9f7b42] dark:hover:bg-[#9f7b42]/10'
                  }`}
                  onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {isLoading ? (
            <div className="text-center py-20">
              <div className="animate-spin w-12 h-12 border-4 border-[#c8a951] dark:border-[#9f7b42] border-t-transparent rounded-full mx-auto mb-6"></div>
              <Paragraph className="text-gray-700 dark:text-gray-300 text-lg">Loading services...</Paragraph>
            </div>
          ) : error ? (
            <div className="text-center py-20 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-100 dark:border-red-900/20 p-8">
              <div className="text-red-500 dark:text-red-400 text-5xl mb-4">
                <i className="fas fa-exclamation-circle"></i>
              </div>
              <Paragraph className="text-red-600 dark:text-red-400 text-lg font-medium">Error loading services. Please try again later.</Paragraph>
            </div>
          ) : filteredServices.length === 0 ? (
            <div className="text-center py-20 bg-gray-50 dark:bg-[#1a1a1a] rounded-xl border border-gray-100 dark:border-[#2c1a22]/50 p-8">
              <div className="text-gray-400 dark:text-gray-500 text-5xl mb-4">
                <i className="fas fa-search"></i>
              </div>
              <Paragraph className="text-gray-700 dark:text-gray-300 text-lg mb-6">No services found matching your criteria.</Paragraph>
              <Button
                variant="outline"
                className="border-[#c8a951]/20 text-[#c8a951] hover:bg-[#c8a951]/10 dark:border-[#9f7b42]/20 dark:text-[#9f7b42] dark:hover:bg-[#9f7b42]/10"
                onClick={() => {
                  setSearchQuery("");
                  setActiveTag(null);
                }}
              >
                <i className="fas fa-redo mr-2"></i>
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  id={service.id}
                  slug={service.slug}
                  title={service.title}
                  icon={service.icon}
                  description={service.shortDescription}
                  tags={service.tags}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </PageSection>

      <PageSection className="py-16 md:py-20 bg-white dark:bg-[#121212] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c8a951]/5 dark:bg-[#9f7b42]/5 rounded-full translate-x-1/3 -translate-y-1/3 z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c8a951]/5 dark:bg-[#9f7b42]/5 rounded-full -translate-x-1/3 translate-y-1/3 z-0"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-10 max-w-3xl">
            <div className="inline-flex items-center px-4 py-1.5 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 rounded-full text-[#c8a951] dark:text-[#9f7b42] text-sm font-medium mb-4 border border-[#c8a951]/20 dark:border-[#9f7b42]/20">
              Delivery Discipline
            </div>
            <Heading2 className="text-3xl font-bold mb-4 text-[#2c1a22] dark:text-white">
              How We Deliver Work That Can Be Operated
            </Heading2>
            <Paragraph className="text-gray-700 dark:text-gray-300">
              Services are delivered as governed systems: scoped around the workflow, engineered for accountability, and prepared for ownership after launch.
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-[#2c1a22]/50 dark:bg-[#1a1a1a] md:p-8"
            >
              <div className="mb-6 flex items-center justify-between gap-4 border-b border-gray-200 pb-5 dark:border-[#2c1a22]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c8a951] dark:text-[#9f7b42]">Delivery Model</p>
                  <h3 className="mt-2 text-2xl font-bold text-[#2c1a22] dark:text-white">How We Deliver</h3>
                </div>
                <div className="hidden h-12 w-12 items-center justify-center rounded-lg bg-[#c8a951]/10 text-[#c8a951] dark:bg-[#9f7b42]/10 dark:text-[#9f7b42] sm:flex">
                  <i className="fas fa-route text-lg"></i>
                </div>
              </div>

              <ul className="space-y-0">
                <li className="grid grid-cols-[3rem_1fr] gap-4 border-b border-gray-200 py-5 first:pt-0 dark:border-[#2c1a22]">
                  <div className="text-sm font-semibold text-[#c8a951] dark:text-[#9f7b42]">01</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-[#2c1a22] dark:text-white">Diagnose the Workflow</h4>
                    <Paragraph className="text-gray-700 dark:text-gray-300">
                      Map ownership, data movement, failure points, controls, and existing technical constraints.
                    </Paragraph>
                  </div>
                </li>
                <li className="grid grid-cols-[3rem_1fr] gap-4 border-b border-gray-200 py-5 dark:border-[#2c1a22]">
                  <div className="text-sm font-semibold text-[#c8a951] dark:text-[#9f7b42]">02</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-[#2c1a22] dark:text-white">Design the Control Layer</h4>
                    <Paragraph className="text-gray-700 dark:text-gray-300">
                      Define routing, decision boundaries, integration contracts, audit paths, roles, and adoption milestones.
                    </Paragraph>
                  </div>
                </li>
                <li className="grid grid-cols-[3rem_1fr] gap-4 border-b border-gray-200 py-5 dark:border-[#2c1a22]">
                  <div className="text-sm font-semibold text-[#c8a951] dark:text-[#9f7b42]">03</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-[#2c1a22] dark:text-white">Build the System</h4>
                    <Paragraph className="text-gray-700 dark:text-gray-300">
                      Implement secure defaults, maintainable code, state handling, observable workflows, and clear release discipline.
                    </Paragraph>
                  </div>
                </li>
                <li className="grid grid-cols-[3rem_1fr] gap-4 py-5 pb-0">
                  <div className="text-sm font-semibold text-[#c8a951] dark:text-[#9f7b42]">04</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-[#2c1a22] dark:text-white">Operate and Improve</h4>
                    <Paragraph className="text-gray-700 dark:text-gray-300">
                      Support rollout, measure reliability, tune the workflow, and transfer usable operating knowledge.
                    </Paragraph>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-[#2c1a22]/50 dark:bg-[#1a1a1a] md:p-8"
            >
              <div className="mb-6 border-b border-gray-200 pb-5 dark:border-[#2c1a22]">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c8a951] dark:text-[#9f7b42]">Engineering Mandate</p>
                <h3 className="mt-2 text-2xl font-bold text-[#2c1a22] dark:text-white">What Makes the Work Different</h3>
                <Paragraph className="mt-3 text-gray-700 dark:text-gray-300">
                  Automation is treated as one part of the operating estate, not the whole promise. The work must preserve state, expose evidence, and remain maintainable.
                </Paragraph>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="group rounded-lg border border-gray-100 bg-white p-5 transition-colors hover:border-[#c8a951] dark:border-[#3d2128] dark:bg-[#2c1a22] dark:hover:border-[#9f7b42]">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#c8a951]/10 text-[#c8a951] dark:bg-[#9f7b42]/10 dark:text-[#9f7b42]">
                    <i className="fas fa-sitemap text-base"></i>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-[#2c1a22] dark:text-white group-hover:text-[#c8a951] dark:group-hover:text-[#9f7b42] transition-colors">Architecture Before Execution</h3>
                  <Paragraph className="text-gray-700 dark:text-gray-300">
                    We clarify routes, state boundaries, and integration contracts before introducing automation, agents, analytics, or integrations.
                  </Paragraph>
                </div>
                <div className="group rounded-lg border border-gray-100 bg-white p-5 transition-colors hover:border-[#c8a951] dark:border-[#3d2128] dark:bg-[#2c1a22] dark:hover:border-[#9f7b42]">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#c8a951]/10 text-[#c8a951] dark:bg-[#9f7b42]/10 dark:text-[#9f7b42]">
                    <i className="fas fa-shield-alt text-base"></i>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-[#2c1a22] dark:text-white group-hover:text-[#c8a951] dark:group-hover:text-[#9f7b42] transition-colors">Governance Built In</h3>
                  <Paragraph className="text-gray-700 dark:text-gray-300">
                    Access, approvals, audit trails, monitoring, and accountability are designed as first-class system behavior.
                  </Paragraph>
                </div>
                <div className="group rounded-lg border border-gray-100 bg-white p-5 transition-colors hover:border-[#c8a951] dark:border-[#3d2128] dark:bg-[#2c1a22] dark:hover:border-[#9f7b42]">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#c8a951]/10 text-[#c8a951] dark:bg-[#9f7b42]/10 dark:text-[#9f7b42]">
                    <i className="fas fa-chart-line text-base"></i>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-[#2c1a22] dark:text-white group-hover:text-[#c8a951] dark:group-hover:text-[#9f7b42] transition-colors">Practical Intelligence</h3>
                  <Paragraph className="text-gray-700 dark:text-gray-300">
                    We use AI where it improves judgment, throughput, or visibility without weakening routing, state, or control.
                  </Paragraph>
                </div>
                <div className="group rounded-lg border border-gray-100 bg-white p-5 transition-colors hover:border-[#c8a951] dark:border-[#3d2128] dark:bg-[#2c1a22] dark:hover:border-[#9f7b42]">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#c8a951]/10 text-[#c8a951] dark:bg-[#9f7b42]/10 dark:text-[#9f7b42]">
                    <i className="fas fa-life-ring text-base"></i>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-[#2c1a22] dark:text-white group-hover:text-[#c8a951] dark:group-hover:text-[#9f7b42] transition-colors">Long-Term Ownership</h3>
                  <Paragraph className="text-gray-700 dark:text-gray-300">
                    Documentation, observability, and support routines are shaped so the system can be trusted over time.
                  </Paragraph>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </PageSection>

      <PageSection className="py-20 relative overflow-hidden bg-gradient-to-br from-[#2c1a22] via-[#3d2128] to-[#2c1a22] dark:from-[#1f1a2c] dark:via-[#2a1f3d] dark:to-[#1f1a2c] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid-pattern-cta" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 H40 M20 0 V40" stroke="currentColor" strokeWidth="0.5" fill="none" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-pattern-cta)" />
          </svg>
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Build Systems That Can Be <span className="text-[#c8a951] dark:text-[#9f7b42]">Governed</span></h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
              Talk to us about software, governed workflows, or Wakala OS patterns that need traceability, security, and durable operating discipline.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-[#c8a951] hover:bg-[#c8a951]/90 text-[#2c1a22] dark:bg-[#9f7b42] dark:hover:bg-[#9f7b42]/90 dark:text-[#1f1a2c] px-8 py-4 rounded-md">
                  <i className="fas fa-calendar-check mr-2"></i>
                  Book a Discovery Call
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-md">
                  <i className="fas fa-briefcase mr-2"></i>
                  View Our Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </PageSection>
    </PageWrapper>
  );
}
