import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar?: string;
}

interface TestimonialsProps {
  title?: string;
  testimonials: Testimonial[];
  className?: string;
}

/**
 * Testimonials section to display client or partner testimonials in elegant cards
 */
export function Testimonials({
  title = "What Our Clients Say",
  testimonials,
  className,
}: TestimonialsProps) {
  // Default testimonials if none provided
  const defaultTestimonials: Testimonial[] = [
    {
      quote: "Astella revolutionized how we deliver AI-powered services. Their team is brilliant.",
      name: "Elena Park",
      title: "CTO",
      company: "Innovex Solutions",
      avatar: "/avatars/client1.jpg",
    },
    {
      quote: "The AI solutions developed by Astella have increased our operational efficiency by 40% in just three months.",
      name: "Michael Chen",
      title: "Director of Operations",
      company: "Global Logistics Inc.",
      avatar: "/avatars/client2.jpg",
    },
    {
      quote: "Working with Astella has been transformative. Their expertise in AI and blockchain is unmatched in the industry.",
      name: "Sarah Johnson",
      title: "CEO",
      company: "TechVision Enterprises",
      avatar: "/avatars/client3.jpg",
    },
  ];

  // Use provided testimonials or default ones
  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className={cn("py-24", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {title && (
          <motion.h2
            className="text-3xl sm:text-4xl font-semibold text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
        )}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {displayTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-background border border-border rounded-2xl shadow-sm p-6 space-y-4"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-muted-foreground text-sm italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                {testimonial.avatar ? (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/40x40?text=Client";
                    }}
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="text-sm font-medium">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
