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
import poster13 from "@/assets/projects/rewording-poster-design/rewording-poster-013.png";
import poster14 from "@/assets/projects/rewording-poster-design/rewording-poster-14.png";

// Primary poster image
const mainPoster = primaryPoster;

// All poster variations (excluding primary poster which is displayed separately)
const allPosters = [
  poster1,
  poster2,
  poster3,
  poster4,
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
      year: "2025",
    };
  };

  return (
    <div ref={containerRef} className="relative">
      <SEO
        title="REWORLDING | Sicong Chen"
        description={project.overview}
        type="article"
      />
      <Header />

      <main id="main-content" className="pt-32 pb-24">
        <div className="container-wide">
          {/* Back link */}
          <Link
            to="/"
            className="inline-block mb-8 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back
          </Link>

          {/* Project header */}
          <div className="mb-8">
            <h1 className="font-serif text-5xl lg:text-6xl font-medium mb-4">
              {project.title}
            </h1>
            <p className="font-sans text-muted-foreground text-base">
              {project.type} | {project.date}
            </p>
          </div>

          {/* Overview Section */}
          <ProjectOverview
            description={project.overview}
            details={extractProjectInfo()}
          />

          {/* Two-column layout: Text sections + Primary Poster */}
          <section className="py-20 md:py-32">
            <div className="container-wide max-w-[1000px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                {/* Left column: Text sections - 50% width */}
                <div className="space-y-16">
                  {/* Process Section */}
                  <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">{project.process.title}</h2>
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
                    className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-card shadow-2xl parallax-container flex items-center justify-center"
                  >
                    <motion.img
                      src={mainPoster}
                      alt="Primary conference poster"
                      className="w-full h-full object-contain"
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

          {/* Poster Collection Grid - All posters */}
          <ImageGrid
            images={allPosters}
            columns={3}
            title="Design Direction Exploration"
            aspectRatio="aspect-[3/4]"
          />

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
