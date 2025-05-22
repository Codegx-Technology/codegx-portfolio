import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Service options with pricing factors
const serviceOptions = [
  {
    id: "chatbot",
    name: "AI Chatbot & Assistant",
    description: "Intelligent conversational agents for customer service and operations",
    basePrice: 10000,
    icon: "fas fa-comment-dots"
  },
  {
    id: "analytics",
    name: "Predictive Analytics",
    description: "Data-driven forecasting and business intelligence solutions",
    basePrice: 15000,
    icon: "fas fa-chart-line"
  },
  {
    id: "vision",
    name: "Computer Vision",
    description: "Visual recognition and analysis for automation and insights",
    basePrice: 20000,
    icon: "fas fa-eye"
  },
  {
    id: "automation",
    name: "Process Automation",
    description: "Streamline operations with intelligent workflow automation",
    basePrice: 12000,
    icon: "fas fa-cogs"
  },
  {
    id: "strategy",
    name: "AI Strategy & Consulting",
    description: "Expert guidance on AI implementation and roadmap development",
    basePrice: 25000,
    icon: "fas fa-lightbulb"
  }
];

// Complexity options
const complexityOptions = [
  { id: "basic", name: "Basic", multiplier: 1.0, description: "Standard implementation with minimal customization" },
  { id: "medium", name: "Medium", multiplier: 1.5, description: "Moderate customization and integration requirements" },
  { id: "complex", name: "Complex", multiplier: 2.0, description: "Extensive customization, multiple integrations, and advanced features" }
];

// Timeline options
const timelineOptions = [
  { id: "standard", name: "Standard (3-4 months)", multiplier: 1.0 },
  { id: "accelerated", name: "Accelerated (1-2 months)", multiplier: 1.3 },
  { id: "extended", name: "Extended (6+ months)", multiplier: 0.9 }
];

// Add-on options
const addonOptions = [
  { id: "training", name: "Team Training & Enablement", price: 5000, description: "Comprehensive training for your team to effectively use and manage the AI solution" },
  { id: "dashboard", name: "Custom Analytics Dashboard", price: 7500, description: "Tailored dashboard for monitoring and analyzing AI performance metrics" },
  { id: "integration", name: "Additional System Integration", price: 8000, description: "Connect your AI solution with additional existing systems" },
  { id: "support", name: "Premium Support Package", price: 10000, description: "Enhanced support with faster response times and dedicated support manager" }
];

