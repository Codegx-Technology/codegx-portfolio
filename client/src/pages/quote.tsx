"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { QuoteForm } from "@/components/Forms/QuoteForm";
import { Toaster } from "sonner";

export default function QuotePage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Toaster position="top-right" />
      <section className="py-10 sm:py-12 md:py-16 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center">
            Get a Free AI Quote
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 text-center">
            Tell us about your business needs and goals. We'll send you a personalized AI solution estimate.
          </p>

          <div className="bg-card rounded-xl border border-border p-4 sm:p-6 md:p-8">
            <QuoteForm />
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}
