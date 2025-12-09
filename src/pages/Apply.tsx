import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ApplyHeroSection from "@/components/apply/ApplyHeroSection";
import PathSelector from "@/components/apply/PathSelector";
import IndividualApplicationForm from "@/components/apply/IndividualApplicationForm";
import CorporateInquiryForm from "@/components/apply/CorporateInquiryForm";
import ContactInfoSection from "@/components/apply/ContactInfoSection";

const Apply = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ApplyHeroSection />
        <PathSelector />
        <IndividualApplicationForm />
        <CorporateInquiryForm />
        <ContactInfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Apply;
