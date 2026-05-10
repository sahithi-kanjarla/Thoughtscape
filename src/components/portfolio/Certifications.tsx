import { motion } from "framer-motion";
import { CERTIFICATIONS } from "@/data/portfolio";
import { SectionLabel } from "./shared";

export function Certifications() {
  return (
    <section id="certifications" className="px-6 md:px-10 py-28 md:py-40 max-w-[1400px] mx-auto w-full">
      <SectionLabel index="08 / certifications" title="paper trail —" />
      <ul className="divide-y divide-cream/15 border-y hairline">
        {CERTIFICATIONS.map((c, i) => (
          <motion.li
            key={c.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group grid md:grid-cols-12 gap-4 md:gap-8 items-baseline py-6 md:py-7 hover:pl-3 transition-[padding] duration-500"
          >
            <span
              className="md:col-span-1 font-display text-cream/30 group-hover:text-primary transition-colors leading-none"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="md:col-span-7 font-display text-xl md:text-2xl tracking-tight text-cream leading-tight">
              {c.title}
            </h3>
            <span className="md:col-span-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {c.issuer}
            </span>
            <span className="md:col-span-1 font-mono text-[11px] uppercase tracking-[0.2em] text-primary md:text-right">
              {c.year}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
