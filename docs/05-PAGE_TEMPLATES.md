# 05 — Page Templates

Section-by-section layout for every page type. Use with `03-DESIGN_SYSTEM.md` (look), `02-SITEMAP.md` (URLs), `07-CONTENT.md` (words) and `09-IMAGE_MANIFEST.md` (images).

**Reference website to study before building each template:** https://iruvilcda.lg.gov.ng (page map in `04-REFERENCE_NOTES.md`).

**Global rules for every template**
- Header, footer, emergency strip, back-to-top and theme toggle appear on every page.
- Every inner page starts with the **Page Opener** (breadcrumb, eyebrow, two-part H1, lead).
- If a section has no content or its images are missing, **hide the section** (no empty boxes).
- People appear only when their photo exists (see `AGENTS.md`).
- Scroll-reveal animation on all sections; respect reduced motion.

---

## T1 — Home (`/`)

| # | Section | Layout | Data / notes |
|---|---|---|---|
| 1 | **Hero slider** | Built to match the hero of https://iruvilcda.lg.gov.ng/ (study its height, slide timing, text position, controls and scroll cue in the browser first). Full viewport height (min 560 px). 3 photographic slides cross-fading with a slow zoom. Left-aligned eyebrow, display headline with gold italic phrase, lead, two buttons. A **translucent overlay** (not a solid block) and a **frosted-glass facts bar** along the bottom (see `03-DESIGN_SYSTEM.md`, section 11). Dots, arrows, progress bar, scroll cue. | Slides and CTAs from `07-CONTENT.md`. Images: `hero-1-secretariat`, `hero-2-seme-border`, `hero-3-suntan-beach`. Skip a slide if its image is missing; if none exist, show a dark-gold gradient hero. |
| 2 | **Chairman's welcome** (directly after hero) | Two columns: portrait (4:5, gold frame) left; right has eyebrow "From the Executive Chairman", headline, the approved message, signature block, button **Read the full profile** → `/leadership/chairman-vice-chairman/#chairman`. Optional credentials strip below. | Image: `chairman.jpg`. If `chairman.jpg` is missing, hide this whole section (the message is attributed to him) and report it as launch-blocking. |
| 3 | **Quick links** | Row of 4 to 5 icon tiles: Report a Concern, Contact the Council, Our Departments, Latest News, Ward Representatives. Tiles overlap the previous section by 40 px on desktop. | Links from sitemap. |
| 4 | **Flagship projects** | One large featured card plus two smaller cards; status tags; button "View all projects". | First three items in `projects.json` flagged `featured`. Prefer the Asheri PHC, Ganyingbo Topa CBT Centre and the empowerment programme. |
| 5 | **History snapshot** | Split band: short paragraph and a mini timeline of 3 milestones; button "Read our history" → `/about/history/`. | Content from History page (short version). Hide milestone nodes with no confirmed date. |
| 6 | **Local highlights** | Three to four tall image cards: Seme Border, Suntan Beach, Coconut Beach, Owode (when content exists). Button "Explore our communities" → `/about/communities-wards/#places-to-visit`. | Skip any card without an image. |
| 7 | **Departments teaser** | Three department cards plus "View all departments". | From department list. |
| 8 | **Latest news** | Three news cards plus "View all news". | Latest three from `news.json`. Hide the section if fewer than one item. |
| 9 | **Councillors by ward** | Five person cards with ward tag and legislative role; button "View all councillors". | `people.json` group `councillors`; only those with photos. Hide section if none. |
| 10 | **Emergency numbers** | Two large numbers: **767** and **112**, with "Lagos State toll-free emergency lines, 24 hours" and tap-to-call. | Fixed content. |
| 11 | **Contact block** | Left: address, phone, email, office hours, social icons, small map link. Right: short contact form. | From `AGENTS.md` key facts. Form per `06-TECH_SPEC.md`. |

---

## T2 — Editorial page (About, History)

Used by `/about/`, `/about/history/`.

| # | Section | Notes |
|---|---|---|
| 1 | Page opener | Eyebrow, H1, lead, breadcrumb |
| 2 | Intro with side panel | Left: long-form intro. Right: "At a glance" panel (State, Secretariat, Wards, Established) |
| 3 | Vision and Mission (About only, `#vision-mission`) | Two large cards side by side with gold top border |
| 4 | Core values | Six value cards in a 3-column grid with icons |
| 5 | Development priorities (About only) | Ten items in a two-column list with gold numerals |
| 6 | Timeline (History only) | Vertical timeline of eras and confirmed milestones |
| 7 | Call to action band | "Meet our leadership" button → leadership page |

---

## T3 — People pages

### T3a — Chairman & Vice Chairman (`/leadership/chairman-vice-chairman/`)
| # | Section | Notes |
|---|---|---|
| 1 | Page opener | Eyebrow "Executive Leadership" |
| 2 | **Chairman feature** (`#chairman`) | Large portrait left (sticky on desktop), name, title, short brief, contact desk (office phone and email only), then the **full biography** in readable sections with sub-headings, **Development priorities** list, **Governance principles** (6 cards), **Notable initiatives** list |
| 3 | **Vice Chairman** (`#vice-chairman`) | Portrait right, name, title, portfolio "Works, Housing and Infrastructure", biography sections |
| 4 | Next-step band | Buttons to Executive Council and Legislative Council |

