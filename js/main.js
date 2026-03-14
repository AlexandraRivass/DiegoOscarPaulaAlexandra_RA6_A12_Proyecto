/* ═══════════════════════════════════════
   PTD ESCOLA — Shared JavaScript
═══════════════════════════════════════ */

// ── Scroll reveal animation ──
document.addEventListener('DOMContentLoaded', () => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 90);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

  // ── Active nav link ──
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });
});

// ── Diagnosis tabs ──
function showDiag(id, btn) {
  document.querySelectorAll('.diag-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.dtab').forEach(t => t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}
