import { motion } from "framer-motion";

export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-12 md:mb-20">
      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
        {index}
      </span>
      <span className="h-px flex-1 bg-cream/15" />
      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        {title}
      </span>
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
