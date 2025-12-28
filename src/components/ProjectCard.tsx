import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ProjectCardProps {
  id: string;
  title: string;
  type: string;
  date: string;
  image: string;
  variant?: "large" | "small";
}

const ProjectCard = ({
  id,
  title,
  type,
  date,
  image,
  variant = "large",
}: ProjectCardProps) => {
  const isLarge = variant === "large";
  const cardSize = isLarge ? "large" : "small";

  return (
    <Link to={`/project/${id}`} className="project-card group block">
      <motion.article 
        className={`card-container bg-card rounded-2xl p-6 aspect-[4/3]`}
        data-size={cardSize}
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)"
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <figure className="card-content w-full h-full flex items-center justify-center relative">
          {/* Main device mockup */}
          <motion.figure 
            className={`device-primary relative z-10 ${isLarge ? "w-28" : "w-20"}`}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <picture className="device-frame bg-foreground/10 rounded-[20px] p-1 shadow-lg block">
              <picture className="device-screen bg-background rounded-[16px] overflow-hidden aspect-[9/19] block">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </picture>
            </picture>
          </motion.figure>
          
          {/* Floating preview cards */}
          <motion.figure 
            className={`floating-card floating-card-left absolute bg-background/80 rounded-lg shadow-md overflow-hidden ${isLarge ? "left-4 top-4 w-24 h-28" : "left-2 top-2 w-16 h-20"}`}
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
            />
          </motion.figure>
          
          <motion.figure 
            className={`floating-card floating-card-right absolute bg-background/80 rounded-lg shadow-md overflow-hidden ${isLarge ? "right-4 top-6 w-20 h-24" : "right-2 top-4 w-14 h-16"}`}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
            />
          </motion.figure>
          
          <motion.figure 
            className={`floating-card floating-card-bottom absolute bg-background/80 rounded-lg shadow-md overflow-hidden ${isLarge ? "right-8 bottom-6 w-16 h-20" : "right-4 bottom-4 w-12 h-14"}`}
            whileHover={{ scale: 1.05, rotate: -1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
            />
          </motion.figure>
        </figure>
      </motion.article>
      
      <figcaption className="card-meta mt-3 font-sans text-sm text-foreground group-hover:text-foreground/80 transition-colors duration-300">
        {title} <span className="card-details text-muted-foreground">| {type} | {date}</span>
      </figcaption>
    </Link>
  );
};

export default ProjectCard;