# 12 — Prompts for Antigravity (copy and paste)

Every prompt for the build is in this file. Copy the text inside each box and paste it into Antigravity. `docs/10-BUILD_PLAN.md` is the short overview; this file is the working copy.

## How to use

1. Run the prompts **in order**. Never skip or combine phases.
2. After each phase, open the site with Live Server, check it in **both light and dark mode** at phone, tablet and desktop width, then reply **Approved** or describe what to change.
3. Only after you approve, paste the next prompt.
4. After each approved phase, make a git commit (optional but recommended): `git add . && git commit -m "Phase N approved"`.
5. If something looks wrong, use the **Fix prompt** at the end.
6. Before going live, use the **Pre-launch review prompt**.

Every prompt follows the same shape: **Before you start → Build → Do not → Verify → Stop and report.**

---

## Prompt 0 — Kickoff (paste once, first)

```
Read AGENTS.md completely, then read every file in docs/ in the order listed there (01 to 12), then data/people.json.

Then:
1. List every file in images/ and tell me which required images from docs/09-IMAGE_MANIFEST.md are present and which are missing. Flag the Chairman and Vice Chairman photos and the three hero photos (hero-1-secretariat.jpg, hero-2-seme-border.jpg, hero-3-suntan-beach.jpg) separately.
2. Open https://iruvilcda.lg.gov.ng in your browser and confirm you can view it. If you cannot, stop and ask me for screenshots.

Do not write any code yet.

Reply with:
(1) a five-line summary of the project,
(2) the rules you will follow (include the people and images rule and the must-never-appear list),
(3) any questions or contradictions you found in the documents.

Then stop and wait for me.
```

---

## Prompt 1 — Phase 1: Foundation

```
Phase 1: Foundation. Re-read AGENTS.md first.

BEFORE YOU START
- Open https://iruvilcda.lg.gov.ng (home page). Study spacing, typography scale, motion and easing, and how colour is used (structure only, we use our own palette).
- Write your observations to docs/reference-observations.md.

BUILD
1. The folder structure exactly as in docs/06-TECH_SPEC.md.
2. css/tokens.css with the exact tokens from docs/03-DESIGN_SYSTEM.md, for both dark and light themes (gold, cyber green, black, white, neutral greys; darker text variants for small text in light mode).
3. css/base.css: reset, typography (Playfair Display for headlines, Inter for body, loaded from Google Fonts), focus styles, skip link, prefers-reduced-motion handling.
4. css/layout.css: container, grid, section spacing.
5. An inline theme script in <head> (prevents white flash) and js/theme.js with a sun/moon toggle. First visit follows the device setting; the choice is remembered in localStorage under the key bwl-theme only. Switching fades smoothly in about 0.3 s.
6. A temporary index.html style guide that shows: all headings and body text, buttons (primary, secondary, ghost), cards, tags (including Ongoing in green), form fields, and colour swatches, in both modes.

DO NOT
- Do not add any real page content, people, names or photos.
- Do not use any framework, build tool or library.
- Do not hard-code colours in components; use the CSS variables.
- Do not use localStorage for anything except bwl-theme.

VERIFY
- No white flash on reload in either mode.
- Fonts load. Colours match the tokens.
- Text contrast passes WCAG AA in both modes, including small text in light mode.
- Layout works at 375, 768 and 1280 px.
- Keyboard focus is visible everywhere.
- Run docs/11-QA_CHECKLIST.md for this phase.

STOP AND REPORT
Write a short phase report: what you built, what you are unsure of, and what you need from me. Then stop and wait for my approval.
```

---

## Prompt 2 — Phase 2: Shared components

