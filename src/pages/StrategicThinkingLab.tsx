import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import { STLHeroSection } from "@/components/strategic-thinking-lab/STLHeroSection";
import { STLOpportunitySection } from "@/components/strategic-thinking-lab/STLOpportunitySection";
import { STLWeeklyCurriculumSection } from "@/components/strategic-thinking-lab/STLWeeklyCurriculumSection";
import { STLLearningExperienceSection } from "@/components/strategic-thinking-lab/STLLearningExperienceSection";
import { STLPricingSection } from "@/components/strategic-thinking-lab/STLPricingSection";
import { STLApplicationSection } from "@/components/strategic-thinking-lab/STLApplicationSection";
import { STLFacultySection } from "@/components/strategic-thinking-lab/STLFacultySection";
import { STLFinalCTASection } from "@/components/strategic-thinking-lab/STLFinalCTASection";
import { Helmet } from "react-helmet-async";

const StrategicThinkingLab = () => {
  return (
    <>
      <Helmet>
        <title>Strategic Thinking Lab | Hupo School of Strategy</title>
        <meta name="description" content="A 6-week hybrid cohort program that transforms how you think, decide, and execute. Master systems thinking and build your personal operating system." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <PageTransition>
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
        </PageTransition>
        <Footer />
      </div>
    </>
  );
};

export default StrategicThinkingLab;
