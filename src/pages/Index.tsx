import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import HeroSection from "@/components/sections/HeroSection";
import ProvocationSection from "@/components/sections/ProvocationSection";
import ManifestoSection from "@/components/sections/ManifestoSection";
import MetaCurriculumSection from "@/components/sections/MetaCurriculumSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import LeadMagnetSection from "@/components/sections/LeadMagnetSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Hupo School of Strategy | Where Strategic Leaders Are Forged</title>
        <meta name="description" content="Africa's first School of Strategic Thought. Transform how you think, decide, and execute with our Strategic Thinking Lab and Strategy Execution Lab programs." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <PageTransition>
          <main>
            <HeroSection />
            <ProvocationSection />
            <ManifestoSection />
            <MetaCurriculumSection />
            <ProgramsSection />
            <TestimonialsSection />
            <LeadMagnetSection />
            <FinalCTASection />
          </main>
        </PageTransition>
        <Footer />
      </div>
    </>
  );
};

export default Index;
