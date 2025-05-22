import { useEffect } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ThankYou() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
              <i className="fas fa-check-circle text-4xl"></i>
            </div>
            <h1 className="text-4xl font-bold font-inter mb-4">Thank You for Your Request!</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We've received your quote request and will be in touch with you shortly.
              One of our AI specialists will review your requirements and prepare a detailed proposal.
            </p>
            
            <div className="bg-card rounded-lg border border-border p-8 max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl font-bold mb-6">What Happens Next?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-bold">1</span>
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold mb-1">Initial Review</h3>
                    <p className="text-muted-foreground">
                      Our team will review your project requirements within 1 business day.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-bold">2</span>
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold mb-1">Consultation Call</h3>
                    <p className="text-muted-foreground">
                      We'll schedule a call to discuss your project in detail and answer any questions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-bold">3</span>
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold mb-1">Custom Proposal</h3>
                    <p className="text-muted-foreground">
                      You'll receive a detailed proposal with timeline, deliverables, and exact pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button>
                  <i className="fas fa-home mr-2"></i>
                  Return to Home
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline">
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
