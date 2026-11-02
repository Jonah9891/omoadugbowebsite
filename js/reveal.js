/**
 * Badagry West LCDA - Scroll Reveal Animations
 * Uses IntersectionObserver to smoothly reveal elements with [data-reveal]
 * Automatically tags section text, headings, cards, and images for seamless scrolling animation.
 * Respects prefers-reduced-motion: reduce.
 */

(function () {
  'use strict';

  function initReveal() {
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Comprehensive selector targeting headings, text paragraphs, cards, and pictures/images across all pages
    var autoTargets = document.querySelectorAll(
      'section .section-header, section .section-eyebrow, section .section-title, section .section-lead, ' +
      'section p, section h2, section h3, section h4, ' +
      'section .card, section .portrait-card, section .album-card, section .feature-card, section .stat-item, ' +
      'section .gallery-card, section .project-card, section .news-card, ' +
      '.page-opener-inner, .chairman-welcome-content, .chairman-welcome-portrait, ' +
      'section figure, section picture, section img:not(.site-logo-img):not(.footer-crest-img), ' +
      '.leadership-portrait-wrap, .project-detail-gallery, .quick-link-card'
    );

    autoTargets.forEach(function (el) {
      // Avoid tagging tiny icons or interior child text of already tagged cards
      if (!el.closest('.site-header') && !el.closest('.site-footer') && !el.hasAttribute('data-reveal')) {
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
      rootMargin: '0px 0px -30px 0px',
      threshold: 0.05
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
