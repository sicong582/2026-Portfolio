import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

/**
 * Full-viewport embed of the static game at /bubble-battle/index.html (Vite public/).
 */
const BubbleBattle = () => (
  <>
    <SEO
      title="Bubble Battle | Sicong Chen"
      description="Play Bubble Battle — a grid puzzle inspired by classic bomber-style games."
    />
    <div className="fixed inset-0 z-[200] flex flex-col bg-zinc-950">
      <header className="flex shrink-0 items-center justify-between gap-3 border-b border-zinc-800 bg-zinc-950/95 px-4 py-2 backdrop-blur-sm">
        <Link
          to="/"
          className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
        >
          ← Back to portfolio
        </Link>
        <a
          href="/bubble-battle/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
        >
          Open in new tab
        </a>
      </header>
      <iframe
        title="Bubble Battle"
        src="/bubble-battle/index.html"
        className="min-h-0 w-full flex-1 border-0 bg-sky-300"
        allow="accelerometer; autoplay; fullscreen; gamepad; gyroscope; microphone; camera; payment; usb; xr-spatial-tracking"
        referrerPolicy="same-origin"
      />
    </div>
  </>
);

export default BubbleBattle;
