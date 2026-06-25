"use client";

import { useState, useEffect, useRef } from "react";

interface AnimatedBarProps {
  level: number;
  color: string;
  delay?: number;
}

export function AnimatedBar({ level, color, delay = 0 }: AnimatedBarProps) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const t = setTimeout(() => setWidth(level), delay);
          obs.disconnect();
          return () => clearTimeout(t);
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref} className="h-[3px] w-full rounded-[2px] overflow-hidden" style={{ backgroundColor: "#161616" }}>
      <div
        className="h-full transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          width: `${width}%`,
          background: color,
          boxShadow: `0 0 8px ${color}50`,
        }}
      />
    </div>
  );
}
