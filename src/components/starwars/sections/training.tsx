import { Reveal } from "@/components/shared/reveal";
import { HoloPanel } from "@/components/starwars/ui/holo-panel";
import { SWHeading } from "@/components/starwars/ui/sw-heading";
import { SaberHiltIcon } from "@/components/starwars/ui/icons";
import { skills, skillLegend, getRange } from "@/data";

/* Blade colour by mastery — green for the masters, red for the still-dangerous. */
const RANGE_COLORS: Record<string, string> = {
  "101+": "var(--sw-yellow)",
  "90+": "var(--saber-green)",
  "80+": "var(--saber-blue)",
  "70+": "#b06bff",
  "60+": "var(--saber-red)",
  "<50": "#9aa0ae",
};

function bladeColor(level: number): string {
  return RANGE_COLORS[getRange(level)] ?? "#9aa0ae";
}

export function Training() {
  return (
    <section id="training" className="relative px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1240px]">
        <SWHeading episode="Episode II — Saber Training" title="Choose your weapon" />

        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([category, list], i) => (
            <Reveal key={category} delay={i * 90}>
              <HoloPanel className="h-full p-7 md:p-8">
                <div className="mb-7 flex items-baseline justify-between gap-4 border-b border-white/[0.07] pb-5">
                  <h3 className="font-sci text-base font-bold tracking-[0.15em] text-starlight uppercase">{category}</h3>
                  <span className="font-mono text-[11px] text-star-dim/60">{String(list.length).padStart(2, "0")}</span>
                </div>

                <div className="space-y-7">
                  {list.map(({ name, level }) => {
                    const color = bladeColor(level);
                    return (
                      <div key={name}>
                        <div className="mb-2.5 flex items-baseline justify-between gap-4">
                          <span className="text-[14px] font-medium text-starlight">{name}</span>
                          <span className="font-mono text-[12px] text-star-dim tabular-nums">
                            <span style={{ color }}>{level}</span>/100
                          </span>
                        </div>
                        {/* the saber: hilt + igniting blade */}
                        <div className="flex items-center">
                          <SaberHiltIcon className="h-3.5 w-9 shrink-0 text-star-dim" />
                          <div className="h-[4px] flex-1">
                            <div
                              className="grow-bar h-full rounded-r-full bg-white"
                              style={{
                                "--bar-w": `${Math.min(level, 100)}%`,
                                boxShadow: `0 0 5px 1px ${color}, 0 0 16px 3px color-mix(in srgb, ${color} 55%, transparent)`,
                              } as React.CSSProperties}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </HoloPanel>
            </Reveal>
          ))}
        </div>

        {/* Mastery legend — the ranks, by blade colour */}
        <Reveal delay={150}>
          <HoloPanel className="mt-6 p-7 md:p-8" flicker>
            <div className="font-mono text-[11px] tracking-[0.35em] text-sw-yellow uppercase">Rank decoder</div>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
              {skillLegend.map(({ range, fun }) => (
                <div key={range} className="border border-white/10 p-3.5">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full bg-white"
                      style={{ boxShadow: `0 0 6px 2px ${RANGE_COLORS[range] ?? "#9aa0ae"}` }}
                    />
                    <span className="font-sci text-sm font-bold text-starlight">{range}</span>
                  </div>
                  <div className="mt-1.5 font-mono text-[11px] leading-snug text-star-dim">{fun}</div>
                </div>
              ))}
            </div>
          </HoloPanel>
        </Reveal>
      </div>
    </section>
  );
}
