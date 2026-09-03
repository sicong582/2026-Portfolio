import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ProjectOverview from "@/components/projects/ProjectOverview";
import { getProjectDetail } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslatedProjectDetail, getTranslatedProjectSummaries } from "@/utils/projectTranslations";
import PasswordProtection from "@/components/PasswordProtection";
import artarchCanvas from "@/assets/projects/artarch-studio/canvas.png";
import currentCanvas from "@/assets/projects/artarch-studio/current-canvas.png";
import currentCard from "@/assets/projects/artarch-studio/current-card.png";

const PROTOTYPE_URL = "/artarch-studio/index.html";
const PROMPT_CARD_VIDEO = "/videos/artarch-prompt-card.mp4";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

const ArtArchProject = () => {
  const { language, t } = useLanguage();
  const project = getTranslatedProjectDetail("artarch-studio", language);
  const source = getProjectDetail("artarch-studio");

  if (!project || !source) return null;

  const copy =
    language === "zh"
      ? {
          judgment: [
            { label: "用户", body: "专业 AI 视频创作者，不是第一次写提示词的人。" },
            { label: "还断在哪", body: "模型和画幅在远处的设置面板里，一次生成要看三个地方。" },
            { label: "为什么不直接缩小", body: "工作流本身复杂。要给结构，而不是假装它很简单。" },
          ],
          compare: "同一张卡片",
          before: "Before",
          after: "After",
          beforeNote: "参考竖叠，Prompt 被推到视野外。",
          afterNote: "参考横排，提示词和设置留在同一眼。",
          context: "在画布上",
          contextBody: "节点越高，写提示词时越难同时看到参考和结果。",
          motionKicker: "第二拍",
          promptTitle: "编辑时展开，扫读时收起",
          promptBody: "悬停才展开来源和参数。这是第二层，不是竖排问题的替代方案。",
          prototype: "可点击原型",
          open: "打开原型",
          outcomeTitle: "结果",
          outcomeBody: "方向已经对齐：生成卡片按内容伸缩。这版仍是高保真原型，还没有上线数据。",
          next: "下一步想验证",
          nextItems: [
            "第一次加第三张参考时，用户是否还去找 Prompt。",
            "横向参考是否让人误以为槽位有上限。",
            "消耗和缺失输入是否应该默认可见。",
          ],
        }
      : {
          judgment: [
            { label: "Who", body: "Professional AI video creators, not first-time prompt users." },
            { label: "What else broke", body: "Model and aspect ratio lived in a distant panel. One generation meant three places." },
            { label: "Why not just shrink it", body: "The workflow is complex. It needed structure, not a smaller form." },
          ],
          compare: "Same job, one card",
          before: "Before",
          after: "After",
          beforeNote: "References stack. The prompt falls out of view.",
          afterNote: "References sit in a row. Prompt and settings stay in glance.",
          context: "On the canvas",
          contextBody: "As the node grows, typing a prompt means losing the references and the result.",
          motionKicker: "Second beat",
          promptTitle: "Expand while editing. Collapse while scanning.",
          promptBody: "Hover reveals source and parameters. This is a second decision, not a substitute for fixing the stack.",
          prototype: "Clickable prototype",
          open: "Open prototype",
          outcomeTitle: "What landed",
          outcomeBody: "The team aligned on an adaptive generation card. This version is still a high-fidelity prototype, not a launched metric.",
          next: "What I would test next",
          nextItems: [
            "When someone adds a third reference, can they still find the prompt.",
            "Do horizontal slots feel capped, or clearly additive.",
            "Should cost and missing inputs stay visible by default.",
          ],
        };

  const details = {
    role: source.role,
    type: "Generation card",
    year: project.date,
    team: source.team,
    tools: "Figma, Codex, HTML/CSS",
  };

  return (
    <PasswordProtection projectId="artarch-studio" projectTitle={project.title}>
    <>
      <SEO
        title={`${project.title} | Sicong Chen`}
        description={project.overview}
        type="article"
      />
      <Header />

      <main id="main-content" className="pb-32 pt-32 md:pb-40">
        <div className="w-full px-6 py-8 md:px-12 md:py-12 lg:px-20">
          <Link
            to="/"
            className="mb-8 inline-block font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back
          </Link>

          <div className="mb-4">
            <h1 className="font-serif text-5xl font-medium tracking-tight lg:text-6xl">
              {project.title}
            </h1>
          </div>

          <ProjectOverview description={project.overview} details={details} />

          <section className="pb-16 md:pb-24">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              {copy.judgment.map((item) => (
                <motion.div
                  key={item.label}
                  {...fadeUp}
                  className="rounded-2xl border border-zinc-200 bg-card/40 p-6"
                >
                  <p className="mb-2 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="font-sans text-sm leading-relaxed text-foreground/80">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="pb-20 md:pb-28">
            <motion.p
              {...fadeUp}
              className="mb-6 font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground"
            >
              {copy.compare}
            </motion.p>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
              <motion.figure {...fadeUp} className="min-w-0">
                <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950">
                  <p className="absolute left-4 top-4 z-10 rounded-full bg-zinc-950/80 px-3 py-1 font-sans text-[11px] font-medium uppercase tracking-wider text-zinc-100">
                    {copy.before}
                  </p>
                  <img src={currentCard} alt={copy.beforeNote} className="block w-full object-contain" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-amber-500/25 to-transparent px-4 pb-4 pt-16">
                    <p className="font-sans text-xs font-medium text-amber-50">{copy.beforeNote}</p>
                  </div>
                </div>
              </motion.figure>
              <motion.figure {...fadeUp} className="min-w-0">
                <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950">
                  <p className="absolute left-4 top-4 z-10 rounded-full bg-zinc-950/80 px-3 py-1 font-sans text-[11px] font-medium uppercase tracking-wider text-zinc-100">
                    {copy.after}
                  </p>
                  <img src={artarchCanvas} alt={copy.afterNote} className="block w-full object-contain" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/80 to-transparent px-4 pb-4 pt-16">
                    <p className="font-sans text-xs font-medium text-zinc-100">{copy.afterNote}</p>
                  </div>
                </div>
              </motion.figure>
            </div>
          </section>

          <section className="pb-20 md:pb-28">
            <motion.div {...fadeUp} className="mb-6 max-w-2xl">
              <h2 className="mb-3 font-serif text-3xl font-bold md:text-4xl">{copy.context}</h2>
              <p className="font-sans text-muted-foreground leading-relaxed">{copy.contextBody}</p>
            </motion.div>
            <motion.img
              {...fadeUp}
              src={currentCanvas}
              alt={copy.contextBody}
              className="block w-full rounded-2xl border border-zinc-200 bg-zinc-950 object-contain"
            />
          </section>

          <section className="pb-20 md:pb-28">
            <motion.div {...fadeUp} className="mb-6 max-w-2xl">
              <p className="mb-2 font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                {copy.motionKicker}
              </p>
              <h2 className="mb-3 font-serif text-3xl font-bold md:text-4xl">{copy.promptTitle}</h2>
              <p className="font-sans text-muted-foreground leading-relaxed">{copy.promptBody}</p>
            </motion.div>
            <motion.div
              {...fadeUp}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 ring-1 ring-foreground/[0.04]"
            >
              <video
                src={PROMPT_CARD_VIDEO}
                autoPlay
                muted
                loop
                playsInline
                controls
                className="block w-full bg-zinc-950"
                aria-label={copy.promptTitle}
              />
            </motion.div>
          </section>

          <section className="pb-20 md:pb-28">
            <motion.div
              {...fadeUp}
              className="flex flex-col gap-6 rounded-2xl border border-zinc-200 bg-card/40 p-8 md:flex-row md:items-center md:justify-between md:p-10"
            >
              <div className="max-w-xl">
                <h2 className="mb-3 font-serif text-3xl font-bold md:text-4xl">{copy.prototype}</h2>
                <p className="font-sans text-muted-foreground leading-relaxed">{copy.outcomeBody}</p>
              </div>
              <a
                href={PROTOTYPE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 font-sans text-sm font-medium text-zinc-50 transition-opacity hover:opacity-80"
              >
                {copy.open}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </a>
            </motion.div>
          </section>

          <section className="pb-8">
            <motion.h2 {...fadeUp} className="mb-3 font-serif text-3xl font-bold md:text-4xl">
              {copy.outcomeTitle}
            </motion.h2>
            <motion.p {...fadeUp} className="mb-8 max-w-2xl font-sans text-muted-foreground leading-relaxed">
              {copy.outcomeBody}
            </motion.p>
            <motion.p
              {...fadeUp}
              className="mb-4 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground"
            >
              {copy.next}
            </motion.p>
            <ul className="max-w-2xl space-y-3">
              {copy.nextItems.map((item) => (
                <motion.li
                  key={item}
                  {...fadeUp}
                  className="font-sans text-sm leading-relaxed text-foreground/80"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </section>

          <nav className="mt-20 border-t border-border pt-12">
            <h3 className="mb-6 text-center font-sans text-sm text-muted-foreground">
              {t("common.moreProjects")}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {getTranslatedProjectSummaries(language).map((item) => (
                <Link
                  key={item.id}
                  to={`/project/${item.id}`}
                  className={`rounded-full border px-4 py-2 font-sans text-sm transition-colors ${
                    item.id === "artarch-studio"
                      ? "border-foreground bg-foreground text-background"
                      : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </main>

      <Footer />
    </>
    </PasswordProtection>
  );
};

export default ArtArchProject;
