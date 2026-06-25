import { FadeIn } from "@/components/personal/ui/fade-in";
import { hobbies } from "@/data";

const ABOUT_BLURB = `I'm a hardcore burger enthusiast and a part-time 😪 gamer, with an unexpected side quest in astrophysics (because let's be honest—debugging and black holes have a lot in common). When I'm not lost in code or contemplating the meaning of existence, you'll find me chilling with family, cracking jokes with friends, or plotting how to use technology to take over the world… or at least make my life slightly more convenient.`;

export function Hobbies() {
  return (
    <section className="py-20 px-6 md:px-12" style={{ backgroundColor: "#080808" }}>
      <div className="max-w-[900px] mx-auto">
        <FadeIn>
          <div
            className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-px"
            style={{ backgroundColor: "#161616", border: "1px solid #161616" }}
          >
            {hobbies.map(({ icon, label, desc }) => (
              <div
                key={label}
                className="group py-8 px-6 text-center transition-colors duration-200 hover:bg-[#0c0c0c]"
                style={{ backgroundColor: "#080808" }}
              >
                <div
                  className="text-[28px] mb-2.5 transition-transform duration-300 group-hover:-translate-y-1"
                >
                  {icon}
                </div>
                <h4
                  className="font-bebas text-[17px] tracking-[0.1em] mb-1 uppercase"
                  style={{ color: "#e8e8e8" }}
                >
                  {label}
                </h4>
                <p className="text-[11px] tracking-wider leading-relaxed" style={{ color: "#2e2e2e" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
          <p
            className="mt-6 text-[11px] leading-[1.9] tracking-[0.03em] transition-opacity duration-500 hover:opacity-100"
            style={{ color: "#666666", opacity: 0.5 }}
          >
            {ABOUT_BLURB}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
