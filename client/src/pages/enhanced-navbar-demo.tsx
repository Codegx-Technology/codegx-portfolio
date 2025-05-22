import React, { useState } from "react";
import { ExecutiveNavbar } from "@/components/layouts/ExecutiveNavbar";
import { Button } from "@/components/ui/button";
import { Head } from "@/components/head";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function EnhancedNavbarDemo() {
  const [variant, setVariant] = useState<"default" | "transparent" | "elevated" | "bordered">("default");
  const [ctaVariant, setCtaVariant] = useState<string>("electric");
  const [showSearch, setShowSearch] = useState(true);
  const [showNotifications, setShowNotifications] = useState(true);
  const [notificationCount, setNotificationCount] = useState(3);
  const [sticky, setSticky] = useState(true);

  return (
    <>
      <Head
        title="Enhanced Enterprise Navbar Demo"
        description="Showcase of the enhanced enterprise-grade navigation bar"
      />

      {/* Navbar */}
      <ExecutiveNavbar
        variant={variant}
        ctaVariant={ctaVariant as any}
        showSearch={showSearch}
        showNotifications={showNotifications}
        notificationCount={notificationCount}
        sticky={sticky}
        logo={{
          light: "/logo-dark.svg",
          dark: "/logo-light.svg",
          alt: "Astella AI"
        }}
      />

      {/* Demo Content */}
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <section className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Enhanced Enterprise Navbar</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A highly polished, animated navbar designed for enterprise applications with customizable features.
            </p>
          </section>

          <section className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Navbar Configuration</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Navbar Variant</h3>
                  <div className="flex flex-wrap gap-2">
                    {["default", "transparent", "elevated", "bordered"].map((v) => (
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
                
                <div>
                  <h3 className="text-lg font-medium mb-2">CTA Button Style</h3>
                  <div className="flex flex-wrap gap-2">
                    {["default", "electric", "sapphire", "emerald", "electric-outline"].map((v) => (
                      <Button
                        key={v}
                        variant={ctaVariant === v ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCtaVariant(v)}
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
                      variant={showSearch ? "default" : "outline"}
                      size="sm"
                      onClick={() => setShowSearch(!showSearch)}
                    >
                      {showSearch ? "Hide Search" : "Show Search"}
                    </Button>
                    <Button
                      variant={showNotifications ? "default" : "outline"}
                      size="sm"
                      onClick={() => setShowNotifications(!showNotifications)}
                    >
                      {showNotifications ? "Hide Notifications" : "Show Notifications"}
                    </Button>
                    <Button
                      variant={sticky ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSticky(!sticky)}
                    >
                      {sticky ? "Disable Sticky" : "Enable Sticky"}
                    </Button>
                  </div>
                </div>
                
                {showNotifications && (
                  <div>
                    <h3 className="text-lg font-medium mb-2">Notification Count</h3>
                    <div className="flex flex-wrap gap-2">
                      {[0, 1, 3, 10].map((count) => (
                        <Button
                          key={count}
                          variant={notificationCount === count ? "default" : "outline"}
                          size="sm"
                          onClick={() => setNotificationCount(count)}
                        >
                          {count}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
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

      {/* Scroll content to test sticky behavior */}
      <div className="h-[1000px] bg-gradient-to-b from-background to-muted/20 flex items-center justify-center">
        <p className="text-muted-foreground text-lg">Scroll to test sticky behavior</p>
      </div>
    </>
  );
}
