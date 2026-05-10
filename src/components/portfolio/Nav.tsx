import { useEffect, useState } from "react";

const NAV = [
  { id: "about", label: "about" },
  { id: "work", label: "work" },
  { id: "experience", label: "experience" },
  { id: "stage", label: "stage" },
  { id: "certifications", label: "certs" },
  { id: "contact", label: "contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/70 backdrop-blur-md border-b hairline" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-lg tracking-tight text-cream">
          Sahithi <span className="italic text-primary">K.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.22em]">
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
        <a
          href="#contact"
          className="font-mono text-[11px] uppercase tracking-[0.22em] px-4 py-2 rounded-full border border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          say hi →
        </a>
      </div>
    </header>
  );
}
