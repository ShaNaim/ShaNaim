import { Logo } from "@/components/shared/logo";
import { personal } from "@/data";

const NAV_LINKS = [
  { href: "#work", num: "02", label: "Work" },
  { href: "#arsenal", num: "03", label: "Arsenal" },
  { href: "#quests", num: "04", label: "Quests" },
  { href: "#contact", num: "05", label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b-3 border-ink bg-paper">
      <nav className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-5 py-3 md:px-10">
        <a href="#home" className="flex items-center gap-2.5 font-display text-xl">
          <span className="inline-block -rotate-3 border-2 border-ink bg-ink px-2.5 py-1.5 transition-transform duration-200 hover:rotate-3">
            <Logo height={16} />
          </span>
          <span className="hidden tracking-tight sm:inline">
            SHOUROV<span className="text-accent">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map(({ href, num, label }) => (
            <a
              key={href}
              href={href}
              className="font-mono text-[11px] font-bold tracking-[0.25em] uppercase transition-colors hover:text-accent"
            >
              <span className="text-accent">{num}/</span>
              {label}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${personal.email}`}
          className="border-3 border-ink bg-accent px-4 py-1.5 font-mono text-[11px] font-bold tracking-[0.2em] text-paper uppercase shadow-hard-sm transition-all duration-150 hover:-translate-y-[2px] hover:bg-yellow hover:text-ink active:translate-y-[2px] active:shadow-none"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}
