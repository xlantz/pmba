// ============================================================
// MGT 6050 Field Guide — shared interactivity
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initNavToggle();
  initNavDropdowns();
  initCurve();
  initAccordion();
  initGlossary();
  initFlashcards();
  initQuiz();
});

/* ---------------- mobile nav ---------------- */
function initNavToggle(){
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.topnav');
  if(!btn || !nav) return;
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

/* ---------------- nav dropdowns (unit sub-menus) ---------------- */
function initNavDropdowns(){
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  dropdowns.forEach(dd => {
    const caret = dd.querySelector('.nav-caret');
    if(!caret) return;
    caret.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dd.classList.contains('open');
      dropdowns.forEach(other => { other.classList.remove('open'); other.querySelector('.nav-caret')?.setAttribute('aria-expanded','false'); });
      if(!isOpen){ dd.classList.add('open'); caret.setAttribute('aria-expanded','true'); }
    });
  });
  document.addEventListener('click', () => {
    dropdowns.forEach(dd => { dd.classList.remove('open'); dd.querySelector('.nav-caret')?.setAttribute('aria-expanded','false'); });
  });
}

/* ---------------- performance curve (hero signature element) ---------------- */
const CURVE_STAGES = [
  { key:'working', label:'Working Group', y: 128, blurb:'Output is just the sum of individual bests. No collective work-product is pursued yet.' },
  { key:'pseudo', label:'Pseudo-Team', y: 172, blurb:'The lowest point on the curve. The discipline has been abandoned and the group is often stuck in conflict \u2014 effort creates friction instead of results.' },
  { key:'potential', label:'Potential Team', y: 108, blurb:'Real progress, but purpose, goals, and accountability are still incomplete.' },
  { key:'real', label:'Real Team', y: 46, blurb:'All six team-basics elements are in place. The steepest performance gain on the whole curve happens getting here from "potential."' },
  { key:'high', label:'High-Performing Team', y: 16, blurb:'Everything a real team has, plus deep mutual commitment to each other\u2019s personal growth. Many project teams never last long enough to reach it.' },
];

function initCurve(){
  const svg = document.getElementById('curve-svg');
  const tooltip = document.getElementById('curve-tooltip');
  if(!svg) return;

  const W = 560, H = 210, padX = 34;
  const stepX = (W - padX * 2) / (CURVE_STAGES.length - 1);
  const pts = CURVE_STAGES.map((s, i) => ({ ...s, x: padX + i * stepX }));

  const pathD = pts.map((p,i) => (i === 0 ? 'M' : 'L') + p.x.toFixed(1) + ',' + p.y.toFixed(1)).join(' ');

  const ns = 'http://www.w3.org/2000/svg';
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.innerHTML = '';

  // baseline
  const baseline = document.createElementNS(ns,'line');
  baseline.setAttribute('x1', padX); baseline.setAttribute('x2', W - padX);
  baseline.setAttribute('y1', 128); baseline.setAttribute('y2', 128);
  baseline.setAttribute('stroke', 'rgba(255,255,255,0.12)');
  baseline.setAttribute('stroke-dasharray', '3 4');
  svg.appendChild(baseline);

  const path = document.createElementNS(ns,'path');
  path.setAttribute('d', pathD);
  path.setAttribute('class', 'curve-path');
  const len = 900;
  path.style.strokeDasharray = len;
  path.style.strokeDashoffset = len;
  svg.appendChild(path);

  pts.forEach((p, i) => {
    const g = document.createElementNS(ns,'g');
    g.setAttribute('class','curve-node');
    g.setAttribute('tabindex','0');
    g.setAttribute('role','button');
    g.setAttribute('aria-label', p.label);
    g.setAttribute('data-key', p.key);

    const isDip = p.key === 'pseudo';
    const isPeak = p.key === 'high';
    const fill = isDip ? 'var(--rust)' : (isPeak || p.key === 'real') ? 'var(--gold)' : '#EDEAE0';

    const c = document.createElementNS(ns,'circle');
    c.setAttribute('cx', p.x); c.setAttribute('cy', p.y); c.setAttribute('r', 6);
    c.setAttribute('fill', fill);
    c.setAttribute('stroke', '#1B2430'); c.setAttribute('stroke-width','2');
    g.appendChild(c);

    const t = document.createElementNS(ns,'text');
    t.setAttribute('x', p.x);
    t.setAttribute('y', p.y < 40 ? p.y - 14 : p.y + 20);
    t.setAttribute('text-anchor', i === 0 ? 'start' : (i === pts.length - 1 ? 'end' : 'middle'));
    t.setAttribute('fill', '#A9AFB8');
    t.setAttribute('font-size', '9.5');
    t.textContent = p.label.split(' ')[0] === 'High-Performing' ? 'High-Perf.' : p.label;
    g.appendChild(t);

    const show = () => {
      document.querySelectorAll('.curve-node').forEach(n => n.classList.remove('active'));
      g.classList.add('active');
      if(tooltip){ tooltip.innerHTML = `<b>${p.label}</b> \u2014 ${p.blurb}`; }
    };
    g.addEventListener('mouseenter', show);
    g.addEventListener('focus', show);
    g.addEventListener('click', show);
    g.addEventListener('keydown', (e) => { if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); show(); } });

    svg.appendChild(g);
  });

  // draw-in animation
  requestAnimationFrame(() => {
    path.style.transition = 'stroke-dashoffset 1.4s ease';
    path.style.strokeDashoffset = '0';
  });

  // default tooltip = Real Team (the headline stat)
  const realNode = svg.querySelector('[data-key="real"]');
  if(realNode && tooltip){
    tooltip.innerHTML = `<b>Real Team</b> \u2014 ${CURVE_STAGES.find(s=>s.key==='real').blurb}`;
  }
}

