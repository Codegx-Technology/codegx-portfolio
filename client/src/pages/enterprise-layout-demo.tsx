import React from "react";
import { Layout } from "@/components/layout";
import { Head } from "@/components/head";
import { PageSection, PageSectionHeader, PageSectionContent } from "@/components/ui/page-section";
import { SectionDivider, GradientDivider } from "@/components/ui/section-divider";
import { Heading1, Heading2, Heading3, Paragraph, Lead, BlockQuote } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { EnterpriseCard } from "@/components/ui/enterprise-card";
import { EnterpriseGrid } from "@/components/ui/enterprise-container";

export default function EnterpriseLayoutDemo() {
  return (
    <Layout withContainer={false}>
      <Head
        title="Enterprise Layout Demo"
        description="Demonstration of the enterprise layout system"
      />

      {/* Hero Section */}
      <PageSection
        background="pattern"
        spacing="xl"
        animate
      >
        <Heading1 className="text-center mb-6">Enterprise Layout System</Heading1>
        <Lead className="text-center max-w-3xl mx-auto mb-8">
          A comprehensive layout system for enterprise applications with consistent spacing,
          typography hierarchy, and section dividers.
        </Lead>
        <div className="flex justify-center gap-4">
          <Button variant="electric" size="lg">Get Started</Button>
          <Button variant="outline" size="lg">Learn More</Button>
        </div>
      </PageSection>

      <SectionDivider variant="wave" color="primary" spacing="none" />

      {/* Typography Section */}
      <PageSection background="default" spacing="lg">
        <PageSectionHeader
          title="Typography Hierarchy"
          subtitle="Consistent typography with proper hierarchy using the Tailwind Typography plugin"
          align="center"
        />

        <div className="max-w-4xl mx-auto">
          <Heading1 className="mb-4">Heading 1 - Main Page Title</Heading1>
          <Heading2 className="mb-4">Heading 2 - Section Title</Heading2>
          <Heading3 className="mb-4">Heading 3 - Subsection Title</Heading3>
          
          <Paragraph className="mb-4">
            This is a standard paragraph with proper spacing and line height. The typography
            system ensures consistent text styling across all pages. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </Paragraph>
          
          <BlockQuote className="my-8">
            "The enterprise layout system provides a consistent, professional look and feel
            across all pages of the application."
          </BlockQuote>
          
          <Paragraph>
            Another paragraph with proper spacing. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Paragraph>
        </div>
      </PageSection>

      <SectionDivider variant="gradient" spacing="md" />

      {/* Section Dividers Demo */}
      <PageSection background="muted" spacing="lg">
        <PageSectionHeader
          title="Section Dividers"
          subtitle="Various section divider styles to visually separate content sections"
        />

        <div className="space-y-12">
          <div>
            <Heading3 className="mb-4">Line Divider</Heading3>
            <SectionDivider variant="line" spacing="sm" />
          </div>
          
          <div>
            <Heading3 className="mb-4">Gradient Divider</Heading3>
            <SectionDivider variant="gradient" spacing="sm" />
          </div>
          
          <div>
            <Heading3 className="mb-4">Dots Divider</Heading3>
            <SectionDivider variant="dots" spacing="sm" />
          </div>
          
          <div>
            <Heading3 className="mb-4">Wave Divider</Heading3>
            <SectionDivider variant="wave" spacing="sm" color="secondary" />
          </div>
          
          <div>
            <Heading3 className="mb-4">Angle Divider</Heading3>
            <SectionDivider variant="angle" spacing="sm" color="primary" />
          </div>
        </div>
      </PageSection>

      <SectionDivider variant="angle" color="primary" spacing="none" />

      {/* Page Sections Demo */}
      <PageSection background="gradient" spacing="lg">
        <PageSectionHeader
          title="Page Sections"
          subtitle="Consistent page sections with various background styles"
          align="center"
        />

        <EnterpriseGrid cols={3} gap="md">
          <EnterpriseCard className="p-6">
            <Heading3 className="mb-4">Default Background</Heading3>
            <Paragraph>
              Standard background color for most content sections.
            </Paragraph>
          </EnterpriseCard>
          
          <EnterpriseCard className="p-6">
            <Heading3 className="mb-4">Muted Background</Heading3>
            <Paragraph>
              Subtle background color for secondary content.
            </Paragraph>
          </EnterpriseCard>
          
          <EnterpriseCard className="p-6">
            <Heading3 className="mb-4">Gradient Background</Heading3>
            <Paragraph>
              Gradient background for visually appealing sections.
            </Paragraph>
          </EnterpriseCard>
          
          <EnterpriseCard className="p-6">
            <Heading3 className="mb-4">Pattern Background</Heading3>
            <Paragraph>
              Subtle pattern background for visual interest.
            </Paragraph>
          </EnterpriseCard>
          
          <EnterpriseCard className="p-6">
            <Heading3 className="mb-4">Primary Background</Heading3>
            <Paragraph>
              Primary color background for important sections.
            </Paragraph>
          </EnterpriseCard>
          
          <EnterpriseCard className="p-6">
            <Heading3 className="mb-4">Custom Background</Heading3>
            <Paragraph>
              Custom background for special sections.
            </Paragraph>
          </EnterpriseCard>
        </EnterpriseGrid>
      </PageSection>

      <SectionDivider variant="dots" spacing="md" />

      {/* Conclusion Section */}
      <PageSection background="default" spacing="lg">
        <PageSectionHeader
          title="Ready to Use Enterprise Layout?"
          subtitle="Implement this consistent layout system across all your pages for a professional look and feel"
          align="center"
        />
        
        <div className="flex justify-center mt-8">
          <Button variant="electric" size="lg">
            Get Started
          </Button>
        </div>
      </PageSection>
    </Layout>
  );
}
