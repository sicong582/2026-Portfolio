import { Link } from "react-router-dom";
import { useRef } from "react";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ProjectOverview from "@/components/projects/ProjectOverview";
import { getProjectDetail } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslatedProjectDetail, getTranslatedProjectSummaries } from "@/utils/projectTranslations";

// Import Adobe Security project images
// @ts-ignore - PNG files with uppercase extension
import adobe1 from "@/assets/projects/security-tooling/Adobe-1.PNG";
// @ts-ignore - PNG files with uppercase extension
import adobe2 from "@/assets/projects/security-tooling/Adobe-2.PNG";
import adobe3 from "@/assets/projects/security-tooling/Adobe-3.jpg";
import adobe4 from "@/assets/projects/security-tooling/Adobe-4.jpg";
import adobe5 from "@/assets/projects/security-tooling/Adobe-5.jpg";
import adobe6 from "@/assets/projects/security-tooling/Adobe-6.gif";
import adobe7 from "@/assets/projects/security-tooling/Adobe-7.gif";
import adobe8 from "@/assets/projects/security-tooling/Adobe-8.png";
import adobe9 from "@/assets/projects/security-tooling/Adobe-9.png";
import adobe10 from "@/assets/projects/security-tooling/Adobe-10.png";

// Helper function to parse markdown (bold **text**, italic *text*, bullets, blockquotes)
const parseMarkdown = (text: string) => {
  // Split by double newlines to handle paragraphs
  const paragraphs = text.split(/\n\n/);
  
  return paragraphs.map((paragraph, pIndex) => {
    // Check if it's an h3 heading
    if (paragraph.trim().startsWith('###')) {
      const headingText = paragraph.trim().substring(3).trim();
      return (
        <h3 key={pIndex} className="font-serif text-xl md:text-2xl font-semibold mt-16 mb-4">
          {parseInlineMarkdown(headingText)}
        </h3>
      );
    }
    
    // Check if it's a blockquote (handle multi-line blockquotes)
    if (paragraph.trim().startsWith('>')) {
      const lines = paragraph.split('\n');
      const quoteLines = lines
        .filter(line => line.trim().startsWith('>'))
        .map(line => line.trim().substring(1).trim())
        .filter(line => line.length > 0);
      const quoteText = quoteLines.join(' ');
      return (
        <blockquote key={pIndex} className="border-l-4 border-foreground/20 pl-6 my-6 italic text-muted-foreground">
          {parseInlineMarkdown(quoteText)}
        </blockquote>
      );
    }
    
    // Check if it's a bullet list
    if (paragraph.includes('\n-') || paragraph.trim().startsWith('-')) {
      const lines = paragraph.split('\n');
      const items: Array<{ bullet: string; description?: string }> = [];
      let currentBullet: string | null = null;
      let currentDescription: string[] = [];
      let firstBulletIndex = -1;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();
        
        if (trimmed.startsWith('-')) {
          if (firstBulletIndex === -1) {
            firstBulletIndex = i;
          }
          // Save previous bullet if exists
          if (currentBullet !== null) {
            items.push({
              bullet: currentBullet,
              description: currentDescription.length > 0 ? currentDescription.join(' ') : undefined
            });
          }
          // Start new bullet
          currentBullet = trimmed;
          currentDescription = [];
        } else if (trimmed && currentBullet !== null) {
          // This is description text for the current bullet
          currentDescription.push(trimmed);
        }
      }
      
      // Don't forget the last bullet
      if (currentBullet !== null) {
        items.push({
          bullet: currentBullet,
          description: currentDescription.length > 0 ? currentDescription.join(' ') : undefined
        });
      }
      
      if (items.length > 0) {
        const beforeList = firstBulletIndex > 0 
          ? lines.slice(0, firstBulletIndex).join('\n').trim()
          : '';
        
        return (
          <div key={pIndex} className="mb-6">
            {beforeList && <p className="mb-4">{parseInlineMarkdown(beforeList)}</p>}
            <ul className="list-disc space-y-4 ml-4">
              {items.map((item, i) => (
                <li key={i} className="text-muted-foreground">
                  <div>
                    <div>{parseInlineMarkdown(item.bullet.replace(/^-\s*/, ''))}</div>
                    {item.description && (
                      <div className="ml-6 mt-2 text-muted-foreground">
                        {parseInlineMarkdown(item.description)}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      }
    }
    
    // Regular paragraph
    return (
      <p key={pIndex} className="mb-6">
        {parseInlineMarkdown(paragraph)}
      </p>
    );
  });
};

// Helper function to parse inline markdown (bold and italic)
const parseInlineMarkdown = (text: string): React.ReactNode[] => {
  // First handle bold (**text**)
  const stringParts = text.split(/(\*\*.*?\*\*)/g);
  const parts = stringParts.flatMap((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      // Then handle italic within bold
      const boldText = part.slice(2, -2);
      return parseItalic(boldText, true, index);
    }
    return parseItalic(part, false, index);
  });
  
  return parts;
};

// Helper function to parse italic (*text*)
const parseItalic = (text: string, isBold: boolean, baseIndex: number) => {
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
      const italicText = part.slice(1, -1);
      if (isBold) {
        return <strong key={`${baseIndex}-${index}`}><em>{italicText}</em></strong>;
      }
      return <em key={`${baseIndex}-${index}`}>{italicText}</em>;
    }
    if (isBold && part) {
      return <strong key={`${baseIndex}-${index}`}>{part}</strong>;
    }
    return <span key={`${baseIndex}-${index}`}>{part}</span>;
  });
};

const AdobeSecurityProject = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const project = getTranslatedProjectDetail("security-tooling", language);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  if (!project) return null;

  // Extract project info for ProjectOverview
  const extractProjectInfo = () => {
    const companyMetric = project.results.metrics.find(m => m.label === "COMPANY");
    const toolsMetric = project.results.metrics.find(m => m.label === "TOOLS");
    const roleMetric = project.results.metrics.find(m => m.label === "ROLE");
    const timelineMetric = project.results.metrics.find(m => m.label === "TIMELINE");
    const yearMetric = project.results.metrics.find(m => m.label === "YEAR");
    const teamMetric = project.results.metrics.find(m => m.label === "TEAM");
    
    return {
      client: companyMetric?.value || "Adobe",
      tools: toolsMetric?.value || "Sketch, HTML, CSS and Javascript",
      role: roleMetric?.value || project.role || "Experience Designer + Front-End Developer",
      type: project.type || "UX Design",
      year: yearMetric?.value || project.date || "2018",
      team: teamMetric?.value || project.team || "Security Engineers, Product Managers",
    };
  };

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
          <div className="mb-8 px-4 md:px-8 lg:px-12">
            <h1 className="font-serif text-5xl lg:text-6xl font-medium pl-0 ml-0">
              {project.title}
            </h1>
          </div>

          {/* Overview Section */}
          <section className="pt-8 pb-20 md:pt-12 md:pb-24">
            <div className="w-full px-4 md:px-8 lg:px-12">
              <ProjectOverview
                description={project.overview}
                details={extractProjectInfo()}
              />
            </div>
          </section>

          {/* Context Section */}
          {(project as any).context && (
            <section className="py-24 md:py-24">
              <div className="w-full px-4 md:px-8 lg:px-12">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full"
                >
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">{(project as any).context.title}</h2>
                  <div className="font-sans text-muted-foreground leading-relaxed mb-12">
                    {parseMarkdown((project as any).context.description)}
                  </div>
                  {/* Adobe-1 and Adobe-2 images under Context section */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="w-full mt-12 space-y-8"
                  >
                    <motion.img
                      src={adobe1}
                      alt={`${project.title} - Context`}
                      className="w-auto h-auto max-w-full block object-contain"
                      loading="lazy"
                      whileHover={{ scale: 1.01 }}
                    />
                    <motion.img
                      src={adobe2}
                      alt={`${project.title} - Context`}
                      className="w-auto h-auto max-w-full block object-contain"
                      loading="lazy"
                      whileHover={{ scale: 1.01 }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </section>
          )}

          {/* Reframing the Problem Around Decisions Section */}
          <section className="py-24 md:py-24">
            <div className="w-full px-4 md:px-8 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full"
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">{project.process.title}</h2>
                <div className="font-sans text-muted-foreground leading-relaxed">
                  {parseMarkdown(project.process.description || "")}
                </div>
              </motion.div>
            </div>
          </section>

          {/* The Reality of Users' Work Section */}
          <section className="py-24 md:py-24">
            <div className="w-full px-4 md:px-8 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full"
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">{project.problem.title}</h2>
                <div className="font-sans text-muted-foreground leading-relaxed mb-12">
                  {parseMarkdown(project.problem.description)}
                </div>
                {/* Adobe-3 image under The Reality of Users' Work section */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  className="w-full mt-12"
                >
                  <motion.img
                    src={adobe3}
                    alt={`${project.title} - The Reality of Users' Work`}
                    className="w-auto h-auto max-w-full block object-contain"
                    loading="lazy"
                    whileHover={{ scale: 1.01 }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Key Design Decisions Section */}
          {project.approach && (
            <section className="py-24 md:py-24">
              <div className="w-full px-4 md:px-8 lg:px-12">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full"
                >
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">{project.approach.title}</h2>
                  {/* Adobe-4 image under Key Design Decisions heading */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="w-full mb-12"
                  >
                    <motion.img
                      src={adobe4}
                      alt={`${project.title} - Key Design Decisions`}
                      className="w-auto h-auto max-w-full block object-contain"
                      loading="lazy"
                      whileHover={{ scale: 1.01 }}
                    />
                  </motion.div>
                  <div className="font-sans text-muted-foreground leading-relaxed mb-12">
                    {(() => {
                      const paragraphs = project.approach.description.split(/\n\n/);
                      const result: React.ReactNode[] = [];
                      let insertedDashboardImage = false;
                      let insertedSearchImages = false;
                      let insertedTrackingImages = false;
                      let dashboardHeadingIndex = -1;
                      let searchHeadingIndex = -1;
                      let trackingHeadingIndex = -1;
                      
                      paragraphs.forEach((paragraph, index) => {
                        // Check if this is the "01. Decision-Focused Dashboard" heading
                        if (paragraph.trim().startsWith('### 01. Decision-Focused Dashboard')) {
                          dashboardHeadingIndex = index;
                          const parsed = parseMarkdown(paragraph);
                          result.push(...(Array.isArray(parsed) ? parsed : [parsed]));
                        } else if (dashboardHeadingIndex !== -1 && index === dashboardHeadingIndex + 1 && !insertedDashboardImage) {
                          // This is the paragraph right after the dashboard heading - insert image after it
                          const parsed = parseMarkdown(paragraph);
                          result.push(...(Array.isArray(parsed) ? parsed : [parsed]));
                          // Insert Adobe-5 image after the dashboard description
                          result.push(
                            <motion.div
                              key={`image-dashboard`}
                              initial={{ opacity: 0, y: 40 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: "-100px" }}
                              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                              className="w-full mt-8 mb-8"
                            >
                              <motion.img
                                src={adobe5}
                                alt={`${project.title} - Decision-Focused Dashboard`}
                                className="w-auto h-auto max-w-full block object-contain"
                                loading="lazy"
                                whileHover={{ scale: 1.01 }}
                              />
                            </motion.div>
                          );
                          insertedDashboardImage = true;
                        } else if (paragraph.trim().startsWith('### 02. Flexible Firewall Rule Search')) {
                          // Check if this is the "02. Flexible Firewall Rule Search" heading
                          searchHeadingIndex = index;
                          const parsed = parseMarkdown(paragraph);
                          result.push(...(Array.isArray(parsed) ? parsed : [parsed]));
                        } else if (searchHeadingIndex !== -1 && index === searchHeadingIndex + 1 && !insertedSearchImages) {
                          // This is the paragraph right after the search heading - insert images after it
                          const parsed = parseMarkdown(paragraph);
                          result.push(...(Array.isArray(parsed) ? parsed : [parsed]));
                          // Insert Adobe-6 and Adobe-7 images after the search description
                          result.push(
                            <motion.div
                              key={`image-search`}
                              initial={{ opacity: 0, y: 40 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: "-100px" }}
                              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                              className="w-full mt-8 mb-8 space-y-8"
                            >
                              <motion.img
                                src={adobe6}
                                alt={`${project.title} - Flexible Firewall Rule Search`}
                                className="w-auto h-auto max-w-full block object-contain"
                                loading="lazy"
                                whileHover={{ scale: 1.01 }}
                              />
                              <motion.img
                                src={adobe7}
                                alt={`${project.title} - Flexible Firewall Rule Search`}
                                className="w-auto h-auto max-w-full block object-contain"
                                loading="lazy"
                                whileHover={{ scale: 1.01 }}
                              />
                            </motion.div>
                          );
                          insertedSearchImages = true;
                        } else if (paragraph.trim().startsWith('### 03. Configuration Tracking')) {
                          // Check if this is the "03. Configuration Tracking" heading
                          trackingHeadingIndex = index;
                          const parsed = parseMarkdown(paragraph);
                          result.push(...(Array.isArray(parsed) ? parsed : [parsed]));
                        } else if (trackingHeadingIndex !== -1 && index === trackingHeadingIndex + 1 && !insertedTrackingImages) {
                          // This is the paragraph right after the tracking heading - insert images after it
                          const parsed = parseMarkdown(paragraph);
                          result.push(...(Array.isArray(parsed) ? parsed : [parsed]));
                          // Insert Adobe-8 and Adobe-9 images after the tracking description
                          result.push(
                            <motion.div
                              key={`image-tracking`}
                              initial={{ opacity: 0, y: 40 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: "-100px" }}
                              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                              className="w-full mt-8 mb-8 grid grid-cols-1 md:grid-cols-2 gap-8"
                            >
                              <motion.img
                                src={adobe8}
                                alt={`${project.title} - Configuration Tracking`}
                                className="w-auto h-auto max-w-full block object-contain"
                                loading="lazy"
                                whileHover={{ scale: 1.01 }}
                              />
                              <motion.img
                                src={adobe9}
                                alt={`${project.title} - Configuration Tracking`}
                                className="w-auto h-auto max-w-full block object-contain"
                                loading="lazy"
                                whileHover={{ scale: 1.01 }}
                              />
                            </motion.div>
                          );
                          insertedTrackingImages = true;
                        } else {
                          const parsed = parseMarkdown(paragraph);
                          result.push(...(Array.isArray(parsed) ? parsed : [parsed]));
                        }
                      });
                      
                      return result;
                    })()}
                  </div>
                </motion.div>
              </div>
            </section>
          )}

          {/* Pushing Beyond My Comfort Zone Section */}
          {(project as any).comfortZone && (
            <section className="py-24 md:py-24">
              <div className="w-full px-4 md:px-8 lg:px-12">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full"
                >
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">{(project as any).comfortZone.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="font-sans text-muted-foreground leading-relaxed">
                      {parseMarkdown((project as any).comfortZone.description)}
                    </div>
                    {/* Adobe-10 image next to Pushing Beyond My Comfort Zone text */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                      className="w-full"
                    >
                      <motion.img
                        src={adobe10}
                        alt={`${project.title} - Pushing Beyond My Comfort Zone`}
                        className="w-auto h-auto max-w-full block object-contain"
                        loading="lazy"
                        whileHover={{ scale: 1.01 }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </section>
          )}

          {/* Results Section */}
          {project.results && (
            <section className="py-24 md:py-24">
              <div className="w-full px-4 md:px-8 lg:px-12">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full"
                >
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">{project.results.title}</h2>
                  {project.results.metrics && project.results.metrics.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                      {project.results.metrics
                        .filter(m => !["COMPANY", "TOOLS", "ROLE", "TIMELINE", "YEAR", "TEAM"].includes(m.label))
                        .map((metric, index) => (
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
                    <div className="font-sans text-muted-foreground leading-relaxed">
                      {project.results.description.split('\n\n').map((paragraph, index) => {
                        // Check if this paragraph contains a bullet list
                        if (paragraph.includes('\n-') || paragraph.trim().startsWith('-')) {
                          const lines = paragraph.split('\n');
                          const beforeList: string[] = [];
                          const bulletItems: string[] = [];
                          let foundFirstBullet = false;
                          
                          lines.forEach(line => {
                            const trimmed = line.trim();
                            if (trimmed.startsWith('-')) {
                              foundFirstBullet = true;
                              bulletItems.push(trimmed);
                            } else if (trimmed && !foundFirstBullet) {
                              beforeList.push(trimmed);
                            }
                          });
                          
                          return (
                            <div key={index} className="mb-6">
                              {beforeList.length > 0 && (
                                <p className="mb-4">{parseInlineMarkdown(beforeList.join(' '))}</p>
                              )}
                              {bulletItems.length > 0 && (
                                <ul className="list-disc space-y-2 ml-6 mb-6 list-outside">
                                  {bulletItems.map((item, itemIndex) => (
                                    <li key={itemIndex} className="text-muted-foreground pl-2">
                                      {parseInlineMarkdown(item.replace(/^-\s*/, ''))}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          );
                        }
                        return (
                          <p key={index} className="mb-6">
                            {parseMarkdown(paragraph)}
                          </p>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              </div>
            </section>
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
                    "security-tooling" === projectSummary.id
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

export default AdobeSecurityProject;