```
Phase 2: Shared components. Re-read AGENTS.md and docs/03-DESIGN_SYSTEM.md first.

BEFORE YOU START
- Study on https://iruvilcda.lg.gov.ng: the header (sticky behaviour, dropdowns), the mobile menu, the footer, cards, tags and the page-opener pattern. Also look at /projects, /news and /about/executive-council.
- Add your notes to docs/reference-observations.md.

BUILD
1. css/components.css: header, dropdown menus, mobile menu, footer, buttons, cards, tags, breadcrumbs, page opener, form fields, section headings, reveal animations.
2. js/nav.js (dropdowns, mobile menu, focus trap, Escape to close, active-page highlighting), js/reveal.js (scroll reveal with IntersectionObserver, off when reduced motion is set), js/main.js (injects the shared header and footer on every page, with a <noscript> fallback).
3. The navigation exactly as in docs/02-SITEMAP.md: seven items with dropdowns, anchors and filter links. Include a "Report a Concern" header button and the sun/moon theme switch.
4. The footer: key pages (About, Leadership, Departments, Projects, News, Gallery, Contact, Privacy), the Secretariat address, phone/WhatsApp, public email, Facebook and Instagram links, office hours, and the Lagos emergency strip (767 and 112 only).
5. The logo using the rules in docs/03-DESIGN_SYSTEM.md. logo.png and logo-white.png may not exist yet: if they are missing, use a neat text wordmark and note it in the report.
6. Update the style-guide page to show every component in both themes at 375, 768 and 1280 px.

DO NOT
- Do not add a "System Operational" badge or any status badge.
- Do not copy header or footer markup from the reference site.
- Do not paste the header or footer into each page by hand.
- Do not add menu items beyond those in docs/02-SITEMAP.md.
- Do not show any person's name or photo yet.

VERIFY
- Whole menu works with keyboard only (Tab, Enter, Escape, arrow keys where relevant).
- Dropdowns and mobile menu feel smooth in both themes.
- Anchors and filter links in the menu point to the correct URLs (the pages may not exist yet; list them).
- Footer details match AGENTS.md section 8 exactly.
- Header looks right on scroll and does not cover anchored content.
- Run docs/11-QA_CHECKLIST.md for this phase.

STOP AND REPORT
Phase report: what you built, what you are unsure of, what is missing (for example the logo). Then stop and wait for my approval.
```

---

## Prompt 3 — Phase 3: Home page

```
Phase 3: Home page. Re-read AGENTS.md, docs/05-PAGE_TEMPLATES.md (T1), docs/07-CONTENT.md (Home) and docs/03-DESIGN_SYSTEM.md section 11 (hero).

BEFORE YOU START
- Study https://iruvilcda.lg.gov.ng/ section by section: hero, chairman message, projects, attractions, departments, news, legislators, emergency, contact.
- Study the hero first and closely: height, slide timing, text placement, controls, scroll cue, mobile layout. Add notes to docs/reference-observations.md.

BUILD (in this order)
1. THE HERO FIRST. Three slides using images/hero-1-secretariat.jpg, hero-2-seme-border.jpg and hero-3-suntan-beach.jpg. Match the reference hero's structure and polish with our own code. Cross-fade, slow zoom, previous/next controls, dots, pause on hover and focus, scroll cue. Apply the translucent gradient overlay (not a solid block) and the frosted-glass facts bar (5 Wards · Seme Border Gateway · Atlantic Coastline). Slide headlines: "Governance that stands close to you." / "Where Nigeria meets the region." / "Golden shores. Growing future." Use the supporting copy and button labels in docs/07-CONTENT.md. Check text contrast on every slide at 375, 768 and 1280 px in both themes. Stop and show me the hero before you continue if you find any problem.
2. The Chairman's welcome message directly after the hero, with the "Read the full profile" button (link to /leadership/chairman-vice-chairman/#chairman).
3. The rest of the Home page per template T1: quick links; flagship projects; history snapshot; local highlights; departments teaser; latest news; councillors by ward; emergency numbers; contact block with a short form (form behaviour comes in Phase 9, so show the "message service is being set up" notice).
4. js/slider.js, js/people.js (photo-gated rendering exactly as in docs/06-TECH_SPEC.md, with nameOf(id)), data/site.json.
5. Create data/projects.json and data/news.json from docs/07-CONTENT.md and my uploaded notes only.

DO NOT
- Do not use a solid black overlay on the hero.
- Do not show any person whose photo file is missing from images/. No placeholder boxes, no silhouettes, no "photo coming soon".
- Do not let a name appear anywhere (text, alt text, meta tags, schema) unless that person's photo exists.
- Do not show [PLACEHOLDER] text or invent facts, figures, dates or projects.
- Do not mark Asheri Primary Health Centre or Ganyingbo Topa CBT Centre as completed (both are Ongoing).
- Do not include anything on the must-never-appear list in AGENTS.md.
- If a section's images or data are missing, hide the whole section.

VERIFY
- Hero matches the reference quality; text is readable on every slide.
- Home follows template T1 in order.
- Temporarily rename images/chairman.jpg (and put it back): the Chairman's name and the welcome block must vanish everywhere, including page source. Do the same test for the Vice Chairman.
- Both themes polished at 375, 768 and 1280 px.
- Run docs/11-QA_CHECKLIST.md.

STOP AND REPORT
Phase report: built, hidden because of missing content or images, uncertain. Update PLACEHOLDERS_REPORT.md. Stop and wait for my approval.
```

