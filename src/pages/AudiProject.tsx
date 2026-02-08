import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ImageGrid from "@/components/projects/ImageGrid";
import ProjectOverview from "@/components/projects/ProjectOverview";
import { getProjectDetail, getAllProjectSummaries } from "@/data/projects";

// Import all project assets from audi folder
import audi1 from "@/assets/projects/audi/audi-01.png";
import audi2 from "@/assets/projects/audi/audi-02.png";
import audi3 from "@/assets/projects/audi/audi-03.png";
import audi4 from "@/assets/projects/audi/audi-04.png";
import audi5 from "@/assets/projects/audi/audi-05.png";
import audi6 from "@/assets/projects/audi/audi-06.png";
import audi7 from "@/assets/projects/audi/audi-07.png";
import audi8 from "@/assets/projects/audi/audi-08.png";
import audi9 from "@/assets/projects/audi/audi-09.png";
import audi12 from "@/assets/projects/audi/audi-12.jpg";
import audi13 from "@/assets/projects/audi/audi-13.jpg";
import audi14 from "@/assets/projects/audi/audi-14.jpg";
import audi15 from "@/assets/projects/audi/audi-15.jpg";
import audi10Video from "@/assets/projects/audi/audi-10.mov";
import audi11Video from "@/assets/projects/audi/audi-11.mov";

// Row 1: Enrollment - Make it feel familiar
const enrollmentImages = [audi1, audi2, audi3];

// Row 2: First charge - Remove all doubt
const firstChargeImages = [audi4, audi5, audi6];

// Row 3: Staying in control - Track your free miles
const stayingInControlImages = [audi7, audi8, audi9];

// First two images for side-by-side display
const firstTwoImages = [audi12, audi13];

// Remaining images for full width display
const remainingImages = [audi14, audi15];

