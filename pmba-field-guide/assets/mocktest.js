// ============================================================
// ACCTG 6000 mock test — draws a random subset from HOMEWORK_BANK,
// renders it, grades everything at once on submit, shows notes for
// anything wrong, and supports retaking with a fresh random draw.
// ============================================================

document.addEventListener('DOMContentLoaded', initMockTest);

function initMockTest(){
  const startScreen = document.getElementById('mt-start');
  const testScreen = document.getElementById('mt-test');
  const resultsBar = document.getElementById('mt-results');
  const questionsWrap = document.getElementById('mt-questions');
  const submitBtn = document.getElementById('mt-submit');
  const retakeBtn = document.getElementById('mt-retake');
  const newTestBtn = document.getElementById('mt-new-test');
  const poolCountEl = document.getElementById('mt-pool-count');
  if(!startScreen || typeof HOMEWORK_BANK === 'undefined') return;

  poolCountEl.textContent = HOMEWORK_BANK.length;

  const countAllEl = document.getElementById('mt-count-all');
  const countConceptEl = document.getElementById('mt-count-concept');
  const countWorkEl = document.getElementById('mt-count-work');
  if(countAllEl) countAllEl.textContent = HOMEWORK_BANK.length;
  if(countConceptEl) countConceptEl.textContent = HOMEWORK_BANK.filter(q => q.type === 'concept').length;
  if(countWorkEl) countWorkEl.textContent = HOMEWORK_BANK.filter(q => q.type === 'work').length;

  let currentSet = [];
  let currentType = 'all';

  function pool(){
    if(currentType === 'all') return HOMEWORK_BANK;
    return HOMEWORK_BANK.filter(q => q.type === currentType);
  }

  document.querySelectorAll('[data-mt-type]').forEach(btn => {
    btn.addEventListener('click', () => {
      currentType = btn.dataset.mtType;
      document.querySelectorAll('[data-mt-type]').forEach(b => b.classList.toggle('active', b === btn));
    });
  });

  function shuffled(arr){
    const a = [...arr];
    for(let i=a.length-1;i>0;i--){ const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
    return a;
  }

  function normalize(str){
    return (str || '').toString().trim().toLowerCase().replace(/[$,%]/g,'').replace(/\s+/g,' ');
  }

  function startTest(count){
    const src = pool();
    const n = Math.min(count, src.length);
    currentSet = shuffled(src).slice(0, n);

    questionsWrap.innerHTML = currentSet.map((q, i) => `
      <div class="hw-q mt-q" data-bank-id="${q.id}">
        <h3><span class="hw-num">Q${i+1}</span>${q.title}</h3>
        <span class="tag" style="margin-bottom:1em; display:inline-block;">${q.set}</span>
        ${q.bodyHtml}
        <div class="hw-notes" data-notes-for="${q.id}">
          <b>How to work it</b>
          ${q.notesHtml}
        </div>
      </div>
    `).join('');

    startScreen.style.display = 'none';
    resultsBar.style.display = 'none';
    testScreen.style.display = 'block';
    submitBtn.style.display = 'inline-block';
    submitBtn.disabled = false;
    retakeBtn.style.display = 'none';
    window.scrollTo({top: testScreen.offsetTop - 90, behavior:'smooth'});
  }

  function checkField(el){
    const correctRaw = el.dataset.correct;
    const tol = parseFloat(el.dataset.tol || '0');
    const userVal = el.value;

    if(el.tagName === 'SELECT'){
      // A blank selection is treated as equivalent to an explicit "N/A" —
      // for FSET-style questions, leaving an unaffected column's account
      // label blank shouldn't be marked wrong.
      const blankIsNA = normalize(correctRaw) === 'n/a' && userVal.trim() === '';
      const ok = blankIsNA || normalize(userVal) === normalize(correctRaw);
      el.classList.remove('correct','incorrect');
      el.classList.add(ok ? 'correct' : 'incorrect');
      return ok;
    }

    const correctNum = parseFloat(correctRaw);
    // A blank numeric field is treated as equivalent to an explicit "0" —
    // for FSET-style questions, leaving an unaffected column's dollar
    // amount blank shouldn't be marked wrong.
    const blankIsZero = userVal.trim() === '' && !isNaN(correctNum) && correctNum === 0;
    const userNum = parseFloat((userVal || '').toString().replace(/[$,%\s]/g,''));
    let ok;
    if(blankIsZero){
      ok = true;
    } else if(isNaN(userNum)){
      ok = false;
    } else if(!isNaN(correctNum)){
      ok = Math.abs(userNum - correctNum) <= (tol || Math.max(0.5, Math.abs(correctNum) * 0.01));
    } else {
      ok = normalize(userVal) === normalize(correctRaw);
    }
    el.classList.remove('correct','incorrect');
    el.classList.add(ok ? 'correct' : 'incorrect');
    return ok;
  }

  function submitTest(){
    let totalRight = 0, totalFields = 0;
    const perQuestion = [];

    document.querySelectorAll('.mt-q').forEach(qEl => {
      const bankId = qEl.dataset.bankId;
      const fields = Array.from(qEl.querySelectorAll('input[data-correct], select[data-correct]'));
      let right = 0;
      fields.forEach(el => { if(checkField(el)) right++; });
      totalRight += right;
      totalFields += fields.length;
      perQuestion.push({ bankId, right, of: fields.length });

      const notesEl = qEl.querySelector('.hw-notes');
      if(notesEl) notesEl.classList.toggle('show', right < fields.length);

      // per-question mini score badge, inserted once
      let badge = qEl.querySelector('.mt-q-score');
      if(!badge){
        badge = document.createElement('div');
        badge.className = 'mt-q-score';
        qEl.insertBefore(badge, qEl.querySelector('.hw-notes'));
      }
      badge.textContent = `${right} / ${fields.length} correct on this question`;
    });

    const pct = totalFields ? Math.round((totalRight/totalFields)*100) : 0;
    let msg = "Solid \u2014 review the notes on anything marked wrong.";
    if(pct === 100) msg = "Perfect score. You're ready for this material.";
    else if(pct >= 80) msg = "Strong result \u2014 a light review of the misses will lock it in.";
    else if(pct < 50) msg = "Worth another full pass through the HW Practice page before retesting.";

    resultsBar.style.display = 'block';
    resultsBar.innerHTML = `
      <div class="eyebrow">Results</div>
      <div class="score">${totalRight} / ${totalFields}</div>
      <p class="text-soft">${pct}% correct across ${currentSet.length} question${currentSet.length===1?'':'s'} \u2014 ${msg}</p>
    `;
    window.scrollTo({top: resultsBar.offsetTop - 90, behavior:'smooth'});

    submitBtn.style.display = 'none';
    retakeBtn.style.display = 'inline-block';
  }

  document.querySelectorAll('.mt-count-btn').forEach(btn => {
    btn.addEventListener('click', () => startTest(parseInt(btn.dataset.count, 10)));
  });
  submitBtn.addEventListener('click', submitTest);
  retakeBtn.addEventListener('click', () => startTest(currentSet.length));
  newTestBtn.addEventListener('click', () => {
    testScreen.style.display = 'none';
    resultsBar.style.display = 'none';
    startScreen.style.display = 'block';
    window.scrollTo({top: startScreen.offsetTop - 90, behavior:'smooth'});
  });
}
