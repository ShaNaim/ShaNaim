"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const EDITIONS = [
  { id: "atelier", href: "/atelier/", label: "Atelier", glyph: "◐" },
  { id: "print", href: "/brutalist/", label: "Print", glyph: "◧" },
  { id: "saber", href: "/starwars/", label: "Holonet", glyph: "✦" },
  { id: "personal", href: "/", label: "Personal", glyph: "◈" },
] as const;

export type EditionId = (typeof EDITIONS)[number]["id"];

/* Per-theme styling so the indicator belongs to whichever design it sits on. */
const CHROME: Record<EditionId, { base: string; option: string; glyph: string }> = {
  atelier: {
    base: "rounded-full border border-gold/30 bg-night/85 backdrop-blur-md hover:border-gold/70",
    option: "rounded-full border border-gold/25 bg-night/90 text-cream-dim backdrop-blur-md hover:border-gold/70 hover:text-gold",
    glyph: "text-gold",
  },
  print: {
    base: "border-3 border-ink bg-paper shadow-hard-sm hover:-translate-y-[2px]",
    option: "border-3 border-ink bg-paper text-ink shadow-hard-sm hover:bg-yellow",
    glyph: "text-accent",
  },
  saber: {
    base: "border border-holo/30 bg-void/85 backdrop-blur-md hover:border-holo/70 hover:shadow-[0_0_18px_-4px_var(--holo)]",
    option: "border border-holo/25 bg-void/90 text-star-dim backdrop-blur-md hover:border-holo/70 hover:text-holo",
    glyph: "text-holo",
  },
  personal: {
    base: "border border-[#ff4d0050] bg-[#080808]/85 backdrop-blur-md hover:border-[#ff4d00]/70 hover:shadow-[0_0_18px_-4px_#ff4d00]",
    option: "border border-[#ff4d0030] bg-[#080808]/90 text-[#666] backdrop-blur-md hover:border-[#ff4d00]/70 hover:text-[#ff4d00]",
    glyph: "text-[#ff4d00]",
  },
};

const DICE_FACES = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

const HISTORY_KEY = "portfolio:edition-history";
const HISTORY_CAP = 3;

function isEditionId(value: unknown): value is EditionId {
  return EDITIONS.some((e) => e.id === value);
}

function readHistory(): EditionId[] {
  try {
    const raw = sessionStorage.getItem(HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter(isEditionId) : [];
  } catch {
    return [];
  }
}

function writeHistory(history: EditionId[]): void {
  try {
    sessionStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch {
    /* sessionStorage unavailable (private mode, quota) — fail silently */
  }
}

/** Record a page visit as a "turn": dedupe id, push to end, cap at HISTORY_CAP. */
function recordVisit(id: EditionId): void {
  const history = readHistory().filter((h) => h !== id);
  history.push(id);
  writeHistory(history.slice(-HISTORY_CAP));
}

interface DesignSwitchProps {
  /** the edition this indicator is rendered on */
  on: EditionId;
}

/**
 * Floating dice button. Rolling it navigates to a random OTHER edition,
 * excluding whichever editions were visited in the last 3 turns.
 */
export function DesignSwitch({ on }: DesignSwitchProps) {
  const chrome = CHROME[on];
  const router = useRouter();
  const [face] = useState(() => DICE_FACES[Math.floor(Math.random() * DICE_FACES.length)]);

  useEffect(() => {
    recordVisit(on);
  }, [on]);

  function handleRoll() {
    const excluded = new Set<EditionId>(readHistory());
    excluded.add(on);
    let candidates = EDITIONS.filter((e) => !excluded.has(e.id));
    if (candidates.length === 0) {
      candidates = EDITIONS.filter((e) => e.id !== on);
    }
    const choice = candidates[Math.floor(Math.random() * candidates.length)];
    router.push(choice.href);
  }

  return (
    <div className="fixed right-5 bottom-5 z-50">
      <button
        type="button"
        onClick={handleRoll}
        aria-label="Roll the dice: jump to a random edition"
        title="Switch to a random edition"
        className={`grid h-11 w-11 place-items-center text-lg transition-all duration-200 ${chrome.base} ${chrome.glyph}`}
      >
        {face}
      </button>
    </div>
  );
}
