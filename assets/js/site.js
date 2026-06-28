// Standard Sats — site interactions: mobile nav, tutorial scrollspy, image lightbox.
(function () {
  'use strict';

  /* ---- Mobile nav drawer ---- */
  var toggle = document.getElementById('navToggle');
  var drawer = document.getElementById('navDrawer');
  if (toggle && drawer) {
    toggle.addEventListener('click', function () {
      var open = drawer.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { drawer.classList.remove('open'); });
    });
  }

  /* ---- Tutorial: optional Title Case for all-caps TOC text ---- */
  var tocEl = document.querySelector('.t-toc[data-toc-case="title"]');
  if (tocEl) {
    var titleCase = function (s) {
      return s.toLowerCase().replace(/(^|[\s/(])([a-z])/g, function (m, sep, ch) { return sep + ch.toUpperCase(); });
    };
    tocEl.querySelectorAll('a').forEach(function (a) { a.textContent = titleCase(a.textContent); });
  }

  /* ---- Tutorial: scrollspy highlight for the TOC ---- */
  var toc = document.querySelector('.t-toc');
  if (toc && 'IntersectionObserver' in window) {
    var links = {};
    toc.querySelectorAll('a[href^="#"]').forEach(function (a) {
      links[a.getAttribute('href').slice(1)] = a;
    });
    var visible = new Set();
    var headings = document.querySelectorAll('.t-content h2[id]');
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) visible.add(e.target.id); else visible.delete(e.target.id);
      });
      var activeId = null;
      headings.forEach(function (h) { if (!activeId && visible.has(h.id)) activeId = h.id; });
      Object.keys(links).forEach(function (id) { links[id].classList.toggle('active', id === activeId); });
    }, { rootMargin: '-80px 0px -65% 0px', threshold: 0 });
    headings.forEach(function (h) { obs.observe(h); });
  }

  /* ---- Back-to-top button (only on long pages, after scrolling) ---- */
  var toTop = document.createElement('button');
  toTop.className = 'to-top';
  toTop.setAttribute('aria-label', 'Back to top');
  toTop.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
  document.body.appendChild(toTop);
  var updateToTop = function () {
    var scrollable = (document.documentElement.scrollHeight - window.innerHeight) > 600;
    toTop.classList.toggle('show', scrollable && window.scrollY > 500);
  };
  window.addEventListener('scroll', updateToTop, { passive: true });
  window.addEventListener('resize', updateToTop);
  updateToTop();
  toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

  /* ---- Image lightbox (tutorial screenshots + cover) ---- */
  var zoomables = document.querySelectorAll('.t-content img, .t-cover');
  if (zoomables.length) {
    var box = document.createElement('div');
    box.className = 'lightbox';
    box.innerHTML = '<button class="lightbox-close" aria-label="Close">&times;</button><img alt="">';
    document.body.appendChild(box);
    var boxImg = box.querySelector('img');
    function close() { box.classList.remove('open'); document.body.style.overflow = ''; }
    box.addEventListener('click', close);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    zoomables.forEach(function (img) {
      img.addEventListener('click', function () {
        boxImg.src = img.currentSrc || img.src; boxImg.alt = img.alt || '';
        box.classList.add('open'); document.body.style.overflow = 'hidden';
      });
    });
  }
})();
