import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";

interface LayoutProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
  withContainer?: boolean;
}

/**
 * Enterprise-grade layout component with consistent styling
 */
export function Layout({
  children,
  className = "",
  containerClassName,
  fullWidth = false,
  withContainer = true
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "flex-grow pt-safe pb-safe",
          className
        )}
      >
        {withContainer ? (
          <div className={cn(
            "px-safe mx-auto px-4 sm:px-6 lg:px-8 py-20",
            !fullWidth && "max-w-7xl",
            containerClassName
          )}>
            {children}
          </div>
        ) : (
          <div className="px-safe">
            {children}
          </div>
        )}
      </motion.main>
      <Footer />
      <BackToTop />
    </div>
  );
}