---

## Prompt 4 — Phase 4: About pages

```
Phase 4: About pages. Re-read AGENTS.md, docs/05-PAGE_TEMPLATES.md (T2) and docs/07-CONTENT.md sections 2 to 4.

BEFORE YOU START
- Study https://iruvilcda.lg.gov.ng/about and /about/history. Add notes to docs/reference-observations.md.

BUILD
1. /about/ (About Badagry West LCDA) with anchor #vision-mission.
2. /about/history/ (History & Background) with a timeline.
3. /about/communities-wards/ with anchors #communities, #wards and #places-to-visit.
4. Places to Visit cards (photo-gated: a card appears only if its image exists).
5. Page opener, breadcrumbs, correct titles and meta descriptions per docs/08-SEO.md.

DO NOT
- Do not put history anywhere except Home (short snapshot) and these About pages.
- Do not name any person on these pages except the Chairman or Vice Chairman, and only through nameOf(id).
- Do not list traditional rulers or chiefs.
- Do not use "Plan a visit" wording.
- Do not invent the council establishment date, community lists or the Owode description. Anything marked [PLACEHOLDER] or "to confirm" must be hidden and listed in PLACEHOLDERS_REPORT.md.

VERIFY
- Every anchor in docs/02-SITEMAP.md for these pages scrolls to the right section and is not hidden under the sticky header.
- Both themes at 375, 768 and 1280 px.
- Run docs/11-QA_CHECKLIST.md.

STOP AND REPORT
Phase report with built, hidden and uncertain items. Update PLACEHOLDERS_REPORT.md. Stop and wait for my approval.
```

---

## Prompt 5 — Phase 5: Leadership pages

```
Phase 5: Leadership pages. Re-read AGENTS.md (sections 4 and 5 especially), docs/05-PAGE_TEMPLATES.md (T3a, T3b, T3c), docs/07-CONTENT.md sections 5 to 7 and data/people.json.

BEFORE YOU START
- Study https://iruvilcda.lg.gov.ng/about/executive-council, /about/executive-council/chairman and /about/legislative-house. Add notes to docs/reference-observations.md.

BUILD
1. /leadership/chairman-vice-chairman/ with anchors #chairman and #vice-chairman. The Chairman's biography and the Vice Chairman's profile, from docs/07-CONTENT.md only.
2. /leadership/executive-council/ with the administrative-structure diagram built in HTML and CSS using positions only (no names in the diagram).
3. /leadership/legislative-council/ with councillors grouped by ward (A Kweme, B Wesere, C Apa, D Akoro, E Gbethrome) and the five principal officers.
4. Render every person from data/people.json through js/people.js. A person appears only if their image file exists.
5. Write PLACEHOLDERS_REPORT.md listing every missing portrait and every person flagged confirm: true.

DO NOT
- Do not retype or reword names or positions; use data/people.json.
- Do not show a card, name or position for anyone whose photo is missing. No placeholders of any kind.
- Do not name anyone not in people.json (for example former officeholders).
- Do not include: any tribute, the Chairman's religion, marital status or exact birth date, his 2011/2015 election results, the Vice Chairman's campaign roles, her 2024 aspiration, or the Ogungbe family memorial.
- Do not call her "Princess".
- Do not list traditional rulers.

VERIFY
- Test the photo rule: temporarily hide the Chairman photo, the Vice Chairman photo and two councillor photos (restore them afterwards). Names and cards must disappear from the page, the page title, meta tags, schema, alt text and page source.
- Search the whole project for every item on the must-never-appear list. Report the result.
- Councillor names match the supplied list exactly and are flagged for council confirmation in the report.
- Run docs/11-QA_CHECKLIST.md.

STOP AND REPORT
Phase report. Include the full list of missing portraits. Stop and wait for my approval.
```