export default function QuoteBuilder() {
  // State for each step
  const [activeStep, setActiveStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [complexity, setComplexity] = useState<string>("medium");
  const [timeline, setTimeline] = useState<string>("standard");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  // Calculate quote
  const calculateQuote = () => {
    // Base price from selected services
    const servicesTotal = selectedServices.reduce((total, serviceId) => {
      const service = serviceOptions.find(s => s.id === serviceId);
      return total + (service?.basePrice || 0);
    }, 0);

    // Apply complexity multiplier
    const complexityMultiplier = complexityOptions.find(c => c.id === complexity)?.multiplier || 1;

    // Apply timeline multiplier
    const timelineMultiplier = timelineOptions.find(t => t.id === timeline)?.multiplier || 1;

    // Add-ons total
    const addonsTotal = selectedAddons.reduce((total, addonId) => {
      const addon = addonOptions.find(a => a.id === addonId);
      return total + (addon?.price || 0);
    }, 0);

    // Calculate final price
    const baseWithMultipliers = servicesTotal * complexityMultiplier * timelineMultiplier;
    const totalEstimate = baseWithMultipliers + addonsTotal;

    // Create price range (±15%)
    const lowerEstimate = Math.round(totalEstimate * 0.85 / 1000) * 1000;
    const upperEstimate = Math.round(totalEstimate * 1.15 / 1000) * 1000;

    return {
      servicesTotal,
      complexityMultiplier,
      timelineMultiplier,
      addonsTotal,
      totalEstimate,
      lowerEstimate,
      upperEstimate
    };
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Calculate quote results
  const quoteResults = calculateQuote();

  // Calculate progress
  const progress = (activeStep / 5) * 100;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle next step
  const handleNextStep = () => {
    if (activeStep < 5) {
      setActiveStep(activeStep + 1);
      window.scrollTo(0, 0);
    }
  };

  // Handle previous step
  const handlePrevStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
      window.scrollTo(0, 0);
    }
  };

  // Check if current step is valid
  const isStepValid = () => {
    switch (activeStep) {
      case 1:
        return selectedServices.length > 0;
      case 2:
        return complexity !== "";
      case 3:
        return timeline !== "";
      case 4:
        return true; // Add-ons are optional
      case 5:
        return contactInfo.name !== "" && contactInfo.email !== "";
      default:
        return false;
    }
  };

  // Handle service selection
  const toggleService = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  // Handle addon selection
  const toggleAddon = (addonId: string) => {
    setSelectedAddons(prev =>
      prev.includes(addonId)
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    );
  };

  // Handle contact info changes
  const handleContactInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Layout>
      <section className="py-20 bg-white dark:bg-[#121212]">
        {/* Hero Section */}
        <div className="relative py-20 overflow-hidden bg-gradient-to-br from-[#2c1a22] via-[#3d2128] to-[#2c1a22] dark:from-[#1f1a2c] dark:via-[#2a1f3d] dark:to-[#1f1a2c] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 mb-16">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 z-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 20 H40 M20 0 V40" stroke="currentColor" strokeWidth="0.5" fill="none" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>

          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center px-4 py-1.5 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 rounded-full text-[#c8a951] dark:text-[#9f7b42] text-sm font-medium mb-4 border border-[#c8a951]/20 dark:border-[#9f7b42]/20"
              >
                <span className="flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#c8a951] dark:bg-[#9f7b42] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8a951] dark:bg-[#9f7b42]"></span>
                </span>
                Custom Solutions
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 text-white">
                Interactive <span className="text-[#c8a951] dark:text-[#9f7b42]">Quote Builder</span>
              </h1>

              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Build a custom quote for your AI project in just a few steps.
                Get an instant estimate based on your specific requirements.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c8a951]/5 dark:bg-[#9f7b42]/5 rounded-full translate-x-1/3 -translate-y-1/3 z-0"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c8a951]/5 dark:bg-[#9f7b42]/5 rounded-full -translate-x-1/3 translate-y-1/3 z-0"></div>

          {/* Progress Bar */}
          <div className="mb-8 relative z-10">
            <div className="flex justify-between text-sm mb-2 text-[#2c1a22] dark:text-white">
              <span className="font-medium">Step {activeStep} of 5</span>
              <span className="font-medium">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2 bg-gray-100 dark:bg-[#2c1a22]/50">
              <div className="h-full bg-[#c8a951] dark:bg-[#9f7b42] rounded-full" style={{ width: `${progress}%` }} />
            </Progress>
          </div>

          {/* Quote Builder Steps */}
          <div className="bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg border border-gray-100 dark:border-[#2c1a22]/50 p-8 mb-8 relative z-10">
            {/* Step 1: Select Services */}
            {activeStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-6">1. Select AI Services</h2>
                <p className="text-muted-foreground mb-6">
                  Choose one or more AI services you're interested in implementing.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {serviceOptions.map(service => (
                    <div
                      key={service.id}
                      className={`p-4 rounded-lg border cursor-pointer transition-all ${
                        selectedServices.includes(service.id)
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => toggleService(service.id)}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`mt-1 text-xl ${selectedServices.includes(service.id) ? "text-primary" : ""}`}>
                          <i className={service.icon}></i>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <Checkbox
                              checked={selectedServices.includes(service.id)}
                              onCheckedChange={() => toggleService(service.id)}
                              id={`service-${service.id}`}
                            />
                            <Label
                              htmlFor={`service-${service.id}`}
                              className="font-medium cursor-pointer"
                            >
                              {service.name}
                            </Label>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                          <p className="text-sm font-medium mt-1">Starting from {formatCurrency(service.basePrice)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Project Complexity */}
            {activeStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-6">2. Project Complexity</h2>
                <p className="text-muted-foreground mb-6">
                  Select the complexity level that best describes your project requirements.
                </p>

                <RadioGroup
                  value={complexity}
                  onValueChange={setComplexity}
                  className="space-y-4"
                >
                  {complexityOptions.map(option => (
                    <div
                      key={option.id}
                      className={`p-4 rounded-lg border cursor-pointer transition-all ${
                        complexity === option.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => setComplexity(option.id)}
                    >
                      <div className="flex items-start gap-3">
                        <RadioGroupItem value={option.id} id={`complexity-${option.id}`} className="mt-1" />
                        <div>
                          <Label
                            htmlFor={`complexity-${option.id}`}
                            className="font-medium cursor-pointer"
                          >
                            {option.name}
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">{option.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </motion.div>
            )}

            {/* Step 3: Timeline */}
            {activeStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-6">3. Project Timeline</h2>
                <p className="text-muted-foreground mb-6">
                  Select your preferred timeline for project completion.
                </p>

                <RadioGroup
                  value={timeline}
                  onValueChange={setTimeline}
                  className="space-y-4"
                >
                  {timelineOptions.map(option => (
                    <div
                      key={option.id}
                      className={`p-4 rounded-lg border cursor-pointer transition-all ${
                        timeline === option.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => setTimeline(option.id)}
                    >
                      <div className="flex items-start gap-3">
                        <RadioGroupItem value={option.id} id={`timeline-${option.id}`} className="mt-1" />
                        <Label
                          htmlFor={`timeline-${option.id}`}
                          className="font-medium cursor-pointer"
                        >
                          {option.name}
                        </Label>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </motion.div>
            )}

            {/* Step 4: Add-ons */}
            {activeStep === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-6">4. Additional Services</h2>
                <p className="text-muted-foreground mb-6">
                  Select any additional services you'd like to include (optional).
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {addonOptions.map(addon => (
                    <div
                      key={addon.id}
                      className={`p-4 rounded-lg border cursor-pointer transition-all ${
                        selectedAddons.includes(addon.id)
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => toggleAddon(addon.id)}
                    >
                      <div className="flex items-start gap-3">
                        <Checkbox
                          checked={selectedAddons.includes(addon.id)}
                          onCheckedChange={() => toggleAddon(addon.id)}
                          id={`addon-${addon.id}`}
                          className="mt-1"
                        />
                        <div>
                          <Label
                            htmlFor={`addon-${addon.id}`}
                            className="font-medium cursor-pointer"
                          >
                            {addon.name}
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">{addon.description}</p>
                          <p className="text-sm font-medium mt-1">+ {formatCurrency(addon.price)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 5: Contact Info & Quote Summary */}
            {activeStep === 5 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-6">5. Your Custom Quote</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Quote Summary */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Quote Summary</CardTitle>
                      <CardDescription>Based on your selections</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="font-medium mb-2">Selected Services:</h3>
                        <ul className="space-y-1 text-sm">
                          {selectedServices.map(serviceId => {
                            const service = serviceOptions.find(s => s.id === serviceId);
                            return service ? (
                              <li key={serviceId} className="flex justify-between">
                                <span>{service.name}</span>
                                <span>{formatCurrency(service.basePrice)}</span>
                              </li>
                            ) : null;
                          })}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">Project Details:</h3>
                        <ul className="space-y-1 text-sm">
                          <li className="flex justify-between">
                            <span>Complexity: {complexityOptions.find(c => c.id === complexity)?.name}</span>
                            <span>x{quoteResults.complexityMultiplier.toFixed(1)}</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Timeline: {timelineOptions.find(t => t.id === timeline)?.name}</span>
                            <span>x{quoteResults.timelineMultiplier.toFixed(1)}</span>
                          </li>
                        </ul>
                      </div>

                      {selectedAddons.length > 0 && (
                        <div>
                          <h3 className="font-medium mb-2">Add-ons:</h3>
                          <ul className="space-y-1 text-sm">
                            {selectedAddons.map(addonId => {
                              const addon = addonOptions.find(a => a.id === addonId);
                              return addon ? (
                                <li key={addonId} className="flex justify-between">
                                  <span>{addon.name}</span>
                                  <span>+{formatCurrency(addon.price)}</span>
                                </li>
                              ) : null;
                            })}
                          </ul>
                        </div>
                      )}

                      <div className="pt-4 border-t">
                        <div className="flex justify-between font-bold">
                          <span>Estimated Total:</span>
                          <span>{formatCurrency(quoteResults.lowerEstimate)} - {formatCurrency(quoteResults.upperEstimate)}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          This is an estimate based on your selections. The final quote may vary based on detailed requirements.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Contact Form */}
                  <div>
                    <h3 className="font-medium mb-4">Your Information</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={contactInfo.name}
                          onChange={handleContactInfoChange}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={contactInfo.email}
                          onChange={handleContactInfoChange}
                          placeholder="Your email"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          value={contactInfo.company}
                          onChange={handleContactInfoChange}
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <Label htmlFor="message">Additional Details</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={contactInfo.message}
                          onChange={handleContactInfoChange}
                          placeholder="Any specific requirements or questions"
                          rows={4}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {activeStep > 1 ? (
                <Button variant="outline" onClick={handlePrevStep}>
                  <i className="fas fa-arrow-left mr-2"></i>
                  Previous
                </Button>
              ) : (
                <div></div>
              )}

              {activeStep < 5 ? (
                <Button
                  onClick={handleNextStep}
                  disabled={!isStepValid()}
                >
                  Next
                  <i className="fas fa-arrow-right ml-2"></i>
                </Button>
              ) : (
                <Link href="/contact">
                  <Button disabled={!isStepValid()}>
                    Request Detailed Quote
                    <i className="fas fa-paper-plane ml-2"></i>
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Additional Information */}
          <div className="text-center relative z-10 mt-12">
            <div className="inline-flex items-center px-4 py-1.5 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 rounded-full text-[#c8a951] dark:text-[#9f7b42] text-sm font-medium mb-4 border border-[#c8a951]/20 dark:border-[#9f7b42]/20">
              Need Assistance?
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Need help building your quote? Our team is ready to assist you with any questions.
            </p>

            <Link href="/contact">
              <Button variant="outline" className="border-[#c8a951]/20 dark:border-[#9f7b42]/20 text-[#c8a951] dark:text-[#9f7b42] hover:bg-[#c8a951]/10 dark:hover:bg-[#9f7b42]/10">
                <i className="fas fa-phone-alt mr-2"></i>
                Contact Sales Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
