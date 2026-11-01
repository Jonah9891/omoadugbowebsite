/**
 * Badagry West LCDA — Accessible Lightbox (js/gallery.js)
 * Implements an accessible modal lightbox with keyboard traps,
 * Left/Right arrow cycling, Escape to close, touch swipe gestures,
 * caption display, and focus restoration to the activating thumbnail.
 */

(function () {
  'use strict';

  const lightbox = document.getElementById('gallery-lightbox');
  if (!lightbox) return;

  const lbImage = document.getElementById('lightbox-image');
  const lbCaption = document.getElementById('lightbox-caption');
  const lbCounter = document.getElementById('lightbox-counter');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  let currentPhotos = [];
  let currentIndex = 0;
  let lastActiveElement = null;

  // Touch gesture state
  let touchStartX = 0;
  let touchEndX = 0;

  function updateLightbox() {
    if (!currentPhotos.length) return;
    const photo = currentPhotos[currentIndex];
    
    lbImage.src = `/images/${photo.src}`;
    lbImage.alt = photo.caption || 'Badagry West LCDA Gallery Photograph';
    lbCaption.textContent = photo.caption || '';
    lbCounter.textContent = `${currentIndex + 1} of ${currentPhotos.length}`;
  }

  function openLightbox(photos, startIndex, triggerElement) {
    if (!photos || !photos.length) return;
    currentPhotos = photos;
    currentIndex = startIndex || 0;
    lastActiveElement = triggerElement || document.activeElement;

    updateLightbox();

    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button initially
    if (closeBtn) closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    // Restore focus to thumbnail that opened it
    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  }

  function showNext() {
    if (!currentPhotos.length) return;
    currentIndex = (currentIndex + 1) % currentPhotos.length;
    updateLightbox();
  }

  function showPrev() {
    if (!currentPhotos.length) return;
    currentIndex = (currentIndex - 1 + currentPhotos.length) % currentPhotos.length;
    updateLightbox();
  }

  // Keyboard navigation & Focus trap
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('is-open')) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      showNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      showPrev();
    } else if (e.key === 'Tab') {
      // Focus trap
      const focusable = lightbox.querySelectorAll('button:not([disabled]), [tabindex="0"]');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // Touch swipe support
  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        showPrev(); // Swipe right -> previous
      } else {
        showNext(); // Swipe left -> next
      }
    }
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);
  if (nextBtn) nextBtn.addEventListener('click', showNext);

  // Backdrop click to close
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-backdrop')) {
      closeLightbox();
    }
  });

  // Expose global launcher
  window.BWL_Lightbox = {
    open: openLightbox,
    close: closeLightbox
  };

  // Wire up albums on the gallery page
  window.initGallery = function (galleryData) {
    const grid = document.getElementById('gallery-grid');
    if (!grid || !galleryData) return;

    grid.innerHTML = galleryData.map((album, aIdx) => {
      const photoCount = album.images ? album.images.length : 0;
      return `
        <article class="card gallery-card" style="overflow: hidden; display: flex; flex-direction: column;">
          <div style="position: relative; aspect-ratio: 16/10; overflow: hidden; background: var(--surface-2);">
            <img 
              src="/images/${album.cover}" 
              alt="${album.title}" 
              loading="lazy" 
              style="width: 100%; height: 100%; object-fit: cover; transition: transform var(--t-slow) var(--ease);"
              onmouseover="this.style.transform='scale(1.05)'"
              onmouseout="this.style.transform='scale(1)'"
            >
            <div style="position: absolute; top: var(--space-3); left: var(--space-3);">
              <span class="tag tag-completed">${album.category}</span>
            </div>
            <div style="position: absolute; bottom: var(--space-3); right: var(--space-3);">
              <span class="tag" style="background: rgba(10, 10, 10, 0.75); color: #FFFFFF; backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.2);">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 4px;" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
                ${photoCount} ${photoCount === 1 ? 'Photo' : 'Photos'}
              </span>
            </div>
          </div>
          <div style="padding: var(--space-5); display: flex; flex-direction: column; flex-grow: 1;">
            <div style="font-size: 0.8125rem; color: var(--gold); font-weight: 600; margin-bottom: var(--space-2);">
              ${album.date}
            </div>
            <h3 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 700; line-height: 1.3; margin-bottom: var(--space-3);">
              ${album.title}
            </h3>
            <p style="color: var(--text-muted); font-size: 0.9375rem; line-height: 1.6; margin-bottom: var(--space-5); flex-grow: 1;">
              ${album.summary}
            </p>
            <button 
              type="button" 
              class="btn btn-primary btn-sm open-album-btn" 
              data-album-idx="${aIdx}"
              style="width: 100%; justify-content: center; gap: 0.5rem;"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
              View Album Photos
            </button>
          </div>
        </article>
      `;
    }).join('');

    // Attach click listeners to album openers
    document.querySelectorAll('.open-album-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-album-idx'), 10);
        const album = galleryData[idx];
        if (album && album.images && album.images.length) {
          openLightbox(album.images, 0, btn);
        }
      });
    });
  };

})();

