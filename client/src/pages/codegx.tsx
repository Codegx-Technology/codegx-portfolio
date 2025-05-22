import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";

export default function CodegxLanding() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Abstract Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-screen bg-gradient-to-bl from-primary/5 to-transparent transform -skew-x-12"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-6 py-2 rounded-full bg-primary/10 mb-6 backdrop-blur-sm">
              <span className="text-lg font-semibold text-primary">
                Welcome to Codegx Technology
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-inter leading-tight mb-6">
              Innovative <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Technology</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-muted-foreground">
              Empowering businesses with cutting-edge AI, blockchain, and smart city technologies.
              Choose your path to explore our offerings.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
              {/* Personal Portfolio Card */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-card rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-primary/20 to-purple-600/20 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-background flex items-center justify-center">
                    <i className="fas fa-user text-4xl text-primary"></i>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">Personal Portfolio</h2>
                  <p className="text-muted-foreground mb-6">
                    Explore Peter O. Oluoch's personal journey, skills, and individual projects.
                  </p>
                  <Link href="/portfolio">
                    <Button className="w-full">
                      Visit Portfolio <i className="fas fa-arrow-right ml-2"></i>
                    </Button>
                  </Link>
                </div>
              </motion.div>
              
              {/* Astella AI Card */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-card rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-blue-600/20 to-primary/20 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-background flex items-center justify-center">
                    <i className="fas fa-robot text-4xl text-primary"></i>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">Astella AI</h2>
                  <p className="text-muted-foreground mb-6">
                    Discover our AI agency, services, case studies, and thought leadership content.
                  </p>
                  <Link href="/agency">
                    <Button className="w-full">
                      Explore Astella <i className="fas fa-arrow-right ml-2"></i>
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16">
              <Link href="/">
                <Button variant="outline" size="lg" className="rounded-full px-8">
                  <i className="fas fa-home mr-2"></i>
                  View Combined Homepage
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* About Codegx Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold font-inter mb-4">About Codegx Technology</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Codegx Technology is the parent company with two main wings: Peter O. Oluoch's personal portfolio and Astella AI agency.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-background rounded-lg p-6 shadow-md border border-border"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl mb-6 mx-auto">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Our Vision</h3>
              <p className="text-muted-foreground text-center">
                To be a leading technology company that transforms businesses and improves lives through innovative digital solutions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background rounded-lg p-6 shadow-md border border-border"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl mb-6 mx-auto">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Our Mission</h3>
              <p className="text-muted-foreground text-center">
                To deliver high-quality, innovative technology solutions that address real-world challenges and create measurable impact.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-background rounded-lg p-6 shadow-md border border-border"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl mb-6 mx-auto">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Our Values</h3>
              <p className="text-muted-foreground text-center">
                Innovation, integrity, accessibility, and sustainability guide everything we do at Codegx Technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold font-inter mb-6">
              Ready to Start Your Technology Journey?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Whether you're interested in personal consulting or agency services, we're here to help you achieve your technology goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8">
                  <i className="fas fa-envelope mr-2"></i>
                  Contact Us
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  <i className="fas fa-briefcase mr-2"></i>
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
