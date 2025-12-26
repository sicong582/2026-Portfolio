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

  return (
    <Link to={`/project/${id}`} className="group block">
      <motion.div 
        className={`bg-card rounded-2xl p-6 ${isLarge ? "aspect-[4/3]" : "aspect-[4/3]"}`}
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)"
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="w-full h-full flex items-center justify-center relative">
          {/* Main phone mockup */}
          <motion.div 
            className={`relative ${isLarge ? "w-28" : "w-20"} z-10`}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="bg-foreground/10 rounded-[20px] p-1 shadow-lg">
              <div className="bg-background rounded-[16px] overflow-hidden aspect-[9/19]">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Floating elements - smaller screens/cards behind */}
          <motion.div 
            className={`absolute ${isLarge ? "left-4 top-4" : "left-2 top-2"} ${isLarge ? "w-24 h-28" : "w-16 h-20"} bg-background/80 rounded-lg shadow-md overflow-hidden`}
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
            />
          </motion.div>
          <motion.div 
            className={`absolute ${isLarge ? "right-4 top-6" : "right-2 top-4"} ${isLarge ? "w-20 h-24" : "w-14 h-16"} bg-background/80 rounded-lg shadow-md overflow-hidden`}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
            />
          </motion.div>
          <motion.div 
            className={`absolute ${isLarge ? "right-8 bottom-6" : "right-4 bottom-4"} ${isLarge ? "w-16 h-20" : "w-12 h-14"} bg-background/80 rounded-lg shadow-md overflow-hidden`}
            whileHover={{ scale: 1.05, rotate: -1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
            />
          </motion.div>
        </div>
      </motion.div>
      <div className="mt-3 font-sans text-sm text-foreground group-hover:text-foreground/80 transition-colors duration-300">
        {title} <span className="text-muted-foreground">| {type} | {date}</span>
      </div>
    </Link>
  );
};

export default ProjectCard;