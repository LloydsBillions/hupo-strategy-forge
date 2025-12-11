import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ApproachHeroSection from "@/components/approach/ApproachHeroSection";
import PhilosophySection from "@/components/approach/PhilosophySection";
import MethodologySection from "@/components/approach/MethodologySection";
import MetaCurriculumDeepDive from "@/components/approach/MetaCurriculumDeepDive";
import ApproachCTASection from "@/components/approach/ApproachCTASection";

const Approach = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ApproachHeroSection />
        <PhilosophySection />
        <MethodologySection />
        <MetaCurriculumDeepDive />
        <ApproachCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Approach;
