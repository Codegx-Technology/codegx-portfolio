import { useEffect } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import SimpleQuoteForm from "@/components/Forms/SimpleQuoteForm";
import { Toaster } from "sonner";

export default function SimpleQuote() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Toaster position="top-right" />
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold font-inter mb-4">Get a Free AI Quote</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tell us about your project, and we'll provide a custom quote tailored to your specific needs.
              Our team will review your requirements and get back to you within 24 hours.
            </p>
          </motion.div>
          
          {/* Quote Form */}
          <div className="bg-card rounded-lg border border-border p-8 mb-12">
            <SimpleQuoteForm />
          </div>
          
          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <i className="fas fa-shield-alt text-xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">No Obligation</h3>
              <p className="text-muted-foreground">
                Our quotes are free and come with no obligation to proceed.
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <i className="fas fa-clock text-xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Quick Response</h3>
              <p className="text-muted-foreground">
                Receive your custom quote within 24 hours of submission.
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <i className="fas fa-handshake text-xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Tailored Solutions</h3>
              <p className="text-muted-foreground">
                Every quote is customized to your specific business needs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
