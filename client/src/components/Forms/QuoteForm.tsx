import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

// Business types
const businessTypes = [
  { value: "startup", label: "Startup (1-10 employees)" },
  { value: "small", label: "Small Business (11-50 employees)" },
  { value: "medium", label: "Medium Business (51-200 employees)" },
  { value: "large", label: "Large Enterprise (201+ employees)" },
  { value: "nonprofit", label: "Non-profit Organization" },
  { value: "government", label: "Government Agency" },
  { value: "individual", label: "Individual/Freelancer" }
];

// Project goals
const projectGoals = [
  { id: "automate", label: "Automate repetitive tasks" },
  { id: "chatbot", label: "Build an AI chatbot or assistant" },
  { id: "analytics", label: "Implement predictive analytics" },
  { id: "vision", label: "Add computer vision capabilities" },
  { id: "nlp", label: "Natural language processing" },
  { id: "integration", label: "Integrate AI with existing systems" },
  { id: "strategy", label: "Develop an AI strategy" },
  { id: "training", label: "AI training for team members" }
];

// Budget ranges
const budgetRanges = [
  { value: "under10k", label: "Under $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k-100k", label: "$50,000 - $100,000" },
  { value: "over100k", label: "Over $100,000" },
  { value: "flexible", label: "Flexible / Not sure yet" }
];

// Urgency options
const urgencyOptions = [
  { value: "immediate", label: "Immediate (ASAP)" },
  { value: "1month", label: "Within 1 month" },
  { value: "3months", label: "Within 3 months" },
  { value: "6months", label: "Within 6 months" },
  { value: "flexible", label: "Flexible timeline" }
];

// Service recommendations based on goals
const serviceRecommendations: Record<string, string> = {
  automate: "Process Automation",
  chatbot: "AI Chatbots & Assistants",
  analytics: "Predictive Analytics",
  vision: "Computer Vision",
  nlp: "AI Chatbots & Assistants",
  integration: "Process Automation",
  strategy: "AI Strategy & Consulting",
  training: "AI Training & Enablement"
};

// Form schema
const formSchema = z.object({
  // Step 1: Business Type
  businessType: z.string().min(1, "Please select your business type"),

  // Step 2: Project Goals
  projectGoals: z.array(z.string()).min(1, "Please select at least one goal"),

  // Step 3: Budget
  budget: z.string().min(1, "Please select your budget range"),

  // Step 4: Urgency
  urgency: z.string().min(1, "Please select your timeline"),

  // Step 5: Contact Info
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().optional()
});

