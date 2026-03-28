import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ResearchSection from "@/components/ResearchSection";
import InstitutionsSection from "@/components/InstitutionsSection";
import PhilosophySection from "@/components/PhilosophySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ResearchSection />
      <InstitutionsSection />
      <PhilosophySection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
