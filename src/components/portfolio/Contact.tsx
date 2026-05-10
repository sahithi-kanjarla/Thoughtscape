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
        let's talk —
      </div>
      <h2
        className="font-display text-cream leading-[0.95] tracking-[-0.03em] text-balance"
        style={{ fontSize: "clamp(2.5rem, 9vw, 9rem)" }}
      >
        Let's make something <span className="italic text-primary">together.</span>
      </h2>
      <p className="font-display italic text-cream/70 text-xl md:text-2xl mt-6 max-w-2xl">
        Open to internships, collaborations and good conversations about AI,
        accessibility and design.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="/Sahithi_Kanjarla_Resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.22em] hover:bg-primary/90 transition"
        >
          <svg viewBox="0 0 24 24" className="size-4 fill-none stroke-current" strokeWidth="2" aria-hidden>
            <path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          download resume
        </a>
        <a
          href={`mailto:${CONTACT.email}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border hairline text-cream font-mono text-xs uppercase tracking-[0.22em] hover:border-primary hover:text-primary transition"
        >
          send an email →
        </a>
      </div>

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
