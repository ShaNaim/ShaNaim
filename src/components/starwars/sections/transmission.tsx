import { Reveal } from "@/components/shared/reveal";
import { HoloPanel } from "@/components/starwars/ui/holo-panel";
import { DeathStarIcon } from "@/components/starwars/ui/icons";
import { socialLinks, personal } from "@/data";

export function Transmission() {
  return (
    <section id="transmission" className="relative overflow-hidden px-5 py-28 md:px-10 md:py-40">
      <DeathStarIcon
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-28 h-[420px] w-[420px] text-starlight opacity-[0.04]"
        strokeWidth={0.8}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="font-mono text-[11px] tracking-[0.5em] text-sw-yellow uppercase">
            Episode V — Transmission
          </div>
          <h2 className="font-sci mt-6 text-[clamp(30px,5.5vw,60px)] font-bold tracking-[0.06em] text-starlight uppercase">
            Join the alliance
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <HoloPanel flicker className="mx-auto mt-10 max-w-xl p-7 md:p-9">
            <p className="font-mono text-[12px] tracking-[0.2em] text-holo/80 uppercase">— incoming hologram —</p>
            <p className="mt-5 text-[14px] leading-[1.95] text-starlight/90">
              Let&apos;s create something awesome — preferably with fewer bugs, faster queries, and more coffee. Reach
              out. I don&apos;t bite (most of the time).
            </p>
            <p className="mt-4 font-sans text-[13px] text-holo italic">
              Help me, dear visitor — you&apos;re my only hope.
            </p>
          </HoloPanel>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map(({ label, href, highlight }) =>
              highlight ? (
                <a
                  key={label}
                  href={href}
                  className="bg-sw-yellow px-8 py-3.5 font-mono text-[12px] font-bold tracking-[0.25em] text-void uppercase transition-all duration-200 hover:shadow-[0_0_36px_-6px_var(--sw-yellow)]"
                >
                  {label} →
                </a>
              ) : (
                <a
                  key={label}
                  href={href}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="border border-holo/35 px-7 py-3.5 font-mono text-[12px] tracking-[0.25em] text-holo uppercase transition-all duration-200 hover:border-holo hover:shadow-[0_0_24px_-6px_var(--holo)]"
                >
                  {label} ↗
                </a>
              ),
            )}
          </div>
        </Reveal>

        <Reveal delay={350}>
          <div className="mt-12 space-y-1 font-mono text-[12px] tracking-[0.2em] text-star-dim/70">
            <div>{personal.email}</div>
            <div>{personal.phone}</div>
            <div className="pt-3 text-[10px] tracking-[0.35em] text-star-dim/50 uppercase">
              These are the contact links you&apos;re looking for.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
