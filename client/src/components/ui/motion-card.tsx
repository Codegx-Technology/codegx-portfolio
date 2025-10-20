import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface MotionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  hoverEffect?: "lift" | "glow" | "border" | "scale" | "none";
  clickEffect?: boolean;
  animateEntrance?: boolean;
  delay?: number;
}

/**
 * Enhanced card component with Framer Motion animations
 */
export function MotionCard({
  className,
  children,
  hoverEffect = "lift",
  clickEffect = false,
  animateEntrance = false,
  delay = 0,
  ...props
}: MotionCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Base card styles
  const cardClasses = cn(
    "overflow-hidden transition-all duration-300",
    hoverEffect === "border" && "border-2 border-transparent hover:border-primary",
    className
  );
  
  // Animation variants
  const variants = {
    initial: animateEntrance ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 },
    animate: { opacity: 1, y: 0 },
    hover: {
      y: hoverEffect === "lift" ? -8 : 0,
      scale: hoverEffect === "scale" ? 1.02 : 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    tap: clickEffect ? { scale: 0.98 } : {}
  };
  
  return (
    <motion.div
      className="relative"
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      variants={variants}
      transition={{ duration: 0.5, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      {hoverEffect === "glow" && (
        <motion.div
          className="absolute inset-0 bg-primary/20 rounded-xl blur-xl -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      <Card className={cardClasses} {...props}>
        {children}
      </Card>
    </motion.div>
  );
}

interface MotionCardHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  className?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  iconClassName?: string;
}

export function MotionCardHeader({
  className,
  title,
  description,
  icon,
  iconClassName,
  children,
  ...props
}: MotionCardHeaderProps) {
  return (
    <CardHeader className={className} {...props}>
      {children || (
        <>
          {icon && (
            <div className={cn("mb-4", iconClassName)}>
              {icon}
            </div>
          )}
          {title && (
            typeof title === "string" ? (
              <CardTitle>{title}</CardTitle>
            ) : (
              title
            )
          )}
          {description && (
            typeof description === "string" ? (
              <CardDescription className="mt-2">{description}</CardDescription>
            ) : (
              description
            )
          )}
        </>
      )}
    </CardHeader>
  );
}

interface MotionCardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export function MotionCardContent({
  className,
  children,
  ...props
}: MotionCardContentProps) {
  return (
    <CardContent className={className} {...props}>
      {children}
    </CardContent>
  );
}

interface MotionCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  bordered?: boolean;
}

export function MotionCardFooter({
  className,
  children,
  bordered = false,
  ...props
}: MotionCardFooterProps) {
  return (
    <CardFooter 
      className={cn(
        bordered && "border-t pt-4 mt-4",
        className
      )} 
      {...props}
    >
      {children}
    </CardFooter>
  );
}

// Feature card with icon
interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  iconClassName?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  className,
  iconClassName,
  ...props
}: FeatureCardProps) {
  return (
    <MotionCard 
      className={cn("h-full", className)} 
      hoverEffect="lift"
      animateEntrance
      {...props}
    >
      <MotionCardHeader>
        <div className={cn("w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4", iconClassName)}>
          {icon}
        </div>
        <CardTitle className="text-lg sm:text-xl">{title}</CardTitle>
        <CardDescription className="mt-2 text-xs sm:text-sm">{description}</CardDescription>
      </MotionCardHeader>
    </MotionCard>
  );
}
