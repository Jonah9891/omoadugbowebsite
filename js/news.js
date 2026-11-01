/**
 * Badagry West LCDA — News Engine (js/news.js)
 * Handles client-side category filtering, URL param sync (?category=),
 * pagination (12 items per page), and rendering for /news/.
 */

(function () {
  'use strict';

  const gridContainer = document.getElementById('news-grid');
  const emptyState = document.getElementById('news-empty-state');
  const paginationContainer = document.getElementById('news-pagination');
  const visibleCountEl = document.getElementById('news-visible-count');

  if (!gridContainer) return;

  const ITEMS_PER_PAGE = 12;
  let allNews = [];
  let currentCategory = 'all';
  let currentPage = 1;

  function readParamsFromURL() {
    const params = new URLSearchParams(window.location.search);
    const catParam = (params.get('category') || 'all').toLowerCase();
    currentCategory = ['all', 'news', 'announcements', 'events'].includes(catParam) ? catParam : 'all';

    const pageParam = parseInt(params.get('page'), 10);
    currentPage = !isNaN(pageParam) && pageParam > 0 ? pageParam : 1;

    syncActiveChips();
  }

  function updateURL() {
    const params = new URLSearchParams();
    if (currentCategory !== 'all') params.set('category', currentCategory);
    if (currentPage > 1) params.set('page', currentPage);

    const queryString = params.toString();
    const newPath = window.location.pathname + (queryString ? '?' + queryString : '');
    window.history.pushState(null, '', newPath);
  }

  function syncActiveChips() {
    document.querySelectorAll('[data-filter-category]').forEach((btn) => {
      const val = btn.getAttribute('data-filter-category').toLowerCase();
      const isActive = val === currentCategory;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  function filterAndRender() {
    // Filter items whose image exists and matches category
    const filtered = allNews.filter((item) => {
      if (!item.images || !item.images.length || !item.images[0]) return false;
      const cat = (item.category || '').toLowerCase();
      return currentCategory === 'all' || cat === currentCategory;
    });

    const totalFiltered = filtered.length;
    const totalPages = Math.ceil(totalFiltered / ITEMS_PER_PAGE) || 1;

    if (currentPage > totalPages) currentPage = 1;

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedItems = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    if (visibleCountEl) {
      visibleCountEl.textContent = `Showing ${filtered.length} ${filtered.length === 1 ? 'article' : 'articles'}`;
    }

    if (filtered.length === 0) {
      gridContainer.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      if (paginationContainer) paginationContainer.style.display = 'none';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (paginationContainer) paginationContainer.style.display = totalPages > 1 ? 'flex' : 'none';

    gridContainer.innerHTML = paginatedItems.map((item) => {
      const firstImg = item.images[0];
      const detailHref = `/news/${item.slug}/`;

      return `
        <article class="card news-card" style="display: flex; flex-direction: column; overflow: hidden; height: 100%;">
          <div style="position: relative; aspect-ratio: 16/10; overflow: hidden; background: var(--surface-2);">
            <img 
              src="/images/${firstImg}" 
              alt="${item.title}" 
              loading="lazy" 
              style="width: 100%; height: 100%; object-fit: cover; transition: transform var(--t-slow) var(--ease);"
              onmouseover="this.style.transform='scale(1.05)'"
              onmouseout="this.style.transform='scale(1)'"
            >
            <div style="position: absolute; top: var(--space-3); left: var(--space-3); z-index: 2;">
              <span class="tag tag-completed">${item.categoryName || item.category}</span>
            </div>
          </div>
          <div class="card-body" style="padding: var(--space-5); display: flex; flex-direction: column; flex-grow: 1;">
            <div style="font-size: 0.8125rem; color: var(--gold); font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: var(--space-2);">
              ${item.dateDisplay || item.date}
            </div>
            <h3 class="card-title" style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 700; line-height: 1.3; margin-bottom: var(--space-3);">
              <a href="${detailHref}" style="color: inherit; text-decoration: none;">
                ${item.title}
              </a>
            </h3>
            <p class="card-text" style="color: var(--text-muted); font-size: 0.9375rem; line-height: 1.6; margin-bottom: var(--space-5); flex-grow: 1;">
              ${item.excerpt}
            </p>
            <div style="margin-top: auto; padding-top: var(--space-4); border-top: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 0.8125rem; color: var(--text-muted);">
                Official Bulletin
              </span>
              <a href="${detailHref}" class="btn btn-ghost btn-sm" style="font-weight: 600; color: var(--gold); padding: 0.25rem 0.5rem; text-decoration: none; display: inline-flex; align-items: center; gap: 0.25rem;">
                Read Article
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');

    renderPaginationControls(totalPages);

    if (window.BWL && typeof window.BWL.initReveals === 'function') {
      window.BWL.initReveals();
    }
  }

  function renderPaginationControls(totalPages) {
    if (!paginationContainer || totalPages <= 1) {
      if (paginationContainer) paginationContainer.innerHTML = '';
      return;
    }

    let html = `
      <button type="button" class="btn btn-ghost btn-sm" id="page-prev-btn" ${currentPage === 1 ? 'disabled style="opacity: 0.4; cursor: not-allowed;"' : ''}>
        &larr; Previous
      </button>
      <div style="display: flex; gap: 0.25rem; align-items: center;">
    `;

    for (let p = 1; p <= totalPages; p++) {
      const isCur = p === currentPage;
      html += `
        <button type="button" class="filter-chip ${isCur ? 'active' : ''}" data-goto-page="${p}">
          ${p}
        </button>
      `;
    }

    html += `
      </div>
      <button type="button" class="btn btn-ghost btn-sm" id="page-next-btn" ${currentPage === totalPages ? 'disabled style="opacity: 0.4; cursor: not-allowed;"' : ''}>
        Next &rarr;
      </button>
    `;

    paginationContainer.innerHTML = html;

    const prevBtn = document.getElementById('page-prev-btn');
    const nextBtn = document.getElementById('page-next-btn');

    if (prevBtn && currentPage > 1) {
      prevBtn.addEventListener('click', () => {
        currentPage--;
        updateURL();
        filterAndRender();
        window.scrollTo({ top: gridContainer.offsetTop - 100, behavior: 'smooth' });
      });
    }

    if (nextBtn && currentPage < totalPages) {
      nextBtn.addEventListener('click', () => {
        currentPage++;
        updateURL();
        filterAndRender();
        window.scrollTo({ top: gridContainer.offsetTop - 100, behavior: 'smooth' });
      });
    }

    paginationContainer.querySelectorAll('[data-goto-page]').forEach((b) => {
      b.addEventListener('click', () => {
        currentPage = parseInt(b.getAttribute('data-goto-page'), 10);
        updateURL();
        filterAndRender();
        window.scrollTo({ top: gridContainer.offsetTop - 100, behavior: 'smooth' });
      });
    });
  }

  function setupListeners() {
    document.querySelectorAll('[data-filter-category]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        currentCategory = btn.getAttribute('data-filter-category').toLowerCase();
        currentPage = 1;
        syncActiveChips();
        updateURL();
        filterAndRender();
      });
    });

    const resetBtn = document.getElementById('reset-news-filter-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        currentCategory = 'all';
        currentPage = 1;
        syncActiveChips();
        updateURL();
        filterAndRender();
      });
    }

    window.addEventListener('popstate', () => {
      readParamsFromURL();
      filterAndRender();
    });
  }

  fetch('/data/news.json')
    .then((res) => {
      if (!res.ok) throw new Error('Failed to load news');
      return res.json();
    })
    .then((data) => {
      allNews = data;
      readParamsFromURL();
      setupListeners();
      filterAndRender();
    })
    .catch((err) => {
      console.warn('News data error:', err);
    });

})();

