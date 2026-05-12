import photoTapingCover2 from "@/assets/projects/vibe-coding/project-prototype-2.gif";
import photoTapingCover3 from "@/assets/projects/vibe-coding/project-prototype-3.gif";
import bubbleBattlePreview from "@/assets/projects/vibe-coding/bubble-battle-preview.png";

export type VibeCodingExperiment = {
  id: string;
  title: string;
  paragraphs: [string, string];
  preview: string;
  /** Opens in a new tab; omit to use env default in the page */
  tryUrl?: string;
  /** Embed same-origin HTML prototype in-page (clickable inside the iframe) */
  interactiveEmbed?: boolean;
  /** Hide “Try it here” (e.g. animation-only rows with no shipped demo URL) */
  hideTryLink?: boolean;
};

/** Same-origin interactive prototype shipped from `/public/snapmind-demo/` */
export const snapMindDemoPath = "/snapmind-demo/index.html";

/** Bubble Battle (Three.js) from `/public/bubble-battle/` — portfolio shell with back link at `/play/bubble-battle` */
export const bubbleBattleDemoPath = "/play/bubble-battle";

const bubbleBattleTryUrl =
  (import.meta.env.VITE_BUBBLE_BATTLE_DEMO_URL as string | undefined)?.trim() || bubbleBattleDemoPath;

export const vibeCodingExperiments: VibeCodingExperiment[] = [
  {
    id: "exp-01",
    title: "SnapMind",
    paragraphs: [
      "An AI-assisted screenshot organizer that turns visual saves into categorized, actionable ideas.",
      "SnapMind is a mobile product concept focused on helping people manage screenshot overload. I designed and built an end-to-end flow that lets users import screenshots, classify them into clear intent-based buckets, review suggestions, and export organized ideas. The goal was to combine clean interaction design with practical utility so inspiration does not get lost in the camera roll.",
    ],
    preview: "/snapmind-demo/prototype-assets/mockup-screenshot-1.png",
    tryUrl: snapMindDemoPath,
    interactiveEmbed: true,
  },
  {
    id: "exp-02",
    title: "Bubble Battle",
    paragraphs: [
      "Bubble Battle is a bite-sized arcade game about reflex and focus: bubbles drift upward from the bottom of the screen, and your job is to tap them before they slip away. Each successful pop adds to your score; misses add tension and keep rounds short enough for a one-minute break or a quick challenge with a friend.",
      "I treated the project as both a game loop and a UI exercise—clear hierarchy, thumb-friendly hit targets, and immediate visual payoff on every interaction. The preview above sketches the shell direction; use Try it here to open the in-browser prototype and feel the timing and feedback for yourself.",
    ],
    preview: bubbleBattlePreview,
    tryUrl: bubbleBattleTryUrl,
  },
  {
    id: "exp-03",
    title: "Midnight Alley · Night Scene Animation",
    paragraphs: [
      "An atmospheric illustration of a moonlit cobblestone street—crooked timber facades, hanging lanterns, and a small figure in a cloak with a softly pulsing wand.",
      "Subtle motion study: flickering warm windows, cool moonlight, and a jewel-like tower glow. The GIF is the deliverable—mood and timing without a separate interactive build.",
    ],
    preview: photoTapingCover2,
    hideTryLink: true,
  },
  {
    id: "exp-04",
    title: "Miniature Creamery · Stop-Motion Brand Film",
    paragraphs: [
      "A tactile, tilt-shift miniature world: tiny construction crews on scaffolding around an oversized squeeze tube, set on fuzzy felt ground with pastel towers and giant ingredient props.",
      "Rhythmic stop-motion beats—workers paint, haul, and rebuild around the hero packshot. Preview-only animation until a hosted player or case study link ships.",
    ],
    preview: photoTapingCover3,
    hideTryLink: true,
  },
];
