/**
 * Badagry West LCDA - Main Layout Injector
 * Injects shared Header, Mobile Menu Drawer, and Footer on every page
 * with full accessibility and noscript fallback
 */

(function () {
  'use strict';

  function getHeaderHTML() {
    return `
    <header class="site-header" role="banner">
      <div class="container header-inner">
        <!-- Logo / Wordmark -->
        <a href="/" class="site-logo" aria-label="Badagry West LCDA Home">
          <img src="/images/logo_dark_version.png" alt="Badagry West LCDA Logo" class="site-logo-img logo-dark-theme" width="240" height="66">
          <img src="/images/Logo_light_version.png" alt="Badagry West LCDA Logo" class="site-logo-img logo-light-theme" width="240" height="66" style="display:none;">
        </a>

        <!-- Desktop Navigation (7 items per 02-SITEMAP.md) -->
        <nav class="desktop-nav" aria-label="Main Navigation">
          <!-- 1. Home -->
          <div class="nav-item">
            <a href="/" class="nav-link">Home</a>
          </div>

          <!-- 2. About Us -->
          <div class="nav-item">
            <a href="/about/" class="nav-link" aria-haspopup="true" aria-expanded="false">
              <span>About Us</span>
              <svg class="nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </a>
            <div class="dropdown-menu" role="menu">
              <a href="/about/" class="dropdown-link" role="menuitem">About Badagry West LCDA</a>
              <a href="/about/history/" class="dropdown-link" role="menuitem">History & Background</a>
              <a href="/about/#vision-mission" class="dropdown-link" role="menuitem">Vision & Mission</a>
              <a href="/about/communities-wards/#communities" class="dropdown-link" role="menuitem">Our Communities</a>
              <a href="/about/communities-wards/#wards" class="dropdown-link" role="menuitem">Wards</a>
            </div>
          </div>

          <!-- 3. Leadership & Governance -->
          <div class="nav-item">
            <a href="/leadership/chairman-vice-chairman/" class="nav-link" aria-haspopup="true" aria-expanded="false">
              <span>Leadership & Governance</span>
              <svg class="nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </a>
            <div class="dropdown-menu" role="menu">
              <a href="/leadership/chairman-vice-chairman/#chairman" class="dropdown-link" role="menuitem">Executive Chairman</a>
              <a href="/leadership/chairman-vice-chairman/#vice-chairman" class="dropdown-link" role="menuitem">Vice Chairman</a>
              <a href="/leadership/executive-council/#executive-council" class="dropdown-link" role="menuitem">Executive Council</a>
              <a href="/leadership/legislative-council/#legislative-council" class="dropdown-link" role="menuitem">Legislative Council</a>
              <a href="/leadership/legislative-council/#councillors" class="dropdown-link" role="menuitem">Councillors</a>
              <a href="/leadership/executive-council/#administrative-structure" class="dropdown-link" role="menuitem">Administrative Structure</a>
            </div>
          </div>

          <!-- 4. Departments & Services -->
          <div class="nav-item">
            <a href="/departments/" class="nav-link" aria-haspopup="true" aria-expanded="false">
              <span>Departments & Services</span>
              <svg class="nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </a>
            <div class="dropdown-menu" role="menu">
              <a href="/departments/" class="dropdown-link" role="menuitem">Departments</a>
              <a href="/departments/public-services-business/#public-services" class="dropdown-link" role="menuitem">Public Services</a>
              <a href="/departments/public-services-business/#business-trade" class="dropdown-link" role="menuitem">Business & Trade</a>
              <a href="/departments/health-education-welfare/#health-social-welfare" class="dropdown-link" role="menuitem">Health & Social Welfare</a>
              <a href="/departments/health-education-welfare/#education-youth" class="dropdown-link" role="menuitem">Education & Youth Development</a>
              <a href="/departments/works-environment-agriculture/#environment-sanitation" class="dropdown-link" role="menuitem">Environment & Sanitation</a>
              <a href="/departments/works-environment-agriculture/#works-infrastructure" class="dropdown-link" role="menuitem">Works & Infrastructure</a>
              <a href="/departments/works-environment-agriculture/#agriculture-rural" class="dropdown-link" role="menuitem">Agriculture & Rural Development</a>
            </div>
          </div>

          <!-- 5. Projects & Development -->
          <div class="nav-item">
            <a href="/projects/" class="nav-link" aria-haspopup="true" aria-expanded="false">
              <span>Projects & Development</span>
              <svg class="nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </a>
            <div class="dropdown-menu" role="menu">
              <a href="/projects/?status=completed" class="dropdown-link" role="menuitem">Completed Projects</a>
              <a href="/projects/?status=ongoing" class="dropdown-link" role="menuitem">Ongoing Projects</a>
              <a href="/projects/?status=planned" class="dropdown-link" role="menuitem">Planned Projects</a>
              <a href="/projects/?type=infrastructure" class="dropdown-link" role="menuitem">Infrastructure Development</a>
              <a href="/projects/?type=community" class="dropdown-link" role="menuitem">Community Development</a>
              <a href="/projects/empowerment/" class="dropdown-link" role="menuitem">Empowerment Programmes</a>
            </div>
          </div>

          <!-- 6. News & Media -->
          <div class="nav-item">
            <a href="/news/" class="nav-link" aria-haspopup="true" aria-expanded="false">
              <span>News & Media</span>
              <svg class="nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </a>
            <div class="dropdown-menu" role="menu">
              <a href="/news/" class="dropdown-link" role="menuitem">Blog & News</a>
              <a href="/news/?category=announcements" class="dropdown-link" role="menuitem">Official Announcements</a>
              <a href="/gallery/" class="dropdown-link" role="menuitem">Photo Gallery</a>
            </div>
          </div>

          <!-- 7. Contact Us -->
          <div class="nav-item">
            <a href="/contact/" class="nav-link" aria-haspopup="true" aria-expanded="false">
              <span>Contact Us</span>
              <svg class="nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </a>
            <div class="dropdown-menu" role="menu">
              <a href="/contact/#contact-information" class="dropdown-link" role="menuitem">Contact Information</a>
              <a href="/contact/#office-location" class="dropdown-link" role="menuitem">Office Location</a>
              <a href="/contact/feedback-complaints/" class="dropdown-link" role="menuitem">Feedback & Complaints</a>
            </div>
          </div>
        </nav>

        <!-- Header Controls (Right) -->
        <div class="header-actions">
          <!-- Sun/Moon Theme Switch (With ON/OFF Switch Pill Indicator) -->
          <button type="button" class="theme-switch-btn" data-theme-toggle aria-label="Dark mode is ON" aria-pressed="true">
            <span class="theme-switch-track" aria-hidden="true">
              <span class="theme-switch-thumb">
                <svg class="theme-icon-sun" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                <svg class="theme-icon-moon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="display:none;"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              </span>
            </span>
            <span class="theme-switch-status">ON</span>
          </button>

          <!-- Report a Concern CTA -->
          <a href="/contact/feedback-complaints/" class="btn btn-primary btn-sm header-report-btn" aria-label="Report a civic concern"><span class="btn-full-text">Report a Concern</span></a>

          <!-- Mobile Hamburger Toggle -->
          <button type="button" class="mobile-toggle-btn" data-mobile-toggle aria-label="Open mobile navigation" aria-expanded="false" aria-controls="mobile-drawer">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Drawer Overlay & Sliding Panel -->
    <div class="mobile-drawer-overlay" data-mobile-overlay aria-hidden="true"></div>
    <div class="mobile-drawer" id="mobile-drawer" data-mobile-drawer role="dialog" aria-modal="true" aria-label="Mobile Navigation">
      <div class="mobile-drawer-header">
        <span class="fs-h3" style="font-family: var(--font-display);">Menu</span>
        <button type="button" class="btn btn-ghost" data-mobile-close aria-label="Close menu" style="padding: 0.5rem;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>

      <div class="mobile-drawer-body">
        <div class="mobile-nav-group">
          <a href="/" class="mobile-group-toggle" style="text-decoration:none;">Home</a>
        </div>

        <div class="mobile-nav-group">
          <button type="button" class="mobile-group-toggle" data-accordion-toggle aria-expanded="false" aria-controls="m-about">
            <span>About Us</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="mobile-group-sublist" id="m-about">
            <a href="/about/" class="mobile-sublink">About Badagry West LCDA</a>
            <a href="/about/history/" class="mobile-sublink">History & Background</a>
            <a href="/about/#vision-mission" class="mobile-sublink">Vision & Mission</a>
            <a href="/about/communities-wards/#communities" class="mobile-sublink">Our Communities</a>
            <a href="/about/communities-wards/#wards" class="mobile-sublink">Wards</a>
          </div>
        </div>

        <div class="mobile-nav-group">
          <button type="button" class="mobile-group-toggle" data-accordion-toggle aria-expanded="false" aria-controls="m-leadership">
            <span>Leadership & Governance</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="mobile-group-sublist" id="m-leadership">
            <a href="/leadership/chairman-vice-chairman/#chairman" class="mobile-sublink">Executive Chairman</a>
            <a href="/leadership/chairman-vice-chairman/#vice-chairman" class="mobile-sublink">Vice Chairman</a>
            <a href="/leadership/executive-council/#executive-council" class="mobile-sublink">Executive Council</a>
            <a href="/leadership/legislative-council/#legislative-council" class="mobile-sublink">Legislative Council</a>
            <a href="/leadership/legislative-council/#councillors" class="mobile-sublink">Councillors</a>
            <a href="/leadership/executive-council/#administrative-structure" class="mobile-sublink">Administrative Structure</a>
          </div>
        </div>

        <div class="mobile-nav-group">
          <button type="button" class="mobile-group-toggle" data-accordion-toggle aria-expanded="false" aria-controls="m-departments">
            <span>Departments & Services</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="mobile-group-sublist" id="m-departments">
            <a href="/departments/" class="mobile-sublink">Departments</a>
            <a href="/departments/public-services-business/#public-services" class="mobile-sublink">Public Services</a>
            <a href="/departments/public-services-business/#business-trade" class="mobile-sublink">Business & Trade</a>
            <a href="/departments/health-education-welfare/#health-social-welfare" class="mobile-sublink">Health & Social Welfare</a>
            <a href="/departments/health-education-welfare/#education-youth" class="mobile-sublink">Education & Youth</a>
            <a href="/departments/works-environment-agriculture/#environment-sanitation" class="mobile-sublink">Environment & Sanitation</a>
            <a href="/departments/works-environment-agriculture/#works-infrastructure" class="mobile-sublink">Works & Infrastructure</a>
            <a href="/departments/works-environment-agriculture/#agriculture-rural" class="mobile-sublink">Agriculture & Rural</a>
          </div>
        </div>

        <div class="mobile-nav-group">
          <button type="button" class="mobile-group-toggle" data-accordion-toggle aria-expanded="false" aria-controls="m-projects">
            <span>Projects & Development</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="mobile-group-sublist" id="m-projects">
            <a href="/projects/?status=completed" class="mobile-sublink">Completed Projects</a>
            <a href="/projects/?status=ongoing" class="mobile-sublink">Ongoing Projects</a>
            <a href="/projects/?status=planned" class="mobile-sublink">Planned Projects</a>
            <a href="/projects/?type=infrastructure" class="mobile-sublink">Infrastructure</a>
            <a href="/projects/?type=community" class="mobile-sublink">Community Development</a>
            <a href="/projects/empowerment/" class="mobile-sublink">Empowerment Programmes</a>
          </div>
        </div>

        <div class="mobile-nav-group">
          <button type="button" class="mobile-group-toggle" data-accordion-toggle aria-expanded="false" aria-controls="m-news">
            <span>News & Media</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="mobile-group-sublist" id="m-news">
            <a href="/news/" class="mobile-sublink">Blog & News</a>
            <a href="/news/?category=announcements" class="mobile-sublink">Official Announcements</a>
            <a href="/gallery/" class="mobile-sublink">Photo Gallery</a>
          </div>
        </div>

        <div class="mobile-nav-group">
          <button type="button" class="mobile-group-toggle" data-accordion-toggle aria-expanded="false" aria-controls="m-contact">
            <span>Contact Us</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="mobile-group-sublist" id="m-contact">
            <a href="/contact/#contact-information" class="mobile-sublink">Contact Information</a>
            <a href="/contact/#office-location" class="mobile-sublink">Office Location</a>
            <a href="/contact/feedback-complaints/" class="mobile-sublink">Feedback & Complaints</a>
          </div>
        </div>
      </div>

      <div class="mobile-drawer-footer">
        <a href="/contact/feedback-complaints/" class="btn btn-primary" style="width: 100%;">Report a Concern</a>
      </div>
    </div>
    `;
  }

  function getFooterHTML() {
    return `
    <footer class="site-footer" role="contentinfo">
      <div class="container">
        <!-- Central Secretariat Helpdesk Strip -->
        <div class="footer-emergency-strip">
          <div>
            <div class="emergency-strip-title">Badagry West LCDA Secretariat Desk</div>
            <p style="font-size: 0.875rem; color: #A8A8A0; margin-top: 0.25rem;">
              Direct administrative helpline for community enquiries, feedback, and citizen services.
            </p>
          </div>
          <div class="emergency-numbers-row">
            <a href="tel:+2348037619499" class="emergency-btn" aria-label="Call Secretariat Desk">
              <span style="color: #C9A227;">&#x260E;</span> +234 803 761 9499
            </a>
          </div>
        </div>

        <!-- Main Footer Links Grid -->
        <div class="footer-main-grid">
          <!-- Col 1: Council Identity -->
          <div>
            <a href="/" class="site-logo" style="margin-bottom: 1rem;" aria-label="Badagry West LCDA Home">
              <img src="/images/logo_dark_version.png" alt="Badagry West LCDA Logo" class="site-logo-img" width="255" height="72">
            </a>
            <p style="font-size: 0.875rem; line-height: 1.6; color: #A8A8A0; max-width: 320px; margin-bottom: 1.25rem;">
              The official website of Badagry West Local Council Development Area, Lagos State. Leadership, projects, services and news from your council.
            </p>
            <div class="footer-social-row">
              <a href="https://www.facebook.com/share/1HaJd9qiVB/" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="Badagry West on Facebook" title="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/rikayomoadugbo" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="Badagry West on Instagram" title="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://wa.me/2348037619499" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="Badagry West on WhatsApp" title="WhatsApp">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              </a>
            </div>
          </div>

          <!-- Col 2: Navigation Links -->
          <div>
            <div class="footer-col-title">Navigation</div>
            <ul class="footer-links-list">
              <li><a href="/about/">About Badagry West</a></li>
              <li><a href="/leadership/chairman-vice-chairman/">Leadership & Governance</a></li>
              <li><a href="/departments/">Departments & Services</a></li>
              <li><a href="/projects/">Projects & Development</a></li>
              <li><a href="/news/">Blog & News</a></li>
              <li><a href="/gallery/">Photo Gallery</a></li>
              <li><a href="/contact/">Contact & Location</a></li>
              <li><a href="/privacy/">Privacy Policy</a></li>
            </ul>
          </div>

          <!-- Col 3: Secretariat Desk -->
          <div>
            <div class="footer-col-title">Reach Us</div>
            <p style="font-size: 0.875rem; line-height: 1.6; color: #A8A8A0; margin-bottom: 0.75rem;">
              <strong style="color: #F5F5F2; display:block;">Secretariat:</strong>
              Council Secretariat, Owode-Apa Road, Kankon, Badagry, Lagos State
            </p>
            <p style="font-size: 0.875rem; line-height: 1.6; color: #A8A8A0; margin-bottom: 0.75rem;">
              <strong style="color: #F5F5F2; display:block;">Call / WhatsApp:</strong>
              <a href="tel:+2348037619499" style="color: #C9A227; text-decoration: none;">+234 803 761 9499</a>
            </p>
            <p style="font-size: 0.875rem; line-height: 1.6; color: #A8A8A0; margin-bottom: 0.75rem;">
              <strong style="color: #F5F5F2; display:block;">Public Enquiries:</strong>
              <a href="mailto:support@omoadugbo.com" style="color: #C9A227; text-decoration: none;">support@omoadugbo.com</a>
            </p>
            <p style="font-size: 0.8125rem; color: #777;">
              Office Hours: Monday to Friday, 8:00 AM – 4:00 PM
            </p>
          </div>
        </div>

        <!-- Footer Bottom Bar -->
        <div class="footer-bottom-bar">
          <p>&copy; 2026 Badagry West LCDA. All rights reserved.</p>
          <div>
            <a href="/privacy/" style="color: #A8A8A0; text-decoration: none;">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
    `;
  }

  function getPreloaderHTML() {
    return `
    <div id="site-preloader" class="site-preloader" role="status" aria-live="polite" aria-label="Loading page content">
      <div class="preloader-emblem">
        <div class="preloader-ring-outer" aria-hidden="true"></div>
        <div class="preloader-ring-inner" aria-hidden="true"></div>
        <div class="preloader-logo-wrap">
          <img src="/images/logo_dark_version.png" alt="Badagry West Crest" width="36" height="36">
        </div>
      </div>
      <div class="preloader-text-group">
        <div class="preloader-title">Badagry West LCDA</div>
        <div class="preloader-subtext">Lagos State</div>
        <div class="preloader-bar-track">
          <div class="preloader-bar-fill"></div>
        </div>
      </div>
    </div>
    `;
  }

  function handlePreloader() {
    var preloader = document.getElementById('site-preloader');
    if (!preloader) {
      document.body.insertAdjacentHTML('afterbegin', getPreloaderHTML());
      preloader = document.getElementById('site-preloader');
    }

    function dismiss() {
      if (preloader && !preloader.classList.contains('is-loaded')) {
        preloader.classList.add('is-loaded');
        setTimeout(function () {
          if (preloader.parentNode) {
            preloader.parentNode.removeChild(preloader);
          }
        }, 550);
      }
    }

    if (document.readyState === 'complete') {
      setTimeout(dismiss, 350);
    } else {
      window.addEventListener('load', function () {
        setTimeout(dismiss, 350);
      });
      // Fallback auto-dismiss after 2.5s in case of slow resources
      setTimeout(dismiss, 2500);
    }
  }

  function injectLayout() {
    // 0. Initialize animated preloader
    handlePreloader();
    // 1. Inject Header if placeholder element exists or at top of body
    var headerContainer = document.querySelector('[data-layout-header]');
    if (headerContainer) {
      headerContainer.outerHTML = getHeaderHTML();
    } else if (!document.querySelector('.site-header')) {
      document.body.insertAdjacentHTML('afterbegin', getHeaderHTML());
    }

    // 2. Inject Footer if placeholder element exists, or replace empty footer tags
    var footerContainer = document.querySelector('[data-layout-footer]');
    var existingFooter = document.querySelector('footer.site-footer, #site-footer');
    if (footerContainer) {
      footerContainer.outerHTML = getFooterHTML();
    } else if (existingFooter) {
      existingFooter.outerHTML = getFooterHTML();
    } else {
      document.body.insertAdjacentHTML('beforeend', getFooterHTML());
    }

    // 3. Initialize Navigation & Reveal listeners
    if (window.bwlNav && typeof window.bwlNav.init === 'function') {
      window.bwlNav.init();
    }
    if (window.bwlReveal && typeof window.bwlReveal.init === 'function') {
      window.bwlReveal.init();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectLayout);
  } else {
    injectLayout();
  }
})();

