/* ============================================================
   loader.js — Section loader
   Fetches each section's HTML from /sections/ and injects it
   into the matching <section id="..."> slot in index.html.
   Animations are initialised only after ALL sections are loaded
   so the IntersectionObserver finds the actual DOM elements.
   ============================================================ */

const SECTIONS = [
  'hero',
  'about',
  'experience',
  'projects',
  'skills',
  'certifications',
  'writeups',
  'contact'
];

/* ── Load a single section ── */
async function loadSection(id) {
  const container = document.getElementById(id);
  if (!container) return;

  try {
    const response = await fetch(`sections/${id}.html`);

    /* Fail loudly so broken fetches are visible during dev */
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} loading sections/${id}.html`);
    }

    const html = await response.text();

    /* ── SECURITY: sanitise before injection ──
       DOMParser parses in a detached document — no scripts execute.
       We then import only the body children, leaving out any rogue
       <script> or <link> tags that should not be in section files. */
    const parser  = new DOMParser();
    const doc     = parser.parseFromString(html, 'text/html');

    /* Warn if section file contains unexpected script tags */
    if (doc.querySelectorAll('script').length > 0) {
      console.warn(`[loader] sections/${id}.html contains <script> tags — ignored for security.`);
    }

    /* Remove any script/style nodes before importing */
    doc.querySelectorAll('script, style').forEach(el => el.remove());

    /* Import and append all body children into the section slot */
    Array.from(doc.body.childNodes).forEach(node => {
      container.appendChild(document.importNode(node, true));
    });

  } catch (err) {
    console.error(`[loader] Failed to load section "${id}":`, err);
    /* Show a visible error block in the section slot */
    /* Safe DOM construction — no innerHTML with variable data */
    const errBox = document.createElement('p');
    errBox.style.cssText = 'color:#ff6b35;font-family:monospace;padding:2rem;';
    errBox.appendChild(document.createTextNode(`⚠ Could not load section: ${id}`));
    errBox.appendChild(document.createElement('br'));
    const small1 = document.createElement('small');
    small1.textContent = err.message;
    errBox.appendChild(small1);
    errBox.appendChild(document.createElement('br'));
    const small2 = document.createElement('small');
    small2.textContent = 'Make sure you are running via a local server (not file://).';
    errBox.appendChild(small2);
    container.appendChild(errBox);
  }
}

/* ── Load all sections, then boot animations and nav ── */
async function loadAllSections() {
  /* Show a minimal loading state */
  document.body.classList.add('loading');

  /* Load sections in order — await each so DOM is stable */
  for (const id of SECTIONS) {
    await loadSection(id);
  }

  document.body.classList.remove('loading');

  /* Fire the scroll-reveal observer now that all HTML is in the DOM */
  if (typeof initAnimations === 'function') {
    initAnimations();
  }

  /* Fire the active-nav highlighter */
  if (typeof initNav === 'function') {
    initNav();
  }
}

/* Boot immediately */
loadAllSections();
