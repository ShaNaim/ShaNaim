import { Logo } from "@/components/shared/logo";
import { personal } from "@/data";

const NAV_LINKS = [
  { href: "#force", label: "The Force" },
  { href: "#training", label: "Training" },
  { href: "#service", label: "Service" },
  { href: "#transmission", label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.06] bg-void/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 py-4 md:px-10">
        <a href="#home" aria-label="Back to top">
          <Logo height={24} className="transition-opacity duration-200 hover:opacity-80" />
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="saber-link font-mono text-[11px] tracking-[0.3em] text-star-dim uppercase transition-colors duration-200 hover:text-starlight"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${personal.email}`}
          className="border border-sw-yellow/50 px-5 py-2 font-mono text-[11px] font-bold tracking-[0.25em] text-sw-yellow uppercase transition-all duration-200 hover:bg-sw-yellow hover:text-void hover:shadow-[0_0_24px_-4px_var(--sw-yellow)]"
        >
          Transmit
        </a>
      </nav>
    </header>
  );
}