---

## Prompt 6 — Phase 6: Departments and Services

```
Phase 6: Departments & Services. Re-read AGENTS.md, docs/05-PAGE_TEMPLATES.md (T4a, T4b) and docs/07-CONTENT.md section 8.

BEFORE YOU START
- Study https://iruvilcda.lg.gov.ng/departments and one department detail page. Add notes to docs/reference-observations.md.

BUILD
1. /departments/ (overview).
2. /departments/public-services-business/
3. /departments/health-education-welfare/
4. /departments/works-environment-agriculture/
Each department section gets its own anchor as listed in docs/02-SITEMAP.md. Include what each department does, how residents use it, and a clear route to Contact or Feedback & Complaints.

DO NOT
- Do not build a department directory.
- Do not show any individual phone number or email address.
- Do not name department heads unless they are in people.json and their photo exists.
- Do not invent fees, procedures, timelines or forms. Hide any fee or procedure block with no supplied content and list it in PLACEHOLDERS_REPORT.md.

VERIFY
- All anchors from the sitemap work.
- No phone number or email appears on these pages except the official ones from AGENTS.md section 8.
- Both themes at 375, 768 and 1280 px.
- Run docs/11-QA_CHECKLIST.md.

STOP AND REPORT
Phase report with built, hidden and uncertain items. Stop and wait for my approval.
```

---

## Prompt 7 — Phase 7: Projects and Empowerment

```
Phase 7: Projects and Empowerment. Re-read AGENTS.md, docs/07-CONTENT.md (projects and empowerment sections) and data/projects.json.

BEFORE YOU START
- Study https://iruvilcda.lg.gov.ng/projects and one project detail page. Add notes to docs/reference-observations.md.

BUILD
1. /projects/ with a stats strip, status filter and type filter, and the project grid, driven by js/projects.js and data/projects.json. Filters must read ?status= and ?type= from the URL so the menu filter links in docs/02-SITEMAP.md work, and must update the URL when changed.
2. A project detail template and a generated detail page for each project in data/projects.json.
3. /projects/empowerment/ for empowerment programmes.
4. Tags: Ongoing in cyber green, Completed in gold, Planned in neutral.

DO NOT
- Do not change any project status from docs/07-CONTENT.md. Asheri Primary Health Centre and Ganyingbo Topa CBT Centre are Ongoing.
- Do not invent budgets, dates, contractors or progress percentages.
- Do not show a project whose first image is missing.
- Do not show statuses that the council still needs to confirm as final: show them as supplied, and list them in PLACEHOLDERS_REPORT.md for confirmation.
- Do not add resident comments or uploads.

VERIFY
- Every menu filter link opens /projects/ with the right filter already applied.
- Stats strip numbers match the visible projects after filtering.
- Empty filter results show a friendly empty state.
- Both themes at 375, 768 and 1280 px.
- Run docs/11-QA_CHECKLIST.md.

STOP AND REPORT
Phase report. List projects hidden because of missing images and statuses awaiting council confirmation. Stop and wait for my approval.
```

---

## Prompt 8 — Phase 8: News and Photo Gallery

```
Phase 8: News and Photo Gallery. Re-read AGENTS.md, docs/05-PAGE_TEMPLATES.md (news and gallery templates), docs/07-CONTENT.md and data/news.json.

BEFORE YOU START
- Study https://iruvilcda.lg.gov.ng/news and /gallery. Add notes to docs/reference-observations.md.

BUILD
1. /news/ (Blog & News) with category filters (All, News, Official Announcements, Events), pagination, and anchors from docs/02-SITEMAP.md.
2. An article template and generated article pages from data/news.json.
3. /gallery/ with an album grid and an accessible lightbox (js/gallery.js): keyboard arrows, Escape to close, focus trap, focus returns to the thumbnail, captions, swipe on touch. Build data/gallery.json only from images that exist in images/.
4. Dates shown like "29 July 2026".

DO NOT
- Do not add comments, user posts or uploads.
- Do not invent news items, dates or quotes.
- Do not name anyone in captions or alt text unless they are in people.json and their photo exists.
- Do not show a gallery album or news card whose images are missing.
- Do not include a tribute or anything on the must-never-appear list.

VERIFY
- Lightbox works with mouse, keyboard and touch, in both themes.
- Filters and pagination work and survive a page reload.
- All images have meaningful alt text, lazy loading and correct width/height.
- Both themes at 375, 768 and 1280 px.
- Run docs/11-QA_CHECKLIST.md.

STOP AND REPORT
Phase report. Stop and wait for my approval.
```