/* ---------------- accordion (source sections) ---------------- */
function initAccordion(){
  document.querySelectorAll('.source-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const block = btn.closest('.source-block');
      block.classList.toggle('open');
      btn.setAttribute('aria-expanded', block.classList.contains('open') ? 'true':'false');
    });
  });
  // open the first block by default
  const first = document.querySelector('.source-block');
  if(first) first.classList.add('open');
}

/* ---------------- glossary ---------------- */
function initGlossary(){
  const grid = document.getElementById('glossary-grid');
  if(!grid) return;
  const search = document.getElementById('glossary-search');
  const chips = document.querySelectorAll('.chip-filter .chip');
  const countEl = document.getElementById('glossary-count');
  let activeSource = 'all';

  function applyFilter(){
    const q = (search?.value || '').trim().toLowerCase();
    let visible = 0;
    grid.querySelectorAll('.term-card').forEach(card => {
      const src = card.dataset.source;
      const text = card.dataset.search;
      const matchSource = activeSource === 'all' || src === activeSource;
      const matchQuery = !q || text.includes(q);
      const show = matchSource && matchQuery;
      card.classList.toggle('hidden', !show);
      if(show) visible++;
    });
    if(countEl) countEl.textContent = `${visible} term${visible===1?'':'s'}`;
  }

  search?.addEventListener('input', applyFilter);
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeSource = chip.dataset.source;
      applyFilter();
    });
  });
  applyFilter();
}

/* ---------------- flashcards ---------------- */
function initFlashcards(){
  const stage = document.getElementById('flash-stage');
  if(!stage || typeof FLASHCARDS === 'undefined') return;

  const cardEl = document.getElementById('flashcard');
  const frontP = cardEl.querySelector('.front p');
  const backP = cardEl.querySelector('.back p');
  const metaEl = document.getElementById('flash-meta');
  const sourceSelect = document.getElementById('flash-source');
  const prevBtn = document.getElementById('flash-prev');
  const nextBtn = document.getElementById('flash-next');
  const shuffleBtn = document.getElementById('flash-shuffle');

  let deck = [...FLASHCARDS];
  let order = deck.map((_,i)=>i);
  let idx = 0;

  function currentDeckIndices(){
    const src = sourceSelect.value;
    return deck
      .map((c,i)=>({c,i}))
      .filter(o => src==='all' || o.c.source === src)
      .map(o => o.i);
  }

  function render(){
    cardEl.classList.remove('flipped');
    const indices = order;
    if(indices.length === 0){
      frontP.textContent = 'No cards match this filter.';
      backP.textContent = '';
      metaEl.textContent = '0 / 0';
      return;
    }
    const card = deck[indices[idx]];
    frontP.textContent = card.front;
    backP.textContent = card.back;
    metaEl.textContent = `${SOURCE_LABELS[card.source] || card.source} \u00b7 Card ${idx+1} of ${indices.length}`;
  }

  function resetOrder(shuffle){
    order = currentDeckIndices();
    if(shuffle){
      for(let i = order.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [order[i], order[j]] = [order[j], order[i]];
      }
    }
    idx = 0;
    render();
  }

  cardEl.addEventListener('click', () => cardEl.classList.toggle('flipped'));
  cardEl.addEventListener('keydown', (e) => { if(e.key==='Enter' || e.key===' '){ e.preventDefault(); cardEl.classList.toggle('flipped'); } });

  prevBtn.addEventListener('click', () => { if(order.length){ idx = (idx - 1 + order.length) % order.length; render(); } });
  nextBtn.addEventListener('click', () => { if(order.length){ idx = (idx + 1) % order.length; render(); } });
  shuffleBtn.addEventListener('click', () => resetOrder(true));
  sourceSelect.addEventListener('change', () => resetOrder(false));

  resetOrder(false);
}

