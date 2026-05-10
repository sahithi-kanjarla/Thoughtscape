import { FadeIn, SectionLabel } from "./shared";
import portrait from "@/assets/portrait.svg";

export function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-28 md:py-40 max-w-[1400px] mx-auto w-full">
      <SectionLabel index="01 / about" title="hello —" />
      <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
        <FadeIn className="md:col-span-4 md:sticky md:top-24">
          <div className="aspect-[4/5] rounded-md overflow-hidden hairline border bg-surface">
            <img src={portrait} alt="Portrait of Sahithi" className="w-full h-full object-cover" />
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-3">
            sahithi, in pixels
          </p>
        </FadeIn>
        <FadeIn delay={0.1} className="md:col-span-8 space-y-8">
          <p className="font-display text-3xl md:text-5xl leading-[1.1] tracking-tight text-cream text-balance">
            I'm a <span className="italic">Computer Science</span> engineer who
            likes when technology feels{" "}
            <span className="text-primary italic">human</span>.
          </p>
          <div className="grid sm:grid-cols-2 gap-8 text-cream/75 max-w-2xl">
            <p>
              I work where AI, creativity and accessibility overlap — building
              tools that are useful, considered and a little bit warm. Right
              now that's OCR pipelines at Nu10, an AI nutritionist for Indian
              kitchens, and an assistive vision prototype for visually impaired
              users.
            </p>
            <p>
              Off the keyboard, I run the founding chapter of GDG On Campus,
              host community days, and read more poetry than is strictly
              advisable for an engineer.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-4">
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
      </div>
    </section>
  );
}
