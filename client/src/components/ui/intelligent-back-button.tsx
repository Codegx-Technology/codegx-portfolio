import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";

interface IntelligentBackButtonProps {
  fallbackHref: string;
  label?: string;
  className?: string;
  align?: "left" | "center" | "right";
  variant?: "pill" | "plain";
}

export function IntelligentBackButton({
  fallbackHref,
  label = "Back",
  className,
  align,
  variant = "pill",
}: IntelligentBackButtonProps) {
  const [, setLocation] = useLocation();

  const handleBack = () => {
    const referrer = document.referrer ? new URL(document.referrer) : null;
    const cameFromSameSite = referrer?.origin === window.location.origin;

    if (cameFromSameSite && window.history.length > 1) {
      window.history.back();
      return;
    }

    setLocation(fallbackHref);
  };

  const button = (
    <button
      type="button"
      onClick={handleBack}
      className={cn(
        "inline-flex items-center gap-2 text-sm font-semibold transition-colors",
        variant === "plain" && "text-[#c8a951] hover:opacity-80 dark:text-[#9f7b42]",
        variant === "pill" &&
          "rounded-md border border-border bg-transparent px-4 py-2 text-foreground hover:bg-accent",
        className
      )}
      aria-label={label}
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </button>
  );

  if (!align) {
    return button;
  }

  return (
    <div
      className={cn(
        "flex w-full",
        align === "left" && "justify-start",
        align === "center" && "justify-center",
        align === "right" && "justify-end"
      )}
    >
      {button}
    </div>
  );
}
