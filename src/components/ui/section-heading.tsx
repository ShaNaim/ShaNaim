import { Reveal } from "@/components/effects/reveal";

interface SectionHeadingProps {
  num: string;
  label: string;
  title: string;
  invert?: boolean;
}

export function SectionHeading({ num, label, title, invert = false }: SectionHeadingProps) {
  return (
    <Reveal className="mb-14 md:mb-20">
      <div className="flex items-center gap-4">
        <span
          className={`border-3 border-ink px-2.5 py-1 font-display text-sm ${
            invert ? "border-paper bg-paper text-ink" : "bg-ink text-paper"
          }`}
        >
          {num}
        </span>
        <span
          className={`font-mono text-[11px] font-bold tracking-[0.4em] uppercase ${
            invert ? "text-paper/60" : "text-ink-soft"
          }`}
        >
          {label}
        </span>
        <span className={`h-[3px] flex-1 ${invert ? "bg-paper/20" : "bg-ink/15"}`} />
      </div>
      <h2
        className={`mt-5 font-display text-[clamp(44px,8vw,96px)] leading-[0.88] uppercase ${
          invert ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <div className="mt-5 h-[6px] w-28 bg-accent" />
    </Reveal>
  );
}
