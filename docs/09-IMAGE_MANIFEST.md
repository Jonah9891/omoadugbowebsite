# 09 — Image Manifest

Every image the website uses, with its exact filename, where it appears, its shape and alt text. The council uploads these to the flat folder `images/` using **exactly** these names (lowercase).

**Specs:** photographs as JPG, at least 1600 px wide for landscape and 800 × 1000 px for portraits. Logos as PNG with transparent background. Keep card images under about 400 KB and hero images under about 600 KB where possible.

**Rules for missing images**
- **People (portraits):** if the file is missing, show nothing for that person (no card, no name, no position, no placeholder). See `AGENTS.md` and `06-TECH_SPEC.md`.
- **Hero, projects, news, places, gallery:** if a file is missing, skip that slide, card or album. Do not show broken images, grey boxes or stock photos.
- **Logo:** if missing, show the text "Badagry West LCDA" set in Playfair Display as the wordmark.
- Record every missing file in `PLACEHOLDERS_REPORT.md`.

Image names for people also appear in `data/people.json`.

---

## 1. Brand (send first)

| Filename | Use | Shape | Alt text |
|---|---|---|---|
| `logo.png` | Header and footer (light mode), schema | Transparent PNG | Badagry West LCDA logo |
| `logo-white.png` | Header and footer (dark mode) | Transparent PNG, light-coloured | Badagry West LCDA logo |
| `favicon.png` | Favicon and app icon | 512 × 512 square | (none; decorative) |
| `og-default.jpg` | Social share image | 1200 × 630 | Badagry West LCDA |

## 2. Hero and Home

| Filename | Use | Shape | Alt text |
|---|---|---|---|
| `hero-1-secretariat.jpg` | Hero slide 1 | 16:9 | Badagry West LCDA Council Secretariat at Kankon |
| `hero-2-seme-border.jpg` | Hero slide 2 | 16:9 | The Seme border crossing between Nigeria and the Republic of Benin |
| `hero-3-suntan-beach.jpg` | Hero slide 3 | 16:9 | Suntan Beach, Badagry |

**Renaming the three photos already supplied** (lowercase, hyphens, no spaces; keep the same file type, and tell us if it is not `.jpg`):

| Current name | Rename to |
|---|---|
| `hero_section_secretariat` | `hero-1-secretariat.jpg` |
| `Seme border` | `hero-2-seme-border.jpg` |
| `suntan Beach` | `hero-3-suntan-beach.jpg` |

The Seme border and Suntan Beach photos also serve the Places to Visit cards. If `place-seme-border.jpg` or `place-suntan-beach.jpg` is not supplied, reuse the matching hero photo (crop 4:5 with `object-fit: cover`).
| `chairman-at-work.jpg` | Second Chairman photo (profile page and welcome section) | 4:3 or 3:2 | The Executive Chairman at work |

## 3. Leadership portraits (head and shoulders, plain background, 4:5)

Alt text pattern: "Portrait of {title} {name}, {position}".

| Filename | Person | Position |
|---|---|---|
| `chairman.jpg` | Hon. Rauf Ibrahim Kayode Yemaren | Executive Chairman |
| `vice-chairman.jpg` | Hon. Sesi Ogungbe Yusuf | Vice Chairman |
| `slg.jpg` | Nathaniel Johnson Henwa | Secretary to the Local Government |
| `council-manager.jpg` | Engr. Lawrence Akande | Council Manager |
| `treasurer.jpg` | Mr. Kamorudeen Asuni | Council Treasurer |
| `head-of-budget.jpg` | Mr. Kazeem Adesanya | Head of Budget |
| `council-engineer.jpg` | Mr. Oje Kehinde | Council Engineer |
| `hr-officer.jpg` | Mr. Ibiyemi Enuice | Human Resources Officer |
| `press-secretary.jpg` | Solomon Zosu | Chief Press Secretary |
| `adviser-mauyon.jpg` | Mr. Adande Mauyon | Special Adviser, Intergovernmental Relations |
| `adviser-balikis.jpg` | Mrs. Bashiru Balikis | Special Adviser, Social Services and Welfare |

