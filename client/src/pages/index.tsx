import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { PageWrapper, PageSection, PageDivider } from "@/components/layouts/PageWrapper";
import { Contact } from "@/components/contact";
import AgencyIntro from "@/components/Agency/AgencyIntro";
import AgencyServices from "@/components/Agency/AgencyServices";
import FeaturedProjects from "@/components/Landing/FeaturedProjects";
import FeaturedCaseStudies from "@/components/Landing/FeaturedCaseStudies";
import CallToAction from "@/components/Landing/CallToAction";
import HomeHero from "@/components/Landing/HomeHero";
import { Heading2, Paragraph } from "@/components/ui/typography";

export default function Home() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrapper className="overflow-hidden" withContainer={false}>
      <AnimatePresence mode="wait">
        {/* Hero Section - Home */}
        <HomeHero />

        {/* Agency Intro Section */}
        <PageSection
          id="agency"
          title={
            <div className="text-center">
              <Heading2 className="font-inter mb-4">Meet Our Agency</Heading2>
              <Paragraph className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Astella AI is the technology wing of Codegx Technology, specializing in cutting-edge solutions for businesses.
              </Paragraph>
            </div>
          }
          withDivider
          dividerVariant="gradient"
        >
          <AgencyIntro />
        </PageSection>

        {/* Featured Projects Section - Combined */}
        <PageSection>
          <FeaturedProjects />
        </PageSection>

        <PageDivider />

        {/* Featured Case Studies Section */}
        <PageSection
          title={
            <div className="text-center">
              <Heading2 className="font-inter mb-4">Featured Case Studies</Heading2>
              <Paragraph className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover how we've helped organizations solve complex challenges with innovative technology solutions.
              </Paragraph>
            </div>
          }
          withDivider
          dividerVariant="gradient"
          dividerPosition="top"
        >
          <FeaturedCaseStudies />
        </PageSection>

        <PageDivider />

        {/* Agency Services Section */}
        <PageSection
          title={
            <div className="text-center">
              <Heading2 className="font-inter mb-4">Our Services</Heading2>
              <Paragraph className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We offer a comprehensive range of technology services to help businesses thrive in the digital age.
              </Paragraph>
            </div>
          }
          withDivider
          dividerVariant="dots"
          dividerColor="primary"
        >
          <AgencyServices />
        </PageSection>

        {/* Call to Action Section */}
        <PageSection>
          <CallToAction />
        </PageSection>

        <PageDivider />

        {/* Contact Section */}
        <PageSection>
          <Contact />
        </PageSection>
      </AnimatePresence>
    </PageWrapper>
  );
}
