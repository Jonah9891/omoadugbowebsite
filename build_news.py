import os
import json

with open('data/news.json', 'r', encoding='utf-8') as f:
    news_items = json.load(f)

for item in news_items:
    slug = item['slug']
    n_dir = os.path.join('news', slug)
    os.makedirs(n_dir, exist_ok=True)

    # First image
    images = item.get('images', [])
    first_img = images[0] if images else 'hero-1-secretariat.jpg'

    # Body paragraphs
    body_html = ''.join(f'<p style="font-size: 1.0625rem; line-height: 1.8; color: var(--text); margin-bottom: var(--space-5);">{para}</p>' for para in item.get('body', []))

    # Gallery images HTML (if multiple)
    gallery_html = ''
    if len(images) > 1:
        gallery_items = ''
        for idx, img in enumerate(images):
            gallery_items += f'''
              <div style="position: relative; border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border); aspect-ratio: 16/10; background: var(--surface-2);">
                <img src="/images/{img}" alt="{item['title']} - Photo {idx+1}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
            '''
        gallery_html = f'''
          <div style="margin-top: var(--space-8); padding-top: var(--space-8); border-top: 1px solid var(--border);">
            <h3 style="font-family: var(--font-display); font-size: 1.375rem; font-weight: 700; margin-bottom: var(--space-4);">
              Related Photos
            </h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: var(--space-4);">
              {gallery_items}
            </div>
          </div>
        '''

    # Other news items
    other_news = [on for on in news_items if on['slug'] != slug][:2]
    related_html = ''
    for on in other_news:
        on_img = on['images'][0] if on.get('images') else 'hero-1-secretariat.jpg'
        related_html += f'''
          <article class="card" style="overflow: hidden; display: flex; flex-direction: column;">
            <div style="position: relative; aspect-ratio: 16/10; overflow: hidden;">
              <img src="/images/{on_img}" alt="{on['title']}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div style="padding: var(--space-5); display: flex; flex-direction: column; flex-grow: 1;">
              <div style="font-size: 0.75rem; color: var(--gold); font-weight: 600; text-transform: uppercase; margin-bottom: var(--space-2);">{on.get('dateDisplay', on.get('date'))}</div>
              <h4 style="font-family: var(--font-display); font-size: 1.125rem; font-weight: 700; margin-bottom: var(--space-2);">
                <a href="/news/{on['slug']}/" style="color: inherit; text-decoration: none;">{on['title']}</a>
              </h4>
              <p style="color: var(--text-muted); font-size: 0.875rem; line-height: 1.5; margin-bottom: var(--space-4); flex-grow: 1;">{on['excerpt']}</p>
              <a href="/news/{on['slug']}/" class="btn btn-ghost btn-sm" style="color: var(--gold); padding-left: 0;">Read Bulletin &rarr;</a>
            </div>
          </article>
        '''

    page_html = f'''<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{item['title']} | News | Badagry West LCDA</title>
  <meta name="description" content="{item['excerpt']}">
  <link rel="canonical" href="https://badagrywest.lg.gov.ng/news/{slug}/">
  
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
      .article-layout {{
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
        <a href="/news/">News</a>
      </div>
    </noscript>
  </header>

  <main id="main-content">
    <!-- Article Header -->
    <section class="page-opener" style="padding: var(--space-12) 0 var(--space-8); background: linear-gradient(to bottom, var(--surface), var(--bg)); border-bottom: 1px solid var(--border);">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span class="breadcrumb-separator" aria-hidden="true">›</span>
          <a href="/news/">News</a>
          <span class="breadcrumb-separator" aria-hidden="true">›</span>
          <span aria-current="page">{item['title']}</span>
        </nav>

        <div style="display: flex; align-items: center; gap: var(--space-3); margin-top: var(--space-3); margin-bottom: var(--space-3); flex-wrap: wrap;">
          <span class="tag tag-completed">{item.get('categoryName', item.get('category'))}</span>
          <span style="font-size: 0.8125rem; color: var(--gold); font-weight: 600;">{item.get('dateDisplay', item.get('date'))}</span>
          <span style="font-size: 0.8125rem; color: var(--text-muted);">· 2 min read</span>
        </div>

        <h1 class="page-title" style="font-family: var(--font-display); font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 700; line-height: 1.2; margin-bottom: var(--space-4);">
          {item['title']}
        </h1>
        <p class="lead" style="max-width: 72ch; color: var(--text-muted); font-size: 1.125rem; line-height: 1.6; margin-bottom: 0;">
          {item['excerpt']}
        </p>
      </div>
    </section>

    <!-- Article Content -->
    <section class="section" style="padding: var(--space-10) 0 var(--space-16);">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr; gap: var(--space-10);" class="article-layout">
          
          <!-- Narrative Column -->
          <div>
            <!-- Hero Article Image -->
            <div style="position: relative; border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--border); margin-bottom: var(--space-8); aspect-ratio: 16/10; background: var(--surface-2); box-shadow: var(--shadow-md);">
              <img src="/images/{first_img}" alt="{item['title']}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>

            <div class="article-body">
              {body_html}
            </div>

            {gallery_html}

            <!-- Civic Share Strip -->
            <div style="margin-top: var(--space-8); padding-top: var(--space-6); border-top: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--space-4);">
              <span style="font-size: 0.875rem; font-weight: 600; color: var(--text-muted);">Share this bulletin:</span>
              <div style="display: flex; gap: var(--space-2);">
                <a href="https://wa.me/?text={item['title']}%20https://badagrywest.lg.gov.ng/news/{slug}/" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm" style="gap: 0.375rem;">
                  WhatsApp
                </a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://badagrywest.lg.gov.ng/news/{slug}/" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm" style="gap: 0.375rem;">
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div>
            <div style="position: sticky; top: calc(var(--header-height, 70px) + var(--space-6)); background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: var(--space-6); box-shadow: var(--shadow-sm);">
              <span class="eyebrow" style="margin-bottom: var(--space-2);">Public Record</span>
              <h3 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 700; margin-bottom: var(--space-4); border-bottom: 1px solid var(--border); padding-bottom: var(--space-3);">
                Official Notice
              </h3>
              <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6; margin-bottom: var(--space-5);">
                This release is published as an authentic record of the Badagry West Local Council Development Area administration.
              </p>
              <div style="display: flex; flex-direction: column; gap: var(--space-3);">
                <a href="/news/?category=announcements" class="btn btn-ghost btn-sm" style="width: 100%; justify-content: center;">
                  All Official Announcements
                </a>
                <a href="/contact/feedback-complaints/" class="btn btn-primary btn-sm" style="width: 100%; justify-content: center;">
                  Contact Information Desk
                </a>
              </div>
            </div>
          </div>

        </div>

        <!-- Latest News Cards -->
        <div style="margin-top: var(--space-16); padding-top: var(--space-10); border-top: 1px solid var(--border);">
          <div style="display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: var(--space-6);">
            <div>
              <span class="eyebrow">Public Bulletins</span>
              <h3 style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 700; margin-top: var(--space-1); margin-bottom: 0;">
                Latest Council Bulletins
              </h3>
            </div>
            <a href="/news/" class="btn btn-ghost btn-sm">All News &rarr;</a>
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
    with open(os.path.join(n_dir, 'index.html'), 'w', encoding='utf-8') as f_out:
        f_out.write(page_html)
    print(f'Generated article page for {slug}')

