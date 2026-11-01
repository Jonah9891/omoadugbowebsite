# AGENTS.md — Badagry West LCDA Official Website

You are building the official website of **Badagry West Local Council Development Area (LCDA), Lagos State, Nigeria**. This file is your standing rulebook. Read it fully before doing anything, and re-read the relevant section before starting each page.

---

## 1. Read order (before writing any code)

Read these files in this order. Do not start building until all are read.

1. `docs/01-PROJECT_BRIEF.md` — goals, audience, scope, key facts
2. `docs/02-SITEMAP.md` — all 19 pages, URLs, navigation
3. `docs/03-DESIGN_SYSTEM.md` — colors, fonts, spacing, components, dark/light modes
4. `docs/04-REFERENCE_NOTES.md` — how the reference website is structured
5. `docs/05-PAGE_TEMPLATES.md` — section-by-section layout for each page type
6. `docs/06-TECH_SPEC.md` — folder structure, code rules, performance, accessibility
7. `docs/07-CONTENT.md` — all written copy
8. `docs/08-SEO.md` — titles, descriptions, schema
9. `docs/09-IMAGE_MANIFEST.md` — every image slot and filename
10. `docs/10-BUILD_PLAN.md` — the phases you will follow
11. `docs/11-QA_CHECKLIST.md` — what to test after each phase
12. `docs/12-PROMPTS.md` — the exact prompts the owner will give you, in order (so you know what is coming; follow each prompt only when it is given)

Data file: `data/people.json` — every official, their position, and their photo filename.
Images folder: `images/` — all logos and photos supplied by the council.

---

## 2. The reference website — study it before every page

**Reference website: https://iruvilcda.lg.gov.ng**

We are replicating its *quality of design*: layout rhythm, spacing, card styles, hover effects, scroll animations, transitions, page-opener pattern, and mobile behaviour.

**Before building any page, open the matching reference page below in your browser and study it.** Look at:

- Spacing and vertical rhythm between sections
- Hover effects, transitions and easing
- Scroll and entrance animations
- Header behaviour (sticky, dropdowns, mobile menu)
- Card layouts, tags, dates and "read more" patterns
- Typography scale and hierarchy
- How colour is used (where accents appear, how buttons, tags and hover states are treated) — study the *structure* of colour use, then apply **our** palette
- Mobile and tablet layouts at 375 px, 768 px and 1280 px

| Our page | Reference page to study |
|---|---|
| Home | https://iruvilcda.lg.gov.ng/ |
| About pages | https://iruvilcda.lg.gov.ng/about and https://iruvilcda.lg.gov.ng/about/history |
| Executive Chairman & Vice Chairman | https://iruvilcda.lg.gov.ng/about/executive-council/chairman |
| Executive Council | https://iruvilcda.lg.gov.ng/about/executive-council |
| Legislative Council & Councillors | https://iruvilcda.lg.gov.ng/about/legislative-house |
| Departments pages | https://iruvilcda.lg.gov.ng/departments |
| Projects | https://iruvilcda.lg.gov.ng/projects |
| Project detail | https://iruvilcda.lg.gov.ng/projects/hpv-vaccination-drive |
| News | https://iruvilcda.lg.gov.ng/news |
| Photo Gallery | https://iruvilcda.lg.gov.ng/gallery |
| Contact | https://iruvilcda.lg.gov.ng/contact |

If you cannot open the website, stop and ask the project owner for screenshots. Save them in `reference-screenshots/` and use those instead. Never guess at the reference design.

### What you must NOT copy
- Their text, headlines, news, project names or descriptions
- Their images, logo or icons
- Their source code (recreate behaviour with our own code)
- Their placeholder phone numbers, emails or emergency numbers
- Their colours — we use our own palette
- Their weak spots: a single vague hero button, the "presentation layer" form notice, the "System Operational" footer badge, and the "Plan a visit" tourism wording

---

## 3. Brand rules

