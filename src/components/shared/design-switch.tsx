import Link from "next/link";

const EDITIONS = [
  { id: "atelier", href: "/", label: "Atelier", glyph: "◐" },
  { id: "print", href: "/brutalist/", label: "Print", glyph: "◧" },
  { id: "saber", href: "/starwars/", label: "Holonet", glyph: "✦" },
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
};

interface DesignSwitchProps {
  /** the edition this indicator is rendered on */
  on: EditionId;
}

/**
 * Quiet floating edition indicator. Hover (or focus) fans out the other
 * editions; tapping the glyph itself cycles to the next one (touch fallback).
 */
export function DesignSwitch({ on }: DesignSwitchProps) {
  const chrome = CHROME[on];
  const others = EDITIONS.filter((e) => e.id !== on);
  const next = others[0];

  return (
    <div className="group fixed right-5 bottom-5 z-50 flex flex-col items-end gap-2">
      {others.map(({ id, href, label, glyph }) => (
        <Link
          key={id}
          href={href}
          className={`pointer-events-none flex translate-y-2 items-center gap-2.5 px-3.5 py-2 font-mono text-[10px] tracking-[0.2em] uppercase opacity-0 transition-all duration-300 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 ${chrome.option}`}
        >
          <span aria-hidden>{glyph}</span>
          {label} edition
        </Link>
      ))}

      <Link
        href={next.href}
        aria-label={`Switch design edition (next: ${next.label})`}
        title="Switch design edition"
        className={`grid h-11 w-11 place-items-center text-lg transition-all duration-200 ${chrome.base} ${chrome.glyph}`}
      >
        ◐
      </Link>
    </div>
  );
}
