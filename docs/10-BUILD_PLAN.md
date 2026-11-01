# 10 — Build Plan (for Antigravity in VS Code)

> **The full, detailed prompts are in `docs/12-PROMPTS.md`.** This file is the short overview. If the two ever differ, `12-PROMPTS.md` wins.

You will build the Badagry West LCDA website **one phase at a time**. After each phase: run `docs/11-QA_CHECKLIST.md`, fix every failure, write a short phase report, and **stop for approval**.

**Reference website: https://iruvilcda.lg.gov.ng**
Before every phase that builds pages, open the matching reference page(s) (table in `docs/04-REFERENCE_NOTES.md`) and study spacing, hover effects, animations, transitions, mobile behaviour and the **structure of colour use**. Record findings in `docs/reference-observations.md`. Recreate the quality with our own code and our palette (gold, cyber green, black, white), fonts (Playfair Display, Inter) and dark and light modes. Never copy their text, images, logo, colours or code.

Standing rules are in `AGENTS.md`. Re-read it at the start of every phase.

---

## How the owner uses this file

1. Open the project folder in VS Code with Antigravity.
2. Paste the **Kickoff prompt** below once.
3. For each phase, paste that phase's prompt. Review the result in a browser (Live Server), then approve or request changes.
4. Do not skip phases. Do not combine phases.

---

## Kickoff prompt (paste first)

> Read `AGENTS.md` completely, then read every file in `docs/` in the order listed there, and `data/people.json`. List the files in `images/` and tell me which required images from `docs/09-IMAGE_MANIFEST.md` are present and which are missing. Open https://iruvilcda.lg.gov.ng in your browser and confirm you can view it. If you cannot, stop and ask me for screenshots. Do not write any code yet. Reply with: (1) a summary of the project in five lines, (2) the rules you will follow, (3) any questions or contradictions you found.

---

## Phase 1 — Foundation

**Goal:** project skeleton, design tokens and theme system.

**Prompt:**
> Phase 1. First study the reference site https://iruvilcda.lg.gov.ng (home page) and write your observations about spacing, typography, motion and colour-use structure to `docs/reference-observations.md`. Then build: the folder structure from `docs/06-TECH_SPEC.md`; `css/tokens.css` using the exact tokens in `docs/03-DESIGN_SYSTEM.md` for both dark and light themes; `css/base.css` (reset, typography, focus styles, skip link); `css/layout.css`; the inline theme script and `js/theme.js` with the sun/moon toggle; and a temporary `index.html` that shows typography, buttons, cards, tags, form fields and colour swatches in both modes so I can review the look. Use Google Fonts Playfair Display and Inter. No page content yet.

**Done when:** both themes switch smoothly with no flash; fonts load; colours match tokens; contrast passes.

---

## Phase 2 — Shared components

**Goal:** header, mobile menu, footer, buttons, cards, tags, page opener, breadcrumbs, reveal animations.

**Prompt:**
> Phase 2. Study the reference site's header, dropdowns, mobile menu, footer, cards, tags and page-opener on https://iruvilcda.lg.gov.ng and its inner pages (/projects, /news, /about/executive-council). Add notes to `docs/reference-observations.md`. Then build `css/components.css`, `js/nav.js`, `js/reveal.js`, `js/main.js` (shared header and footer injected on every page, with a `<noscript>` fallback). Implement the navigation exactly as in `docs/02-SITEMAP.md` (seven items with dropdowns, anchors and filter links). Include the Report a Concern header button, the theme toggle, the footer with contact details and the Lagos emergency strip (767 and 112). Apply the logo rules in `docs/03-DESIGN_SYSTEM.md`. Update the demo page to show every component in both themes at 375, 768 and 1280 px.

**Done when:** keyboard navigation works everywhere; dropdowns and mobile menu feel premium; footer correct; no "System Operational" badge.

---

## Phase 3 — Home page

**Prompt:**
> Phase 3. Study the reference home page https://iruvilcda.lg.gov.ng/ section by section (hero, chairman message, projects, attractions, departments, news, legislators, emergency, contact). Add notes to `docs/reference-observations.md`. Start with the hero: study the reference hero at https://iruvilcda.lg.gov.ng/ closely (height, slide timing, text placement, controls, scroll cue, mobile layout) and match its structure and polish using our own code, then apply the translucent overlay and frosted-glass facts bar described in `docs/03-DESIGN_SYSTEM.md` section 11, with the three supplied photographs and the slide copy in `docs/07-CONTENT.md`. Check text contrast on every slide at 375, 768 and 1280 px. Then build the Home page following template T1 in `docs/05-PAGE_TEMPLATES.md` with copy from `docs/07-CONTENT.md`: hero slider (3 slides, cross-fade, slow zoom, controls, pause); the Chairman's welcome directly after the hero with the **Read the full profile** button; quick links; flagship projects; history snapshot; local highlights; departments teaser; latest news; councillors by ward; emergency numbers; contact block with a short form. Implement `js/slider.js`, `js/people.js` (photo-gated rendering as defined in `docs/06-TECH_SPEC.md`) and `data/site.json`. Create `data/projects.json` and `data/news.json` from `docs/07-CONTENT.md`. Hide any section or card whose images or data are missing. Do not show placeholder text. Apply the names rule in `AGENTS.md` section 4: a person's name must not appear anywhere (including text, meta tags and schema) unless their photo exists; implement `nameOf(id)`.

