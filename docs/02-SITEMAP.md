# 02 — Sitemap and Navigation

**Total pages: 19.** Two template types (news article, project detail) generate extra pages from data and are not counted.

**Reference website for layout study:** https://iruvilcda.lg.gov.ng (see `AGENTS.md` for the page-by-page reference table).

---

## 1. Page list

URLs use folder-style paths with an `index.html` in each folder, so addresses stay clean (for example `/about/history/`).

| # | Page | URL | File |
|---|---|---|---|
| 1 | Home | `/` | `index.html` |
| 2 | About Badagry West LCDA (includes Vision & Mission) | `/about/` | `about/index.html` |
| 3 | History & Background | `/about/history/` | `about/history/index.html` |
| 4 | Our Communities & Wards (includes Places to Visit) | `/about/communities-wards/` | `about/communities-wards/index.html` |
| 5 | Executive Chairman & Vice Chairman | `/leadership/chairman-vice-chairman/` | `leadership/chairman-vice-chairman/index.html` |
| 6 | Executive Council & Administrative Structure | `/leadership/executive-council/` | `leadership/executive-council/index.html` |
| 7 | Legislative Council & Councillors | `/leadership/legislative-council/` | `leadership/legislative-council/index.html` |
| 8 | Departments | `/departments/` | `departments/index.html` |
| 9 | Public Services & Business | `/departments/public-services-business/` | `departments/public-services-business/index.html` |
| 10 | Health, Education & Social Welfare | `/departments/health-education-welfare/` | `departments/health-education-welfare/index.html` |
| 11 | Works, Environment & Agriculture | `/departments/works-environment-agriculture/` | `departments/works-environment-agriculture/index.html` |
| 12 | Projects (filterable) | `/projects/` | `projects/index.html` |
| 13 | Empowerment Programmes | `/projects/empowerment/` | `projects/empowerment/index.html` |
| 14 | Blog & News (filterable, includes Official Announcements) | `/news/` | `news/index.html` |
| 15 | Photo Gallery | `/gallery/` | `gallery/index.html` |
| 16 | Contact & Location | `/contact/` | `contact/index.html` |
| 17 | Feedback & Complaints | `/contact/feedback-complaints/` | `contact/feedback-complaints/index.html` |
| 18 | 404 Page | n/a | `404.html` |
| 19 | Privacy Policy | `/privacy/` | `privacy/index.html` |

### Template pages (not counted)
| Template | URL pattern | Data source |
|---|---|---|
| News article | `/news/{slug}/` | `data/news.json` |
| Project detail | `/projects/{slug}/` | `data/projects.json` |

### Supporting files
`sitemap.xml`, `robots.txt`, `favicon` set, `manifest.webmanifest`.

---

## 2. Main navigation

Seven items. Desktop uses dropdowns; mobile uses a full-screen slide-in menu with expandable groups. Dropdown labels keep the council's original menu wording. Where several labels share one page, each links to an anchor on that page.

### Home
→ `/`

### About Us
| Menu label | Goes to |
|---|---|
| About Badagry West LCDA | `/about/` |
| History & Background | `/about/history/` |
| Vision & Mission | `/about/#vision-mission` |
| Our Communities | `/about/communities-wards/#communities` |
| Wards | `/about/communities-wards/#wards` |

### Leadership & Governance
| Menu label | Goes to |
|---|---|
| Executive Chairman | `/leadership/chairman-vice-chairman/#chairman` |
| Vice Chairman | `/leadership/chairman-vice-chairman/#vice-chairman` |
| Executive Council | `/leadership/executive-council/#executive-council` |
| Legislative Council | `/leadership/legislative-council/#legislative-council` |
| Councillors | `/leadership/legislative-council/#councillors` |
| Administrative Structure | `/leadership/executive-council/#administrative-structure` |

### Departments & Services
| Menu label | Goes to |
|---|---|
| Departments | `/departments/` |
| Public Services | `/departments/public-services-business/#public-services` |
| Business & Trade | `/departments/public-services-business/#business-trade` |
| Health & Social Welfare | `/departments/health-education-welfare/#health-social-welfare` |
| Education & Youth Development | `/departments/health-education-welfare/#education-youth` |
| Environment & Sanitation | `/departments/works-environment-agriculture/#environment-sanitation` |
| Works & Infrastructure | `/departments/works-environment-agriculture/#works-infrastructure` |
| Agriculture & Rural Development | `/departments/works-environment-agriculture/#agriculture-rural` |

### Projects & Development
| Menu label | Goes to |
|---|---|
| Completed Projects | `/projects/?status=completed` |
| Ongoing Projects | `/projects/?status=ongoing` |
| Planned Projects | `/projects/?status=planned` |
| Infrastructure Development | `/projects/?type=infrastructure` |
| Community Development | `/projects/?type=community` |
| Empowerment Programmes | `/projects/empowerment/` |

The Projects page reads the `status` and `type` values in the address and applies the matching filter on load.

### News & Media
| Menu label | Goes to |
|---|---|
| Blog & News | `/news/` |
| Official Announcements | `/news/?category=announcements` |
| Photo Gallery | `/gallery/` |

### Contact Us
| Menu label | Goes to |
|---|---|
| Contact Information | `/contact/#contact-information` |
| Office Location | `/contact/#office-location` |
| Feedback & Complaints | `/contact/feedback-complaints/` |

