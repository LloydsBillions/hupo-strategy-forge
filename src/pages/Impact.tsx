import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import ImpactHeroSection from "@/components/impact/ImpactHeroSection";
import ImpactMetricsSection from "@/components/impact/ImpactMetricsSection";
import CaseStudiesSection from "@/components/impact/CaseStudiesSection";
import TestimonialsGridSection from "@/components/impact/TestimonialsGridSection";
import ImpactCTASection from "@/components/impact/ImpactCTASection";
import { Helmet } from "react-helmet-async";

const Impact = () => {
  return (
    <>
      <Helmet>
        <title>Impact | Hupo School of Strategy</title>
        <meta name="description" content="Real stories of transformation from leaders and organizations who chose depth over shortcuts. Case studies and testimonials from Hupo alumni." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <PageTransition>
          <main>
            <ImpactHeroSection />
            <ImpactMetricsSection />
            <CaseStudiesSection />
            <TestimonialsGridSection />
            <ImpactCTASection />
          </main>
        </PageTransition>
        <Footer />
      </div>
    </>
  );
};

export default Impact;