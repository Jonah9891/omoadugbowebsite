# Reference Observations

## Phase 1 — Foundation

Study of the reference website: **https://iruvilcda.lg.gov.ng** (Home Page)

### 1. Container Width
- Maximum layout container width is capped at `1240px` (`max-w-7xl` / `1280px` outer wrapper with generous fluid gutter spacing).
- Inner content padding uses `clamp(1.25rem, 4vw, 2.5rem)` (20px mobile to 40px desktop) keeping elements cleanly inset from screen edges.

### 2. Section Padding
- Vertical rhythm between primary sections is spacious and deliberate: `clamp(4rem, 8vw, 7rem)` (64px mobile to 112px desktop).
- Subtle section background alterations (`--bg` and `--bg-alt`) establish distinct visual intervals without heavy divider borders.

### 3. Gaps Between Cards
- Card grids use consistent fluid spacing: `1.5rem` (24px) on tablet and desktop, collapsing to `1rem` (16px) or `1.25rem` (20px) on mobile viewports.
- Responsive column distribution: 3 columns $\ge 1024\text{px}$, 2 columns $\ge 640\text{px}$, 1 column on mobile screens ($<640\text{px}$).

### 4. Typography Scale and Font Weights
- **Scale:**
  - Display / Hero Headline: `clamp(2.5rem, 6vw, 4.5rem)` (weights 600, 700 with italic accent phrase).
  - Page Opener / H1: `clamp(2.25rem, 5vw, 3.75rem)` (weight 700).
  - Section Headings (H2): `clamp(1.75rem, 3.4vw, 2.75rem)` (weight 600).
  - Card Titles (H3): `clamp(1.25rem, 2vw, 1.625rem)` (weight 600).
  - Intro / Lead: `clamp(1.0625rem, 1.4vw, 1.25rem)` (weight 400/500).
  - Body Text: `1rem` (16px, line-height 1.65, weight 400/500).
  - Small / Metadata: `0.875rem` (14px, weight 500).
  - Eyebrows: `0.75rem` (12px, uppercase, letter-spacing `0.16em`, weight 600).
- **Rhythm:** Two-part headlines with an eyebrow label, followed by a primary statement featuring an italicized accent phrase.

### 5. Motion: Durations and Easing
- Primary easing curve: `cubic-bezier(.2, .7, .2, 1)` providing smooth deceleration.
- Timing tiers:
  - Fast micro-interactions (hover, focus ring, icons): `200ms`.
  - Base transitions (theme shift, dropdowns, card lift): `300ms`.
  - Slow state changes (scroll reveal, slider zoom, Ken Burns): `600ms`.
- Respects `prefers-reduced-motion: reduce` by disabling transforms, zooms, and complex transitions, falling back to simple opacity fades.

### 6. Structure of Colour Use & Mapping to Our Palette

| Element | Reference Structure | Badagry West Palette Mapping |
|---|---|---|
| **Primary Buttons** | High-contrast accent fill, bold dark label text, soft lift and glowing shadow on hover. | **Gold fill** (`--gold: #C9A227`), dark text (`#0A0A0A`), hover `--gold-bright` (`#DDB93A`), lift 2px with `--glow-gold`. |
| **Secondary Buttons**| Outlined surface, strong border, transparent background, accent color on hover. | Outlined with `--border-strong`, text color, hovering to `--accent-text` with gold border. |
| **Ghost Buttons / Links**| Understated text link, animated expanding underline, directional arrow shifting right on hover. | Body text with animated bottom hairline, transitioning to Cyber Green (`--accent-green-text`). |
| **Tags & Badges** | Pill-shaped, uppercase micro-typography (`0.75rem`), soft translucent tint fill with high-contrast indicator dot. | Pill radius (`999px`), Completed: `--gold-soft` with `--accent-text`; Ongoing: `--green-soft` with `--accent-green-text` and pulsing dot; Planned: transparent border. |
| **Underlines & Dividers**| Fine hairlines highlighting active navigation items and section anchors. | Delicate gold hairlines (`rgba(201, 162, 39, .45)` / `--gold-soft`). |
| **Hover States** | Elevation lift (4px to 6px), image zoom ($1.05\times$), border glow activation. | Card lift 6px, border shifts to `--gold`, subtle gold ambient glow (`--glow-gold`). |
| **Borders** | Subtle semi-transparent hair-lines separating cards and structural panels without visual heaviness. | `--border` (`rgba(255, 255, 255, .10)` dark / `rgba(10, 10, 10, .10)` light). |
| **Focus States** | Distinctive, high-visibility keyboard ring with offset. | 2px solid Cyber Green (`--green: #00E08A`) with 3px offset for WCAG AA compliance. |



## Phase 2 — Shared Components