---

## Prompt 9 — Phase 9: Contact, forms and utility pages

```
Phase 9: Contact, forms and utility pages. Re-read AGENTS.md, docs/06-TECH_SPEC.md sections 8 and 9, and docs/07-CONTENT.md (contact, complaints, privacy).

BEFORE YOU START
- Study https://iruvilcda.lg.gov.ng/contact. Add notes to docs/reference-observations.md.

BUILD
1. /contact/ (Contact & Location): Secretariat address, phone/WhatsApp, public email, office hours, social links, Lagos emergency numbers (767 and 112), contact form, and the map block per tech spec section 9.
2. /contact/feedback-complaints/: a form only (no public display of submissions).
3. /privacy/ and 404.html.
4. js/forms.js exactly as in docs/06-TECH_SPEC.md section 8: client-side validation, honeypot field, loading state, success state, error state, delivery through the configured Formspree endpoint to admin@omoadugbo.com.
5. Leave the endpoint as [PLACEHOLDER] in data/site.json. While it is unset, show the notice "Our message service is being set up. Please call or WhatsApp +234 803 761 9499 or email support@omoadugbo.com." and never show a false success message.

DO NOT
- Do not expose admin@omoadugbo.com in page source.
- Do not use 108, 911 or 101 as emergency numbers.
- Do not add resident accounts, uploads or public comments.
- Do not show a success message unless the form service confirms receipt.
- Do not write the privacy page as a legal opinion; keep to what the site actually does (forms, the theme preference, no tracking unless added later).

VERIFY
- Submit each form with empty, invalid and valid data: correct messages each time. With the endpoint unset, the setup notice appears.
- Honeypot blocks bots (fill the hidden field and confirm the form is not sent).
- 404 page matches the site and gives useful links.
- Map block works in both themes.
- Search page source for admin@omoadugbo.com and report the result.
- Run docs/11-QA_CHECKLIST.md.

STOP AND REPORT
Phase report. Remind me that the Formspree endpoint and the domain are still needed. Stop and wait for my approval.
```

---

## Prompt 10 — Phase 10: SEO, performance and accessibility

```
Phase 10: SEO, performance and accessibility. Re-read docs/08-SEO.md and docs/06-TECH_SPEC.md.

BUILD
1. On every page: unique title, meta description, canonical URL, Open Graph and Twitter card tags, and JSON-LD per docs/08-SEO.md.
2. robots.txt, sitemap.xml and manifest.webmanifest. If the domain is not set, use a clearly marked single variable or placeholder to replace later, and list it in PLACEHOLDERS_REPORT.md.
3. Performance: compress and resize images, add width/height, lazy loading and srcset where useful, preload only what is critical, minimise and defer JavaScript, limit font weights, use font-display: swap.
4. Accessibility pass: heading order, landmarks, alt text, labels, focus order, colour contrast, reduced motion, touch target sizes.
5. Run Lighthouse (mobile) on Home, Projects and Contact. Fix anything below 90 in any category.

DO NOT
- Do not put any person's name in titles, descriptions, keywords, Open Graph tags or schema unless their photo exists.
- Do not add analytics, trackers or third-party scripts.
- Do not add keyword stuffing.
- Do not leave a fake domain in canonical tags without telling me.

VERIFY
- Show me the three Lighthouse scores for each of the three pages.
- Do a keyboard-only pass and a screen-reader pass on Home, Leadership and Contact and report what you found.
- Validate the JSON-LD and the sitemap.
- Run docs/11-QA_CHECKLIST.md.

STOP AND REPORT
Phase report with scores before and after fixes. Stop and wait for my approval.
```

