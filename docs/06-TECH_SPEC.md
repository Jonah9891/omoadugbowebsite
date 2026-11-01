# 06 — Technical Specification

Plain **HTML, CSS and JavaScript**. No frameworks. Everything must work when the folder is opened through any static web server.

**Reference website to study for motion, spacing and behaviour:** https://iruvilcda.lg.gov.ng

---

## 1. Folder structure

```
badagry-west-lcda/
├── AGENTS.md
├── PLACEHOLDERS_REPORT.md          (created by you after each phase)
├── index.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── manifest.webmanifest
├── about/
│   ├── index.html
│   ├── history/index.html
│   └── communities-wards/index.html
├── leadership/
│   ├── chairman-vice-chairman/index.html
│   ├── executive-council/index.html
│   └── legislative-council/index.html
├── departments/
│   ├── index.html
│   ├── public-services-business/index.html
│   ├── health-education-welfare/index.html
│   └── works-environment-agriculture/index.html
├── projects/
│   ├── index.html
│   ├── empowerment/index.html
│   └── (project detail pages)
├── news/
│   ├── index.html
│   └── (article pages)
├── gallery/index.html
├── contact/
│   ├── index.html
│   └── feedback-complaints/index.html
├── privacy/index.html
├── css/
│   ├── tokens.css        (colours, fonts, spacing: see design system)
│   ├── base.css          (reset, typography, accessibility helpers)
│   ├── layout.css        (container, grid, sections)
│   ├── components.css    (header, buttons, cards, forms, etc.)
│   ├── pages.css         (page-specific rules)
│   └── print.css
├── js/
│   ├── theme.js          (dark/light)
│   ├── nav.js            (header, dropdowns, mobile menu)
│   ├── reveal.js         (scroll animations, counters)
│   ├── slider.js         (hero slider)
│   ├── people.js         (renders people only when photos exist)
│   ├── projects.js       (filters, stats)
│   ├── news.js           (filters, pagination)
│   ├── gallery.js        (albums, lightbox)
│   ├── forms.js          (validation, submission)
│   └── main.js           (bootstraps everything)
├── data/
│   ├── people.json
│   ├── projects.json     (you create from CONTENT)
│   ├── news.json         (you create from CONTENT)
│   ├── gallery.json      (you create from the images present)
│   └── site.json         (contact details, nav, emergency numbers)
├── images/               (supplied by the council; flat folder)
├── docs/
└── reference-screenshots/ (only if needed)
```

Shared header and footer: write them once as JavaScript template functions in `js/main.js` (or a small `js/layout.js`) and inject them on every page, **and** include a no-JS fallback `<nav>` with the main links inside `<noscript>`. Keep markup identical across pages.

Naming: lowercase, hyphens, no spaces. CSS class names follow a simple BEM style (`card`, `card__title`, `card--featured`).

---

## 2. Running locally

`fetch()` for JSON does not work from `file://`. Use VS Code **Live Server** (or `python -m http.server`) from the project root. Root-relative links (`/about/`) require the project root to be served as the site root.

---

## 3. HTML rules

- `<!doctype html>`, `<html lang="en-NG" data-theme="dark">` (theme set by script).
- One `<h1>` per page. Logical heading order.
- Landmarks: `<header>`, `<nav aria-label="Main">`, `<main id="main">`, `<footer>`.
- Skip link as the first focusable element.
- Every `<img>` has `alt`, `width`, `height`; below-the-fold images use `loading="lazy"` and `decoding="async"`.
- External links: `target="_blank" rel="noopener noreferrer"`.
- Anchor `id`s exactly as in `02-SITEMAP.md`.
- Per-page `<title>`, meta description, canonical, Open Graph, Twitter card, schema (see `08-SEO.md`).
- `<meta name="theme-color">` updated by theme script.

### Theme script (inline in `<head>` of every page, before CSS)
```html
<script>
  (function () {
    try {
      var saved = localStorage.getItem('bwl-theme');
      var theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', theme);
    } catch (e) { document.documentElement.setAttribute('data-theme', 'dark'); }
  })();
</script>
```

---

## 4. CSS rules

