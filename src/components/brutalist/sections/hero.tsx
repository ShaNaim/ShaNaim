import { Reveal } from "@/components/shared/reveal";
import { GhostNumber } from "@/components/brutalist/ui/ghost-number";
import { Sticker } from "@/components/brutalist/ui/sticker";
import { Tag } from "@/components/brutalist/ui/tag";
import { personal, heroStats, techStack, coreCompetencies, softSkills } from "@/data";

const STAT_TILT = ["-rotate-1", "rotate-1", "-rotate-1"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-5 pt-28 pb-16 md:px-10 md:pt-36 md:pb-24">
      <GhostNumber num="01" className="-right-12 top-20" />

      <div className="relative mx-auto max-w-[1320px]">
        {/* Top ticker line */}
        <Reveal>
          <div className="mb-10 flex flex-col gap-2 border-b-2 border-ink/20 pb-4 font-mono text-[11px] font-bold tracking-[0.3em] text-ink-soft uppercase sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-6">
            <span>Portfolio — 2026 Edition</span>
            <span className="hidden md:inline">{personal.email}</span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 animate-blink bg-accent" />
              Open to work
            </span>
          </div>
        </Reveal>

        {/* Poster name */}
        <Reveal delay={100}>
          <h1 className="font-display text-[clamp(56px,12.5vw,176px)] leading-[0.85] uppercase">
            <span className="block text-ink" style={{ textShadow: "0.045em 0.045em 0 var(--accent)" }}>
              {personal.firstName}
            </span>
            <span className="block text-outline">{personal.lastName}</span>
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Sticker rotate={-3}>★ {personal.title}</Sticker>
            <Sticker color="blue" rotate={2}>
              {personal.yearsExperience} yrs in the trenches
            </Sticker>
          </div>
        </Reveal>

        {/* Bio / competencies split */}
        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal delay={200}>
            <p className="max-w-[54ch] text-[15px] leading-[1.9] md:text-base">{personal.description}</p>
            <p className="mt-6 border-l-4 border-accent pl-4 font-mono text-[13px] text-ink-soft italic">
              “{personal.quote}”
            </p>

            <div className="mt-10 grid max-w-md grid-cols-3 gap-4 md:gap-5">
              {heroStats.map(({ num, label }, i) => (
                <div key={label} className={`border-3 border-ink bg-paper p-4 shadow-hard-sm ${STAT_TILT[i]}`}>
                  <div className="font-display text-4xl text-accent tabular-nums md:text-5xl">{num}</div>
                  <div className="mt-1.5 font-mono text-[10px] font-bold tracking-[0.2em] uppercase">{label}</div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <div className="mb-3 font-mono text-[10px] font-bold tracking-[0.4em] text-ink-soft uppercase">
                ⚙ The Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="h-fit border-3 border-ink bg-paper p-6 shadow-hard md:p-8">
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="font-display text-base uppercase md:text-lg">Core Competencies</span>
                <span className="font-mono text-[11px] font-bold text-accent">
                  [{String(coreCompetencies.length).padStart(2, "0")}]
                </span>
              </div>

              {coreCompetencies.map((item, i) => (
                <div
                  key={item}
                  className="flex items-baseline gap-3 border-b-2 border-dashed border-ink/15 py-3 text-[13px] tracking-wide last:border-0"
                >
                  <span className="font-mono text-[10px] font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                  {item}
                </div>
              ))}

              <div className="mt-7 mb-3 font-mono text-[10px] font-bold tracking-[0.4em] text-ink-soft uppercase">
                Soft Skills
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <Tag key={skill} className="text-[10px]">
                    {skill}
                  </Tag>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex items-center gap-3 font-mono text-[10px] font-bold tracking-[0.35em] text-ink/35 uppercase">
          <span className="h-[2px] w-12 bg-accent" />
          Scroll for the good stuff ↓
        </div>
      </div>
    </section>
  );
}
