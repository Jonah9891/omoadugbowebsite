import os
import json

with open('data/projects.json', 'r', encoding='utf-8') as f:
    projects = json.load(f)

for p in projects:
    slug = p['slug']
    p_dir = os.path.join('projects', slug)
    os.makedirs(p_dir, exist_ok=True)
    
    # Status Tag HTML
    status_norm = p.get('status', '').lower()
    if status_norm == 'ongoing':
        tag_html = '<span class="tag tag-ongoing"><span class="live-dot" aria-hidden="true"></span> Ongoing</span>'
        status_label = 'Ongoing (Under Active Construction)'
    elif status_norm == 'completed':
        tag_html = '<span class="tag tag-completed">Completed</span>'
        status_label = 'Completed &amp; Delivered'
    else:
        tag_html = '<span class="tag tag-planned">Planned</span>'
        status_label = 'Planned'

    # Body paragraphs
    body_html = ''.join(f'<p style="font-size: 1.0625rem; line-height: 1.7; color: var(--text); margin-bottom: var(--space-4);">{para}</p>' for para in p.get('body', []))

    # Gallery images HTML
    images = p.get('images', [])
    first_img = images[0] if images else 'project-inner-roads.jpg'
    
    gallery_items_html = ''
    for idx, img in enumerate(images):
        gallery_items_html += f'''
          <div style="position: relative; border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border); aspect-ratio: 4/3; background: var(--surface-2);">
            <img src="/images/{img}" alt="{p['title']} - Photo Record {idx+1}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; transition: transform var(--t-base) var(--ease);" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='scale(1)'">
          </div>
        '''

    # Related projects
    other_projs = [op for op in projects if op['slug'] != slug][:2]
    related_html = ''
    for op in other_projs:
        op_img = op['images'][0] if op.get('images') else ''
        op_tag = '<span class="tag tag-ongoing"><span class="live-dot" aria-hidden="true"></span> Ongoing</span>' if op['status'] == 'ongoing' else '<span class="tag tag-completed">Completed</span>'
        related_html += f'''
          <article class="card" style="overflow: hidden; display: flex; flex-direction: column;">
            <div style="position: relative; aspect-ratio: 16/10; overflow: hidden;">
              <img src="/images/{op_img}" alt="{op['title']}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
              <div style="position: absolute; top: var(--space-3); left: var(--space-3);">{op_tag}</div>
            </div>
            <div style="padding: var(--space-5); display: flex; flex-direction: column; flex-grow: 1;">
              <h4 style="font-family: var(--font-display); font-size: 1.125rem; font-weight: 700; margin-bottom: var(--space-2);">
                <a href="/projects/{op['slug']}/" style="color: inherit; text-decoration: none;">{op['title']}</a>
              </h4>
              <p style="color: var(--text-muted); font-size: 0.875rem; line-height: 1.5; margin-bottom: var(--space-4); flex-grow: 1;">{op['summary']}</p>
              <a href="/projects/{op['slug']}/" class="btn btn-ghost btn-sm" style="color: var(--gold); padding-left: 0;">View Record &rarr;</a>
            </div>
          </article>
        '''

    page_html = f'''<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{p['title']} | Projects | Badagry West LCDA</title>
  <meta name="description" content="{p['summary']}">
  <link rel="canonical" href="https://badagrywest.lg.gov.ng/projects/{slug}/">
  
  <script src="/js/theme.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="/css/tokens.css">
  <link rel="stylesheet" href="/css/base.css">
  <link rel="stylesheet" href="/css/layout.css">
  <link rel="stylesheet" href="/css/components.css">
  <style>
    @media (min-width: 900px) {{
      .lg-two-col {{
        grid-template-columns: 2fr 1fr !important;
      }}
    }}
  </style>
</head>
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>

  <header id="site-header" class="site-header">
    <noscript>
      <div class="container" style="padding: 1rem 0; text-align: center;">
        <a href="/" style="font-weight: bold; color: var(--gold);">Badagry West LCDA</a> ·
        <a href="/projects/">Projects</a>
      </div>
    </noscript>
  </header>

  <main id="main-content">
    <!-- Page Opener / Hero Band -->
    <section class="page-opener" style="padding: var(--space-12) 0 var(--space-8); background: linear-gradient(to bottom, var(--surface), var(--bg)); border-bottom: 1px solid var(--border);">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span class="breadcrumb-separator" aria-hidden="true">›</span>
          <a href="/projects/">Projects</a>
          <span class="breadcrumb-separator" aria-hidden="true">›</span>
          <span aria-current="page">{p['title']}</span>
        </nav>

        <div style="display: flex; align-items: center; gap: var(--space-3); margin-top: var(--space-3); margin-bottom: var(--space-3); flex-wrap: wrap;">
          <span class="eyebrow" style="margin-bottom: 0;">{p.get('typeName', p.get('type')).upper()} INITIATIVE</span>
          {tag_html}
        </div>

        <h1 class="page-title" style="font-family: var(--font-display); font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 700; line-height: 1.2; margin-bottom: var(--space-4);">
          {p['title']}
        </h1>
        <p class="lead" style="max-width: 72ch; color: var(--text-muted); font-size: 1.125rem; line-height: 1.6; margin-bottom: 0;">
          {p['summary']}
        </p>
      </div>
    </section>

    <!-- Main Detail Content -->
    <section class="section" style="padding: var(--space-10) 0 var(--space-16);">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr; gap: var(--space-10);" class="lg-two-col">
          
          <!-- Primary Column: Hero Image & Description -->
          <div>
            <!-- Hero Showcase Image -->
            <div style="position: relative; border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--border); margin-bottom: var(--space-8); aspect-ratio: 16/10; background: var(--surface-2); box-shadow: var(--shadow-md);">
              <img src="/images/{first_img}" alt="{p['title']}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>

            <!-- Body Narrative -->
            <div style="margin-bottom: var(--space-10);">
              <h2 style="font-family: var(--font-display); font-size: 1.75rem; font-weight: 700; margin-bottom: var(--space-4);">
                Project Scope &amp; Community Impact
              </h2>
              {body_html}
            </div>

            <!-- Photo Record Grid -->
            <div>
              <h3 style="font-family: var(--font-display); font-size: 1.375rem; font-weight: 700; margin-bottom: var(--space-4);">
                Photo Record
              </h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: var(--space-4);">
                {gallery_items_html}
              </div>
            </div>
          </div>

          <!-- Secondary Column: Record Snapshot Panel -->
          <div>
            <div style="position: sticky; top: calc(var(--header-height, 70px) + var(--space-6)); background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: var(--space-6); box-shadow: var(--shadow-sm);">
              <span class="eyebrow" style="margin-bottom: var(--space-2);">Official Record</span>
              <h3 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 700; margin-bottom: var(--space-5); border-bottom: 1px solid var(--border); padding-bottom: var(--space-3);">
                Project Snapshot
              </h3>

              <dl style="margin: 0; display: flex; flex-direction: column; gap: var(--space-4);">
                <div>
                  <dt style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.25rem;">Current Status</dt>
                  <dd style="margin: 0; font-weight: 600; color: var(--text);">{status_label}</dd>
                </div>

                <div>
                  <dt style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.25rem;">Sector Category</dt>
                  <dd style="margin: 0; color: var(--text); font-weight: 500;">{p.get('typeName', p.get('type'))}</dd>
                </div>

                <div>
                  <dt style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.25rem;">Location / Community</dt>
                  <dd style="margin: 0; color: var(--text); font-weight: 500;">{p.get('location', 'Badagry West LCDA')}</dd>
                </div>

                <div>
                  <dt style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.25rem;">Record Year</dt>
                  <dd style="margin: 0; color: var(--text); font-weight: 500;">{p.get('date', '2026')}</dd>
                </div>

                <div>
                  <dt style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.25rem;">Executing Authority</dt>
                  <dd style="margin: 0; color: var(--text); font-weight: 500;">Badagry West LCDA Administration</dd>
                </div>
              </dl>

              <div style="margin-top: var(--space-6); padding-top: var(--space-5); border-top: 1px solid var(--border);">
                <p style="font-size: 0.8125rem; color: var(--text-muted); line-height: 1.5; margin-bottom: var(--space-4);">
                  Have an enquiry or community observation regarding this project?
                </p>
                <a href="/contact/feedback-complaints/" class="btn btn-ghost btn-sm" style="width: 100%; justify-content: center;">
                  Submit Feedback or Concern
                </a>
              </div>
            </div>
          </div>

        </div>

        <!-- Related Projects Row -->
        <div style="margin-top: var(--space-16); padding-top: var(--space-10); border-top: 1px solid var(--border);">
          <div style="display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: var(--space-6);">
            <div>
              <span class="eyebrow">Portfolio Continuity</span>
              <h3 style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 700; margin-top: var(--space-1); margin-bottom: 0;">
                Related Civic Projects
              </h3>
            </div>
            <a href="/projects/" class="btn btn-ghost btn-sm">All Projects &rarr;</a>
          </div>

          <div class="grid grid-2">
            {related_html}
          </div>
        </div>

      </div>
    </section>
  </main>

  <footer id="site-footer" class="site-footer"></footer>

  <script src="/js/nav.js"></script>
  <script src="/js/reveal.js"></script>
  <script src="/js/main.js"></script>
</body>
</html>
'''
    with open(os.path.join(p_dir, 'index.html'), 'w', encoding='utf-8') as f_out:
        f_out.write(page_html)
    print(f'Generated detail page for {slug}')

