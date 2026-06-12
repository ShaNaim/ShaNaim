import { Reveal } from "@/components/shared/reveal";
import { GlassCard } from "@/components/atelier/ui/glass-card";
import { AtelierHeading } from "@/components/atelier/ui/atelier-heading";
import { experiences } from "@/data";

export function Journey() {
  return (
    <section id="journey" className="relative px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1240px]">
        <AtelierHeading kicker="03 — Experience" title={<>The journey <em>so far.</em></>} />

        <div className="relative space-y-10 md:border-l md:border-white/10 md:pl-12">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 120}>
              <div className="relative">
                {/* timeline node */}
                <span
                  aria-hidden
                  className="absolute top-9 -left-12 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_16px_var(--gold)] md:block"
                />

                <GlassCard className="p-7 md:p-9">
                  <header className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-cream md:text-2xl">{exp.title}</h3>
                      <div className="mt-1 font-serif text-lg text-gold italic">{exp.company}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      {exp.current && (
                        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1.5 font-mono text-[10px] tracking-[0.2em] text-gold uppercase">
                          <span className="h-1.5 w-1.5 animate-blink rounded-full bg-gold" />
                          Present
                        </span>
                      )}
                      <span className="rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-[11px] tracking-wider text-cream-dim">
                        {exp.period}
                      </span>
                    </div>
                  </header>

                  <ul className="mt-7 grid gap-x-10 gap-y-3.5 border-t border-white/[0.07] pt-7 md:grid-cols-2">
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-3 text-[13px] leading-[1.85] text-cream-dim">
                        <span aria-hidden className="mt-px text-[10px] text-gold">✦</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