Study of the reference website: **https://iruvilcda.lg.gov.ng** (Header, Dropdowns, Mobile Menu, Footer, Cards, Tags, Page-Opener across `/`, `/projects`, `/news`, `/about/executive-council`)

### 1. Header & Navigation Behaviour
- **Floating Island / Sticky Structure:**
  - The reference employs a fixed top navigation container with backdrop blur (`backdrop-blur-xl`), soft border (`border-white/10`), rounded corners (`rounded-[2rem]`), and deep shadow.
  - On scroll ($>24\text{px}$), the header maintains its translucent backdrop while shrinking slightly in vertical profile and enhancing shadow intensity.
- **Dropdown Menus (Desktop):**
  - Dropdown panels appear on hover and keyboard `:focus-within` with an upward float (~8px) and quick fade (~180ms–200ms).
  - Fine border accents and a subtle top hairline create visual hierarchy without heavy container styling.
  - Active links feature an accent indicator.
- **Mobile Menu (<1024px):**
  - Slide-in panel covering the viewport from the right, locking background scrolling on `<body>`.
  - Nested accordion-style groupings expanding smoothly with height transitions.
  - Focus is trapped inside the open panel, and pressing `Escape` closes the drawer immediately while returning focus to the hamburger button.

### 2. Page Opener Pattern
- Every inner page (`/projects`, `/news`, `/about/executive-council`) opens with a standardized visual header:
  - Small uppercase **eyebrow** with wide tracking (`0.16em`).
  - High-impact two-part **H1 headline** combining regular weights with an italicized accent phrase.
  - Muted lead paragraph providing concise governance context.
  - Integrated **breadcrumb trail** (e.g., Home › Projects).

### 3. Footer Anatomy
- Structured multi-column hierarchy:
  - Column 1: Council identity, logo, concise mission statement, verified social media channels.
  - Column 2: Quick Links (Core governance and civic sections).
  - Column 3: Reach Us / Secretariat desk details (address, call/WhatsApp, verified public email, official hours).
- **Emergency Strip:** Prominent full-width notice featuring Lagos emergency helplines **767** and **112**.
- Bottom copyright bar with clear privacy link. (No "System Operational" badge or live status indicator, which was noted as a reference defect).


## Phase 3 — Home Page

Study of the reference website: **https://iruvilcda.lg.gov.ng/** (Home Page Section-by-Section)

### 1. Hero Section Layout & Rhythm
- **Full Viewport Profile:** Min-height `560px` to `100vh` providing high civic impact.
- **Motion & Slider Dynamics:**
  - 3 rotating full-bleed photographic slides with slow subtle zoom (Ken Burns `1.08 -> 1.0` scale) over 6s duration.
  - Cross-fading opacity (`fade`) transitions with smooth deceleration.
  - Pause automatically on cursor hover or focus within controls.
  - Accessible controls: Previous/Next glass arrows, clickable indicator dots, and animated bottom progress hairline.
  - Scroll indicator cue anchored at the bottom-center pointing toward subsequent sections.
- **Overlay & Contrast Architecture:**
  - Translucent gradient overlay (never solid black): multi-stop gradient allowing the underlying photography to remain vivid while maintaining at least 4.5:1 text contrast for white headlines and gold accent phrases.
  - Frosted-glass facts bar docked along the hero lower boundary with three civic pillars.

### 2. Section Sequence & Structural Hierarchy
1. **Hero Slider:** Full-width photographic backdrop, 3 slides, clear civic CTAs.
2. **Chairman's Welcome Section:** Positioned directly after hero. High-prominence 4:5 framed executive portrait on left; welcome message, credentials, and "Read the full profile" CTA on right.
3. **Quick Links:** Elevated floating icon tiles bridging the welcome section into core services.
4. **Flagship Projects:** Featured flagship card + dual supporting delivery cards, status badges, and "View all projects" link.
5. **History Snapshot:** Split visual container presenting Badagry West's origin story and milestones timeline.
6. **Local Highlights:** Distinctive image cards representing Seme Border, Suntan Beach, Coconut Beach, and Owode.
7. **Departments Teaser:** 3 primary cluster cards guiding residents to administrative services.
8. **Latest News & Updates:** 3 news cards with dates, badges, excerpts, and "View all news" link.
9. **Councillors by Ward:** 5 ward representative cards with rank and community details.
10. **Emergency Numbers Strip:** Toll-free 767 and 112 rapid-dial cards.
11. **Contact & Enquiry Block:** Two-column split featuring council office details and a direct message form.


## Phase 4 — About Pages

Study of the reference website: **https://iruvilcda.lg.gov.ng/about** and **/about/history**

