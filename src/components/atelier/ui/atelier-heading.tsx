import { Reveal } from "@/components/shared/reveal";
import type { ReactNode } from "react";

interface AtelierHeadingProps {
  kicker: string;
  /** Serif headline. Wrap a word in <em> via the `accent` prop for the italic gold flourish. */
  title: ReactNode;
  className?: string;
}

export function AtelierHeading({ kicker, title, className = "" }: AtelierHeadingProps) {
  return (
    <Reveal className={`mb-14 md:mb-20 ${className}`}>
      <div className="flex items-center gap-4">
        <span className="h-px w-10 bg-gold/60" />
        <span className="font-mono text-[11px] tracking-[0.45em] text-gold uppercase">{kicker}</span>
      </div>
      <h2 className="mt-5 max-w-3xl font-serif text-[clamp(36px,5.5vw,68px)] leading-[1.05] font-light text-cream [&_em]:font-serif [&_em]:italic [&_em]:text-gold">
        {title}
      </h2>
    </Reveal>
  );
}
