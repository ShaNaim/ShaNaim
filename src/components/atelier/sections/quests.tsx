import { Reveal } from "@/components/shared/reveal";
import { GlassCard } from "@/components/atelier/ui/glass-card";
import { AtelierHeading } from "@/components/atelier/ui/atelier-heading";
import { hobbies } from "@/data";

export function Quests() {
  return (
    <section id="quests" className="relative px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1240px]">
        <AtelierHeading kicker="04 — Off duty" title={<>Beyond <em>the code.</em></>} />

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {hobbies.map(({ icon, label, desc }, i) => (
            <Reveal key={label} delay={i * 80}>
              <GlassCard className="group p-7 text-center md:p-9">
                <div className="text-4xl transition-transform duration-300 group-hover:-translate-y-1.5 md:text-5xl">
                  {icon}
                </div>
                <div className="mt-5 font-serif text-lg text-cream italic">{label}</div>
                <div className="mt-1.5 font-mono text-[11px] text-cream-dim">{desc}</div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
