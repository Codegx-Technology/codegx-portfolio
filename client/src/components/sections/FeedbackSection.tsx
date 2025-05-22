import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

interface Feedback {
  id: string;
  name: string;
  comment: string;
  rating: number;
  date: string;
}

interface FeedbackSectionProps {
  title?: string;
  description?: string;
  className?: string;
}

export function FeedbackSection({
  title = "Client Feedback",
  description = "See what our clients have to say about our services.",
  className,
}: FeedbackSectionProps) {
  // Sample feedback data
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([
    {
      id: "1",
      name: "Michael Johnson",
      comment: "Exceptional service and outstanding results. Would highly recommend to anyone looking for top-tier technology solutions.",
      rating: 5,
      date: "2023-10-15"
    },
    {
      id: "2",
      name: "Sarah Williams",
      comment: "The team at Codegx Technologies delivered exactly what we needed. Their expertise in AI is unmatched.",
      rating: 4,
      date: "2023-09-22"
    },
    {
      id: "3",
      name: "David Chen",
      comment: "Professional, responsive, and highly skilled. Our digital transformation project was completed ahead of schedule.",
      rating: 5,
      date: "2023-11-05"
    },
    {
      id: "4",
      name: "Emily Rodriguez",
      comment: "Great communication throughout the project. The final solution exceeded our expectations.",
      rating: 4,
      date: "2023-10-30"
    },
    {
      id: "5",
      name: "Robert Kim",
      comment: "Innovative approach to problem-solving. The custom software they developed has transformed our operations.",
      rating: 5,
      date: "2023-11-12"
    },
    {
      id: "6",
      name: "Jennifer Lee",
      comment: "Extremely satisfied with the results. The ROI on our project has been substantial.",
      rating: 5,
      date: "2023-10-08"
    },
    {
      id: "7",
      name: "Thomas Wilson",
      comment: "Codegx Technologies understood our requirements perfectly and delivered a solution that addressed all our needs.",
      rating: 4,
      date: "2023-09-15"
    },
  ]);
  
  // New feedback form state
  const [newFeedback, setNewFeedback] = useState({
    name: "",
    comment: "",
    rating: 5
  });
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const feedbacksPerPage = 4;
  
  // Calculate total pages
  const totalPages = Math.ceil(feedbacks.length / feedbacksPerPage);
  
  // Get current feedbacks
  const indexOfLastFeedback = currentPage * feedbacksPerPage;
  const indexOfFirstFeedback = indexOfLastFeedback - feedbacksPerPage;
  const currentFeedbacks = feedbacks.slice(indexOfFirstFeedback, indexOfLastFeedback);
  
  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewFeedback({
      ...newFeedback,
      [name]: value
    });
  };
  
  // Handle rating selection
  const handleRatingChange = (rating: number) => {
    setNewFeedback({
      ...newFeedback,
      rating
    });
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create new feedback object
    const feedback: Feedback = {
      id: (feedbacks.length + 1).toString(),
      name: newFeedback.name,
      comment: newFeedback.comment,
      rating: newFeedback.rating,
      date: new Date().toISOString().split('T')[0]
    };
    
    // Add to feedbacks array
    setFeedbacks([feedback, ...feedbacks]);
    
    // Reset form
    setNewFeedback({
      name: "",
      comment: "",
      rating: 5
    });
    
    // Go to first page to show the new feedback
    setCurrentPage(1);
  };
  
  // Generate pagination items
  const paginationItems = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationItems.push(
      <PaginationItem key={i}>
        <PaginationLink 
          isActive={i === currentPage}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </PaginationLink>
      </PaginationItem>
    );
  }
  
  return (
    <section className={cn("py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#1a1a1a]", className)}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4 text-[#2c1a22] dark:text-white"
          >
            {title}
          </motion.h2>
          
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            >
              {description}
            </motion.p>
          )}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Feedback Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="bg-white dark:bg-[#2c1a22] rounded-xl p-6 shadow-lg border border-gray-100 dark:border-[#3d2128]">
              <h3 className="text-xl font-semibold mb-4 text-[#2c1a22] dark:text-white">Share Your Experience</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={newFeedback.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Feedback
                  </label>
                  <Textarea
                    id="comment"
                    name="comment"
                    value={newFeedback.comment}
                    onChange={handleInputChange}
                    required
                    className="w-full min-h-[100px]"
                    placeholder="Share your experience with our services..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Rating
                  </label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => handleRatingChange(rating)}
                        className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                          newFeedback.rating >= rating
                            ? "bg-[#c8a951] dark:bg-[#9f7b42] text-white"
                            : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                        )}
                      >
                        {rating}
                      </button>
                    ))}
                  </div>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-[#c8a951] hover:bg-[#c8a951]/90 text-[#2c1a22] dark:bg-[#9f7b42] dark:hover:bg-[#9f7b42]/90 dark:text-[#1f1a2c]"
                >
                  Submit Feedback
                </Button>
              </form>
            </div>
          </motion.div>
          
          {/* Feedback Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentFeedbacks.map((feedback) => (
                <motion.div
                  key={feedback.id}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white dark:bg-[#2c1a22] rounded-xl p-6 shadow-md border border-gray-100 dark:border-[#3d2128] relative"
                >
                  {/* Rating display */}
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={cn(
                          "w-5 h-5",
                          star <= feedback.rating
                            ? "text-[#c8a951] dark:text-[#9f7b42]"
                            : "text-gray-300 dark:text-gray-600"
                        )}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Truncated comment */}
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {feedback.comment.substring(0, 10)}
                    {feedback.comment.length > 10 && "..."}
                  </p>
                  
                  {/* Name and date */}
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-semibold text-[#2c1a22] dark:text-white">{feedback.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{feedback.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-8">
              <Pagination>
                <PaginationContent>
                  {currentPage > 1 && (
                    <PaginationItem>
                      <PaginationPrevious onClick={() => setCurrentPage(currentPage - 1)} />
                    </PaginationItem>
                  )}
                  
                  {paginationItems}
                  
                  {currentPage < totalPages && (
                    <PaginationItem>
                      <PaginationNext onClick={() => setCurrentPage(currentPage + 1)} />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
