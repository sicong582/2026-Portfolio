import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ProjectOverview from "@/components/projects/ProjectOverview";
import { getProjectDetail } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslatedProjectSummaries } from "@/utils/projectTranslations";

export const motionShowreelVideoSrc = "/videos/portfolio-animation-showreel.mp4";

const MotionShowreelProject = () => {
  const { language, t } = useLanguage();
  const project = getProjectDetail("motion-c4d-showreel");

  if (!project) return null;

  const details = {
    role: project.role,
    tools: project.results.metrics.find((m) => m.label === "Tools")?.value ?? "After Effects, Cinema 4D",
    type: project.type,
    year: project.date,
    team: project.team,
  };

  return (
    <>
      <SEO
        title={`${project.title} | Sicong Chen`}
        description={project.overview}
        type="article"
      />
      <Header />

      <main id="main-content" className="pb-32 pt-32 md:pb-40">
        <div className="container-wide py-8 md:py-12">
          <Link
            to="/"
            className="group mb-12 inline-flex items-center gap-2 font-sans text-sm text-muted-foreground transition-all duration-300 ease-in-out hover:text-foreground"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-0.5">←</span>
            <span>Back</span>
          </Link>

          <header className="mb-12 max-w-3xl space-y-5 md:mb-16">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Motion & 3D
            </p>
            <h1 className="font-serif text-4xl font-medium tracking-tight text-zinc-950 md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-sm text-muted-foreground">
              <span>{project.type}</span>
              <span className="text-border" aria-hidden>
                ·
              </span>
              <span>{project.date}</span>
            </div>
          </header>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 overflow-hidden rounded-2xl border border-border/90 bg-zinc-950 shadow-sm ring-1 ring-foreground/[0.03] md:mb-20"
          >
            <video
              src={motionShowreelVideoSrc}
              controls
              playsInline
              preload="metadata"
              className="block aspect-video w-full bg-zinc-950"
              aria-label={`${project.title} showreel video`}
            />
          </motion.div>

          <section className="pt-0">
            <ProjectOverview description={project.overview} details={details} />
          </section>

          <nav className="mt-8 rounded-2xl border border-border/80 bg-muted/20 px-6 py-10 md:mt-12 md:px-10 md:py-12">
            <h3 className="mb-8 text-center font-sans text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {t("common.moreProjects")}
            </h3>
            <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
              {getTranslatedProjectSummaries(language).map((p) => (
                <Link
                  key={p.id}
                  to={`/project/${p.id}`}
                  className={`rounded-full border px-5 py-2.5 font-sans text-sm transition-all duration-300 ease-in-out ${
                    p.id === "motion-c4d-showreel"
                      ? "border-foreground bg-foreground text-background shadow-sm"
                      : "border-border bg-background/60 text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                  }`}
                >
                  {p.title}
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

export default MotionShowreelProject;
