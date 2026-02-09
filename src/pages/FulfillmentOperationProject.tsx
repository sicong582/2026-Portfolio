import { Link } from "react-router-dom";
import { useRef } from "react";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ProjectOverview from "@/components/projects/ProjectOverview";
import PasswordProtection from "@/components/PasswordProtection";
import { getProjectDetail } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslatedProjectSummaries } from "@/utils/projectTranslations";

// Import fulfillment operation tooling project images
import fulfillment1 from "@/assets/projects/fulfillment-operation-tooling/fulfillment-1.avif";
import fulfillment2 from "@/assets/projects/fulfillment-operation-tooling/fulfillment-2.avif";
import fulfillment3 from "@/assets/projects/fulfillment-operation-tooling/fulfillment-3.avif";
import fulfillment4 from "@/assets/projects/fulfillment-operation-tooling/fulfillment-4.avif";
import fulfillment5 from "@/assets/projects/fulfillment-operation-tooling/fulfillment-5.png";
import fulfillment6 from "@/assets/projects/fulfillment-operation-tooling/fulfillment-6.png";
import fulfillment7 from "@/assets/projects/fulfillment-operation-tooling/fulfillment-7.png";
import fulfillment8 from "@/assets/projects/fulfillment-operation-tooling/fulfillment-8.png";
import fulfillment10 from "@/assets/projects/fulfillment-operation-tooling/fulfillment-10.avif";
import fulfillmentPrototype from "@/assets/projects/fulfillment-operation-tooling/fulfillment-protype.gif";

