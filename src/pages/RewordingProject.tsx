import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ProjectOverview from "@/components/projects/ProjectOverview";
import ImageGrid from "@/components/projects/ImageGrid";
import ProjectFooter from "@/components/projects/ProjectFooter";
import { getProjectDetail, getAllProjectSummaries } from "@/data/projects";
import flowerHero from "@/assets/flower-hero.gif";

// Import all project assets from rewording-poster-design folder
import primaryPoster from "@/assets/projects/rewording-poster-design/rewording-primary-poster.png";
import poster1 from "@/assets/projects/rewording-poster-design/rewording-poster-01.png";
import poster2 from "@/assets/projects/rewording-poster-design/rewording-poster-02.png";
import poster3 from "@/assets/projects/rewording-poster-design/rewording-poster-03.png";
import poster4 from "@/assets/projects/rewording-poster-design/rewording-poster-04.png";
import poster5 from "@/assets/projects/rewording-poster-design/rewording-poster-05.png";
import poster6 from "@/assets/projects/rewording-poster-design/rewording-poster-06.png";
import poster7 from "@/assets/projects/rewording-poster-design/rewording-poster-07.png";
import poster8 from "@/assets/projects/rewording-poster-design/rewording-poster-08.png";
import poster9 from "@/assets/projects/rewording-poster-design/rewording-poster-09.png";
import poster10 from "@/assets/projects/rewording-poster-design/rewording-poster-10.png";
import poster11 from "@/assets/projects/rewording-poster-design/rewording-poster-11.png";
import poster12 from "@/assets/projects/rewording-poster-design/rewording-poster-12.png";
import poster13 from "@/assets/projects/rewording-poster-design/rewording-poster-13.png";
import poster14 from "@/assets/projects/rewording-poster-design/rewording-poster-14.png";

// Primary poster image
const mainPoster = primaryPoster;

// Moodboard images (first 3 posters)
const moodboardImages = [
  poster1,
  poster2,
  poster3,
];

// Minimalist style posters
const minimalistPosters = [
  poster4,
];

// Futurist style posters (all images in this section)
const futuristPosters = [
  poster5,
  poster6,
  poster7,
  poster8,
  poster9,
  poster10,
  poster11,
  poster12,
  poster13,
  poster14,
];