### 1. Structural Rhythm & Layout Anatomy
- **Page Opener Integration:** Consistent top band featuring breadcrumb trail (`Home › About Us`), small uppercase eyebrow (`About Us` / `Our Story`), two-part display title (`Badagry West LCDA, *serving our communities.*`), and context lead paragraph.
- **Editorial Side Panel:** Left-hand side carries narrative paragraphs on local administrative evolution; right-hand side features an "At a Glance" institutional snapshot panel (State, Secretariat, Wards, Established) anchored in a bordered card.
- **Vision & Mission Cards:** Side-by-side cards with top border highlight (Gold `--gold`), clear icon/label hierarchy, and elevated typography.
- **Values & Priority Grids:** 6 Core Values rendered as 3-column responsive cards with icons; 10 Development Priorities numbered cleanly with gold numerals.
- **History Timeline Structure:** Vertical gold axis with node markers, displaying confirmed milestones chronologically.
- **Communities & Places to Visit:** Multi-tab or anchored sections for Wards (A to E) with photo-gated councillor links, and tall visual cards for heritage locations.


## Phase 5 — Leadership Pages

Study of the reference website: **https://iruvilcda.lg.gov.ng/about/executive-council**, **/about/executive-council/chairman**, and **/about/legislative-house**

### 1. Structure of Leadership Pages
- **Chairman & Vice Chairman Layout:**
  - Executive portrait card (sticky on desktop viewports) featuring contact points (official phone and email desk), biographical sections with clear sub-headings, development priorities, governance principles, and key initiatives.
  - Vice Chairman block with portfolio badge ("Works, Housing and Infrastructure"), official portrait, background narrative, and shared civic vision.
- **Executive Council Layout:**
  - Executive Chairman and Vice Chairman feature profiles at top, leading into categorized grids for Council Officials, Supervisors, and Special Advisers.
  - Clear card structure: portrait, name in Playfair Display, title/portfolio in muted text, and concise mandate summary.
- **Administrative Structure Diagram:**
  - Semantic flowchart using HTML and CSS showing structural governance relationships: Executive Chairman &rarr; Vice Chairman &rarr; Secretary to the Local Government &rarr; Senior Bureaucrats & Supervisors &rarr; Line Departments. Boxes show positions only without personal names to remain durable.
- **Legislative Council Layout:**
  - Overview of ward lawmaking and oversight mandate, followed by councillor cards in rank order (Council Leader, Deputy Leader, Majority Leader, Chief Whip, Deputy Chief Whip), each carrying ward and community tags.


## Phase 6 — Departments & Services

Study of the reference website: **https://iruvilcda.lg.gov.ng/departments** and Department Detail Page

### 1. Structural Rhythm & Layout Anatomy
- **Overview Page (Template T4a):**
  - Page Opener: Eyebrow (`Service Network`), Display Title (`Departments *behind everyday service.*`), Lead paragraph outlining administrative coordination.
  - Core Service Group Cards: Three primary cluster cards (Public Services & Business; Health, Education & Social Welfare; Works, Environment & Agriculture) each summarizing core responsibilities and linking into grouped pages.
  - Portfolio Chips: Highlights secondary mandates (Budget, Chieftaincy & Boundary, Tourism & Culture, Civic Engagement).
- **Grouped Service Pages (Template T4b):**
  - Each service area features an anchored section with `scroll-margin-top` offset for the sticky header.
  - Section Anatomy: Service title, introductory mandate, "What this office does" bulleted competencies, related council initiatives, and clean pathways to Contact or Feedback & Complaints.
  - No individual phone numbers or personal emails are exposed; all inquiries route through the official secretariat desk.


---

## Phase 7 — Projects & Development

Studied https://iruvilcda.lg.gov.ng/projects and individual project detail presentations.

### 1. Stats and Metrics Presentation
- **Reference observation:** Clear categorical counters showing portfolio scale and active execution status.
- **Our Implementation:**
  - A prominent 4-metric statistics strip atop /projects/ featuring:
    - **Total Projects** (total active portfolio)
    - **Completed** (delivered infrastructure and civic assets)
    - **Ongoing** (active constructions, including Asheri PHC and Ganyingbo CBT)
    - **Planned** (forthcoming council initiatives)
  - All counter metrics dynamically recalculate to reflect the visible filtered set.

### 2. Dual Filtering Architecture
- **Reference observation:** Clean, pill-based category filter chips with immediate visual state feedback.
- **Our Implementation:**
  - Two distinct filter bars: **Execution Status** (All, Ongoing, Completed, Planned) and **Project Type** (All, Infrastructure, Community, Education, Health, Environment).
  - Strict bi-directional URL synchronization: reads query parameters (?status=... and ?type=...) on page load and writes updated parameters to window.history.pushState on chip interaction without full page reload.
  - Full compatibility with the multi-level navigation menu links defined in docs/02-SITEMAP.md.

