import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";

interface IntelligentBackButtonProps {
  fallbackHref: string;
  label?: string;
  className?: string;
}

export function IntelligentBackButton({
  fallbackHref,
  label = "Back",
  className,
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

  return (
    <button
      type="button"
      onClick={handleBack}
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80",
        !className && "text-[#c8a951] dark:text-[#9f7b42]",
        className
      )}
      aria-label={label}
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </button>
  );
}
