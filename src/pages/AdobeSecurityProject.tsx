import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ProjectOverview from "@/components/projects/ProjectOverview";
import { getProjectDetail } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslatedProjectDetail } from "@/utils/projectTranslations";

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
const extractProjectInfo = () => {
  const { language } = useLanguage();
  const project = getTranslatedProjectDetail("security-tooling", language);
  
  if (!project) return { tools: "", role: "", year: "", team: "", type: "" };

  // Extract tools from results.metrics
  let tools = "";
  const toolsMetric = project.results.metrics.find(m => 
    m.label.toLowerCase() === "tools" || m.label.toLowerCase().includes("tool")
  );
  if (toolsMetric) {
    tools = toolsMetric.value;
  } else {
    tools = "Figma, Design Tools";
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

  // Extract year from metrics or use project.date
  let year = "";
  const yearMetric = project.results.metrics.find(m => 
    m.label.toLowerCase() === "year" || m.label.toLowerCase().includes("year")
  );
  if (yearMetric) {
    year = yearMetric.value;
  } else if (project.date) {
    year = project.date;
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

const AdobeSecurityProject = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const project = getTranslatedProjectDetail("security-tooling", language);

  if (!project) {
    return (
      <>
        <Header />
        <main className="pt-32 pb-32 md:pb-40">
          <div className="w-full px-4 md:px-8 lg:px-12">
            <h1 className="font-serif text-4xl mb-4">Project not found</h1>
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              ← Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <div ref={containerRef} className="relative">
      <SEO
        title="Adobe Firewall Rule Management | Sicong Chen"
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
                details={extractProjectInfo()}
              />
            </div>
          </section>

          {/* Problem */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">{project.problem.title}</h2>
            <p className="font-sans text-muted-foreground leading-relaxed w-full">
              {parseMarkdown(project.problem.description)}
            </p>
          </section>

          {/* Process */}
          {project.process && (
            <section className="mb-16">
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
          )}

          {/* Approach */}
          {project.approach && (
            <section className="mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">{project.approach.title}</h2>
              <p className="font-sans text-muted-foreground leading-relaxed w-full">
                {parseMarkdown(project.approach.description)}
              </p>
            </section>
          )}

          {/* Results */}
          {project.results && (
            <section className="mb-16">
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
      </main>

      <Footer />
    </div>
  );
};

export default AdobeSecurityProject;
