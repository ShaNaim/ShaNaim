import type { ReactNode } from "react";

export function Pill({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-block px-3 py-[3px] rounded-[2px] text-[10px] tracking-[0.12em] uppercase font-medium whitespace-nowrap select-none ${className}`}
      style={{ border: "1px solid #ff4d00", color: "#ff4d00" }}
    >
      {children}
    </span>
  );
}
