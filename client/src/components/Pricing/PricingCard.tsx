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
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <div className={`relative h-full rounded-xl overflow-hidden border ${
        popular
          ? 'border-[#c8a951] dark:border-[#9f7b42]'
          : 'border-gray-100 dark:border-[#2c1a22]/50'
        } bg-white dark:bg-[#1a1a1a] shadow-lg hover:shadow-xl transition-all duration-300 group`}
      >
        {popular && (
          <div className="absolute top-0 inset-x-0">
            <div className="bg-[#c8a951] dark:bg-[#9f7b42] text-[#2c1a22] dark:text-[#1f1a2c] text-center text-sm font-medium py-1.5">
              Most Popular
            </div>
          </div>
        )}

        <div className={`p-8 ${popular ? 'pt-12' : ''} flex flex-col h-full`}>
          <div className="mb-8">
            <Badge
              variant={popular ? "default" : "outline"}
              className={`mb-3 px-3 py-1 text-sm font-medium ${
                popular
                  ? 'bg-[#c8a951]/20 text-[#c8a951] dark:bg-[#9f7b42]/20 dark:text-[#9f7b42] border-0'
                  : 'border-[#c8a951]/20 text-[#c8a951] dark:border-[#9f7b42]/20 dark:text-[#9f7b42]'
              }`}
            >
              {title}
            </Badge>

            <div className="flex items-baseline mb-3">
              <span className="text-3xl font-bold text-[#2c1a22] dark:text-white">{priceRange}</span>
            </div>

            <p className="text-gray-700 dark:text-gray-300">{description}</p>
          </div>

          <div className="space-y-4 mb-8 flex-grow">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start">
                <div className={`mr-3 mt-1 ${
                  feature.included
                    ? 'text-[#c8a951] dark:text-[#9f7b42]'
                    : 'text-gray-400 dark:text-gray-600'
                }`}>
                  {feature.included ? (
                    <i className="fas fa-check-circle"></i>
                  ) : (
                    <i className="fas fa-times-circle"></i>
                  )}
                </div>
                <span className={feature.included
                  ? 'text-gray-700 dark:text-gray-300'
                  : 'text-gray-500 dark:text-gray-500'
                }>
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
            <Link href={ctaLink}>
              <Button
                variant={popular ? "default" : "outline"}
                className={`w-full ${
                  popular
                    ? 'bg-[#c8a951] hover:bg-[#c8a951]/90 text-[#2c1a22] dark:bg-[#9f7b42] dark:hover:bg-[#9f7b42]/90 dark:text-[#1f1a2c]'
                    : 'border-[#c8a951]/20 text-[#c8a951] hover:bg-[#c8a951]/10 dark:border-[#9f7b42]/20 dark:text-[#9f7b42] dark:hover:bg-[#9f7b42]/10'
                }`}
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
