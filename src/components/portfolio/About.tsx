import { FadeIn, SectionLabel } from "./shared";

export function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-28 md:py-40 max-w-[1400px] mx-auto w-full">
      <SectionLabel index="01 / about" title="hello -" />
      <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
        <FadeIn className="md:col-span-5 md:sticky md:top-24 space-y-6">
          <p className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight text-cream text-balance">
            Building technology with{" "}
            <span className="text-primary italic">creativity</span>, intention,
            and <span className="text-primary italic">impact</span>.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["AI", "OCR", "Computer Vision", "Accessibility", "Data", "Community"].map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full border hairline text-cream/80"
              >
                {t}
              </span>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.1} className="md:col-span-7 space-y-6 text-cream/80 dark:text-cream/75 text-lg leading-relaxed">
          <p>
            I'm Sahithi, a Computer Science Engineering student interested in
            building meaningful technology through AI, creativity, accessibility,
            and data-driven solutions.
          </p>
          <p>
            I enjoy working on different kinds of projects across AI, OCR
            systems, computer vision, assistive technology, and data analytics -
            currently including OCR quality evaluation pipelines at Nu10
            Technologies, an AI-powered nutrition platform for Indian households,
            and an assistive vision prototype for visually impaired users.
          </p>
          <p>
            Beyond technology, I enjoy organizing community-driven initiatives,
            technical events, and collaborative learning experiences. Outside
            tech, I enjoy drawing, classical dance, poetry, and journaling.
          </p>
          <p className="font-display italic text-cream text-2xl pt-4 border-t hairline">
            Useful, human-centered, and purposeful.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
