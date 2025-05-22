import { motion } from "framer-motion";
import { ProgressBar } from "@/components/progress-bar";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";

export function Skills() {
  const aiMlTechnologies = [
    {
      icon: "fas fa-brain",
      title: "Deep Learning",
      description: "Neural networks & model optimization"
    },
    {
      icon: "fas fa-eye",
      title: "Computer Vision",
      description: "Object detection & image analysis"
    },
    {
      icon: "fas fa-comments",
      title: "NLP",
      description: "Text analysis & language models"
    },
    {
      icon: "fas fa-robot",
      title: "Reinforcement Learning",
      description: "Autonomous agents & optimization"
    }
  ];

  const blockchainTechnologies = [
    {
      icon: "fas fa-building",
      title: "Enterprise Blockchain",
      description: "Solutions for industry leaders"
    },
    {
      icon: "fas fa-user-secret",
      title: "Zero-Knowledge Proofs",
      description: "Privacy-preserving computation"
    },
    {
      icon: "fas fa-coins",
      title: "DeFi Architecture",
      description: "Financial protocol design"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Quantum Resistance",
      description: "Post-quantum cryptography"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold font-inter bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent inline-block">
              Core Expertise
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mt-2"></div>
            <p className="mt-4 text-lg opacity-80">Advanced technologies powering the future of enterprise solutions</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Column 1: Programming & Databases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1"
          >
            <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/10 h-full">
              <h3 className="text-xl font-semibold font-inter mb-6 flex items-center">
                <i className="fas fa-code text-primary mr-2"></i> Programming Stack
              </h3>

              {skills.programming.map((skill) => (
                <ProgressBar
                  key={skill.name}
                  label={skill.name}
                  percentage={skill.level}
                />
              ))}

              <h3 className="text-xl font-semibold font-inter mt-10 mb-6 flex items-center">
                <i className="fas fa-database text-primary mr-2"></i> Data Storage
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {skills.databases.map((db) => (
                  <div key={db} className="bg-primary/5 p-4 rounded-lg flex items-center shadow-sm hover:shadow-md transition-all hover:bg-primary/10">
                    <i className="fas fa-database text-primary text-xl mr-3"></i>
                    <span>{db}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Column 2: AI/ML */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-1"
          >
            <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/10 h-full">
              <h3 className="text-xl font-semibold font-inter mb-6 flex items-center">
                <i className="fas fa-microchip text-primary mr-2"></i> AI & Machine Learning
              </h3>

              <div className="grid grid-cols-1 gap-4 mb-10">
                {aiMlTechnologies.map((tech) => (
                  <div key={tech.title} className="bg-primary/5 p-5 rounded-lg shadow-sm hover:shadow-md transition-all hover:bg-primary/10">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <i className={`${tech.icon} text-primary text-xl`}></i>
                    </div>
                    <h4 className="text-lg font-medium mb-1">{tech.title}</h4>
                    <p className="text-sm opacity-70">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Column 3: Blockchain & Emerging Tech */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-1"
          >
            <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/10 h-full">
              <h3 className="text-xl font-semibold font-inter mb-6 flex items-center">
                <i className="fas fa-link text-primary mr-2"></i> Blockchain & DLT
              </h3>

              <div className="grid grid-cols-1 gap-4 mb-10">
                {blockchainTechnologies.map((tech) => (
                  <div key={tech.title} className="bg-primary/5 p-5 rounded-lg shadow-sm hover:shadow-md transition-all hover:bg-primary/10">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <i className={`${tech.icon} text-primary text-xl`}></i>
                    </div>
                    <h4 className="text-lg font-medium mb-1">{tech.title}</h4>
                    <p className="text-sm opacity-70">{tech.description}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold font-inter mt-10 mb-6 flex items-center">
                <i className="fas fa-rocket text-primary mr-2"></i> Emerging Technologies
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills.emerging_tech.map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-primary/10 text-primary px-3 py-1 rounded-full shadow-sm hover:shadow-md transition-all hover:bg-primary/20">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
