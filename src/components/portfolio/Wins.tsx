import { ACHIEVEMENTS } from "@/data/portfolio";
import { motion } from "framer-motion";
import { SectionLabel } from "./shared";

export function Wins() {
  return (
    <section id="wins" className="px-6 md:px-10 py-28 md:py-40 max-w-[1400px] mx-auto w-full">
      <SectionLabel index="07 / wins" title="things I'm proud of —" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {ACHIEVEMENTS.map((a, i) => (
          <motion.article
            key={a.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.06 }}
            className="group rounded-lg border hairline bg-surface/50 overflow-hidden hover:bg-surface transition-colors"
          >
            {/* image placeholder — swap src later */}
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-surface to-background border-b hairline relative flex items-center justify-center">
              <span className="font-display text-cream/15 text-7xl italic">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="absolute bottom-2 right-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/60">
                add image
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg leading-tight text-cream">{a.title}</h3>
              {a.note && (
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary mt-2">
                  {a.note}
                </p>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
