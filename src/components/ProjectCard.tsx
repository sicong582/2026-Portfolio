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
}

const ProjectCard = ({
  id,
  title,
  type,
  date,
  image,
  description,
  variant = "large",
}: ProjectCardProps) => {
  const isLarge = variant === "large";
  const cardSize = isLarge ? "large" : "small";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to={`/project/${id}`} 
      className="project-card group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.article 
        className={`card-container bg-card rounded-2xl p-6 aspect-[4/3] relative overflow-hidden`}
        data-size={cardSize}
        animate={{ 
          scale: isHovered ? 1.02 : 1,
          boxShadow: isHovered ? "0 20px 40px -12px rgba(0, 0, 0, 0.15)" : "0 0 0 0 rgba(0, 0, 0, 0)"
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <figure className="card-content w-full h-full overflow-hidden rounded-xl relative">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          
          {/* Hover Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent flex flex-col justify-end p-6 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
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