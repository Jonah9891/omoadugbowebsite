# Placeholders Report — Badagry West LCDA

Report of pending confirmations, missing photographs, and omitted items. This file is updated at the conclusion of each development phase.

---

## Phase 3 — Home Page Audit

### 1. Missing Leadership Photos (Launch-Blocking & Omitted)
The following officials from `data/people.json` currently have no photo in `images/` and are completely omitted from rendered components per `AGENTS.md` section 4:
- `council-manager.jpg` — Engr. Lawrence Akande (Council Manager)
- `head-of-budget.jpg` — Mr. Kazeem Adesanya (Head of Budget)
- `council-engineer.jpg` — Mr. Oje Kehinde (Council Engineer)
- `hr-officer.jpg` — Mr. Ibiyemi Enuice (Human Resources Officer)
- `sup-bankole.jpg` — Bar. Bankole Emmanuel (Supervisor for Legislative Matters)

*Note: The Executive Chairman (`chairman.jpg`), Vice Chairman (`vice-chairman.jpg`), SLG, Treasurer, Press Secretary, both Special Advisers, 14 Supervisors, and all 5 Ward Councillors have photos present and render dynamically.*

### 2. General Imagery Awaiting Supply
- `favicon.png` & `og-default.jpg`
- `about-council.jpg`, `history-archive.jpg`
- Ward landscape photos (`ward-kweme.jpg`, `ward-wesere.jpg`, `ward-apa.jpg`, `ward-akoro.jpg`, `ward-gbethrome.jpg`, `ward-map.png`)
- Places to Visit: `place-coconut-beach.jpg`, `place-gbaji-bridge.jpg`, `place-french-village.jpg`
- Department cards (`dept-health.jpg`, `dept-education.jpg`, `dept-works.jpg`, etc.)
- Specific news & gallery event shots (`news-01.jpg` to `news-06.jpg`, gallery sets)

### 3. Content Items Requiring Council Confirmation
- **Official Domain Name:** Placeholder used (`https://[DOMAIN]/`).
- **Formspree Delivery Endpoint:** Configured as `[PLACEHOLDER]` in `data/site.json`; public form displays the friendly offline advisory ("Our message service is being set up. Please call or WhatsApp +234 803 761 9499").
- **Council Establishment Date & Wording:** Researched 2003 date used in milestones; awaiting formal council text.
- **Office Hours:** Standard hours (Monday – Friday, 8:00 AM – 4:00 PM) to be reconfirmed prior to launch.
- **Owode Community Profile:** Description of Owode cultural/commercial landmarks awaiting council brief.



---

## Phase 4 — About Pages Audit

### 1. Places to Visit Cards (Photo-Gated)
- **Rendered:**
  - `place-seme-border.jpg` — Seme Border crossing
  - `place-suntan-beach.jpg` — Suntan Beach
  - `place-owode.jpg` — Owode-Apa corridor
- **Omitted Due to Missing Photos:**
  - `place-coconut-beach.jpg` — Coconut Beach (omitted cleanly)
  - `place-gbaji-bridge.jpg` — Gbaji Link Bridge (omitted cleanly)
  - `place-french-village.jpg` — French Village (omitted cleanly)

### 2. Content Elements Omitted per Rule
- No traditional rulers or chieftaincy listings included anywhere.
- No history included outside of Home and the About pages.
- No "Plan a visit" wording used.
- "At a Glance" and History timelines present only confirmed milestones (2003, 2025, 2026), omitting unconfirmed dates.


---

## Phase 5 — Leadership Pages Audit

### 1. Missing Portraits (Dropped Dynamically & Kept Hidden)
The following 5 officials from `data/people.json` have no photo in `images/` and are completely omitted from all leadership cards and directories per rule:
1. `council-manager.jpg` — Engr. Lawrence Akande (Council Manager)
2. `head-of-budget.jpg` — Mr. Kazeem Adesanya (Head of Budget)
3. `council-engineer.jpg` — Mr. Oje Kehinde (Council Engineer)
4. `hr-officer.jpg` — Mr. Ibiyemi Enuice (Human Resources Officer)
5. `sup-bankole.jpg` — Bar. Bankole Emmanuel (Supervisor for Legislative Matters)

### 2. Officials Flagged `confirm: true` in `data/people.json`
The council must confirm the exact spelling, title, and portfolio of the following 11 officials prior to final public launch:
1. `council-manager`: Engr. Lawrence Akande (Council Manager) [Photo Missing]
2. `treasurer`: Mr. Kamorudeen Asuni (Council Treasurer) [Photo Present]
3. `head-of-budget`: Mr. Kazeem Adesanya (Head of Budget) [Photo Missing]
4. `council-engineer`: Mr. Oje Kehinde (Council Engineer) [Photo Missing]
5. `hr-officer`: Mr. Ibiyemi Enuice (Human Resources Officer) [Photo Missing]
6. `sup-mathias`: Kuton Mathias (Supervisor for Political Matters) [Photo Present]
7. `councillor-johnson`: Hon. Ajaneson Renti Johnson (Council Leader · Ward D, Akoro) [Photo Present]
8. `councillor-gbetohome`: Hon. Johnson Nathaniel Gbetohome (Deputy Leader · Ward B, Wesere) [Photo Present]
9. `councillor-kayode`: Hon. Fideyon David Kayode (Majority Leader · Ward A, Kweme) [Photo Present]
10. `councillor-pedetin`: Hon. Abraham Christina Pedetin (Chief Whip · Ward E, Gbethrome) [Photo Present]
11. `councillor-menuton`: Hon. Hoteyin Monday Menuton (Deputy Chief Whip · Ward C, Apa) [Photo Present]

### 3. Administrative Structure Verification
- The administrative hierarchy on `/leadership/executive-council/` is built entirely with semantic HTML/CSS flowchart nodes using **positions only**, without listing personal names. This ensures the governance framework remains complete and durable regardless of individual photo availability.
