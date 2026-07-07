"use client";

import { motion } from "framer-motion";
import { IntelligentBackButton } from "@/components/ui/intelligent-back-button";

export default function QuoteThankYouPage() {
  return (
    <motion.div
      className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20 text-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-primary">Thank You!</h1>
      <p className="text-base sm:text-lg mb-6 text-muted-foreground">
        We've received your quote request and will respond within 24 hours.
        Want to chat sooner? Book a discovery call below.
      </p>

      <div className="mb-6 sm:mb-8">
        <div className="relative w-full aspect-[1/1.2] sm:aspect-[4/3]">
          <iframe
            src="https://calendly.com/codegx-technologies/ai-discovery-call"
            width="100%"
            height="100%"
            frameBorder="0"
            className="rounded-xl shadow absolute inset-0"
          ></iframe>
        </div>
      </div>

      <IntelligentBackButton
        fallbackHref="/"
        label="Back"
        className="w-full justify-center rounded-xl bg-primary px-4 py-3 text-primary-foreground hover:bg-primary/90 hover:opacity-100 sm:w-auto"
      />
    </motion.div>
  );
}
