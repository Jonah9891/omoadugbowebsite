/**
 * Badagry West LCDA - Theme Management
 * Storage key: bwl-theme ONLY
 */

(function () {
  'use strict';

  var THEME_KEY = 'bwl-theme';

  function getTheme() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  }

  function updateMetaThemeColor(theme) {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'theme-color';
      document.head.appendChild(meta);
    }
    // #0A0A0A for dark, #FFFFFF for light
    meta.setAttribute('content', theme === 'dark' ? '#0A0A0A' : '#FFFFFF');
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      // Ignore localStorage restrictions
    }
    updateMetaThemeColor(theme);
    updateToggleButtons(theme);
  }

  function toggleTheme() {
    var current = getTheme();
    var next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
  }

  function updateToggleButtons(theme) {
    var toggles = document.querySelectorAll('[data-theme-toggle]');
    toggles.forEach(function (btn) {
      btn.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
      var label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
      btn.setAttribute('aria-label', label);
      btn.title = label;
      
      var sunIcon = btn.querySelector('.theme-icon-sun');
      var moonIcon = btn.querySelector('.theme-icon-moon');
      if (sunIcon && moonIcon) {
        if (theme === 'dark') {
          sunIcon.style.display = 'block';
          moonIcon.style.display = 'none';
        } else {
          sunIcon.style.display = 'none';
          moonIcon.style.display = 'block';
        }
      }
    });
  }

  // Initialize once DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    var initialTheme = getTheme();
    updateMetaThemeColor(initialTheme);
    updateToggleButtons(initialTheme);

    // Bind click events on all theme toggles
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-theme-toggle]');
      if (btn) {
        e.preventDefault();
        toggleTheme();
      }
    });

    // Enable smooth transitions only after initial render
    requestAnimationFrame(function () {
      setTimeout(function () {
        document.documentElement.classList.add('theme-ready');
      }, 50);
    });
  });

  // Export functions to window
  window.bwlTheme = {
    getTheme: getTheme,
    setTheme: setTheme,
    toggleTheme: toggleTheme
  };
})();

