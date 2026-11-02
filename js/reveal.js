/**
 * Badagry West LCDA - Scroll Reveal Animations
 * Uses IntersectionObserver to smoothly reveal elements with [data-reveal]
 * Automatically tags section text, cards, and media for seamless scrolling animation.
 * Respects prefers-reduced-motion: reduce.
 */

(function () {
  'use strict';

  function initReveal() {
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Automatically tag section headings, leads, cards, and main images if not explicitly tagged
    var autoTargets = document.querySelectorAll(
      'section .section-header, section .section-eyebrow, section .section-title, section .section-lead, ' +
      'section .card, section .portrait-card, section .album-card, section .feature-card, section .stat-item, ' +
      '.page-opener-inner, .chairman-welcome-content, .chairman-welcome-portrait'
    );

    autoTargets.forEach(function (el) {
      if (!el.hasAttribute('data-reveal')) {
        el.setAttribute('data-reveal', '');
      }
    });

    var elements = document.querySelectorAll('[data-reveal]');

    if (prefersReduced || !('IntersectionObserver' in window)) {
      elements.forEach(function (el) {
        el.classList.add('is-revealed');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    });

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  window.bwlReveal = {
    init: initReveal
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal);
  } else {
    initReveal();
  }
})();