**Colours (study the reference's use of colour, then apply ours):**

- Gold, cyber green, black, white. Nothing else except neutral greys.
- Rough proportion: 60% neutral, 30% gold, 10% cyber green.
- Gold leads (primary buttons, accents, dividers). Cyber green is a small highlight (hover, focus ring, active menu item, "Ongoing" tags).
- Exact tokens for both modes are in `docs/03-DESIGN_SYSTEM.md`. Use CSS variables. Never hard-code colours in components.
- Bright gold and green fail contrast as small text on white. In light mode use the darker text variants defined in the design system.

**Fonts (Google Fonts):** Playfair Display for headlines, Inter for body, menus and buttons.

**Dark and light modes:**
- Both modes must feel world-class and be designed individually, not simply inverted.
- Toggle in the header (sun/moon). Follow the device setting on first visit, then remember the choice.
- No white flash on page load. Smooth fade of about 0.3 s when switching.
- Logo, images, map and lightbox must adapt to both modes.
- Respect `prefers-reduced-motion`.

---

## 4. People and images rule (critical)

- Every official has one entry in `data/people.json` with name, position, group and image filename.
- **A person appears on the website only if their image file exists in `images/`.**
- If a photo is missing: do not show the card, the person's name, or the position attached to that person anywhere on the site. No placeholder box, no silhouette, no "photo coming soon."
- **This applies to every place a name can appear:** cards, running text, headings, news items, timelines, diagrams, image captions and alt text, page titles, meta descriptions, keywords, Open Graph tags, JSON-LD schema, sitemap entries and form text.
- Only two people are named in running text: the Chairman and the Vice Chairman. Use a helper (for example `nameOf(id)`) so their names render only when `chairman.jpg` / `vice-chairman.jpg` exist. When a photo is missing, hide the blocks built around that person (welcome message, profile) and use office-only wording elsewhere ("the Executive Chairman", "the Vice Chairman"), never the personal name. Generic references to an office are allowed; personal names are not.
- The Chairman's and Vice Chairman's photos are **launch-blocking**: do not launch without them.
- Do not name anyone who is not in `data/people.json` (for example former officeholders). Leave such names out of all text.
- When a correctly named photo is added later, the person must appear automatically with no redesign.
- Exact names and positions come from `data/people.json`. Do not retype or reword them.
- Chairman: **Hon. Rauf Ibrahim Kayode Yemaren**. Vice Chairman: **Hon. Sesi Ogungbe Yusuf** (no "Princess" title).

---

## 5. Content integrity

- Use copy from `docs/07-CONTENT.md`. Do not invent facts, names, dates, figures, projects, fees or phone numbers.
- Text tagged `[PLACEHOLDER: ...]` means the information has not been supplied. **Never show the tag or fake text to the public.** Hide or omit that element, and list it in a file called `PLACEHOLDERS_REPORT.md` at the end of each phase.
- Do not label an ongoing project as completed. The **Asheri Primary Health Centre** and the **Ganyingbo Topa CBT Centre** are **Ongoing**.
- Emergency numbers: **767** and **112** only (Lagos toll-free, 24 hours). Do not use 108, 911 or 101.
- Contact details are in section 8 of this file. Use only those.

### Must never appear anywhere on the site
- Any tribute or reference to the death of the former Vice Chairman
- The Chairman's religion, marital status or exact date of birth
- The Chairman's 2011 and 2015 election results
- The Vice Chairman's campaign roles, her 2024 aspiration, or the Ogungbe family memorial event
- Traditional rulers or chieftaincy listings
- A department directory with individual emails or phone numbers
- Any resident-submitted content (comments, uploads, user posts)

---

## 6. Scope decisions (settled — do not reopen)

- Language: English only.
- 19 pages (see `docs/02-SITEMAP.md`). Do not add menu pages.
- Contact and complaints are **form submissions only**. No resident accounts, no uploads, no public comments.
- Forms deliver to **admin@omoadugbo.com** through a free form service (see `docs/06-TECH_SPEC.md`). Include a honeypot field and client-side validation. Do not expose the email address in page source for form delivery.
- History appears **only** on the Home page (short snapshot) and the About Us pages.
- The Chairman's full biography lives on the Executive Chairman page. The homepage shows his welcome message with a "Read the full profile" button, not the full bio.

---

## 7. Technical rules

- Plain **HTML, CSS and JavaScript only**. No frameworks, no build tools required to view the site.
- Shared `css/` and `js/` files so every page matches. Components (header, footer) must not be copy-pasted inconsistently.
- Mobile-first. Test at 375 px, 768 px and 1280 px.
- Semantic HTML, keyboard-accessible, visible focus states, alt text on every image, WCAG AA contrast.
- Optimise images (lazy loading, correct `width`/`height`, `srcset` where useful). Target Lighthouse 90+ in all four categories.
- Never use `localStorage` for anything except the theme preference.
- Follow `docs/06-TECH_SPEC.md` for folder structure and naming.

---

## 8. Key facts

| Item | Value |
|---|---|
| Name | Badagry West Local Council Development Area (LCDA) |
| State | Lagos State, Nigeria |
| Secretariat | Owode-Apa Road, Kankon, Badagry, Lagos State |
| Phone / WhatsApp | 08037619499 (display as +234 803 761 9499) |
| Public email | support@omoadugbo.com |
| Form delivery email | admin@omoadugbo.com |
| Facebook | https://www.facebook.com/share/1HaJd9qiVB/ |
| Instagram | https://www.instagram.com/rikayomoadugbo |
| Office hours | Monday to Friday, 8:00 AM – 4:00 PM (confirm before launch) |
| Emergency (Lagos) | 767 and 112, toll-free, 24 hours |
| Wards | A Kweme · B Wesere · C Apa · D Akoro · E Gbethrome |
| Domain | [PLACEHOLDER: not yet supplied] |

---

## 9. How to work

1. Build **one phase at a time**, following `docs/10-BUILD_PLAN.md`.
2. Before each page: re-read the matching sections in the design system, page templates and content files, and **study the reference page**.
3. After each phase: run `docs/11-QA_CHECKLIST.md`, fix every failure, then write a short phase report listing what was built, what was hidden because of missing content or images, and anything you are unsure of.
4. **Stop after each phase and wait for approval.**
5. If something is missing or contradictory, ask. Do not guess, and do not invent content to fill a gap.
