import { EDUCATION } from "@/data/portfolio";
import { FadeIn, SectionLabel } from "./shared";

export function Education() {
  return (
    <section id="education" className="px-6 md:px-10 py-28 md:py-40 max-w-[1400px] mx-auto w-full">
      <SectionLabel index="02 / education" title="how I got here —" />
      <div className="grid md:grid-cols-3 gap-4">
        {EDUCATION.map((e, i) => (
          <FadeIn key={e.school} delay={i * 0.06}>
            <div className="h-full rounded-lg border hairline bg-surface/60 p-6 flex flex-col gap-4 hover:bg-surface transition">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                {e.period}
              </div>
              <div>
                <h3 className="font-display text-2xl tracking-tight text-cream leading-tight">
                  {e.school}
                </h3>
                <p className="font-display italic text-cream/80 dark:text-cream/60 mt-1">{e.degree}</p>
              </div>
              <div className="font-mono text-sm text-cream/85">{e.score}</div>
              {e.notes.length > 0 && (
                <ul className="mt-auto space-y-1 text-sm text-cream/80 dark:text-cream/65">
                  {e.notes.map((n) => (
                    <li key={n} className="flex gap-2">
                      <span className="text-primary">·</span>
                      {n}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
