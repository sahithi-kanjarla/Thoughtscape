import { useState } from "react";
import { CONTACT } from "@/data/portfolio";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${CONTACT.email}`;
    }
  };

  return (
    <section id="contact" className="px-6 md:px-10 pt-28 pb-12 md:pt-40 md:pb-16 max-w-[1400px] mx-auto w-full">
      <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-10">
        let's build something —
      </div>
      <h2
        className="font-display text-cream leading-[0.95] tracking-[-0.03em] text-balance"
        style={{ fontSize: "clamp(2.5rem, 9vw, 9rem)" }}
      >
        Have a wild idea? <span className="italic text-primary">Send it.</span>
      </h2>

      <button
        onClick={copy}
        className="group mt-12 block w-full text-left border-t border-b hairline py-8 md:py-12 hover:bg-primary/[0.04] transition-colors"
      >
        <div className="flex items-baseline justify-between gap-4 flex-wrap">
          <span
            className="font-display tracking-tight text-cream group-hover:text-primary transition-colors"
            style={{ fontSize: "clamp(1.5rem, 5vw, 4rem)" }}
          >
            {CONTACT.email}
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
            {copied ? "✓ copied" : "click to copy"}
          </span>
        </div>
      </button>

      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 font-mono text-xs uppercase tracking-[0.2em]">
        <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="text-cream/85 hover:text-primary transition">linkedin ↗</a>
        <a href={CONTACT.github} target="_blank" rel="noreferrer" className="text-cream/85 hover:text-primary transition">github ↗</a>
        <a href={`mailto:${CONTACT.email}`} className="text-cream/85 hover:text-primary transition">email ↗</a>
        <span className="ml-auto text-muted-foreground">{CONTACT.location}</span>
      </div>

      <footer className="mt-20 pt-8 border-t hairline flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        <span>© 2026 Sahithi Kanjarla</span>
        <span>built with care · framer motion + tanstack</span>
      </footer>
    </section>
  );
}
