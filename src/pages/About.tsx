import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import VisionMissionSection from "@/components/about/VisionMissionSection";
import FounderStorySection from "@/components/about/FounderStorySection";
import ValuesSection from "@/components/about/ValuesSection";
import TeamSection from "@/components/about/TeamSection";
import AboutCTASection from "@/components/about/AboutCTASection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AboutHeroSection />
        <VisionMissionSection />
        <FounderStorySection />
        <ValuesSection />
        <TeamSection />
        <AboutCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
