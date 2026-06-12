import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  className?: string;
}

export function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-block border-2 border-ink bg-paper px-2.5 py-1 font-mono text-[11px] font-bold tracking-wider uppercase transition-colors duration-150 hover:bg-ink hover:text-paper ${className}`}
    >
      {children}
    </span>
  );
}
