"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Noise } from "@/components/shared/noise";
import { DesignSwitch, type EditionId } from "@/components/shared/design-switch";

/**
 * Static export produces exactly one 404.html served for every unmatched path
 * on any host — there's no server to pick a themed variant per route prefix.
 * So this reads the URL the browser actually landed on and themes itself
 * client-side, rather than shipping unreachable per-segment not-found pages.
 */
function editionFromPath(pathname: string): EditionId {
  if (pathname.startsWith("/atelier")) return "atelier";
  if (pathname.startsWith("/brutalist")) return "print";
  if (pathname.startsWith("/starwars")) return "saber";
  return "personal";
}

export default function NotFound() {
  const [edition, setEdition] = useState<EditionId>("personal");

  useEffect(() => {
    setEdition(editionFromPath(window.location.pathname));
  }, []);

  if (edition === "atelier") {
    return (
      <div className="theme-atelier flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <Noise />
        <p className="font-mono text-[11px] tracking-[0.3em] text-gold uppercase">404</p>
        <h1 className="mt-6 font-serif text-[clamp(36px,6vw,64px)] leading-tight font-light text-cream italic">
          This piece hasn&apos;t been crafted yet.
        </h1>
        <p className="mt-5 max-w-md text-sm text-cream-dim">
          Whatever you were looking for isn&apos;t on display in this atelier.
        </p>
        <Link
          href="/atelier/"
          className="mt-10 rounded-full border border-gold/30 px-6 py-2.5 font-mono text-[11px] tracking-[0.2em] text-cream-dim uppercase backdrop-blur-md transition-colors duration-200 hover:border-gold/70 hover:text-gold"
        >
          Back to the atelier
        </Link>
        <DesignSwitch on="atelier" />
      </div>
    );
  }

  if (edition === "print") {
    return (
      <div className="theme-print flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <Noise />
        <div className="border-3 border-ink bg-paper px-10 py-8 shadow-hard-lg">
          <div className="font-display text-[clamp(80px,16vw,180px)] leading-none font-black text-ink uppercase">404</div>
          <p className="mt-2 font-mono text-[12px] font-bold tracking-[0.25em] text-accent uppercase">Missing Page</p>
        </div>
        <p className="mt-8 max-w-md font-mono text-sm text-ink-soft">
          Same developer, same facts — this page just isn&apos;t one of them.
        </p>
        <Link
          href="/brutalist/"
          className="mt-10 border-3 border-ink bg-paper px-6 py-2.5 font-mono text-[11px] font-bold tracking-[0.2em] text-ink uppercase shadow-hard-sm transition-transform duration-150 hover:-translate-y-[2px]"
        >
          Back to Print
        </Link>
        <DesignSwitch on="print" />
      </div>
    );
  }

  if (edition === "saber") {
    return (
      <div className="theme-saber flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <Noise />
        <p className="font-mono text-[11px] tracking-[0.3em] text-holo uppercase">Transmission Lost — 404</p>
        <h1 className="font-sci mt-6 text-[clamp(32px,5vw,52px)] font-bold tracking-wide text-starlight uppercase">
          These aren&apos;t the pages you&apos;re looking for
        </h1>
        <p className="mt-5 max-w-md font-mono text-sm text-star-dim">
          The holonet has no record of this transmission. Move along.
        </p>
        <Link
          href="/starwars/"
          className="mt-10 border border-holo/30 px-6 py-2.5 font-mono text-[11px] tracking-[0.2em] text-star-dim uppercase backdrop-blur-md transition-colors duration-200 hover:border-holo/70 hover:text-holo"
        >
          Return to the Holonet
        </Link>
        <DesignSwitch on="saber" />
      </div>
    );
  }

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-6 font-mono"
      style={{ backgroundColor: "#080808", color: "#e8e8e8" }}
    >
      <div className="font-bebas leading-none text-[#ff4d00]" style={{ fontSize: "clamp(96px, 20vw, 220px)" }}>
        404
      </div>
      <p className="mt-2 text-[13px] tracking-[0.2em] uppercase" style={{ color: "#666666" }}>
        ERR_PAGE_NOT_FOUND
      </p>
      <p className="mt-6 max-w-md text-center text-sm" style={{ color: "#9d9d9d" }}>
        This route doesn&apos;t exist — much like my sleep schedule.
      </p>
      <Link
        href="/"
        className="mt-10 border border-[#ff4d0050] px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase transition-colors duration-200 hover:border-[#ff4d00]/70 hover:text-[#ff4d00]"
      >
        cd ~ &amp;&amp; ./go-home
      </Link>
      <DesignSwitch on="personal" />
    </div>
  );
}
