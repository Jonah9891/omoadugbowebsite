/**
 * Badagry West LCDA - Hero Slider Module
 * Features cross-fade transitions, slow zoom (Ken Burns), auto-advance (6s),
 * progress indicator, keyboard / dot / arrow controls, and pause on hover/focus.
 * Disables auto-advance and zoom if prefers-reduced-motion is active.
 */

(function () {
  'use strict';

  function initSlider() {
    var slider = document.querySelector('[data-slider]');
    if (!slider) return;

    var slides = slider.querySelectorAll('[data-slide]');
    var dots = slider.querySelectorAll('[data-slide-dot]');
    var prevBtn = slider.querySelector('[data-slide-prev]');
    var nextBtn = slider.querySelector('[data-slide-next]');
    var progressBar = slider.querySelector('[data-slide-progress]');
    var currentIndex = 0;
    var totalSlides = slides.length;
    var autoPlayTimer = null;
    var slideDuration = 6000;
    var isPaused = false;
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (totalSlides <= 1) {
      if (dots.length) dots[0].style.display = 'none';
      if (prevBtn) prevBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
      if (progressBar) progressBar.style.display = 'none';
      return;
    }

    function showSlide(index) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      currentIndex = index;

      slides.forEach(function (slide, i) {
        var isActive = (i === currentIndex);
        slide.classList.toggle('is-active', isActive);
        slide.setAttribute('aria-hidden', (!isActive).toString());
      });

      dots.forEach(function (dot, i) {
        var isActive = (i === currentIndex);
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-current', isActive ? 'true' : 'false');
      });

      resetProgress();
    }

    function nextSlide() {
      showSlide(currentIndex + 1);
    }

    function prevSlide() {
      showSlide(currentIndex - 1);
    }

    function resetProgress() {
      if (!progressBar || prefersReduced) return;
      progressBar.style.transition = 'none';
      progressBar.style.width = '0%';
      void progressBar.offsetWidth; // Trigger reflow
      if (!isPaused) {
        progressBar.style.transition = 'width ' + slideDuration + 'ms linear';
        progressBar.style.width = '100%';
      }
    }

    function startAutoPlay() {
      if (prefersReduced) return;
      stopAutoPlay();
      isPaused = false;
      resetProgress();
      autoPlayTimer = setInterval(function () {
        if (!isPaused) {
          nextSlide();
        }
      }, slideDuration);
    }

    function stopAutoPlay() {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
      if (progressBar) {
        var computedWidth = window.getComputedStyle(progressBar).width;
        progressBar.style.transition = 'none';
        progressBar.style.width = computedWidth;
      }
    }

    function pause() {
      isPaused = true;
      stopAutoPlay();
    }

    function resume() {
      isPaused = false;
      startAutoPlay();
    }

    // Event Bindings
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        nextSlide();
        resume();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        prevSlide();
        resume();
      });
    }

    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        var targetIndex = parseInt(dot.getAttribute('data-slide-index'), 10);
        if (!isNaN(targetIndex)) {
          showSlide(targetIndex);
          resume();
        }
      });
    });

    // Pause on Hover & Focus
    slider.addEventListener('mouseenter', pause);
    slider.addEventListener('mouseleave', resume);
    slider.addEventListener('focusin', pause);
    slider.addEventListener('focusout', resume);

    // Pause when document is hidden (tab switch)
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        pause();
      } else {
        resume();
      }
    });

    // Touch Swipe Support
    var touchStartX = 0;
    var touchEndX = 0;
    slider.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    slider.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].screenX;
      var diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
        resume();
      }
    }, { passive: true });

    // Initial show and start
    showSlide(0);
    startAutoPlay();
  }

  window.bwlSlider = {
    init: initSlider
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSlider);
  } else {
    initSlider();
  }
})();

