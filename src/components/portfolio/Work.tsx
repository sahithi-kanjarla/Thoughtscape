import { motion } from "framer-motion";
import { SectionLabel } from "./shared";
import nutrisense from "@/assets/projects/nutrisense.svg";
import visionvoice from "@/assets/projects/visionvoice.svg";
import chemviz from "@/assets/projects/chemviz.svg";
import sales from "@/assets/projects/sales.svg";
import blindstick from "@/assets/projects/blindstick.svg";

const PROJECTS = [
  {
    n: "01",
    title: "NutriSense",
    year: "2025",
    tagline: "AI personal nutritionist for Indian households.",
    stack: ["React", "Supabase", "Gemini", "PostgreSQL"],
    cover: nutrisense,
    github: "#",
  },
  {
    n: "02",
    title: "VisionVoice AI",
    year: "2024",
    tagline: "Sight, narrated.",
    stack: ["Python", "OpenCV", "YOLOv8", "BLIP"],
    cover: visionvoice,
    github: "#",
  },
  {
    n: "03",
    title: "Chemical Equipment Viz",
    year: "2024",
    tagline: "Industrial monitoring, made readable.",
    stack: ["Django", "React", "PyQt5", "Chart.js"],
    cover: chemviz,
    github: "#",
  },
  {
    n: "04",
    title: "Sales Data Analysis",
    year: "2024",
    tagline: "From rows of CSV to revenue stories.",
    stack: ["Power BI"],
    cover: sales,
    github: "#",
  },
  {
    n: "05",
    title: "Smart Blind Stick",
    year: "2023",
    tagline: "Accessibility, embedded.",
    stack: ["Arduino", "Sensors", "C"],
    cover: blindstick,
    github: "#",
  },
];

export function Work() {
  return (
    <section id="work" className="px-6 md:px-10 py-28 md:py-40 max-w-[1400px] mx-auto w-full">
      <SectionLabel index="03 / selected work" title="things I built —" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
            className="group relative rounded-lg border hairline bg-surface/50 overflow-hidden hover:bg-surface transition-colors"
          >
            <div className="aspect-[4/3] overflow-hidden border-b hairline relative">
              <img
                src={p.cover}
                alt={`${p.title} cover`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
            </div>
            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="text-primary">{p.n}</span>
                <span>{p.year}</span>
              </div>
              <div>
                <h3 className="font-display text-xl tracking-tight text-cream leading-tight">
                  {p.title}
                </h3>
                <p className="font-display italic text-cream/65 text-sm mt-1 leading-snug">
                  {p.tagline}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border hairline text-cream/70"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cream/80 hover:text-primary transition border-t hairline pt-3 w-full"
              >
                <svg viewBox="0 0 24 24" className="size-3.5 fill-current" aria-hidden>
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
                view on github →
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
