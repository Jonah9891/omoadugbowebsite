# Launch Notes & Operational Handover Manual
## Badagry West Local Council Development Area (LCDA) Website

This document explains, in plain language, everything you need to know to host, configure, update, and manage the official website for Badagry West LCDA.

---

## 1. How the Website Works
This is a high-performance **static website** built using modern semantic HTML5, CSS3, and vanilla JavaScript.
- **No databases to maintain** (no MySQL, PostgreSQL, or MongoDB).
- **No backend servers to patch or crash** (no PHP, Node.js, Python, or WordPress plugins).
- **Extremely fast and ultra-secure** — completely immune to SQL injections, database compromises, and WordPress plugin exploits.
- Runs smoothly on any standard web hosting, CDN, or cloud platform.

---

## 2. Pre-Launch Checklist (Action Items Before Going Live)

Before officially launching the website to the public, the council team must complete these 7 steps:

1. [ ] **Chairman & Vice Chairman Portraits:** Ensure `images/chairman.jpg` and `images/vice-chairman.jpg` are present (confirmed present and verified).
2. [ ] **Official Logos:** Ensure `images/logo.png`, `images/logo-white.png`, and `images/favicon.png` are in place (already configured).
3. [ ] **Set Formspree Endpoint:** Follow Section 4 below to activate the citizen message and complaint forms.
4. [ ] **Confirm Domain Name:** Verify the final domain (e.g. `badagrywest.lg.gov.ng`) and update canonical tags/sitemap if different.
5. [ ] **Confirm Office Hours:** Confirm that *Monday to Friday, 8:00 AM – 4:00 PM* matches secretariat operations.
6. [ ] **Confirm Project Statuses:** Have the Council Engineer or Works supervisor review the 4 flagged projects in `data/projects.json`.
7. [ ] **Chairman's Welcome Sign-Off:** Executive Chairman Hon. Rauf Ibrahim Kayode Yemaren gives formal approval of the Welcome message on the Home page.

---

## 3. How to Host the Site and Connect Your Domain

You can host this website on any modern hosting provider. Here are the top three recommended options:

### Option A: Cloudflare Pages / Vercel / Netlify (Recommended — Free, Fast, Global CDN)
1. Upload the website folder to a GitHub repository (or drag-and-drop the folder directly in the Netlify/Cloudflare Pages dashboard).
2. Set the build command to empty/blank (no build step is needed; it is pure HTML/CSS/JS).
3. Set the publish directory to `.` (the root folder).
4. In your domain registrar (e.g., NiRA accredited registrar for `.lg.gov.ng` or `.gov.ng`), add the CNAME or DNS records provided by the host.
5. SSL certificates (HTTPS) are issued automatically and renewed for free.

### Option B: Traditional cPanel Hosting
1. Log into your cPanel account.
2. Open **File Manager** and navigate to `public_html`.
3. Upload all files and folders (`css/`, `js/`, `data/`, `images/`, and all `.html` files) directly into `public_html`.
4. Ensure `index.html` is in the root of `public_html`.
5. Point your domain's A-record or nameservers to your hosting server IP.

---

## 4. How to Set Up the Formspree Email Endpoint

Both the **Contact Form** (`/contact/`) and the **Feedback & Complaints Form** (`/contact/feedback-complaints/`) route citizen submissions through Formspree to **`admin@omoadugbo.com`**.

