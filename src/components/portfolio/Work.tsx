import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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
    description:
      "Identifies regional dishes from photos, tracks micronutrients and recommends meals against your health goals — built on Indian food composition data.",
    stack: ["React", "Supabase", "Gemini 2.5 Flash", "PostgreSQL"],
    cover: nutrisense,
  },
  {
    n: "02",
    title: "VisionVoice AI",
    year: "2024",
    tagline: "Sight, narrated.",
    description:
      "Assistive prototype: real-time object detection plus scene captioning, returned as natural audio responses with a memory of what it just saw.",
    stack: ["Python", "OpenCV", "YOLOv8", "BLIP", "gTTS"],
    cover: visionvoice,
  },
  {
    n: "03",
    title: "Chemical Equipment Viz",
    year: "2024",
    tagline: "Industrial monitoring, made readable.",
    description:
      "Hybrid analytics platform pairing a Django + React backend with a desktop PyQt5 client for live equipment dashboards.",
    stack: ["Django", "React", "PyQt5", "Chart.js", "Matplotlib"],
    cover: chemviz,
  },
  {
    n: "04",
    title: "Sales Data Analysis",
    year: "2024",
    tagline: "From rows of CSV to revenue stories.",
    description:
      "Exploratory analysis and Power BI dashboards for revenue tracking, KPI breakdowns and business insights.",
    stack: ["Power BI"],
    cover: sales,
  },
  {
    n: "05",
    title: "Smart Blind Stick",
    year: "2023",
    tagline: "Accessibility, embedded.",
    description:
      "An obstacle-detecting cane built on Arduino + ultrasonic sensors to help visually impaired users navigate safely.",
    stack: ["Arduino Uno", "Sensors", "C"],
    cover: blindstick,
  },
];

function ProjectCard({ p, i }: { p: (typeof PROJECTS)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => { x.set(0); y.set(0); };

  const reversed = i % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
      className={`grid md:grid-cols-12 gap-6 md:gap-12 items-center ${reversed ? "md:[&>*:first-child]:order-2" : ""}`}
    >
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
        className="md:col-span-7 group relative aspect-[16/10] rounded-md overflow-hidden hairline border bg-surface"
      >
        <img
          src={p.cover}
          alt={`${p.title} cover`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          {p.stack.map((s) => (
            <span key={s} className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-background/70 backdrop-blur border hairline text-cream/90">
              {s}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="md:col-span-5 space-y-4">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-primary">{p.n}</span>
          <span className="h-px w-8 bg-cream/20" />
          <span>{p.year}</span>
        </div>
        <h3 className="font-display text-4xl md:text-5xl leading-tight tracking-tight text-cream">
          {p.title}
        </h3>
        <p className="font-display italic text-cream/70 text-lg">{p.tagline}</p>
        <p className="text-cream/65 max-w-md">{p.description}</p>
      </div>
    </motion.article>
  );
}

export function Work() {
  return (
    <section id="work" className="px-6 md:px-10 py-28 md:py-40 max-w-[1400px] mx-auto w-full">
      <SectionLabel index="02 / selected work" title="things I built —" />
      <div className="space-y-28 md:space-y-40">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.n} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
