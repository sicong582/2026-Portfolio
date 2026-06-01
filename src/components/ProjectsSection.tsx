import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { getTranslatedHomepageProjects } from "@/utils/projectTranslations";

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const ProjectsSection = () => {
  const { language } = useLanguage();
  const allProjects = getTranslatedHomepageProjects(language);

  return (
    <div className="relative w-full pb-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-8"
      >
        {allProjects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              transition={{
                duration: 0.7,
                delay: index * 0.06,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={cn("w-full", !isEven && "sm:mt-8")}
              style={{ rotate: isEven ? -1.25 : 1.25 }}
              whileHover={{
                scale: 1.03,
                zIndex: 10,
                rotate: 0,
              }}
            >
              <ProjectCard {...project} variant="small" aspectRatio="1/1" />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
