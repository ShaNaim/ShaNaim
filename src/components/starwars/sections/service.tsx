import { Reveal } from "@/components/shared/reveal";
import { HoloPanel } from "@/components/starwars/ui/holo-panel";
import { SWHeading } from "@/components/starwars/ui/sw-heading";
import { TrooperIcon } from "@/components/starwars/ui/icons";
import { experiences } from "@/data";

export function Service() {
  return (
    <section id="service" className="relative overflow-hidden px-5 py-24 md:px-10 md:py-32">
      {/* trooper watermark */}
      <TrooperIcon
        aria-hidden
        className="pointer-events-none absolute top-24 -right-20 h-[380px] w-[380px] text-starlight opacity-[0.04]"
        strokeWidth={0.7}
      />

      <div className="relative mx-auto max-w-[1240px]">
        <SWHeading episode="Episode III — Deployments" title="Service Record" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 120}>
              <HoloPanel className="p-7 md:p-9">
                <header className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center border border-holo/25 text-holo">
                      <TrooperIcon className="h-7 w-7" />
                    </span>
                    <div>
                      <h3 className="font-sci text-lg font-bold tracking-wide text-starlight uppercase md:text-xl">
                        {exp.title}
                      </h3>
                      <div className="mt-1 font-mono text-[13px] tracking-wider text-sw-yellow">@ {exp.company}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    {exp.current && (
                      <span className="inline-flex items-center gap-2 border border-saber-green/50 bg-saber-green/10 px-3.5 py-1.5 font-mono text-[10px] tracking-[0.2em] text-saber-green uppercase">
                        <span className="h-1.5 w-1.5 animate-blink rounded-full bg-saber-green shadow-[0_0_8px_var(--saber-green)]" />
                        Active tour
                      </span>
                    )}
                    <span className="border border-white/10 px-3.5 py-1.5 font-mono text-[11px] tracking-wider text-star-dim">
                      {exp.period}
                    </span>
                  </div>
                </header>

                <ul className="mt-7 grid gap-x-10 gap-y-3.5 border-t border-white/[0.07] pt-7 md:grid-cols-2">
                  {exp.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[13px] leading-[1.85] text-star-dim">
                      <span aria-hidden className="mt-[3px] text-[10px] text-holo">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </HoloPanel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
