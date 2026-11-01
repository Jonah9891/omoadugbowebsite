# 08 — SEO Plan

Goal: rank well for "Badagry West LCDA" and related local searches, and present clean, trustworthy results in Google and social previews.

Domain: `[PLACEHOLDER: not yet supplied]`. Use `https://[DOMAIN]` as the base URL in all canonical, Open Graph and sitemap entries, then replace once the domain is known.

**Reference website for structure only:** https://iruvilcda.lg.gov.ng (its page titles and descriptions are generic; ours are specific).

---

## 1. Global rules

- Title pattern: `Page Name | Badagry West LCDA` (max 60 characters).
- Meta description: 140–160 characters, plain English, includes "Badagry West LCDA" and one clear benefit.
- One `<h1>` per page, matching the page's main topic.
- Canonical URL on every page. `<html lang="en-NG">`.
- Open Graph and Twitter cards on every page (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `twitter:card=summary_large_image`).
- Default share image: a hero photo cropped to 1200 × 630 (`og-default.jpg`, from the council's images).
- Descriptive `alt` text on all images (see `09-IMAGE_MANIFEST.md`).
- Clean folder URLs; no uppercase, no underscores.
- Internal links use descriptive text ("Ongoing projects", not "click here").
- Add `robots.txt` and `sitemap.xml` (see below).
- Do not use keyword stuffing. Write for people first.

---

**Names in metadata:** titles, descriptions, keywords and schema that mention the Chairman or Vice Chairman by name apply only when that person's photo exists. Otherwise use office-only wording (for example "Executive Chairman & Vice Chairman of Badagry West LCDA"). Never name any person without a photo.

---

## 2. Primary keywords

- Badagry West LCDA
- Badagry West Local Council Development Area
- Badagry West LCDA chairman
- Rauf Yemaren Badagry West
- Badagry West LCDA projects
- Badagry West councillors
- Badagry West wards
- Seme border Badagry West
- Suntan Beach Badagry
- Badagry West LCDA contact / secretariat Kankon
- Lagos LCDA Badagry

Secondary: Badagry LCDA news, Badagry West Asheri PHC, Ganyingbo CBT centre, Lagos empowerment programme Badagry, Owode Apa road.

---

## 3. Page-by-page metadata

| Page | Title (≤ 60) | Meta description (≈ 150) | H1 |
|---|---|---|---|
| Home | Badagry West LCDA \| Official Website | Official website of Badagry West LCDA, Lagos State. Meet our leaders, follow projects, read news and contact your council. | Closer to the people. Committed to progress. |
| About | About Badagry West LCDA \| Vision & Mission | Learn about Badagry West LCDA, Lagos State: our vision, mission, core values and development priorities for residents and communities. | Badagry West LCDA, serving our communities. |
| History | History & Background \| Badagry West LCDA | Explore the history of Badagry West LCDA and the Badagry region of Lagos State, from heritage and trade to today's leadership. | History and background. |
| Communities & Wards | Communities, Wards & Places to Visit \| Badagry West | Discover the five wards of Badagry West LCDA and places to visit, including the Seme border and the beaches of Badagry. | Five wards, one community. |
| Chairman & Vice Chairman | Executive Chairman & Vice Chairman \| Badagry West LCDA | Meet Hon. Rauf Ibrahim Kayode Yemaren, Executive Chairman, and Hon. Sesi Ogungbe Yusuf, Vice Chairman of Badagry West LCDA. | Leadership with service at its heart. |
| Executive Council | Executive Council & Administration \| Badagry West LCDA | The officials, supervisors and special advisers who run Badagry West LCDA, and how the council is organised. | The Executive Council, driving delivery. |
| Legislative Council | Councillors & Legislative Council \| Badagry West LCDA | Meet the five councillors representing the wards of Badagry West LCDA in the Legislative Council. | The Legislative Council, your voice in government. |
| Departments | Departments & Services \| Badagry West LCDA | See how Badagry West LCDA is organised across planning, health, education, works, environment, markets and community welfare. | Departments behind everyday service. |
| Public Services & Business | Public Services & Business \| Badagry West LCDA | Information on public services, revenue, markets and business support from Badagry West LCDA, Lagos State. | Services for residents and businesses. |
| Health, Education & Welfare | Health, Education & Social Welfare \| Badagry West LCDA | Primary healthcare, education, youth development and welfare programmes delivered by Badagry West LCDA. | Health, learning and welfare. |
| Works, Environment & Agriculture | Works, Environment & Agriculture \| Badagry West LCDA | Roads, drainage, sanitation and rural development work by Badagry West LCDA across its five wards. | Works, environment and agriculture. |
| Projects | Projects & Development \| Badagry West LCDA | Track completed, ongoing and planned projects in Badagry West LCDA, from the Asheri health centre to roads and schools. | Projects, delivery in view. |
| Empowerment | Empowerment Programmes \| Badagry West LCDA | Empowerment support for artisans, traders, widows, the elderly and persons with disabilities from Badagry West LCDA. | Empowerment, creating opportunity. |
| News | News & Announcements \| Badagry West LCDA | Latest news, official announcements and events from Badagry West LCDA, Lagos State. | News & announcements. |
| Gallery | Photo Gallery \| Badagry West LCDA | Photos of projects, programmes and community events across Badagry West LCDA. | Our work, in pictures. |
| Contact | Contact Us \| Badagry West LCDA | Contact Badagry West LCDA: secretariat address at Kankon, phone, WhatsApp, email, office hours and a message form. | We're here to help. |
| Feedback & Complaints | Feedback & Complaints \| Badagry West LCDA | Share feedback or report a concern to Badagry West LCDA. Every message is read by the council office. | Feedback and complaints, heard and handled. |
| Privacy | Privacy Policy \| Badagry West LCDA | How Badagry West LCDA collects, uses and protects information you send through its contact and complaint forms. | Privacy policy |
| 404 | Page Not Found \| Badagry West LCDA | The page you requested could not be found. | Page not found |

Article and project pages: `{Title} \| Badagry West LCDA`; description from the first 150 characters of the summary.

Set `<meta name="robots" content="noindex">` on the 404 page only.

---

## 4. Structured data (JSON-LD)

Place in `<head>`. Use only facts supplied in `AGENTS.md` and `07-CONTENT.md`. Never include people who lack photos.

### Site-wide (Home page and footer-level)
```json
{
  "@context": "https://schema.org",
  "@type": "GovernmentOrganization",
  "name": "Badagry West Local Council Development Area",
  "alternateName": "Badagry West LCDA",
  "url": "https://[DOMAIN]/",
  "logo": "https://[DOMAIN]/images/logo.png",
  "telephone": "+2348037619499",
  "email": "support@omoadugbo.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Council Secretariat, Owode-Apa Road, Kankon",
    "addressLocality": "Badagry",
    "addressRegion": "Lagos",
    "addressCountry": "NG"
  },
  "areaServed": "Badagry West, Lagos State, Nigeria",
  "sameAs": [
    "https://www.facebook.com/share/1HaJd9qiVB/",
    "https://www.instagram.com/rikayomoadugbo"
  ],
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "08:00", "closes": "16:00"
  }]
}
```
Include `openingHoursSpecification` only after the hours are confirmed.

### WebSite
`@type: WebSite` with `name` and `url`.

### BreadcrumbList
On every inner page, matching the visible breadcrumb.

### Page-specific
- Contact page: add `ContactPage`.
- News articles: `NewsArticle` with `headline`, `datePublished`, `image`, `author` (organisation: Badagry West LCDA), `publisher`.
- Project detail: `Article` (or `CreativeWork`) with status in the description.
- Chairman profile: `Person` for the Executive Chairman with `jobTitle`, `worksFor`, and image — only if `chairman.jpg` exists.
- Places to Visit: optional `TouristAttraction` entries for Seme border, Suntan Beach, Coconut Beach once content is approved.

Validate with Google's Rich Results Test.

---

## 5. `robots.txt`
```
User-agent: *
Allow: /
Sitemap: https://[DOMAIN]/sitemap.xml
```

## 6. `sitemap.xml`
List all 17 content pages plus the privacy page (not 404), and every project and news detail page. Include `lastmod` dates. Update when pages are added.

---

## 7. Local SEO (owner tasks, not code)

1. Create or claim the **Google Business Profile** for "Badagry West LCDA Secretariat" with the Kankon address, phone, hours and the website link.
2. Make the council's name, address and phone **identical** everywhere (website, Google profile, Facebook, Instagram).
3. Link the website from the Facebook and Instagram pages.
4. Ask Lagos State Government pages and trusted local news sites to link to the site once it launches.
5. Submit the sitemap in **Google Search Console** after launch.
6. Post news regularly: freshness helps search visibility.

---

## 8. Content and linking guidance

- Each news article: unique title, a one-sentence summary, at least one photo with descriptive alt text, links to the related project or department page.
- Each project page links back to Projects and to its related department page.
- Home links to every top-level section.
- Keep important text as real HTML text, not inside images.
- Use headings in order (H1 → H2 → H3).
- Page speed matters for ranking; follow `06-TECH_SPEC.md` performance targets.

---

## 9. Pre-launch SEO checks

- [ ] Every page has a unique title and description from the table above
- [ ] Canonicals and Open Graph URLs use the real domain
- [ ] `sitemap.xml` and `robots.txt` uploaded and valid
- [ ] JSON-LD validates without errors
- [ ] Social share preview looks right on WhatsApp, Facebook and X
- [ ] All images have alt text
- [ ] No broken internal links
- [ ] 404 page returns a 404 status on the host
- [ ] Mobile-friendly and Lighthouse SEO ≥ 95
