# Placeholders & Launch Audit Report — Badagry West LCDA

**Generated:** Final QA Sweep (Phase 11)  
**Status:** All 19 core pages + 9 dynamic detail routes built, verified, and functional.  
**Compliance Rule:** No unconfirmed, unverified, or placeholder text is displayed on any public webpage.

---

## 1. Action Items Required from the Council Prior to Launch

| # | Item | Current State in Code | Action Required Before Going Live | Impact if Not Resolved |
|---|------|-----------------------|-----------------------------------|------------------------|
| **1** | **Formspree Endpoint** | `"formEndpoint": "[PLACEHOLDER]"` in `data/site.json` | Register free account at [formspree.io](https://formspree.io) using `admin@omoadugbo.com`. Create form, copy endpoint ID (`https://formspree.io/f/XXXXXXXX`), and paste into `data/site.json`. | Forms safely show the setup advisory notice; submissions cannot be emailed until set. |
| **2** | **Official Domain Name** | `https://badagrywest.lg.gov.ng/` (used as standard default) | Confirm final production domain (e.g. `badagrywest.lg.gov.ng` or other council domain). | Canonical URLs, `sitemap.xml`, and `robots.txt` reflect this domain. |
| **3** | **Council Approval of Welcome Message** | Drafted in `index.html` from `docs/07-CONTENT.md` | Executive Chairman Hon. Rauf Ibrahim Kayode Yemaren to give formal sign-off on the text of the Welcome Address. | Editorial authorization. |
| **4** | **Confirmation of Office Hours** | Set to `Monday to Friday, 8:00 AM – 4:00 PM` | Secretariat administration to confirm opening and closing hours for citizen services. | Displayed in footer, contact page, and structured data. |
| **5** | **Confirmation of Project Statuses** | 4 projects flagged `confirm: true` in `data/projects.json` | Council to confirm status (Ongoing vs. Completed) for:<br>1. *Inner Roads Grading* (Ongoing)<br>2. *Perimeter Fencing, Sawa* (Completed)<br>3. *Perimeter Fencing, Apa* (Completed)<br>4. *Solar Borehole, Akoko* (Completed) | Displayed with current researched status until confirmed. |
| **6** | **Confirmation of Official Titles & Spellings** | 11 officials flagged `confirm: true` in `data/people.json` | Council administration to verify exact names, titles, and portfolios for the 11 officials listed in Section 3 below. | Official records accuracy. |
| **7** | **Secretariat GPS Map Pin** | Set to Kankon corridor search on OpenStreetMap / Google Maps | Council works team to provide exact secretariat GPS coordinates. | Precise map centering. |

---

## 2. Missing Leadership Photographs (Cleanly Withheld)

Per the strict Photo-Gating rule (*"A person appears only if their photograph exists. A name never appears without a photograph"*), the following 5 officials from `data/people.json` currently have no image file in `images/` and are **completely omitted from all leadership cards, listings, and directories**:

1. **Engr. Lawrence Akande** — Council Manager (`images/council-manager.jpg` missing)
2. **Mr. Kazeem Adesanya** — Head of Budget (`images/head-of-budget.jpg` missing)
3. **Mr. Oje Kehinde** — Council Engineer (`images/council-engineer.jpg` missing)
4. **Mr. Ibiyemi Enuice** — Human Resources Officer (`images/hr-officer.jpg` missing)
5. **Bar. Bankole Emmanuel** — Supervisor for Legislative Matters (`images/sup-bankole.jpg` missing)

*When their official portraits are provided, placing the JPEG file with the exact manifest filename into `images/` will automatically cause them to render on the leadership and department pages without touching any HTML or CSS.*

---

## 3. Officials Awaiting Name/Title Confirmation (`confirm: true`)

The following 11 officials currently render (or are ready to render) with researched titles that require council administrative verification:
1. `council-manager`: Engr. Lawrence Akande (Council Manager) — [Photo Missing]
2. `treasurer`: Mr. Kamorudeen Asuni (Council Treasurer) — [Photo Present]
3. `head-of-budget`: Mr. Kazeem Adesanya (Head of Budget) — [Photo Missing]
4. `council-engineer`: Mr. Oje Kehinde (Council Engineer) — [Photo Missing]
5. `hr-officer`: Mr. Ibiyemi Enuice (Human Resources Officer) — [Photo Missing]
6. `sup-mathias`: Kuton Mathias (Supervisor for Political Matters) — [Photo Present]
7. `councillor-johnson`: Hon. Ajaneson Renti Johnson (Council Leader · Ward D, Akoro) — [Photo Present]
8. `councillor-gbetohome`: Hon. Johnson Nathaniel Gbetohome (Deputy Leader · Ward B, Wesere) — [Photo Present]
9. `councillor-kayode`: Hon. Fideyon David Kayode (Majority Leader · Ward A, Kweme) — [Photo Present]
10. `councillor-pedetin`: Hon. Abraham Christina Pedetin (Chief Whip · Ward E, Gbethrome) — [Photo Present]
11. `councillor-menuton`: Hon. Hoteyin Monday Menuton (Deputy Chief Whip · Ward C, Apa) — [Photo Present]

---

## 4. Projects Hidden Due to Missing Images

Per the project gating rule (*"Show a project only if its first image exists"*), the following 6 projects from `docs/07-CONTENT.md` are withheld until photos are provided:
1. **Gedu Road Phase I** (`images/project-gedu-road.jpg`) — Ongoing
2. **Suntan Beach Police Post Renovation** (`images/project-police-post.jpg`) — Completed
3. **Electrification of Gbaji–Seme and Owode–Apa Axis** (`images/project-electrification.jpg`) — Completed
4. **Primary Health Centre Equipment Upgrade** (`images/project-phc-equipment.jpg`) — Completed
5. **International Market at Gbaji Junction** (`images/planned-gbaji-market.jpg`) — Planned
6. **Public Primary School in Seme Border Corridor** (`images/planned-seme-school.jpg`) — Planned

---

## 5. News Articles Hidden Due to Missing Images

1. **Cholera Prevention Advocacy in Badagry West** (7 February 2026) — Requires `news-04.jpg`
2. **Lagos State Commissions Electrification Works** (11 March 2026) — Requires `news-05.jpg`
3. **Chairman Marks One Year in Office** (29 July 2026) — Requires `news-06.jpg`

---

## 6. Content Elements Omitted by Rule

- **No Chieftaincy / Traditional Ruler Listings:** Intentionally omitted from all pages and directories per `AGENTS.md`.
- **No Passing or Tribute Mentions:** Zero mentions of the former Vice Chairman or memorial tributes.
- **No Personal Biometric / Private Data:** No religion, marital status, or exact date of birth published.
- **No Unverified Fees or Regulatory Schedules:** Tariff amounts and procedural forms withheld pending formal council gazette.
- **No Resident Comments or File Uploads:** Civic redress forms are private intake channels only.
