"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { SimpleQuoteForm2 } from "@/components/Forms/SimpleQuoteForm2";
import { Toaster } from "sonner";

export default function SimpleQuotePage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Toaster position="top-right" />
      <section className="py-16 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto px-4"
        >
          <h1 className="text-4xl font-bold mb-4 text-center">
            Get a Free AI Quote
          </h1>
          <p className="text-lg text-muted-foreground mb-8 text-center">
            Tell us about your business needs and goals. We'll send you a personalized AI solution estimate.
          </p>

          <div className="bg-card rounded-lg border border-border p-8">
            <SimpleQuoteForm2 />
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}
