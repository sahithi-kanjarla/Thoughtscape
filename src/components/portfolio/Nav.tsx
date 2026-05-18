import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const NAV = [
  { id: "about", label: "about" },
  { id: "work", label: "Projects" },
  { id: "experience", label: "experience" },
  { id: "stage", label: "Leadership" },
  { id: "wins", label: "Achievements" },
  // { id: "certifications", label: "certifications" },
  { id: "contact", label: "contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open ? "bg-background/85 backdrop-blur-md border-b hairline" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-lg tracking-tight text-cream" onClick={() => setOpen(false)}>
          Sahithi <span className="italic text-primary">K.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-mono text-[13px] uppercase tracking-[0.2em]">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-cream/70 hover:text-primary transition"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <span className="hidden sm:inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-cream/70">
            <span className="size-1.5 rounded-full bg-primary status-dot" />
            open to work
          </span>
          <a
            href="/sahithi-kanjarla-resume.pdf"
            download="sahithi-kanjarla-resume.pdf"
            className="hidden sm:inline-flex font-mono text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            résumé ↓
          </a>
          {/* Mobile burger */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative size-9 grid place-items-center rounded-full border hairline text-cream"
          >
            <span className={`block h-px w-4 bg-current transition-all ${open ? "translate-y-[3px] rotate-45" : "-translate-y-[3px]"}`} />
            <span className={`block h-px w-4 bg-current transition-all absolute ${open ? "-rotate-45" : "translate-y-[3px]"}`} />
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 pb-8 pt-2 flex flex-col gap-1">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-cream py-2 border-b hairline"
            >
              {n.label}<span className="text-primary">.</span>
            </a>
          ))}
          <a
            href="/sahithi-kanjarla-resume.pdf"
            download="sahithi-kanjarla-resume.pdf"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center font-mono text-[11px] uppercase tracking-[0.22em] px-5 py-3 rounded-full border border-primary text-primary"
          >
            download résumé ↓
          </a>
          <span className="mt-3 inline-flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-cream/70">
            <span className="size-1.5 rounded-full bg-primary status-dot" />
            open to work
          </span>
        </nav>
      </div>
    </header>
  );
}
