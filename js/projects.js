/**
 * Badagry West LCDA — Projects Engine (js/projects.js)
 * Handles client-side filtering, URL query param sync (?status=, ?type=),
 * dynamic statistics calculation, and rendering for /projects/.
 */

(function () {
  'use strict';

  const gridContainer = document.getElementById('projects-grid');
  const emptyState = document.getElementById('projects-empty-state');
  const statsTotal = document.getElementById('stat-total');
  const statsCompleted = document.getElementById('stat-completed');
  const statsOngoing = document.getElementById('stat-ongoing');
  const statsPlanned = document.getElementById('stat-planned');
  const filterCountEl = document.getElementById('visible-count-display');

  if (!gridContainer) return;

  let allProjects = [];
  let currentStatus = 'all';
  let currentType = 'all';

  // Read URL parameters
  function readParamsFromURL() {
    const params = new URLSearchParams(window.location.search);
    const statusParam = (params.get('status') || 'all').toLowerCase();
    const typeParam = (params.get('type') || 'all').toLowerCase();

    currentStatus = ['all', 'completed', 'ongoing', 'planned'].includes(statusParam) ? statusParam : 'all';
    currentType = ['all', 'infrastructure', 'community', 'education', 'health', 'environment'].includes(typeParam) ? typeParam : 'all';

    syncActiveChips();
  }

  // Update URL without page reload
  function updateURL() {
    const params = new URLSearchParams();
    if (currentStatus !== 'all') params.set('status', currentStatus);
    if (currentType !== 'all') params.set('type', currentType);

    const queryString = params.toString();
    const newRelativePathQuery = window.location.pathname + (queryString ? '?' + queryString : '');
    window.history.pushState(null, '', newRelativePathQuery);
  }

  // Sync active states on buttons
  function syncActiveChips() {
    document.querySelectorAll('[data-filter-status]').forEach((btn) => {
      const val = btn.getAttribute('data-filter-status').toLowerCase();
      const isActive = val === currentStatus;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    document.querySelectorAll('[data-filter-type]').forEach((btn) => {
      const val = btn.getAttribute('data-filter-type').toLowerCase();
      const isActive = val === currentType;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  // Status tag helper
  function renderStatusTag(status) {
    const norm = (status || '').toLowerCase();
    if (norm === 'ongoing') {
      return '<span class="tag tag-ongoing"><span class="live-dot" aria-hidden="true"></span> Ongoing</span>';
    } else if (norm === 'completed') {
      return '<span class="tag tag-completed">Completed</span>';
    } else {
      return '<span class="tag tag-planned">Planned</span>';
    }
  }

  // Filter and render projects
  function filterAndRender() {
    // 1. Filter projects whose first image exists and matches filters
    const filtered = allProjects.filter((p) => {
      // Must have valid first image
      if (!p.images || !p.images.length || !p.images[0]) return false;

      const pStatus = (p.status || '').toLowerCase();
      const pType = (p.type || '').toLowerCase();

      const statusMatch = currentStatus === 'all' || pStatus === currentStatus;
      const typeMatch = currentType === 'all' || pType === currentType;

      return statusMatch && typeMatch;
    });

    // 2. Update Stats based on currently active type filter or global
    // "Stats strip numbers match the visible projects after filtering"
    const totalCount = filtered.length;
    const completedCount = filtered.filter(p => (p.status || '').toLowerCase() === 'completed').length;
    const ongoingCount = filtered.filter(p => (p.status || '').toLowerCase() === 'ongoing').length;
    const plannedCount = filtered.filter(p => (p.status || '').toLowerCase() === 'planned').length;

    if (statsTotal) statsTotal.textContent = totalCount;
    if (statsCompleted) statsCompleted.textContent = completedCount;
    if (statsOngoing) statsOngoing.textContent = ongoingCount;
    if (statsPlanned) statsPlanned.textContent = plannedCount;
    if (filterCountEl) filterCountEl.textContent = `Showing ${totalCount} ${totalCount === 1 ? 'project' : 'projects'}`;

    // 3. Render Grid or Empty state
    if (filtered.length === 0) {
      gridContainer.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    gridContainer.innerHTML = filtered.map((p) => {
      const firstImg = p.images[0];
      const detailHref = `/projects/${p.slug}/`;

      return `
        <article class="card project-card reveal-up" style="display: flex; flex-direction: column; overflow: hidden; height: 100%;">
          <div style="position: relative; aspect-ratio: 16/10; overflow: hidden; background: var(--surface-2);">
            <img 
              src="/images/${firstImg}" 
              alt="${p.title}" 
              loading="lazy" 
              style="width: 100%; height: 100%; object-fit: cover; transition: transform var(--t-slow) var(--ease);"
              onmouseover="this.style.transform='scale(1.05)'"
              onmouseout="this.style.transform='scale(1)'"
            >
            <div style="position: absolute; top: var(--space-3); left: var(--space-3); z-index: 2;">
              ${renderStatusTag(p.status)}
            </div>
            <div style="position: absolute; top: var(--space-3); right: var(--space-3); z-index: 2;">
              <span class="tag" style="background: rgba(10, 10, 10, 0.7); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); color: #FFFFFF; border: 1px solid rgba(255, 255, 255, 0.15);">
                ${p.typeName || p.type}
              </span>
            </div>
          </div>
          <div class="card-body" style="padding: var(--space-5); display: flex; flex-direction: column; flex-grow: 1;">
            <div style="font-size: 0.8125rem; color: var(--gold); font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: var(--space-2);">
              ${p.location || 'Badagry West LCDA'}
            </div>
            <h3 class="card-title" style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 700; line-height: 1.3; margin-bottom: var(--space-3);">
              <a href="${detailHref}" style="color: inherit; text-decoration: none;">
                ${p.title}
              </a>
            </h3>
            <p class="card-text" style="color: var(--text-muted); font-size: 0.9375rem; line-height: 1.6; margin-bottom: var(--space-5); flex-grow: 1;">
              ${p.summary}
            </p>
            <div style="margin-top: auto; padding-top: var(--space-4); border-top: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 0.8125rem; color: var(--text-muted);">
                ${p.date ? 'Record: ' + p.date : 'Civic Record'}
              </span>
              <a href="${detailHref}" class="btn btn-ghost btn-sm" style="font-weight: 600; color: var(--gold); padding: 0.25rem 0.5rem; text-decoration: none; display: inline-flex; align-items: center; gap: 0.25rem;">
                View Details
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Re-trigger scroll reveals for injected items if reveal observer exists
    if (window.BWL && typeof window.BWL.initReveals === 'function') {
      window.BWL.initReveals();
    }
  }

  // Attach button event listeners
  function setupListeners() {
    document.querySelectorAll('[data-filter-status]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        currentStatus = btn.getAttribute('data-filter-status').toLowerCase();
        syncActiveChips();
        updateURL();
        filterAndRender();
      });
    });

    document.querySelectorAll('[data-filter-type]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        currentType = btn.getAttribute('data-filter-type').toLowerCase();
        syncActiveChips();
        updateURL();
        filterAndRender();
      });
    });

    // Reset button in empty state
    const resetBtn = document.getElementById('reset-filters-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        currentStatus = 'all';
        currentType = 'all';
        syncActiveChips();
        updateURL();
        filterAndRender();
      });
    }

    // Handle back/forward navigation in browser
    window.addEventListener('popstate', () => {
      readParamsFromURL();
      filterAndRender();
    });
  }

  // Initialize
  fetch('/data/projects.json')
    .then((res) => {
      if (!res.ok) throw new Error('Failed to load projects');
      return res.json();
    })
    .then((data) => {
      allProjects = data;
      readParamsFromURL();
      setupListeners();
      filterAndRender();
    })
    .catch((err) => {
      console.warn('Projects data error:', err);
    });

})();

