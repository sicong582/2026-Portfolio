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
  // Card dimensions
  const cardWidthPercent = 45;
  const cardHeight = 350; // Approximate card height in pixels
  const verticalSpacing = 180; // Minimum vertical spacing between cards
  const horizontalSpacing = 10; // Horizontal spacing percentage
  
  // Calculate positions to prevent overlapping
  const calculatePosition = (index: number) => {
    // Alternate between left and right positions to prevent horizontal overlap
    const isEven = index % 2 === 0;
    const leftPosition = isEven ? 5 : 50; // Left side: 5%, Right side: 50%
    
    // Calculate vertical position with proper spacing
    const topPosition = index * verticalSpacing;
    
    // Small rotation for visual interest (alternating)
    const rotation = isEven ? -1.5 : 1.5;
    
    return {
      left: leftPosition,
      top: topPosition,
      rotation: rotation,
    };
  };

  // Calculate total height needed for all projects
  const totalHeight = (allProjects.length * verticalSpacing) + cardHeight + 400;

  return (
    <div className="relative w-full" style={{ minHeight: `${totalHeight}px`, paddingBottom: "400px" }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative w-full"
      >
        {allProjects.map((project, index) => {
          const position = calculatePosition(index);
          
          return (
            <motion.div
              key={project.id}
              className="absolute"
              style={{
                left: `${position.left}%`,
                top: `${position.top}px`,
                width: `${cardWidthPercent}%`,
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
