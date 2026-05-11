import { motion } from "framer-motion";
import { CERTIFICATIONS } from "@/data/portfolio";
import { SectionLabel } from "./shared";
import ssocBadge from "@/assets/wins/ssoc.png";

export function Certifications() {
  return (
    <section id="certifications" className="px-6 md:px-10 py-28 md:py-40 max-w-[1400px] mx-auto w-full">
      <SectionLabel index="08 / certifications" title="paper trail —" />

      <div className="grid lg:grid-cols-3 gap-6 items-start">
        {/* Featured badge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-1 rounded-lg border hairline bg-surface/60 p-6 flex flex-col gap-4"
        >
          <div className="aspect-square rounded-md bg-background/60 border hairline flex items-center justify-center overflow-hidden">
            <img src={ssocBadge} alt="Social Summer of Code Contributor badge" className="w-3/4 h-3/4 object-contain" />
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-2">featured</p>
            <h3 className="font-display text-xl text-cream leading-tight">Social Summer of Code — Contributor</h3>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-2">'24 &amp; '25 · open source</p>
          </div>
        </motion.div>

        {/* List */}
        <ul className="lg:col-span-2 divide-y divide-cream/10 border-y hairline">
          {CERTIFICATIONS.filter((c) => c.file).map((c, i) => (
            <motion.li
              key={c.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group grid grid-cols-12 gap-3 md:gap-6 items-baseline py-5 md:py-6"
            >
              <span
                className="col-span-2 md:col-span-1 font-display italic text-cream/30 group-hover:text-primary transition-colors leading-none"
                style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="col-span-10 md:col-span-7">
                <h3 className="font-display text-base md:text-lg tracking-tight text-cream leading-snug">
                  {c.title}
                </h3>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-1 md:hidden">
                  {c.issuer} · {c.year}
                </p>
              </div>
              <span className="hidden md:block md:col-span-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {c.issuer}
              </span>
              <div className="col-span-12 md:col-span-2 md:text-right">
                {c.file ? (
                  <a
                    href={c.file}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-primary hover:underline underline-offset-4"
                  >
                    view ↗
                  </a>
                ) : (
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{c.year}</span>
                )}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
