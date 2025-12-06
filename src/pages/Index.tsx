import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProvocationSection from "@/components/sections/ProvocationSection";
import ManifestoSection from "@/components/sections/ManifestoSection";
import MetaCurriculumSection from "@/components/sections/MetaCurriculumSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import LeadMagnetSection from "@/components/sections/LeadMagnetSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
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
      <Footer />
    </div>
  );
};

export default Index;
