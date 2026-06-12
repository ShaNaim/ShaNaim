import { Reveal } from "@/components/effects/reveal";
import { GhostNumber } from "@/components/ui/ghost-number";
import { SectionHeading } from "@/components/ui/section-heading";
import { skills, getRange } from "@/data";
import { SkillLegend } from "./skill-legend";

const FILL_STRIPES = "repeating-linear-gradient(-45deg, transparent 0 5px, rgba(20,19,17,0.28) 5px 10px)";

export function Skills() {
  return (
    <section id="arsenal" className="relative overflow-hidden px-5 py-20 md:px-10 md:py-28">
      <GhostNumber num="03" className="-right-16 bottom-24" />

      <div className="relative mx-auto max-w-[1320px]">
        <SectionHeading num="03" label="Skills" title="The Arsenal" />

        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {Object.entries(skills).map(([category, list], i) => (
            <Reveal key={category} delay={i * 100}>
              <div className="h-full border-3 border-ink bg-paper p-6 shadow-hard md:p-8">
                <div className="mb-4 flex items-center justify-between gap-4 border-b-3 border-ink pb-4">
                  <h3 className="font-display text-base uppercase md:text-lg">{category}</h3>
                  <span className="font-mono text-[11px] font-bold text-accent">
                    [{String(list.length).padStart(2, "0")}]
                  </span>
                </div>

                {list.map(({ name, level }) => (
                  <div key={name} className="py-3">
                    <div className="mb-2 flex items-baseline justify-between gap-4">
                      <span className="font-mono text-[13px] font-bold tracking-wide">{name}</span>
                      <span className="font-mono text-[10px] font-bold text-ink-soft">{getRange(level)}</span>
                    </div>
                    <div
                      className="h-4 border-2 border-ink bg-paper-dim"
                      role="meter"
                      aria-valuenow={level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${name} proficiency`}
                    >
                      <div
                        className="h-full border-r-2 border-ink bg-accent"
                        style={{ width: `${Math.min(level, 100)}%`, backgroundImage: FILL_STRIPES }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <SkillLegend />
        </Reveal>
      </div>
    </section>
  );
}
