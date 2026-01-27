import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "@/components/ProjectCard";
import { getAllProjectSummaries } from "@/data/projects";

// COLLINS-style smooth fade-in animation
const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94], // Smooth ease-out curve similar to COLLINS
    },
  },
};

// Staggered container with smooth reveal
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Get all projects
const allProjects = getAllProjectSummaries();

const ProjectsSection = () => {
  // Random positions for floating cards (like reference image)
  const getRandomPosition = (index: number) => {
    const positions = [
      { x: 0, y: 0, rotation: -2 },
      { x: 40, y: -20, rotation: 3 },
      { x: -30, y: 100, rotation: -1 },
      { x: 60, y: 80, rotation: 2 },
      { x: 20, y: 200, rotation: -2 },
      { x: -20, y: 250, rotation: 1 },
    ];
    return positions[index % positions.length] || { x: 0, y: 0, rotation: 0 };
  };

  // Calculate total height needed for all projects
  // Account for max y offset (250px) and card height (~300px) plus extra padding
  const maxYOffset = 250;
  const cardHeight = 350;
  const totalHeight = (allProjects.length * 120) + maxYOffset + cardHeight + 600; // Extra padding for bottom nav

  return (
    <div className="relative w-full" style={{ minHeight: `${totalHeight}px`, paddingBottom: "400px" }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative w-full"
      >
        {allProjects.map((project, index) => {
          const position = getRandomPosition(index);
          return (
            <motion.div
              key={project.id}
              className="absolute"
              style={{
                left: `${20 + position.x}%`,
                top: `${index * 120 + position.y}px`,
                width: "45%",
                maxWidth: "400px",
              }}
              variants={fadeInUp}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ 
                scale: 1.05, 
                zIndex: 10,
                rotate: 0,
              }}
              initial={{ rotate: position.rotation }}
            >
              <ProjectCard 
                {...project} 
                variant="small" 
                aspectRatio="4/3"
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
