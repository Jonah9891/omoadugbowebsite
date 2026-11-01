/**
 * Badagry West LCDA — Forms Engine (js/forms.js)
 * Implements client-side validation, honeypot spam protection,
 * 15-second rate limiting, accessible inline error messaging,
 * Formspree API submission, and placeholder service notice handling.
 */

(function () {
  'use strict';

  let formEndpoint = '[PLACEHOLDER]';
  let lastSubmitTime = 0;

  // Load site config to get configured endpoint
  fetch('/data/site.json')
    .then((res) => res.json())
    .then((siteData) => {
      if (siteData && siteData.formEndpoint) {
        formEndpoint = siteData.formEndpoint;
      }
      initForms();
    })
    .catch(() => {
      initForms();
    });

  function initForms() {
    const forms = document.querySelectorAll('form[data-bwl-form]');
    forms.forEach((form) => {
      form.addEventListener('submit', (e) => handleFormSubmit(e, form));
    });
  }

  function handleFormSubmit(e, form) {
    e.preventDefault();

    // 1. Honeypot check (_gotcha field)
    const gotcha = form.querySelector('input[name="_gotcha"]');
    if (gotcha && gotcha.value.trim() !== '') {
      // Bot detected: silent ignore
      console.warn('Bot submission blocked via honeypot');
      return;
    }

    // 2. Rate limit check (15 seconds)
    const now = Date.now();
    if (now - lastSubmitTime < 15000) {
      showFormMessage(form, 'error', 'Please wait a moment before sending another message.');
      return;
    }

    // 3. Client-side field validation
    clearErrors(form);
    const isValid = validateForm(form);
    if (!isValid) return;

    // 4. Check if Formspree endpoint is configured or placeholder
    const isPlaceholder = !formEndpoint || formEndpoint.trim() === '' || formEndpoint.includes('[PLACEHOLDER]');

    if (isPlaceholder) {
      showFormMessage(
        form,
        'notice',
        'Our message service is being set up. Please call or WhatsApp +234 803 761 9499 or email support@omoadugbo.com.'
      );
      return;
    }

    // 5. Submit via Formspree
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Send Message';

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="spinner" style="display:inline-block; width:16px; height:16px; border:2px solid currentColor; border-right-color:transparent; border-radius:50%; animation:spin 0.7s linear infinite; vertical-align:middle; margin-right:8px;" aria-hidden="true"></span>
        Sending…
      `;
    }

    const formData = new FormData(form);

    fetch(formEndpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    })
      .then((response) => {
        if (response.ok) {
          lastSubmitTime = Date.now();
          form.reset();
          const formType = form.getAttribute('data-bwl-form');
          if (formType === 'complaint') {
            showFormMessage(
              form,
              'success',
              'Thank you. Your message has been received. The council office will review it and respond where contact details were given.'
            );
          } else {
            showFormMessage(form, 'success', 'Thank you. Your message has been sent.');
          }
        } else {
          return response.json().then((data) => {
            throw new Error((data && data.error) || 'Submission error');
          });
        }
      })
      .catch((err) => {
        console.warn('Form submission failure:', err);
        showFormMessage(form, 'error', 'Something went wrong. Please try again, or call +234 803 761 9499.');
      })
      .finally(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }
      });
  }

  function validateForm(form) {
    let valid = true;

    // Required text/select/textarea fields
    form.querySelectorAll('[required]').forEach((input) => {
      const val = input.value.trim();
      const name = input.getAttribute('name');

      if (!val) {
        showFieldError(input, 'Please fill in this field.');
        valid = false;
      } else if (input.type === 'email' || name === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(val)) {
          showFieldError(input, 'Please enter a valid email address.');
          valid = false;
        }
      } else if (name === 'message' && val.length < 10) {
        showFieldError(input, 'Please write at least 10 characters.');
        valid = false;
      }
    });

    return valid;
  }

  function showFieldError(input, msg) {
    input.classList.add('is-invalid');
    input.setAttribute('aria-invalid', 'true');

    let errEl = input.parentElement.querySelector('.form-error-msg');
    if (!errEl) {
      errEl = document.createElement('div');
      errEl.className = 'form-error-msg';
      errEl.setAttribute('role', 'alert');
      errEl.style.cssText = 'color: #E53E3E; font-size: 0.8125rem; margin-top: 0.375rem; font-weight: 500;';
      input.parentElement.appendChild(errEl);
    }
    errEl.textContent = msg;
  }

  function clearErrors(form) {
    form.querySelectorAll('.is-invalid').forEach((el) => {
      el.classList.remove('is-invalid');
      el.removeAttribute('aria-invalid');
    });
    form.querySelectorAll('.form-error-msg').forEach((el) => el.remove());

    const statusBox = form.querySelector('.form-status-box');
    if (statusBox) statusBox.remove();
  }

  function showFormMessage(form, type, message) {
    let statusBox = form.querySelector('.form-status-box');
    if (!statusBox) {
      statusBox = document.createElement('div');
      statusBox.className = 'form-status-box';
      statusBox.setAttribute('role', 'status');
      statusBox.setAttribute('aria-live', 'polite');
      form.prepend(statusBox);
    }

    if (type === 'success') {
      statusBox.style.cssText = 'background: rgba(0, 224, 138, 0.12); border: 1px solid var(--green); color: var(--text); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; font-size: 0.9375rem; line-height: 1.5;';
    } else if (type === 'error') {
      statusBox.style.cssText = 'background: rgba(229, 62, 62, 0.12); border: 1px solid #E53E3E; color: var(--text); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; font-size: 0.9375rem; line-height: 1.5;';
    } else {
      // Notice / Setup mode
      statusBox.style.cssText = 'background: rgba(201, 162, 39, 0.15); border: 1px solid var(--gold); color: var(--text); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; font-size: 0.9375rem; line-height: 1.6; font-weight: 500;';
    }

    statusBox.textContent = message;
    statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

})();

