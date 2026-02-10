import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ProjectOverview from "@/components/projects/ProjectOverview";
import { getProjectDetail, getAllProjectSummaries } from "@/data/projects";

// Import PayPal project images
// import paypal1 from "@/assets/projects/paypal/Paypal-1.jpg"; // File missing - uncomment when file is added
import paypal2 from "@/assets/projects/paypal/Paypal-2.gif";
import paypal3 from "@/assets/projects/paypal/Paypal-3.png";
import paypal4 from "@/assets/projects/paypal/PayPal-4.jpeg";
import paypal5 from "@/assets/projects/paypal/PayPal-5.jpeg";
import paypal6 from "@/assets/projects/paypal/PayPal-6.jpeg";
import paypal7 from "@/assets/projects/paypal/PayPal-7.jpeg";
import paypalSitemap from "@/assets/projects/paypal/paypal-sitemap.jpg";

const paypalSolutionImages = [paypal2];
const paypalStorytellingImages = [paypal4, paypal5, paypal6, paypal7];

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

const PayPalProject = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const project = getProjectDetail("paypal");
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  if (!project) return null;

  // Extract project info for ProjectOverview
  const extractProjectInfo = () => {
    const clientMetric = project.results.metrics.find(m => m.label === "Client");
    const toolsMetric = project.results.metrics.find(m => m.label === "Tools");
    const roleMetric = project.results.metrics.find(m => m.label === "Role");
    const yearMetric = project.results.metrics.find(m => m.label === "Year");
    const teamMetric = project.results.metrics.find(m => m.label === "Team");
    
    return {
      client: clientMetric?.value || "PayPal through AKQA",
      tools: toolsMetric?.value || "Figma, UserTesting, InVision, Keynote",
      role: roleMetric?.value || project.role || "UX/UI Designer",
      type: project.type || "Website Redesign",
      year: yearMetric?.value || project.date || "2020",
      team: teamMetric?.value || project.team || "",
    };
  };

  return (
    <div ref={containerRef} className="relative">
      <SEO
        title="PayPal.com Redesign | Sicong Chen"
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

          {/* The Challenge Section */}
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
                <p className="font-sans text-muted-foreground leading-relaxed">
                  {parseMarkdown(project.problem.description)}
                </p>
              </motion.div>
            </div>
          </section>

          {/* The Approach Section */}
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
                <p className="font-sans text-muted-foreground leading-relaxed mb-12">
                  {parseMarkdown(project.process.description || "")}
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  className="w-full mt-12"
                >
                  <motion.img
                    src={paypalSitemap}
                    alt="PayPal Information Architecture Sitemap"
                    className="w-auto h-auto max-w-full block object-contain"
                    loading="lazy"
                    whileHover={{ scale: 1.01 }}
                  />
                </motion.div>
              </motion.div>
            </div>
            {/* Paypal-1 Full Width Image - appears after sitemap in The Approach section */}
            {/* Uncomment when Paypal-1.jpg file is added */}
            {/* <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="w-full -mx-8 md:-mx-16 lg:-mx-24 mt-12"
            >
              <motion.img
                src={paypal1}
                alt={`${project.title} - Approach`}
                className="w-full h-auto block object-contain"
                loading="lazy"
                whileHover={{ scale: 1.01 }}
              />
            </motion.div> */}
          </section>

          {/* The Solution Section */}
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
                  {/* Text and Paypal-3 side by side */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-start">
                    {/* Text content */}
                    <div className="font-sans text-muted-foreground leading-relaxed space-y-6">
                      <p>
                        {parseMarkdown(project.approach.description.split('\n\n###')[0])}
                      </p>
                    </div>
                    {/* Paypal-3 image */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                      className="w-full"
                    >
                      <motion.img
                        src={paypal3}
                        alt={`${project.title} - Solution`}
                        className="w-auto h-auto max-w-full block object-contain"
                        loading="lazy"
                        whileHover={{ scale: 1.01 }}
                      />
                    </motion.div>
                  </div>
                  {/* Solution Image - Paypal-2 below */}
                  {paypalSolutionImages && paypalSolutionImages.length > 0 && (
                    <div className="mt-12">
                      {paypalSolutionImages.map((image, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                          className="inline-block w-full"
                          whileHover={{ scale: 1.01 }}
                        >
                          <motion.img
                            src={image}
                            alt={`${project.title} - Solution ${index + 1}`}
                            className="w-auto h-auto max-w-full block object-contain"
                            loading="lazy"
                          />
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </section>
          )}

          {/* Additional Solution Text (from page 6 - appears after images) */}
          {project.approach && project.approach.description.includes('###') && (
            <section className="py-24 md:py-24">
              <div className="w-full px-4 md:px-8 lg:px-12">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full"
                >
                  <div className="font-sans text-muted-foreground leading-relaxed space-y-6">
                    {project.approach.description.split('\n\n###').slice(1).map((part, index) => {
                      const lines = part.split('\n\n');
                      return (
                        <div key={index} className="space-y-6">
                          {lines.map((line, lineIndex) => {
                            const trimmedLine = line.trim();
                            if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**') && trimmedLine.length > 4) {
                              return (
                                <div key={lineIndex}>
                                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6 mt-8">
                                    {parseMarkdown(line)}
                                  </h3>
                                  {/* Storytelling and Product Demonstration Images */}
                                  <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                                    className="w-full mt-8 mb-8"
                                  >
                                    {/* Four images grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 mt-8">
                                      {paypalStorytellingImages.map((image, imgIndex) => (
                                        <motion.div
                                          key={imgIndex}
                                          initial={{ opacity: 0, y: 40 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          viewport={{ once: true, margin: "-100px" }}
                                          transition={{ duration: 0.6, delay: 0.2 + imgIndex * 0.1, ease: "easeOut" }}
                                          className="inline-block"
                                          whileHover={{ scale: 1.02, y: -4 }}
                                        >
                                          <motion.img
                                            src={image}
                                            alt={`${project.title} - Storytelling ${imgIndex + 1}`}
                                            className="w-auto h-auto max-w-full block object-contain"
                                            loading="lazy"
                                          />
                                        </motion.div>
                                      ))}
                                    </div>
                                  </motion.div>
                                </div>
                              );
                            }
                            return (
                              <p key={lineIndex} className="leading-relaxed">
                                {parseMarkdown(line)}
                              </p>
                            );
                          })}
                        </div>
                      );
                    })}
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
                        .filter(m => !["Client", "Tools", "Role", "Year", "Team"].includes(m.label))
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
                    <div className="font-sans text-muted-foreground leading-relaxed space-y-6">
                      {project.results.description.split('\n\n').map((paragraph, index) => {
                        if (paragraph.trim().startsWith('-')) {
                          // Handle bullet points
                          const items = paragraph.split('\n').filter(line => line.trim().startsWith('-'));
                          return (
                            <ul key={index} className="list-disc list-inside space-y-2 ml-4">
                              {items.map((item, itemIndex) => (
                                <li key={itemIndex}>{parseMarkdown(item.replace(/^-\s*/, ''))}</li>
                              ))}
                            </ul>
                          );
                        }
                        return (
                          <p key={index}>
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
              {getAllProjectSummaries().map((projectSummary) => (
                <Link
                  key={projectSummary.id}
                  to={`/project/${projectSummary.id}`}
                  className={`font-sans text-sm px-4 py-2 rounded-full border transition-colors ${
                    "paypal" === projectSummary.id
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

export default PayPalProject;
