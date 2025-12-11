import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import VisionMissionSection from "@/components/about/VisionMissionSection";
import FounderStorySection from "@/components/about/FounderStorySection";
import ValuesSection from "@/components/about/ValuesSection";
import TeamSection from "@/components/about/TeamSection";
import AboutCTASection from "@/components/about/AboutCTASection";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Hupo School of Strategy</title>
        <meta name="description" content="Learn about Hupo School of Strategy, Africa's first school of strategic thought. Discover our vision, mission, and the team behind the transformation." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <PageTransition>
          <main>
            <AboutHeroSection />
            <VisionMissionSection />
            <FounderStorySection />
            <ValuesSection />
            <TeamSection />
            <AboutCTASection />
          </main>
        </PageTransition>
        <Footer />
      </div>
    </>
  );
};

export default About;