type FormValues = z.infer<typeof formSchema>;

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessType: "",
      projectGoals: [],
      budget: "",
      urgency: "",
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    }
  });

  const { register, handleSubmit, watch, setValue, formState: { errors, isValid } } = form;

  // Watch form values for validation
  const watchBusinessType = watch("businessType");
  const watchProjectGoals = watch("projectGoals");
  const watchBudget = watch("budget");
  const watchUrgency = watch("urgency");

  // Calculate progress
  const progress = (step / 5) * 100;

  // Handle next step
  const handleNextStep = () => {
    if (step < 5) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  // Handle previous step
  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  // Check if current step is valid
  const isStepValid = () => {
    switch (step) {
      case 1:
        return !!watchBusinessType;
      case 2:
        return watchProjectGoals.length > 0;
      case 3:
        return !!watchBudget;
      case 4:
        return !!watchUrgency;
      case 5:
        return isValid;
      default:
        return false;
    }
  };

  // Handle checkbox change for project goals
  const handleGoalChange = (checked: boolean | "indeterminate", goalId: string) => {
    const currentGoals = watchProjectGoals || [];

    if (checked && !currentGoals.includes(goalId)) {
      setValue("projectGoals", [...currentGoals, goalId], { shouldValidate: true });
    } else if (!checked && currentGoals.includes(goalId)) {
      setValue(
        "projectGoals",
        currentGoals.filter(id => id !== goalId),
        { shouldValidate: true }
      );
    }
  };

  // Get recommended service based on goals
  const getRecommendedService = () => {
    const goals = watchProjectGoals || [];
    if (goals.length === 0) return "AI Strategy & Consulting";

    // Count occurrences of each recommendation
    const recommendationCounts: Record<string, number> = {};
    goals.forEach(goal => {
      const recommendation = serviceRecommendations[goal] || "AI Strategy & Consulting";
      recommendationCounts[recommendation] = (recommendationCounts[recommendation] || 0) + 1;
    });

    // Find the most frequent recommendation
    let maxCount = 0;
    let topRecommendation = "AI Strategy & Consulting";

    Object.entries(recommendationCounts).forEach(([service, count]) => {
      if (count > maxCount) {
        maxCount = count;
        topRecommendation = service;
      }
    });

    return topRecommendation;
  };

  // Get estimated price range based on budget and goals
  const getEstimatedRange = () => {
    const budget = watchBudget;
    const goals = watchProjectGoals?.length || 0;

    // Base ranges
    const ranges = {
      under10k: "5,000 - 10,000",
      "10k-25k": "15,000 - 25,000",
      "25k-50k": "30,000 - 50,000",
      "50k-100k": "60,000 - 100,000",
      over100k: "100,000+",
      flexible: "15,000 - 50,000"
    };

    return ranges[budget as keyof typeof ranges] || "15,000 - 50,000";
  };

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      // Add recommendation data
      const submissionData = {
        ...data,
        recommendedService: getRecommendedService(),
        estimatedRange: getEstimatedRange()
      };

      // Submit to API endpoint
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit quote request');
      }

      // Show success toast
      toast({
        title: "Quote request submitted successfully!",
        description: "We'll be in touch with you shortly.",
        variant: "default",
      });

      // Navigate to thank you page
      setLocation("/quote/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Failed to submit quote request",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto w-full space-y-4 px-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span>Step {step} of 5</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2 rounded-full" />
        </div>

      {/* Step 1: Business Type */}
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-xl sm:text-2xl font-bold">Tell us about your business</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              This helps us understand your specific needs and tailor our solutions accordingly.
            </p>

            <div className="space-y-4">
              <Label htmlFor="businessType">Business Type</Label>
              <Select
                value={watchBusinessType}
                onValueChange={(value) => setValue("businessType", value, { shouldValidate: true })}
              >
                <SelectTrigger id="businessType" className="w-full min-h-[44px] py-3 px-4 rounded-xl focus:outline-none text-sm">
                  <SelectValue placeholder="Select your business type" />
                </SelectTrigger>
                <SelectContent>
                  {businessTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.businessType && (
                <p className="text-sm text-red-500">{errors.businessType.message}</p>
              )}
            </div>
          </motion.div>
        )}

        {/* Step 2: Project Goals */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-xl sm:text-2xl font-bold">What are your project goals?</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              Select all that apply. This helps us recommend the right AI services for your needs.
            </p>

            <div className="space-y-4">
              {projectGoals.map((goal) => (
                <div key={goal.id} className="flex items-start space-x-3 min-h-[44px] py-1">
                  <Checkbox
                    id={goal.id}
                    checked={watchProjectGoals?.includes(goal.id)}
                    onCheckedChange={(checked) => handleGoalChange(checked, goal.id)}
                    className="mt-1 focus:outline-none rounded"
                  />
                  <Label
                    htmlFor={goal.id}
                    className="cursor-pointer text-sm"
                  >
                    {goal.label}
                  </Label>
                </div>
              ))}
              {errors.projectGoals && (
                <p className="text-sm text-red-500">{errors.projectGoals.message}</p>
              )}
            </div>
          </motion.div>
        )}

        {/* Step 3: Budget */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-xl sm:text-2xl font-bold">What's your budget range?</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              This helps us recommend solutions that align with your financial considerations.
            </p>

            <RadioGroup
              value={watchBudget}
              onValueChange={(value) => setValue("budget", value, { shouldValidate: true })}
              className="space-y-3"
            >
              {budgetRanges.map((range) => (
                <div key={range.value} className="flex items-center space-x-3 min-h-[44px] py-1">
                  <RadioGroupItem value={range.value} id={`budget-${range.value}`} className="focus:outline-none" />
                  <Label htmlFor={`budget-${range.value}`} className="cursor-pointer text-sm">
                    {range.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            {errors.budget && (
              <p className="text-sm text-red-500">{errors.budget.message}</p>
            )}
          </motion.div>
        )}

        {/* Step 4: Urgency */}
        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-xl sm:text-2xl font-bold">What's your timeline?</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              Let us know when you're looking to start and complete your project.
            </p>

            <RadioGroup
              value={watchUrgency}
              onValueChange={(value) => setValue("urgency", value, { shouldValidate: true })}
              className="space-y-3"
            >
              {urgencyOptions.map((option) => (
                <div key={option.value} className="flex items-center space-x-3 min-h-[44px] py-1">
                  <RadioGroupItem value={option.value} id={`urgency-${option.value}`} className="focus:outline-none" />
                  <Label htmlFor={`urgency-${option.value}`} className="cursor-pointer text-sm">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            {errors.urgency && (
              <p className="text-sm text-red-500">{errors.urgency.message}</p>
            )}
          </motion.div>
        )}

        {/* Step 5: Contact Info & Summary */}
        {step === 5 && (
          <motion.div
            key="step5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 gap-8">
              {/* Contact Form */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold">Your Contact Information</h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Please provide your details so we can get back to you with a personalized quote.
                </p>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="Your name"
                      className="w-full min-h-[44px] py-3 px-4 rounded-xl text-sm focus:outline-none"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="your.email@example.com"
                      className="w-full min-h-[44px] py-3 px-4 rounded-xl text-sm focus:outline-none"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number (optional)</Label>
                    <Input
                      id="phone"
                      {...register("phone")}
                      placeholder="Your phone number"
                      className="w-full min-h-[44px] py-3 px-4 rounded-xl text-sm focus:outline-none"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Company Name (optional)</Label>
                    <Input
                      id="company"
                      {...register("company")}
                      placeholder="Your company"
                      className="w-full min-h-[44px] py-3 px-4 rounded-xl text-sm focus:outline-none"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Details (optional)</Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Tell us more about your project"
                      rows={4}
                      className="w-full min-h-[100px] py-3 px-4 rounded-xl text-sm focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Quote Summary */}
              <div className="bg-card rounded-xl border border-border p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-4">Your Quote Summary</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">Business Type</h4>
                    <p className="text-sm">
                      {businessTypes.find(t => t.value === watchBusinessType)?.label || "Not specified"}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">Project Goals</h4>
                    <ul className="list-disc pl-5 text-sm">
                      {watchProjectGoals.map(goalId => (
                        <li key={goalId} className="mb-1">
                          {projectGoals.find(g => g.id === goalId)?.label}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">Budget Range</h4>
                    <p className="text-sm">
                      {budgetRanges.find(b => b.value === watchBudget)?.label || "Not specified"}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">Timeline</h4>
                    <p className="text-sm">
                      {urgencyOptions.find(u => u.value === watchUrgency)?.label || "Not specified"}
                    </p>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium text-sm text-muted-foreground">Recommended Service</h4>
                    <p className="font-bold text-primary text-sm">{getRecommendedService()}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">Estimated Price Range</h4>
                    <p className="font-bold text-sm">${getEstimatedRange()}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      This is an estimate based on your inputs. Your final quote may vary based on specific requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mt-6">
        {step > 1 ? (
          <Button
            type="button"
            variant="outline"
            onClick={handlePrevStep}
            className="w-full sm:w-auto min-h-[44px] py-3 px-4 rounded-xl focus:outline-none"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Previous
          </Button>
        ) : (
          <div className="hidden sm:block"></div>
        )}

        {step < 5 ? (
          <Button
            type="button"
            onClick={handleNextStep}
            disabled={!isStepValid()}
            className="w-full sm:w-auto min-h-[44px] py-3 px-4 rounded-xl focus:outline-none"
          >
            Next
            <i className="fas fa-arrow-right ml-2"></i>
          </Button>
        ) : (
          <Button
            type="submit"
            disabled={!isStepValid() || isSubmitting}
            className="w-full sm:w-auto min-h-[44px] py-3 px-6 rounded-xl min-w-[120px] focus:outline-none"
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin mr-2">
                  <i className="fas fa-spinner"></i>
                </span>
                Submitting...
              </>
            ) : (
              <>
                Submit Request
                <i className="fas fa-paper-plane ml-2"></i>
              </>
            )}
          </Button>
        )}
      </div>
    </form>
    </div>
  );
}

export default QuoteForm;
