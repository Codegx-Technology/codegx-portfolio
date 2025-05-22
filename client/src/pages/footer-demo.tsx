import React, { useState } from "react";
import { Footer } from "@/components/layouts/Footer";
import { Head } from "@/components/head";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function FooterDemo() {
  const [isAgencyPage, setIsAgencyPage] = useState(false);
  const [variant, setVariant] = useState<"default" | "minimal" | "expanded">("default");
  const [showNewsletter, setShowNewsletter] = useState(true);
  const [showSocial, setShowSocial] = useState(true);
  const [showLegal, setShowLegal] = useState(true);

  return (
    <>
      <Head
        title="Footer Demo"
        description="Showcase of the enterprise-grade footer component"
      />

      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <section className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Enterprise Footer Demo</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of the enterprise-grade footer component with different configurations.
            </p>
          </section>

          <section className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Footer Configuration</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Company Type</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant={!isAgencyPage ? "default" : "outline"}
                      size="sm"
                      onClick={() => setIsAgencyPage(false)}
                    >
                      Codegx Technologies
                    </Button>
                    <Button
                      variant={isAgencyPage ? "default" : "outline"}
                      size="sm"
                      onClick={() => setIsAgencyPage(true)}
                    >
                      Astella AI (Agency)
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Footer Variant</h3>
                  <div className="flex flex-wrap gap-2">
                    {["default", "minimal", "expanded"].map((v) => (
                      <Button
                        key={v}
                        variant={variant === v ? "default" : "outline"}
                        size="sm"
                        onClick={() => setVariant(v as any)}
                      >
                        {v}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Features</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant={showNewsletter ? "default" : "outline"}
                      size="sm"
                      onClick={() => setShowNewsletter(!showNewsletter)}
                    >
                      {showNewsletter ? "Hide Newsletter" : "Show Newsletter"}
                    </Button>
                    <Button
                      variant={showSocial ? "default" : "outline"}
                      size="sm"
                      onClick={() => setShowSocial(!showSocial)}
                    >
                      {showSocial ? "Hide Social" : "Show Social"}
                    </Button>
                    <Button
                      variant={showLegal ? "default" : "outline"}
                      size="sm"
                      onClick={() => setShowLegal(!showLegal)}
                    >
                      {showLegal ? "Hide Legal" : "Show Legal"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-3">Responsive Design</h3>
                <p className="text-muted-foreground">
                  Fully responsive with optimized mobile and desktop experiences.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-3">Smooth Animations</h3>
                <p className="text-muted-foreground">
                  Subtle animations enhance the user experience without being distracting.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-3">Customizable</h3>
                <p className="text-muted-foreground">
                  Multiple variants and options to match your brand and requirements.
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </main>

      {/* Footer Preview */}
      <div className="mt-12 border-t border-border">
        <Footer
          isAgencyPage={isAgencyPage}
          variant={variant}
          showNewsletter={showNewsletter}
          showSocial={showSocial}
          showLegal={showLegal}
        />
      </div>
    </>
  );
}
