# 01 — Project Brief

**Project:** Official website of Badagry West Local Council Development Area (LCDA)
**Client:** Badagry West LCDA, Lagos State, Nigeria
**Reference website:** https://iruvilcda.lg.gov.ng (design quality benchmark only; see `AGENTS.md`)

---

## 1. Purpose

Build a modern, premium, professional website that presents Badagry West LCDA to residents, visitors, investors and partner agencies. It should make the council's leadership, projects, services and public information easy to find, and show a government that is open, active and accountable.

## 2. Goals

1. **Trust:** present the council as credible, organised and transparent.
2. **Visibility:** show leadership, ongoing and completed work, and local highlights.
3. **Access:** help residents find services, news and contact routes in under three taps on a phone.
4. **Pride:** present Badagry West's heritage, coastline and border-gateway role in a way residents and visitors admire.
5. **Findability:** rank well for searches such as "Badagry West LCDA", "Badagry West LCDA chairman" and "Seme border Badagry West".

## 3. Audiences

| Audience | What they need |
|---|---|
| Residents | Services, projects, news, how to contact or complain |
| Local businesses and traders | Business and trade information, empowerment programmes |
| Visitors and tourists | Beaches, border, local highlights, where the council sits |
| Investors and partner agencies | Leadership, development priorities, credibility |
| Journalists | Leadership, press-friendly facts, contact |
| Lagos State agencies | Accurate council structure and contact route |

Most visitors will use phones on mobile data. Design and performance must be mobile-first.

## 4. Tone and voice

Confident, warm, official and hopeful. Plain English. Short sentences. Factual: no exaggeration, no claims that cannot be backed up. Avoid jargon. Never sound boastful; let projects and facts speak.

## 5. Scope

### In scope
- 19 pages (see `02-SITEMAP.md`) plus templates for news articles and project details
- Dark and light modes
- Contact form and complaint form, delivered to admin@omoadugbo.com
- Photo gallery with lightbox
- Project filters (status and type) and news filters (including Official Announcements)
- Data-driven people sections that show a person only when their photo exists
- SEO foundations (titles, descriptions, schema, sitemap, robots)

### Out of scope
- Resident accounts, comments, uploads or any user-generated content
- Traditional rulers and chieftaincy listings
- A department directory with individual contacts
- Online payments or permit applications
- Languages other than English
- Video hosting (link out only if needed)
- A tourism page in the menu (local highlights sit inside **Our Communities & Wards** and on the homepage)

## 6. Key facts

- **Name:** Badagry West Local Council Development Area (LCDA), Lagos State
- **Secretariat:** Owode-Apa Road, Kankon, Badagry, Lagos State
- **Wards (5):** A Kweme · B Wesere · C Apa · D Akoro · E Gbethrome
- **Phone / WhatsApp:** 08037619499
- **Public email:** support@omoadugbo.com · **Forms deliver to:** admin@omoadugbo.com
- **Social:** Facebook and Instagram (links in `AGENTS.md`)
- **Office hours:** Monday to Friday, 8:00 AM – 4:00 PM (confirm before launch)
- **Emergency (Lagos):** 767 and 112
- **Establishment:** the LCDA is one of the 37 LCDAs created in Lagos State in 2003. [PLACEHOLDER: confirm the council's official establishment wording]
- **Status:** LCDAs are not constitutionally recognised local governments, so the site calls the body a "Local Council Development Area" and avoids calling it a "local government."

## 7. Leadership snapshot

- **Executive Chairman:** Hon. Rauf Ibrahim Kayode Yemaren (sworn in 27 July 2025; APC)
- **Vice Chairman:** Hon. Sesi Ogungbe Yusuf (sworn in November 2025; oversees Works, Housing and Infrastructure)
- Full list of officials, supervisors, councillors and positions is in `data/people.json` and `07-CONTENT.md`.

## 8. Homepage plan (summary)

Hero slider → Chairman's welcome message (with "Read the full profile" button) → Quick links → Flagship projects → History snapshot → Local highlights (Seme border, Suntan Beach, Coconut Beach, Owode and more) → Departments teaser → Latest news → Councillors by ward → Emergency numbers → Contact block → Footer.

Details in `05-PAGE_TEMPLATES.md`.

## 9. Branding

- Colours: gold, cyber green, black, white
- Fonts: Playfair Display (headlines), Inter (body)
- Logo and photos: supplied by the council in `images/`
- Dark and light modes required

Full tokens in `03-DESIGN_SYSTEM.md`.

## 10. Content sources and confidence

Content is labelled by confidence in `07-CONTENT.md`:

- **Confirmed:** supplied by the council
- **Researched:** found in public sources; must be approved before launch
- **[PLACEHOLDER]:** not yet supplied; never shown publicly

## 11. Success criteria

- All 19 pages built, linked and responsive
- Lighthouse 90+ in Performance, Accessibility, Best Practices and SEO on mobile
- Dark and light modes both polished
- Only people with photos appear
- Forms validate and deliver to the council's email
- No placeholder text visible to the public
- Council approves the content before launch

## 12. Risks and how we handle them

| Risk | Handling |
|---|---|
| Photos arrive late or incomplete | People appear only when photos exist; leadership pages are best reviewed once all photos are in |
| Facts change (officials, dates) | Single data file for people; content reviewed by the council before launch |
| Public-source facts are wrong | All "Researched" items need council approval |
| Form spam | Honeypot field, validation, form-service filtering |
| Slow mobile loading | Image optimisation, lazy loading, minimal JavaScript |
| Over-reliance on JS for people sections | Render people data in a way that still works with caching and degrades cleanly (see `06-TECH_SPEC.md`) |

## 13. Decisions log

| Decision | Date |
|---|---|
| Menu merged from 33 sub-pages to 17 content pages + home + 404 + privacy = 19 | Agreed |
| English only | Agreed |
| No traditional rulers, no department directory, no resident submissions | Agreed |
| Complaints are a form only | Agreed |
| History only on Home and About pages | Agreed |
| Chairman's profile reached via a button from the homepage message | Agreed |
| Asheri PHC and Ganyingbo Topa CBT Centre are "Ongoing" | Confirmed by council |
| Form messages go to admin@omoadugbo.com | Confirmed by council |
| No tribute anywhere on the site | Confirmed by council |
| Palette: gold, cyber green, black, white; fonts: Playfair Display and Inter | Agreed |

## 14. Open items (non-blocking)

- Domain name
- Council's official establishment date and history wording
- What Owode is known for (to complete the local highlights)
- Logo files, including a light version for dark mode
- Chairman's final approval of the welcome message
- Confirmation of office hours
- Photos for people, projects, places and events (see `09-IMAGE_MANIFEST.md`)