---

## Prompt 11 — Phase 11: Final QA and launch pack

```
Phase 11: Final QA and launch pack. Re-read AGENTS.md and docs/11-QA_CHECKLIST.md.

DO
1. Run the full docs/11-QA_CHECKLIST.md on all 19 pages, in both themes, at 375, 768 and 1280 px.
2. Check every internal link, menu link, footer link and anchor.
3. Search the whole project (HTML, JSON, CSS, JS and comments) for the text "[PLACEHOLDER" and confirm none appears on any public page.
4. Search the whole project for every item on the must-never-appear list in AGENTS.md (tributes, religion, marital status, birth date, 2011/2015 results, Vice Chairman's campaign roles and family memorial, traditional rulers, Princess, former officeholders' names) and report each result.
5. Run the photo-gate test one last time: hide the Chairman and Vice Chairman photos and confirm their names disappear everywhere including source, meta and schema; then restore them.
6. Produce PLACEHOLDERS_REPORT.md (everything still missing or awaiting confirmation) and LAUNCH_NOTES.md.

LAUNCH_NOTES.MD MUST EXPLAIN, IN PLAIN LANGUAGE
- How to host the site and connect the domain.
- How to set the Formspree endpoint in data/site.json.
- How to add a person's photo, a news item, a project and gallery photos.
- How to change contact details and office hours.
- How to change the domain in canonical tags, sitemap and schema.
- The pre-launch checklist: Chairman and Vice Chairman photos present, logos added, form endpoint set, domain set, office hours confirmed, project statuses confirmed by the council, Chairman's approval of the welcome message.

DO NOT
- Do not fix content problems by inventing content. Hide and report.
- Do not make design changes in this phase unless a check fails.

STOP AND REPORT
Give me a pass/fail table by page and a list of anything I must do before launch. Stop and wait.
```

---

## Fix prompt (use any time something looks wrong)

Replace the text in [brackets] before pasting.

```
Fix request. Do not change anything yet.

Problem: [describe what looks wrong and on which page, theme and screen size, e.g. "Home hero text is hard to read on slide 2 in light mode on phone"].

Step 1. Re-read AGENTS.md and the matching sections of docs/03-DESIGN_SYSTEM.md, docs/05-PAGE_TEMPLATES.md and docs/07-CONTENT.md for this page.
Step 2. Open the matching reference page on https://iruvilcda.lg.gov.ng and compare how it handles this.
Step 3. Tell me the cause in one or two sentences and the smallest change that fixes it. List every other page or component that could be affected.
Step 4. Make only that change. Do not redesign, rename files or touch unrelated code.
Step 5. Test the fix in both themes at 375, 768 and 1280 px, and re-run the QA checklist items for this page.
Step 6. Report what you changed and which files you edited, then stop.
```

---

## Pre-launch review prompt (use once, after Phase 11 is approved)

```
Pre-launch review. Do not change any file. Report only.

Go through the whole site as if you were the council's critical editor and a first-time resident on a low-end phone.

1. People and photos: list every person on the site, their photo file and where their name appears. Confirm no name appears without a photo anywhere, including page source, meta tags, alt text and JSON-LD. Confirm the Chairman and Vice Chairman photos exist.
2. Must-never-appear list: search for every item in AGENTS.md section 5 and report each result.
3. Facts: compare every phone number, email, address, office hour, social link and emergency number on every page with AGENTS.md section 8. Report any difference.
4. Statuses: list every project with its status. Confirm the Asheri Primary Health Centre and Ganyingbo Topa CBT Centre are Ongoing.
5. Placeholders: search for "[PLACEHOLDER", "Lorem", "TODO", "coming soon" and "example.com". Report each result.
6. Forms: confirm the endpoint status and what the visitor sees while it is unset.
7. Links: check every internal and external link and every anchor.
8. Quality: report any page that looks different from the others, any text that is hard to read in either theme, any layout problem at 375, 768 and 1280 px, and any page that feels slow.
9. Lighthouse (mobile) for all 19 pages: list any category below 90.

End with a table: item, status (pass/fail), what must be fixed before launch.
```