/* ---------------- quiz ---------------- */
function initQuiz(){
  const shell = document.getElementById('quiz-shell');
  if(!shell || typeof QUIZ_QUESTIONS === 'undefined') return;

  const bodyEl = document.getElementById('quiz-body');
  const progressBar = document.getElementById('quiz-progress-bar');
  const metaEl = document.getElementById('quiz-meta');
  const startBtn = document.getElementById('quiz-start');
  const startScreen = document.getElementById('quiz-start-screen');

  let questions = [];
  let qIndex = 0;
  let score = 0;
  let answered = false;

  function shuffled(arr){
    const a = [...arr];
    for(let i=a.length-1;i>0;i--){ const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
    return a;
  }

  function start(){
    questions = shuffled(QUIZ_QUESTIONS);
    qIndex = 0; score = 0; answered = false;
    startScreen.style.display = 'none';
    bodyEl.style.display = 'block';
    renderQuestion();
  }

  function renderQuestion(){
    answered = false;
    const q = questions[qIndex];
    progressBar.style.width = `${(qIndex / questions.length) * 100}%`;
    metaEl.textContent = `Question ${qIndex+1} of ${questions.length} \u00b7 Score ${score}`;

    const optionLetters = ['A','B','C','D'];
    const optsHTML = q.options.map((opt,i) => `
      <button class="quiz-option" data-index="${i}">
        <span class="opt-letter">${optionLetters[i]}</span><span>${opt}</span>
      </button>
    `).join('');

    bodyEl.innerHTML = `
      <p class="quiz-question">${q.prompt}</p>
      <div class="quiz-options">${optsHTML}</div>
      <div class="quiz-feedback" id="quiz-feedback"></div>
      <div class="quiz-footer">
        <span class="text-soft" style="font-family:var(--font-mono); font-size:.78rem;">${SOURCE_LABELS[q.source] || 'Synthesis'}</span>
        <button class="btn gold" id="quiz-next" disabled>Next question</button>
      </div>
    `;

    bodyEl.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => selectAnswer(parseInt(btn.dataset.index,10)));
    });
    document.getElementById('quiz-next').addEventListener('click', nextQuestion);
  }

  function selectAnswer(i){
    if(answered) return;
    answered = true;
    const q = questions[qIndex];
    const correct = i === q.correctIndex;
    if(correct) score++;

    bodyEl.querySelectorAll('.quiz-option').forEach((btn, idx) => {
      btn.disabled = true;
      if(idx === q.correctIndex) btn.classList.add('correct');
      else if(idx === i) btn.classList.add('incorrect');
    });

    const fb = document.getElementById('quiz-feedback');
    fb.classList.add('show');
    fb.innerHTML = `<b>${correct ? (q.correctFeedback||"That's right.") : (q.incorrectFeedback||"Not quite.")}</b>${q.explanation}`;

    document.getElementById('quiz-next').disabled = false;
    metaEl.textContent = `Question ${qIndex+1} of ${questions.length} \u00b7 Score ${score}`;
  }

  function nextQuestion(){
    qIndex++;
    if(qIndex >= questions.length){
      finish();
    } else {
      renderQuestion();
    }
  }

  function finish(){
    progressBar.style.width = '100%';
    metaEl.textContent = `Complete \u00b7 Score ${score} / ${questions.length}`;
    const pct = Math.round((score/questions.length)*100);
    let msg = "Solid \u2014 review the missed topics below in the source sections.";
    if(pct === 100) msg = "Perfect run. You know this unit cold.";
    else if(pct >= 80) msg = "Strong grasp of the material \u2014 a light review will lock it in.";
    else if(pct < 50) msg = "Worth another pass through the source sections and flashcards before you move on.";

    bodyEl.innerHTML = `
      <div class="quiz-result">
        <div class="eyebrow">Results</div>
        <div class="score">${score}/${questions.length}</div>
        <p class="text-soft">${msg}</p>
        <button class="btn gold" id="quiz-retry">Retry quiz</button>
      </div>
    `;
    document.getElementById('quiz-retry').addEventListener('click', start);
  }

  startBtn.addEventListener('click', start);
}
