# Sahithi Kanjarla — Cinematic Portfolio Plan

A premium, editorial-style portfolio that doesn't look AI-generated. Heavy on typography, asymmetry, motion, and texture — not the usual "purple gradient hero + 3 feature cards" template.

## Design Direction

**Aesthetic:** Editorial brutalist meets soft cinematic. Think *Awwwards site of the day* — oversized serif display type, off-grid layouts, marquee tickers, sticky scroll sections, grain texture, a single bold accent color.

**Palette (warm cinematic, not generic):**
- Background: `#0E0E0C` (warm near-black, not pure black)
- Foreground: `#F4EFE6` (cream, not white)
- Accent: `#FF5B22` (burnt orange — bold, ownable)
- Muted: `#8A8478` (warm taupe)
- Surface: `#1A1916`

**Typography pairing:**
- Display: **Fraunces** (variable serif, optical sizing) — for hero name, section headers
- Body/UI: **Geist** or **Inter Tight** — clean modern sans
- Mono accent: **JetBrains Mono** — for timestamps, tech tags, coordinates

All loaded via `@import` in `styles.css` from Google Fonts / Fontsource.

**Texture:** subtle grain overlay (SVG noise) on background, hairline borders, generous negative space.

## Page Structure (single long-scroll route at `/` + dedicated `/projects/$slug` later if needed)

```text
┌─────────────────────────────────────────────────┐
│ NAV  Sahithi K.            work · about · talk  │  sticky, blurred
├─────────────────────────────────────────────────┤
│                                                 │
│   SAHITHI                                       │  giant serif, mixed weights
│           KANJARLA —                            │  italic kicker
│   creative developer / ai · sustainability      │
│                                                 │  ↓ scroll cue, time in IST
│   [Hyderabad, IN  •  22:14 IST  •  available]   │
└─────────────────────────────────────────────────┘
   ── marquee ticker: roles + skills, infinite scroll ──
┌─────────────────────────────────────────────────┐
│ 01 / ABOUT                                      │
│              I build meaningful tech…           │  two-column, big text right
│   portrait                                      │
│   placeholder                                    │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│ 02 / SELECTED WORK                              │
│   ┌─NutriSense──────────────────┐               │  large editorial cards,
│   │ vector cover · hover reveal │  hover = tilt │  alternating alignment
│   └─────────────────────────────┘               │  sticky project index on left
│         ┌─VisionVoice AI──────────────────┐    │
│         │                                 │    │
│         └─────────────────────────────────┘    │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│ 03 / EXPERIENCE — vertical timeline             │
│   2025 ●─── AI Intern, Nu10                     │  sticky year column
│   2024 ●─── Codeplayers Trainee                 │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│ 04 / TOOLBOX  (skills as bento grid, grouped)   │
│   ┌──prog──┐ ┌─data&ai──────┐ ┌─libs─┐         │
│   │python  │ │ ocr · cv     │ │ …    │         │
│   └────────┘ └──────────────┘ └──────┘         │
│   "currently exploring" pinned chip row         │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│ 05 / STAGE — speaking & leadership              │
│   horizontal scroll gallery of vector cards     │  GDG, AgentCon, VS Code Days,
│   each card has placeholder image + caption     │  Women Techmakers
│   user can swap vectors for real photos later   │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│ 06 / WINS — achievements                        │
│   numbered list, oversized numerals, hover hi   │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│ 07 / EDUCATION — compact 3-card row             │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│ CONTACT                                         │
│   let's build something →                       │  giant clickable email,
│   sahithikanjarla4082@gmail.com                 │  hover swaps to "copy"
│   linkedin · github · resume                    │
│   footer: © 2026 · built with care              │
└─────────────────────────────────────────────────┘
```

## Cool UI Components (custom, not generic shadcn drops)

1. **Cinematic hero** — staggered letter reveal on the name (Framer Motion), live IST clock, "available for work" status dot pulsing.
2. **Infinite marquee ticker** — roles + skills scrolling under hero, pauses on hover.
3. **Magnetic cursor follower** — subtle dot that scales over interactive elements (desktop only).
4. **Sticky project index** — left-side numbered list that highlights current project in view (IntersectionObserver).
5. **Tilt-on-hover project cards** — 3D perspective transform with Framer Motion, vector cover art generated for each project.
6. **Scroll-linked timeline** — experience entries fade/slide in as the year column sticks.
7. **Bento toolbox grid** — varied tile sizes, mono-font tags, group headers as vertical labels.
8. **Horizontal scroll stage gallery** — speaking/volunteering as wide cards with placeholder vector illustrations (user-replaceable).
9. **Oversized email CTA** — fills viewport width, click-to-copy with toast.
10. **Grain + vignette overlay** — fixed SVG noise + radial darken for cinematic feel.

## Vector Placeholder Strategy

For "speaker / event" photos the user will replace later, generate clean vector SVG illustrations (microphone + stage, laptop + audience, classroom, etc.) saved to `src/assets/placeholders/` so they can swap in real photos one-by-one.

Project covers also get bespoke generated vector art (food bowl for NutriSense, eye+sound waves for VisionVoice, etc.) — feels intentional, not stock.

## Technical Notes

- Single route: `src/routes/index.tsx` (replace placeholder). Sections as components in `src/components/portfolio/`.
- `src/styles.css`: add Fraunces + Geist + JetBrains Mono `@import`, define warm cinematic tokens in oklch (background, foreground, accent, surface, muted), grain texture as data-URI background.
- Framer Motion for: letter reveal, scroll-linked transforms, marquee, tilt, gallery drag.
- IntersectionObserver hook for sticky project index + section nav highlight.
- `useReducedMotion` respected throughout — animations disabled gracefully.
- SEO: route `head()` with title "Sahithi Kanjarla — Creative Developer", description, og tags.
- Mobile: marquee stays, tilt disabled, horizontal gallery becomes snap-scroll, hero type scales fluidly with `clamp()`.

## Out of Scope (this pass)

- Real photo uploads (placeholders only, easy swap later).
- Per-project detail routes (can add `/projects/$slug` in a follow-up if wanted).
- CMS / backend — pure static content in TS files.
- Dark/light toggle — site is intentionally dark cinematic only.
