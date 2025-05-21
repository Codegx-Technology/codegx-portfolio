import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function CallToAction() {
  return (
    <section id="cta" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-6">
            Ready to Build Something{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Remarkable
            </span>
            ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Whether you need a personal consultation or enterprise-level solutions, 
            I'm here to help transform your ideas into reality with cutting-edge technology.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/30 rounded-full px-8"
              onClick={() => window.location.href = "#contact"}
            >
              <i className="fas fa-envelope mr-2"></i>Contact Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 rounded-full px-8"
              onClick={() => window.location.href = "/agency"}
            >
              <i className="fas fa-building mr-2"></i>Hire Astella
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="hover:bg-card rounded-full px-8"
              onClick={() => window.location.href = "/agency/projects"}
            >
              <i className="fas fa-briefcase mr-2"></i>See Case Studies
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
          >
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="h-12 w-px bg-border hidden md:block"></div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="h-12 w-px bg-border hidden md:block"></div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default CallToAction;
