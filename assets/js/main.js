// ===========================================================
// TOB'S TECH — Site interactions & animations
// ===========================================================

document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Page loader ---------- */
  const loader = document.querySelector('.page-loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hidden'), 350);
    });
  }

  /* ---------- Nav scroll state ---------- */
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 20);
    updateScrollProgress();
    toggleBackToTop();
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav toggle ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    }));
  }

  /* ---------- Active nav link ---------- */
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (reduceMotion) {
    revealEls.forEach(el => el.classList.add('in-view'));
  } else if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in-view'));
  }

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll('[data-count]');
  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
    const duration = 1600;
    const start = performance.now();
    const isMoney = el.dataset.prefix === '$';

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      let display = decimals ? value.toFixed(decimals) : Math.floor(value).toLocaleString();
      el.textContent = (isMoney ? '$' : '') + display + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    if (reduceMotion) {
      el.textContent = (isMoney ? '$' : '') + (decimals ? target.toFixed(decimals) : target.toLocaleString()) + suffix;
    } else {
      requestAnimationFrame(tick);
    }
  };
  if ('IntersectionObserver' in window) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          cio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(el => cio.observe(el));
  } else {
    counters.forEach(animateCounter);
  }

  /* ---------- Cursor glow ---------- */
  const glow = document.querySelector('.cursor-glow');
  if (glow && !reduceMotion) {
    window.addEventListener('pointermove', (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });
  }

  /* ---------- Hero code-window typing ---------- */
  const typeTarget = document.querySelector('[data-typewriter]');
  if (typeTarget) {
    const lines = JSON.parse(typeTarget.dataset.typewriter);
    let lineIndex = 0, charIndex = 0;
    typeTarget.innerHTML = '';
    const cursor = document.createElement('span');
    cursor.className = 'cursor-blink';

    const typeNext = () => {
      if (lineIndex >= lines.length) return;
      const line = lines[lineIndex];
      if (charIndex <= line.html.length) {
        typeTarget.innerHTML = lines.slice(0, lineIndex).map(l => l.html).join('\n') +
          (lineIndex > 0 ? '\n' : '') + line.html.slice(0, charIndex);
        typeTarget.appendChild(cursor);
        charIndex++;
        setTimeout(typeNext, reduceMotion ? 0 : (12 + Math.random() * 18));
      } else {
        lineIndex++;
        charIndex = 0;
        setTimeout(typeNext, reduceMotion ? 0 : 180);
      }
    };
    if (reduceMotion) {
      typeTarget.innerHTML = lines.map(l => l.html).join('\n');
    } else {
      setTimeout(typeNext, 500);
    }
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    if (!q || !a) return;
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      item.closest('.faq-list').querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-a').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  /* ---------- Back to top ---------- */
  const backToTop = document.querySelector('.back-to-top');
  function toggleBackToTop() {
    if (!backToTop) return;
    backToTop.classList.toggle('show', window.scrollY > 600);
  }
  if (backToTop) {
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));
  }

  /* ---------- Scroll progress bar ---------- */
  const progressBar = document.querySelector('.scroll-progress');
  function updateScrollProgress() {
    if (!progressBar) return;
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    progressBar.style.width = scrolled + '%';
  }

  /* ---------- Marquee duplication for seamless loop ---------- */
  document.querySelectorAll('.marquee-track').forEach(track => {
    track.innerHTML += track.innerHTML;
  });
});
