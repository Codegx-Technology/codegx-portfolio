import { useEffect } from "react";
import { motion } from "framer-motion";
import { PageWrapper, PageSection, PageHeader, PageDivider } from "@/components/layouts/PageWrapper";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heading2, Heading3, Paragraph } from "@/components/ui/typography";

export default function WhyAstella() {
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
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible, exploring new technologies and approaches to create solutions that drive meaningful change."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical responsibility in all our interactions, building trust with our clients and within our communities."
    },
    {
      icon: "fas fa-universal-access",
      title: "Accessibility",
      description: "We believe technology should be accessible to all. We design solutions that bridge gaps and create opportunities across diverse contexts and communities."
    },
    {
      icon: "fas fa-leaf",
      title: "Sustainability",
      description: "We develop solutions with long-term environmental and social impact in mind, contributing to a more sustainable and equitable future."
    }
  ];

  // Journey milestones
  const journeyMilestones = [
    {
      year: "2018",
      title: "The Spark",
      description: "Identified a gap in accessible AI solutions for African startups and SMEs. Started experimenting with AI implementations in resource-constrained environments."
    },
    {
      year: "2019",
      title: "First Startup Success",
      description: "Helped a local fintech startup implement AI-powered fraud detection, reducing fraud by 65% and validating our approach to practical AI solutions."
    },
    {
      year: "2021",
      title: "Astella AI Founded",
      description: "Officially launched Astella AI with a mission to democratize AI for African startups, making enterprise-grade AI accessible and affordable."
    },
    {
      year: "2022",
      title: "Startup Ecosystem Growth",
      description: "Partnered with multiple startup accelerators across East Africa, helping early-stage companies integrate AI into their products from day one."
    },
    {
      year: "2023",
      title: "Innovation & Impact",
      description: "Achieved partnerships, with clients reporting average 40% efficiency gains and 3x faster time-to-market through AI integration."
    },
    {
      year: "2025",
      title: "Scaling Solutions",
      description: "Launched Astella Plug, our AI-as-a-Service platform specifically designed for African startups, enabling rapid AI adoption without heavy infrastructure investment."
    }
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <PageSection
        className="relative overflow-hidden"
        background="pattern"
        spacing="xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10 z-0"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center">
          <PageHeader
            title={
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                We Build AI With{" "}
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Clarity and Care
                </span>
              </h1>
            }
            description="Astella AI is more than a technology company. We're a team of innovators committed to creating solutions that make a meaningful difference in Africa and beyond."
            className="text-center"
          />

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-8">
            <Button size="lg" className="rounded-full px-8">
              <i className="fas fa-handshake mr-2"></i>
              Partner With Us
            </Button>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="rounded-full px-8">
                <i className="fas fa-briefcase mr-2"></i>
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </PageSection>

      <PageDivider />

      {/* Our Mission Section */}
      <PageSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Heading2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6">Our Mission</Heading2>
            <Paragraph className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
              At Astella AI, our mission is to harness the power of artificial intelligence, blockchain,
              and emerging technologies to solve complex challenges and create sustainable impact across Africa.
            </Paragraph>
            <Paragraph className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
              We believe that technology, when thoughtfully applied, can transform industries, empower communities,
              and address some of the most pressing challenges facing our continent and the world.
            </Paragraph>
            <Paragraph className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Through innovation, collaboration, and a deep understanding of local contexts, we develop solutions
              that are not just technically excellent but also socially responsible and contextually relevant.
            </Paragraph>
          </div>
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-30"></div>
            <div className="relative bg-card rounded-lg p-8 shadow-xl">
              <div className="text-4xl text-primary mb-4">
                <i className="fas fa-quote-left"></i>
              </div>
              <blockquote className="text-lg sm:text-xl md:text-2xl italic mb-6 leading-relaxed">
                "Technology is most powerful when it addresses real human needs. At Astella, we're committed to
                creating solutions that don't just showcase technical brilliance but actually improve lives and
                create opportunities."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4">
                  <i className="fas fa-user"></i>
                </div>
                <div>
                  <div className="font-bold">Peter O. Oluoch</div>
                  <div className="text-sm text-muted-foreground">Founder & CEO, Astella AI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <PageDivider />

      {/* Core Values Section */}
      <PageSection className="bg-card py-12">
        <div className="text-center mb-16">
          <Heading2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Core Values</Heading2>
          <Paragraph className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            These principles guide everything we do, from how we develop technology to how we engage with our clients and communities.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value) => (
            <div
              key={value.title}
              className="bg-background rounded-lg p-6 shadow-md border border-border h-full"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl mb-6 mx-auto">
                <i className={value.icon}></i>
              </div>
              <Heading3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-center">{value.title}</Heading3>
              <Paragraph className="text-muted-foreground text-center">{value.description}</Paragraph>
            </div>
          ))}
        </div>
      </PageSection>

      <PageDivider />

      {/* Founder's Vision Section */}
      <PageSection>
        <div className="text-center mb-16">
          <Heading2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">Founder's Vision</Heading2>
          <Paragraph className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The journey from a personal career to founding Astella AI.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="sticky top-20">
              <div className="relative rounded-lg overflow-hidden mb-6">
                <div className="aspect-w-4 aspect-h-5">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                    alt="African Tech Team Collaboration - Innovation Together"
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80";
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <Heading3 className="text-xl sm:text-2xl md:text-3xl font-bold">Building Together</Heading3>
                    <Paragraph className="text-white/80">Empowering African Innovation</Paragraph>
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
                  href="https://github.com/peteroduor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-700/10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="space-y-12">
              {journeyMilestones.map((milestone) => (
                <div
                  key={milestone.year}
                  className="relative pl-10 border-l border-border"
                >
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                  </div>
                  <div className="text-primary font-bold text-lg sm:text-xl mb-2">{milestone.year}</div>
                  <Heading3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{milestone.title}</Heading3>
                  <Paragraph className="text-muted-foreground">{milestone.description}</Paragraph>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-card rounded-lg border border-border">
              <Heading3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">The Vision Forward</Heading3>
              <Paragraph className="text-muted-foreground mb-4">
                As we look to the future, our vision is to establish Astella AI as the leading technology
                partner for organizations seeking to leverage AI, blockchain, and emerging technologies
                for meaningful impact across Africa.
              </Paragraph>
              <Paragraph className="text-muted-foreground">
                We aim to build a company that not only delivers exceptional technical solutions but also
                contributes to building local capacity, fostering innovation ecosystems, and creating
                opportunities for the next generation of African technologists.
              </Paragraph>
            </div>
          </div>
        </div>
      </PageSection>

      <PageDivider />

      {/* Call to Action */}
      <PageSection className="bg-card py-12">
        <div className="text-center">
          <Heading2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Ready to Build Something Impactful Together?
          </Heading2>
          <Paragraph className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Whether you're looking to transform your organization with AI, develop a blockchain solution,
            or explore smart city technologies, we're here to help turn your vision into reality.
          </Paragraph>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8">
                <i className="fas fa-envelope mr-2"></i>
                Get in Touch
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="rounded-full px-8">
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
