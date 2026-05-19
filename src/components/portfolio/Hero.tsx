import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CONTACT, ROLES } from "@/data/portfolio";

function useISTClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 30_000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function Hero() {
  const reduce = useReducedMotion();
  const time = useISTClock();
  const first = "SAHITHI";
  const last = "KANJARLA";

  const letter = {
    hidden: { y: "110%", opacity: 0 },
    show: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: reduce ? 0 : 0.04 * i,
        duration: 0.7,
        ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between px-6 md:px-10 pt-28 pb-10">
      <div className="flex-1 flex flex-col justify-center max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8 flex items-center gap-3"
        >
          <span className="inline-block size-1.5 rounded-full bg-primary status-dot" />
          Portfolio - 2026 edition
        </motion.div>

        <h1
          className="font-display font-light leading-[0.88] tracking-[-0.035em] text-cream"
          style={{ fontSize: "clamp(2.75rem, 9vw, 9.5rem)" }}
        >
          <span className="block overflow-hidden">
            <span className="inline-block">
              {first.split("").map((c, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="show"
                  variants={letter}
                  className="inline-block"
                  style={{ fontVariationSettings: '"opsz" 144, "wght" 380' }}
                >
                  {c}
                </motion.span>
              ))}
            </span>
          </span>
          <span className="block overflow-hidden pl-[8vw] md:pl-[14vw]">
            <span className="inline-block">
              {last.split("").map((c, i) => (
                <motion.span
                  key={i}
                  custom={i + first.length}
                  initial="hidden"
                  animate="show"
                  variants={letter}
                  className="inline-block"
                  style={{ fontVariationSettings: '"opsz" 144, "wght" 420' }}
                >
                  {c}
                </motion.span>
              ))}
              <motion.span
                custom={first.length + last.length}
                initial="hidden"
                animate="show"
                variants={letter}
                className="inline-block text-primary not-italic"
              >
                .
              </motion.span>
            </span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="mt-10 md:mt-14 grid md:grid-cols-2 gap-8 items-end"
        >
          <p className="text-lg md:text-xl text-cream/80 max-w-md font-display italic leading-snug">
            Building technology with{" "}
            <span className="text-primary not-italic font-sans">creativity</span>,
            intention, and{" "}
            <span className="text-primary not-italic font-sans">impact</span>.
          </p>
          <ul className="flex flex-wrap gap-2 md:justify-end">
            {ROLES.map((r, i) => (
              <li
                key={r}
                className={`font-mono text-[10px] md:text-[11px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full border ${
                  i === 0
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-surface/80 text-cream border-cream/15"
                }`}
              >
                {r}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground flex flex-wrap items-center gap-x-6 gap-y-2 max-w-[1400px] mx-auto w-full"
      >
        <span>{CONTACT.location}</span>
        <span className="text-cream/40">/</span>
        <span>{time} IST</span>
        <span className="text-cream/40">/</span>
        <span className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-primary status-dot" />
          available for work
        </span>
        <span className="ml-auto hidden md:inline">scroll down</span>
      </motion.div>
    </section>
  );
}