Follow these steps to connect your email:
1. Go to [https://formspree.io](https://formspree.io) and register a free account using **`admin@omoadugbo.com`**.
2. Click the verification link sent to your email.
3. In your Formspree dashboard, click **"+ New Form"**.
4. Name the form: `Badagry West LCDA Portal`.
5. Formspree will give you an endpoint URL that looks like this:
   `https://formspree.io/f/mqkenvba`
6. Open the file **`data/site.json`** in any text editor.
7. Find line 10:
   ```json
   "formEndpoint": "[PLACEHOLDER]",
   ```
8. Replace `"[PLACEHOLDER]"` with your actual Formspree URL:
   ```json
   "formEndpoint": "https://formspree.io/f/mqkenvba",
   ```
9. Save the file.
10. Open `js/forms.js` and update line 11 to match.

*Note: As long as the endpoint is left as `[PLACEHOLDER]`, the website safely alerts residents that the message service is being set up and displays the official phone/email, preventing messages from being lost.*

---

## 5. How to Add or Update Content

### A. How to Add a Person's Photograph (Photo-Gate System)
Under council rules, a leader or official is displayed **only if their photograph exists**.
1. Obtain the official photo of the person (square or portrait orientation, 400×400px or larger recommended).
2. Save it as a `.jpg` using the exact filename listed in `docs/09-IMAGE_MANIFEST.md` or `data/people.json`.
   - *Example: To display Council Manager Engr. Lawrence Akande, save his photo as `council-manager.jpg` into the `images/` folder.*
3. As soon as the file is in `images/`, his profile card and name will appear on `/leadership/executive-council/` automatically. No code changes are required!

### B. How to Add a News Item
1. Save the news cover image into `images/` (e.g. `news-04.jpg`).
2. Open `data/news.json` in a text editor.
3. Add a new record block to the list:
   ```json
   {
     "slug": "title-of-your-news-post",
     "title": "Title of Your News Post",
     "category": "news",
     "categoryName": "News",
     "date": "2026-08-15",
     "dateDisplay": "15 August 2026",
     "excerpt": "A short 1-2 sentence summary of what took place.",
     "body": [
       "First paragraph of the news article...",
       "Second paragraph detailing council action..."
     ],
     "images": ["news-04.jpg"]
   }
   ```
4. Run `python build_news.py` to generate the dedicated article page at `/news/title-of-your-news-post/`.

### C. How to Add a Project
1. Save the primary project photograph into `images/` (e.g. `project-gedu-road.jpg`).
2. Open `data/projects.json` in a text editor.
3. Add a project record:
   ```json
   {
     "slug": "gedu-road-phase-one",
     "title": "Gedu Road Phase I Infrastructure",
     "status": "ongoing",
     "type": "infrastructure",
     "typeName": "Infrastructure",
     "date": "2026",
     "location": "Gedu Axis",
     "summary": "Road grading, stabilization, and concrete drainage construction on Gedu Road Phase I.",
     "body": [
       "Comprehensive engineering works improving access for residents and transport operators."
     ],
     "images": ["project-gedu-road.jpg"],
     "featured": false,
     "confirm": false
   }
   ```
4. Run `python build_projects.py` to generate the detail page at `/projects/gedu-road-phase-one/`.

### D. How to Add Photos to the Gallery
1. Copy your photos into `images/` (e.g. `sanitation-01.jpg`, `sanitation-02.jpg`).
2. Open `data/gallery.json`.
3. Add or update the album block with the title, date, cover photo, and image list.
4. Save the file. The album and its full lightbox viewer will update immediately on `/gallery/`.

### E. How to Change Contact Details or Office Hours
1. Open `data/site.json`.
2. Update the `secretariat`, `phoneDisplay`, `email`, `hours`, or `social` values.
3. Update the matching text in the footer in `js/main.js` and on `contact/index.html`.

---

## 6. How to Update the Domain Name Across the Site
If the council decides on a different domain (for example `www.badagrywest.org.ng` instead of `badagrywest.lg.gov.ng`):
1. In `sitemap.xml`, replace `https://badagrywest.lg.gov.ng/` with your new domain.
2. In `robots.txt`, update the Sitemap URL.
3. In `manifest.webmanifest`, update if necessary.
4. Perform a search and replace for the canonical tags across all `.html` files in the workspace.

---

## 7. Technical Support & Architecture Summary
- **Architecture:** Pure semantic HTML5 / Modern CSS Custom Properties / Vanilla ES6 JavaScript.
- **Dependencies:** Zero runtime dependencies, zero build tools required to run.
- **Browser Compatibility:** Works across all modern desktop, tablet, and mobile browsers (Chrome, Safari, Edge, Firefox, Samsung Internet).
- **Accessibility:** Built to WCAG 2.2 Level AA compliance with high-contrast Cyber Green focus rings, keyboard traps, and full screen-reader support.

