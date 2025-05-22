import { useEffect } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import QuoteForm from "@/components/Forms/QuoteForm";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Quote() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold font-inter mb-4">Smart Quote Builder</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Answer a few questions about your project, and we'll recommend the best AI solution
              for your needs along with a custom price estimate.
            </p>
          </motion.div>
          
          {/* Quote Form */}
          <div className="bg-card rounded-lg border border-border p-8 mb-12">
            <QuoteForm />
          </div>
          
          {/* Alternative Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Prefer to Talk Directly?</h2>
            <p className="text-muted-foreground mb-6">
              If you'd rather discuss your project with our team directly, we're here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button variant="outline">
                  <i className="fas fa-envelope mr-2"></i>
                  Contact Us
                </Button>
              </Link>
              <a href="tel:+1234567890">
                <Button variant="outline">
                  <i className="fas fa-phone-alt mr-2"></i>
                  Call Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
