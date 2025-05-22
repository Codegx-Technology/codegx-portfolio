import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";
import { InlineWidget } from "react-calendly";

export default function SimpleThankYou() {
  const [showCalendly, setShowCalendly] = useState(false);
  // Trigger confetti effect on page load
  useEffect(() => {
    window.scrollTo(0, 0);

    // Trigger confetti
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#5D5FEF', '#3E63DD', '#7A5AF8'],
      });

      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#5D5FEF', '#3E63DD', '#7A5AF8'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
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
            <h1 className="text-4xl font-bold font-inter mb-4">Thanks! We'll Review Your Project and Get Back Shortly</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We've received your quote request and will be in touch with you shortly.
              Our team is excited to learn more about your project and how we can help bring your AI vision to life.
            </p>

            <div className="bg-card rounded-lg border border-border p-8 max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl font-bold mb-6">What Happens Next?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-bold">1</span>
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold mb-1">Initial Review (24 Hours)</h3>
                    <p className="text-muted-foreground">
                      Our team will review your project requirements and prepare some initial thoughts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-bold">2</span>
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold mb-1">Personal Contact</h3>
                    <p className="text-muted-foreground">
                      We'll reach out via email to schedule a call to discuss your project in more detail.
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

            {/* Calendly Section */}
            <div className="mb-12">
              <Button
                onClick={() => setShowCalendly(!showCalendly)}
                variant="outline"
                className="mb-6"
              >
                <i className="fas fa-calendar-alt mr-2"></i>
                {showCalendly ? "Hide Calendar" : "Want to talk sooner? Book a free 15-min call"}
              </Button>

              {showCalendly && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-lg overflow-hidden border border-border"
                >
                  <InlineWidget
                    url="https://calendly.com/codegx-technologies/ai-discovery-call"
                    styles={{ height: '650px' }}
                  />
                </motion.div>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services">
                <Button>
                  <i className="fas fa-th-large mr-2"></i>
                  Explore Our Services
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline">
                  <i className="fas fa-book mr-2"></i>
                  Read Our Blog
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