### Councillors
| Filename | Person | Role · Ward |
|---|---|---|
| `councillor-johnson.jpg` | Hon. Ajaneson Renti Johnson | Council Leader · Ward D, Akoro |
| `councillor-gbetohome.jpg` | Hon. Johnson Nathaniel Gbetohome | Deputy Leader · Ward B, Wesere |
| `councillor-kayode.jpg` | Hon. Fideyon David Kayode | Majority Leader · Ward A, Kweme |
| `councillor-pedetin.jpg` | Hon. Abraham Christina Pedetin | Chief Whip · Ward E, Gbethrome |
| `councillor-menuton.jpg` | Hon. Hoteyin Monday Menuton | Deputy Chief Whip · Ward C, Apa |

### Supervisors
| Filename | Person | Portfolio |
|---|---|---|
| `sup-dansuki.jpg` | Mr. Metose Dansuki | Budget and Planning |
| `sup-samuel.jpg` | Pst. Boyon Samuel | Religious Matters |
| `sup-hunsa.jpg` | Mrs. Sera Hunsa | Women Affairs and Poverty Alleviation (WAPA) |
| `sup-kuwhede.jpg` | Mr. Moses Kuwhede | Environmental Services |
| `sup-bankole.jpg` | Bar. Bankole Emmanuel | Legislative Matters |
| `sup-ajaneson.jpg` | Mr. Richard Ajaneson | Health Services |
| `sup-oke.jpg` | Mr. Sunday Oke | Market and Park Matters |
| `sup-kareem.jpg` | Hon. Ali Kareem | Agriculture, Social Services and Welfare |
| `sup-zinsu.jpg` | Mr. Zinsu Emmanuel | Information and Communication Technology |
| `sup-kudus.jpg` | Olatunde Kudus | Education and Library Services |
| `sup-denagan.jpg` | Mrs. Sesi Hannah Denagan | Tourism, Art and Culture |
| `sup-sejoro.jpg` | Sotin Daniel Sejoro A. | Chieftaincy and Boundary |
| `sup-ajose.jpg` | Ajose Esther | Revenue Matters and Enforcement |
| `sup-mathias.jpg` | Kuton Mathias | Political Matters |
| `sup-ogungbe.jpg` | Ogungbe Lanre Kingsley | Youth and Civic Engagement |

## 4. About and wards

| Filename | Use | Shape | Alt text |
|---|---|---|---|
| `about-council.jpg` | About page intro | 4:3 | Badagry West LCDA council in action |
| `history-archive.jpg` (optional) | History page | 4:3 | A historic scene from the Badagry region |
| `ward-kweme.jpg` | Ward A card | 16:10 | A street scene in Kweme, Ward A |
| `ward-wesere.jpg` | Ward B card | 16:10 | A scene in Wesere, Ward B |
| `ward-apa.jpg` | Ward C card | 16:10 | A scene in Apa, Ward C |
| `ward-akoro.jpg` | Ward D card | 16:10 | A scene in Akoro, Ward D |
| `ward-gbethrome.jpg` | Ward E card | 16:10 | A scene in Gbethrome, Ward E |
| `ward-map.png` (optional) | Wards section | Any | Map of the five wards of Badagry West LCDA |

## 5. Places to visit

| Filename | Use | Shape | Alt text |
|---|---|---|---|
| `place-seme-border.jpg` | Highlights card | 4:5 | The Seme border crossing between Nigeria and the Republic of Benin |
| `place-suntan-beach.jpg` | Highlights card | 4:5 | Suntan Beach, Badagry |
| `place-coconut-beach.jpg` | Highlights card | 4:5 | Coconut Beach, Badagry |
| `place-owode.jpg` | Highlights card | 4:5 | Owode, Badagry West |
| `place-gbaji-bridge.jpg` | Highlights card | 4:5 | The Gbaji International Link Bridge |
| `place-french-village.jpg` (optional) | Highlights card | 4:5 | The French Village, Irosu |

## 6. Departments (one photo each; project photos are fine)