- Mobile-first; breakpoints at 480, 768, 1024 and 1280 px.
- All colours, radii, shadows and durations come from `tokens.css` variables. No hard-coded hex values in components.
- Use `clamp()` for fluid type and spacing as listed in the design system.
- Animations use `transform` and `opacity` only.
- `@media (prefers-reduced-motion: reduce)` turns off parallax, Ken Burns, counters and stagger.
- Provide `print.css`: hide nav, header, footer chrome, show URLs for links.
- No CSS frameworks, no `!important` except in the reduced-motion and utility rules.

---

## 5. JavaScript rules

- Vanilla ES modules or plain scripts, no dependencies except optional icon SVG inlined.
- Total JS under 60 KB uncompressed (excluding data).
- Everything degrades: if JS fails, text content and navigation must still be readable.
- `localStorage` is used **only** for the theme key `bwl-theme`.
- No tracking, no cookies, no third-party scripts at launch (so no cookie banner is needed). Analytics can be added later.

---

## 6. The people rule (critical)

Source of truth: `data/people.json` and the `images/` folder. A person is rendered **only if their image loads successfully**.

### Required runtime behaviour (`js/people.js`)
1. Fetch `/data/people.json`.
2. For each person, create `new Image()` with `src = '/images/' + person.image`.
3. On `load`: build and insert the person card (using the measured natural size to avoid layout shift).
4. On `error`: **drop that person completely.** Do not render the card, the name, the position, a silhouette or any placeholder. Do not list them in text anywhere (including diagrams, footers, schema or search data).
5. While checking, show skeleton cards in the grid; remove skeletons when resolved.
6. Sections that end up with **zero** people hide themselves entirely, along with their headings and anchor links in the in-page navigation.
7. Order within groups follows the `order` field in the data.
8. When a correctly named photo is later added to `images/`, the person appears automatically with no code change.
9. **Names outside cards:** a name must not appear anywhere (headings, running text, news, timeline, diagram, alt text, captions, `<title>`, meta description, keywords, Open Graph, JSON-LD, sitemap) unless that person's photo exists. Implement a `nameOf(id)` helper that returns the display name only when the image loaded. Only the Chairman and Vice Chairman are named in running text; write those sentences with a fallback that uses the office only ("the Executive Chairman"). Never name people who are not in `people.json`.
10. If `chairman.jpg` is missing, hide the Chairman's welcome section and profile block. If `vice-chairman.jpg` is missing, hide the Vice Chairman block. Report both as launch-blocking in `PLACEHOLDERS_REPORT.md`.

### Optional helper (not required)
`scripts/check-images.mjs` (Node) may report which people are missing photos, to help the council. It must not be needed to run the site.

### Administrative structure diagram
Show role boxes using **positions only** (no names) for roles whose holders are not displayed, and names only for those with photos.

---

## 7. Data file schemas

### `data/people.json`
Provided. Fields: `id`, `title` (honorific), `name`, `position`, `portfolio` (optional), `group` (`executive`, `officials`, `supervisors`, `advisers`, `councillors`), `ward` and `community` (councillors), `image`, `summary`, `order`, `confirm` (true when the council must confirm spelling or title before launch).

### `data/projects.json` (create from `07-CONTENT.md`)
```json
{
  "slug": "asheri-primary-health-centre",
  "title": "Asheri Primary Health Centre",
  "status": "ongoing",          // completed | ongoing | planned
  "type": "health",             // infrastructure | community | education | health | environment
  "date": "2026",               // as confirmed
  "location": "Asheri Community",
  "summary": "…",
  "body": ["paragraph", "paragraph"],
  "images": ["project-asheri-phc-1.jpg", "project-asheri-phc-2.jpg"],
  "featured": true,
  "confirm": false
}
```
A project is shown only if at least its first image exists, **or** it has no images listed and `showWithoutImage` is true (default false). Statuses must match `07-CONTENT.md`; never promote "ongoing" to "completed".

### `data/news.json`
```json
{
  "slug": "…", "title": "…", "category": "news | announcements | events",
  "date": "2026-07-29", "excerpt": "…", "body": ["…"], "images": ["news-01.jpg"]
}
```
Dates are displayed as "29 July 2026".

### `data/gallery.json`
Albums: `{ "id", "title", "category", "date", "cover", "images": [] }`. Only include images that exist (verify the same way as people).

### `data/site.json`
Contact details, social links, office hours, emergency numbers, nav structure (from `02-SITEMAP.md`).

---

## 8. Forms

Two forms: **Contact** (short, on Home and Contact) and **Complaint** (Feedback & Complaints page). Both deliver to **admin@omoadugbo.com**.

