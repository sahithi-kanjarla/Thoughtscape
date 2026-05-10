import { motion } from "framer-motion";

export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-14 md:mb-20">
      <div className="flex items-center gap-4 mb-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
          {index}
        </span>
        <span className="h-px flex-1 bg-cream/15" />
      </div>
      <h2
        className="font-display text-cream leading-[0.9] tracking-[-0.03em]"
        style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", fontVariationSettings: '"wght" 350' }}
      >
        {title}
      </h2>
    </div>
  );
}

export function FadeIn({
  children,
  delay = 0,
  className = "",
  y = 24,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.8, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
