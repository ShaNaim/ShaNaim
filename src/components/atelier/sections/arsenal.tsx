import { Reveal } from "@/components/shared/reveal";
import { GlassCard } from "@/components/atelier/ui/glass-card";
import { AtelierHeading } from "@/components/atelier/ui/atelier-heading";
import { skills, getProTier } from "@/data";

export function Arsenal() {
  return (
    <section id="arsenal" className="relative px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1240px]">
        <AtelierHeading kicker="02 — Proficiency" title={<>An arsenal, <em>measured.</em></>} />

        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([category, list], i) => (
            <Reveal key={category} delay={i * 90}>
              <GlassCard className="h-full p-7 md:p-8">
                <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-white/[0.07] pb-5">
                  <h3 className="font-serif text-xl text-cream italic md:text-2xl">{category}</h3>
                  <span className="font-mono text-[11px] text-cream-dim/60">{String(list.length).padStart(2, "0")}</span>
                </div>

                <div className="space-y-6">
                  {list.map(({ name, level }) => (
                    <div key={name}>
                      <div className="mb-2.5 flex items-baseline justify-between gap-4">
                        <span className="flex items-baseline gap-3 text-[14px] font-medium text-cream">
                          {name}
                          <span className="font-mono text-[10px] tracking-[0.2em] text-gold/70 uppercase">
                            {getProTier(level)}
                          </span>
                        </span>
                        <span className="font-mono text-[12px] text-cream-dim tabular-nums">
                          <span className="text-gold">{level}</span>/100
                        </span>
                      </div>
                      <div className="h-[5px] overflow-hidden rounded-full bg-white/[0.06]">
                        <div
                          className="grow-bar h-full rounded-full"
                          style={{
                            "--bar-w": `${Math.min(level, 100)}%`,
                            background: "linear-gradient(90deg, var(--bronze), var(--gold) 60%, var(--gold-light))",
                            boxShadow: "0 0 12px rgba(196,162,101,0.45)",
                          } as React.CSSProperties}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
