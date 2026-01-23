import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "@/components/ProjectCard";
import { getB2BProjects, type ProjectSummary } from "@/data/projects";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Get first 3 B2B projects
const b2bProjects = getB2BProjects().slice(0, 3);

interface ProjectCategoryProps {
  title: string;
  subtitle?: string;
  projects: ProjectSummary[];
  showOffset?: boolean;
}

const ProjectCategory = ({ title, subtitle, projects, showOffset = false }: ProjectCategoryProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yTransform = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-150px" }}
      variants={staggerContainer}
      className="mb-16 lg:mb-24 relative w-full"
      style={{ y: yTransform, opacity: opacityTransform }}
    >
      <motion.div 
        className="mb-8 relative container-wide"
        variants={fadeInUp}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h3 
          className="font-serif text-2xl lg:text-3xl font-medium mb-2 relative inline-block"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {title}
          <motion.span
            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground"
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.h3>
        {subtitle && (
          <motion.p 
            className="font-sans text-sm text-muted-foreground uppercase tracking-wider mt-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>

      <div className="w-full grid grid-cols-1 gap-8 px-6 lg:px-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={fadeInUp}
            transition={{ 
              duration: 0.6, 
              ease: [0.22, 1, 0.36, 1],
              delay: index * 0.1,
            }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full"
          >
            <ProjectCard {...project} variant="large" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section className="work-section w-full pb-16 lg:pb-24">
      <ProjectCategory 
        title="B2B Products" 
        subtitle="Deep Dive Case Studies"
        projects={b2bProjects}
      />
    </section>
  );
};

export default ProjectsSection;
