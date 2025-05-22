import { ReactNode } from "react";
import { MainLayout } from "@/components/layouts/MainLayout";

interface LayoutProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
  withContainer?: boolean;
}

/**
 * Enterprise-grade layout component with consistent styling
 * This is a wrapper around MainLayout for backward compatibility
 */
export function Layout({
  children,
  className = "",
  containerClassName,
  fullWidth = false,
  withContainer = true
}: LayoutProps) {
  return (
    <MainLayout
      className={className}
      containerClassName={containerClassName}
      fullWidth={fullWidth}
      withContainer={withContainer}
    >
      {children}
    </MainLayout>
  );
}
