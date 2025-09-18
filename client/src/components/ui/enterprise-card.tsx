import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface EnterpriseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "bordered" | "elevated" | "flat";
  interactive?: boolean;
}

/**
 * Enterprise-grade card component with consistent styling
 */
export function EnterpriseCard({
  className,
  children,
  variant = "default",
  interactive = false,
  ...props
}: EnterpriseCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden",
        {
          "border border-border": variant === "default" || variant === "bordered",
          "shadow-lg border-none": variant === "elevated",
          "bg-muted/50 border-none": variant === "flat",
          "transition-all duration-200 hover:shadow-md": interactive,
          "cursor-pointer": interactive,
        },
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
}

interface EnterpriseCardHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  className?: string;
  children?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

/**
 * Enterprise-grade card header with icon support
 */
export function EnterpriseCardHeader({
  className,
  children,
  title,
  description,
  icon,
  action,
  ...props
}: EnterpriseCardHeaderProps) {
  return (
    <CardHeader
      className={cn(
        "flex flex-row items-start justify-between space-y-0 pb-2",
        className
      )}
      {...props}
    >
      {children ? (
        children
      ) : (
        <>
          <div className="flex items-start space-x-4">
            {icon && (
              <div className="mt-1 flex-shrink-0 text-primary">
                {icon}
              </div>
            )}
            <div>
              {title && (
                <CardTitle className="text-xl font-semibold">{title}</CardTitle>
              )}
              {description && (
                <CardDescription className="mt-1.5">{description}</CardDescription>
              )}
            </div>
          </div>
          {action && <div>{action}</div>}
        </>
      )}
    </CardHeader>
  );
}

interface EnterpriseCardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  padded?: boolean;
}

/**
 * Enterprise-grade card content with consistent padding
 */
export function EnterpriseCardContent({
  className,
  children,
  padded = true,
  ...props
}: EnterpriseCardContentProps) {
  return (
    <CardContent
      className={cn(
        {
          "pt-6": padded,
          "px-0 py-0": !padded,
        },
        className
      )}
      {...props}
    >
      {children}
    </CardContent>
  );
}

interface EnterpriseCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  bordered?: boolean;
}

/**
 * Enterprise-grade card footer with border option
 */
export function EnterpriseCardFooter({
  className,
  children,
  bordered = false,
  ...props
}: EnterpriseCardFooterProps) {
  return (
    <CardFooter
      className={cn(
        "flex items-center pt-4",
        {
          "border-t border-border mt-4": bordered,
        },
        className
      )}
      {...props}
    >
      {children}
    </CardFooter>
  );
}
