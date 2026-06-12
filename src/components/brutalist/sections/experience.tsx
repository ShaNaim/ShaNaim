import { Reveal } from "@/components/shared/reveal";
import { GhostNumber } from "@/components/brutalist/ui/ghost-number";
import { SectionHeading } from "@/components/brutalist/ui/section-heading";
import { experiences } from "@/data";

export function Experience() {
  return (
    <section id="work" className="relative overflow-hidden px-5 py-20 md:px-10 md:py-28">
      <GhostNumber num="02" className="-left-20 top-8" />

      <div className="relative mx-auto max-w-[1320px]">
        <SectionHeading num="02" label="Experience" title="Where I've Shipped" />

        <div className="space-y-12 md:space-y-16">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 120}>
              <article className="border-3 border-ink bg-paper shadow-hard transition-transform duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px]">
                <header className="flex flex-wrap items-center justify-between gap-4 border-b-3 border-ink bg-paper-dim px-6 py-5 md:px-9">
                  <div>
                    <h3 className="font-display text-2xl uppercase md:text-3xl">{exp.title}</h3>
                    <div className="mt-1.5 font-mono text-sm font-bold tracking-wider text-accent">
                      @ {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 border-2 border-ink bg-yellow px-2.5 py-1.5 font-mono text-[10px] font-bold tracking-[0.15em] uppercase">
                        <span className="animate-blink text-accent">●</span> Now
                      </span>
                    )}
                    <span className="border-2 border-ink bg-ink px-3 py-1.5 font-mono text-[11px] font-bold tracking-wider text-paper">
                      {exp.period}
                    </span>
                  </div>
                </header>

                <ul className="grid gap-x-12 gap-y-4 px-6 py-7 md:grid-cols-2 md:px-9 md:py-9">
                  {exp.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[13px] leading-[1.8] text-ink/85">
                      <span className="mt-px font-mono font-bold text-accent">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