**Done when:** Home matches the template, is polished in both themes, and only shows people whose photos exist.

---

## Phase 4 — About pages

**Prompt:**
> Phase 4. Study https://iruvilcda.lg.gov.ng/about and /about/history. Build `/about/`, `/about/history/` and `/about/communities-wards/` using template T2 and the copy in section 2, 3 and 4 of `docs/07-CONTENT.md`. Include anchors `#vision-mission`, `#communities`, `#wards` and `#places-to-visit`. Build the history timeline and the Places to Visit cards (photo-gated). History must appear only on Home and these About pages.

---

## Phase 5 — Leadership pages

**Prompt:**
> Phase 5. Study https://iruvilcda.lg.gov.ng/about/executive-council, /about/executive-council/chairman and /about/legislative-house. Build `/leadership/chairman-vice-chairman/`, `/leadership/executive-council/` and `/leadership/legislative-council/` using templates T3a, T3b and T3c and `docs/07-CONTENT.md` sections 5 to 7. Render people from `data/people.json` only when their image exists (no placeholders, no names for missing photos). Build the administrative-structure diagram in HTML and CSS using positions only. Use anchors exactly as in the sitemap. Obey every "must never appear" rule in `AGENTS.md`. Then write `PLACEHOLDERS_REPORT.md` listing missing portraits and every person flagged `confirm: true`.

---

## Phase 6 — Departments & Services

**Prompt:**
> Phase 6. Study https://iruvilcda.lg.gov.ng/departments and a department detail page. Build `/departments/`, `/departments/public-services-business/`, `/departments/health-education-welfare/` and `/departments/works-environment-agriculture/` using templates T4a and T4b and `docs/07-CONTENT.md` section 8. Do not build a department directory, and do not show any individual phone numbers or emails. Hide fee and procedure blocks that have no content.

---

## Phase 7 — Projects and Empowerment

**Prompt:**
> Phase 7. Study https://iruvilcda.lg.gov.ng/projects and a project detail page. Build `/projects/` with the stats strip, status and type filters that read `?status=` and `?type=` from the URL, and the project grid (`js/projects.js`). Build the project detail template and generate detail pages from `data/projects.json`. Build `/projects/empowerment/`. Keep statuses exactly as in `docs/07-CONTENT.md` (Asheri PHC and Ganyingbo Topa CBT Centre are Ongoing). Show a project only if its first image exists. The menu filter links in `docs/02-SITEMAP.md` must work.

---

## Phase 8 — News and Gallery

**Prompt:**
> Phase 8. Study https://iruvilcda.lg.gov.ng/news and /gallery. Build `/news/` with category filters (All, News, Official Announcements, Events) and pagination, an article template with generated pages from `data/news.json`, and `/gallery/` with album grid and an accessible lightbox (`js/gallery.js`, `data/gallery.json` built only from images that exist). Dates are shown as "29 July 2026".

---

## Phase 9 — Contact, forms and utility pages

**Prompt:**
> Phase 9. Study https://iruvilcda.lg.gov.ng/contact. Build `/contact/`, `/contact/feedback-complaints/`, `/privacy/` and `404.html`. Implement `js/forms.js` exactly as in `docs/06-TECH_SPEC.md` section 8: validation, honeypot, loading and success states, delivery through the configured form endpoint to admin@omoadugbo.com. Leave the endpoint as `[PLACEHOLDER]` in `data/site.json` and show the "message service is being set up" notice until it is supplied. Add the map block per section 9 of the tech spec.

---

## Phase 10 — SEO, performance and accessibility

**Prompt:**
> Phase 10. Apply `docs/08-SEO.md`: titles, descriptions, canonical, Open Graph, Twitter cards and JSON-LD on every page; create `robots.txt`, `sitemap.xml` and `manifest.webmanifest`. Then optimise images, fonts and JavaScript to meet the targets in `docs/06-TECH_SPEC.md`, and run Lighthouse on Home, Projects and Contact (mobile). Fix anything below target. Do a keyboard-only and screen-reader pass.

---

## Phase 11 — Final QA and launch pack

**Prompt:**
> Phase 11. Run the full `docs/11-QA_CHECKLIST.md` across all 19 pages in both themes at 375, 768 and 1280 px. Check every internal link and anchor. Search the whole project for the text "[PLACEHOLDER" and for every item in the "must never appear" list in `AGENTS.md`, and confirm none appear on any page. Produce `PLACEHOLDERS_REPORT.md` (what is still missing) and `LAUNCH_NOTES.md` (how to host, how to add news, projects and photos, how to set the form endpoint, how to change the domain).

---

## After launch: how to add things (owner guide)

- **Add a person's photo:** save it in `images/` with the exact name in `data/people.json`. They appear automatically.
- **Add a news item or project:** add an entry to `data/news.json` or `data/projects.json` and the photo to `images/`, then ask Antigravity to generate the detail page.
- **Change contact details:** edit `data/site.json`.
- **Set up the form:** create the Formspree form for admin@omoadugbo.com and paste its endpoint into `data/site.json`.

---

## If Antigravity gets stuck

- If it cannot open the reference site: give it screenshots in `reference-screenshots/`.
- If its work drifts from the design: tell it to re-read `docs/03-DESIGN_SYSTEM.md` and the matching template, then compare with the reference page again.
- If it invents content: point it to the "Must never appear" and "Content integrity" sections in `AGENTS.md`.
