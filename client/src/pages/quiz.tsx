import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import * as LucideIcons from "lucide-react";

interface Service {
  id: string;
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  tags: string[];
}

interface ServicesData {
  services: Service[];
}

interface QuizQuestion {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
    services: string[];
  }[];
}

export default function ServiceQuiz() {
  const [activeTab, setActiveTab] = useState("1");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Service[]>([]);
  const [progress, setProgress] = useState(0);
  
  // Fetch services data
  const { data, isLoading, error } = useQuery<ServicesData>({
    queryKey: ["/data/services.json"],
    staleTime: Infinity,
  });
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Quiz questions
  const questions: QuizQuestion[] = [
    {
      id: "1",
      question: "What is your primary goal with AI implementation?",
      options: [
        { id: "a", text: "Improve customer experience and engagement", services: ["ai-chatbots"] },
        { id: "b", text: "Make better business decisions with data", services: ["predictive-analytics"] },
        { id: "c", text: "Automate visual inspection or analysis", services: ["computer-vision"] },
        { id: "d", text: "Streamline operations and reduce manual work", services: ["process-automation"] },
        { id: "e", text: "Develop a comprehensive AI strategy", services: ["ai-strategy"] }
      ]
    },
    {
      id: "2",
      question: "What is your organization's current level of AI maturity?",
      options: [
        { id: "a", text: "Just starting to explore AI possibilities", services: ["ai-strategy", "ai-training"] },
        { id: "b", text: "Have some basic AI implementations", services: ["ai-strategy", "predictive-analytics"] },
        { id: "c", text: "Several AI projects but no cohesive strategy", services: ["ai-strategy"] },
        { id: "d", text: "Advanced AI implementations seeking optimization", services: ["predictive-analytics", "computer-vision"] },
        { id: "e", text: "Looking to build internal AI capabilities", services: ["ai-training"] }
      ]
    },
    {
      id: "3",
      question: "What industry are you in?",
      options: [
        { id: "a", text: "Retail or E-commerce", services: ["ai-chatbots", "computer-vision", "predictive-analytics"] },
        { id: "b", text: "Manufacturing", services: ["computer-vision", "process-automation", "predictive-analytics"] },
        { id: "c", text: "Financial Services", services: ["predictive-analytics", "process-automation", "ai-chatbots"] },
        { id: "d", text: "Healthcare", services: ["computer-vision", "predictive-analytics", "ai-chatbots"] },
        { id: "e", text: "Other", services: ["ai-strategy", "ai-training"] }
      ]
    },
    {
      id: "4",
      question: "What is your timeline for implementation?",
      options: [
        { id: "a", text: "Immediate (1-3 months)", services: ["ai-chatbots", "process-automation"] },
        { id: "b", text: "Short-term (3-6 months)", services: ["predictive-analytics", "computer-vision"] },
        { id: "c", text: "Medium-term (6-12 months)", services: ["ai-strategy", "ai-training"] },
        { id: "d", text: "Long-term (12+ months)", services: ["ai-strategy"] },
        { id: "e", text: "Not sure yet", services: ["ai-strategy", "ai-training"] }
      ]
    },
    {
      id: "5",
      question: "What is your budget range for AI implementation?",
      options: [
        { id: "a", text: "Small (under $50k)", services: ["ai-chatbots", "ai-training"] },
        { id: "b", text: "Medium ($50k-$150k)", services: ["predictive-analytics", "process-automation"] },
        { id: "c", text: "Large ($150k-$500k)", services: ["computer-vision", "ai-strategy"] },
        { id: "d", text: "Enterprise ($500k+)", services: ["ai-strategy"] },
        { id: "e", text: "Not determined yet", services: ["ai-strategy", "ai-training"] }
      ]
    }
  ];
  
  // Handle answer selection
  const handleAnswerSelect = (questionId: string, answerId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerId }));
    
    // Calculate progress
    const answeredCount = Object.keys({ ...answers, [questionId]: answerId }).length;
    const totalQuestions = questions.length;
    setProgress((answeredCount / totalQuestions) * 100);
    
    // Move to next question if not on last question
    const currentIndex = parseInt(activeTab);
    if (currentIndex < questions.length) {
      setActiveTab((currentIndex + 1).toString());
    }
  };
  
  // Calculate results
  const calculateResults = () => {
    if (!data?.services) return;
    
    // Count service recommendations based on answers
    const serviceCounts: Record<string, number> = {};
    
    Object.entries(answers).forEach(([questionId, answerId]) => {
      const question = questions.find(q => q.id === questionId);
      const option = question?.options.find(o => o.id === answerId);
      
      option?.services.forEach(serviceId => {
        serviceCounts[serviceId] = (serviceCounts[serviceId] || 0) + 1;
      });
    });
    
    // Sort services by recommendation count
    const sortedServiceIds = Object.entries(serviceCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([id]) => id);
    
    // Get top 3 recommended services
    const recommendedServices = sortedServiceIds
      .slice(0, 3)
      .map(id => data.services.find(service => service.id === id))
      .filter(Boolean) as Service[];
    
    setResults(recommendedServices);
    setActiveTab("results");
  };
  
  // Reset quiz
  const resetQuiz = () => {
    setAnswers({});
    setResults([]);
    setProgress(0);
    setActiveTab("1");
  };

  return (
    <Layout>
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold font-inter mb-4">What AI Service Fits Your Business?</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Answer a few questions about your organization and goals to discover which AI services would create the most impact for your business.
            </p>
          </motion.div>
          
          {isLoading ? (
            <div className="text-center py-20">
              <div className="animate-spin w-10 h-10 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading quiz...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-500">Error loading quiz. Please try again later.</p>
            </div>
          ) : (
            <div className="bg-card rounded-lg border border-border p-8">
              {/* Progress Bar */}
              {activeTab !== "results" && (
                <div className="mb-8">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              )}
              
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="hidden">
                  {questions.map(question => (
                    <TabsTrigger key={question.id} value={question.id}>
                      Question {question.id}
                    </TabsTrigger>
                  ))}
                  <TabsTrigger value="results">Results</TabsTrigger>
                </TabsList>
                
                {/* Questions */}
                {questions.map((question, index) => (
                  <TabsContent key={question.id} value={question.id} className="mt-0">
                    <div className="text-sm text-muted-foreground mb-2">Question {index + 1} of {questions.length}</div>
                    <h2 className="text-2xl font-bold mb-6">{question.question}</h2>
                    
                    <RadioGroup
                      value={answers[question.id] || ""}
                      onValueChange={(value) => handleAnswerSelect(question.id, value)}
                      className="space-y-4"
                    >
                      {question.options.map(option => (
                        <div key={option.id} className="flex items-start space-x-2">
                          <RadioGroupItem value={option.id} id={`${question.id}-${option.id}`} className="mt-1" />
                          <Label
                            htmlFor={`${question.id}-${option.id}`}
                            className="cursor-pointer flex-1 bg-background hover:bg-primary/5 p-4 rounded-md transition-colors"
                          >
                            {option.text}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                    
                    <div className="flex justify-between mt-8">
                      {index > 0 && (
                        <Button
                          variant="outline"
                          onClick={() => setActiveTab((index).toString())}
                        >
                          <i className="fas fa-arrow-left mr-2"></i>
                          Previous
                        </Button>
                      )}
                      
                      {index < questions.length - 1 ? (
                        <Button
                          className="ml-auto"
                          disabled={!answers[question.id]}
                          onClick={() => setActiveTab((index + 2).toString())}
                        >
                          Next
                          <i className="fas fa-arrow-right ml-2"></i>
                        </Button>
                      ) : (
                        <Button
                          className="ml-auto"
                          disabled={!answers[question.id]}
                          onClick={calculateResults}
                        >
                          See Results
                          <i className="fas fa-check ml-2"></i>
                        </Button>
                      )}
                    </div>
                  </TabsContent>
                ))}
                
                {/* Results */}
                <TabsContent value="results" className="mt-0">
                  {results.length > 0 ? (
                    <>
                      <h2 className="text-2xl font-bold mb-6">Your Recommended AI Services</h2>
                      <p className="text-muted-foreground mb-8">
                        Based on your answers, here are the AI services that would create the most impact for your business:
                      </p>
                      
                      <div className="space-y-6 mb-8">
                        {results.map((service, index) => {
                          const IconComponent = (service.icon
                            ? LucideIcons[service.icon as keyof typeof LucideIcons] || LucideIcons.Sparkles
                            : LucideIcons.Sparkles) as React.ComponentType<{ className?: string }>;
                            
                          return (
                            <motion.div
                              key={service.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              className="bg-background rounded-lg p-6 border border-border"
                            >
                              <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                  <IconComponent className="w-6 h-6" />
                                </div>
                                <div>
                                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                  <p className="text-muted-foreground mb-4">{service.shortDescription}</p>
                                  <Link href={`/services/${service.slug}`}>
                                    <Button variant="outline" size="sm">
                                      Learn More
                                      <i className="fas fa-arrow-right ml-2"></i>
                                    </Button>
                                  </Link>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                        <Button variant="outline" onClick={resetQuiz}>
                          <i className="fas fa-redo mr-2"></i>
                          Retake Quiz
                        </Button>
                        <Link href="/services">
                          <Button>
                            <i className="fas fa-th-large mr-2"></i>
                            View All Services
                          </Button>
                        </Link>
                        <Link href="/contact">
                          <Button variant="default">
                            <i className="fas fa-calendar-check mr-2"></i>
                            Book a Consultation
                          </Button>
                        </Link>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-10">
                      <p className="text-muted-foreground">No results available. Please complete the quiz.</p>
                      <Button variant="outline" onClick={resetQuiz} className="mt-4">
                        Start Quiz
                      </Button>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
