import { useEffect } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getIcon } from "@/lib/iconMap";

interface ServiceExample {
  title: string;
  description: string;
  image: string;
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
          <Link href="/services">
            <Button>
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Services
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="py-10 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <IconComponent className="w-8 h-8" />
              </div>
              <div>
                <div className="flex gap-2 mb-2">
                  {service.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">{service.title}</h1>
              </div>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl">
              {service.shortDescription}
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              {/* What It Is Section */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">What It Is</h2>
                <p className="text-muted-foreground mb-6">{service.fullDescription}</p>
                
                <h3 className="text-xl font-semibold mb-3">Key Benefits</h3>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2 mt-1"><i className="fas fa-check-circle"></i></span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-xl font-semibold mb-3">Technologies We Use</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </section>
              
              {/* Use Cases Section */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.useCases.map((useCase, index) => (
                    <div key={index} className="bg-card rounded-lg p-6 border border-border">
                      <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                      <p className="text-muted-foreground">{useCase.description}</p>
                    </div>
                  ))}
                </div>
              </section>
              
              {/* How We Work Section */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">How We Work</h2>
                <div className="relative pl-8 border-l border-border">
                  {service.process.map((step, index) => (
                    <div key={index} className="mb-8 relative">
                      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center -translate-x-[calc(50%+4px)]">
                        <div className="w-4 h-4 rounded-full bg-primary"></div>
                      </div>
                      <div className="pl-4">
                        <p className="text-lg">{step}</p>
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
              <div className="sticky top-24">
                <div className="bg-card rounded-lg border border-border p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4">{service.cta}</h3>
                  <p className="text-muted-foreground mb-6">
                    Ready to explore how {service.title} can benefit your organization? Let's discuss your specific needs.
                  </p>
                  <Link href="/contact">
                    <Button className="w-full">
                      <i className="fas fa-calendar-check mr-2"></i>
                      Schedule a Consultation
                    </Button>
                  </Link>
                </div>
                
                {/* Technologies Card */}
                <div className="bg-card rounded-lg border border-border p-6">
                  <h3 className="text-lg font-bold mb-4">Our Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline">
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
              className="mb-16"
            >
              <h2 className="text-2xl font-bold mb-8">Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {service.examples.map((example, index) => (
                  <div key={index} className="bg-card rounded-lg overflow-hidden border border-border">
                    <div className="h-48 bg-primary/10 flex items-center justify-center">
                      <img
                        src={example.image}
                        alt={example.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x200?text=Case+Study";
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2">{example.title}</h3>
                      <p className="text-muted-foreground">{example.description}</p>
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
              className="mb-16"
            >
              <h2 className="text-2xl font-bold mb-8">Related Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedServices.map((relatedService) => {
                  const RelatedIcon = getIcon(relatedService.icon);
                  return (
                    <Link key={relatedService.slug} href={`/services/${relatedService.slug}`}>
                      <a className="block group">
                        <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 hover:shadow-md transition-all h-full">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                              <RelatedIcon className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold">{relatedService.title}</h3>
                          </div>
                          <p className="text-muted-foreground text-sm mb-4">{relatedService.shortDescription}</p>
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
            <Link href="/services">
              <Button variant="outline">
                <i className="fas fa-arrow-left mr-2"></i>
                Back to All Services
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
