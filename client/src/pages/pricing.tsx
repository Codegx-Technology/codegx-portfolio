import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { PageWrapper, PageSection, PageHeader, PageDivider } from "@/components/layouts/PageWrapper";
import PricingCard from "@/components/Pricing/PricingCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heading2, Paragraph } from "@/components/ui/typography";

interface PricingData {
  plans: {
    id: string;
    title: string;
    monthlyPrice: string;
    annualPrice: string;
    description: string;
    features: {
      text: string;
      included: boolean;
    }[];
    ctaLabel: string;
    ctaLink: string;
    popular: boolean;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  // Fetch pricing data
  const { data, isLoading, error } = useQuery<PricingData>({
    queryKey: ["/data/pricing.json"],
    staleTime: Infinity,
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              Transparent Pricing
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 text-white">
              Flexible <span className="text-[#c8a951] dark:text-[#9f7b42]">Pricing</span> for Startups and Scaleups
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Transparent pricing options designed to fit your business needs and growth stage.
              From initial AI implementation to enterprise-scale solutions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Pricing Section */}
      <PageSection className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c8a951]/5 dark:bg-[#9f7b42]/5 rounded-full translate-x-1/3 -translate-y-1/3 z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c8a951]/5 dark:bg-[#9f7b42]/5 rounded-full -translate-x-1/3 translate-y-1/3 z-0"></div>

        <div className="relative z-10">
          {/* Billing Cycle Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-white dark:bg-[#1a1a1a] p-2 rounded-xl shadow-md border border-gray-100 dark:border-[#2c1a22]/50">
              <Tabs
                value={billingCycle}
                onValueChange={(value) => setBillingCycle(value as "monthly" | "annual")}
                className="w-full max-w-md"
              >
                <TabsList className="grid w-full grid-cols-2 bg-gray-100 dark:bg-[#2c1a22] p-1 rounded-lg">
                  <TabsTrigger
                    value="monthly"
                    className="rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-[#3d2128] data-[state=active]:text-[#2c1a22] dark:data-[state=active]:text-white data-[state=active]:shadow-sm"
                  >
                    Monthly
                  </TabsTrigger>
                  <TabsTrigger
                    value="annual"
                    className="rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-[#3d2128] data-[state=active]:text-[#2c1a22] dark:data-[state=active]:text-white data-[state=active]:shadow-sm"
                  >
                    <span>Annual</span>
                    <span className="ml-2 bg-[#c8a951]/20 dark:bg-[#9f7b42]/20 text-[#c8a951] dark:text-[#9f7b42] text-xs px-2 py-0.5 rounded-full">Save 20%</span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          {/* Pricing Cards */}
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin w-10 h-10 border-4 border-[#c8a951] dark:border-[#9f7b42] border-t-transparent rounded-full"></div>
            </div>
          ) : error ? (
            <div className="text-center py-10">
              <Paragraph className="text-red-500">Error loading pricing data. Please try again later.</Paragraph>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {data?.plans.map((plan, index) => (
                <PricingCard
                  key={plan.id}
                  title={plan.title}
                  priceRange={billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice}
                  description={plan.description}
                  features={plan.features}
                  ctaLabel={plan.ctaLabel}
                  ctaLink={plan.ctaLink}
                  popular={plan.popular}
                  index={index}
                />
              ))}
            </div>
          )}

          {/* Custom Quote CTA */}
          <div className="bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg border border-gray-100 dark:border-[#2c1a22]/50 p-8 text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 rounded-full text-[#c8a951] dark:text-[#9f7b42] text-sm font-medium mb-4 border border-[#c8a951]/20 dark:border-[#9f7b42]/20">
              Custom Solutions
            </div>

            <h2 className="text-3xl font-bold mb-4 text-[#2c1a22] dark:text-white">Need a Custom Solution?</h2>

            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Our pricing is flexible and can be tailored to your specific requirements.
              Get in touch for a personalized quote or use our interactive quote builder.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/quote">
                <Button size="lg" className="bg-[#c8a951] hover:bg-[#c8a951]/90 text-[#2c1a22] dark:bg-[#9f7b42] dark:hover:bg-[#9f7b42]/90 dark:text-[#1f1a2c]">
                  <i className="fas fa-envelope mr-2"></i>
                  Request Custom Quote
                </Button>
              </Link>
              <Link href="/quote-builder">
                <Button variant="outline" size="lg" className="border-[#c8a951]/20 dark:border-[#9f7b42]/20 text-[#c8a951] dark:text-[#9f7b42] hover:bg-[#c8a951]/10 dark:hover:bg-[#9f7b42]/10">
                  <i className="fas fa-calculator mr-2"></i>
                  Try Quote Builder
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </PageSection>

      {/* FAQ Section */}
      <PageSection className="bg-gray-50 dark:bg-[#121212] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden">
        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 z-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 H100 M50 0 V100 M25 25 L75 75 M75 25 L25 75" stroke="currentColor" strokeWidth="0.5" fill="none" />
              <circle cx="50" cy="50" r="3" fill="currentColor" />
              <circle cx="25" cy="25" r="2" fill="currentColor" />
              <circle cx="75" cy="25" r="2" fill="currentColor" />
              <circle cx="25" cy="75" r="2" fill="currentColor" />
              <circle cx="75" cy="75" r="2" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
          </svg>
        </div>

        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-1.5 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 rounded-full text-[#c8a951] dark:text-[#9f7b42] text-sm font-medium mb-4 border border-[#c8a951]/20 dark:border-[#9f7b42]/20">
              Common Questions
            </div>

            <h2 className="text-3xl font-bold mb-4 text-[#2c1a22] dark:text-white">
              Frequently Asked <span className="text-[#c8a951] dark:text-[#9f7b42]">Questions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data?.faqs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-[#1a1a1a] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-[#2c1a22]/50 p-6 group"
              >
                <h3 className="text-lg font-bold mb-3 text-[#2c1a22] dark:text-white group-hover:text-[#c8a951] dark:group-hover:text-[#9f7b42] transition-colors">
                  {item.question}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {item.answer}
                </p>
              </motion.div>
            ))}
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

        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to <span className="text-[#c8a951] dark:text-[#9f7b42]">Transform</span> Your Business?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
              Get started today with a plan that fits your needs and budget.
              Our team is ready to help you implement AI solutions that drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-[#c8a951] hover:bg-[#c8a951]/90 text-[#2c1a22] dark:bg-[#9f7b42] dark:hover:bg-[#9f7b42]/90 dark:text-[#1f1a2c] px-8 py-4 rounded-md">
                  <i className="fas fa-calendar-check mr-2"></i>
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-md">
                  <i className="fas fa-th-large mr-2"></i>
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </PageSection>
    </PageWrapper>
  );
}
