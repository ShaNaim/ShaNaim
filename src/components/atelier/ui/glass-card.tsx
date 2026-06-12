import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/[0.07] bg-white/[0.03] transition-all duration-300 hover:-translate-y-[3px] hover:border-gold/35 hover:bg-white/[0.05] hover:shadow-[0_20px_60px_-20px_rgba(196,162,101,0.25)] ${className}`}
    >
      {children}
    </div>
  );
}