The council's "Department Directory" item is intentionally removed.

### Header extras
- Logo (links home)
- Dark/light toggle (sun/moon)
- Primary button: **Report a Concern** → `/contact/feedback-complaints/`

---

## 3. Footer (all pages)

Three columns plus a bottom bar.

1. **Council:** logo, one-line description, social links (Facebook, Instagram), WhatsApp link
2. **Quick links:** About, Leadership, Departments, Projects, News, Gallery, Contact
3. **Reach us:** secretariat address, phone, public email, office hours
4. **Bottom bar:** © current year Badagry West LCDA · Privacy Policy

Include an emergency strip: **Lagos emergency lines 767 and 112** (toll-free, 24 hours).

Do not include a "System Operational" badge or any status indicator.

---

## 4. Page contents at a glance

Detailed layouts are in `05-PAGE_TEMPLATES.md`; copy is in `07-CONTENT.md`.

### 1. Home
Hero slider (3 images, clear CTAs) → Chairman's welcome message with "Read the full profile" button → Quick links → Flagship projects → History snapshot → Local highlights → Departments teaser → Latest news → Councillors by ward → Emergency numbers → Contact block with short form.

### 2. About Badagry West LCDA
Page opener → Overview → Vision & Mission (`#vision-mission`) → Core values → Development priorities → Call-to-action to leadership.

### 3. History & Background
Page opener → Short factual history → Timeline of eras → Key milestones. History appears only here and as a snapshot on Home.

### 4. Our Communities & Wards
Page opener → Communities (`#communities`) → Five wards A to E with councillors where photos exist (`#wards`) → **Places to Visit:** Seme border, Suntan Beach, Coconut Beach, Owode, Gbaji, French Village.

### 5. Executive Chairman & Vice Chairman
Chairman feature (`#chairman`): portrait, brief, full biography, priorities, principles → Vice Chairman (`#vice-chairman`): portrait and biography.

### 6. Executive Council & Administrative Structure
Executive Council cards (`#executive-council`) → Council officials → Supervisors and Special Advisers → Administrative structure overview (`#administrative-structure`).

### 7. Legislative Council & Councillors
Legislative Council introduction (`#legislative-council`) → Councillors by ward (`#councillors`).

### 8. Departments
Overview of all departments as cards, linking to the three grouped pages.

### 9. Public Services & Business
Public Services (`#public-services`) → Business & Trade (`#business-trade`). Fees and procedures appear only when supplied.

### 10. Health, Education & Social Welfare
Health & Social Welfare (`#health-social-welfare`) → Education & Youth Development (`#education-youth`).

### 11. Works, Environment & Agriculture
Environment & Sanitation (`#environment-sanitation`) → Works & Infrastructure (`#works-infrastructure`) → Agriculture & Rural Development (`#agriculture-rural`).

### 12. Projects
Stats strip (total, completed, ongoing, planned) → Filter chips by status and type → Project cards → Links to detail pages.

### 13. Empowerment Programmes
Programme overview → 100-day empowerment programme → Beneficiary groups → Photo record.

### 14. Blog & News
Filter chips (All, News, Official Announcements, Events) → Article cards → Pagination → Link to article template.

### 15. Photo Gallery
Album grid with category tag and photo count → Lightbox viewer.

### 16. Contact & Location
Contact information (`#contact-information`) → Office location with map (`#office-location`) → Office hours → Social links → Short contact form.

### 17. Feedback & Complaints
Short explainer → Form (name, phone, email, ward, subject, message) → Confirmation message. Form only; no public display.

### 18. 404 Page
Friendly message, search-free, links back to Home, Projects, News and Contact.

### 19. Privacy Policy
How form data is used and where it is sent. Wording supplied in `07-CONTENT.md`.

---

## 5. Merge map (original menu → page)

| Original item | Page |
|---|---|
| About Badagry West LCDA, Vision & Mission | 2 |
| History & Background | 3 |
| Our Communities, Wards | 4 |
| Executive Chairman, Vice Chairman | 5 |
| Executive Council, Administrative Structure | 6 |
| Legislative Council, Councillors | 7 |
| Departments | 8 |
| Public Services, Business & Trade | 9 |
| Health & Social Welfare, Education & Youth Development | 10 |
| Environment & Sanitation, Works & Infrastructure, Agriculture & Rural Development | 11 |
| Completed, Ongoing, Planned, Infrastructure, Community | 12 |
| Empowerment Programmes | 13 |
| Blog & News, Official Announcements | 14 |
| Photo Gallery | 15 |
| Contact Information, Office Location | 16 |
| Feedback & Complaints | 17 |
| Department Directory | Removed |

---

## 6. Rules for links and behaviour

- Every internal link uses a root-relative path.
- Anchors must have matching `id` attributes on their sections, with smooth scrolling and an offset below the sticky header.
- A visitor landing on an anchor sees that section highlighted briefly (subtle gold outline fading out).
- Each page has one `<h1>`, a breadcrumb trail (except Home) and a "Back to top" control.
- External links open in a new tab with `rel="noopener noreferrer"`.
- People sections follow the images rule in `AGENTS.md`: a person is rendered only when their photo exists.
- If a page section has no content to show (for example, no planned projects yet), hide the section and its filter chip rather than showing an empty state.