// Helper function to parse markdown (bold **text**, italic *text*, bullets, blockquotes, h3 headings)
const parseMarkdown = (text: string) => {
  // Split by double newlines to handle paragraphs
  const paragraphs = text.split(/\n\n/);
  
  return paragraphs.map((paragraph, pIndex) => {
    const trimmed = paragraph.trim();
    
    // Skip horizontal rules (---)
    if (trimmed === '---' || trimmed.match(/^-{3,}$/)) {
      return null;
    }
    
    // Check if it's an h3 heading
    if (trimmed.startsWith('###')) {
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
          : null;
        
        return (
          <div key={pIndex}>
            {beforeList && (
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                {parseInlineMarkdown(beforeList)}
              </p>
            )}
            <ul className="list-disc list-outside ml-6 space-y-3">
              {items.map((item, itemIndex) => (
                <li key={itemIndex} className="font-sans text-muted-foreground leading-relaxed pl-2">
                  <span>{parseInlineMarkdown(item.bullet.replace(/^-\s*/, ''))}</span>
                  {item.description && (
                    <div className="ml-6 mt-2 font-sans text-muted-foreground leading-relaxed">
                      {parseInlineMarkdown(item.description)}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        );
      }
    }
    
    // Regular paragraph
    if (paragraph.trim()) {
      return (
        <p key={pIndex} className="font-sans text-muted-foreground leading-relaxed mb-4">
          {parseInlineMarkdown(paragraph)}
        </p>
      );
    }
    
    return null;
  }).filter(Boolean);
};

// Helper function to parse inline markdown (bold, italic)
const parseInlineMarkdown = (text: string): React.ReactNode[] => {
  const stringParts: string[] = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
  return stringParts.flatMap((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    } else if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
};

// Inner component that uses scroll - only rendered after authentication
const FulfillmentOperationProjectContent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const project = getProjectDetail("fulfillment-operation-tooling");
  const { language } = useLanguage();
  
  // Use scroll with container ref - ref will be mounted when this component renders
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  if (!project) return null;

  // Extract project info for ProjectOverview
  const extractProjectInfo = () => {
    return {
      client: "Amazon",
      tools: "Figma, User Research, Prototyping",
      role: project.role || "Product Designer & User Researcher",
      type: project.type || "Android App (Internal Tool)",
      year: project.date || "2024",
      team: project.team || "Product Managers, Software Engineers",
    };
  };

  // Split content into sections based on PDF structure
  const coldHandsContent = "Have you ever tried to use your phone while wearing gloves, only to realize it doesn't work? Frustrated, you're forced to remove a glove just to tap the screen.\n\nNow imagine doing that in temperatures as low as **-10°F**. How long could you manage—seconds, maybe minutes?\n\nFor Amazon **warehouse associates**, this isn't hypothetical—it's a daily reality. Many associates spend up to **4 hours per shift** working in freezer areas, repeatedly removing their gloves to operate handheld devices while picking grocery items under extreme conditions.";
  const processContent = project.process.description;
  const approachContent = project.approach?.description || "";
  const resultsContent = project.results.description;

  return (
    <div ref={containerRef} className="relative">
        <SEO
          title="Fulfillment Operation Tooling | Sicong Chen"
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

          {/* Section 1: Cold Hands, Frozen Screens, and Everyday Frustration */}
          <section className="py-24 md:py-24">
            <div className="w-full px-4 md:px-8 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full"
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">1. Cold Hands, Frozen Screens, and Everyday Frustration</h2>
                <div className="font-sans text-muted-foreground leading-relaxed mb-12">
                  {parseMarkdown("Have you ever tried to use your phone while wearing gloves, only to realize it doesn't work? Frustrated, you're forced to remove a glove just to tap the screen.\n\nNow imagine doing that in temperatures as low as **-10°F**. How long could you manage—seconds, maybe minutes?\n\nFor Amazon **warehouse associates**, this isn't hypothetical—it's a daily reality. Many associates spend up to **4 hours per shift** working in freezer areas, repeatedly removing their gloves to operate handheld devices while picking grocery items under extreme conditions.")}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  className="w-full mt-12 mb-12"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <motion.img
                      src={fulfillment1}
                      alt={`${project.title} - Cold Hands, Frozen Screens, and Everyday Frustration 1`}
                      className="w-auto h-auto max-w-full block object-contain"
                      loading="lazy"
                      whileHover={{ scale: 1.02 }}
                    />
                    <motion.img
                      src={fulfillment2}
                      alt={`${project.title} - Cold Hands, Frozen Screens, and Everyday Frustration 2`}
                      className="w-auto h-auto max-w-full block object-contain"
                      loading="lazy"
                      whileHover={{ scale: 1.02 }}
                    />
                    <motion.img
                      src={fulfillment3}
                      alt={`${project.title} - Cold Hands, Frozen Screens, and Everyday Frustration 3`}
                      className="w-auto h-auto max-w-full block object-contain"
                      loading="lazy"
                      whileHover={{ scale: 1.02 }}
                    />
                    <motion.img
                      src={fulfillment4}
                      alt={`${project.title} - Cold Hands, Frozen Screens, and Everyday Frustration 4`}
                      className="w-auto h-auto max-w-full block object-contain"
                      loading="lazy"
                      whileHover={{ scale: 1.02 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Section 2: Working Under Constraint */}
          <section className="py-24 md:py-24">
            <div className="w-full px-4 md:px-8 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full"
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">2. Working Under Constraint</h2>
                <div className="font-sans text-muted-foreground leading-relaxed">
                  {parseMarkdown(processContent.split('### Observing Reality')[0].trim())}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Section 2.1: Observing Reality */}
          <section className="py-24 md:py-24">
            <div className="w-full px-4 md:px-8 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full"
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">2.1 Observing Reality</h2>
                <div className="font-sans text-muted-foreground leading-relaxed mb-12">
                  {(() => {
                    const content = processContent.split('### Observing Reality')[1]?.split('### From Observation')[0] || '';
                    // Remove the h3 heading "### Observing Reality" and any duplicate text
                    let cleanedContent = content.trim();
                    // Remove lines that contain duplicate titles
                    const lines = cleanedContent.split('\n');
                    const filteredLines = lines.filter(line => {
                      const trimmed = line.trim();
                      // Skip lines that are the full heading or partial duplicates
                      if (trimmed.startsWith('###') && trimmed.toLowerCase().includes('observing reality')) {
                        return false;
                      }
                      if (trimmed.toLowerCase() === 'observing reality') {
                        return false;
                      }
                      return true;
                    });
                    cleanedContent = filteredLines.join('\n').trim();
                    // Also remove any remaining heading patterns
                    cleanedContent = cleanedContent.replace(/^###\s*Observing\s*Reality\s*\n*/i, '').trim();
                    cleanedContent = cleanedContent.replace(/^Observing\s*Reality\s*\n*/i, '').trim();
                    return parseMarkdown(cleanedContent);
                  })()}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  className="w-full mt-12"
                >
                  <motion.img
                    src={fulfillment5}
                    alt={`${project.title} - Observing Reality`}
                    className="w-auto h-auto max-w-full block object-contain"
                    loading="lazy"
                    whileHover={{ scale: 1.01 }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Section 2.2: From Observation to Insight */}
          <section className="py-24 md:py-24">
            <div className="w-full px-4 md:px-8 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full"
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">2.2 From Observation to Insight</h2>
                <div className="font-sans text-muted-foreground leading-relaxed">
                  {(() => {
                    const content = processContent.split('### From Observation')[1] || '';
                    // Remove the h3 heading "### From Observation to Insight" and any partial text like "to Insight"
                    let cleanedContent = content.trim();
                    // Remove lines that contain "From Observation to Insight" or just "to Insight"
                    const lines = cleanedContent.split('\n');
                    const filteredLines = lines.filter(line => {
                      const trimmed = line.trim();
                      // Skip lines that are the full heading, partial heading, or just "to Insight"
                      if (trimmed.startsWith('###') && trimmed.toLowerCase().includes('from observation to insight')) {
                        return false;
                      }
                      if (trimmed.toLowerCase() === 'to insight' || trimmed.toLowerCase() === 'to insights') {
                        return false;
                      }
                      return true;
                    });
                    cleanedContent = filteredLines.join('\n').trim();
                    // Also remove any remaining heading patterns
                    cleanedContent = cleanedContent.replace(/^###\s*From\s*Observation\s*to\s*Insight\s*\n*/i, '').trim();
                    cleanedContent = cleanedContent.replace(/^to\s+Insight\s*\n*/i, '').trim();
                    return parseMarkdown(cleanedContent);
                  })()}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Section 3: Designing for the Real World */}
          <section className="py-24 md:py-24">
            <div className="w-full px-4 md:px-8 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full"
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">3. Designing for the Real World</h2>
                <div className="font-sans text-muted-foreground leading-relaxed">
                  {(() => {
                    // Split content at "Letting Scanning Drive the Workflow" to insert images after "From Click to Proceed to Scan and Go"
                    const parts = approachContent.split('### Letting Scanning Drive the Workflow');
                    const firstPart = parts[0];
                    const secondPart = parts[1] ? '### Letting Scanning Drive the Workflow' + parts[1] : '';
                    
                    return (
                      <>
                        {parseMarkdown(firstPart)}
                        <motion.div
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                          className="w-full mt-20 mb-24"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <motion.img
                              src={fulfillment6}
                              alt={`${project.title} - From Click to Proceed to Scan and Go 1`}
                              className="w-auto h-auto max-w-full block object-contain"
                              loading="lazy"
                              whileHover={{ scale: 1.02 }}
                            />
                            <motion.img
                              src={fulfillment7}
                              alt={`${project.title} - From Click to Proceed to Scan and Go 2`}
                              className="w-auto h-auto max-w-full block object-contain"
                              loading="lazy"
                              whileHover={{ scale: 1.02 }}
                            />
                            <motion.img
                              src={fulfillment8}
                              alt={`${project.title} - From Click to Proceed to Scan and Go 3`}
                              className="w-auto h-auto max-w-full block object-contain"
                              loading="lazy"
                              whileHover={{ scale: 1.02 }}
                            />
                          </div>
                        </motion.div>
                        {secondPart && (
                          <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className="w-full mt-24"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                              <div className="font-sans text-muted-foreground leading-relaxed">
                                {parseMarkdown(secondPart)}
                              </div>
                              <motion.img
                                src={fulfillmentPrototype}
                                alt={`${project.title} - Letting Scanning Drive the Workflow`}
                                className="w-auto h-auto max-w-full block object-contain"
                                loading="lazy"
                                whileHover={{ scale: 1.01 }}
                              />
                            </div>
                          </motion.div>
                        )}
                      </>
                    );
                  })()}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Section 4: Proven in the Warehouse */}
          <section className="py-24 md:py-24">
            <div className="w-full px-4 md:px-8 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full"
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">4. Proven in the Warehouse</h2>
                {project.results.metrics && project.results.metrics.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                <div className="font-sans text-muted-foreground leading-relaxed">
                  {parseMarkdown(resultsContent.split('### Scaling Toward')[0].trim())}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Section 5: Scaling Toward a 5-Year Vision */}
          <section className="py-24 md:py-24">
            <div className="w-full px-4 md:px-8 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full"
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">5. Scaling Toward a 5-Year Vision</h2>
                <div className="font-sans text-muted-foreground leading-relaxed">
                  {(() => {
                    const content = resultsContent.split('### Scaling Toward')[1] || '';
                    // Remove the h3 heading "### Scaling Toward a 5-Year Vision" and any partial duplicates
                    let cleanedContent = content.trim();
                    // Remove lines that contain duplicate titles
                    const lines = cleanedContent.split('\n');
                    const filteredLines = lines.filter(line => {
                      const trimmed = line.trim();
                      // Skip lines that are the full heading or partial duplicates
                      if (trimmed.startsWith('###') && trimmed.toLowerCase().includes('scaling toward a 5-year vision')) {
                        return false;
                      }
                      if (trimmed.toLowerCase() === 'scaling toward a 5-year vision' || 
                          trimmed.toLowerCase() === 'a 5-year vision' ||
                          trimmed.toLowerCase() === 'toward a 5-year vision') {
                        return false;
                      }
                      return true;
                    });
                    cleanedContent = filteredLines.join('\n').trim();
                    // Also remove any remaining heading patterns
                    cleanedContent = cleanedContent.replace(/^###\s*Scaling\s*Toward\s*a\s*5-Year\s*Vision\s*\n*/i, '').trim();
                    cleanedContent = cleanedContent.replace(/^Scaling\s*Toward\s*a\s*5-Year\s*Vision\s*\n*/i, '').trim();
                    cleanedContent = cleanedContent.replace(/^a\s*5-Year\s*Vision\s*\n*/i, '').trim();
                    
                    return (
                      <>
                        {parseMarkdown(cleanedContent)}
                        <motion.div
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                          className="w-full mt-12"
                        >
                          <motion.img
                            src={fulfillment10}
                            alt={`${project.title} - Scaling Toward a 5-Year Vision`}
                            className="w-auto h-auto max-w-full block object-contain"
                            loading="lazy"
                            whileHover={{ scale: 1.01 }}
                          />
                        </motion.div>
                      </>
                    );
                  })()}
                </div>
              </motion.div>
            </div>
          </section>

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
                    projectSummary.id === "fulfillment-operation-tooling"
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

const FulfillmentOperationProject = () => {
  const project = getProjectDetail("fulfillment-operation-tooling");
  
  if (!project) return null;

  return (
    <PasswordProtection projectId="fulfillment-operation-tooling" projectTitle={project.title}>
      <FulfillmentOperationProjectContent />
    </PasswordProtection>
  );
};

export default FulfillmentOperationProject;
