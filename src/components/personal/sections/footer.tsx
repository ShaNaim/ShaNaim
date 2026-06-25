import { socialLinks } from "@/data";

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 px-6 md:px-12 py-6 bg-[var(--p-bg)] border-t border-[var(--p-stroke-subtle)]">
      <span className="text-[11px] text-[var(--p-text-mid)] tracking-widest uppercase">
        © {new Date().getFullYear()} SHANAIM SHOUROV 🇧🇩
      </span>
      <span className="hidden md:block text-[11px] text-[var(--p-text-dim)] tracking-widest uppercase">
        Built with Next.js + TypeScript
      </span>
      <div className="flex items-center gap-5">
        {socialLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={label === "Email Me" ? undefined : "_blank"}
            rel={label === "Email Me" ? undefined : "noreferrer"}
            className="text-[10px] text-[var(--p-text-dim)] tracking-[0.15em] uppercase transition-colors duration-200 hover:text-[var(--p-brand)]"
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
