import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import ApplyHeroSection from "@/components/apply/ApplyHeroSection";
import PathSelector from "@/components/apply/PathSelector";
import IndividualApplicationForm from "@/components/apply/IndividualApplicationForm";
import CorporateInquiryForm from "@/components/apply/CorporateInquiryForm";
import ContactInfoSection from "@/components/apply/ContactInfoSection";
import { Helmet } from "react-helmet-async";

const Apply = () => {
  return (
    <>
      <Helmet>
        <title>Apply | Hupo School of Strategy</title>
        <meta name="description" content="Apply to Hupo School of Strategy programs. Individual applications for Strategic Thinking Lab or corporate inquiries for Strategy Execution Lab." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <PageTransition>
          <main>
            <ApplyHeroSection />
            <PathSelector />
            <IndividualApplicationForm />
            <CorporateInquiryForm />
            <ContactInfoSection />
          </main>
        </PageTransition>
        <Footer />
      </div>
    </>
  );
};

export default Apply;
