import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard, Project } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { projects, ProjectCategory } from "@/lib/data";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filterCategories = [
    { value: "all", label: "All" },
    { value: ProjectCategory.AI, label: "AI & ML" },
    { value: ProjectCategory.BLOCKCHAIN, label: "Blockchain" },
    { value: ProjectCategory.DATA, label: "Data & Analytics" },
    { value: ProjectCategory.WEB, label: "Web Apps" },
    { value: ProjectCategory.MOBILE, label: "Mobile" },
  ];
  
  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );
  
  return (
    <section id="projects" className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-background to-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full text-primary text-xs md:text-sm font-medium mb-3 md:mb-4 border border-primary/20">
            <i className="fas fa-briefcase mr-2"></i>
            Our Work
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-foreground mb-2 md:mb-3">
            Our <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed">Explore our portfolio of innovative solutions that have helped businesses transform and grow.</p>
        </motion.div>
        
        {/* Filter tabs */}
        <motion.div 
          className="flex justify-center flex-wrap gap-2 sm:gap-3 mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filterCategories.map((category) => (
            <Button
              key={category.value}
              variant={activeFilter === category.value ? "default" : "outline"}
              className={`rounded-full shadow-sm px-4 sm:px-6 min-h-[44px] text-sm sm:text-base ${
                activeFilter === category.value 
                  ? "bg-primary text-white shadow-primary/30" 
                  : "bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10"
              }`}
              onClick={() => setActiveFilter(category.value)}
            >
              {category.value === "all" && <i className="fas fa-th-large mr-2"></i>}
              {category.value === ProjectCategory.AI && <i className="fas fa-brain mr-2"></i>}
              {category.value === ProjectCategory.BLOCKCHAIN && <i className="fas fa-link mr-2"></i>}
              {category.value === ProjectCategory.DATA && <i className="fas fa-chart-line mr-2"></i>}
              {category.value === ProjectCategory.WEB && <i className="fas fa-globe mr-2"></i>}
              {category.value === ProjectCategory.MOBILE && <i className="fas fa-mobile-alt mr-2"></i>}
              {category.label}
            </Button>
          ))}
        </motion.div>
        
        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
        
        <div className="text-center mt-12 md:mt-14">
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