| Filename | Use | Alt text |
|---|---|---|
| `dept-health.jpg` | Health card | Health services in Badagry West |
| `dept-education.jpg` | Education card | Education programme in Badagry West |
| `dept-works.jpg` | Works card | Road works in Badagry West |
| `dept-environment.jpg` | Environment card | Environmental sanitation in Badagry West |
| `dept-agriculture.jpg` | Agriculture card | Farming in Badagry West |
| `dept-business.jpg` | Business and markets card | Traders at a market in Badagry West |

## 7. Projects

| Filename | Project | Alt text |
|---|---|---|
| `project-asheri-phc-1.jpg` | Asheri Primary Health Centre | The Primary Health Centre under construction in Asheri |
| `project-asheri-phc-2.jpg` | Asheri Primary Health Centre | Another view of the Asheri Primary Health Centre |
| `project-ganyingbo-cbt-1.jpg` | Ganyingbo Topa CBT Centre | The CBT Centre at Ganyingbo Topa |
| `project-ganyingbo-cbt-2.jpg` | Ganyingbo Topa CBT Centre | Another view of the CBT Centre |
| `project-sawa-school.jpg` | Methodist Primary School, Sawa fence | Perimeter fence at Methodist Primary School, Sawa |
| `project-apa-school.jpg` | L.A. Primary School, Apa fence | Perimeter fence at L.A. Primary School, Apa |
| `project-gedu-road.jpg` | Gedu Road Phase I | Works on Gedu Road |
| `project-inner-roads.jpg` | Inner roads | A graded inner road in Badagry West |
| `project-akoko-borehole.jpg` | Akoko borehole | The solar-powered borehole in Akoko |
| `project-police-post.jpg` | Suntan Beach Police Post | The renovated Suntan Beach Police Post |
| `project-electrification.jpg` | Electrification | Electrification works on the Gbaji–Seme axis |
| `project-phc-equipment.jpg` | Health equipment | New medical equipment at a primary health centre |
| `planned-gbaji-market.jpg` | International Market (planned) | The proposed site of the International Market at Gbaji Junction |
| `planned-seme-school.jpg` | Seme corridor school (planned) | The proposed school site near the Seme border |

## 8. Empowerment

| Filename | Use | Alt text |
|---|---|---|
| `empower-tools.jpg` | Work tools distribution | Artisans receiving work tools |
| `empower-cash.jpg` | Cash support | Residents receiving financial support |
| `empower-medical.jpg` | Medical equipment | Medical equipment delivered to primary health centres |
| `empower-palliative.jpg` | Food support | Food palliatives being distributed |
| `empower-pwd.jpg` | Persons with disabilities | Support for persons with disabilities |

## 9. News and gallery

| Filename | Use | Shape |
|---|---|---|
| `news-01.jpg` … `news-06.jpg` | Cover image for each news item | 16:10 |
| `gallery-100days-01.jpg` … `-04.jpg` | 100-Day Empowerment Programme album | Mixed |
| `gallery-electrification-01.jpg` … `-04.jpg` | Electrification album | Mixed |
| `gallery-anniversary-01.jpg` … `-04.jpg` | One-year anniversary album | Mixed |
| `gallery-tourismday-01.jpg` … `-04.jpg` | World Tourism Day album | Mixed |
| `gallery-sanitation-01.jpg` … `-04.jpg` | Environmental sanitation album | Mixed |
| `gallery-security-01.jpg` … `-04.jpg` | Peace and security meetings album | Mixed |

Gallery and news alt text: use the album or headline plus "photo {n}" until captions are supplied.

## 10. Contact

| Filename | Use | Shape | Alt text |
|---|---|---|---|
| `contact-secretariat.jpg` | Contact page | 16:9 | The entrance to the Badagry West LCDA Council Secretariat, Kankon |

---

## Quick checklist for the council

1. **Send first:** `logo.png`, `logo-white.png`, `favicon.png`, `chairman.jpg`, `vice-chairman.jpg`, and the three hero photos (`hero-1-secretariat.jpg`, `hero-2-seme-border.jpg`, `hero-3-suntan-beach.jpg`; already supplied, rename as above)
2. **Then:** all other portraits, councillors and supervisors
3. **Then:** project, place and empowerment photos
4. **Last:** news and gallery photos

Total: about 105 files. Photos must be real and owned by (or permitted for use by) the council. No stock images.
