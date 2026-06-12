import { Logo } from "@/components/shared/logo";
import { personal } from "@/data";

const NAV_LINKS = [
  { href: "#craft", label: "Craft" },
  { href: "#arsenal", label: "Arsenal" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-night/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 py-4 md:px-10">
        <a href="#home" aria-label="Back to top">
          <Logo height={26} className="transition-opacity duration-200 hover:opacity-80" />
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-mono text-[11px] tracking-[0.3em] text-cream-dim uppercase transition-colors duration-200 hover:text-gold"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${personal.email}`}
          className="rounded-full border border-gold/40 px-5 py-2 font-mono text-[11px] tracking-[0.2em] text-gold uppercase transition-all duration-200 hover:border-gold hover:bg-gold hover:text-night"
        >
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
}
