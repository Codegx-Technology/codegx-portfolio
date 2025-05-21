import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import AgencyIntro from "@/components/Agency/AgencyIntro";
import AgencyServices from "@/components/Agency/AgencyServices";

export default function AgencyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <AgencyIntro />
        <AgencyServices />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
