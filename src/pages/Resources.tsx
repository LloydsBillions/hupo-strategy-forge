import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import ResourcesHeroSection from "@/components/resources/ResourcesHeroSection";
import FeaturedArticleSection from "@/components/resources/FeaturedArticleSection";
import ArticlesGridSection from "@/components/resources/ArticlesGridSection";
import NewsletterSection from "@/components/resources/NewsletterSection";
import { Helmet } from "react-helmet-async";

const Resources = () => {
  return (
    <>
      <Helmet>
        <title>Resources | Hupo School of Strategy</title>
        <meta name="description" content="Deep insights on strategic thinking, decision-making, and execution. Thought leadership articles from Hupo faculty and community." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <PageTransition>
          <main>
            <ResourcesHeroSection />
            <FeaturedArticleSection />
            <ArticlesGridSection />
            <NewsletterSection />
          </main>
        </PageTransition>
        <Footer />
      </div>
    </>
  );
};

export default Resources;