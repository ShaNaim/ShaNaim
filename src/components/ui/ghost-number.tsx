interface GhostNumberProps {
  num: string;
  className?: string;
  invert?: boolean;
}

/** Enormous background section number, barely visible — pure decoration. */
export function GhostNumber({ num, className = "", invert = false }: GhostNumberProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute font-display text-[clamp(200px,32vw,460px)] leading-none select-none ${
        invert ? "text-paper/[0.04]" : "text-ink/[0.05]"
      } ${className}`}
    >
      {num}
    </div>
  );
}
