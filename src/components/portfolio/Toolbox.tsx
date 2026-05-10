import { EXPLORING, SKILL_GROUPS } from "@/data/portfolio";
import { FadeIn, SectionLabel } from "./shared";

export function Toolbox() {
  return (
    <section id="toolbox" className="px-6 md:px-10 py-28 md:py-40 max-w-[1400px] mx-auto w-full">
      <SectionLabel index="04 / toolbox" title="how the work gets made —" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[minmax(140px,auto)]">
        {SKILL_GROUPS.map((g, i) => {
          const span =
            g.size === "lg" ? "md:col-span-2 md:row-span-2" : g.size === "md" ? "md:col-span-2" : "";
          return (
            <FadeIn key={g.label} delay={i * 0.04} className={span}>
              <div className="h-full rounded-lg border hairline bg-surface/60 p-5 md:p-6 flex flex-col gap-4 hover:bg-surface transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {g.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full border hairline text-cream/85"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn delay={0.3} className="mt-10">
        <div className="rounded-lg border border-primary/40 bg-primary/[0.04] p-5 md:p-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
            currently exploring
          </span>
          <div className="flex flex-wrap gap-2">
            {EXPLORING.map((e) => (
              <span
                key={e}
                className="font-display italic text-cream/90 text-lg"
              >
                {e}<span className="text-primary not-italic font-sans ml-2">·</span>
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
