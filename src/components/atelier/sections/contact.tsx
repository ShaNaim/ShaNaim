import { Reveal } from "@/components/shared/reveal";
import { GlowField } from "@/components/atelier/ui/glow-field";
import { socialLinks, personal } from "@/data";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-5 py-28 md:px-10 md:py-40">
      <GlowField />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="font-mono text-[11px] tracking-[0.45em] text-gold uppercase">05 — Contact</div>
          <h2 className="mt-7 font-serif text-[clamp(40px,7vw,84px)] leading-[1.08] font-light text-cream">
            Let&apos;s create something <em className="text-shimmer italic">awesome.</em>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="mx-auto mt-8 max-w-xl text-[14px] leading-[1.95] text-cream-dim">
            Preferably with fewer bugs, faster queries, and more coffee. Reach out — I don&apos;t bite (most of the
            time).
          </p>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map(({ label, href, highlight }) =>
              highlight ? (
                <a
                  key={label}
                  href={href}
                  className="rounded-full bg-gold px-8 py-3.5 font-mono text-[12px] font-bold tracking-[0.2em] text-night uppercase transition-all duration-200 hover:bg-gold-light hover:shadow-[0_0_40px_-8px_var(--gold)]"
                >
                  {label} →
                </a>
              ) : (
                <a
                  key={label}
                  href={href}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="rounded-full border border-white/15 px-7 py-3.5 font-mono text-[12px] tracking-[0.2em] text-cream uppercase transition-all duration-200 hover:border-gold/60 hover:text-gold"
                >
                  {label} ↗
                </a>
              ),
            )}
          </div>
        </Reveal>

        <Reveal delay={350}>
          <div className="mt-12 space-y-1 font-mono text-[12px] tracking-[0.2em] text-cream-dim/70">
            <div>{personal.email}</div>
            <div>{personal.phone}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
