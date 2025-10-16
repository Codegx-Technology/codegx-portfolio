import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CodeBlock } from "@/components/code-block";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const pythonCode = `class EnterpriseArchitect:
    def __init__(self):
        self.name = "Peter O. Oluoch"
        self.role = "Enterprise Solutions Architect"
        self.expertise = {
            "AI/ML": ["Deep Learning", "Computer Vision", "NLP"],
            "Blockchain": ["Enterprise Solutions", "DeFi", "Zero-Knowledge Proofs"],
            "Sustainability": ["Smart Cities", "Digital Twins", "IoT Architecture"]
        }
        self.current_project = "EcoSmart City Infrastructure"

    def design_enterprise_solution(self, business_challenge):
        architecture = self.analyze_requirements(business_challenge)
        technology_stack = self.select_optimal_technologies(architecture)
        implementation = self.architect_scalable_solution(technology_stack)
        return measure_business_impact(implementation)

    def deliver_sustainable_city(self):
        """Building a highly sustainable smart city with emerging technologies"""
        digital_twin = create_city_digital_twin()
        smart_grid = implement_renewable_energy_system()
        ai_systems = deploy_predictive_urban_planning()
        return integrate_systems([digital_twin, smart_grid, ai_systems])

architect = EnterpriseArchitect()
sustainable_city = architect.deliver_sustainable_city()`;

  return (
    <header className="relative min-h-screen flex items-center overflow-hidden">
      {/* Abstract Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-screen bg-gradient-to-bl from-primary/5 to-transparent transform -skew-x-12"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="md:flex md:items-center md:justify-between">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 mb-4 backdrop-blur-sm">
              <span className="text-sm font-semibold text-primary">Currently working on sustainable smart city project</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-inter leading-tight">
              Enterprise <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Solutions</span> Architect
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-relaxed opacity-90">
              Empowering forward-thinking organizations with cutting-edge AI, blockchain, and smart city technologies. Delivering measurable business impact through innovative digital solutions.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/30 rounded-full px-8 min-h-[48px] w-full sm:w-auto"
              >
                <i className="fas fa-briefcase mr-2"></i>Enterprise Solutions
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-primary text-primary hover:bg-primary/10 rounded-full px-8 min-h-[48px] w-full sm:w-auto"
              >
                <i className="fas fa-handshake mr-2"></i>Partnerships
              </Button>
            </div>
            <div className="mt-8 sm:mt-10 flex gap-4 sm:gap-5">
              <a href="https://github.com" className="min-w-[44px] min-h-[44px] w-11 h-11 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary/10 text-gray-400 hover:text-primary transition" aria-label="GitHub" target="_blank" rel="noreferrer">
                <i className="fab fa-github text-lg"></i>
              </a>
              <a href="https://linkedin.com" className="min-w-[44px] min-h-[44px] w-11 h-11 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary/10 text-gray-400 hover:text-primary transition" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
              <a href="https://twitter.com" className="min-w-[44px] min-h-[44px] w-11 h-11 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary/10 text-gray-400 hover:text-primary transition" aria-label="Twitter" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a href="https://medium.com" className="min-w-[44px] min-h-[44px] w-11 h-11 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary/10 text-gray-400 hover:text-primary transition" aria-label="Medium" target="_blank" rel="noreferrer">
                <i className="fab fa-medium-m text-lg"></i>
              </a>
            </div>
          </motion.div>

          <div className="hidden md:block md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <CodeBlock
                code={pythonCode}
                language="python"
                filename="smart_city.py"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}
