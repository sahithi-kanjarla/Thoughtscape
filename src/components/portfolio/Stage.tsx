import { STAGE } from "@/data/portfolio";
import { SectionLabel } from "./shared";
import speaker from "@/assets/stage/speaker.svg";
import community from "@/assets/stage/community.svg";
import workshop from "@/assets/stage/workshop.svg";

const COVERS = [speaker, community, workshop, speaker, community];

export function Stage() {
  return (
    <section id="stage" className="py-28 md:py-40">
      <div className="px-6 md:px-10 max-w-[1400px] mx-auto w-full">
        <SectionLabel index="05 / stage" title="speaking & community —" />
        <p className="font-display italic text-cream/70 text-lg md:text-xl max-w-xl mb-10">
          Drag to scroll. Replace the placeholder vectors with real photos
          whenever you're ready.
        </p>
      </div>
      <div className="overflow-x-auto pb-6 px-6 md:px-10 snap-x snap-mandatory scrollbar-hide">
        <div className="flex gap-5 w-max">
          {STAGE.map((s, i) => (
            <article
              key={i}
              className="snap-start w-[78vw] sm:w-[440px] shrink-0 group"
            >
              <div className="aspect-[3/2] rounded-md overflow-hidden hairline border bg-surface relative">
                <img src={COVERS[i % COVERS.length]} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] text-cream/80 bg-background/60 backdrop-blur px-2 py-1 rounded-full border hairline">
                  {String(i + 1).padStart(2, "0")} / {String(STAGE.length).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display text-2xl mt-4 leading-tight text-cream">{s.title}</h3>
              <p className="text-cream/65 text-sm mt-1 max-w-xs">{s.caption}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
