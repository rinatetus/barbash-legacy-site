import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ProceduresSection from "@/components/ProceduresSection";
import ResearchSection from "@/components/ResearchSection";
import ResilienceSection from "@/components/ResilienceSection";
import PressSection from "@/components/PressSection";
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
      <ProceduresSection />
      <ResearchSection />
      <ResilienceSection />
      <InstitutionsSection />
      <PressSection />
      <PhilosophySection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
