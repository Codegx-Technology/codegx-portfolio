import { useEffect } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getIcon } from "@/lib/iconMap";
import { PageBackNav } from "@/components/ui/page-back-nav";

interface ServiceExample {
  title: string;
  description: string;
  image?: string;
}

interface UseCase {
  title: string;
  description: string;
}

interface Service {
  id: string;
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  useCases: UseCase[];
  process: string[];
  technologies: string[];
  examples: ServiceExample[];
  tags: string[];
  cta: string;
}

interface ServicesData {
  services: Service[];
}

export default function ServiceDetail() {
  // Get slug from URL
  const [match, params] = useRoute("/services/:slug");
  const slug = params?.slug;
  
  // Fetch services data
  const { data, isLoading, error } = useQuery<ServicesData>({
    queryKey: ["/data/services.json"],
    staleTime: Infinity,
  });
  
  // Find the current service
  const service = data?.services.find(service => service.slug === slug);
  
  // Get related services (services with at least one matching tag, excluding current service)
  const relatedServices = data?.services
    .filter(s => s.slug !== slug && s.tags.some(tag => service?.tags.includes(tag)))
    .slice(0, 3) || [];
  
  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  // Get the icon component from optimized icon map
  const IconComponent = service?.icon ? getIcon(service.icon) : getIcon("Sparkles");

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin w-10 h-10 border-4 border-primary border-t-transparent rounded-full"></div>
        </div>
      </Layout>
    );
  }

  if (error || !service) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The service you're looking for doesn't exist or has been removed.
          </p>
          <PageBackNav fallbackHref="/services" label="Back to Services" />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="bg-background py-6 sm:py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageBackNav fallbackHref="/services" label="Back to Services" className="mb-6 md:mb-8" />

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 md:mb-14"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary sm:h-16 sm:w-16">
                <IconComponent className="h-7 w-7 sm:h-8 sm:w-8" />
              </div>
              <div className="min-w-0">
                <div className="mb-3 flex flex-wrap gap-2">
                  {service.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="max-w-full whitespace-normal text-xs leading-tight">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h1 className="max-w-4xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl">
                  {service.title}
                </h1>
              </div>
            </div>
            <p className="mt-5 max-w-4xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
              {service.shortDescription}
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="mb-12 grid grid-cols-1 gap-8 lg:mb-16 lg:grid-cols-3 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              {/* What It Is Section */}
              <section className="mb-10 md:mb-12">
                <h2 className="mb-4 text-xl font-bold leading-tight md:text-2xl">What It Is</h2>
                <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">{service.fullDescription}</p>
                
                <h3 className="mb-3 text-lg font-semibold leading-tight md:text-xl">Key Benefits</h3>
                <ul className="mb-6 space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm md:text-base">
                      <span className="mt-1 shrink-0 text-primary"><i className="fas fa-check-circle"></i></span>
                      <span className="leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="mb-3 text-lg font-semibold leading-tight md:text-xl">Technologies We Use</h3>
                <div className="mb-6 flex flex-wrap gap-2">
                  {service.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="whitespace-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </section>
              
              {/* Use Cases Section */}
              <section className="mb-10 md:mb-12">
                <h2 className="mb-4 text-xl font-bold leading-tight md:text-2xl">Use Cases</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                  {service.useCases.map((useCase, index) => (
                    <div key={index} className="rounded-lg border border-border bg-card p-5 md:p-6">
                      <h3 className="mb-2 text-base font-semibold leading-tight md:text-lg">{useCase.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">{useCase.description}</p>
                    </div>
                  ))}
                </div>
              </section>
              
              {/* How We Work Section */}
              <section className="mb-10 md:mb-12">
                <h2 className="mb-4 text-xl font-bold leading-tight md:text-2xl">How We Work</h2>
                <div className="relative pl-8 border-l border-border">
                  {service.process.map((step, index) => (
                    <div key={index} className="mb-8 relative">
                      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center -translate-x-[calc(50%+4px)]">
                        <div className="w-4 h-4 rounded-full bg-primary"></div>
                      </div>
                      <div className="pl-4">
                        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-1"
            >
              {/* CTA Card */}
              <div className="lg:sticky lg:top-24">
                <div className="mb-6 rounded-lg border border-border bg-card p-5 md:mb-8 md:p-6">
                  <h3 className="mb-4 text-lg font-bold leading-tight md:text-xl">{service.cta}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
                    Discuss where this capability fits your operating model, control requirements, and long-term ownership plan.
                  </p>
                  <Link href="/contact">
                    <Button className="w-full">
                      <i className="fas fa-calendar-check mr-2"></i>
                      Schedule a Consultation
                    </Button>
                  </Link>
                </div>
                
                {/* Technologies Card */}
                <div className="rounded-lg border border-border bg-card p-5 md:p-6">
                  <h3 className="mb-4 text-base font-bold leading-tight md:text-lg">Our Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="whitespace-normal">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Examples Section */}
          {service.examples.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-12 md:mb-16"
            >
              <h2 className="mb-6 text-xl font-bold leading-tight md:mb-8 md:text-2xl">Operating Patterns</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:gap-8">
                {service.examples.map((example, index) => (
                  <div key={index} className="rounded-lg border border-border bg-card p-5 md:p-6">
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <span className="text-sm font-semibold">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div>
                      <h3 className="mb-2 text-base font-bold leading-tight md:text-lg">{example.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">{example.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}
          
          {/* Related Services */}
          {relatedServices.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-12 md:mb-16"
            >
              <h2 className="mb-6 text-xl font-bold leading-tight md:mb-8 md:text-2xl">Related Services</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:gap-8">
                {relatedServices.map((relatedService) => {
                  const RelatedIcon = getIcon(relatedService.icon);
                  return (
                    <Link key={relatedService.slug} href={`/services/${relatedService.slug}`}>
                      <a className="block group">
                        <div className="h-full rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-md md:p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                              <RelatedIcon className="w-5 h-5" />
                            </div>
                            <h3 className="text-sm font-bold leading-tight md:text-base">{relatedService.title}</h3>
                          </div>
                          <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{relatedService.shortDescription}</p>
                          <div className="text-primary text-sm font-medium group-hover:underline">
                            Learn more <i className="fas fa-arrow-right ml-1"></i>
                          </div>
                        </div>
                      </a>
                    </Link>
                  );
                })}
              </div>
            </motion.section>
          )}
          
          {/* Back to Services */}
          <div className="text-center">
            <PageBackNav fallbackHref="/services" label="Back to All Services" />
          </div>
        </div>
      </article>
    </Layout>
  );
}