### 3. Visual Tags & Status Hierarchy
- **Reference observation:** Distinct color-coded pills communicating project health.
- **Our Implementation:**
  - Status tags adhere strictly to our design system:
    - **Ongoing:** Cyber Green soft background (ar(--green-soft)), cyber green border, active pulse icon.
    - **Completed:** Gold soft background (ar(--gold-soft)), gold border (ar(--gold)), check badge.
    - **Planned:** Neutral subtle background with refined hairline border.

### 4. Detail Page Architecture & Record Snapshot
- **Reference observation:** High-impact hero presentation followed by structured metadata panel, deep description, and secondary gallery record.
- **Our Implementation:**
  - Opener with breadcrumbs, title, status tag, type badge, and community location.
  - Project imagery with main showcase photo and secondary photo gallery records.
  - **Record Snapshot Panel:** Clean tabular/grid card highlighting Status, Category, Ward/Location, Target Year, and Official Verification status (omitting any unsupplied or unconfirmed details).
  - Related projects card cluster and direct inquiry call-to-action routing to /contact/feedback-complaints/.

---

## Phase 8 — News & Photo Gallery

Studied `https://iruvilcda.lg.gov.ng/news` and `https://iruvilcda.lg.gov.ng/gallery`.

### 1. News & Editorial Index
- **Reference observation:** Clean, structured card layout with clear metadata (category pill, publication date, reading time), high-contrast serif headlines, concise lead excerpts, and pagination controls.
- **Our Implementation:**
  - `/news/` with category filter pills: `All`, `News`, `Official Announcements`, `Events`.
  - Reads `?category=` from URL so deep-links like `/news/?category=announcements` from `docs/02-SITEMAP.md` activate the filter on load and update URL state smoothly.
  - Client-side pagination (12 items per page) with previous/next controls and page number indicators.
  - Formatted publication dates strictly in "29 July 2026" standard.
  - Detail article pages generated for confirmed items with reading time, hero image, article body, related news, and civic sharing links.

### 2. Photo Gallery & Lightbox Architecture
- **Reference observation:** Card grid presenting photographic archives by album, displaying cover image, category tag, photo count badge, title, and event date.
- **Our Implementation:**
  - `/gallery/` displaying an album grid built strictly from verified existing photographs.
  - Accessible Lightbox Modal (`js/gallery.js`):
    - Keyboard arrow navigation (Left/Right to cycle images).
    - Escape key to close modal.
    - Focus trap inside active modal; returns focus cleanly to the activating thumbnail upon closing.
    - Descriptive photo captions and counter indicator (e.g. `2 of 6`).
    - Touch swipe navigation support for mobile and tablet screens.
    - Fully styled for both Dark and Light themes with high-contrast accessibility.

---

## Phase 9 — Contact, Forms & Utility Pages

Studied `https://iruvilcda.lg.gov.ng/contact`.

### 1. Contact Architecture & Civic Location
- **Reference observation:** Two-column split layout pairing official secretariat contact channels (address, operating hours, telephone, email) with an intake form; full-width map and directions band beneath.
- **Our Implementation:**
  - `/contact/`:
    - Left column (`#contact-information`): Physical secretariat address at Kankon, telephone/WhatsApp with tap-to-call link, public email, official office hours, social channels, and prominent 24/7 Lagos emergency lines callout (`767` and `112`).
    - Right column: Clean contact form (Full Name, Email, Phone, Subject, Message) with accessible validation, off-screen honeypot, and privacy consent line.
    - Full-width Office Location (`#office-location`): Accessible map embed container with dual-theme styling and a direct "Get Directions" action querying the Secretariat location.
  - `/contact/feedback-complaints/`: Dedicated citizen grievance redress form with Ward selector (Wards A–E or Not Sure), complaint type categorization, subject, and detailed message field. Submissions remain strictly private and are never displayed publicly.

### 2. Form Engine & Verification Integrity
- **Our Implementation (`js/forms.js`):**
  - Robust client-side validation with live error indicators.
  - Honeypot field (`_gotcha`) hidden off-screen to intercept automated spam bots.
  - Anti-spam submission throttling (15-second rate limit).
  - Explicit checking of the Formspree endpoint in `data/site.json`: while unset (`[PLACEHOLDER]`), forms display a helpful advisory notice and strictly prevent misleading success notifications.
  - Security guarantee: Form delivery address (`admin@omoadugbo.com`) is never leaked into client HTML page sources.

### 3. Utility Pages
- **404 Page (`404.html`):** Authoritative, branded error page with Playfair Display numeral, empathetic civic copy, and primary navigation buttons to Home, Projects, News, and Contact.
- **Privacy Policy (`/privacy/`):** Plain, factual explanation of data collection (form submissions only, no tracking, dark/light mode preference storage), strictly reflecting actual operational behavior without legalese.


