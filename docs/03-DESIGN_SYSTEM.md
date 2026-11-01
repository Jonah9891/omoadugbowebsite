# 03 — Design System

**Reference website for quality benchmark:** https://iruvilcda.lg.gov.ng
Study how it uses spacing, motion and colour *structure* (see `04-REFERENCE_NOTES.md`), then apply **our** palette and fonts below. Never copy its colours, text, images or code.

---

## 1. Design intent

Premium, calm and authoritative. A government site that feels like a flagship brand: generous whitespace, confident serif headlines, restrained gold, rare cyber-green highlights, and smooth motion. Dark and light modes are both first-class.

Keywords: **premium · trustworthy · modern · warm · coastal-gateway · proud.**

---

## 2. Colour

Palette: **gold, cyber green, black, white**, plus neutral greys. Nothing else.

### 2.1 Roles
- **Gold** leads: primary buttons, key accents, dividers, card borders on hover, logo glow.
- **Cyber green** is a small highlight: hover glow, links on hover, focus rings, active menu item, "Ongoing" tags, live indicators.
- **Black / white** carry backgrounds and text.
- Target mix: ~60% neutral · ~30% gold · ~10% green. Green never fills large areas.

### 2.2 Tokens — define in `css/tokens.css`

```css
:root {
  /* shared */
  --gold: #C9A227;
  --gold-bright: #DDB93A;
  --green: #00E08A;
  --on-gold: #0A0A0A;
  --on-green: #0A0A0A;

  --font-display: "Playfair Display", Georgia, "Times New Roman", serif;
  --font-body: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;

  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;
  --radius-pill: 999px;

  --ease: cubic-bezier(.2, .7, .2, 1);
  --t-fast: 200ms;
  --t-base: 300ms;
  --t-slow: 600ms;

  --container: 1240px;
  --header-h: 76px;
}

/* DARK (default if device prefers dark and no saved choice) */
:root[data-theme="dark"] {
  color-scheme: dark;
  --bg: #0A0A0A;
  --bg-alt: #101010;
  --surface: #141414;
  --surface-2: #1C1C1C;
  --border: rgba(255, 255, 255, .10);
  --border-strong: rgba(255, 255, 255, .18);
  --text: #F5F5F2;
  --text-muted: #A8A8A0;
  --accent-text: #C9A227;       /* gold text */
  --accent-green-text: #00E08A; /* green text */
  --gold-soft: rgba(201, 162, 39, .14);
  --green-soft: rgba(0, 224, 138, .14);
  --shadow-card: 0 1px 0 rgba(255,255,255,.04) inset, 0 18px 40px rgba(0,0,0,.45);
  --glow-gold: 0 0 0 1px rgba(201,162,39,.45), 0 12px 40px rgba(201,162,39,.18);
  --glow-green: 0 0 0 2px rgba(0,224,138,.55);
  --header-bg: rgba(10, 10, 10, .72);
  --overlay: linear-gradient(180deg, rgba(10,10,10,.15) 0%, rgba(10,10,10,.85) 100%);
}

/* LIGHT */
:root[data-theme="light"] {
  color-scheme: light;
  --bg: #FFFFFF;
  --bg-alt: #FAF8F3;
  --surface: #FFFFFF;
  --surface-2: #F3EFE4;
  --border: rgba(10, 10, 10, .10);
  --border-strong: rgba(10, 10, 10, .20);
  --text: #0A0A0A;
  --text-muted: #5C5C55;
  --accent-text: #8A6D0B;       /* darker gold for small text (4.9:1 on white) */
  --accent-green-text: #007A4D; /* darker green for small text (5.4:1 on white) */
  --gold-soft: rgba(201, 162, 39, .14);
  --green-soft: rgba(0, 224, 138, .16);
  --shadow-card: 0 1px 2px rgba(10,10,10,.05), 0 14px 34px rgba(10,10,10,.08);
  --glow-gold: 0 0 0 1px rgba(201,162,39,.55), 0 12px 34px rgba(201,162,39,.20);
  --glow-green: 0 0 0 2px rgba(0,160,100,.55);
  --header-bg: rgba(255, 255, 255, .78);
  --overlay: linear-gradient(180deg, rgba(10,10,10,.10) 0%, rgba(10,10,10,.78) 100%);
}
```

