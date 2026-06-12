import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { GlowField } from "@/components/atelier/ui/glow-field";
import { personal, heroStats } from "@/data";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pt-28 pb-16 md:px-10">
      <GlowField />

      {/* Logo watermark */}
      <Image
        src="/logo.svg"
        alt=""
        aria-hidden
        width={2400}
        height={884}
        className="pointer-events-none absolute top-1/2 left-1/2 w-[min(86vw,920px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.05] select-none"
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <Reveal>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 font-mono text-[11px] tracking-[0.3em] text-cream-dim uppercase">
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-gold" />
            {personal.title} — open to work
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="select-none">
            <span className="text-shimmer block font-serif text-[clamp(64px,12vw,160px)] leading-[1.0] font-light italic">
              Shanaim
            </span>
            <span className="mt-1 block font-sans text-[clamp(40px,7.5vw,96px)] leading-[1.05] font-bold tracking-[0.08em] text-cream uppercase">
              Shourov
            </span>
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p className="mx-auto mt-9 max-w-2xl text-[15px] leading-[1.95] text-cream-dim md:text-base">
            {personal.description}
          </p>
          <p className="mt-5 font-serif text-base text-gold/80 italic md:text-lg">“{personal.quote}”</p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mx-auto mt-12 flex max-w-xl items-stretch justify-center divide-x divide-white/10">
            {heroStats.map(({ num, label }) => (
              <div key={label} className="px-8 md:px-12">
                <div className="font-serif text-4xl text-gold tabular-nums md:text-5xl">{num}</div>
                <div className="mt-2 font-mono text-[10px] tracking-[0.3em] text-cream-dim uppercase">{label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={420}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#craft"
              className="rounded-full bg-gold px-8 py-3.5 font-mono text-[12px] font-bold tracking-[0.2em] text-night uppercase transition-all duration-200 hover:bg-gold-light hover:shadow-[0_0_40px_-8px_var(--gold)]"
            >
              Explore the craft ↓
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-8 py-3.5 font-mono text-[12px] tracking-[0.2em] text-cream uppercase transition-all duration-200 hover:border-gold/60 hover:text-gold"
            >
              Get in touch
            </a>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.4em] text-cream-dim/50 uppercase">
        scroll
      </div>
    </section>
  );
}
