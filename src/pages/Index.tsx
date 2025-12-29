import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IllustrationSection from "@/components/IllustrationSection";
import ProjectCard from "@/components/ProjectCard";
import flowerHero from "@/assets/flower-hero.gif";
import projectCoverDashboard from "@/assets/project-cover-dashboard.png";
import projectCoverFulfillment from "@/assets/project-cover-fulfillment.png";
import projectCoverAudi from "@/assets/project-cover-audi.png";
import projectCoverPaypal from "@/assets/project-cover-paypal.png";
import projectCoverAirbnb from "@/assets/project-cover-airbnb.png";
import projectCoverWeather from "@/assets/project-cover-weather.png";
import projectCoverAI from "@/assets/project-cover-ai.png";
import rewordingCover from "@/assets/rewording-2025-cover.png";
import { motion } from "framer-motion";

const projects = [
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
  {
    id: "project-3",
    title: "Audi.com",
    type: "Web Design",
    date: "2023",
    image: projectCoverAudi,
    description: "Premium automotive web experience showcasing Audi's luxury vehicles with immersive visuals and seamless configurator.",
  },
  {
    id: "project-4",
    title: "PayPal.com",
    type: "Web Design",
    date: "2023",
    image: projectCoverPaypal,
    description: "Redesigned payment platform experience focused on simplicity, security, and trust for millions of users worldwide.",
  },
  {
    id: "project-5",
    title: "Airbnb Connect",
    type: "Product Design",
    date: "2022",
    image: projectCoverAirbnb,
    description: "Host management tools connecting property owners with travelers through intuitive booking and communication features.",
  },
  {
    id: "project-6",
    title: "IBM Weather Channel",
    type: "Product Design",
    date: "2022",
    image: projectCoverWeather,
    description: "Weather intelligence platform delivering accurate forecasts and climate data through beautiful, accessible interfaces.",
  },
  {
    id: "project-7",
    title: "AI Exploration",
    type: "AI Design",
    date: "2024",
    image: projectCoverAI,
    description: "Experimental AI-generated visuals exploring the creative potential of human-machine collaboration in design.",
  },
  {
    id: "project-8",
    title: "Rewording Poster Design",
    type: "Graphic Design",
    date: "2025",
    image: rewordingCover,
    description: "Typography-focused poster series exploring the visual impact of words and language through bold graphic treatments.",
  },
];

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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Index = () => {
  return (
    <>
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="hero container-wide py-12 lg:py-20">
          <motion.article 
            className="hero-content flex flex-row items-center gap-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.header 
              className="hero-text w-1/2"
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-4">
                Hi, I'm Sicong
              </h1>
              <p className="font-sans text-lg lg:text-xl text-muted-foreground leading-relaxed">
                I design tools and workflows that help businesses work smarter and grow faster.
              </p>
            </motion.header>

            <motion.figure 
              className="hero-illustration w-1/2 flex justify-end"
              variants={scaleIn}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <picture className="w-full max-w-[420px] aspect-[1/1.1] bg-background rounded-lg">
                <img 
                  src={flowerHero} 
                  alt="Flower illustration" 
                  className="w-full h-full object-contain mix-blend-darken"
                />
              </picture>
            </motion.figure>
          </motion.article>
        </section>

        {/* Projects Section */}
        <section className="work-section container-wide pb-16 lg:pb-24">
          {/* Row 1 */}
          <motion.article 
            className="projects-row-primary grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
              <ProjectCard {...projects[0]} variant="large" />
            </motion.div>
            <motion.figure variants={fadeInUp} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
              <ProjectCard {...projects[1]} variant="large" />
            </motion.figure>
          </motion.article>

          {/* Row 2 */}
          <motion.article 
            className="projects-row-offset grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
              <ProjectCard {...projects[2]} variant="large" />
            </motion.div>
            <motion.figure 
              className="md:mt-24"
              variants={fadeInUp} 
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard {...projects[3]} variant="large" />
            </motion.figure>
          </motion.article>

          {/* Row 3 */}
          <motion.article 
            className="projects-row-offset grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
              <ProjectCard {...projects[4]} variant="large" />
            </motion.div>
            <motion.figure 
              className="md:mt-24"
              variants={fadeInUp} 
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard {...projects[5]} variant="large" />
            </motion.figure>
          </motion.article>

          {/* Row 4 */}
          <motion.article 
            className="projects-row-offset grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
              <ProjectCard {...projects[6]} variant="large" />
            </motion.div>
            <motion.figure 
              className="md:mt-24"
              variants={fadeInUp} 
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard {...projects[7]} variant="large" />
            </motion.figure>
          </motion.article>
        </section>
      </main>

      <IllustrationSection />
      <Footer />
    </>
  );
};

export default Index;