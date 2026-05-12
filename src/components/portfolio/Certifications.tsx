import { motion } from "framer-motion";
import { CERTIFICATIONS } from "@/data/portfolio";
import { SectionLabel } from "./shared";

export function Certifications() {
  return (
    <section id="certifications" className="px-6 md:px-10 py-28 md:py-40 max-w-[1400px] mx-auto w-full">
      <SectionLabel index="08 / certifications" title="paper trail —" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CERTIFICATIONS.filter((c) => !c.title.toLowerCase().includes("social summer")).map((c, i) => {
          return (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="group rounded-lg border hairline bg-surface/60 overflow-hidden flex flex-col hover:border-primary/40 transition-colors"
            >
              {/* Preview */}
              <div className="relative aspect-[4/3] bg-background border-b hairline overflow-hidden">
                {c.file ? (
                  <>
                    <object
                      data={`${c.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                      type="application/pdf"
                      className="w-full h-full pointer-events-none"
                      aria-label={c.title}
                    >
                      <div className="w-full h-full grid place-items-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        pdf preview
                      </div>
                    </object>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-[0.22em] text-cream bg-background/70 backdrop-blur px-2 py-1 rounded-full border hairline">
                      pdf
                    </span>
                  </>
                ) : (
                  <div className="w-full h-full grid place-items-center font-display italic text-cream/15 text-7xl">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em]">
                  <span className="text-primary">{c.issuer}</span>
                  <span className="text-muted-foreground">{c.year}</span>
                </div>
                <h3 className="font-display text-lg leading-snug text-cream flex-1">{c.title}</h3>
                {c.file && (
                  <a
                    href={c.file}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-cream hover:text-primary transition-colors mt-1 pt-3 border-t hairline"
                  >
                    open certificate
                    <span className="text-primary">↗</span>
                  </a>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
