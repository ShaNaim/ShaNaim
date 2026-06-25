import { Reveal } from "@/components/shared/reveal";

interface SWHeadingProps {
  episode: string;
  title: string;
  className?: string;
}

export function SWHeading({ episode, title, className = "" }: SWHeadingProps) {
  return (
    <Reveal className={`mb-14 md:mb-20 ${className}`}>
      <div className="font-mono text-[11px] tracking-[0.5em] text-sw-yellow uppercase">{episode}</div>
      <h2 className="font-sci mt-4 text-[clamp(28px,4.5vw,52px)] font-bold tracking-[0.08em] text-starlight uppercase">
        {title}
      </h2>
      <div
        className="mt-5 h-[3px] w-28 rounded-full bg-white"
        style={{ boxShadow: "0 0 5px var(--saber-blue), 0 0 16px var(--saber-blue)" }}
      />
    </Reveal>
  );
}
