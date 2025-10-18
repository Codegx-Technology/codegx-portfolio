import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { PageWrapper, PageSection, PageHeader, PageDivider } from "@/components/layouts/PageWrapper";
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

  // Fetch services data
  const { data, isLoading, error } = useQuery<ServicesData>({
    queryKey: ["/data/services.json"],
    staleTime: Infinity,
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get all unique tags
  const allTags = data?.services
    ? Array.from(new Set(data.services.flatMap(service => service.tags)))
    : [];

  // Filter services by search query and tag
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
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden bg-gradient-to-br from-[#2c1a22] via-[#3d2128] to-[#2c1a22] dark:from-[#1f1a2c] dark:via-[#2a1f3d] dark:to-[#1f1a2c] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 mb-16">
        {/* Subtle pattern overlay */}
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
              className="inline-flex items-center px-4 py-1.5 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 rounded-full text-[#c8a951] dark:text-[#9f7b42] text-sm font-medium mb-4 border border-[#c8a951]/20 dark:border-[#9f7b42]/20"
            >
              <span className="flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#c8a951] dark:bg-[#9f7b42] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8a951] dark:bg-[#9f7b42]"></span>
              </span>
              AI Solutions
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 text-white">
              Transform Your <span className="text-[#c8a951] dark:text-[#9f7b42]">Industry</span> with Practical AI
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We deliver AI solutions that solve real business problems and create measurable impact.
              Explore our services to see how we can help your organization thrive in the AI era.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter */}
      <PageSection className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c8a951]/5 dark:bg-[#9f7b42]/5 rounded-full translate-x-1/3 -translate-y-1/3 z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c8a951]/5 dark:bg-[#9f7b42]/5 rounded-full -translate-x-1/3 translate-y-1/3 z-0"></div>

        <div className="relative z-10">
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

          {/* Services Grid */}
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

      {/* Our Approach & Why Choose Us Section */}
      <PageSection className="py-20 bg-white dark:bg-[#121212] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c8a951]/5 dark:bg-[#9f7b42]/5 rounded-full translate-x-1/3 -translate-y-1/3 z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c8a951]/5 dark:bg-[#9f7b42]/5 rounded-full -translate-x-1/3 translate-y-1/3 z-0"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Our Approach */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-[#1a1a1a] p-8 rounded-xl shadow-lg border border-gray-100 dark:border-[#2c1a22]/50"
            >
              <div className="inline-flex items-center px-4 py-1.5 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 rounded-full text-[#c8a951] dark:text-[#9f7b42] text-sm font-medium mb-6 border border-[#c8a951]/20 dark:border-[#9f7b42]/20">
                Our Process
              </div>

              <Heading2 className="text-3xl font-bold mb-6 text-[#2c1a22] dark:text-white">Our Approach</Heading2>
              <Paragraph className="text-gray-700 dark:text-gray-300 mb-8">
                We believe in a collaborative approach to every project. Our team works closely with you to understand your unique challenges and goals, ensuring that our solutions are tailored to your specific needs.
              </Paragraph>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 w-12 h-12 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center rounded-lg text-[#c8a951] dark:text-[#9f7b42]">
                    <i className="fas fa-lightbulb text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#2c1a22] dark:text-white">Discovery</h3>
                    <Paragraph className="text-gray-700 dark:text-gray-300">
                      We begin by understanding your business, goals, and challenges through in-depth consultations.
                    </Paragraph>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 w-12 h-12 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center rounded-lg text-[#c8a951] dark:text-[#9f7b42]">
                    <i className="fas fa-pencil-ruler text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#2c1a22] dark:text-white">Planning</h3>
                    <Paragraph className="text-gray-700 dark:text-gray-300">
                      Our team creates a detailed roadmap and strategy tailored to your specific requirements.
                    </Paragraph>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 w-12 h-12 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center rounded-lg text-[#c8a951] dark:text-[#9f7b42]">
                    <i className="fas fa-code text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#2c1a22] dark:text-white">Development</h3>
                    <Paragraph className="text-gray-700 dark:text-gray-300">
                      We build your solution using cutting-edge technologies and best practices.
                    </Paragraph>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 w-12 h-12 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center rounded-lg text-[#c8a951] dark:text-[#9f7b42]">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#2c1a22] dark:text-white">Launch & Support</h3>
                    <Paragraph className="text-gray-700 dark:text-gray-300">
                      We ensure a smooth deployment and provide ongoing support and maintenance.
                    </Paragraph>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-[#1a1a1a] p-8 rounded-xl shadow-lg border border-gray-100 dark:border-[#2c1a22]/50"
            >
              <div className="inline-flex items-center px-4 py-1.5 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 rounded-full text-[#c8a951] dark:text-[#9f7b42] text-sm font-medium mb-6 border border-[#c8a951]/20 dark:border-[#9f7b42]/20">
                Our Strengths
              </div>

              <Heading2 className="text-3xl font-bold mb-6 text-[#2c1a22] dark:text-white">Why Choose Us</Heading2>
              <Paragraph className="text-gray-700 dark:text-gray-300 mb-8">
                With our expertise and dedication to excellence, we deliver solutions that drive real business results.
              </Paragraph>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-[#2c1a22] p-6 rounded-lg shadow-md border border-gray-100 dark:border-[#3d2128] group hover:border-[#c8a951] dark:hover:border-[#9f7b42] transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center text-[#c8a951] dark:text-[#9f7b42] mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-users text-xl"></i>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-[#2c1a22] dark:text-white group-hover:text-[#c8a951] dark:group-hover:text-[#9f7b42] transition-colors">Expert Team</h3>
                  <Paragraph className="text-gray-700 dark:text-gray-300">
                    Our team consists of experienced professionals with diverse skills and expertise.
                  </Paragraph>
                </div>
                <div className="bg-white dark:bg-[#2c1a22] p-6 rounded-lg shadow-md border border-gray-100 dark:border-[#3d2128] group hover:border-[#c8a951] dark:hover:border-[#9f7b42] transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center text-[#c8a951] dark:text-[#9f7b42] mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-cogs text-xl"></i>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-[#2c1a22] dark:text-white group-hover:text-[#c8a951] dark:group-hover:text-[#9f7b42] transition-colors">Cutting-edge Technology</h3>
                  <Paragraph className="text-gray-700 dark:text-gray-300">
                    We stay at the forefront of technological advancements to deliver innovative solutions.
                  </Paragraph>
                </div>
                <div className="bg-white dark:bg-[#2c1a22] p-6 rounded-lg shadow-md border border-gray-100 dark:border-[#3d2128] group hover:border-[#c8a951] dark:hover:border-[#9f7b42] transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center text-[#c8a951] dark:text-[#9f7b42] mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-chart-line text-xl"></i>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-[#2c1a22] dark:text-white group-hover:text-[#c8a951] dark:group-hover:text-[#9f7b42] transition-colors">Results-Driven</h3>
                  <Paragraph className="text-gray-700 dark:text-gray-300">
                    Our focus is on delivering measurable results that help your business grow.
                  </Paragraph>
                </div>
                <div className="bg-white dark:bg-[#2c1a22] p-6 rounded-lg shadow-md border border-gray-100 dark:border-[#3d2128] group hover:border-[#c8a951] dark:hover:border-[#9f7b42] transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center text-[#c8a951] dark:text-[#9f7b42] mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-headset text-xl"></i>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-[#2c1a22] dark:text-white group-hover:text-[#c8a951] dark:group-hover:text-[#9f7b42] transition-colors">Dedicated Support</h3>
                  <Paragraph className="text-gray-700 dark:text-gray-300">
                    We provide ongoing support and maintenance to ensure your solution continues to perform optimally.
                  </Paragraph>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </PageSection>

      {/* CTA Section */}
      <PageSection className="py-20 relative overflow-hidden bg-gradient-to-br from-[#2c1a22] via-[#3d2128] to-[#2c1a22] dark:from-[#1f1a2c] dark:via-[#2a1f3d] dark:to-[#1f1a2c] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 z-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid-pattern-cta" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 H40 M20 0 V40" stroke="currentColor" strokeWidth="0.5" fill="none" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-pattern-cta)" />
          </svg>
        </div>

        {/* Animated stars */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#c8a951] dark:bg-[#9f7b42] rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}

        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to <span className="text-[#c8a951] dark:text-[#9f7b42]">Transform</span> Your Workflow?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
              Let's discuss how our AI solutions can address your specific challenges and create measurable impact for your organization.
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
