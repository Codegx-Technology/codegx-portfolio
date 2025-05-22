import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { PageWrapper, PageSection } from "@/components/layouts/PageWrapper";
import CaseStudyCard from "@/components/CaseStudyCard";
import { Button } from "@/components/ui/button";
import { Head } from "@/components/head";
import { Heading1, Heading2, Heading3, Paragraph } from "@/components/ui/typography";
import { EnterpriseGrid } from "@/components/ui/enterprise-container";
import { EnterpriseCard } from "@/components/ui/enterprise-card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

export default function CaseStudies() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [activeIndustry, setActiveIndustry] = useState("all");

  // Fetch case studies data
  const { data, isLoading, error } = useQuery<CaseStudiesData>({
    queryKey: ["/data/caseStudies.json"],
    staleTime: Infinity,
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Group case studies by industry
  const industries = data?.caseStudies
    ? ["all", ...Array.from(new Set(data.caseStudies.map((cs) => cs.industry)))]
    : ["all"];

  // Filter case studies by industry
  const filteredCaseStudies = data?.caseStudies
    ? activeIndustry === "all"
      ? data.caseStudies
      : data.caseStudies.filter((cs) => cs.industry === activeIndustry)
    : [];

  // Open case study modal
  const openCaseStudy = (caseStudy: CaseStudy) => {
    setSelectedCaseStudy(caseStudy);
  };

  // Close case study modal
  const closeCaseStudy = () => {
    setSelectedCaseStudy(null);
  };

  return (
    <PageWrapper>
      <Head
        title="Case Studies | Astella AI"
        description="Explore our portfolio of successful AI and blockchain projects across various industries."
      />

      <PageSection
        background="pattern"
        spacing="xl"
        className="relative overflow-hidden"
      >
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 relative z-10"
        >
          <Heading1 className="mb-4">Case Studies</Heading1>
          <Paragraph className="text-xl max-w-3xl mx-auto">
            Explore our portfolio of successful projects and discover how we've helped organizations
            across various industries solve complex challenges with innovative technology solutions.
          </Paragraph>
        </motion.div>

          {/* Industry Filter */}
          <div className="mb-10 relative z-10">
            <Tabs
              defaultValue="all"
              value={activeIndustry}
              onValueChange={setActiveIndustry}
              className="w-full"
            >
              <div className="flex justify-center mb-6">
                <EnterpriseCard className="p-1 shadow-md border-primary/20">
                  <TabsList className="bg-transparent border-0 shadow-none">
                    {industries.map((industry) => (
                      <TabsTrigger
                        key={industry}
                        value={industry}
                        className="px-4 py-2 rounded-md data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-200"
                      >
                        {industry === "all" ? "All Industries" : industry}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </EnterpriseCard>
              </div>

              {industries.map((industry) => (
                <TabsContent key={industry} value={industry} className="mt-0">
                  {isLoading ? (
                    <EnterpriseCard className="py-20 text-center border-dashed">
                      <div className="animate-spin w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-6"></div>
                      <Heading3 className="text-xl mb-2">Loading Case Studies</Heading3>
                      <Paragraph className="text-muted-foreground">Please wait while we fetch the latest case studies...</Paragraph>
                    </EnterpriseCard>
                  ) : error ? (
                    <EnterpriseCard className="py-20 text-center border-red-200 dark:border-red-900/30">
                      <div className="w-20 h-20 bg-red-100 dark:bg-red-900/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="fas fa-exclamation-triangle text-3xl"></i>
                      </div>
                      <Heading3 className="text-red-500 mb-3">Error Loading Data</Heading3>
                      <Paragraph className="text-muted-foreground max-w-md mx-auto">
                        We encountered an issue while loading the case studies. Please try again later or contact our support team.
                      </Paragraph>
                    </EnterpriseCard>
                  ) : filteredCaseStudies.length === 0 ? (
                    <EnterpriseCard className="py-20 text-center border-primary/20">
                      <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="fas fa-search text-3xl"></i>
                      </div>
                      <Heading3 className="mb-3">No Results Found</Heading3>
                      <Paragraph className="text-muted-foreground max-w-md mx-auto">
                        No case studies found for this industry. Try selecting a different industry from the filters above.
                      </Paragraph>
                    </EnterpriseCard>
                  ) : (
                    <motion.div
                      variants={{
                        hidden: { opacity: 0 },
                        show: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.1,
                          },
                        },
                      }}
                      initial="hidden"
                      animate="show"
                      className="w-full"
                    >
                      <EnterpriseGrid cols={3} gap="lg">
                        {filteredCaseStudies.map((caseStudy) => (
                          <motion.div
                            key={caseStudy.id}
                            variants={{
                              hidden: { opacity: 0, y: 20 },
                              show: { opacity: 1, y: 0 },
                            }}
                            className="h-full"
                          >
                            <CaseStudyCard
                              {...caseStudy}
                              onClick={() => openCaseStudy(caseStudy)}
                            />
                          </motion.div>
                        ))}
                      </EnterpriseGrid>
                    </motion.div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
      </PageSection>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <Dialog open={!!selectedCaseStudy} onOpenChange={closeCaseStudy}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-primary/90 text-white">{selectedCaseStudy.industry}</Badge>
                  {selectedCaseStudy.year && (
                    <Badge variant="outline">{selectedCaseStudy.year}</Badge>
                  )}
                </div>
                <DialogTitle className="text-2xl font-bold">{selectedCaseStudy.title}</DialogTitle>
                <DialogDescription className="text-lg font-medium text-primary">
                  {selectedCaseStudy.client}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4">
                <EnterpriseCard className="p-0 overflow-hidden mb-6 border-0">
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <img
                      src={selectedCaseStudy.image}
                      alt={selectedCaseStudy.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/800x400?text=Case+Study";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </EnterpriseCard>

                <div className="space-y-6">
                  <div>
                    <Heading3 className="text-xl font-semibold mb-2">Overview</Heading3>
                    <Paragraph className="text-muted-foreground">{selectedCaseStudy.summary}</Paragraph>
                  </div>

                  <div>
                    <Heading3 className="text-xl font-semibold mb-2">Challenge</Heading3>
                    <Paragraph className="text-muted-foreground">{selectedCaseStudy.challenge}</Paragraph>
                  </div>

                  <div>
                    <Heading3 className="text-xl font-semibold mb-2">Solution</Heading3>
                    <Paragraph className="text-muted-foreground">{selectedCaseStudy.solution}</Paragraph>
                  </div>

                  <div>
                    <Heading3 className="text-xl font-semibold mb-2">Impact</Heading3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                      {selectedCaseStudy.impact.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {selectedCaseStudy.testimonial && (
                    <EnterpriseCard className="bg-primary/5 p-6 border border-primary/20">
                      <div className="flex items-start">
                        <div className="text-3xl text-primary mr-3">
                          <i className="fas fa-quote-left"></i>
                        </div>
                        <div>
                          <blockquote className="text-muted-foreground italic mb-4">
                            "{selectedCaseStudy.testimonial.quote}"
                          </blockquote>
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3">
                              <i className="fas fa-user"></i>
                            </div>
                            <div>
                              <div className="font-medium">{selectedCaseStudy.testimonial.author}</div>
                              <div className="text-sm text-muted-foreground">{selectedCaseStudy.testimonial.position}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </EnterpriseCard>
                  )}

                  <EnterpriseCard className="p-6">
                    <Heading3 className="text-xl font-semibold mb-3">Technologies Used</Heading3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCaseStudy.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          <i className="fas fa-code-branch mr-1.5"></i> {tech}
                        </Badge>
                      ))}
                    </div>
                  </EnterpriseCard>
                </div>
              </div>

              <DialogFooter className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button variant="outline" onClick={closeCaseStudy} className="w-full sm:w-auto order-2 sm:order-1">
                  <i className="fas fa-times mr-2"></i> Close
                </Button>
                <Button className="w-full sm:w-auto order-1 sm:order-2">
                  <i className="fas fa-envelope mr-2"></i>
                  Contact Us About This Project
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