### Delivery
Static sites cannot send email themselves. Use a free form service such as **Formspree** (formspree.io):
1. The project owner creates a free Formspree account using admin@omoadugbo.com and confirms the address.
2. Create one form; copy the endpoint (`https://formspree.io/f/XXXXXXXX`).
3. Put the endpoint in `data/site.json` under `formEndpoint` (leave `"[PLACEHOLDER]"` until supplied).
4. Submit with `fetch(endpoint, { method: 'POST', headers: { 'Accept': 'application/json' }, body: new FormData(form) })`.
5. A hidden `form_type` field (`contact` or `complaint`) tells the council which form was used; also send `_subject` as "Website contact – {subject}" or "Website complaint – {subject}".

Until the endpoint exists, show a clear, polite message ("Our message service is being set up. Please call or WhatsApp +234 803 761 9499.") and do **not** pretend the message was sent.

### Fields
- **Contact:** Full name*, Email*, Phone, Subject*, Message* (min 10 characters).
- **Complaint:** Full name*, Phone*, Email, Ward* (A Kweme · B Wesere · C Apa · D Akoro · E Gbethrome · Not sure), Type*, Subject*, Message*.

### Behaviour
- Client-side validation with accessible inline errors (`aria-live`, associated labels).
- Honeypot field named `_gotcha`, hidden off-screen (`tabindex="-1"`, `autocomplete="off"`).
- Disable submit and show a spinner while sending; success panel on success; friendly error with retry on failure.
- Simple client rate limit: ignore resubmits within 15 seconds.
- Consent line under each form linking to the Privacy page.
- Do not store submissions in the browser.

---

## 9. Map

Embed an OpenStreetMap or Google Maps iframe centred on the Kankon secretariat (Owode-Apa Road, Kankon, Badagry). Coordinates: `[PLACEHOLDER: confirm exact pin]`. Lazy-load the iframe. Provide a "Get directions" link to Google Maps with the address as the query. If the pin is unconfirmed, link to a search for "Badagry West LCDA Secretariat, Kankon" rather than embedding a possibly wrong pin.

---

## 10. Performance targets

- Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- LCP < 2.5 s on a mid-range phone with 4G; CLS < 0.1; INP < 200 ms.
- Preconnect to Google Fonts; `font-display: swap`; limit to the font weights listed.
- Hero first image `fetchpriority="high"`; others lazy.
- Use `srcset`/`sizes` where it helps; ask the council for resized images if originals are above 400 KB for cards or 600 KB for hero.
- Minimise layout shift: always set image dimensions or aspect-ratio.

---

## 11. Accessibility targets (WCAG 2.2 AA)

- Keyboard-complete: dropdowns, mobile menu, slider, lightbox, filters, forms.
- Visible focus ring (`--green`, 2 px, 3 px offset).
- Slider has pause/play control and does not auto-advance for reduced-motion users.
- Lightbox traps focus and restores it on close; `Esc` closes.
- Colour is never the only signal (status tags include text).
- Contrast ≥ 4.5:1 for text, 3:1 for large text and UI components in **both** themes.
- Touch targets ≥ 44 × 44 px.
- Page language set; `alt` text from `09-IMAGE_MANIFEST.md`.
- Test with a screen reader pass on Home, Projects and Complaints.

---

## 12. Security and privacy

- No inline event handlers; avoid `innerHTML` with unsanitised data (use `textContent`).
- Forms post only to the configured endpoint.
- Do not expose personal emails in HTML except the public contact addresses in `AGENTS.md`.
- Add `rel="noopener noreferrer"` on external links.
- Privacy page explains what the forms collect and where it goes (wording in `07-CONTENT.md`).
- Recommend HTTPS-only hosting and the security headers supported by the host.

---

## 13. Hosting and deployment (guidance for the owner)

Any static host works (Netlify, Vercel, Cloudflare Pages, GitHub Pages). Domain: `[PLACEHOLDER]`. After the domain is known, update canonical URLs, `sitemap.xml`, `robots.txt` and Open Graph URLs.

---

## 14. Definition of done (per page)

- Matches the template in `05-PAGE_TEMPLATES.md` and reference-quality spacing and motion
- Works and looks right in dark and light modes at 375, 768 and 1280 px
- Passes `11-QA_CHECKLIST.md`
- No visible placeholder text; hidden items listed in `PLACEHOLDERS_REPORT.md`
