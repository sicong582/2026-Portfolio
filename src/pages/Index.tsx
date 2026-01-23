import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import PhilosophySection from "@/components/PhilosophySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import IllustrationSection from "@/components/IllustrationSection";

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
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
      
      <main id="main-content" className="pt-20 pb-16 relative">
        {/* Background gradient overlay for depth */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
        </div>

        <HeroSection />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <ProjectsSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <PhilosophySection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <TestimonialsSection />
        </motion.div>
      </main>

      <IllustrationSection />
      <Footer />
    </>
  );
};

export default Index;
