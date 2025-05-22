import React from "react";
import { Head } from "@/components/head";
import { ThemeWrapper, ThemeContent, ThemeSection } from "@/components/layouts/ThemeWrapper";
import { Navbar } from "@/components/layouts/Navbar";
import { Button } from "@/components/ui/button";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { EnhancedThemeToggle } from "@/components/enhanced-theme-toggle";
import { motion } from "framer-motion";

export default function AugmentDemo() {
  return (
    <ThemeWrapper>
      <Head
        title="Augment UI Demo"
        description="Showcase of Augment UI components with executive styling"
      />
      
      {/* Navbar */}
      <Navbar />
      
      <ThemeContent>
        {/* Hero Section */}
        <ThemeSection className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="heading-1 mb-6">
                Enterprise-Grade UI Components
              </h1>
              
              <p className="body-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Showcase of modern, professional UI components designed for enterprise applications with a focus on aesthetics and usability.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="electric" size="lg">
                  Get Started
                </Button>
                
                <Button variant="soft" size="lg">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </ThemeSection>
        
        {/* Theme Wrapper Demo */}
        <ThemeSection className="bg-muted/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6">ThemeWrapper Component</h2>
            
            <p className="body-base mb-8">
              The ThemeWrapper component applies Tailwind class themes (light/dark) and handles font loading and theme transitions. It uses the Inter and Plus Jakarta Sans fonts for a professional look.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <GlassmorphismCard className="p-6">
                <h3 className="heading-4 mb-4">Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Automatic theme switching based on user preference</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Smooth transitions between themes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Respects user's motion preferences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Consistent typography with Inter and Plus Jakarta Sans</span>
                  </li>
                </ul>
              </GlassmorphismCard>
              
              <GlassmorphismCard className="p-6">
                <h3 className="heading-4 mb-4">Theme Toggle</h3>
                <p className="mb-4">
                  Try switching between light and dark themes:
                </p>
                
                <div className="flex flex-col space-y-6">
                  <div className="flex justify-center">
                    <EnhancedThemeToggle variant="dropdown" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex justify-center">
                      <EnhancedThemeToggle variant="icon" />
                    </div>
                    <div className="flex justify-center">
                      <EnhancedThemeToggle variant="button" showLabel />
                    </div>
                  </div>
                </div>
              </GlassmorphismCard>
            </div>
          </div>
        </ThemeSection>
        
        {/* Navbar Demo */}
        <ThemeSection>
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6">Executive Navbar</h2>
            
            <p className="body-base mb-8">
              The Navbar component features a sticky header with backdrop blur, logo with dark/light versions, Radix NavigationMenu with hover/active underline animations, and a CTA button with gradient border.
            </p>
            
            <GlassmorphismCard className="p-6">
              <h3 className="heading-4 mb-4">Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Sticky header with backdrop blur</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Logo with dark/light mode versions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Radix NavigationMenu for dropdowns</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Hover/active underline animations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>CTA button with gradient border</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Responsive mobile menu</span>
                    </li>
                  </ul>
                </div>
              </div>
            </GlassmorphismCard>
          </div>
        </ThemeSection>
        
        {/* Typography Demo */}
        <ThemeSection className="bg-muted/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6">Typography System</h2>
            
            <div className="space-y-8">
              <div>
                <h1 className="heading-1">Heading 1 - Inter or Plus Jakarta Sans</h1>
                <p className="text-muted-foreground mt-1">Font size: 4xl-6xl, Font weight: Bold, Tracking: Tight</p>
              </div>
              
              <div>
                <h2 className="heading-2">Heading 2 - Corporate Clarity</h2>
                <p className="text-muted-foreground mt-1">Font size: 3xl-5xl, Font weight: Bold, Tracking: Tight</p>
              </div>
              
              <div>
                <h3 className="heading-3">Heading 3 - Professional Typography</h3>
                <p className="text-muted-foreground mt-1">Font size: 2xl-4xl, Font weight: Semibold, Tracking: Tight</p>
              </div>
              
              <div>
                <h4 className="heading-4">Heading 4 - Executive Polish</h4>
                <p className="text-muted-foreground mt-1">Font size: xl-2xl, Font weight: Semibold, Tracking: Tight</p>
              </div>
              
              <div>
                <p className="body-xl">Body XL - This is larger body text for important paragraphs and introductions.</p>
                <p className="text-muted-foreground mt-1">Font size: xl, Line height: Relaxed</p>
              </div>
              
              <div>
                <p className="body-base">Body Base - This is the standard body text used for most content throughout the site. It provides good readability and balance.</p>
                <p className="text-muted-foreground mt-1">Font size: base, Line height: Relaxed</p>
              </div>
            </div>
          </div>
        </ThemeSection>
        
        {/* CTA Section */}
        <ThemeSection className="bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 mb-4">Ready to Get Started?</h2>
            <p className="body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Implement these enterprise-grade UI components in your project today.
            </p>
            
            <Button variant="electric" size="lg">
              Request Demo
            </Button>
          </div>
        </ThemeSection>
      </ThemeContent>
    </ThemeWrapper>
  );
}
