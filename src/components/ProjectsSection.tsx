import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import projectCoverDashboard from "@/assets/project-cover-dashboard.png";
import projectCoverFulfillment from "@/assets/project-cover-fulfillment.png";
import projectCoverAudi from "@/assets/project-cover-audi.png";
import projectCoverPaypal from "@/assets/project-cover-paypal.png";
import projectCoverAirbnb from "@/assets/project-cover-airbnb.png";
import projectCoverAI from "@/assets/project-cover-ai.png";
import rewordingCover from "@/assets/rewording-2025-cover.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// B2B Projects (Dive Deep)
const b2bProjects = [
  {
    id: "project-1",
    title: "Purchase Order Dashboard",
    type: "UX Design",
    date: "2024",
    image: projectCoverDashboard,
    description: "Streamlined purchase order management with real-time tracking, analytics, and automated workflows for enterprise teams.",
  },
  {
    id: "project-2",
    title: "Fulfillment Operation Tooling",
    type: "UX Design",
    date: "2024",
    image: projectCoverFulfillment,
    description: "End-to-end fulfillment operations platform enabling warehouse teams to manage inventory and shipping efficiently.",
  },
];

// Marketing Design Projects (Visual Focus)
const marketingProjects = [
  {
    id: "project-4",
    title: "PayPal.com",
    type: "Web Design",
    date: "2019",
    image: projectCoverPaypal,
    description: "Redesigned payment platform experience focused on simplicity, security, and trust for millions of users worldwide.",
  },
  {
    id: "project-3",
    title: "Audi.com",
    type: "Web Design",
    date: "2018",
    image: projectCoverAudi,
    description: "Premium automotive web experience showcasing Audi's luxury vehicles with immersive visuals and seamless configurator.",
  },
];

// Conceptual Design Projects (Visual Focus)
const conceptualProjects = [
  {
    id: "project-5",
    title: "Airbnb Connect",
    type: "Product Design",
    date: "2022",
    image: projectCoverAirbnb,
    description: "Host management tools connecting property owners with travelers through intuitive booking and communication features.",
  },
  {
    id: "project-8",
    title: "Rewording Poster Design",
    type: "Graphic Design",
    date: "2025",
    image: rewordingCover,
    description: "Typography-focused poster series exploring the visual impact of words and language through bold graphic treatments.",
  },
  {
    id: "project-7",
    title: "AI Exploration",
    type: "AI Design",
    date: "2024",
    image: projectCoverAI,
    description: "Experimental AI-generated visuals exploring the creative potential of human-machine collaboration in design.",
  },
];

interface ProjectCategoryProps {
  title: string;
  subtitle?: string;
  projects: typeof b2bProjects;
  showOffset?: boolean;
}

const ProjectCategory = ({ title, subtitle, projects, showOffset = false }: ProjectCategoryProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="mb-16 lg:mb-24"
    >
      <motion.div 
        className="mb-8"
        variants={fadeInUp}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h3 className="font-serif text-2xl lg:text-3xl font-medium mb-2">
          {title}
        </h3>
        {subtitle && (
          <p className="font-sans text-sm text-muted-foreground uppercase tracking-wider">
            {subtitle}
          </p>
        )}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={showOffset && index % 2 === 1 ? "md:mt-24" : ""}
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
    <section className="work-section container-wide pb-16 lg:pb-24">
      <ProjectCategory 
        title="B2B Products" 
        subtitle="Deep Dive Case Studies"
        projects={b2bProjects}
      />
      
      <ProjectCategory 
        title="Marketing Design" 
        subtitle="Visual Showcase"
        projects={marketingProjects}
        showOffset
      />
      
      <ProjectCategory 
        title="Conceptual Design" 
        subtitle="Visual Showcase"
        projects={conceptualProjects}
        showOffset
      />
    </section>
  );
};

export default ProjectsSection;
