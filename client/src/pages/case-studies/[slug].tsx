import { useEffect } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { PageWrapper, PageSection } from "@/components/layouts/PageWrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Head } from "@/components/head";
import { Heading1, Heading2, Heading3, Paragraph } from "@/components/ui/typography";
import { ArrowLeft, CheckCircle } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: string[];
  technologies: string[];
  image: string;
  featured?: boolean;
  year?: number;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

interface CaseStudiesData {
  caseStudies: CaseStudy[];
}

export default function CaseStudyDetail() {
  const [, params] = useRoute("/case-studies/:slug");
  const slug = params?.slug;

  const { data, isLoading, error } = useQuery<CaseStudiesData>({
    queryKey: ["/api/case-studies"],
  });

  // Find the case study by slug (convert title to slug format)
  const caseStudy = data?.caseStudies.find(
    (cs) => cs.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === slug
  );

  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (isLoading) {
    return (
      <PageWrapper>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin w-10 h-10 border-4 border-primary border-t-transparent rounded-full"></div>
        </div>
      </PageWrapper>
    );
  }

  if (error || !caseStudy) {
    return (
      <PageWrapper>
        <PageSection>
          <div className="text-center py-20">
            <Heading1 className="mb-4">Case Study Not Found</Heading1>
            <Paragraph className="mb-8">
              The case study you're looking for doesn't exist.
            </Paragraph>
            <Link href="/case-studies">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Case Studies
              </Button>
            </Link>
          </div>
        </PageSection>
      </PageWrapper>
    );
  }

  return (
    <>
      <Head
        title={`${caseStudy.title} - Case Study | Codegx Technologies`}
        description={caseStudy.summary}
      />
      
      <PageWrapper>
        {/* Hero Section */}
        <PageSection className="pt-20 pb-10">
          <Link href="/case-studies">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-3 mb-4">
              <Badge variant="secondary">{caseStudy.industry}</Badge>
              <Badge variant="outline">{caseStudy.client}</Badge>
              {caseStudy.year && <Badge variant="outline">{caseStudy.year}</Badge>}
            </div>

            <Heading1 className="mb-6">{caseStudy.title}</Heading1>
            <Paragraph className="text-xl text-muted-foreground mb-8">
              {caseStudy.summary}
            </Paragraph>

            {/* Featured Image */}
            <div className="rounded-xl overflow-hidden mb-12 shadow-2xl">
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </PageSection>

        {/* Challenge Section */}
        <PageSection className="py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heading2 className="mb-6">The Challenge</Heading2>
            <Paragraph className="text-lg leading-relaxed">
              {caseStudy.challenge}
            </Paragraph>
          </motion.div>
        </PageSection>

        {/* Solution Section */}
        <PageSection className="py-10 bg-muted/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heading2 className="mb-6">Our Solution</Heading2>
            <Paragraph className="text-lg leading-relaxed mb-8">
              {caseStudy.solution}
            </Paragraph>

            <Heading3 className="mb-4">Technologies Used</Heading3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        </PageSection>

        {/* Impact Section */}
        <PageSection className="py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heading2 className="mb-6">Impact & Results</Heading2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.impact.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-6 rounded-lg bg-muted/30"
                >
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <Paragraph className="text-lg">{item}</Paragraph>
                </div>
              ))}
            </div>
          </motion.div>
        </PageSection>

        {/* Testimonial Section */}
        {caseStudy.testimonial && (
          <PageSection className="py-10 bg-primary/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <Heading2 className="mb-8">Client Testimonial</Heading2>
              <blockquote className="text-2xl font-medium italic mb-6">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold">{caseStudy.testimonial.author}</p>
                <p className="text-muted-foreground">
                  {caseStudy.testimonial.position}, {caseStudy.client}
                </p>
              </div>
            </motion.div>
          </PageSection>
        )}

        {/* CTA Section */}
        <PageSection className="py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heading2 className="mb-6">Ready to Transform Your Business?</Heading2>
            <Paragraph className="text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results.
            </Paragraph>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline">
                  View More Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </PageSection>
      </PageWrapper>
    </>
  );
}
