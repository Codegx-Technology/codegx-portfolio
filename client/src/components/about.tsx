import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-background to-card/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold font-inter bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent inline-block">
              Executive Profile
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mt-2"></div>
          </motion.div>
        </div>

        <div className="md:flex md:items-center md:space-x-12">
          <motion.div
            className="md:w-1/3 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-xl overflow-hidden shadow-xl bg-background/50 backdrop-blur-sm p-2 border border-primary/10 hover:shadow-primary/10 transition-all">
              <img
                src="https://images.unsplash.com/photo-1596075780750-81249df16d19?auto=format&fit=crop&w=700&q=80"
                alt="Peter O. Oluoch"
                className="rounded-xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                <span className="text-white font-medium">Enterprise Solutions Architect</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold font-inter mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent inline-block">Enterprise Solutions Architect</h3>
            <p className="text-lg mb-6">
              I partner with Fortune 500 companies and innovative organizations to deliver transformative digital solutions that create measurable business impact. Specializing in AI/ML, blockchain, and emerging technologies integration for enterprise applications.
            </p>
            <p className="text-lg mb-6">
              Currently leading a landmark project to build a highly sustainable smart city using cutting-edge technologies including digital twins, AI-driven urban planning, and IoT infrastructure. My solutions have helped clients reduce operational costs by 35% while accelerating innovation cycles.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <i className="fas fa-user-graduate text-primary mr-3 text-xl"></i>
                <div>
                  <h4 className="font-medium">Education</h4>
                  <p className="text-muted-foreground">MSc in Computer Science</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="fas fa-briefcase text-primary mr-3 text-xl"></i>
                <div>
                  <h4 className="font-medium">Experience</h4>
                  <p className="text-muted-foreground">5+ Years</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-primary mr-3 text-xl"></i>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">New York, USA</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="fas fa-language text-primary mr-3 text-xl"></i>
                <div>
                  <h4 className="font-medium">Languages</h4>
                  <p className="text-muted-foreground">English, Spanish</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/50">
                <i className="fas fa-download mr-2"></i> Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
