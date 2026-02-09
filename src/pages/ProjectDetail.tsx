import { useParams, Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ProjectOverview from "@/components/projects/ProjectOverview";
import PasswordProtection from "@/components/PasswordProtection";
import RewordingProject from "./RewordingProject";
import AudiProject from "./AudiProject";
import PayPalProject from "./PayPalProject";
import AdobeSecurityProject from "./AdobeSecurityProject";
import FulfillmentOperationProject from "./FulfillmentOperationProject";
import { getProjectDetail, getAllProjectSummaries, type MediaItem } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslatedProjectDetail, getTranslatedProjectSummaries } from "@/utils/projectTranslations";
import { PROTECTED_PROJECTS } from "@/components/PasswordProtection";

// Helper function to parse markdown bold text (**text**)
const parseMarkdown = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return <span key={index}>{part}</span>;
  });
};

// Helper function to extract tools, role, and other details from project data
const extractProjectInfo = (project: ReturnType<typeof getProjectDetail>) => {
  if (!project) return { tools: "", role: "" };

  // Extract tools from results.metrics
  let tools = "";
  const toolsMetric = project.results.metrics.find(m => 
    m.label.toLowerCase() === "tools" || m.label.toLowerCase().includes("tool")
  );
  if (toolsMetric) {
    tools = toolsMetric.value;
  } else {
    // Try to infer from approach description or use common defaults
    const approachText = project.approach.description.toLowerCase();
    const overviewText = project.overview.toLowerCase();
    const combinedText = approachText + " " + overviewText;
    
    if (combinedText.includes("midjourney") || combinedText.includes("banana nano")) {
      tools = "Midjourney, Figma, Banana Nano";
    } else if (combinedText.includes("react") && combinedText.includes("component")) {
      tools = "Figma, React, TypeScript";
    } else if (combinedText.includes("figma")) {
      tools = "Figma, Design Tools";
    } else {
      tools = "Figma, Design Tools";
    }
  }

  // Extract role from metrics or use project.role
  let role = "";
  const roleMetric = project.results.metrics.find(m => 
    m.label.toLowerCase() === "role" || m.label.toLowerCase().includes("role")
  );
  if (roleMetric) {
    role = roleMetric.value;
  } else {
    role = project.role || "Designer";
  }

  // Extract year from metrics
  let year = "";
  const yearMetric = project.results.metrics.find(m => 
    m.label.toLowerCase() === "year" || m.label.toLowerCase().includes("year")
  );
  if (yearMetric) {
    year = yearMetric.value;
  }

  // Extract team from metrics or use project.team
  let team = "";
  const teamMetric = project.results.metrics.find(m => 
    m.label.toLowerCase() === "team" || m.label.toLowerCase().includes("team")
  );
  if (teamMetric) {
    team = teamMetric.value;
  } else if (project.team) {
    team = project.team;
  }

  // Extract type from project
  const type = project.type || "";

  return { tools, role, year, team, type };
};

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
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div 
      ref={ref}
      className={`inline-block ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
    >
      <motion.div style={{ y, scale }} className="w-full h-full">
        {item.type === "video" ? (
          <video src={item.src} controls className="w-auto h-auto max-w-full block" playsInline preload="metadata" />
        ) : (
          <img src={item.src} alt={alt} className="w-auto h-auto max-w-full block object-contain" loading="lazy" />
        )}
      </motion.div>
    </motion.div>
  );
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  
  // Use custom visual showcase page for REWORLDING project
  if (id === "rewording-poster-design") {
    return <RewordingProject />;
  }

  // Use custom visual showcase page for Audi project
  if (id === "audi") {
    return <AudiProject />;
  }

  if (id === "paypal") {
    return <PayPalProject />;
  }

  if (id === "security-tooling") {
    return <AdobeSecurityProject />;
  }

  if (id === "fulfillment-operation-tooling") {
    return <FulfillmentOperationProject />;
  }

  const project = id ? getTranslatedProjectDetail(id, language) : null;
  
  // Use new side-by-side layout only for project-7 (AI Exploration)
  const useAlternatingLayout = id === "project-7";

  // Check if project requires password protection
  const isProtected = id && PROTECTED_PROJECTS.hasOwnProperty(id);

  if (!project) {
    return (
      <>
        <Header />
        <main className="pt-32 pb-32 md:pb-40">
          <div className="w-full px-4 md:px-8 lg:px-12">
            <h1 className="font-serif text-4xl mb-4">{t("project.notFound")}</h1>
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              ← {t("common.back")} {t("nav.home")}
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const projectContent = (
    <>
      <SEO 
        title={`${project.title} | Sicong Chen`}
        description={project.overview}
        type="article"
      />
      <Header />
      
      <main id="main-content" className="pt-32 pb-32 md:pb-40">
        <div className="w-full px-8 md:px-16 lg:px-24 py-8 md:py-12">
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

          {/* Project Overview Section */}
          <section className="pt-8 pb-20 md:pt-12 md:pb-24">
            <div className="w-full">
              <ProjectOverview
                description={project.overview}
                details={extractProjectInfo(project)}
              />
            </div>
          </section>

          {useAlternatingLayout ? (
            /* Side-by-side layout for AI Exploration: text left, media right */
            <div className="space-y-24">
              {/* High-level introduction */}
              <motion.div 
                className="w-full"
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
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">Overview</h2>
                  <p className="font-sans text-muted-foreground leading-relaxed">
                    {parseMarkdown(project.overview)}
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
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">{project.problem.title}</h2>
                  <p className="font-sans text-muted-foreground leading-relaxed">
                    {parseMarkdown(project.problem.description)}
                  </p>
                </div>
                {project.media[1] && (
                  <ParallaxMedia item={project.media[1]} alt={`${project.title} - 2`} />
                )}
              </motion.div>

              {/* Additional media items */}
              {project.media.length > 4 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
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
              {/* Problem */}
              <section>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">{project.problem.title}</h2>
                  <p className="font-sans text-muted-foreground leading-relaxed w-full">
                  {parseMarkdown(project.problem.description)}
                </p>
              </section>

              {/* Process */}
              <section>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">{project.process.title}</h2>
                {project.process.description ? (
                  <p className="font-sans text-muted-foreground leading-relaxed w-full">
                    {parseMarkdown(project.process.description)}
                  </p>
                ) : (
                  <ul className="space-y-3 w-full">
                    {project.process.steps?.map((step, index) => (
                      <li key={index} className="font-sans text-muted-foreground leading-relaxed">
                        {step}
                      </li>
                    ))}
                  </ul>
                )}
              </section>

              {/* Approach */}
              {project.approach && (
                <section>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">{project.approach.title}</h2>
                  <p className="font-sans text-muted-foreground leading-relaxed w-full">
                    {parseMarkdown(project.approach.description)}
                  </p>
                </section>
              )}

              {/* Results */}
              {project.results && (
                <section>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">{project.results.title}</h2>
                  {project.results.metrics && project.results.metrics.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                      {project.results.metrics.map((metric, index) => (
                        <div key={index} className="glass rounded-2xl p-6">
                          <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-2 font-light">
                            {metric.label}
                          </p>
                          <p className="font-sans text-lg text-foreground font-medium">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                  {project.results.description && (
                    <p className="font-sans text-muted-foreground leading-relaxed w-full">
                      {parseMarkdown(project.results.description)}
                    </p>
                  )}
                </section>
              )}

              {/* Media Gallery */}
              {project.media && project.media.length > 0 && (
                <section>
                  <div className="space-y-4">
                    {project.media.map((item, index) => (
                      <div key={index} className="w-full">
                        {item.type === "video" ? (
                          <video src={item.src} controls className="w-full h-auto block" playsInline preload="metadata" />
                        ) : (
                          <img src={item.src} alt={`${project.title} - ${index + 1}`} className="w-full h-auto block object-contain" loading="lazy" />
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          )}

          {/* Project navigation */}
          <nav className="mt-20 border-t border-border pt-12">
            <h3 className="font-sans text-sm text-muted-foreground mb-6 text-center">
              More Projects
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {getTranslatedProjectSummaries(language).map((projectSummary) => (
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

  // Wrap protected projects with password protection
  if (isProtected && id) {
    return (
      <PasswordProtection projectId={id} projectTitle={project.title}>
        {projectContent}
      </PasswordProtection>
    );
  }

  return projectContent;
};

export default ProjectDetail;