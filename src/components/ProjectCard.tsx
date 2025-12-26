import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  index: number;
  variant?: "large" | "medium" | "small";
}

const ProjectCard = ({
  id,
  title,
  category,
  year,
  image,
  index,
  variant = "medium",
}: ProjectCardProps) => {
  const variantStyles = {
    large: "col-span-2 row-span-2",
    medium: "col-span-1 row-span-1",
    small: "col-span-1 row-span-1",
  };

  const imageHeight = {
    large: "h-[500px] lg:h-[600px]",
    medium: "h-[350px] lg:h-[400px]",
    small: "h-[280px] lg:h-[320px]",
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`group ${variantStyles[variant]}`}
    >
      <Link to={`/project/${id}`} data-cursor="View" className="block">
        <div className={`relative overflow-hidden rounded-lg ${imageHeight[variant]}`}>
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
        </div>

        <div className="mt-6 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {category}
            </span>
            <span className="font-sans text-xs text-muted-foreground">{year}</span>
          </div>
          <h3 className="font-serif text-xl lg:text-2xl font-medium group-hover:text-muted-foreground transition-colors">
            {title}
          </h3>
        </div>
      </Link>
    </motion.article>
  );
};

export default ProjectCard;