import React from "react";
import { Head } from "@/components/head";
import { ThemeWrapper, ThemeContent, ThemeSection } from "@/components/layouts/ThemeWrapper";
import { ExecutiveNavbar } from "@/components/layouts/ExecutiveNavbar";
import { PageSection, PageSectionHeader } from "@/components/ui/page-section";
import { SectionDivider } from "@/components/ui/section-divider";
import { Heading1, Heading2, Heading3, Paragraph, Lead } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { EnterpriseCard } from "@/components/ui/enterprise-card";
import { EnterpriseGrid } from "@/components/ui/enterprise-container";
import { EnhancedThemeToggle } from "@/components/enhanced-theme-toggle";

export default function ExecutiveNavbarDemo() {
  return (
    <ThemeWrapper>
      <Head
        title="Executive Navbar Demo"
        description="Demonstration of the executive navbar component"
      />
      
      {/* Executive Navbar */}
      <ExecutiveNavbar />
      
      <ThemeContent>
        {/* Hero Section */}
        <PageSection
          background="pattern"
          spacing="xl"
          animate
        >
          <Heading1 className="text-center mb-6">Executive Navbar</Heading1>
          <Lead className="text-center max-w-3xl mx-auto mb-8">
            A professional, elegant navbar component with dark/light theme support, animated link highlights,
            and responsive mobile menu.
          </Lead>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="electric" size="lg">Get Started</Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </PageSection>

        <SectionDivider variant="wave" color="primary" spacing="none" />

        {/* Features Section */}
        <PageSection background="default" spacing="lg">
          <PageSectionHeader
            title="Key Features"
            subtitle="The Executive Navbar component includes several professional features"
            align="center"
          />

          <EnterpriseGrid cols={3} gap="md">
            <EnterpriseCard className="p-6">
              <Heading3 className="mb-4">Sticky with Backdrop Blur</Heading3>
              <Paragraph>
                The navbar stays at the top of the page with a subtle backdrop blur effect that
                activates on scroll, providing a modern, professional look.
              </Paragraph>
            </EnterpriseCard>
            
            <EnterpriseCard className="p-6">
              <Heading3 className="mb-4">Animated Link Highlights</Heading3>
              <Paragraph>
                Navigation links feature elegant underline animations on hover and active states,
                providing subtle visual feedback to users.
              </Paragraph>
            </EnterpriseCard>
            
            <EnterpriseCard className="p-6">
              <Heading3 className="mb-4">Dark/Light Theme Support</Heading3>
              <Paragraph>
                Automatically adapts to dark and light themes with appropriate logo switching
                and color adjustments for optimal visibility.
              </Paragraph>
            </EnterpriseCard>
            
            <EnterpriseCard className="p-6">
              <Heading3 className="mb-4">Responsive Design</Heading3>
              <Paragraph>
                Fully responsive with an elegant mobile menu that slides in from the right,
                providing a seamless experience on all devices.
              </Paragraph>
            </EnterpriseCard>
            
            <EnterpriseCard className="p-6">
              <Heading3 className="mb-4">Dropdown Menus</Heading3>
              <Paragraph>
                Support for dropdown menus using Radix UI's NavigationMenu component,
                providing accessible and customizable nested navigation.
              </Paragraph>
            </EnterpriseCard>
            
            <EnterpriseCard className="p-6">
              <Heading3 className="mb-4">CTA Button</Heading3>
              <Paragraph>
                Prominent call-to-action button with hover effects to drive user engagement
                and conversions.
              </Paragraph>
            </EnterpriseCard>
          </EnterpriseGrid>
        </PageSection>

        <SectionDivider variant="gradient" spacing="md" />

        {/* Theme Toggle Section */}
        <PageSection background="muted" spacing="lg">
          <PageSectionHeader
            title="Theme Support"
            subtitle="The navbar automatically adapts to light and dark themes"
            align="center"
          />
          
          <div className="flex flex-col items-center justify-center space-y-8">
            <Paragraph className="text-center max-w-2xl">
              Try toggling between light and dark themes to see how the navbar adapts.
              The logo, background, and text colors all adjust automatically for optimal
              visibility and aesthetics in both modes.
            </Paragraph>
            
            <div className="flex justify-center space-x-4">
              <EnhancedThemeToggle variant="dropdown" />
            </div>
            
            <div className="mt-8 p-6 border border-border rounded-xl max-w-2xl mx-auto">
              <Heading3 className="mb-4">Implementation</Heading3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                {`import { ExecutiveNavbar } from "@/components/layouts/ExecutiveNavbar";

export default function MyPage() {
  return (
    <>
      <ExecutiveNavbar 
        logo={{
          light: "/logo-dark.svg",
          dark: "/logo-light.svg",
          alt: "Company Logo"
        }}
        showThemeToggle={true}
        ctaText="Request Demo"
        ctaHref="/contact"
      />
      {/* Page content */}
    </>
  );
}`}
              </pre>
            </div>
          </div>
        </PageSection>

        <SectionDivider variant="dots" spacing="md" />

        {/* Conclusion Section */}
        <PageSection background="default" spacing="lg">
          <PageSectionHeader
            title="Ready to Use the Executive Navbar?"
            subtitle="Implement this professional navbar component in your project today"
            align="center"
          />
          
          <div className="flex justify-center mt-8">
            <Button variant="electric" size="lg">
              Get Started
            </Button>
          </div>
        </PageSection>
      </ThemeContent>
    </ThemeWrapper>
  );
}
