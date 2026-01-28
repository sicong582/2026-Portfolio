import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ProjectOverview from "@/components/projects/ProjectOverview";
import { getProjectDetail, getAllProjectSummaries } from "@/data/projects";

// Import PayPal project images
import paypal1 from "@/assets/projects/paypal/Paypal-1.jpg";
import paypal2 from "@/assets/projects/paypal/Paypal-2.png";
import paypal3 from "@/assets/projects/paypal/Paypal-3.jpg";
import paypal4 from "@/assets/projects/paypal/Paypal-4.jpeg";

const paypalImages = [paypal1, paypal2, paypal3, paypal4];

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
        <div className="w-full px-4 md:px-8 lg:px-12">
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
            <p className="font-sans text-muted-foreground text-base mt-4">
              {project.type} | {project.date}
            </p>
          </div>

          {/* Overview Section */}
          <ProjectOverview
            description={project.overview}
            details={extractProjectInfo()}
          />

          {/* The Challenge Section */}
          <section className="py-20 md:py-24">
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
          <section className="py-20 md:py-24">
            <div className="w-full px-4 md:px-8 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full"
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">{project.process.title}</h2>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  {parseMarkdown(project.process.description || "")}
                </p>
              </motion.div>
            </div>
          </section>

          {/* The Solution Section */}
          {project.approach && (
            <section className="py-20 md:py-24">
              <div className="w-full px-4 md:px-8 lg:px-12">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full"
                >
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">{project.approach.title}</h2>
                  <p className="font-sans text-muted-foreground leading-relaxed">
                    {parseMarkdown(project.approach.description)}
                  </p>
                </motion.div>
              </div>
            </section>
          )}

          {/* Media Gallery */}
          {paypalImages && paypalImages.length > 0 && (
            <section className="py-20 md:py-24">
              <div className="w-full px-4 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                  {paypalImages.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                      className="inline-block"
                      whileHover={{ scale: 1.02, y: -4 }}
                    >
                      <motion.img
                        src={image}
                        alt={`${project.title} - ${index + 1}`}
                        className="w-auto h-auto max-w-full block object-contain"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Results Section */}
          {project.results && (
            <section className="py-20 md:py-24">
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
                    <p className="font-sans text-muted-foreground leading-relaxed">
                      {parseMarkdown(project.results.description)}
                    </p>
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
