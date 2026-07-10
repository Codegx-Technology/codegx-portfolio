import { IntelligentBackButton } from "@/components/ui/intelligent-back-button";

interface PageBackNavProps {
  fallbackHref: string;
  label?: string;
  className?: string;
}

export function PageBackNav({ fallbackHref, label = "Back", className }: PageBackNavProps) {
  return (
    <div className={className}>
      <IntelligentBackButton fallbackHref={fallbackHref} label={label} align="center" />
    </div>
  );
}
