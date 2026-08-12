import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TwoTrackSplit from "@/components/TwoTrackSplit";
import CredentialsBar from "@/components/CredentialsBar";
import PracticeAreasGrid from "@/components/PracticeAreasGrid";
import ComplianceServicesGrid from "@/components/ComplianceServicesGrid";
import KnowledgeCentrePreview from "@/components/KnowledgeCentrePreview";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TwoTrackSplit />
        <CredentialsBar />
        <PracticeAreasGrid />
        <ComplianceServicesGrid />
        <KnowledgeCentrePreview />
        <EnquiryForm />
      </main>
      <Footer />
    </>
  );
}
