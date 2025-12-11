import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import SELHeroSection from "@/components/strategy-execution-lab/SELHeroSection";
import SELChallengeSection from "@/components/strategy-execution-lab/SELChallengeSection";
import SELPhasesSection from "@/components/strategy-execution-lab/SELPhasesSection";
import SELCurriculumSection from "@/components/strategy-execution-lab/SELCurriculumSection";
import SELInvestmentSection from "@/components/strategy-execution-lab/SELInvestmentSection";
import SELCaseStudiesSection from "@/components/strategy-execution-lab/SELCaseStudiesSection";
import SELFinalCTASection from "@/components/strategy-execution-lab/SELFinalCTASection";
import { Helmet } from "react-helmet-async";

const StrategyExecutionLab = () => {
  return (
    <>
      <Helmet>
        <title>Strategy Execution Lab | Hupo School of Strategy</title>
        <meta name="description" content="A 12-week transformation program for leadership teams. Learn to turn strategy into consistent, measurable results across your organization." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <PageTransition>
          <main>
            <SELHeroSection />
            <SELChallengeSection />
            <SELPhasesSection />
            <SELCurriculumSection />
            <SELInvestmentSection />
            <SELCaseStudiesSection />
            <SELFinalCTASection />
          </main>
        </PageTransition>
        <Footer />
      </div>
    </>
  );
};

export default StrategyExecutionLab;
