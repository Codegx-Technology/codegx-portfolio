import { useEffect } from "react";
import { motion } from "framer-motion";
import { PageWrapper, PageSection, PageHeader, PageDivider } from "@/components/layouts/PageWrapper";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heading2, Heading3, Paragraph } from "@/components/ui/typography";

export default function AboutWakala() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Core values data
  const coreValues = [
    {
      icon: "fas fa-lightbulb",
      title: "Practical Invention",
      description: "We turn real operational friction into usable systems, favoring clear workflows over novelty for its own sake."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Governed Trust",
      description: "Every workflow needs ownership, traceability, and accountable decision boundaries before it earns a place in production."
    },
    {
      icon: "fas fa-universal-access",
      title: "Contextual Access",
      description: "Automation should work for the teams who rely on it, including multilingual, mobile-first, and resource-constrained environments."
    },
    {
      icon: "fas fa-leaf",
      title: "Durable Impact",
      description: "We build for long-term maintainability, local capacity, and measurable operational improvement after launch."
    }
  ];

  // Journey milestones
  const journeyMilestones = [
    {
      year: "2018",
      title: "The Spark",
      description: "Identified a gap in practical automation for African startups and SMEs. Started testing workflow systems that could operate reliably in resource-constrained environments."
    },
    {
      year: "2019",
      title: "First Startup Success",
      description: "Helped a local fintech startup improve fraud review workflows, reducing fraud exposure by 65% and validating our focus on practical, measurable systems."
    },
    {
      year: "2021",
      title: "Automation Practice Formalized",
      description: "Codegx formalized Wakala as its automation practice, giving client workflow work a dedicated operating model and delivery focus."
    },
    {
      year: "2022",
      title: "Startup Ecosystem Growth",
      description: "Partnered with multiple startup accelerators across East Africa, helping early-stage companies build automation into their products from day one."
    },
    {
      year: "2023",
      title: "Operating Evidence",
      description: "Expanded client partnerships around measurable workflow reliability, faster delivery cycles, and clearer accountability across automated processes."
    },
    {
      year: "2025",
      title: "Wakala OS Productized",
      description: "Advanced Wakala OS as the operating layer for governed workflows, structured process automation, and accountable agentic execution."
    }
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <PageSection
        className="relative overflow-hidden py-10 md:py-14"
        background="pattern"
        spacing="xl"
      >
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900/50 z-0"></div>

        <div className="relative z-10 text-center">
          <PageHeader
            title={
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                We Build Automation With{" "}
                <span className="text-primary">
                  Precision and Control
                </span>
              </h1>
            }
            description="Wakala Agency is the Codegx operating practice for governed automation, structured workflows, and accountable agentic execution."
            className="text-center"
          />

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-6 md:mt-8">
            <Button size="sm" className="rounded-full px-6 md:px-8">
              <i className="fas fa-handshake mr-2"></i>
              Partner With Us
            </Button>
            <Link href="/case-studies">
              <Button size="sm" variant="outline" className="rounded-full px-6 md:px-8">
                <i className="fas fa-briefcase mr-2"></i>
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </PageSection>

      <PageDivider />

      {/* Our Mission Section */}
      <PageSection className="py-8 md:py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Heading2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 md:mb-6">Our Mission</Heading2>
            <Paragraph className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6 leading-relaxed">
              Wakala exists to make automation dependable in the places where process quality, traceability,
              and human accountability cannot be left to chance.
            </Paragraph>
            <Paragraph className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6 leading-relaxed">
              The practice combines production-minded engineering, local operating context, and disciplined
              workflow design so teams can move faster without losing control.
            </Paragraph>
            <Paragraph className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Our work is measured by whether the system remains useful after launch: visible, maintainable,
              explainable, and practical for the people who run it every day.
            </Paragraph>
          </div>
          <div className="relative lg:col-span-5">
            <div className="absolute -inset-0.5 bg-primary/20 rounded-lg"></div>
            <div className="relative bg-card rounded-lg p-8 shadow-xl">
              <div className="text-4xl text-primary mb-4">
                <i className="fas fa-quote-left"></i>
              </div>
              <blockquote className="text-base sm:text-lg md:text-xl italic mb-6 leading-relaxed">
                "Technology is most powerful when it addresses real operational needs. At Wakala Agency, we build
                systems that improve delivery, reduce manual effort, and create measurable opportunities."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4">
                  <i className="fas fa-user"></i>
                </div>
                <div>
                  <div className="font-bold">Peter O. Oluoch</div>
                  <div className="text-sm text-muted-foreground">Founder, Codegx Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <PageDivider />

      {/* Core Values Section */}
      <PageSection className="bg-card py-8 md:py-14">
        <div className="text-center mb-6 md:mb-12">
          <Heading2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 md:mb-3">Operating Principles</Heading2>
          <Paragraph className="text-xs md:text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            These principles shape how Wakala turns automation from isolated tools into governed operating capability.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative h-full overflow-hidden rounded-lg border border-border bg-background p-4 shadow-md transition-shadow duration-300 hover:shadow-xl md:p-6"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-primary/60 opacity-70"></div>
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-xl text-primary transition-transform duration-300 group-hover:scale-105 md:mb-6">
                <i className={value.icon}></i>
              </div>
              <Heading3 className="text-base md:text-lg font-bold mb-2 md:mb-3 text-center">{value.title}</Heading3>
              <Paragraph className="text-xs md:text-sm text-muted-foreground text-center">{value.description}</Paragraph>
            </motion.div>
          ))}
        </div>
      </PageSection>

      <PageDivider />

      {/* Operating Patterns Section */}
      <PageSection className="py-8 md:py-14">
        <div className="mb-6 grid gap-4 md:mb-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="mb-3 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary md:text-sm">
              Operating Patterns
            </div>
            <Heading2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Where governed execution is becoming necessary
            </Heading2>
          </div>
          <Paragraph className="text-xs md:text-sm text-muted-foreground leading-relaxed">
            These are recurring operating problems Codegx sees across modern teams. Wakala OS gives them structure
            without making automation the whole product.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          {[
            {
              title: "Lead & Intent Operations",
              description: "Capture, qualify, route, and follow up on demand without losing context between channels.",
            },
            {
              title: "Reception & Intake",
              description: "Handle bookings, enquiries, triage, and escalation with visible ownership.",
            },
            {
              title: "Content Operations",
              description: "Coordinate research, drafting, review, publishing, and evidence trails.",
            },
            {
              title: "Internal Reporting",
              description: "Turn hiring, team, finance, and delivery workflows into accountable routines.",
            },
            {
              title: "Document & CRM Workflows",
              description: "Structure intake, classification, case movement, and customer records.",
            },
          ].map((pattern, index) => (
            <motion.div
              key={pattern.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="rounded-lg border border-border bg-card p-4 shadow-sm"
            >
              <div className="mb-4 text-xs font-semibold text-primary">0{index + 1}</div>
              <Heading3 className="text-sm font-bold leading-snug">{pattern.title}</Heading3>
              <Paragraph className="mt-3 text-xs leading-relaxed text-muted-foreground">{pattern.description}</Paragraph>
            </motion.div>
          ))}
        </div>
      </PageSection>

      <PageDivider />

      {/* Founder's Vision Section */}
      <PageSection className="py-8 md:py-14">
        <div className="text-center mb-6 md:mb-12">
          <Heading2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 md:mb-3">Founder's Vision</Heading2>
          <Paragraph className="text-xs md:text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The operating history behind Wakala's focus on dependable automation.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="sticky top-20">
              <div className="relative rounded-lg overflow-hidden mb-4 md:mb-6">
                <div className="aspect-w-4 aspect-h-5">
                  <img
                    src="/assets/wakala-founder-vision.png"
                    alt="Peter O. Oluoch working at an executive desk with two monitors"
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.pexels.com/photos/13377869/pexels-photo-13377869.jpeg?auto=compress&cs=tinysrgb&w=900";
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 flex items-end">
                  <div className="p-4 md:p-6 text-white">
                    <Heading3 className="text-lg md:text-xl font-bold">Building Together</Heading3>
                    <Paragraph className="text-xs md:text-sm text-white/80">Building governed automation from first principles</Paragraph>
                  </div>
                </div>
              </div>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://linkedin.com/in/peteroduor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#0077B5]/10 flex items-center justify-center text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-colors"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://twitter.com/peteroduor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1DA1F2]/10 flex items-center justify-center text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-colors"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://github.com/peteroluoch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-700/10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>

              <div className="mt-8 rounded-lg border border-border bg-card p-4 md:p-6">
                <Heading3 className="text-base md:text-lg font-bold mb-2 md:mb-3">The Vision Forward</Heading3>
                <Paragraph className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                  Wakala is being shaped as the operating layer for teams that need automation to be traceable,
                  maintainable, and accountable under real delivery pressure.
                </Paragraph>
                <Paragraph className="text-xs md:text-sm text-muted-foreground">
                  The goal is practical capacity: systems that reduce manual drag, improve visibility, and leave
                  organizations with stronger internal capability after implementation.
                </Paragraph>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="rounded-lg border border-border bg-card/40 p-5 md:p-7"
            >
              <div className="space-y-8 md:space-y-10">
                {journeyMilestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: 28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 4 }}
                    viewport={{ once: true, margin: "-90px" }}
                    transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                    className="group relative border-l border-border pl-8 md:pl-10"
                  >
                    <div className="absolute left-0 top-0 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-primary/20 transition-colors duration-300 group-hover:bg-primary/30 md:h-8 md:w-8">
                      <div className="h-3 w-3 rounded-full bg-primary transition-transform duration-300 group-hover:scale-125 md:h-4 md:w-4"></div>
                    </div>
                    <div className="mb-1 text-base font-bold text-primary md:mb-2 md:text-lg">{milestone.year}</div>
                    <Heading3 className="mb-1 text-base font-bold transition-colors duration-300 group-hover:text-primary md:mb-2 md:text-lg">
                      {milestone.title}
                    </Heading3>
                    <Paragraph className="text-xs text-muted-foreground md:text-sm">{milestone.description}</Paragraph>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </PageSection>

      <PageDivider />

      {/* Call to Action */}
      <PageSection className="bg-card py-6 md:py-12">
        <div className="text-center">
          <Heading2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 md:mb-6">
            Ready to Build Something Impactful Together?
          </Heading2>
          <Paragraph className="text-xs md:text-sm text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed">
            Whether you need lead capture automation, client reporting, operational workflows, or secure
            system integration, we can help turn the right process into a dependable platform.
          </Paragraph>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="sm" className="rounded-full px-6 md:px-8">
                <i className="fas fa-envelope mr-2"></i>
                Get in Touch
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="sm" variant="outline" className="rounded-full px-6 md:px-8">
                <i className="fas fa-briefcase mr-2"></i>
                Explore Our Work
              </Button>
            </Link>
          </div>
        </div>
      </PageSection>
    </PageWrapper>
  );
}
