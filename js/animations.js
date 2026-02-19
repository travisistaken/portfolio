/* ============================================================
   animations.js — Scroll-triggered animations
   Exports: initAnimations() — called by loader.js after all
   sections are injected into the DOM.
   ============================================================ */

function initAnimations() {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
          /* parseInt with radix 10 + clamp 0-100 — never trust HTML attribute values */
          entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
            const width = Math.min(100, Math.max(0, parseInt(bar.dataset.width, 10) || 0));
            bar.style.width = width + '%';
          });
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
}
