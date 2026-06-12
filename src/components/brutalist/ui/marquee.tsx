interface MarqueeProps {
  items: string[];
  /** seconds for one full loop */
  speed?: number;
  className?: string;
  rotate?: number;
}

export function Marquee({ items, speed = 28, className = "", rotate = 0 }: MarqueeProps) {
  const row = items.map((item) => item.toUpperCase()).join("  ✦  ") + "  ✦  ";

  return (
    <div className={`overflow-x-clip py-4 ${className}`}>
      <div
        className="relative -mx-4 overflow-hidden border-y-3 border-ink bg-ink py-3"
        style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
      >
        <div className="marquee-track" style={{ "--marquee-speed": `${speed}s` } as React.CSSProperties}>
          <span className="whitespace-pre font-display text-lg tracking-wider text-paper md:text-xl">{row}</span>
          <span aria-hidden className="whitespace-pre font-display text-lg tracking-wider text-paper md:text-xl">
            {row}
          </span>
        </div>
      </div>
    </div>
  );
}
