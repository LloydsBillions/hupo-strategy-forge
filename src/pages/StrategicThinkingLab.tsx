import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { STLHeroSection } from "@/components/strategic-thinking-lab/STLHeroSection";
import { STLOpportunitySection } from "@/components/strategic-thinking-lab/STLOpportunitySection";
import { STLWeeklyCurriculumSection } from "@/components/strategic-thinking-lab/STLWeeklyCurriculumSection";
import { STLLearningExperienceSection } from "@/components/strategic-thinking-lab/STLLearningExperienceSection";
import { STLPricingSection } from "@/components/strategic-thinking-lab/STLPricingSection";
import { STLApplicationSection } from "@/components/strategic-thinking-lab/STLApplicationSection";
import { STLFacultySection } from "@/components/strategic-thinking-lab/STLFacultySection";
import { STLFinalCTASection } from "@/components/strategic-thinking-lab/STLFinalCTASection";

const StrategicThinkingLab = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <STLHeroSection />
        <STLOpportunitySection />
        <STLWeeklyCurriculumSection />
        <STLLearningExperienceSection />
        <STLPricingSection />
        <STLApplicationSection />
        <STLFacultySection />
        <STLFinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default StrategicThinkingLab;
