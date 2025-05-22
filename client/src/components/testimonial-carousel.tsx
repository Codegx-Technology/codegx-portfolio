import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Linkedin, Quote } from "lucide-react";

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar?: string;
  linkedinUrl?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  interval?: number;
  className?: string;
  variant?: "default" | "minimal" | "cards";
}

export function TestimonialCarousel({
  testimonials,
  autoplay = true,
  interval = 5000,
  className,
  variant = "default",
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Handle autoplay
  useEffect(() => {
    if (autoplay && !isPaused) {
      timerRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, interval);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [autoplay, interval, testimonials.length, isPaused]);

  const handlePrev = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  };

  // Render different variants
  if (variant === "cards") {
    return (
      <div 
        className={cn("relative py-8", className)}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-primary w-6" : "bg-primary/30"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex justify-center">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full max-w-3xl"
              >
                <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
                  <div className="flex items-start gap-4">
                    {testimonials[currentIndex].avatar && (
                      <div className="relative flex-shrink-0">
                        <img
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        {testimonials[currentIndex].linkedinUrl && (
                          <a
                            href={testimonials[currentIndex].linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-1 rounded-full hover:bg-blue-700 transition-colors"
                            aria-label={`${testimonials[currentIndex].name}'s LinkedIn profile`}
                          >
                            <Linkedin size={14} />
                          </a>
                        )}
                      </div>
                    )}
                    <div className="flex-1">
                      <Quote className="h-6 w-6 text-primary/40 mb-2" />
                      <p className="text-lg italic mb-4">{testimonials[currentIndex].quote}</p>
                      <div>
                        <p className="font-semibold">{testimonials[currentIndex].name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            className="rounded-full"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="rounded-full"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  if (variant === "minimal") {
    return (
      <div 
        className={cn("relative py-8", className)}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="max-w-3xl mx-auto">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="text-center"
            >
              <Quote className="h-10 w-10 mx-auto text-primary/40 mb-4" />
              <p className="text-xl md:text-2xl italic mb-6 leading-relaxed">{testimonials[currentIndex].quote}</p>
              <div className="flex items-center justify-center">
                {testimonials[currentIndex].avatar && (
                  <div className="relative mr-3">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {testimonials[currentIndex].linkedinUrl && (
                      <a
                        href={testimonials[currentIndex].linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-1 rounded-full hover:bg-blue-700 transition-colors"
                        aria-label={`${testimonials[currentIndex].name}'s LinkedIn profile`}
                      >
                        <Linkedin size={12} />
                      </a>
                    )}
                  </div>
                )}
                <div>
                  <p className="font-semibold">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-primary" : "bg-primary/30"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div 
      className={cn("relative py-8", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              {testimonials[currentIndex].avatar && (
                <div className="relative flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-background shadow-lg"
                  />
                  {testimonials[currentIndex].linkedinUrl && (
                    <a
                      href={testimonials[currentIndex].linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors shadow-md"
                      aria-label={`${testimonials[currentIndex].name}'s LinkedIn profile`}
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                </div>
              )}
              <div>
                <Quote className="h-8 w-8 text-primary/40 mb-4" />
                <p className="text-xl md:text-2xl italic mb-6 leading-relaxed">{testimonials[currentIndex].quote}</p>
                <div>
                  <p className="font-semibold text-lg">{testimonials[currentIndex].name}</p>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            className="rounded-full"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-primary scale-125" : "bg-primary/30"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="rounded-full"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
