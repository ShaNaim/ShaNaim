import type { ReactNode } from "react";

interface HardButtonProps {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "accent" | "outline-paper";
  external?: boolean;
  className?: string;
}

const VARIANTS: Record<NonNullable<HardButtonProps["variant"]>, string> = {
  solid: "border-ink bg-ink text-paper shadow-hard-accent hover:bg-accent hover:border-accent hover:text-ink",
  outline: "border-ink bg-paper text-ink shadow-hard hover:bg-yellow",
  accent: "border-paper bg-accent text-paper shadow-hard-paper hover:bg-yellow hover:text-ink",
  "outline-paper": "border-paper bg-transparent text-paper shadow-hard-paper hover:bg-paper hover:text-ink",
};

export function HardButton({ href, children, variant = "outline", external, className = "" }: HardButtonProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center gap-2 border-3 px-6 py-3 font-mono text-sm font-bold tracking-[0.15em] uppercase transition-all duration-150 hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
