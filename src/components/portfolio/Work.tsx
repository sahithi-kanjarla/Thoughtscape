import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionLabel } from "./shared";
import nutrisense from "@/assets/projects/nutrisense.svg";
import visionvoice from "@/assets/projects/visionvoice.svg";
import chemviz from "@/assets/projects/chemviz.svg";
import sales from "@/assets/projects/sales.svg";
import blindstick from "@/assets/projects/blindstick.svg";

const projectAssets = import.meta.glob("../../assets/projects/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

type ProjectCard = {
  n: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  cover: string;
  github: string;
  imageHints: string[];
};

const PROJECTS: ProjectCard[] = [
  {
    n: "01",
    title: "NutriSense",
    tagline: "AI personal nutritionist for Indian households.",
    description:
      "Built an AI-powered digital pantry and nutrition platform that helps users track meals, monitor nutritional intake, manage pantry inventory, and receive personalized pantry-aware dietary recommendations based on health goals and available ingredients.",
    stack: ["React", "Supabase", "Gemini", "PostgreSQL"],
    cover: nutrisense,
    github: "https://github.com/sahithi-kanjarla/nutrisense",
    imageHints: ["nutrisense-1", "nutrisense-2", "nutrisense-3", "nutrisense-5", "nutrisense-6", "nutrisense-8", "nutrisense-9", "nutrisense-10"],
  },
  {
    n: "02",
    title: "VisionVoice AI",
    tagline: "Sight, narrated.",
    description:
      "Combines YOLOv8, BLIP, and text-to-speech to describe nearby objects and scenes for more accessible environmental awareness.",
    stack: ["Python", "OpenCV", "YOLOv8", "BLIP"],
    cover: visionvoice,
    github: "#",
    imageHints: ["vision-voice"],
  },
  {
    n: "03",
    title: "Chemical Equipment Viz",
    tagline: "Industrial monitoring, made readable.",
    description:
      "A hybrid web and desktop analytics platform for equipment parameter tracking, trend analysis, and real-time performance visualization.",
    stack: ["Django", "React", "PyQt5", "Chart.js"],
    cover: chemviz,
    github: "https://github.com/sahithi-kanjarla/Chemical-Equipment-Parameter-Visualizer",
    imageHints: ["chem-1", "chem-2", "chem-3"],
  },
  {
    n: "04",
    title: "Sales Data Analysis",
    tagline: "From rows of CSV to revenue stories.",
    description:
      "Cleaned and transformed sales data into interactive Power BI dashboards for revenue trends, customer behavior, and KPI tracking.",
    stack: ["Power BI"],
    cover: sales,
    github: "https://github.com/sahithi-kanjarla/powerBI_dashboard",
    imageHints: ["dashboard"],
  },
  {
    n: "05",
    title: "Smart Blind Stick",
    tagline: "Accessibility, embedded.",
    description:
      "An Arduino-based smart stick prototype using distance sensors and real-time alerts to support safer independent navigation.",
    stack: ["Arduino", "Sensors", "C"],
    cover: blindstick,
    github: "https://github.com/sahithi-kanjarla/Smart-Cane-Stick",
    imageHints: ["blind stick", "blind"],
  },
];

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function compact(value: string) {
  return normalize(value).replace(/\s+/g, "");
}

function findImages(hints: string[]) {
  const entries = Object.entries(projectAssets)
    .map(([path, src]) => ({
      name: normalize(path.split(/[\\/]/).pop() ?? path),
      compactName: compact(path.split(/[\\/]/).pop() ?? path),
      src,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const used = new Set<string>();

  return hints
    .map((hint) => {
      const normalizedHint = normalize(hint);
      const compactHint = compact(hint);
      const match =
        entries.find(
          ({ name, compactName, src }) =>
            !used.has(src) &&
            (name === normalizedHint || compactName === compactHint),
        ) ??
        entries.find(
          ({ name, compactName, src }) =>
            !used.has(src) &&
            (name.includes(normalizedHint) || compactName.includes(compactHint)),
        );

      if (match) {
        used.add(match.src);
      }

      return match?.src;
    })
    .filter((src): src is string => Boolean(src));
}

function ProjectImage({ project }: { project: ProjectCard }) {
  const images = findImages(project.imageHints);
  const sources = images.length > 0 ? images : [project.cover];
  const [active, setActive] = useState(0);
  const showControls = sources.length > 1;

  const goToPrevious = () => {
    setActive((current) => (current === 0 ? sources.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActive((current) => (current + 1) % sources.length);
  };

  return (
    <div className="aspect-[3/2] overflow-hidden border-b hairline relative rounded-t-lg bg-surface">
      <img
        src={sources[active]}
        alt={`${project.title} screenshot`}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.05]"
      />
      {showControls && (
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
          <button
            type="button"
            onClick={goToPrevious}
            className="grid size-8 place-items-center rounded-full border hairline bg-background/70 text-cream backdrop-blur transition hover:bg-primary hover:text-background"
            aria-label={`Previous image for ${project.title}`}
          >
            <ChevronLeft className="size-3.5" aria-hidden="true" />
          </button>
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-cream/80 bg-background/70 backdrop-blur px-1.5 py-0.5 rounded-full border hairline">
            {active + 1} / {sources.length}
          </span>
          <button
            type="button"
            onClick={goToNext}
            className="grid size-8 place-items-center rounded-full border hairline bg-background/70 text-cream backdrop-blur transition hover:bg-primary hover:text-background"
            aria-label={`Next image for ${project.title}`}
          >
            <ChevronRight className="size-3.5" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="px-6 md:px-10 py-28 md:py-40 max-w-[1400px] mx-auto w-full">
      <SectionLabel index="04 / selected work" title="things I built —" />
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
            <ProjectImage project={p} />
            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="text-primary">{p.n}</span>
              </div>
              <div>
                <h3 className="font-display text-xl tracking-tight text-cream leading-tight">
                  {p.title}
                </h3>
                <p className="font-display italic text-cream/90 dark:text-cream/65 text-[15px] mt-1 leading-snug">
                  {p.tagline}
                </p>
              </div>
              <p className="text-[15px] leading-relaxed text-cream/90 dark:text-cream/65">
                {p.description}
              </p>
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
              {p.github && p.github !== "#" && (
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
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
