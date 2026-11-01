# 04 — Reference Notes

**Reference website: https://iruvilcda.lg.gov.ng** (Iru-VI LCDA, Lagos)

This is a **design-quality benchmark only**. We replicate its structure, rhythm, spacing and motion — never its text, images, logo, colours or code.

---

## 1. Standing instruction for Antigravity

**Before building any page, open the matching reference page in your browser and study it.** Then write what you learned into `docs/reference-observations.md` (create it, and append per page) before you write code.

For each page record:
1. Section order and the purpose of each section
2. Spacing: section padding, gaps between cards, heading-to-paragraph spacing (measure in px at 1280 and 375)
3. Card anatomy: image ratio, radius, tag position, text sizes, hover effect, transition duration and easing
4. Header behaviour: sticky, scroll changes, dropdown animation, mobile menu
5. Scroll and entrance animations
6. Typographic hierarchy: sizes, weights, case, letter-spacing
7. **Colour usage structure:** where the accent colour appears (buttons, tags, underlines, hovers, borders, focus), where backgrounds change, how text and surfaces contrast. Map each role to **our** palette (gold, cyber green, black, white). Do not copy their colour values.
8. Mobile behaviour at 375 px and tablet at 768 px

If you cannot open the website, stop and ask for screenshots in `reference-screenshots/`. Never guess.

---

## 2. Reference page map

| Our page | Reference URL to study |
|---|---|
| Home | https://iruvilcda.lg.gov.ng/ |
| About, History | https://iruvilcda.lg.gov.ng/about · https://iruvilcda.lg.gov.ng/about/history |
| Executive Chairman & Vice Chairman | https://iruvilcda.lg.gov.ng/about/executive-council/chairman |
| Executive Council | https://iruvilcda.lg.gov.ng/about/executive-council |
| Legislative Council & Councillors | https://iruvilcda.lg.gov.ng/about/legislative-house |
| Departments pages | https://iruvilcda.lg.gov.ng/departments · https://iruvilcda.lg.gov.ng/departments/primary-health-care |
| Projects (list) | https://iruvilcda.lg.gov.ng/projects |
| Project detail | https://iruvilcda.lg.gov.ng/projects/hpv-vaccination-drive |
| News | https://iruvilcda.lg.gov.ng/news |
| Photo Gallery | https://iruvilcda.lg.gov.ng/gallery |
| Contact | https://iruvilcda.lg.gov.ng/contact |

---

## 3. What the reference does (structure we learned)

*Observed from the page text and structure. Confirm visual details in the browser.*

### Global
- Sticky header: logo plus short nav (Home, About dropdown, Departments, Projects, News, Agencies dropdown, Gallery, Documents, Contact).
- Every inner page opens with a **page opener**: small label (for example "Governance Record", "Delivery Portfolio", "Service Network", "Public Record"), a headline split into two parts ("Projects" + "delivery in view."), and a one-line lead.
- Footer: short description, service desk details, "Navigation" and "Public Resources" link lists, copyright line.

### Home (order)
1. Hero with three rotating images and one headline plus one button
2. Executive Chairman portrait beside a "From the Executive Chairman" message and a "Read the full profile" link
3. **Flagship projects:** one featured project (large) plus two smaller cards with status, category and date, then "View all projects"
4. **Attractions strip:** three tall image cards (Leisure, Culture, City Life) with a link each
5. **Departments:** three department cards, then "View all departments"
6. **News:** three cards with category label, date, title, excerpt, "Read more", then "View all news"
7. **Ward representation:** five legislator cards with ward label and role
8. **Emergency helplines:** three big numbers with labels
9. **Contact:** details beside a form
10. Footer

### About / History
Editorial page: opener, an intro with a short record panel, then **four "eras"** as cards, then a "documentation priorities" list and a link onward.

### Executive Council
Opener, a **featured Chairman block** (portrait, brief, contact, "View profile"), then a **grid of council member cards** each with name, role, one-sentence summary and "View profile".

### Chairman profile page
Hero image band, portrait with a contact desk, a long profile, **areas of expertise** list and a **key achievements** list.

### Departments
Opener, then a directory of cards (name, one-sentence mandate, contact, "Read more"). Detail page has a department description and a head/contact panel.

### Projects
Opener with **three stats** (total, completed, in progress), then a **filter row** (All plus themes), then project cards. Detail page: hero image, status/theme/date row, long text, **record snapshot** panel, and a **photo record** grid.

### News
Opener, then a running list of cards in date order, each with image, "Public Update" tag, date, title, excerpt and link.

### Gallery
Opener, then an album grid; each album shows cover image, category tag, photo count, title, short text and date.

---

## 3b. What to improve (our differences)

| Reference weakness | Our fix |
|---|---|
| Hero has one vague button ("Learn About Us") | Two clear actions, for example "Explore Our Projects" and "Report a Concern" |
| No quick services entry | Add a quick-links strip right after the welcome message |
| Contact details are placeholders | Real details only; hide anything not supplied |
| Form carries a "presentation layer" notice | Working form, real confirmation state |
| "System Operational" badge in footer | Remove it |
| Tourism copy about Victoria Island and "Plan a visit" | Local highlights specific to Badagry West, with accurate wording |
| Emergency numbers 108 / 911 / 101 | Lagos numbers **767** and **112** only |
| Dates in mixed formats | One format everywhere: "30 October 2026" |
| Programmes and events mixed under "Projects" | Projects hold delivery work only; events and announcements live in News |
| No dark mode | Full dark and light modes |

---

## 4. Do-not-copy checklist

- [ ] Their wording, headlines and descriptions
- [ ] Their images, logo, favicon and icons
- [ ] Their colour values
- [ ] Their code (inspect for ideas, then write our own)
- [ ] Their names, titles, phone numbers and emails
- [ ] Their placeholder or unfinished content

---

## 5. Why we study motion and colour structure

The reference's polish comes from consistent spacing, restrained motion and disciplined colour use. We want the same feeling with our own identity: gold-led, cyber-green accents, black and white, Playfair Display and Inter, in dark and light modes.
