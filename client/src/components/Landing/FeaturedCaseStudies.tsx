import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { EnterpriseCard } from "@/components/ui/enterprise-card";
import { EnterpriseGrid } from "@/components/ui/enterprise-container";
import { Heading2, Heading3, Paragraph } from "@/components/ui/typography";

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

export function FeaturedCaseStudies() {
  const { data, isLoading, error } = useQuery<CaseStudiesData>({
    queryKey: ["/data/caseStudies.json"],
    staleTime: Infinity,
  });

  // Filter featured case studies
  const featuredCaseStudies = data?.caseStudies.filter(study => study.featured) || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin w-16 h-16 border-4 border-primary border-t-transparent rounded-full"></div>
        </div>
      ) : error ? (
        <EnterpriseCard className="p-12 text-center">
          <div className="text-red-500 text-5xl mb-4">
            <i className="fas fa-exclamation-circle"></i>
          </div>
          <Heading3 className="mb-2">Error Loading Case Studies</Heading3>
          <Paragraph>Unable to load case studies. Please try again later.</Paragraph>
        </EnterpriseCard>
      ) : featuredCaseStudies.length === 0 ? (
        <EnterpriseCard className="p-12 text-center">
          <div className="text-primary text-5xl mb-4">
            <i className="fas fa-info-circle"></i>
          </div>
          <Heading3 className="mb-2">No Featured Case Studies</Heading3>
          <Paragraph>Check back soon for featured case studies.</Paragraph>
        </EnterpriseCard>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <EnterpriseGrid cols={3} gap="lg">
            {featuredCaseStudies.map((caseStudy) => (
              <motion.div key={caseStudy.id} variants={itemVariants} className="h-full">
                <EnterpriseCard className="h-full overflow-hidden group" interactive>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x200?text=Case+Study";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <Badge className="bg-primary/90 text-white mb-2">{caseStudy.industry}</Badge>
                        <h3 className="text-xl font-bold line-clamp-1">{caseStudy.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="font-medium text-primary mb-2">{caseStudy.client}</div>
                    <Paragraph className="mb-4 line-clamp-3">{caseStudy.summary}</Paragraph>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseStudy.technologies.slice(0, 3).map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {caseStudy.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{caseStudy.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-2">
                      <div className="text-sm">
                        {caseStudy.year && <div className="text-muted-foreground">{caseStudy.year}</div>}
                      </div>
                      <Link href={`/case-studies`}>
                        <Button variant="ghost" size="sm" className="group-hover:bg-primary/10 group-hover:text-primary">
                          View Details <i className="fas fa-arrow-right ml-2"></i>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </EnterpriseCard>
              </motion.div>
            ))}
          </EnterpriseGrid>
        </motion.div>
      )}

      <div className="mt-12 text-center">
        <Button
          onClick={() => window.location.href = "/case-studies"}
          className="rounded-full px-8 py-6 text-lg"
        >
          <i className="fas fa-briefcase mr-2"></i>
          View All Case Studies
        </Button>
      </div>
    </div>
  );
}

export default FeaturedCaseStudies;
