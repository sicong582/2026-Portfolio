import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { getProjectSummary } from "@/data/projects";
import { vibeCodingExperiments } from "@/data/vibeCodingExperiments";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslatedProjectSummaries } from "@/utils/projectTranslations";

const DEFAULT_TRY_URL =
  "https://stackblitz.com/edit/vitejs-vite-react-ts?embed=1&file=src%2FApp.tsx&theme=light";

const PAGE_INTRO =
  "Vibe-coded experiments: SnapMind as an in-page HTML prototype; Bubble Battle with a linked playable demo; motion studies as GIFs below.";

const VibeCodingProject = () => {
  const { language, t } = useLanguage();
  const summary = getProjectSummary("vibe-coding");
  const fallbackTryUrl =
    (import.meta.env.VITE_VIBE_CODING_DEMO_URL as string | undefined)?.trim() ||
    DEFAULT_TRY_URL;

  if (!summary) return null;

  const seoDescription = vibeCodingExperiments[0]?.paragraphs[0] ?? summary.description;

  return (
    <>
      <SEO
        title={`${summary.title} | Sicong Chen`}
        description={seoDescription}
        type="article"
      />
      <Header />

      <main id="main-content" className="pb-32 pt-32 md:pb-40">
        <div className="container-wide py-8 md:py-12">
          <Link
            to="/"
            className="group mb-12 inline-flex items-center gap-2 font-sans text-sm text-muted-foreground transition-all duration-300 ease-in-out hover:text-foreground"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
              ←
            </span>
            <span>Back</span>
          </Link>

          <header className="mb-16 max-w-3xl space-y-5 md:mb-20">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Experiments
            </p>
            <h1 className="font-serif text-4xl font-medium tracking-tight text-zinc-950 md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              {summary.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-sm text-muted-foreground">
              <span>{summary.type}</span>
              <span className="text-border" aria-hidden>
                ·
              </span>
              <span>{summary.date}</span>
            </div>
            <p className="max-w-2xl font-sans text-[15px] leading-relaxed text-muted-foreground md:text-base">
              {PAGE_INTRO}
            </p>
          </header>

          <div className="rounded-2xl border border-border/90 bg-card/45 shadow-sm ring-1 ring-foreground/[0.03]">
            <div className="divide-y divide-border/80">
              {vibeCodingExperiments.map((exp, index) => {
                const tryUrl = exp.tryUrl ?? fallbackTryUrl;
                const indexLabel = String(index + 1).padStart(2, "0");
                return (
                  <motion.article
                    key={exp.id}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-32px" }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="group grid grid-cols-1 items-start gap-8 px-6 py-12 md:px-10 md:py-14 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0 lg:px-12 lg:py-16"
                  >
                    <div className="min-w-0 lg:col-span-3">
                      <p className="mb-3 font-mono text-[11px] font-medium tabular-nums tracking-wide text-muted-foreground/90">
                        {indexLabel}
                      </p>
                      <h2 className="font-serif text-lg font-medium leading-snug tracking-tight text-zinc-950 md:text-xl md:leading-snug">
                        {exp.title}
                      </h2>
                    </div>

                    <div className="min-w-0 space-y-4 font-sans text-[15px] leading-[1.65] text-muted-foreground lg:col-span-4">
                      <p>{exp.paragraphs[0]}</p>
                      <p>{exp.paragraphs[1]}</p>
                    </div>

                    <div className="flex min-w-0 flex-col gap-4 lg:col-span-5">
                      {exp.interactiveEmbed ? (
                        <div className="w-full rounded-xl border border-border bg-background shadow-sm ring-1 ring-foreground/[0.04] transition-all duration-300 ease-in-out group-hover:border-border group-hover:shadow-md group-hover:ring-foreground/[0.06]">
                          <iframe
                            title={`${exp.title} interactive prototype`}
                            src={tryUrl}
                            className="pointer-events-auto block w-full rounded-xl border-0 bg-background"
                            style={{
                              height: "min(920px, 92vh)",
                              minHeight: "min(680px, 85vh)",
                            }}
                            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-modals"
                            loading="lazy"
                          />
                        </div>
                      ) : exp.hideTryLink ? (
                        <div className="relative overflow-hidden rounded-xl border border-border bg-muted/25 shadow-sm ring-1 ring-foreground/[0.04] transition-all duration-300 ease-in-out group-hover:border-border group-hover:shadow-md group-hover:ring-foreground/[0.06]">
                          <img
                            src={exp.preview}
                            alt={`${exp.title} animation preview`}
                            className="block w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <a
                          href={tryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open interactive demo: ${exp.title}`}
                          className="relative block overflow-hidden rounded-xl border border-border bg-muted/25 shadow-sm ring-1 ring-foreground/[0.04] outline-none transition-all duration-300 ease-in-out hover:border-border hover:shadow-md hover:ring-foreground/[0.06] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background group-hover:border-border group-hover:shadow-md group-hover:ring-foreground/[0.06]"
                        >
                          <img
                            src={exp.preview}
                            alt={`${exp.title} demo preview`}
                            className="block w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                            loading="lazy"
                          />
                        </a>
                      )}

                      {!exp.hideTryLink ? (
                        <a
                          href={tryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex w-fit items-center gap-1.5 self-start whitespace-nowrap font-sans text-sm font-medium text-foreground/85 transition-colors duration-300 hover:text-foreground"
                        >
                          <span className="border-b border-transparent pb-px transition-all duration-300 group-hover/link:border-foreground/25">
                            Try it here
                          </span>
                          <ArrowUpRight
                            className="h-3.5 w-3.5 shrink-0 opacity-70 transition-all duration-300 ease-out group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:opacity-100"
                            aria-hidden
                          />
                        </a>
                      ) : null}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          <nav className="mt-16 rounded-2xl border border-border/80 bg-muted/20 px-6 py-10 md:mt-20 md:px-10 md:py-12">
            <h3 className="mb-8 text-center font-sans text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {t("common.moreProjects")}
            </h3>
            <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
              {getTranslatedProjectSummaries(language).map((p) => (
                <Link
                  key={p.id}
                  to={`/project/${p.id}`}
                  className={`rounded-full border px-5 py-2.5 font-sans text-sm transition-all duration-300 ease-in-out ${
                    p.id === "vibe-coding"
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

export default VibeCodingProject;
