import type { ReactNode } from "react";

interface StickerProps {
  children: ReactNode;
  color?: "yellow" | "accent" | "blue" | "paper";
  rotate?: number;
  className?: string;
}

const COLORS: Record<NonNullable<StickerProps["color"]>, string> = {
  yellow: "bg-yellow text-ink",
  accent: "bg-accent text-paper",
  blue: "bg-blue text-paper",
  paper: "bg-paper text-ink",
};

/** A rotated, hard-shadowed label — like a sticker slapped on a poster. */
export function Sticker({ children, color = "yellow", rotate = -4, className = "" }: StickerProps) {
  return (
    <span
      className={`inline-block border-3 border-ink px-4 py-2 font-mono text-xs font-bold tracking-[0.2em] uppercase shadow-hard-sm ${COLORS[color]} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}
