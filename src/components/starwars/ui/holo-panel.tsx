import type { ReactNode } from "react";

interface HoloPanelProps {
  children: ReactNode;
  className?: string;
  /** adds the transmission flicker — use sparingly */
  flicker?: boolean;
}

/** A hologram projection: cyan hairline, scanlines, faint glow. */
export function HoloPanel({ children, className = "", flicker = false }: HoloPanelProps) {
  return (
    <div
      className={`holo-scanlines relative rounded-lg border border-holo/20 bg-holo/[0.03] shadow-[0_0_30px_-12px_rgba(111,214,255,0.4),inset_0_0_24px_-12px_rgba(111,214,255,0.35)] transition-all duration-300 hover:border-holo/45 hover:bg-holo/[0.05] ${flicker ? "holo-flicker" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
