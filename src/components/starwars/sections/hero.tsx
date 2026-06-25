import { Reveal } from "@/components/shared/reveal";
import { DeathStarIcon } from "@/components/starwars/ui/icons";
import { personal, heroStats } from "@/data";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-5 pt-32 pb-20 md:px-10 md:pt-36">
      {/* Death Star looming in the corner */}
      <DeathStarIcon
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] text-starlight opacity-[0.05] md:-top-16 md:-right-10"
        strokeWidth={0.8}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="font-sans text-[15px] text-holo italic md:text-lg">
            A long time ago, in a galaxy far, far away....
          </p>
        </Reveal>

        {/* Main title — yellow, stacked, receding out of hyperspace */}
        <div className="title-recede mt-10">
          <h1
            className="font-display leading-[0.92] text-sw-yellow uppercase"
            style={{ textShadow: "0 0 40px rgba(255,232,31,0.25)" }}
          >
            <span className="block text-[clamp(48px,9.5vw,118px)] tracking-[0.02em]">{personal.firstName}</span>
            <span className="block text-[clamp(48px,9.5vw,118px)] tracking-[0.02em]">{personal.lastName}</span>
          </h1>
          <div className="font-sci mt-5 text-[13px] tracking-[0.5em] text-starlight/80 uppercase md:text-sm">
            Episode {personal.yearsExperience} — {personal.title}
          </div>
        </div>

        {/* Opening crawl */}
        <div className="crawl-stage mx-auto mt-14 max-w-xl">
          <div className="crawl-plane space-y-5 text-justify font-sans text-[15px] leading-[1.85] font-bold text-sw-yellow/90 md:text-base">
            <p>
              It is a period of deadline wars. {personal.firstName} {personal.lastName}, a {personal.title.toLowerCase()}{" "}
              with {personal.yearsExperience} years in the trenches, fights for clean interfaces across the Outer Rim
              of the web.
            </p>
            <p>{personal.description}</p>
            <p className="text-center italic">“{personal.quote}”</p>
          </div>
        </div>

        <Reveal delay={250}>
          <div className="mx-auto mt-14 flex max-w-xl items-stretch justify-center divide-x divide-white/10">
            {heroStats.map(({ num, label }) => (
              <div key={label} className="px-8 md:px-12">
                <div className="font-sci text-3xl font-bold text-holo tabular-nums md:text-4xl" style={{ textShadow: "0 0 18px rgba(111,214,255,0.5)" }}>
                  {num}
                </div>
                <div className="mt-2 font-mono text-[10px] tracking-[0.3em] text-star-dim uppercase">{label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={350}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#force"
              className="bg-sw-yellow px-8 py-3.5 font-mono text-[12px] font-bold tracking-[0.25em] text-void uppercase transition-all duration-200 hover:shadow-[0_0_36px_-6px_var(--sw-yellow)]"
            >
              Begin training ↓
            </a>
            <a
              href="#transmission"
              className="border border-holo/40 px-8 py-3.5 font-mono text-[12px] tracking-[0.25em] text-holo uppercase transition-all duration-200 hover:border-holo hover:shadow-[0_0_24px_-6px_var(--holo)]"
            >
              Send transmission
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
