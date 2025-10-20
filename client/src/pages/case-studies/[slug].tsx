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
    queryKey: ["/data/caseStudies.json"],
    staleTime: Infinity,
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
        <PageSection className="py-6 md:py-10 lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6"
          >
            {/* Back Button */}
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-[#c8a951] dark:text-[#9f7b42] hover:opacity-80 transition-opacity text-xs md:text-sm font-medium">
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 md:gap-3">
              <Badge className="bg-[#c8a951]/90 text-[#2c1a22] dark:bg-[#9f7b42]/90 dark:text-[#1f1a2c] text-xs md:text-sm">{caseStudy.industry}</Badge>
              <Badge variant="outline" className="text-xs md:text-sm">{caseStudy.client}</Badge>
              {caseStudy.year && <Badge variant="outline" className="text-xs md:text-sm">{caseStudy.year}</Badge>}
            </div>

            {/* Title and Summary */}
            <div className="space-y-3 md:space-y-4">
              <Heading1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{caseStudy.title}</Heading1>
              <Paragraph className="text-xs md:text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
                {caseStudy.summary}
              </Paragraph>
            </div>

            {/* Featured Image */}
            <div className="rounded-lg md:rounded-xl overflow-hidden shadow-lg md:shadow-2xl mt-6 md:mt-8">
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </PageSection>

        {/* Challenge Section */}
        <PageSection className="py-6 md:py-8 lg:py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6"
          >
            <Heading2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">The Challenge</Heading2>
            <Paragraph className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
              {caseStudy.challenge}
            </Paragraph>
          </motion.div>
        </PageSection>

        {/* Solution Section */}
        <PageSection className="py-6 md:py-8 lg:py-10 bg-slate-50/50 dark:bg-slate-900/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="space-y-4 md:space-y-6">
              <Heading2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Our Solution</Heading2>
              <Paragraph className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
                {caseStudy.solution}
              </Paragraph>
            </div>

            <div className="space-y-3 md:space-y-4">
              <Heading3 className="text-base sm:text-lg md:text-xl">Technologies Used</Heading3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech) => (
                  <Badge key={tech} className="bg-[#c8a951]/10 text-[#c8a951] dark:bg-[#9f7b42]/10 dark:text-[#9f7b42] border border-[#c8a951]/20 dark:border-[#9f7b42]/20 text-xs md:text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </PageSection>

        {/* Impact Section */}
        <PageSection className="py-6 md:py-8 lg:py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8"
          >
            <Heading2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Impact & Results</Heading2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {caseStudy.impact.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-lg bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/50"
                >
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#c8a951] dark:text-[#9f7b42] flex-shrink-0 mt-0.5 md:mt-1" />
                  <Paragraph className="text-xs md:text-sm text-slate-600 dark:text-slate-400">{item}</Paragraph>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </PageSection>

        {/* Testimonial Section */}
        {caseStudy.testimonial && (
          <PageSection className="py-6 md:py-8 lg:py-10 bg-gradient-to-br from-[#c8a951]/5 to-[#9f7b42]/5 dark:from-[#9f7b42]/10 dark:to-[#c8a951]/10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6"
            >
              <Heading2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8">Client Testimonial</Heading2>
              <blockquote className="text-base md:text-lg font-medium italic mb-6 md:mb-8 text-slate-700 dark:text-slate-300 leading-relaxed">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div className="space-y-1 md:space-y-2">
                <p className="font-semibold text-sm md:text-base text-slate-900 dark:text-white">{caseStudy.testimonial.author}</p>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
                  {caseStudy.testimonial.position}, {caseStudy.client}
                </p>
              </div>
            </motion.div>
          </PageSection>
        )}

        {/* CTA Section */}
        <PageSection className="py-6 md:py-8 lg:py-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="space-y-3 md:space-y-4">
              <Heading2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Ready to Transform Your Business?</Heading2>
              <Paragraph className="text-xs md:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how we can help you achieve similar results.
              </Paragraph>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-2 md:pt-4">
              <Link href="/contact">
                <Button size="sm" className="w-full sm:w-auto bg-[#c8a951] hover:bg-[#c8a951]/90 text-[#2c1a22] dark:bg-[#9f7b42] dark:hover:bg-[#9f7b42]/90 dark:text-[#1f1a2c] rounded-full px-6 md:px-8">
                  Get Started
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="sm" variant="outline" className="w-full sm:w-auto rounded-full px-6 md:px-8">
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
