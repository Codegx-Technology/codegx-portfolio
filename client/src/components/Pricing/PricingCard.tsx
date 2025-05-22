import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  priceRange: string;
  description: string;
  features: PricingFeature[];
  ctaLabel: string;
  ctaLink: string;
  popular?: boolean;
  index?: number;
}

export function PricingCard({
  title,
  priceRange,
  description,
  features,
  ctaLabel,
  ctaLink,
  popular = false,
  index = 0
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <div className={`relative h-full rounded-lg overflow-hidden border ${popular ? 'border-primary' : 'border-border'} bg-card shadow-md hover:shadow-xl transition-all duration-300`}>
        {popular && (
          <div className="absolute top-0 inset-x-0">
            <div className="bg-primary text-white text-center text-sm font-medium py-1">
              Most Popular
            </div>
          </div>
        )}
        
        <div className={`p-6 ${popular ? 'pt-10' : ''} flex flex-col h-full`}>
          <div className="mb-6">
            <Badge variant={popular ? "default" : "outline"} className="mb-2">
              {title}
            </Badge>
            <div className="flex items-baseline mb-2">
              <span className="text-3xl font-bold">{priceRange}</span>
            </div>
            <p className="text-muted-foreground">{description}</p>
          </div>
          
          <div className="space-y-4 mb-8 flex-grow">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start">
                <div className={`mr-3 mt-1 ${feature.included ? 'text-primary' : 'text-muted-foreground'}`}>
                  {feature.included ? (
                    <i className="fas fa-check-circle"></i>
                  ) : (
                    <i className="fas fa-times-circle"></i>
                  )}
                </div>
                <span className={feature.included ? '' : 'text-muted-foreground'}>{feature.text}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-auto">
            <Link href={ctaLink}>
              <Button
                variant={popular ? "default" : "outline"}
                className="w-full"
                size="lg"
              >
                {ctaLabel}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default PricingCard;
