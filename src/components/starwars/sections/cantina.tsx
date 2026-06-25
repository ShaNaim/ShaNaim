import { Reveal } from "@/components/shared/reveal";
import { HoloPanel } from "@/components/starwars/ui/holo-panel";
import { SWHeading } from "@/components/starwars/ui/sw-heading";
import { hobbies } from "@/data";

export function Cantina() {
  return (
    <section id="cantina" className="relative px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1240px]">
        <SWHeading episode="Episode IV — Off Duty" title="Cantina Hours" />

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {hobbies.map(({ icon, label, desc }, i) => (
            <Reveal key={label} delay={i * 80}>
              <HoloPanel className="group p-7 text-center md:p-9">
                <div className="text-4xl transition-transform duration-300 group-hover:-translate-y-1.5 md:text-5xl">
                  {icon}
                </div>
                <div className="font-sci mt-5 text-sm font-bold tracking-[0.15em] text-starlight uppercase">{label}</div>
                <div className="mt-1.5 font-mono text-[11px] text-star-dim">{desc}</div>
              </HoloPanel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
