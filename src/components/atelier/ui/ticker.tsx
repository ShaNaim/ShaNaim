interface TickerProps {
  items: string[];
  speed?: number;
  className?: string;
}

/** Understated scrolling strip — hairlines and small caps, no heavy bands. */
export function Ticker({ items, speed = 40, className = "" }: TickerProps) {
  const row = items.map((item) => item.toUpperCase()).join("      ✦      ") + "      ✦      ";

  return (
    <div className={`overflow-x-clip border-y border-white/5 py-4 ${className}`}>
      <div className="marquee-track" style={{ "--marquee-speed": `${speed}s` } as React.CSSProperties}>
        <span className="font-mono text-[11px] tracking-[0.35em] whitespace-pre text-gold/50">{row}</span>
        <span aria-hidden className="font-mono text-[11px] tracking-[0.35em] whitespace-pre text-gold/50">
          {row}
        </span>
      </div>
    </div>
  );
}
