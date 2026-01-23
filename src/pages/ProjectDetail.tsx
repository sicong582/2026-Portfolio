import { useParams, Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import RewordingProject from "./RewordingProject";
import { getProjectDetail, getAllProjectSummaries, type MediaItem } from "@/data/projects";

// Parallax Media Component
const ParallaxMedia = ({ 
  item, 
  alt, 
  className = "" 
}: { 
  item: MediaItem; 
  alt: string; 
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div 
      ref={ref}
      className={`bg-card rounded-2xl overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
    >
      <motion.div style={{ y, scale }} className="w-full h-full">
        {item.type === "video" ? (
          <video src={item.src} controls className="w-full h-auto" playsInline preload="metadata" />
        ) : (
          <img src={item.src} alt={alt} className="w-full h-auto" loading="lazy" />
        )}
      </motion.div>
    </motion.div>
  );
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Use custom visual showcase page for REWORLDING project
  if (id === "rewording-poster-design") {
    return <RewordingProject />;
  }

  const project = id ? getProjectDetail(id) : null;
  
  // Use new side-by-side layout only for project-7 (AI Exploration)
  const useAlternatingLayout = id === "project-7";

  if (!project) {
    return (
      <>
        <Header />
        <main className="pt-32 pb-24 container-wide">
          <h1 className="font-serif text-4xl mb-4">Project not found</h1>
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Home
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO 
        title={`${project.title} | Sicong Chen`}
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
          <div className="mb-16">
            <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-4">
              {project.title}
            </h1>
            <p className="font-sans text-muted-foreground mb-6">
              {project.type} | {project.date}
            </p>
            <div className="flex gap-8">
              <div>
                <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider mb-1">Role</p>
                <p className="font-sans text-sm">{project.role}</p>
              </div>
              <div>
                <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider mb-1">Duration</p>
                <p className="font-sans text-sm">{project.duration}</p>
              </div>
              <div>
                <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider mb-1">Team</p>
                <p className="font-sans text-sm">{project.team}</p>
              </div>
            </div>
          </div>

          {useAlternatingLayout ? (
            /* Side-by-side layout for AI Exploration: text left, media right */
            <div className="space-y-24">
              {/* High-level introduction */}
              <motion.div 
                className="max-w-3xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <p className="font-serif text-2xl lg:text-3xl leading-relaxed text-foreground">
                  This project is an ongoing creative journey exploring the intersection of artificial intelligence and visual design. Through experimentation with Midjourney and Nano Banana, I push the boundaries of what's possible when human creativity meets machine learning.
                </p>
              </motion.div>

              {/* Overview with first media */}
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div>
                  <h2 className="font-serif text-2xl font-medium mb-4">Overview</h2>
                  <p className="font-sans text-muted-foreground leading-relaxed">
                    {project.overview}
                  </p>
                </div>
                {project.media[0] && (
                  <ParallaxMedia item={project.media[0]} alt={`${project.title} - 1`} />
                )}
              </motion.div>

              {/* Problem with second media */}
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div>
                  <h2 className="font-serif text-2xl font-medium mb-4">{project.problem.title}</h2>
                  <p className="font-sans text-muted-foreground leading-relaxed">
                    {project.problem.description}
                  </p>
                </div>
                {project.media[1] && (
                  <ParallaxMedia item={project.media[1]} alt={`${project.title} - 2`} />
                )}
              </motion.div>

              {/* Approach with third media */}
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div>
                  <h2 className="font-serif text-2xl font-medium mb-4">{project.approach.title}</h2>
                  <p className="font-sans text-muted-foreground leading-relaxed">
                    {project.approach.description}
                  </p>
                </div>
                {project.media[2] && (
                  <ParallaxMedia item={project.media[2]} alt={`${project.title} - 3`} />
                )}
              </motion.div>

              {/* Results with fourth media */}
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div>
                  <h2 className="font-serif text-2xl font-medium mb-4">{project.results.title}</h2>
                  {project.results.metrics.length > 0 && (
                    <div className="flex gap-6 mb-4">
                      {project.results.metrics.map((metric, index) => (
                        <div key={index}>
                          <p className="font-serif text-2xl font-medium">{metric.value}</p>
                          <p className="font-sans text-xs text-muted-foreground">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <p className="font-sans text-muted-foreground leading-relaxed">
                    {project.results.description}
                  </p>
                </div>
                {project.media[3] && (
                  <ParallaxMedia item={project.media[3]} alt={`${project.title} - 4`} />
                )}
              </motion.div>

              {/* Additional media items */}
              {project.media.length > 4 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.media.slice(4).map((item, index) => (
                    <ParallaxMedia 
                      key={index} 
                      item={item} 
                      alt={`${project.title} - ${index + 5}`} 
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Original stacked layout for other projects */
            <div className="space-y-16">
              {/* Overview */}
              <section>
                <h2 className="font-serif text-2xl font-medium mb-4">Overview</h2>
                <p className="font-sans text-muted-foreground leading-relaxed max-w-3xl">
                  {project.overview}
                </p>
              </section>

              {/* Problem */}
              <section>
                <h2 className="font-serif text-2xl font-medium mb-4">{project.problem.title}</h2>
                <p className="font-sans text-muted-foreground leading-relaxed max-w-3xl">
                  {project.problem.description}
                </p>
              </section>

              {/* Process */}
              <section>
                <h2 className="font-serif text-2xl font-medium mb-4">{project.process.title}</h2>
                <ul className="space-y-3 max-w-3xl">
                  {project.process.steps.map((step, index) => (
                    <li key={index} className="font-sans text-muted-foreground leading-relaxed">
                      {step}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Approach */}
              <section>
                <h2 className="font-serif text-2xl font-medium mb-4">{project.approach.title}</h2>
                <p className="font-sans text-muted-foreground leading-relaxed max-w-3xl">
                  {project.approach.description}
                </p>
              </section>

              {/* Results */}
              <section>
                <h2 className="font-serif text-2xl font-medium mb-4">{project.results.title}</h2>
                {project.results.metrics.length > 0 && (
                  <div className="flex gap-8 mb-6">
                    {project.results.metrics.map((metric, index) => (
                      <div key={index}>
                        <p className="font-serif text-3xl font-medium">{metric.value}</p>
                        <p className="font-sans text-sm text-muted-foreground">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                )}
                <p className="font-sans text-muted-foreground leading-relaxed max-w-3xl">
                  {project.results.description}
                </p>
              </section>

              {/* Media Gallery */}
              <section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.media.map((item, index) => (
                    <div key={index} className="bg-card rounded-2xl overflow-hidden">
                      {item.type === "video" ? (
                        <video src={item.src} controls className="w-full h-auto" playsInline preload="metadata" />
                      ) : (
                        <img src={item.src} alt={`${project.title} - ${index + 1}`} className="w-full h-auto" loading="lazy" />
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

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
                    id === projectSummary.id
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
    </>
  );
};

export default ProjectDetail;