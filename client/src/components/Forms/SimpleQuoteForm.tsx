"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Progress } from "@/components/ui/progress";

const quoteSchema = z.object({
  businessType: z.string().min(1, "Please enter your business type"),
  goal: z.string().min(1, "Please describe your goal"),
  budget: z.string().min(1, "Please provide your budget"),
  urgency: z.string().min(1, "Please indicate your timeline"),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export function SimpleQuoteForm() {
  const [step, setStep] = useState(1);
  const [, setLocation] = useLocation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  // Calculate progress
  const progress = (step / 3) * 100;

  const onSubmit = async (data: QuoteFormData) => {
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Quote request sent!");
        setLocation("/quote/simple-thank-you");
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit. Please check your connection and try again.");
    }
  };

  // Handle next step
  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  // Handle previous step
  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Check if current step is valid
  const isStepValid = () => {
    switch (step) {
      case 1:
        return !!watch("businessType") && !!watch("goal");
      case 2:
        return !!watch("budget") && !!watch("urgency");
      case 3:
        return !!watch("name") && !!watch("email");
      default:
        return false;
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span>Step {step} of 3</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <AnimatePresence mode="wait">
          {/* Step 1: Business Info */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold">Tell us about your business</h3>
              <div>
                <Input
                  placeholder="Business Type (e.g., Startup, Enterprise)"
                  {...register("businessType")}
                  className={errors.businessType ? "border-red-500" : ""}
                />
                {errors.businessType && (
                  <p className="text-red-500 text-sm mt-1">{errors.businessType.message}</p>
                )}
              </div>

              <div>
                <Textarea
                  placeholder="What's your goal with AI? (e.g., Automate customer support, Analyze data)"
                  {...register("goal")}
                  className={errors.goal ? "border-red-500" : ""}
                  rows={4}
                />
                {errors.goal && (
                  <p className="text-red-500 text-sm mt-1">{errors.goal.message}</p>
                )}
              </div>

              <div className="flex justify-end">
                <Button
                  type="button"
                  onClick={handleNextStep}
                  disabled={!isStepValid()}
                >
                  Next
                  <i className="fas fa-arrow-right ml-2"></i>
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Project Details */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold">Project Details</h3>
              <div>
                <Input
                  placeholder="Budget Range (e.g., $5k-$15k, $15k-$50k)"
                  {...register("budget")}
                  className={errors.budget ? "border-red-500" : ""}
                />
                {errors.budget && (
                  <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
                )}
              </div>

              <div>
                <Input
                  placeholder="Timeline (e.g., ASAP, 1 month, Q3 2023)"
                  {...register("urgency")}
                  className={errors.urgency ? "border-red-500" : ""}
                />
                {errors.urgency && (
                  <p className="text-red-500 text-sm mt-1">{errors.urgency.message}</p>
                )}
              </div>

              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrevStep}
                >
                  <i className="fas fa-arrow-left mr-2"></i>
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={handleNextStep}
                  disabled={!isStepValid()}
                >
                  Next
                  <i className="fas fa-arrow-right ml-2"></i>
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Contact Info */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold">Your Contact Information</h3>
              <div>
                <Input
                  placeholder="Your Name"
                  {...register("name")}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Input
                  placeholder="Email"
                  type="email"
                  {...register("email")}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrevStep}
                >
                  <i className="fas fa-arrow-left mr-2"></i>
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting || !isStepValid()}
                  className="min-w-[120px]"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">
                        <i className="fas fa-spinner"></i>
                      </span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Get My Quote
                      <i className="fas fa-paper-plane ml-2"></i>
                    </>
                  )}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}

export default SimpleQuoteForm;
