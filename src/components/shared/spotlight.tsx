"use client";

import { useEffect, useRef } from "react";

/** Soft gold glow that trails the cursor. Pointer-only — hidden on touch. */
export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        ref.current?.style.setProperty("transform", `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`);
      });
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[5] hidden overflow-hidden [@media(hover:hover)]:block">
      <div
        ref={ref}
        className="h-[600px] w-[600px] rounded-full transition-transform duration-200 ease-out will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(196,162,101,0.09) 0%, transparent 60%)",
          transform: "translate(-100%, -100%)",
        }}
      />
    </div>
  );
}