const RewordingProject = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const project = getProjectDetail("rewording-poster-design");
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax transforms for different sections
  const mainPosterY = useTransform(scrollYProgress, [0.2, 0.5], [0, -50]);
  const posterGridY = useTransform(scrollYProgress, [0.4, 0.7], [0, -30]);
  const detailGridY = useTransform(scrollYProgress, [0.6, 0.9], [0, -40]);

  if (!project) return null;

  // Extract project info for ProjectOverview
  const extractProjectInfo = () => {
    const clientMetric = project.results.metrics.find(m => m.label === "Client");
    const toolsMetric = project.results.metrics.find(m => m.label === "Tools");
    let client = clientMetric?.value || "Tohoku University";
    
    // Remove "FUSE Lab" from client string, keep only "Tohoku University"
    if (client.includes("FUSE Lab")) {
      client = client.replace(/FUSE Lab,?\s*/gi, "").trim();
    }
    
    return {
      client,
      tools: toolsMetric?.value || "Midjourney, Figma, Banana Nano",
      role: project.role || "Visual Designer",
      type: project.type || "Poster Design",
      year: "2025",
    };
  };

  return (
    <div ref={containerRef} className="relative">
      <SEO
        title="Futurist Conference Poster Design | Sicong Chen"
        description={project.overview}
        type="article"
      />
      <Header />

      <main id="main-content" className="pt-32 pb-32 md:pb-40">
        <div className="w-full px-4 md:px-8 lg:px-12">
          {/* Gift/Flower Image - Below Header Introduction */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center mb-12"
          >
            <div className="max-w-md w-full">
              <img
                src={flowerHero}
                alt="Gift"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>

          {/* Back link */}
          <Link
            to="/"
            className="inline-block mb-8 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back
          </Link>

          {/* Project header */}
          <div className="mb-8">
            <h1 className="font-serif text-5xl lg:text-6xl font-medium">
              {project.title}
            </h1>
          </div>

          {/* Overview Section */}
          <section className="py-20 md:py-24">
            <ProjectOverview
              description={project.overview}
              details={extractProjectInfo()}
            />
          </section>

          {/* Two-column layout: Text sections + Primary Poster */}
          <section className="py-20 md:py-24">
            <div className="w-full px-4 md:px-8 lg:px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                {/* Left column: Text sections - 50% width */}
                <div className="space-y-16">
                  {/* Process Section */}
                  <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">Design Process</h2>
                    {project.process.description ? (
                      <p className="font-sans text-muted-foreground leading-relaxed">
                        {project.process.description}
                      </p>
                    ) : (
                      <ul className="space-y-3">
                        {project.process.steps?.map((step, index) => (
                          <li key={index} className="font-sans text-muted-foreground leading-relaxed">
                            {step}
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.section>
                </div>

                {/* Right column: Primary Poster - 50% width */}
                <motion.section
                  className="lg:sticky lg:top-32"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <motion.div
                    style={{ y: mainPosterY }}
                    className="inline-block parallax-container"
                  >
                    <motion.img
                      src={mainPoster}
                      alt="Primary conference poster"
                      className="w-auto h-auto max-w-full block object-contain"
                      loading="lazy"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="font-sans text-sm text-muted-foreground mt-6 text-center"
                  >
                    Primary conference poster
                  </motion.p>
                </motion.section>
              </div>
            </div>
          </section>

          {/* Moodboard Section - Full Width */}
          <section className="py-20 md:py-24 w-full">
            <div className="w-full px-0">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center px-4 md:px-8 lg:px-12"
              >
                Moodboard
              </motion.h2>
              <div className="flex flex-row justify-center items-center gap-2 md:gap-3 w-full">
                {moodboardImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-1 flex justify-center items-center"
                    whileHover={{ scale: 1.02, y: -4 }}
                  >
                    <motion.img
                      src={image}
                      alt={`Moodboard image ${index + 1}`}
                      className="w-auto h-auto max-w-full block object-contain"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Explore Minimalist Style Section */}
          <section className="py-20 md:py-24">
            <div className="w-full px-4 md:px-8 lg:px-12">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center"
              >
                Explore Minimalist Style
              </motion.h2>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 w-full">
                {minimalistPosters.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                    whileHover={{ scale: 1.02, y: -4 }}
                  >
                    <motion.img
                      src={image}
                      alt={`Minimalist style poster ${index + 1}`}
                      className="w-auto h-auto max-w-full block object-contain"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Explore Futurist Style Section */}
          <section className="py-20 md:py-24">
            <div className="w-full px-4 md:px-8 lg:px-12">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center"
              >
                Explore Futurist Style
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 w-full">
                {futuristPosters.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                    whileHover={{ scale: 1.02, y: -4 }}
                  >
                    <motion.img
                      src={image}
                      alt={`Futurist style poster ${index + 1}`}
                      className="w-auto h-auto max-w-full block object-contain"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Project navigation */}
          <nav className="mt-20 border-t border-border pt-12">
            <h3 className="font-sans text-sm text-muted-foreground mb-6 text-center">
              More Projects
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {getAllProjectSummaries().map((projectSummary) => (
                <Link
                  key={projectSummary.id}
                  to={`/project/${projectSummary.id}`}
                  className={`font-sans text-sm px-4 py-2 rounded-full border transition-colors ${
                    "rewording-poster-design" === projectSummary.id
                      ? "bg-foreground text-background border-foreground"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                  }`}
                >
                  {projectSummary.title}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RewordingProject;
