/* 古今車用中｜景觀志工餐廳 — 共用互動 */
(function () {
  'use strict';

  // 手機版選單
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        toggle.focus();
      }
    });
  }

  // 首頁輪播
  var slides = document.querySelectorAll('.hero-slides img');
  var dotsWrap = document.querySelector('.hero-dots');
  if (slides.length > 1 && dotsWrap) {
    var current = 0;
    var timer = null;
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var dots = [];

    slides.forEach(function (_, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', '顯示第 ' + (i + 1) + ' 張照片');
      b.addEventListener('click', function () { show(i); restart(); });
      dotsWrap.appendChild(b);
      dots.push(b);
    });

    function show(i) {
      slides[current].classList.remove('is-active');
      dots[current].removeAttribute('aria-current');
      current = (i + slides.length) % slides.length;
      slides[current].classList.add('is-active');
      dots[current].setAttribute('aria-current', 'true');
    }
    function restart() {
      if (reduceMotion) return;
      clearInterval(timer);
      timer = setInterval(function () { show(current + 1); }, 6500);
    }

    dots[0].setAttribute('aria-current', 'true');
    restart();
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) clearInterval(timer); else restart();
    });
  }

  // 頁尾年份
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
