import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import ProgramsHeroSection from "@/components/programs/ProgramsHeroSection";
import ProgramCardsSection from "@/components/programs/ProgramCardsSection";
import ComparisonTableSection from "@/components/programs/ComparisonTableSection";
import ProgramsCTASection from "@/components/programs/ProgramsCTASection";
import { Helmet } from "react-helmet-async";

const Programs = () => {
  return (
    <>
      <Helmet>
        <title>Programs | Hupo School of Strategy</title>
        <meta name="description" content="Explore our programs: Strategic Thinking Lab for individuals and Strategy Execution Lab for organizations. Transform how you think, decide, and execute." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <PageTransition>
          <main>
            <ProgramsHeroSection />
            <ProgramCardsSection />
            <ComparisonTableSection />
            <ProgramsCTASection />
          </main>
        </PageTransition>
        <Footer />
      </div>
    </>
  );
};

export default Programs;
