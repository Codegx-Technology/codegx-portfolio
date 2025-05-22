import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PageWrapper, PageHeader, PageSection } from "@/components/layouts/PageWrapper";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Heading2, Heading3, Paragraph } from "@/components/ui/typography";
import confetti from "canvas-confetti";
import { InlineWidget } from "react-calendly";

export default function ThankYou() {
  const [confettiTriggered, setConfettiTriggered] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);

    // Trigger confetti effect once
    if (!confettiTriggered) {
      triggerConfetti();
      setConfettiTriggered(true);
    }
  }, [confettiTriggered]);

  // Confetti effect
  const triggerConfetti = () => {
    const duration = 3 * 1000;
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
  };

  return (
    <PageWrapper>
      <PageSection className="relative overflow-hidden text-center">
        {/* Animated stars background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
            <i className="fas fa-check-circle text-4xl"></i>
          </div>

          <PageHeader
            title="Thanks! We'll Review Your Project"
            description="We've received your quote request and will get back to you shortly with a detailed proposal. Our team is excited to learn more about your project and how we can help bring your AI vision to life."
            className="text-center"
          />

          <div className="bg-card rounded-xl border border-border p-4 sm:p-6 md:p-8 max-w-2xl mx-auto mb-8 sm:mb-12">
            <Heading2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              What Happens Next?
            </Heading2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="font-bold">1</span>
                </div>
                <div className="text-left">
                  <Heading3 className="font-bold mb-1">Initial Review (1-2 Business Days)</Heading3>
                  <Paragraph className="text-muted-foreground">
                    Our team will review your project requirements and prepare some initial thoughts.
                  </Paragraph>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="font-bold">2</span>
                </div>
                <div className="text-left">
                  <Heading3 className="font-bold mb-1">Discovery Call</Heading3>
                  <Paragraph className="text-muted-foreground">
                    We'll schedule a call to discuss your project in detail and answer any questions.
                  </Paragraph>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="font-bold">3</span>
                </div>
                <div className="text-left">
                  <Heading3 className="font-bold mb-1">Custom Proposal</Heading3>
                  <Paragraph className="text-muted-foreground">
                    You'll receive a detailed proposal with timeline, deliverables, and exact pricing.
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>

          {/* Calendly Section */}
          <div className="mb-8 sm:mb-12">
            <Button
              onClick={() => setShowCalendly(!showCalendly)}
              variant="outline"
              className="w-full sm:w-auto min-h-[44px] py-3 px-4 rounded-xl mb-6 mt-6"
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
                className="rounded-xl overflow-hidden border border-border"
              >
                <div className="relative w-full aspect-[1/1.2] sm:aspect-[4/3]">
                  <InlineWidget
                    url="https://calendly.com/codegx-technologies/ai-discovery-call"
                    styles={{
                      height: '100%',
                      width: '100%',
                      position: 'absolute',
                      inset: 0
                    }}
                  />
                </div>
              </motion.div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-6">
            <Link href="/services">
              <Button className="w-full sm:w-auto min-h-[44px] py-3 px-6 rounded-xl focus:outline-none">
                <i className="fas fa-th-large mr-2"></i>
                Explore Our Services
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline" className="w-full sm:w-auto min-h-[44px] py-3 px-6 rounded-xl focus:outline-none">
                <i className="fas fa-book mr-2"></i>
                Read Our Blog
              </Button>
            </Link>
          </div>
        </div>
      </PageSection>
    </PageWrapper>
  );
}
