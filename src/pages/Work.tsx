import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import PageTransition from "@/components/PageTransition";

const allProjects = [
  {
    id: "plant-care-app",
    title: "Plant Care App",
    category: "Mobile Design",
    year: "2024",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80",
  },
  {
    id: "eco-commerce",
    title: "Eco Commerce Platform",
    category: "Web Design",
    year: "2024",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    id: "mindful-meditation",
    title: "Mindful Meditation",
    category: "Product Design",
    year: "2023",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    id: "sustainable-fashion",
    title: "Sustainable Fashion",
    category: "Brand Identity",
    year: "2023",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80",
  },
  {
    id: "fintech-dashboard",
    title: "Fintech Dashboard",
    category: "Dashboard Design",
    year: "2023",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: "travel-booking",
    title: "Travel Booking Experience",
    category: "UX Design",
    year: "2022",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
  },
];

const Work = () => {
  return (
    <PageTransition>
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container-wide">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h1 className="font-serif text-5xl lg:text-6xl font-medium mb-6">
              Selected Work
            </h1>
            <p className="font-sans text-lg text-muted-foreground max-w-xl">
              A collection of projects that showcase my approach to design—thoughtful, 
              user-centered, and visually refined.
            </p>
          </motion.div>

          {/* Projects Grid - Asymmetric Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            {/* Large project */}
            <div className="md:col-span-8">
              <ProjectCard {...allProjects[0]} index={0} variant="large" />
            </div>
            
            {/* Small project */}
            <div className="md:col-span-4 md:mt-24">
              <ProjectCard {...allProjects[1]} index={1} variant="small" />
            </div>
            
            {/* Medium projects row */}
            <div className="md:col-span-5">
              <ProjectCard {...allProjects[2]} index={2} variant="medium" />
            </div>
            <div className="md:col-span-7 md:mt-12">
              <ProjectCard {...allProjects[3]} index={3} variant="large" />
            </div>
            
            {/* Bottom row */}
            <div className="md:col-span-7">
              <ProjectCard {...allProjects[4]} index={4} variant="large" />
            </div>
            <div className="md:col-span-5 md:mt-24">
              <ProjectCard {...allProjects[5]} index={5} variant="medium" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </PageTransition>
  );
};

export default Work;