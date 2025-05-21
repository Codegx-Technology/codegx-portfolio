import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard, Project } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filterCategories = [
    { value: "all", label: "All" },
    { value: "ai", label: "AI & ML" },
    { value: "blockchain", label: "Blockchain" },
    { value: "data", label: "Smart City" },
  ];
  
  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );
  
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background to-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold font-inter bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent inline-block">
            Enterprise Solutions
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mt-2"></div>
          <p className="mt-4 text-lg opacity-80">Landmark projects delivering measurable business impact</p>
        </motion.div>
        
        {/* Filter tabs */}
        <motion.div 
          className="flex justify-center flex-wrap gap-3 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filterCategories.map((category) => (
            <Button
              key={category.value}
              variant={activeFilter === category.value ? "default" : "outline"}
              className={`rounded-full shadow-sm px-6 ${
                activeFilter === category.value 
                  ? "bg-primary text-white shadow-primary/30" 
                  : "bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10"
              }`}
              onClick={() => setActiveFilter(category.value)}
            >
              {category.value === "all" && <i className="fas fa-th-large mr-2"></i>}
              {category.value === "ai" && <i className="fas fa-brain mr-2"></i>}
              {category.value === "blockchain" && <i className="fas fa-link mr-2"></i>}
              {category.value === "data" && <i className="fas fa-city mr-2"></i>}
              {category.label}
            </Button>
          ))}
        </motion.div>
        
        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <ProjectCard 
                project={project}
                isVisible={activeFilter === "all" || project.category === activeFilter}
              />
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/10 rounded-full px-8 py-6 shadow-md hover:shadow-lg transition-all"
          >
            View Full Case Studies <i className="fas fa-arrow-right ml-2"></i>
          </Button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
}
