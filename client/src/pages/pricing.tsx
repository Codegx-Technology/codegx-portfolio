import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Layout } from "@/components/layout";
import PricingCard from "@/components/Pricing/PricingCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    <Layout>
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold font-inter mb-4">Flexible Pricing for Startups and Scaleups</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent pricing options designed to fit your business needs and growth stage.
              From initial AI implementation to enterprise-scale solutions.
            </p>
          </motion.div>

          {/* Billing Cycle Toggle */}
          <div className="flex justify-center mb-12">
            <Tabs
              value={billingCycle}
              onValueChange={(value) => setBillingCycle(value as "monthly" | "annual")}
              className="w-full max-w-md"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="annual">Annual (Save 20%)</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Pricing Cards */}
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin w-10 h-10 border-4 border-primary border-t-transparent rounded-full"></div>
            </div>
          ) : error ? (
            <div className="text-center py-10">
              <p className="text-red-500">Error loading pricing data. Please try again later.</p>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-lg border border-border p-8 text-center mb-16"
          >
            <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
              Our pricing is flexible and can be tailored to your specific requirements.
              Get in touch for a personalized quote or use our interactive quote builder.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/quote">
                <Button size="lg">
                  <i className="fas fa-envelope mr-2"></i>
                  Request Custom Quote
                </Button>
              </Link>
              <Link href="/quote-builder">
                <Button variant="outline" size="lg">
                  <i className="fas fa-calculator mr-2"></i>
                  Try Quote Builder
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data?.faqs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-lg border border-border p-6"
                >
                  <h3 className="text-lg font-bold mb-2">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold font-inter mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Get started today with a plan that fits your needs and budget.
              Our team is ready to help you implement AI solutions that drive real business results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8">
                  <i className="fas fa-calendar-check mr-2"></i>
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  <i className="fas fa-th-large mr-2"></i>
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
