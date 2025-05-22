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

const quoteSchema = z.object({
  businessType: z.string().min(1, "Business type is required"),
  goal: z.string().min(1, "Goal is required"),
  budget: z.string().min(1, "Budget is required"),
  urgency: z.string().min(1, "Timeline is required"),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export function SimpleQuoteForm2() {
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

  const onSubmit = async (data: QuoteFormData) => {
    try {
      const response = await fetch("/api/simple-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Quote request sent!");
        setLocation("/quote/simple-thank-you2");
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Something went wrong. Try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit. Please check your connection and try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-xl mx-auto">
      {step === 1 && (
        <div className="space-y-4">
          <div>
            <Input
              placeholder="Business Type"
              {...register("businessType")}
              className={errors.businessType ? "border-red-500" : ""}
            />
            {errors.businessType && (
              <p className="text-red-500 text-sm mt-1">{errors.businessType.message}</p>
            )}
          </div>

          <div>
            <Textarea
              placeholder="What's your goal with AI?"
              {...register("goal")}
              className={errors.goal ? "border-red-500" : ""}
              rows={4}
            />
            {errors.goal && (
              <p className="text-red-500 text-sm mt-1">{errors.goal.message}</p>
            )}
          </div>

          <Button
            type="button"
            onClick={() => setStep(2)}
            disabled={!watch("businessType") || !watch("goal")}
          >
            Next
            <i className="fas fa-arrow-right ml-2"></i>
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div>
            <Input
              placeholder="Budget (e.g. $5k - $15k)"
              {...register("budget")}
              className={errors.budget ? "border-red-500" : ""}
            />
            {errors.budget && (
              <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
            )}
          </div>

          <div>
            <Input
              placeholder="Urgency (e.g. 2 weeks, ASAP)"
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
              onClick={() => setStep(1)}
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Back
            </Button>
            <Button
              type="button"
              onClick={() => setStep(3)}
              disabled={!watch("budget") || !watch("urgency")}
            >
              Next
              <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
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
              onClick={() => setStep(2)}
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Back
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
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
        </div>
      )}
    </form>
  );
}

export default SimpleQuoteForm2;
