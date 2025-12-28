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
        <figure className="card-content w-full h-full overflow-hidden rounded-xl">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </figure>
      </motion.article>
      
      <figcaption className="card-meta mt-3 font-sans text-sm text-foreground group-hover:text-foreground/80 transition-colors duration-300">
        {title} <span className="card-details text-muted-foreground">| {type} | {date}</span>
      </figcaption>
    </Link>
  );
};

export default ProjectCard;