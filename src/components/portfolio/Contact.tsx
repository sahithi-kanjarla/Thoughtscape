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
      <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-10 flex items-center gap-3">
        <span className="size-1.5 rounded-full bg-primary status-dot" />
        let's talk — open to work
      </div>

      <h2
        className="font-display text-cream leading-[0.95] tracking-[-0.03em] text-balance"
        style={{ fontSize: "clamp(2.25rem, 7vw, 6.5rem)" }}
      >
        Let's make something <span className="italic text-primary">together.</span>
      </h2>

      <p className="font-display italic text-cream/80 dark:text-cream/70 text-lg md:text-xl mt-6 max-w-2xl">
        Open to internships, full-time opportunities, and collaborations in AI and software development.
      </p>

      {/* Card grid */}
      <div className="mt-14 grid md:grid-cols-5 gap-4">
        {/* Email card — spans 3 */}
        <button
          onClick={copy}
          className="group md:col-span-3 text-left rounded-2xl border hairline bg-surface/40 p-6 md:p-8 hover:border-primary/60 hover:bg-primary/[0.04] transition-all"
        >
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-6">
            <span>email</span>
            <span className="text-primary">{copied ? "✓ copied" : "click to copy"}</span>
          </div>
          <div className="font-display text-cream group-hover:text-primary transition-colors break-all leading-tight"
               style={{ fontSize: "clamp(1.25rem, 2.6vw, 2.25rem)" }}>
            {CONTACT.email}
          </div>
          <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-cream/60 group-hover:text-primary transition">
            ↳ tap to copy address
          </div>
        </button>

        {/* Resume card */}
        <a
          href="/Sahithi_Kanjarla_Resume.pdf"
          download
          className="group md:col-span-2 rounded-2xl border hairline bg-primary/10 p-6 md:p-8 hover:bg-primary hover:text-primary-foreground transition-all flex flex-col justify-between min-h-[180px]"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary group-hover:text-primary-foreground/80">
            résumé · pdf
          </div>
          <div>
            <div className="font-display text-cream group-hover:text-primary-foreground text-3xl md:text-4xl leading-tight">
              Download<br/>résumé <span className="italic">↓</span>
            </div>
            <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-cream/60 group-hover:text-primary-foreground/70">
              latest · 2026
            </div>
          </div>
        </a>

        {/* Linkedin */}
        <a
          href={CONTACT.linkedin}
          target="_blank"
          rel="noreferrer"
          className="group rounded-2xl border hairline bg-surface/40 p-6 hover:border-primary/60 transition-all"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-6">linkedin</div>
          <div className="font-display text-cream text-2xl group-hover:text-primary transition">in/sahithi-kanjarla <span className="italic">↗</span></div>
        </a>

        {/* Github */}
        <a
          href={CONTACT.github}
          target="_blank"
          rel="noreferrer"
          className="group rounded-2xl border hairline bg-surface/40 p-6 hover:border-primary/60 transition-all"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-6">github</div>
          <div className="font-display text-cream text-2xl group-hover:text-primary transition">@sahithi-kanjarla <span className="italic">↗</span></div>
        </a>

        {/* Location */}
        <div className="rounded-2xl border hairline bg-surface/40 p-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-6">based in</div>
          <div className="font-display text-cream text-2xl">{CONTACT.location}</div>
          <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-cream/50">remote-friendly</div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t hairline flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        <span>© 2026 Sahithi Kanjarla</span>
        <span>built with care · framer motion + tanstack</span>
      </footer>
    </section>
  );
}
