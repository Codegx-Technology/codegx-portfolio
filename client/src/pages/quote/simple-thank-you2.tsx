"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function QuoteThankYouPage() {
  return (
    <motion.div
      className="max-w-2xl mx-auto px-4 py-20 text-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-4xl font-bold mb-4 text-primary">Thank You!</h1>
      <p className="text-lg mb-6 text-muted-foreground">
        We've received your quote request and will respond within 24 hours. 
        Want to chat sooner? Book a discovery call below.
      </p>

      <div className="mb-8">
        <iframe
          src="https://calendly.com/codegx-technologies/ai-discovery-call"
          width="100%"
          height="500"
          frameBorder="0"
          className="rounded-xl shadow"
        ></iframe>
      </div>

      <Link href="/">
        <Button variant="default">Back to Home</Button>
      </Link>
    </motion.div>
  );
}
