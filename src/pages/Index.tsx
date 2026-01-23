import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import PhilosophySection from "@/components/PhilosophySection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import IllustrationSection from "@/components/IllustrationSection";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  return (
    <>
      <MusicPlayer />
      <Header />
      
      <main className="pt-20 pb-16">
        <HeroSection />
        <ProjectsSection />
        <PhilosophySection />
        <ClientsSection />
        <TestimonialsSection />
      </main>

      <IllustrationSection />
      <Footer />
    </>
  );
};

export default Index;
