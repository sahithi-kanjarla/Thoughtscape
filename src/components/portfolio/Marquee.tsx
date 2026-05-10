import { MARQUEE } from "@/data/portfolio";

export function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="border-y hairline overflow-hidden bg-background/40 py-5">
      <div className="flex gap-10 animate-marquee whitespace-nowrap will-change-transform">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-10 font-display italic text-cream/70"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
          >
            {item}
            <span className="text-primary not-italic font-sans">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
