import { personal } from "@/data";

export function Footer() {
  return (
    <footer className="border-t-2 border-paper/15 bg-ink px-5 py-8 md:px-10">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-4 font-mono text-[10px] font-bold tracking-[0.25em] text-paper/40 uppercase md:flex-row">
        <span>
          © {new Date().getFullYear()} {personal.firstName} {personal.lastName}
        </span>
        <span>Static · Handcrafted · No templates harmed</span>
        <a href="#home" className="text-paper/70 transition-colors hover:text-accent">
          ↑ Back to top
        </a>
      </div>
    </footer>
  );
}
