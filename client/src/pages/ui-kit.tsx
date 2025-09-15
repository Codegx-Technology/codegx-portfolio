import React from "react";
import { Layout } from "@/components/layout";
import { Head } from "@/components/head";
import { EnterpriseNavbar } from "@/components/enterprise-navbar";
import { EnterpriseHero } from "@/components/enterprise-hero";
import { EnterpriseContainer, EnterpriseSection, EnterpriseGrid } from "@/components/ui/enterprise-container";
import { EnterpriseCard, EnterpriseCardHeader, EnterpriseCardContent, EnterpriseCardFooter } from "@/components/ui/enterprise-card";
import { GlassmorphismCard, GlassmorphismFormCard } from "@/components/ui/glassmorphism-card";
import { MotionCard, FeatureCard } from "@/components/ui/motion-card";
import { TestimonialCarousel, Testimonial } from "@/components/testimonial-carousel";
import { CTASection } from "@/components/cta-section";
import { EnhancedThemeToggle } from "@/components/enhanced-theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Check, Zap, Shield, BarChart, Code, Lightbulb } from "lucide-react";

export default function UIKitPage() {
  // Sample testimonials
  const testimonials: Testimonial[] = [
    {
      id: "1",
      quote: "Working with Codegx Technologies transformed our business. Their AI solutions helped us increase efficiency by 40% and reduce costs significantly.",
      name: "Sarah Johnson",
      title: "CTO",
      company: "TechVision Inc.",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      linkedinUrl: "https://linkedin.com",
    },
    {
      id: "2",
      quote: "The team at Codegx delivered beyond our expectations. Their attention to detail and innovative approach to problem-solving is unmatched in the industry.",
      name: "Michael Chen",
      title: "Product Director",
      company: "Innovate Solutions",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      linkedinUrl: "https://linkedin.com",
    },
    {
      id: "3",
      quote: "We've worked with several AI agencies, but Codegx Technologies stands out for their technical expertise and strategic thinking. Highly recommended!",
      name: "Emily Rodriguez",
      title: "CEO",
      company: "FutureTech",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      linkedinUrl: "https://linkedin.com",
    },
  ];

  return (
    <Layout>
      <Head
        title="Enterprise UI Kit"
        description="Showcase of enterprise-grade UI components for Codegx Technologies"
      />

      {/* Enterprise Navbar */}
      <EnterpriseNavbar />

      {/* Hero Section */}
      <EnterpriseHero
        title="Enterprise-Grade UI Components"
        subtitle="CODEGX TECHNOLOGY"
        description="A showcase of modern, professional UI components designed for enterprise applications with a focus on aesthetics and usability."
        primaryCta={{
          text: "Get Started",
          href: "/quote",
        }}
        secondaryCta={{
          text: "Learn More",
          href: "/services",
        }}
        backgroundPattern={true}
      />

      {/* Typography Section */}
      <EnterpriseSection>
        <EnterpriseContainer>
          <h2 className="section-title mb-8">Typography System</h2>
          
          <div className="space-y-6">
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
            
            <div>
              <p className="body-sm">Body Small - This smaller text is used for less important information, captions, and supporting text.</p>
              <p className="text-muted-foreground mt-1">Font size: sm, Line height: Relaxed</p>
            </div>
          </div>
        </EnterpriseContainer>
      </EnterpriseSection>

      {/* Color Palette Section */}
      <EnterpriseSection className="bg-muted/50">
        <EnterpriseContainer>
          <h2 className="section-title mb-8">Enterprise Color Palette</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-6 bg-sapphire rounded-xl text-white">
              <div className="font-bold">Deep Sapphire</div>
              <div className="text-sm opacity-80">#0F172A</div>
            </div>
            
            <div className="p-6 bg-electric rounded-xl text-white">
              <div className="font-bold">Electric Blue</div>
              <div className="text-sm opacity-80">#2563EB</div>
            </div>
            
            <div className="p-6 bg-emerald rounded-xl text-white">
              <div className="font-bold">Emerald</div>
              <div className="text-sm opacity-80">#10B981</div>
            </div>
            
            <div className="p-6 bg-amber rounded-xl text-sapphire">
              <div className="font-bold">Soft Amber</div>
              <div className="text-sm opacity-80">#FACC15</div>
            </div>
            
            <div className="p-6 bg-lightGray rounded-xl border">
              <div className="font-bold">Light Gray</div>
              <div className="text-sm opacity-80">#F8FAFC</div>
            </div>
            
            <div className="p-6 bg-softDark rounded-xl text-white">
              <div className="font-bold">Soft Dark</div>
              <div className="text-sm opacity-80">#1E293B</div>
            </div>
          </div>
        </EnterpriseContainer>
      </EnterpriseSection>

      {/* Button Variants Section */}
      <EnterpriseSection>
        <EnterpriseContainer>
          <h2 className="section-title mb-8">Button Variants</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-4">
              <Button variant="default" size="default">Default Button</Button>
              <Button variant="secondary" size="default">Secondary</Button>
              <Button variant="outline" size="default">Outline</Button>
              <Button variant="ghost" size="default">Ghost</Button>
            </div>
            
            <div className="space-y-4">
              <Button variant="sapphire" size="default">Sapphire</Button>
              <Button variant="electric" size="default">Electric</Button>
              <Button variant="emerald" size="default">Emerald</Button>
              <Button variant="amber" size="default">Amber</Button>
            </div>
            
            <div className="space-y-4">
              <Button variant="sapphire-outline" size="default">Sapphire Outline</Button>
              <Button variant="electric-outline" size="default">Electric Outline</Button>
              <Button variant="soft" size="default">Soft Button</Button>
              <Button variant="link" size="default">Link Button</Button>
            </div>
            
            <div className="space-y-4">
              <Button variant="default" size="sm">Small</Button>
              <Button variant="default" size="default">Default</Button>
              <Button variant="default" size="lg">Large</Button>
              <Button variant="default" size="icon"><Zap className="h-4 w-4" /></Button>
            </div>
          </div>
        </EnterpriseContainer>
      </EnterpriseSection>

      {/* Card Components Section */}
      <EnterpriseSection className="bg-muted/50">
        <EnterpriseContainer>
          <h2 className="section-title mb-8">Card Components</h2>
          
          <EnterpriseGrid cols={3} gap="lg">
            <EnterpriseCard>
              <EnterpriseCardHeader
                title="Enterprise Card"
                description="Default card variant with header, content, and footer"
                icon={<Shield className="h-5 w-5" />}
              />
              <EnterpriseCardContent>
                <p className="text-muted-foreground">This is the standard enterprise card component with a clean, professional design.</p>
              </EnterpriseCardContent>
              <EnterpriseCardFooter bordered>
                <Button variant="soft" size="sm">Learn More</Button>
              </EnterpriseCardFooter>
            </EnterpriseCard>
            
            <MotionCard hoverEffect="lift" animateEntrance>
              <EnterpriseCardHeader
                title="Motion Card"
                description="Card with hover animations and effects"
                icon={<Zap className="h-5 w-5" />}
              />
              <EnterpriseCardContent>
                <p className="text-muted-foreground">This card uses Framer Motion for subtle animations and hover effects.</p>
              </EnterpriseCardContent>
              <EnterpriseCardFooter bordered>
                <Button variant="soft" size="sm">Learn More</Button>
              </EnterpriseCardFooter>
            </MotionCard>
            
            <GlassmorphismCard intensity="medium" animate>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Glassmorphism Card</h3>
                <p className="text-muted-foreground mb-4">Modern card with backdrop blur effect and subtle transparency.</p>
                <Button variant="electric" size="sm">Learn More</Button>
              </div>
            </GlassmorphismCard>
          </EnterpriseGrid>
          
          <div className="mt-12">
            <h3 className="heading-4 mb-6">Feature Cards</h3>
            
            <EnterpriseGrid cols={3} gap="md">
              <FeatureCard
                title="AI Strategy"
                description="Develop a comprehensive AI strategy tailored to your business goals and challenges."
                icon={<BarChart className="h-5 w-5" />}
              />
              
              <FeatureCard
                title="Custom Development"
                description="Build custom AI solutions designed specifically for your unique business needs."
                icon={<Code className="h-5 w-5" />}
              />
              
              <FeatureCard
                title="Innovation Labs"
                description="Explore cutting-edge AI technologies and concepts in our dedicated innovation labs."
                icon={<Lightbulb className="h-5 w-5" />}
              />
            </EnterpriseGrid>
          </div>
        </EnterpriseContainer>
      </EnterpriseSection>

      {/* Form Components Section */}
      <EnterpriseSection>
        <EnterpriseContainer size="md">
          <h2 className="section-title mb-8">Form Components</h2>
          
          <GlassmorphismFormCard
            title="Contact Form"
            description="Get in touch with our team to discuss your project."
            intensity="light"
            animate
          >
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <Input id="name" placeholder="Your name" className="w-full" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="w-full" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <Input id="subject" placeholder="How can we help you?" className="w-full" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea id="message" placeholder="Tell us about your project" rows={4} className="w-full" />
              </div>
              
              <div className="pt-4">
                <Button variant="electric" className="w-full sm:w-auto">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </GlassmorphismFormCard>
        </EnterpriseContainer>
      </EnterpriseSection>

      {/* Testimonial Section */}
      <EnterpriseSection className="bg-muted/50">
        <EnterpriseContainer>
          <h2 className="section-title text-center mb-12">What Our Clients Say</h2>
          
          <TestimonialCarousel testimonials={testimonials} variant="cards" />
        </EnterpriseContainer>
      </EnterpriseSection>

      {/* Theme Toggle Section */}
      <EnterpriseSection>
        <EnterpriseContainer size="sm">
          <h2 className="section-title text-center mb-8">Theme Toggle Variants</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className="mb-4">
                <EnhancedThemeToggle variant="icon" />
              </div>
              <p className="text-sm text-muted-foreground">Icon Toggle</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <EnhancedThemeToggle variant="button" showLabel />
              </div>
              <p className="text-sm text-muted-foreground">Button Toggle</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <EnhancedThemeToggle variant="dropdown" />
              </div>
              <p className="text-sm text-muted-foreground">Dropdown Toggle</p>
            </div>
          </div>
        </EnterpriseContainer>
      </EnterpriseSection>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Business with AI?"
        description="Get started with Codegx Technologies today and discover how our enterprise-grade solutions can help you achieve your business goals."
        primaryCta={{
          text: "Get Started",
          href: "/quote",
        }}
        secondaryCta={{
          text: "Learn More",
          href: "/services",
        }}
        variant="diagonal"
        size="lg"
      />
    </Layout>
  );
}
