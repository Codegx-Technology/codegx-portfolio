import React from "react";
import { PageWrapper, PageSection, PageHeader, PageDivider } from "@/components/layouts/PageWrapper";
import { CTASection } from "@/components/layouts/CTASection";
import { Testimonials } from "@/components/sections/Testimonials";
import { CaseStudyGrid } from "@/components/ui/CaseStudyCard";
import { Footer } from "@/components/layouts/Footer";
import { Head } from "@/components/head";
import { Heading2, Paragraph } from "@/components/ui/typography";

export default function EnterpriseComponentsDemo() {
  // Sample testimonials
  const testimonials = [
    {
      quote: "Astella revolutionized how we deliver AI-powered services. Their team is brilliant.",
      name: "Elena Park",
      title: "CTO",
      company: "Innovex Solutions",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      quote: "The AI solutions developed by Astella have increased our operational efficiency by 40% in just three months.",
      name: "Michael Chen",
      title: "Director of Operations",
      company: "Global Logistics Inc.",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      quote: "Working with Astella has been transformative. Their expertise in AI and blockchain is unmatched in the industry.",
      name: "Sarah Johnson",
      title: "CEO",
      company: "TechVision Enterprises",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
  ];

  // Sample case studies
  const caseStudies = [
    {
      title: "AI-Powered Supply Chain Optimization",
      description: "Implemented predictive analytics to optimize inventory management and reduce costs by 30%.",
      industry: "Manufacturing",
      logo: "https://via.placeholder.com/120x40?text=ManufactureCo",
      href: "/case-studies/supply-chain",
    },
    {
      title: "Smart City Traffic Management",
      description: "Developed an AI system that reduced traffic congestion by 25% and improved emergency response times.",
      industry: "Public Sector",
      logo: "https://via.placeholder.com/120x40?text=SmartCity",
      href: "/case-studies/smart-city",
    },
    {
      title: "Blockchain-Based Financial Platform",
      description: "Created a secure, transparent platform that reduced transaction costs by 45% and eliminated fraud.",
      industry: "Finance",
      logo: "https://via.placeholder.com/120x40?text=FinTech",
      href: "/case-studies/blockchain-finance",
    },
  ];

  return (
    <>
      <Head
        title="Enterprise Components Demo"
        description="Demonstration of enterprise-grade UI components"
      />
      
      <PageWrapper>
        <PageHeader
          title="Enterprise Components Demo"
          description="Showcase of enterprise-grade UI components for Astella AI"
        />
        
        <PageSection>
          <Heading2 className="mb-6">Call-to-Action Section</Heading2>
          <Paragraph className="mb-8">
            A reusable promo block with headline, subtext, and CTA button. Available in multiple variants.
          </Paragraph>
          
          <div className="space-y-12">
            <div className="border border-border rounded-lg overflow-hidden">
              <CTASection
                title="Ready to unlock AI for your enterprise?"
                description="Request a tailored demo and see how Astella transforms operations."
                buttonText="Request Demo"
                buttonLink="/contact"
                variant="default"
              />
            </div>
            
            <div className="border border-border rounded-lg overflow-hidden">
              <CTASection
                title="Transform your business with AI"
                description="Our solutions are designed to drive real business results and ROI."
                buttonText="Get Started"
                buttonLink="/quote"
                variant="gradient"
              />
            </div>
            
            <div className="border border-border rounded-lg overflow-hidden">
              <CTASection
                title="Ready for the next step?"
                description="Schedule a consultation with our AI experts today."
                buttonText="Book a Call"
                buttonLink="/contact"
                variant="angled"
              />
            </div>
          </div>
        </PageSection>
        
        <PageDivider />
        
        <PageSection>
          <Heading2 className="mb-6">Testimonials Section</Heading2>
          <Paragraph className="mb-8">
            Display client or partner testimonials in elegant cards with a clean, professional design.
          </Paragraph>
          
          <div className="border border-border rounded-lg overflow-hidden p-4">
            <Testimonials
              title="What Our Clients Say"
              testimonials={testimonials}
            />
          </div>
        </PageSection>
        
        <PageDivider />
        
        <PageSection>
          <Heading2 className="mb-6">Case Study Cards</Heading2>
          <Paragraph className="mb-8">
            Highlight enterprise projects and outcomes with these professional case study cards.
          </Paragraph>
          
          <div className="border border-border rounded-lg overflow-hidden p-4">
            <CaseStudyGrid
              title="Featured Case Studies"
              description="Explore how we've helped organizations achieve their business goals with AI and blockchain solutions."
              caseStudies={caseStudies}
            />
          </div>
        </PageSection>
        
        <PageDivider />
        
        <PageSection>
          <Heading2 className="mb-6">Enterprise Footer</Heading2>
          <Paragraph className="mb-8">
            An elegant, comprehensive footer with company information, navigation links, and contact details.
          </Paragraph>
          
          <div className="border border-border rounded-lg overflow-hidden">
            <Footer />
          </div>
        </PageSection>
      </PageWrapper>
    </>
  );
}