const AudiProject = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const project = getProjectDetail("audi");
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax transforms for different sections
  const imageGridY = useTransform(scrollYProgress, [0.4, 0.7], [0, -30]);

  if (!project) return null;

  // Extract project info for ProjectOverview
  const extractProjectInfo = () => {
    const clientMetric = project.results.metrics.find(m => m.label === "Client");
    const toolsMetric = project.results.metrics.find(m => m.label === "Tools");
    
    return {
      client: clientMetric?.value || "Audi through AKQA",
      tools: toolsMetric?.value || "Sketch, Zeplin",
      role: project.role || "Visual Designer",
      type: project.type || "Website, iOS App",
      year: project.date || "2019",
      team: project.team || "1 UX design director, 1 PM, 3 Engineers",
    };
  };

  return (
    <div ref={containerRef} className="relative">
      <SEO
        title="Audi E-Tron: Electric Vehicle Charging Experience | Sicong Chen"
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
          <section className="pt-8 pb-12 md:pt-12 md:pb-16">
            <div className="w-full px-4 md:px-8 lg:px-12">
              <ProjectOverview
                description={project.overview}
                details={extractProjectInfo()}
              />
            </div>
          </section>

          {/* Row 1: Enrollment - Make it feel familiar */}
          <section className="pt-12 pb-24 md:pt-16 md:pb-24">
            <div className="w-full px-4 md:px-8 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full"
              >
                <h3 className="font-serif text-3xl md:text-4xl font-bold mb-12 pl-0">Enrollment: Make it feel familiar</h3>
                <p className="font-sans text-muted-foreground leading-relaxed mb-12 pl-0">
                  Most people enrolled at the dealership during pickup. But for those who forgot or declined? I designed a self-service flow that felt more like signing up for Spotify than activating a charging network. Simple, welcoming, one clear action.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                  {enrollmentImages.map((image, index) => (
                    <motion.div
                      key={index}
                      className="w-full rounded-2xl overflow-hidden shadow-lg flex items-center justify-center p-8 md:p-12"
                      whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <motion.img
                        src={image}
                        alt={`Enrollment flow ${index + 1}`}
                        className="max-w-full h-auto object-contain"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Row 2: First charge - Remove all doubt */}
          <section className="py-24 md:py-24">
            <div className="w-full px-4 md:px-8 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full"
              >
                <h3 className="font-serif text-3xl md:text-4xl font-bold mb-12 pl-0">First charge: Remove all doubt</h3>
                <p className="font-sans text-muted-foreground leading-relaxed mb-12 pl-0">
                  This was make-or-break. I created the experience right in the app: The credit gauge: Instead of showing raw numbers, I designed a circular gauge that felt familiar—like a fuel gauge. The green arc animated as credits depleted, with large legible numbers and friendly context: "800 kWh—enough for about 1,600 miles."
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                  {firstChargeImages.map((image, index) => (
                    <motion.div
                      key={index}
                      className="w-full rounded-2xl overflow-hidden shadow-lg flex items-center justify-center p-8 md:p-12"
                      whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <motion.img
                        src={image}
                        alt={`First charge experience ${index + 1}`}
                        className="max-w-full h-auto object-contain"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Row 3: Staying in control - Track your free miles */}
          <section className="py-24 md:py-24">
            <div className="w-full px-4 md:px-8 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full"
              >
                <h3 className="font-serif text-3xl md:text-4xl font-bold mb-12 pl-0">Staying in control: Track your free miles</h3>
                <p className="font-sans text-muted-foreground leading-relaxed mb-12 pl-0">
                  I designed the charging history to feel less like a transaction log, more like a travel diary. Each session showed location, energy delivered, and range added. Clean data tables with smart whitespace, alternating rows for scannability, and details that appeared on hover. The credit gauge became a satisfying way to see their "free miles" tick down.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                  {stayingInControlImages.map((image, index) => (
                    <motion.div
                      key={index}
                      className="w-full rounded-2xl overflow-hidden shadow-lg flex items-center justify-center p-8 md:p-12"
                      whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <motion.img
                        src={image}
                        alt={`Charging history ${index + 1}`}
                        className="max-w-full h-auto object-contain"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Designing for every moment Section */}
          <section className="py-24 md:py-24">
            <div className="w-full px-4 md:px-8 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full"
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 pl-0">Designing for every moment</h2>
                <div className="font-sans text-muted-foreground leading-relaxed space-y-6 mb-12 pl-0">
                  <p>
                    This wasn't just a mobile app—owners would check credits at home on their laptop, monitor charging on their iPad, and start sessions from their phone.
                  </p>
                  <p>
                    I built a responsive system that felt native to each context:
                  </p>
                  <ul className="space-y-3 list-disc list-inside">
                    <li><strong className="text-foreground font-medium">Mobile:</strong> Stacked cards, thumb-friendly buttons, quick actions for charging now</li>
                    <li><strong className="text-foreground font-medium">Tablet:</strong> Two-column layouts with split views for browsing while monitoring</li>
                    <li><strong className="text-foreground font-medium">Desktop:</strong> Full dashboard with sidebar navigation, history, and settings</li>
                  </ul>
                  <p>
                    Each breakpoint felt intentional, adapted to how people actually used their devices.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Videos Section */}
          <section className="pt-12 pb-24 md:pt-16 md:pb-24">
            <div className="w-full px-4 md:px-8 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
              >
                <motion.div
                  className="w-full rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.01, y: -4 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <video
                    src={audi10Video}
                    controls
                    className="w-full h-auto"
                    playsInline
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
                <motion.div
                  className="w-full rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.01, y: -4 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <video
                    src={audi11Video}
                    controls
                    className="w-full h-auto"
                    playsInline
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Design Exploration Section */}
          <section className="py-24 md:py-24">
            <div className="w-full px-4 md:px-8 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full"
              >
                {/* First two images side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-4">
                  {firstTwoImages.map((image, index) => (
                    <motion.div
                      key={index}
                      className="inline-block p-8 md:p-12"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ scale: 1.02, y: -4 }}
                    >
                      <motion.img
                        src={image}
                        alt={`Design exploration ${index + 1}`}
                        className="w-auto h-auto max-w-full block object-contain"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Remaining images full width */}
                <div className="space-y-6 md:space-y-8">
                  {remainingImages.map((image, index) => (
                    <motion.div
                      key={index}
                      className="inline-block w-full p-8 md:p-12"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, delay: (index + 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ scale: 1.02, y: -4 }}
                    >
                      <motion.img
                        src={image}
                        alt={`Design exploration ${index + 3}`}
                        className="w-auto h-auto max-w-full block object-contain"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* What I Learned Section */}
          <section className="py-24 md:py-24">
            <div className="w-full px-4 md:px-8 lg:px-12">
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 pl-0">What I learned</h2>
                  <div className="font-sans text-muted-foreground leading-relaxed space-y-6 pl-0">
                    <p>
                      The best design isn't the one with the most features—it's the one that makes people feel capable. We weren't just designing a charging app for Audi's first EV. We were designing a bridge from <em>"I've never done this"</em> to <em>"I do this all the time."</em>
                    </p>
                    <p>
                      Every decision—from the circular gauge to the friendly copy to the responsive layouts—was in service of making electric vehicle ownership feel as effortless as the luxury cars Audi was known for.
                    </p>
                    <p className="text-foreground font-medium">
                      That's the kind of design that actually changes behavior.
                    </p>
                  </div>
                </motion.div>
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
