import { ACHIEVEMENTS } from "@/data/portfolio";
import { motion } from "framer-motion";
import { SectionLabel } from "./shared";

export function Wins() {
  return (
    <section id="wins" className="px-6 md:px-10 py-28 md:py-40 max-w-[1400px] mx-auto w-full">
      <SectionLabel index="06 / wins" title="things I'm proud of —" />
      <ul className="divide-y divide-cream/15 border-y hairline">
        {ACHIEVEMENTS.map((a, i) => (
          <motion.li
            key={a}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className="group flex items-baseline gap-6 md:gap-10 py-6 md:py-8 hover:pl-3 transition-[padding] duration-500"
          >
            <span
              className="font-display text-cream/30 group-hover:text-primary transition-colors duration-500 leading-none"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontVariationSettings: '"wght" 300' }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-display text-cream text-xl md:text-3xl leading-tight tracking-tight flex-1">
              {a}
            </span>
            <span className="hidden md:inline text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-2xl">→</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
