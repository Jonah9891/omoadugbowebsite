# 11 — QA Checklist

Run after **every** phase (the relevant items) and fully before launch. Test each page in **dark and light modes** at **375 px, 768 px and 1280 px**. Record failures and fixes in the phase report.

**Reference website for visual comparison:** https://iruvilcda.lg.gov.ng — open the matching page next to ours and compare spacing, motion and polish.

---

## A. Design fidelity

- [ ] Layout order matches the template in `05-PAGE_TEMPLATES.md`
- [ ] Spacing and rhythm feel as polished as the reference (consistent section padding, card gaps, heading spacing)
- [ ] Hover effects, transitions and scroll animations are smooth and comparable to the reference
- [ ] Palette is only gold, cyber green, black, white and neutral greys
- [ ] Gold leads; cyber green appears only as small accents (about 10%)
- [ ] Fonts are Playfair Display (headlines) and Inter (everything else)
- [ ] Page opener pattern used on every inner page (breadcrumb, eyebrow, two-part H1, lead)
- [ ] No text, images, logos, colours or code copied from the reference

## B. Dark and light modes

- [ ] Toggle works on every page, is keyboard accessible and has an accessible name
- [ ] Choice is remembered; first visit follows the device setting
- [ ] No white or black flash on page load
- [ ] Smooth 300 ms transition when switching
- [ ] Each mode looks intentionally designed (not just inverted)
- [ ] Logo swaps correctly (`logo.png` / `logo-white.png`)
- [ ] Text contrast passes AA in both modes (use `--accent-text` and `--accent-green-text` for small text in light mode)
- [ ] Map, lightbox, forms, tags, cards and footer look right in both modes

## C. Content integrity

- [ ] No visible "[PLACEHOLDER" text anywhere (search all HTML and JS)
- [ ] No fake phone numbers, emails, addresses or lorem ipsum
- [ ] Contact details match `AGENTS.md` exactly
- [ ] Emergency numbers are **767** and **112** only
- [ ] Asheri PHC and Ganyingbo Topa CBT Centre are labelled **Ongoing**
- [ ] Chairman: Hon. Rauf Ibrahim Kayode Yemaren. Vice Chairman: Hon. Sesi Ogungbe Yusuf (no "Princess")
- [ ] History appears only on Home (snapshot) and About pages
- [ ] Chairman's welcome message sits directly after the hero; **Read the full profile** button works

### Must-never-appear search (project-wide)
- [ ] No tribute or mention of the former Vice Chairman's passing
- [ ] No Chairman religion, marital status, exact date of birth or election results
- [ ] No Vice Chairman campaign roles, 2024 aspiration or family memorial event
- [ ] No traditional rulers list
- [ ] No department directory or department-level phone/email
- [ ] No resident-submitted content, comments or uploads
- [ ] No "System Operational" badge

## D. People and images rule

- [ ] Remove a person's photo → that person disappears completely (card, name, position, diagram name, schema)
- [ ] Add the photo back → they reappear with no code change
- [ ] A section with zero people hides itself, including heading and in-page links
- [ ] No placeholder boxes, silhouettes or "photo coming soon"
- [ ] Names and positions exactly match `data/people.json`
- [ ] **Name sweep:** temporarily remove each photo, reload, and search the whole rendered page, page source, `<title>`, meta tags, JSON-LD, alt text and `sitemap.xml` for that person's name: zero hits
- [ ] With `chairman.jpg` removed, the welcome section and profile block are hidden and no personal name of the Chairman appears anywhere
- [ ] No former officeholder or anyone outside `people.json` is named anywhere
- [ ] Portraits are not distorted; faces are not cropped (object-position correct)
- [ ] Missing non-person images are skipped gracefully (no broken-image icons)
- [ ] Alt text present and matches `09-IMAGE_MANIFEST.md`

## E. Navigation and links

