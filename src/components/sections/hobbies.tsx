import { Reveal } from "@/components/effects/reveal";
import { GhostNumber } from "@/components/ui/ghost-number";
import { SectionHeading } from "@/components/ui/section-heading";
import { hobbies } from "@/data";

export function Hobbies() {
  return (
    <section id="quests" className="relative overflow-hidden px-5 py-20 md:px-10 md:py-28">
      <GhostNumber num="04" className="-left-16 bottom-0" />

      <div className="relative mx-auto max-w-[1320px]">
        <SectionHeading num="04" label="Off Duty" title="Side Quests" />

        <div className="grid grid-cols-2 gap-5 md:gap-8 lg:grid-cols-4">
          {hobbies.map(({ icon, label, desc }, i) => (
            <Reveal key={label} delay={i * 90}>
              <div
                className={`border-3 border-ink bg-paper p-6 text-center shadow-hard transition-transform duration-200 hover:-translate-y-1.5 hover:rotate-0 md:p-8 ${
                  i % 2 ? "rotate-2" : "-rotate-2"
                }`}
              >
                <div className="text-5xl md:text-6xl">{icon}</div>
                <div className="mt-5 font-display text-base uppercase md:text-lg">{label}</div>
                <div className="mt-1.5 font-mono text-[11px] text-ink-soft">{desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
