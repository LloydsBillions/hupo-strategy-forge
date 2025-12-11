import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProgramsHeroSection from "@/components/programs/ProgramsHeroSection";
import ProgramCardsSection from "@/components/programs/ProgramCardsSection";
import ComparisonTableSection from "@/components/programs/ComparisonTableSection";
import ProgramsCTASection from "@/components/programs/ProgramsCTASection";

const Programs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProgramsHeroSection />
        <ProgramCardsSection />
        <ComparisonTableSection />
        <ProgramsCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
