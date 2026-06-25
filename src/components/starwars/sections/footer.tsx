import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import { personal } from "@/data";

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-5 py-9 md:px-10">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-5 md:flex-row">
        <Logo height={18} className="opacity-50" />
        <span className="font-mono text-[10px] tracking-[0.25em] text-star-dim/60 uppercase">
          © {new Date().getFullYear()} {personal.firstName} {personal.lastName} — may the Force be with your codebase
        </span>
        <Link
          href="/"
          className="font-mono text-[10px] tracking-[0.25em] text-star-dim/60 uppercase transition-colors duration-200 hover:text-sw-yellow"
        >
          ✦ return to the atelier
        </Link>
      </div>
    </footer>
  );
}
