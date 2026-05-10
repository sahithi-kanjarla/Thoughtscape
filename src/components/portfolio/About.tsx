import { FadeIn, SectionLabel } from "./shared";

export function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-28 md:py-40 max-w-[1400px] mx-auto w-full">
      <SectionLabel index="01 / about" title="hello —" />
      <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
        <FadeIn className="md:col-span-5 md:sticky md:top-24 space-y-6">
          <p className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight text-cream text-balance">
            I'm a <span className="italic">Computer Science</span> engineer who
            likes when technology feels{" "}
            <span className="text-primary italic">human</span>.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["AI", "Computer Vision", "OCR", "React", "Sustainability", "Community"].map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full border hairline text-cream/80"
              >
                {t}
              </span>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.1} className="md:col-span-7 space-y-6 text-cream/75 text-lg leading-relaxed">
          <p>
            I work where AI, creativity and accessibility overlap — building
            tools that are useful, considered and a little bit warm. Right now
            that's OCR pipelines at Nu10, an AI nutritionist for Indian
            kitchens, and an assistive vision prototype for visually impaired
            users.
          </p>
          <p>
            Off the keyboard, I run the founding chapter of GDG On Campus, host
            community days, and read more poetry than is strictly advisable for
            an engineer.
          </p>
          <p className="font-display italic text-cream text-2xl pt-4 border-t hairline">
            Curiosity first. Craft always.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
