import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import PricingCard from "@/components/Pricing/PricingCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Pricing data
  const pricingPlans = [
    {
      title: "Starter",
      monthlyPrice: "$5,000 - $15,000",
      annualPrice: "$48,000 - $144,000",
      description: "Perfect for startups and small businesses looking to implement their first AI solution.",
      features: [
        { text: "Single AI service implementation", included: true },
        { text: "Basic integration with existing systems", included: true },
        { text: "Standard documentation", included: true },
        { text: "Email support", included: true },
        { text: "1 revision round", included: true },
        { text: "Dedicated project manager", included: false },
        { text: "Custom AI model training", included: false },
        { text: "Advanced analytics dashboard", included: false },
        { text: "24/7 priority support", included: false }
      ],
      ctaLabel: "Get Started",
      ctaLink: "/contact",
      popular: false
    },
    {
      title: "Growth",
      monthlyPrice: "$15,000 - $50,000",
      annualPrice: "$144,000 - $480,000",
      description: "Ideal for growing businesses ready to leverage AI for competitive advantage.",
      features: [
        { text: "Multiple AI service implementation", included: true },
        { text: "Advanced integration capabilities", included: true },
        { text: "Comprehensive documentation", included: true },
        { text: "Email and phone support", included: true },
        { text: "3 revision rounds", included: true },
        { text: "Dedicated project manager", included: true },
        { text: "Custom AI model training", included: true },
        { text: "Advanced analytics dashboard", included: false },
        { text: "24/7 priority support", included: false }
      ],
      ctaLabel: "Talk to Sales",
      ctaLink: "/contact",
      popular: true
    },
    {
      title: "Enterprise",
      monthlyPrice: "$50,000+",
      annualPrice: "$480,000+",
      description: "For organizations requiring comprehensive, custom AI solutions at scale.",
      features: [
        { text: "Full suite of AI services", included: true },
        { text: "Enterprise-grade integrations", included: true },
        { text: "Complete documentation & knowledge transfer", included: true },
        { text: "Dedicated support team", included: true },
        { text: "Unlimited revision rounds", included: true },
        { text: "Dedicated project manager", included: true },
        { text: "Custom AI model training", included: true },
        { text: "Advanced analytics dashboard", included: true },
        { text: "24/7 priority support", included: true }
      ],
      ctaLabel: "Contact Us",
      ctaLink: "/contact",
      popular: false
    }
  ];

  // FAQ data
  const faqItems = [
    {
      question: "How do you determine the exact price for my project?",
      answer: "We assess several factors including project complexity, timeline, required AI services, integration needs, and ongoing support requirements. After an initial consultation, we provide a detailed quote tailored to your specific needs."
    },
    {
      question: "Do you offer discounts for startups or non-profits?",
      answer: "Yes, we offer special pricing for qualified startups and non-profit organizations. Please contact us to discuss your specific situation and learn about our startup and non-profit programs."
    },
    {
      question: "What's included in the implementation cost?",
      answer: "Our implementation costs typically include requirements analysis, solution design, development, testing, deployment, documentation, and initial training. Ongoing support and maintenance are usually covered under separate agreements."
    },
    {
      question: "Do you offer ongoing maintenance and support?",
      answer: "Yes, we offer various support and maintenance packages to ensure your AI solutions continue to perform optimally. These can be customized based on your needs and can include regular updates, performance monitoring, and technical support."
    },
    {
      question: "Can I upgrade my plan as my business grows?",
      answer: "Absolutely! Our pricing tiers are designed to scale with your business. You can start with a Starter plan and upgrade to Growth or Enterprise as your AI needs expand. We'll work with you to ensure a smooth transition."
    },
    {
      question: "Do you offer a money-back guarantee?",
      answer: "We work with clearly defined milestones and deliverables. While we don't offer a traditional money-back guarantee, our contracts include specific performance criteria and acceptance testing to ensure you're satisfied with the delivered solution."
    }
  ];

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.title}
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
              {faqItems.map((item, index) => (
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
