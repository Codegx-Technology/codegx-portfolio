import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Layout } from "@/components/layout";
import CaseStudyCard from "@/components/CaseStudyCard";
import { Button } from "@/components/ui/button";
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
    <Layout>
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold font-inter mb-4">Case Studies</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of successful projects and discover how we've helped organizations
              across various industries solve complex challenges with innovative technology solutions.
            </p>
          </motion.div>

          {/* Industry Filter */}
          <div className="mb-10">
            <Tabs
              defaultValue="all"
              value={activeIndustry}
              onValueChange={setActiveIndustry}
              className="w-full"
            >
              <div className="flex justify-center mb-6">
                <TabsList className="bg-background border border-border p-1">
                  {industries.map((industry) => (
                    <TabsTrigger
                      key={industry}
                      value={industry}
                      className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white"
                    >
                      {industry === "all" ? "All Industries" : industry}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {industries.map((industry) => (
                <TabsContent key={industry} value={industry} className="mt-0">
                  {isLoading ? (
                    <div className="text-center py-20">
                      <div className="animate-spin w-10 h-10 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                      <p className="text-muted-foreground">Loading case studies...</p>
                    </div>
                  ) : error ? (
                    <div className="text-center py-20">
                      <p className="text-red-500">Error loading case studies. Please try again later.</p>
                    </div>
                  ) : filteredCaseStudies.length === 0 ? (
                    <div className="text-center py-20">
                      <p className="text-muted-foreground">No case studies found for this industry.</p>
                    </div>
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
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                      {filteredCaseStudies.map((caseStudy) => (
                        <motion.div
                          key={caseStudy.id}
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: { opacity: 1, y: 0 },
                          }}
                        >
                          <CaseStudyCard
                            {...caseStudy}
                            onClick={() => openCaseStudy(caseStudy)}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <Dialog open={!!selectedCaseStudy} onOpenChange={closeCaseStudy}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge>{selectedCaseStudy.industry}</Badge>
                  {selectedCaseStudy.year && (
                    <Badge variant="outline">{selectedCaseStudy.year}</Badge>
                  )}
                </div>
                <DialogTitle className="text-2xl">{selectedCaseStudy.title}</DialogTitle>
                <DialogDescription className="text-lg font-medium text-primary">
                  {selectedCaseStudy.client}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4">
                <div className="relative h-64 md:h-80 mb-6 rounded-lg overflow-hidden">
                  <img
                    src={selectedCaseStudy.image}
                    alt={selectedCaseStudy.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/800x400?text=Case+Study";
                    }}
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Overview</h3>
                    <p className="text-muted-foreground">{selectedCaseStudy.summary}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Challenge</h3>
                    <p className="text-muted-foreground">{selectedCaseStudy.challenge}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Solution</h3>
                    <p className="text-muted-foreground">{selectedCaseStudy.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Impact</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                      {selectedCaseStudy.impact.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {selectedCaseStudy.testimonial && (
                    <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                      <blockquote className="text-muted-foreground italic">
                        "{selectedCaseStudy.testimonial.quote}"
                      </blockquote>
                      <div className="mt-4 font-medium">
                        {selectedCaseStudy.testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {selectedCaseStudy.testimonial.position}
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCaseStudy.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <DialogFooter className="mt-6">
                <Button variant="outline" onClick={closeCaseStudy}>
                  Close
                </Button>
                <Button>
                  <i className="fas fa-envelope mr-2"></i>
                  Contact Us About This Project
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </Layout>
  );
}
