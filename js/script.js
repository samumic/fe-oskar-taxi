(function () {
  'use strict';

  /* ==========================================================================
     Sticky Header
     ========================================================================== */

  var header = document.getElementById('header');
  var scrollThreshold = 20;

  function updateHeader() {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  }

  /* ==========================================================================
     Mobile Navigation Toggle
     ========================================================================== */

  var menuToggle = document.getElementById('menu-toggle');
  var nav = document.getElementById('nav');
  var navLinks = nav.querySelectorAll('.header__nav-link');

  function openMenu() {
    nav.classList.add('header__nav--open');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Menü schliessen');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    nav.classList.remove('header__nav--open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Menü öffnen');
    document.body.style.overflow = '';
  }

  menuToggle.addEventListener('click', function () {
    var isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when a nav link is clicked
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', closeMenu);
  }

  /* ==========================================================================
     Smooth Scrolling
     ========================================================================== */

  var anchorLinks = document.querySelectorAll('a[href^="#"]');

  for (var j = 0; j < anchorLinks.length; j++) {
    anchorLinks[j].addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      var headerHeight = header.offsetHeight;
      var targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  }

  /* ==========================================================================
     Active Navigation Highlight
     ========================================================================== */

  var sections = document.querySelectorAll('main section[id]');

  function updateActiveNav() {
    var scrollPos = window.scrollY + header.offsetHeight + 40;

    for (var k = sections.length - 1; k >= 0; k--) {
      var section = sections[k];
      if (section.offsetTop <= scrollPos) {
        var activeId = section.getAttribute('id');

        for (var l = 0; l < navLinks.length; l++) {
          navLinks[l].classList.remove('header__nav-link--active');
          if (navLinks[l].getAttribute('href') === '#' + activeId) {
            navLinks[l].classList.add('header__nav-link--active');
          }
        }
        break;
      }
    }
  }

  /* ==========================================================================
     Reveal on Scroll
     ========================================================================== */

  // Add reveal class to animatable elements
  var revealSelectors = [
    '.service-card',
    '.vehicle-card',
    '.route-card',
    '.why-us__card',
    '.driver__image',
    '.driver__content',
    '.contact__inner',
    '.route-estimator__form',
    '.hero__content',
    '.hero__visual'
  ];

  var revealElements = document.querySelectorAll(revealSelectors.join(', '));

  for (var m = 0; m < revealElements.length; m++) {
    revealElements[m].classList.add('reveal');
  }

  function checkReveal() {
    var windowHeight = window.innerHeight;
    var triggerPoint = windowHeight * 0.88;

    for (var n = 0; n < revealElements.length; n++) {
      var el = revealElements[n];
      var elTop = el.getBoundingClientRect().top;

      if (elTop < triggerPoint) {
        el.classList.add('reveal--visible');
      }
    }
  }

  // Run once on load to reveal above-the-fold elements
  checkReveal();

  /* ==========================================================================
     Floating Mobile Call Button – show after scrolling past hero
     ========================================================================== */

  var floatingBtn = document.querySelector('.floating-call-btn');
  var hero = document.querySelector('.hero');

  function updateFloatingBtn() {
    if (!floatingBtn || !hero) return;

    var heroBottom = hero.offsetTop + hero.offsetHeight;

    if (window.scrollY > heroBottom) {
      floatingBtn.style.opacity = '1';
      floatingBtn.style.visibility = 'visible';
    } else {
      floatingBtn.style.opacity = '0';
      floatingBtn.style.visibility = 'hidden';
    }
  }

  // Initially hidden
  if (floatingBtn) {
    floatingBtn.style.opacity = '0';
    floatingBtn.style.visibility = 'hidden';
    floatingBtn.style.transition = 'opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease, background-color 0.3s ease';
  }

  /* ==========================================================================
     Back to Top Button
     ========================================================================== */

  var backToTop = document.getElementById('back-to-top');
  var backToTopThreshold = 600;

  function updateBackToTop() {
    if (!backToTop) return;

    if (window.scrollY > backToTopThreshold) {
      backToTop.classList.add('back-to-top--visible');
    } else {
      backToTop.classList.remove('back-to-top--visible');
    }
  }

  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==========================================================================
     Scroll Event Handler – throttled with requestAnimationFrame
     ========================================================================== */

  var ticking = false;

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        updateHeader();
        updateActiveNav();
        checkReveal();
        updateFloatingBtn();
        updateBackToTop();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // Run all scroll handlers once on load
  updateHeader();
  updateActiveNav();
  updateFloatingBtn();
  updateBackToTop();

  /* ==========================================================================
     Route Estimator – mailto handler
     ========================================================================== */

  var form = document.getElementById('route-form');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var abholort = document.getElementById('route-from').value.trim();
      var zielort = document.getElementById('route-to').value.trim();

      if (!abholort || !zielort) return;

      var subject = encodeURIComponent('Transferanfrage: ' + abholort + ' nach ' + zielort);
      var body = encodeURIComponent(
        'Hallo Oskar Taxi GmbH,\n\n' +
        'ich möchte gerne folgenden Transfer anfragen:\n\n' +
        'Abholort: ' + abholort + '\n' +
        'Zielort: ' + zielort + '\n' +
        'Datum:\n' +
        'Uhrzeit:\n' +
        'Anzahl Personen:\n' +
        'Gepäck:\n\n' +
        'Vielen Dank.'
      );

      window.location.href = 'mailto:Azatuzuner@gmail.com?subject=' + subject + '&body=' + body;
    });
  }

})();
