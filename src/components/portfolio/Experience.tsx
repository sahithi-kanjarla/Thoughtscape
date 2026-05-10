import { motion } from "framer-motion";
import { EXPERIENCE } from "@/data/portfolio";
import { SectionLabel } from "./shared";

export function Experience() {
  return (
    <section id="experience" className="px-6 md:px-10 py-28 md:py-40 max-w-[1400px] mx-auto w-full">
      <SectionLabel index="03 / experience" title="where I've been —" />
      <div className="space-y-16">
        {EXPERIENCE.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.05 }}
            className="grid md:grid-cols-12 gap-6 md:gap-10 border-t hairline border-cream/15 pt-10"
          >
            <div className="md:col-span-3">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                {e.year}
              </div>
              {e.location && (
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-1">
                  {e.location}
                </div>
              )}
            </div>
            <div className="md:col-span-9">
              <h3 className="font-display text-3xl md:text-4xl tracking-tight text-cream">
                {e.role}
              </h3>
              <p className="font-display italic text-cream/60 text-lg mt-1">{e.org}</p>
              <ul className="mt-5 space-y-2 text-cream/70 max-w-2xl">
                {e.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="text-primary mt-2 size-1 rounded-full bg-primary shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
