import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ProjectHeroProps {
  title: string;
  subtitle: string;
  meta: string;
  image: string;
}

const ProjectHero = ({ title, subtitle, meta, image }: ProjectHeroProps) => {
  return (
    <section className="relative w-full min-h-[600px] aspect-[16/9] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-end">
        <div className="container-wide pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
              {title}
            </h1>
            <p className="font-sans text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 font-light">
              {subtitle}
            </p>
            <p className="font-sans text-sm md:text-base text-white/70">
              {meta}
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white/70" />
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectHero;