If a portrait is missing: do not render that person's block at all.

### T3b — Executive Council & Administrative Structure (`/leadership/executive-council/`)
| # | Section | Notes |
|---|---|---|
| 1 | Opener | Eyebrow "Strategic Direction" |
| 2 | Executive Council (`#executive-council`) | Chairman and Vice Chairman compact cards linking to profiles, then **Council officials** grid (Secretary to the Local Government, Council Manager, Treasurer, Head of Budget, Council Engineer, HR Officer, Chief Press Secretary) |
| 3 | Supervisors | Grid of supervisor cards with portfolio and one-line summary |
| 4 | Special Advisers | Grid of adviser cards |
| 5 | Administrative Structure (`#administrative-structure`) | Simple diagram: Executive Chairman → Vice Chairman → Secretary to the Local Government → Supervisors and Special Advisers → Departments. Built in HTML/CSS (no image). Role boxes show the **position only**, with no names and no portraits, so the diagram stays complete even when some photos are missing. |

### T3c — Legislative Council & Councillors (`/leadership/legislative-council/`)
| # | Section | Notes |
|---|---|---|
| 1 | Opener | Eyebrow "Ward Representation" |
| 2 | Legislative Council (`#legislative-council`) | Short explanation of the council's role and the five-ward structure |
| 3 | Councillors (`#councillors`) | Five person cards ordered by legislative rank (Council Leader first), each with ward, community and role. Only those with photos |
| 4 | Ward quick-find | Chips A to E that scroll to cards |

---

## T4 — Department pages (`/departments/…`)

### T4a — Departments overview (`/departments/`)
Opener "Service Network" → intro → three large **group cards** (Public Services & Business; Health, Education & Social Welfare; Works, Environment & Agriculture) with the departments each covers → supervisors strip (person cards for the related supervisors, photo-gated).

### T4b — Grouped service pages
Each of the three pages: opener → for each service area (anchor id from the sitemap): heading, description, "What this office does" bullets, "Related programmes" links, related supervisor card (photo-gated) → call-to-action "Need help? Contact us".
- Fees, forms and procedures appear only if supplied; otherwise hide that block.

---

## T5 — Projects

### T5a — Projects list (`/projects/`)
| # | Section | Notes |
|---|---|---|
| 1 | Opener "Delivery Portfolio" | |
| 2 | **Stats strip** | Total, Completed, Ongoing, Planned (counted from data) |
| 3 | **Filter bar** | Status chips: All · Completed · Ongoing · Planned. Type chips: All · Infrastructure · Community · Education · Health · Environment. Reads `?status=` and `?type=` from the URL. Updates URL without reload |
| 4 | **Project grid** | Cards; empty-result message "No projects match this filter yet." |
| 5 | Closing band | Link to Empowerment Programmes and News |

### T5b — Project detail (`/projects/{slug}/`)
Hero image band → title, status tag, type, date → long description → **Record snapshot** panel (Status, Type, Location, Start, Expected completion — only filled fields) → **Photo record** grid with lightbox → Related projects.

### T5c — Empowerment Programmes (`/projects/empowerment/`)
Opener → overview → featured programme (100-day empowerment programme) with beneficiary groups as icon tiles → what residents received (tools, support, equipment) → photo record → "Stay informed" note about verified announcements.

---

## T6 — News and gallery

### T6a — News list (`/news/`)
Opener "Public Record" → filter chips (All · News · Official Announcements · Events) → card grid (3 columns) → pagination or "Load more" (12 per page). Reads `?category=`.

### T6b — Article (`/news/{slug}/`)
Hero image → category, date, reading time → title → body → gallery of related photos → share buttons (Facebook, WhatsApp, copy link) → "Latest news" cards.

### T6c — Photo Gallery (`/gallery/`)
Opener "Visual Archive" → category chips (All · Governance · Health · Education · Empowerment · Security · Culture · Environment) → album grid (cover, category tag, photo count, title, date) → clicking an album opens a lightbox of its photos.

---

## T7 — Contact

### T7a — Contact & Location (`/contact/`)
Opener "We're here to help" → two columns: left **Contact information** (`#contact-information`): address, phone/WhatsApp with tap-to-call, public email, office hours, social links; right: short **contact form** → full-width **Office location** (`#office-location`): address card plus map embed (OpenStreetMap or Google Maps) with "Get directions" button; Lagos emergency numbers strip.

### T7b — Feedback & Complaints (`/contact/feedback-complaints/`)
Opener → short explainer (what to include, what happens next) → **complaint form**: Full name, Phone, Email (optional), Ward (A to E), Type (Service delivery · Infrastructure · Environment · Revenue and levies · Other), Subject, Message → success panel with reference time and expected acknowledgement text → privacy note. Form only; nothing is displayed publicly.

---

## T8 — Utility

- **404:** large "404" in gold Playfair, friendly line, buttons to Home, Projects, News, Contact.
- **Privacy Policy:** plain editorial page using wording from `07-CONTENT.md`.

---

## Shared patterns

- **Breadcrumb:** Home › Section › Page, small, muted, current page in text colour.
- **CTA band:** full-width, black or `--bg-alt`, gold hairline, one headline and one or two buttons.
- **Anchor highlight:** when arriving via `#id`, outline the target section in gold for 1.5 s.
- **Skeletons:** while people or card images resolve, show skeleton blocks; remove them if the item is dropped.
