import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectCardProps {
  id: string;
  title: string;
  type: string;
  date: string;
  image: string;
  description?: string;
  variant?: "large" | "small";
  aspectRatio?: "16/9" | "4/3";
}

const ProjectCard = ({
  id,
  title,
  type,
  date,
  image,
  description,
  variant = "large",
  aspectRatio,
}: ProjectCardProps) => {
  const isLarge = variant === "large";
  const cardSize = isLarge ? "large" : "small";
  const [isHovered, setIsHovered] = useState(false);
  
  // Determine aspect ratio: use prop if provided, otherwise use variant default
  const finalAspectRatio = aspectRatio 
    ? (aspectRatio === "16/9" ? "aspect-[16/9]" : "aspect-[4/3]")
    : variant === "large" 
      ? "aspect-[16/9]" 
      : "aspect-[4/3]";

  return (
    <Link 
      to={`/project/${id}`} 
      className="project-card group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.article 
        className="card-container bg-card rounded-lg overflow-hidden relative inline-block"
        data-size={cardSize}
        animate={{ 
          scale: isHovered ? 1.02 : 1,
          y: isHovered ? -6 : 0,
        }}
        transition={{ 
          duration: 0.5, 
          ease: [0.25, 0.46, 0.45, 0.94] // COLLINS-style smooth easing
        }}
        style={{
          boxShadow: isHovered 
            ? "0 20px 40px -10px rgba(0, 0, 0, 0.2)" 
            : "0 4px 12px rgba(0, 0, 0, 0.08)",
        }}
      >
        <figure className="card-content relative inline-block">
          <motion.img
            src={image}
            alt={title}
            className="w-auto h-auto max-w-full max-h-[600px] block object-contain"
            loading="lazy"
            animate={{ 
              scale: isHovered ? 1.08 : 1,
            }}
            transition={{ 
              duration: 0.6, 
              ease: [0.25, 0.46, 0.45, 0.94] // Smooth, elegant zoom
            }}
          />
          {/* Subtle overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-foreground/0"
            animate={{
              backgroundColor: isHovered ? "rgba(0, 0, 0, 0.05)" : "rgba(0, 0, 0, 0)",
            }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </figure>
      </motion.article>
      
      {/* Project title at bottom - minimal, clean with smooth fade */}
      <motion.figcaption 
        className="card-meta mt-4 font-sans text-sm text-foreground text-center"
        animate={{
          opacity: isHovered ? 0.7 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.figcaption>
    </Link>
  );
};

export default ProjectCard;