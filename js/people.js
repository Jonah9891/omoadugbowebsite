/**
 * Badagry West LCDA - Dynamic People Runtime Renderer
 * Strictly verifies portraits in images/ before displaying ANY official.
 * Supports rendering for:
 * - Chairman & Vice Chairman blocks (T3a)
 * - Executive Council groups (T3b)
 * - Legislative Councillors (T3c)
 */

(function () {
  'use strict';

  var verifiedPeople = {};
  var peopleData = [];
  var isLoaded = false;

  function checkImageExists(src, callback) {
    var img = new Image();
    img.onload = function () { callback(true); };
    img.onerror = function () { callback(false); };
    img.src = src;
  }

  function nameOf(id) {
    var person = verifiedPeople[id];
    if (person && person.hasImage) {
      return (person.title ? person.title + ' ' : '') + person.name;
    }
    if (id === 'chairman') return 'the Executive Chairman';
    if (id === 'vice-chairman') return 'the Vice Chairman';
    return '';
  }

  function renderPersonCard(person) {
    var card = document.createElement('article');
    card.className = 'card person-card';
    card.setAttribute('data-person-id', person.id);

    var portfolioBadge = person.portfolio ? `<span class="fs-eyebrow" style="color: var(--gold); margin-bottom: 0.25rem; display: block;">${person.portfolio}</span>` : '';
    var wardCommunity = (person.ward && person.community) ? `<span class="fs-eyebrow" style="color: var(--gold); margin-bottom: 0.25rem; display: block;">${person.ward} &bull; ${person.community}</span>` : '';

    card.innerHTML = `
      <div class="person-portrait-wrap">
        <img src="/images/${person.image}" alt="Portrait of ${person.title ? person.title + ' ' : ''}${person.name}, ${person.position}" width="320" height="400" loading="lazy" decoding="async">
      </div>
      <div class="person-card-body">
        ${wardCommunity || portfolioBadge}
        <h3 class="fs-h3" style="margin-bottom: 0.25rem;">${person.title ? person.title + ' ' : ''}${person.name}</h3>
        <p class="fs-small" style="color: var(--text-muted); margin-bottom: 0.75rem; font-weight: 500;">${person.position}</p>
        <p class="fs-small" style="line-height: 1.5;">${person.summary || ''}</p>
      </div>
    `;
    return card;
  }

  function populatePeopleGrids() {
    // 1. Councillors Grid
    var councillorsContainer = document.querySelector('[data-councillors-grid]');
    var councillorsSection = document.querySelector('[data-councillors-section]');
    if (councillorsContainer) {
      var councillors = peopleData.filter(function (p) {
        return p.group === 'councillors' && verifiedPeople[p.id] && verifiedPeople[p.id].hasImage;
      }).sort(function (a, b) { return a.order - b.order; });

      if (councillors.length === 0) {
        if (councillorsSection) councillorsSection.style.display = 'none';
      } else {
        if (councillorsSection) councillorsSection.style.display = '';
        councillorsContainer.innerHTML = '';
        councillors.forEach(function (c) {
          councillorsContainer.appendChild(renderPersonCard(c));
        });
      }
    }

    // 2. Officials Grid (SLG, Treasurer, CPS, etc.)
    var officialsContainer = document.querySelector('[data-officials-grid]');
    var officialsSection = document.querySelector('[data-officials-section]');
    if (officialsContainer) {
      var officials = peopleData.filter(function (p) {
        return p.group === 'officials' && verifiedPeople[p.id] && verifiedPeople[p.id].hasImage;
      }).sort(function (a, b) { return a.order - b.order; });

      if (officials.length === 0) {
        if (officialsSection) officialsSection.style.display = 'none';
      } else {
        if (officialsSection) officialsSection.style.display = '';
        officialsContainer.innerHTML = '';
        officials.forEach(function (o) {
          officialsContainer.appendChild(renderPersonCard(o));
        });
      }
    }

    // 3. Supervisors Grid
    var supervisorsContainer = document.querySelector('[data-supervisors-grid]');
    var supervisorsSection = document.querySelector('[data-supervisors-section]');
    if (supervisorsContainer) {
      var supervisors = peopleData.filter(function (p) {
        return p.group === 'supervisors' && verifiedPeople[p.id] && verifiedPeople[p.id].hasImage;
      }).sort(function (a, b) { return a.order - b.order; });

      if (supervisors.length === 0) {
        if (supervisorsSection) supervisorsSection.style.display = 'none';
      } else {
        if (supervisorsSection) supervisorsSection.style.display = '';
        supervisorsContainer.innerHTML = '';
        supervisors.forEach(function (s) {
          supervisorsContainer.appendChild(renderPersonCard(s));
        });
      }
    }

    // 4. Advisers Grid
    var advisersContainer = document.querySelector('[data-advisers-grid]');
    var advisersSection = document.querySelector('[data-advisers-section]');
    if (advisersContainer) {
      var advisers = peopleData.filter(function (p) {
        return p.group === 'advisers' && verifiedPeople[p.id] && verifiedPeople[p.id].hasImage;
      }).sort(function (a, b) { return a.order - b.order; });

      if (advisers.length === 0) {
        if (advisersSection) advisersSection.style.display = 'none';
      } else {
        if (advisersSection) advisersSection.style.display = '';
        advisersContainer.innerHTML = '';
        advisers.forEach(function (a) {
          advisersContainer.appendChild(renderPersonCard(a));
        });
      }
    }

    // 5. Chairman Feature Blocks Gatekeeper
    var chairmanBlocks = document.querySelectorAll('[data-chairman-welcome], [data-chairman-block]');
    var chairman = verifiedPeople['chairman'];
    chairmanBlocks.forEach(function (block) {
      if (!chairman || !chairman.hasImage) {
        block.style.display = 'none';
      } else {
        block.style.display = '';
        block.querySelectorAll('[data-chairman-name]').forEach(function (el) {
          el.textContent = nameOf('chairman');
        });
      }
    });

    // 6. Vice Chairman Feature Blocks Gatekeeper
    var viceChairmanBlocks = document.querySelectorAll('[data-vice-chairman-block]');
    var viceChairman = verifiedPeople['vice-chairman'];
    viceChairmanBlocks.forEach(function (block) {
      if (!viceChairman || !viceChairman.hasImage) {
        block.style.display = 'none';
      } else {
        block.style.display = '';
        block.querySelectorAll('[data-vice-chairman-name]').forEach(function (el) {
          el.textContent = nameOf('vice-chairman');
        });
      }
    });
  }

  function initPeople(callback) {
    fetch('/data/people.json')
      .then(function (res) {
        if (!res.ok) throw new Error('Failed to load people.json');
        return res.json();
      })
      .then(function (data) {
        peopleData = data.people || [];
        var pending = peopleData.length;

        if (pending === 0) {
          if (callback) callback();
          return;
        }

        peopleData.forEach(function (person) {
          checkImageExists('/images/' + person.image, function (exists) {
            verifiedPeople[person.id] = {
              title: person.title,
              name: person.name,
              position: person.position,
              hasImage: exists
            };

            pending--;
            if (pending === 0) {
              isLoaded = true;
              populatePeopleGrids();
              if (callback) callback();
            }
          });
        });
      })
      .catch(function (err) {
        console.warn('People data check error:', err);
      });
  }

  window.bwlPeople = {
    init: initPeople,
    nameOf: nameOf,
    isLoaded: function () { return isLoaded; },
    getVerified: function () { return verifiedPeople; }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initPeople();
    });
  } else {
    initPeople();
  }
})();
