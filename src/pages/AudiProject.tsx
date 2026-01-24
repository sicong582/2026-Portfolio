import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ProjectOverview from "@/components/projects/ProjectOverview";
import ImageGrid from "@/components/projects/ImageGrid";
import { getProjectDetail, getAllProjectSummaries } from "@/data/projects";

// Import all project assets from audi folder
import audi1 from "@/assets/projects/audi/audi-01.png";
import audi2 from "@/assets/projects/audi/audi-02.jpg";
import audi3 from "@/assets/projects/audi/audi-03.jpg";
import audi4 from "@/assets/projects/audi/audi-04.jpg";
import audi5 from "@/assets/projects/audi/audi-05.jpg";
import audi6 from "@/assets/projects/audi/audi-06.jpg";
import audi7 from "@/assets/projects/audi/audi-07.jpg";

// Primary hero image
const mainImage = audi1;

// All images (excluding primary which is displayed separately)
const allImages = [
  audi2,
  audi3,
  audi4,
  audi5,
  audi6,
  audi7,
];

const AudiProject = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const project = getProjectDetail("audi");
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax transforms for different sections
  const mainImageY = useTransform(scrollYProgress, [0.2, 0.5], [0, -50]);
  const imageGridY = useTransform(scrollYProgress, [0.4, 0.7], [0, -30]);

  if (!project) return null;

  // Extract project info for ProjectOverview
  const extractProjectInfo = () => {
    const clientMetric = project.results.metrics.find(m => m.label === "Client");
    const toolsMetric = project.results.metrics.find(m => m.label === "Tools");
    
    return {
      client: clientMetric?.value || "Audi",
      tools: toolsMetric?.value || "Figma, Sketch, Adobe Creative Suite",
      role: project.role || "Product Designer",
      year: project.date || "2018",
    };
  };

  return (
    <div ref={containerRef} className="relative">
      <SEO
        title="Audi.com | Sicong Chen"
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

          {/* Two-column layout: Text sections + Primary Image */}
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

                {/* Right column: Primary Image - 50% width */}
                <motion.section
                  className="lg:sticky lg:top-32"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <motion.div
                    style={{ y: mainImageY }}
                    className="w-full rounded-2xl overflow-hidden bg-card shadow-2xl parallax-container flex items-center justify-center"
                  >
                    <motion.img
                      src={mainImage}
                      alt="Audi.com primary showcase"
                      className="w-full h-auto object-contain"
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
                    Website and iOS app redesign
                  </motion.p>
                </motion.section>
              </div>
            </div>
          </section>

          {/* Image Collection Grid */}
          <ImageGrid
            images={allImages}
            columns={2}
            title="Design Exploration"
            aspectRatio=""
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
                    "audi" === projectSummary.id
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

export default AudiProject;
