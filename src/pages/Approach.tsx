import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import ApproachHeroSection from "@/components/approach/ApproachHeroSection";
import PhilosophySection from "@/components/approach/PhilosophySection";
import MethodologySection from "@/components/approach/MethodologySection";
import MetaCurriculumDeepDive from "@/components/approach/MetaCurriculumDeepDive";
import ApproachCTASection from "@/components/approach/ApproachCTASection";
import { Helmet } from "react-helmet-async";

const Approach = () => {
  return (
    <>
      <Helmet>
        <title>Our Approach | Hupo School of Strategy</title>
        <meta name="description" content="Discover the Hupo methodology: depth over width, insight over information, transformation over certification. Learn how we forge strategic leaders." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <PageTransition>
          <main>
            <ApproachHeroSection />
            <PhilosophySection />
            <MethodologySection />
            <MetaCurriculumDeepDive />
            <ApproachCTASection />
          </main>
        </PageTransition>
        <Footer />
      </div>
    </>
  );
};

export default Approach;
