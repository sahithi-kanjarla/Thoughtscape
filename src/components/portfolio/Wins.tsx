import { ACHIEVEMENTS } from "@/data/portfolio";
import { motion } from "framer-motion";
import { SectionLabel } from "./shared";
import awsSwags from "@/assets/wins/AWS swags.jpg";
import scholarshipImage from "@/assets/wins/scholarship.jpg";
import sihThirdPlace from "@/assets/wins/SIH cert 3rd place.jpeg";
import ssoc from "@/assets/wins/ssoc.png";

const visibleAchievements = ACHIEVEMENTS.filter((achievement) => {
  const title = achievement.title.toLowerCase();
  return !title.includes("gdg on campus") && !title.includes("agentcon");
});

function getAchievementImage(title: string) {
  const normalizedTitle = title.toLowerCase();

  if (normalizedTitle.includes("sih")) return sihThirdPlace;
  if (normalizedTitle.includes("aws")) return awsSwags;
  if (normalizedTitle.includes("social summer") || normalizedTitle.includes("open source")) return ssoc;
  if (normalizedTitle.includes("scholarship")) return scholarshipImage;

  return scholarshipImage;
}

export function Wins() {
  return (
    <section id="wins" className="px-6 md:px-10 py-28 md:py-40 max-w-[1400px] mx-auto w-full">
      <SectionLabel index="07 / wins" title="things I'm proud of -" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visibleAchievements.map((a, i) => (
          <motion.article
            key={a.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.06 }}
            className="group rounded-lg border hairline bg-surface/50 overflow-hidden hover:bg-surface transition-colors"
          >
            <div className="aspect-[4/3] bg-background border-b hairline relative overflow-hidden">
              <img
                src={getAchievementImage(a.title)}
                alt={a.title}
                className="h-full w-full object-contain bg-surface transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg leading-tight text-cream">{a.title}</h3>
              {a.detail && (
                <p className="text-sm leading-relaxed text-cream/80 dark:text-cream/65 mt-3">
                  {a.detail}
                </p>
              )}
              {a.note && (
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary mt-2">
                  {a.note}
                </p>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
