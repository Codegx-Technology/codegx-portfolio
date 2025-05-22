import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Layout } from "@/components/layout";
import ServiceCard from "@/components/Services/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface Service {
  id: string;
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
}

interface ServicesData {
  services: Service[];
}

export default function Services() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  
  // Fetch services data
  const { data, isLoading, error } = useQuery<ServicesData>({
    queryKey: ["/data/services.json"],
    staleTime: Infinity,
  });
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Get all unique tags
  const allTags = data?.services
    ? Array.from(new Set(data.services.flatMap(service => service.tags)))
    : [];
  
  // Filter services by search query and tag
  const filteredServices = data?.services
    ? data.services.filter(service => {
        const matchesSearch = searchQuery === "" || 
          service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        
        const matchesTag = activeTag === null || service.tags.includes(activeTag);
        
        return matchesSearch && matchesTag;
      })
    : [];

  return (
    <Layout>
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold font-inter mb-4">Transform Your Industry with Practical AI</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver AI solutions that solve real business problems and create measurable impact.
              Explore our services to see how we can help your organization thrive in the AI era.
            </p>
          </motion.div>
          
          {/* Search and Filter */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <Button
                variant={activeTag === null ? "default" : "outline"}
                onClick={() => setActiveTag(null)}
                className="whitespace-nowrap"
              >
                All Services
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <Badge
                  key={tag}
                  variant={activeTag === tag ? "default" : "outline"}
                  className={`cursor-pointer ${activeTag === tag ? 'bg-primary text-white' : 'hover:bg-primary/10'}`}
                  onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Services Grid */}
          {isLoading ? (
            <div className="text-center py-20">
              <div className="animate-spin w-10 h-10 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading services...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-500">Error loading services. Please try again later.</p>
            </div>
          ) : filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No services found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setActiveTag(null);
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  id={service.id}
                  slug={service.slug}
                  title={service.title}
                  icon={service.icon}
                  description={service.shortDescription}
                  tags={service.tags}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          
          {/* Animated stars */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold font-inter mb-6">
              Ready to Bring AI to Life in Your Workflow?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Let's discuss how our AI solutions can address your specific challenges and create measurable impact for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8">
                  <i className="fas fa-calendar-check mr-2"></i>
                  Book a Discovery Call
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  <i className="fas fa-briefcase mr-2"></i>
                  View Our Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
