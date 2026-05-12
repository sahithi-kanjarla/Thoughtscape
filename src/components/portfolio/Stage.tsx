import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionLabel } from "./shared";
import speakerFallback from "@/assets/stage/speaker.svg";
import communityFallback from "@/assets/stage/community.svg";

const winAssets = import.meta.glob("../../assets/wins/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

type StageCard = {
  title: string;
  caption: string;
  imageHints: string[];
  fallback: string;
};

const CARDS: StageCard[] = [
  {
    title: "Founding Lead - GDG On Campus",
    caption: "Led AI Study Jams, workshops, technical events, and student developer activities.",
    imageHints: ["gdg certificate", "gdg clg certificate"],
    fallback: communityFallback,
  },
  {
    title: "Host - AgentCon",
    caption: "Hosted sessions and coordinated community interactions at Microsoft Office.",
    imageHints: ["agentcon"],
    fallback: speakerFallback,
  },
  {
    title: "Women Techmakers Volunteer",
    caption: "Supported inclusive technology initiatives centered on learning and collaboration.",
    imageHints: ["wtm", "wtm2", "wtm cert"],
    fallback: communityFallback,
  },
  {
    title: "Literature Club",
    caption: "A creative space for poetry, writing, expression, and student community.",
    imageHints: ["litgalour", "litgalour2"],
    fallback: communityFallback,
  },
  {
    title: "SIH Internal Hackathon 2024",
    caption: "Helped coordinate student participation and event flow for the internal hackathon.",
    imageHints: ["sih 2024 co ordinator", "sih coordinator", "student coordinator"],
    fallback: communityFallback,
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
  const entries = Object.entries(winAssets)
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

function StageImage({ card, index }: { card: StageCard; index: number }) {
  const images = findImages(card.imageHints);
  const sources = images.length > 0 ? images : [card.fallback];
  const [active, setActive] = useState(0);
  const showControls = sources.length > 1;

  const goToPrevious = () => {
    setActive((current) => (current === 0 ? sources.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActive((current) => (current + 1) % sources.length);
  };

  return (
    <div className="aspect-[4/3] rounded-md overflow-hidden hairline border bg-background/70 relative">
      <img
        src={sources[active]}
        alt={card.title}
        className="h-full w-full object-contain bg-surface transition-transform duration-700 group-hover:scale-[1.02]"
      />
      <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] text-cream/80 bg-background/70 backdrop-blur px-2 py-1 rounded-full border hairline">
        {String(index + 1).padStart(2, "0")} / {String(CARDS.length).padStart(2, "0")}
      </span>
      {showControls && (
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
          <button
            type="button"
            onClick={goToPrevious}
            className="grid size-9 place-items-center rounded-full border hairline bg-background/70 text-cream backdrop-blur transition hover:bg-primary hover:text-background"
            aria-label={`Previous image for ${card.title}`}
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/80 bg-background/70 backdrop-blur px-2 py-1 rounded-full border hairline">
            {active + 1} / {sources.length}
          </span>
          <button
            type="button"
            onClick={goToNext}
            className="grid size-9 place-items-center rounded-full border hairline bg-background/70 text-cream backdrop-blur transition hover:bg-primary hover:text-background"
            aria-label={`Next image for ${card.title}`}
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}

export function Stage() {
  return (
    <section id="stage" className="py-28 md:py-40">
      <div className="px-6 md:px-10 max-w-[1400px] mx-auto w-full">
        <SectionLabel index="05 / stage" title="speaking & community -" />
        <p className="font-display italic text-cream/70 text-lg md:text-xl max-w-xl mb-10">
          Drag to scroll through talks, organizing, volunteering, and community moments.
        </p>
      </div>
      <div className="overflow-x-auto pb-6 px-6 md:px-10 snap-x snap-mandatory scrollbar-hide">
        <div className="flex gap-5 w-max">
          {CARDS.map((card, i) => (
            <article
              key={card.title}
              className="snap-start w-[82vw] sm:w-[440px] shrink-0 group"
            >
              <StageImage card={card} index={i} />
              <h3 className="font-display text-2xl mt-4 leading-tight text-cream">
                {card.title}
              </h3>
              <p className="text-cream/65 text-sm mt-1 max-w-xs">{card.caption}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