### 2.3 Contrast rules (WCAG AA minimum)
- Gold `#C9A227` on black: ~8:1 ✓. Cyber green `#00E08A` on black: ~11:1 ✓.
- **Never** use bright gold or bright green as *small text* on white or off-white. Use `--accent-text` and `--accent-green-text`.
- Bright gold and green are fine in light mode as **fills** (buttons, bars, tags with dark text, icons ≥ 24 px, decorative lines).
- Text on gold fills is always `--on-gold` (#0A0A0A).
- Body text minimum 16 px. Muted text must still pass 4.5:1.

### 2.4 Mode personalities (design each individually)
- **Dark:** deep black canvas, charcoal cards, hairline borders, soft gold glows on hover and focus, subtle gold gradient lighting behind heroes and key headings, optional faint film-grain (opacity ≤ 3%).
- **Light:** white and warm off-white (`--bg-alt`) alternating sections, soft layered shadows, gold hairlines, black headlines, gold accents used sparingly for elegance.

---

## 3. Typography

Load from Google Fonts with `display=swap` and `preconnect`. Self-hosting is welcome if easy.

- **Playfair Display** — 600 and 700, plus 500 italic for accent words. Headlines only.
- **Inter** — 400, 500, 600. Body, navigation, buttons, forms, captions.

### Scale (fluid)
| Token | Size | Use |
|---|---|---|
| `--fs-display` | `clamp(2.5rem, 6vw, 4.5rem)` | Hero headline |
| `--fs-h1` | `clamp(2.25rem, 5vw, 3.75rem)` | Page opener |
| `--fs-h2` | `clamp(1.75rem, 3.4vw, 2.75rem)` | Section titles |
| `--fs-h3` | `clamp(1.25rem, 2vw, 1.625rem)` | Card titles |
| `--fs-lead` | `clamp(1.0625rem, 1.4vw, 1.25rem)` | Intro paragraphs |
| `--fs-body` | `1rem` (16px) | Body |
| `--fs-small` | `0.875rem` | Captions, meta |
| `--fs-eyebrow` | `0.75rem`, uppercase, letter-spacing `0.16em`, weight 600 | Labels above headings |

Line heights: headlines 1.1–1.2; body 1.65; leads 1.6. Max line length for reading text: 68ch.

### Headline pattern (from the reference's rhythm)
A small **eyebrow** label, then a headline whose second phrase is set in gold italic Playfair, then a one-line lead. Example: eyebrow `Delivery Portfolio` → "Projects, *delivery in view.*" → lead.

---

## 4. Layout, spacing and grid

- 4 px base unit. Spacing tokens: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Container: max 1240 px, side padding `clamp(1.25rem, 4vw, 2.5rem)`.
- Section vertical padding: `clamp(4rem, 8vw, 7rem)`. Alternate `--bg` and `--bg-alt` for rhythm.
- Grid: 12 columns desktop, 6 tablet, 4 mobile. Card grids: 3 columns ≥ 1024 px, 2 columns ≥ 640 px, 1 below.
- Breakpoints: 480, 768, 1024, 1280.
- Header height 76 px (64 px on mobile). Anchor targets use `scroll-margin-top: calc(var(--header-h) + 16px)`.

---

## 5. Components

Build each as a reusable class in `css/components.css`. Study the reference's matching component for spacing and motion before building.

### 5.1 Header
- Sticky, translucent (`--header-bg`) with `backdrop-filter: blur(14px)`, hairline bottom border.
- Logo left, nav centre, theme toggle and primary button right.
- Shrinks slightly and gains a shadow after 24 px of scroll.
- Dropdowns: appear on hover and keyboard focus (desktop), 180 ms fade and 8 px rise, gold top hairline, green left bar on the active item.
- Mobile (<1024 px): hamburger opens a full-screen panel sliding from the right; groups expand with smooth height transitions; theme toggle and primary button inside the panel; body scroll locked while open.
- Active page link: gold underline that grows from the left.

### 5.2 Buttons
- **Primary:** gold fill, black text, radius 12 px, 48 px tall, weight 600. Hover: `--gold-bright`, lift 2 px, soft gold glow.
- **Secondary:** transparent, 1.5 px border (`--border-strong`), text colour. Hover: gold border and gold text (`--accent-text`).
- **Ghost / link:** text with an animated underline and a small arrow that nudges right on hover. Hover colour: `--accent-green-text`.
- Focus: 2 px `--green` ring with 3 px offset. Disabled: 45% opacity.

### 5.3 Page opener (every inner page)
Full-width band with subtle gold radial light (dark mode) or off-white gradient (light mode). Contains breadcrumb, eyebrow, H1 with gold italic accent phrase, lead paragraph, optional stats. Mirror the reference's structure.

### 5.4 Cards
All cards: `--surface`, `--border`, radius 22 px, `--shadow-card`.
- **Hover:** lift 6 px, border turns gold, image scales 1.05 over 600 ms, "Read more" arrow slides.
- **Project card:** 16:10 image, status tag overlay (top-left), theme tag, date, title, 2-line summary, link.
- **News card:** 16:10 image, category tag, date, title, 2-line excerpt, link.
- **Person card:** 4:5 portrait, name (Playfair), position (Inter, muted), optional ward tag. Hover reveals a one-line summary and a gold underline. Portrait uses a thin gold frame offset by 8 px (dark mode glow).
- **Department / service card:** icon in a gold-soft circle, title, summary, link.
- **Highlight card (local highlights):** tall 4:5 image with gradient overlay, tag, title, short text, button.

### 5.5 Tags and chips
- Pill, 12 px uppercase, letter-spacing .08em.
- **Completed:** gold-soft background, `--accent-text`. **Ongoing:** green-soft background, `--accent-green-text` with a gently pulsing dot. **Planned:** transparent with border.
- Filter chips: same shape; active chip is gold fill with black text; smooth state change.

### 5.6 Stats strip
Three or four large Playfair numerals with small labels, separated by hairlines. Numbers count up once when scrolled into view.

### 5.7 Timeline (history)
Vertical line in gold, nodes with a green pulse, cards alternating sides on desktop, single column on mobile.

### 5.8 Forms
- 52 px inputs, radius 12 px, `--surface-2` fill, `--border`; labels above fields.
- Focus: gold border plus `--glow-green` ring.
- Inline validation messages in text colour with an icon; never colour alone.
- Submit button shows a loading state and then a success panel with a gold check.
- Honeypot field hidden off-screen.

### 5.9 Gallery and lightbox
Masonry-style grid with gold-border hover. Lightbox: dark scrim, centred image, caption, arrows, close, keyboard and swipe support, focus trapped, returns focus on close.

### 5.10 Footer
Black in both modes (with white logo version). Three columns plus bottom bar; a gold hairline on top; emergency strip with numbers **767 · 112**. Links hover to `--green`.

### 5.11 Other
Breadcrumbs, back-to-top button (gold circle, appears after 600 px), skip-to-content link, toast notifications, skeleton loaders (for people and cards while images resolve).

---

## 6. Dark and light mode behaviour

- `data-theme="dark|light"` on `<html>`.
- On first visit follow `prefers-color-scheme`. Save choice to `localStorage` under `bwl-theme` (the only permitted use of localStorage).
- A tiny inline script in `<head>` sets the theme **before first paint** to prevent flashing.
- Toggle: icon morphs between sun and moon with a 300 ms rotate-and-fade.
- Transition `background-color`, `color`, `border-color` and `box-shadow` over 300 ms with `--ease`. Disable transitions during the initial load.
- Update `<meta name="theme-color">` on change.
- Logo: use `images/logo.png` in light mode and `images/logo-white.png` in dark mode, swapped by CSS or JS. If `logo-white.png` is missing, apply a CSS filter fallback only if legible; otherwise place the logo on a white rounded badge.
- Images are never inverted. Add a subtle `brightness(.92)` to photos in dark mode.
- Map embeds: use a dark-styled or filtered map tile in dark mode.
- Test every page and component in both modes at all breakpoints.

---

## 7. Motion

Respect `prefers-reduced-motion: reduce` by disabling all of the below except simple fades.

- **Scroll reveal:** elements fade up 24 px over 600 ms with stagger of 80 ms (IntersectionObserver, once).
- **Hero slider:** cross-fade between 3 images every 6 s with a slow 1.08 → 1 scale (Ken Burns), progress bar indicator, arrow and dot controls, pause on hover and when the tab is hidden, swipe on touch.
- **Headline reveal:** words rise in sequence.
- **Counters:** count up on first view.
- **Cards:** hover lift and image zoom as above.
- **Links:** animated underline growing from left.
- **Page load:** 250 ms fade-in; internal navigation fades out 150 ms.
- **Parallax:** very light (≤ 8%) on hero and page openers on desktop only.
- Never animate layout properties that cause jank; use `transform` and `opacity`.

---

## 8. Imagery

- Real photographs only (supplied by the council). No stock images. No AI-generated people or places.
- Aspect ratios: hero 16:9 (min 1600 px wide), cards 16:10, portraits 4:5, highlight cards 4:5, gallery mixed.
- Overlay gradient on images that carry text, using `--overlay`.
- Rounded corners per card radius. `object-fit: cover` with sensible `object-position` (faces: `center 20%`).
- `loading="lazy"`, `decoding="async"`; first hero image `fetchpriority="high"`.
- If a non-person image is missing, hide that block gracefully; never show a broken image icon or a grey box. For people, follow the images rule in `AGENTS.md`.

---

## 9. Iconography

One consistent line-icon set (for example Lucide, inline SVG, 1.75 px stroke). Icons inherit text colour; accent icons use gold. No emoji in the interface.

---

## 10. Voice in UI text

Buttons start with verbs: "Read more", "View all projects", "Report a concern", "Send message". Empty and error states are polite and specific. Dates: "30 October 2026". Phone: "+234 803 761 9499".

---

## 11. Hero treatment (translucent, modern)

The hero must feel like the reference hero at https://iruvilcda.lg.gov.ng/ in structure and polish: full-bleed photographs, large confident headline, three rotating slides. Study that hero in the browser before building (height, slide interval, text placement, control styling, scroll cue, mobile layout). Recreate the behaviour in our own code, palette and fonts. Do not copy their text or images.

**Transparent look**
- Photographs stay visible. Use a **translucent gradient overlay**, not a solid colour block: lighter at the top and darker towards the bottom-left where the text sits (for example `linear-gradient(90deg, rgba(10,10,10,.78) 0%, rgba(10,10,10,.45) 55%, rgba(10,10,10,.15) 100%)` plus a bottom fade). Add a very light gold radial glow near the headline in dark mode.
- Hero text is always **white** (and gold for the accent phrase) in both themes, because it sits on a photograph. Keep contrast at least 4.5:1 against the actual image behind the text; test each slide and darken the overlay if needed.
- **Frosted-glass facts bar** along the bottom of the hero: `background: rgba(10,10,10,.35)`, `backdrop-filter: blur(14px)`, 1 px `rgba(255,255,255,.18)` border, gold hairline on top, radius 22 px on desktop. Three facts (5 Wards · Seme Border Gateway · Atlantic Coastline) separated by thin dividers. Provide a solid fallback background where `backdrop-filter` is unsupported.
- Optional translucent glass panel behind the headline block on small screens if legibility needs help.

**Motion:** cross-fade every 6 s with a slow 1.08 → 1 zoom, headline words rising in sequence, buttons fading up after the lead, progress bar and dots in gold, arrows in glass circles. Pause on hover and when the tab is hidden; no auto-advance for reduced-motion users.

**Photography:** photos supplied by the council (`hero-1-secretariat.jpg`, `hero-2-seme-border.jpg`, `hero-3-suntan-beach.jpg`). Use `object-fit: cover` with a sensible `object-position`. Check each crop on 375 px, 768 px and 1280 px widths so key subjects stay visible.
