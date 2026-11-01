/**
 * Badagry West LCDA - Navigation Management
 * Handles sticky scroll state, dropdown interactions, mobile drawer, focus trap, and Escape key
 */

(function () {
  'use strict';

  function initNav() {
    var header = document.querySelector('.site-header');
    var mobileToggle = document.querySelector('[data-mobile-toggle]');
    var mobileDrawer = document.querySelector('[data-mobile-drawer]');
    var mobileOverlay = document.querySelector('[data-mobile-overlay]');
    var mobileCloseBtns = document.querySelectorAll('[data-mobile-close]');
    var accordionToggles = document.querySelectorAll('[data-accordion-toggle]');

    // 1. Sticky Header Scroll Effect
    if (header) {
      var handleScroll = function () {
        if (window.scrollY > 24) {
          header.classList.add('is-scrolled');
        } else {
          header.classList.remove('is-scrolled');
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    }

    // 2. Mobile Drawer Controls
    function openDrawer() {
      if (!mobileDrawer || !mobileOverlay) return;
      mobileDrawer.classList.add('is-open');
      mobileOverlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      if (mobileToggle) {
        mobileToggle.setAttribute('aria-expanded', 'true');
      }

      // Focus trap setup: focus the first interactive element in drawer
      var focusable = mobileDrawer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusable.length) {
        focusable[0].focus();
      }
    }

    function closeDrawer() {
      if (!mobileDrawer || !mobileOverlay) return;
      mobileDrawer.classList.remove('is-open');
      mobileOverlay.classList.remove('is-open');
      document.body.style.overflow = '';
      if (mobileToggle) {
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.focus();
      }
    }

    if (mobileToggle) {
      mobileToggle.addEventListener('click', function () {
        var isOpen = mobileDrawer && mobileDrawer.classList.contains('is-open');
        if (isOpen) {
          closeDrawer();
        } else {
          openDrawer();
        }
      });
    }

    if (mobileOverlay) {
      mobileOverlay.addEventListener('click', closeDrawer);
    }

    mobileCloseBtns.forEach(function (btn) {
      btn.addEventListener('click', closeDrawer);
    });

    // 3. Escape Key & Keyboard Focus Trap in Mobile Drawer
    document.addEventListener('keydown', function (e) {
      var isDrawerOpen = mobileDrawer && mobileDrawer.classList.contains('is-open');

      if (e.key === 'Escape') {
        if (isDrawerOpen) {
          closeDrawer();
        } else {
          // Close any open desktop dropdown by blurring
          var activeEl = document.activeElement;
          if (activeEl && activeEl.closest('.nav-item')) {
            activeEl.blur();
          }
        }
      }

      if (isDrawerOpen && e.key === 'Tab') {
        var focusable = mobileDrawer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (!focusable.length) return;
        var first = focusable[0];
        var last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    });

    // 4. Mobile Drawer Accordion Sub-menus
    accordionToggles.forEach(function (toggle) {
      toggle.addEventListener('click', function () {
        var expanded = toggle.getAttribute('aria-expanded') === 'true';
        var targetId = toggle.getAttribute('aria-controls');
        var sublist = targetId ? document.getElementById(targetId) : toggle.nextElementSibling;

        toggle.setAttribute('aria-expanded', (!expanded).toString());
        if (sublist) {
          if (!expanded) {
            sublist.classList.add('is-expanded');
          } else {
            sublist.classList.remove('is-expanded');
          }
        }
      });
    });

    // 5. Active Page Highlighting based on pathname
    var currentPath = window.location.pathname.replace(/\/index\.html$/, '/');
    var navLinks = document.querySelectorAll('.nav-link, .dropdown-link, .mobile-sublink');
    navLinks.forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;
      var cleanHref = href.split('#')[0].split('?')[0];
      if (cleanHref && (currentPath === cleanHref || (cleanHref !== '/' && currentPath.startsWith(cleanHref)))) {
        link.classList.add('is-active');
        var parentItem = link.closest('.nav-item');
        if (parentItem) {
          var topLink = parentItem.querySelector('.nav-link');
          if (topLink) topLink.classList.add('is-active');
        }
      }
    });
  }

  window.bwlNav = {
    init: initNav
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }
})();

