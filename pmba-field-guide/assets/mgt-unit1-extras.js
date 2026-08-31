// ============================================================
// MGT 6050 Unit 1 additional widgets: coordination-links slider,
// team basics triangle, and reusable progress checklists.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initCoordinationLinks();
  initTeamTriangle();
  document.querySelectorAll('.checklist-tool[data-storage-key]').forEach(initChecklist);
});

/* ================= Coordination-links problem ================= */
function initCoordinationLinks(){
  const tool = document.getElementById('coord-tool');
  if(!tool) return;

  const slider = document.getElementById('coord-slider');
  const readout = document.getElementById('coord-readout');
  const flags = document.getElementById('coord-flags');
  const svgWrap = document.getElementById('coord-svg-wrap');

  function links(n){ return n * (n - 1) / 2; }

  function pointsOnCircle(n, r, cx, cy){
    const pts = [];
    for(let i = 0; i < n; i++){
      const angle = (Math.PI * 2 * i / n) - Math.PI / 2;
      pts.push([cx + r * Math.cos(angle), cy + r * Math.sin(angle)]);
    }
    return pts;
  }

  function render(n){
    const l = links(n);
    readout.innerHTML = `<b>${n}</b> people &rarr; <b>${l}</b> coordination links`;

    flags.innerHTML = '';
    if(n === 6){
      flags.innerHTML = `<span class="coord-flag">Hackman's own team cap</span>`;
    } else if(n === 10){
      flags.innerHTML = `<span class="coord-flag">the "no double digits" threshold</span>`;
    } else if(n > 10){
      flags.innerHTML = `<span class="coord-flag">well past "no double digits"</span>`;
    }

    const size = 300, cx = size/2, cy = size/2, r = size/2 - 30;
    const pts = pointsOnCircle(n, r, cx, cy);
    let lines = '';
    for(let i = 0; i < n; i++){
      for(let j = i+1; j < n; j++){
        lines += `<line x1="${pts[i][0].toFixed(1)}" y1="${pts[i][1].toFixed(1)}" x2="${pts[j][0].toFixed(1)}" y2="${pts[j][1].toFixed(1)}" stroke="var(--paper-4, #C9C2B4)" stroke-width="1"/>`;
      }
    }
    let dots = '';
    pts.forEach(([x,y]) => {
      dots += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="7" fill="var(--blue-deep)" stroke="var(--paper)" stroke-width="2"/>`;
    });
    svgWrap.innerHTML = `<svg viewBox="0 0 ${size} ${size}" role="img" aria-label="Diagram of ${n} people showing ${l} coordination links">${lines}${dots}</svg>`;
  }

  slider.addEventListener('input', () => render(parseInt(slider.value, 10)));
  render(parseInt(slider.value, 10));
}

/* ================= Team Basics Triangle ================= */
const TRIANGLE_INFO = {
  corners: "Corners — what teams deliver: collective work products, performance results, and personal growth.",
  sides: "Sides — what produces it: commitment, skills, and accountability. Common approach + meaningful goals build commitment, which supports the corners.",
  point: "Katzenbach & Smith's point: acting on these behaviors improves performance far more than team-building exercises aimed at \u201Cbecoming a team.\u201D",
};

function initTeamTriangle(){
  const fig = document.getElementById('triangle-fig');
  const legendEl = document.getElementById('triangle-legend-detail');
  if(!fig || !legendEl) return;

  function show(key){
    legendEl.innerHTML = `<div class="tri-legend-row"><b>${key === 'corners' ? 'Corners' : key === 'sides' ? 'Sides' : 'The takeaway'}</b>${TRIANGLE_INFO[key]}</div>`;
  }

  fig.querySelectorAll('[data-tri]').forEach(el => {
    el.addEventListener('click', () => show(el.dataset.tri));
    el.addEventListener('mouseenter', () => show(el.dataset.tri));
  });

  show('corners');
}

/* ================= Reusable progress checklist (localStorage) ================= */
function initChecklist(tool){
  const storageKey = tool.dataset.storageKey;
  const items = tool.querySelectorAll('.checklist-item');
  const fillEl = tool.querySelector('.checklist-progress-fill');
  const countEl = tool.querySelector('.checklist-progress-count');

  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(storageKey) || '{}'); } catch(e){ saved = {}; }

  function update(){
    let checked = 0;
    items.forEach(item => {
      const cb = item.querySelector('input[type="checkbox"]');
      if(cb.checked){ checked++; item.classList.add('checked'); }
      else { item.classList.remove('checked'); }
    });
    const pct = items.length ? Math.round((checked / items.length) * 100) : 0;
    if(fillEl) fillEl.style.width = pct + '%';
    if(countEl) countEl.textContent = `${checked} / ${items.length} reviewed`;
  }

  function save(){
    const data = {};
    items.forEach(item => {
      const cb = item.querySelector('input[type="checkbox"]');
      data[cb.dataset.id] = cb.checked;
    });
    try { localStorage.setItem(storageKey, JSON.stringify(data)); } catch(e){ /* storage unavailable */ }
  }

  items.forEach(item => {
    const cb = item.querySelector('input[type="checkbox"]');
    if(saved[cb.dataset.id]) cb.checked = true;
    cb.addEventListener('change', () => { update(); save(); });
  });

  update();
}
