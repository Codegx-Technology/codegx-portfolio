"use client";

import { useEffect } from "react";
import { PageWrapper, PageHeader } from "@/components/layouts/PageWrapper";
import { QuoteForm } from "@/components/Forms/QuoteForm";
import { Toaster } from "sonner";

export default function QuotePage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrapper>
      <Toaster position="top-right" />

      <div className="max-w-2xl mx-auto">
        <PageHeader
          title="Get a Free AI Quote"
          description="Tell us about your business needs and goals. We'll send you a personalized AI solution estimate."
          className="text-center"
        />

        <div className="bg-card rounded-xl border border-border p-4 sm:p-6 md:p-8 w-full">
          <QuoteForm />
        </div>
      </div>
    </PageWrapper>
  );
}