- [ ] All seven main menu items and every dropdown item go to the right page or anchor (`02-SITEMAP.md`)
- [ ] Filter links work: `/projects/?status=ongoing`, `?status=completed`, `?status=planned`, `?type=infrastructure`, `?type=community`, `/news/?category=announcements`
- [ ] Anchors scroll to the correct section with header offset and brief gold highlight
- [ ] Breadcrumbs correct on every inner page
- [ ] Footer links all work
- [ ] No broken internal links, no 404s except intended
- [ ] External links open in a new tab with `rel="noopener noreferrer"`
- [ ] Mobile menu opens, closes (button, Esc, link click), locks scroll and traps focus

## F. Home page specifics

- [ ] Hero slider: auto-advance, pause on hover and when tab hidden, arrows, dots, swipe; reduced motion disables auto-advance
- [ ] First hero image loads fast (`fetchpriority="high"`)
- [ ] Quick links, projects, history snapshot, highlights, departments, news, councillors, emergency numbers and contact block all appear in the right order
- [ ] Sections without data are hidden cleanly

## G. Projects, news and gallery

- [ ] Stats strip counts match the data
- [ ] Status and type filters work, combine correctly and update the URL
- [ ] Project detail pages generated for each project that has an image
- [ ] News filters and pagination work; dates read "29 July 2026"
- [ ] Gallery albums open the lightbox; arrows, swipe, Esc and focus return work
- [ ] Empty filter message appears when there are no matches

## H. Forms

- [ ] Contact form and complaint form validate required fields with clear messages
- [ ] Honeypot `_gotcha` hidden and empty
- [ ] Loading state, success panel and error state all work
- [ ] With the endpoint unset, the "message service is being set up" notice shows and **no false success** is displayed
- [ ] With a real endpoint, a test submission reaches admin@omoadugbo.com with `form_type` and subject
- [ ] Privacy consent line links to `/privacy/`
- [ ] Forms are usable by keyboard and screen reader (labels, `aria-live` errors)

## I. Responsive behaviour

- [ ] 375 px: no horizontal scroll, readable text, 44 px tap targets, stacked layouts
- [ ] 768 px: two-column grids behave; header and menu appropriate
- [ ] 1280 px: container centred at 1240 px max, balanced whitespace
- [ ] Orientation change works on phones and tablets
- [ ] Print view is clean (`print.css`)

## J. Accessibility

- [ ] Skip link works
- [ ] Visible focus ring everywhere (green, 2 px)
- [ ] One `<h1>` per page; headings in order
- [ ] Landmarks present; `lang="en-NG"`
- [ ] All images have alt text; decorative images have empty alt
- [ ] Colour is never the only signal (tags include text)
- [ ] Slider pause control present; reduced-motion respected
- [ ] Screen-reader pass on Home, Projects and Feedback & Complaints
- [ ] Lighthouse Accessibility ≥ 95

## K. Performance

- [ ] Lighthouse mobile Performance ≥ 90 on Home, Projects and Contact
- [ ] LCP < 2.5 s, CLS < 0.1, INP < 200 ms
- [ ] Images lazy-loaded below the fold, with width and height set
- [ ] Fonts preloaded or preconnected, `font-display: swap`
- [ ] JavaScript under 60 KB uncompressed; no unused libraries
- [ ] No console errors or warnings

## L. SEO

- [ ] Unique title and meta description on every page (`08-SEO.md`)
- [ ] Canonical, Open Graph and Twitter tags present
- [ ] JSON-LD valid
- [ ] `robots.txt` and `sitemap.xml` present
- [ ] 404 page has `noindex`
- [ ] Lighthouse SEO ≥ 95

## M. Browsers and devices

- [ ] Latest Chrome, Safari, Firefox and Edge
- [ ] iPhone Safari and Android Chrome
- [ ] Works on a slow 3G/4G throttle without breaking layout

## N. Final launch gate

- [ ] `PLACEHOLDERS_REPORT.md` reviewed with the council
- [ ] All officials flagged `confirm: true` verified by the council
- [ ] Chairman has approved his welcome message and biography
- [ ] Domain set; canonicals and sitemap updated
- [ ] Form endpoint configured and tested
- [ ] Council approves all "Researched" content (projects, news, places, history)
- [ ] Backup of the project folder made
