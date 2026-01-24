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
        className={`card-container bg-card rounded-2xl p-6 ${finalAspectRatio} relative overflow-hidden group/card`}
        data-size={cardSize}
        animate={{ 
          scale: isHovered ? 1.03 : 1,
          y: isHovered ? -8 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{
          boxShadow: isHovered 
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)" 
            : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        }}
      >
        <figure className="card-content w-full h-full overflow-hidden rounded-xl relative">
          {/* Gradient overlay that appears on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-foreground/0 via-foreground/0 to-foreground/20 z-10 rounded-xl"
            animate={{ 
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover relative z-0"
            loading="lazy"
            animate={{ 
              scale: isHovered ? 1.08 : 1,
              filter: isHovered ? "brightness(0.9)" : "brightness(1)",
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
          
          {/* Hover Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/60 to-transparent flex flex-col justify-end p-6 rounded-xl z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h3 
              className="text-background font-serif text-xl lg:text-2xl font-medium mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: isHovered ? 0.1 : 0 }}
            >
              {title}
            </motion.h3>
            {description && (
              <motion.p 
                className="text-background/80 font-sans text-sm lg:text-base leading-relaxed line-clamp-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: isHovered ? 0.15 : 0 }}
              >
                {description}
              </motion.p>
            )}
            <motion.span 
              className="text-background/60 font-sans text-xs mt-3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: isHovered ? 0.2 : 0 }}
            >
              {type} · {date}
            </motion.span>
          </motion.div>
        </figure>
      </motion.article>
      
      <figcaption className="card-meta mt-3 font-sans text-sm text-foreground group-hover:text-foreground/80 transition-colors duration-300">
        {title} <span className="card-details text-muted-foreground">| {type} | {date}</span>
      </figcaption>
    </Link>
  );
};

export default ProjectCard;