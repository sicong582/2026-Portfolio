import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import PhilosophySection from "@/components/PhilosophySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import IllustrationSection from "@/components/IllustrationSection";
import DynamicBackground from "@/components/DynamicBackground";
import StarFieldBackground from "@/components/StarFieldBackground";
import BottomNavigation from "@/components/BottomNavigation";

// COLLINS-style smooth section animations
const sectionVariants = {
  hidden: { 
    opacity: 0, 
    y: 80,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94], // Smooth COLLINS-style easing
    },
  },
};

const Index = () => {
  return (
    <>
      <SEO 
        title="Sicong Chen | Product Designer"
        description="Portfolio of Sicong Chen - Product Designer crafting thoughtful digital experiences. Specializing in B2B operational platforms and AI-powered experiences."
      />
      <Header />
      
      {/* Starfield background (Three.js) */}
      <StarFieldBackground />
      
      {/* Dynamic background */}
      <DynamicBackground />
      
      <main id="main-content" className="min-h-screen relative pt-40 pb-64">
        <div className="w-full h-full px-4 md:px-8 lg:px-12 pl-20 md:pl-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left side - Hero text */}
            <div className="lg:sticky lg:top-32">
              <HeroSection />
            </div>

            {/* Right side - Floating project cards */}
            <div className="relative overflow-x-hidden overflow-y-visible">
              <ProjectsSection />
            </div>
          </div>
        </div>
      </main>

      <BottomNavigation />
      <Footer />
    </>
  );
};

export default Index;
