import { Reveal } from "@/components/effects/reveal";
import { GhostNumber } from "@/components/ui/ghost-number";
import { HardButton } from "@/components/ui/hard-button";
import { socialLinks } from "@/data";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t-3 border-ink bg-ink px-5 py-24 md:px-10 md:py-32">
      <GhostNumber num="05" invert className="-right-12 -bottom-10" />

      <div className="relative mx-auto max-w-[1320px]">
        <Reveal>
          <div className="font-mono text-[11px] font-bold tracking-[0.4em] text-paper/50 uppercase">
            05 / Contact — no forms, no bots, just links
          </div>
          <h2 className="mt-7 font-display text-[clamp(46px,9vw,120px)] leading-[0.88] uppercase">
            <span className="block text-paper">Let&apos;s Create</span>
            <span className="block text-outline-paper">Something</span>
            <span className="block text-accent" style={{ textShadow: "0.05em 0.05em 0 var(--paper)" }}>
              Awesome.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-9 max-w-[46ch] font-mono text-[13px] leading-[1.9] text-paper/70">
            Preferably with fewer bugs, faster queries, and more coffee. Reach out — I don&apos;t bite (most of the
            time).
          </p>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-12 flex flex-wrap gap-5 md:gap-6">
            {socialLinks.map(({ label, href, highlight }) => (
              <HardButton
                key={label}
                href={href}
                external={href.startsWith("http")}
                variant={highlight ? "accent" : "outline-paper"}
              >
                {label} <span aria-hidden>{highlight ? "→" : "↗"}</span>
              </HardButton>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
