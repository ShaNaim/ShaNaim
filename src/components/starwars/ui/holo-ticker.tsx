interface HoloTickerProps {
  items: string[];
  speed?: number;
  className?: string;
}

/** Holonet news feed — scrolling cyan transmission strip. */
export function HoloTicker({ items, speed = 38, className = "" }: HoloTickerProps) {
  const row = "HOLONET FEED ▸ " + items.map((item) => item.toUpperCase()).join(" ▸ ") + " ▸ ";

  return (
    <div className={`holo-scanlines overflow-x-clip border-y border-holo/15 bg-holo/[0.02] py-3.5 ${className}`}>
      <div className="marquee-track" style={{ "--marquee-speed": `${speed}s` } as React.CSSProperties}>
        <span className="font-mono text-[11px] tracking-[0.3em] whitespace-pre text-holo/70">{row}</span>
        <span aria-hidden className="font-mono text-[11px] tracking-[0.3em] whitespace-pre text-holo/70">
          {row}
        </span>
      </div>
    </div>
  );
}
