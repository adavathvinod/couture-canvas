import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { TestimonialTicker } from "@/components/home/TestimonialTicker";
import { WhyDCSection } from "@/components/home/WhyDCSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { FacultyPreview } from "@/components/home/FacultyPreview";
import { ContactSection } from "@/components/home/ContactSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TestimonialTicker />
      <WhyDCSection />
      <ProgramsSection />
      <FacultyPreview />
      <ContactSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
