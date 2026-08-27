import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryCards from "@/components/CategoryCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import IndustriesStrip from "@/components/IndustriesStrip";
import FAQ from "@/components/FAQ";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategoryCards />
        <WhyChooseUs />
        <HowItWorks />
        <IndustriesStrip />
        <FAQ />
        <EnquiryForm />
      </main>
      <Footer />
    </>
  );
}
