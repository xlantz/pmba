// ============================================================
// Homework practice worksheet — generic auto-grading engine.
// Each field carries data-correct (and optional data-tol) attributes;
// this script scores a question, marks fields, and reveals notes.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.hw-q[data-gradable="true"]').forEach(initHwQuestion);
  initHwFilters();
  initStatementModals();
});

function initStatementModals(){
  // Event delegation so this also works for content injected later
  // (e.g. the mock test renders questions well after DOMContentLoaded).
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.stmt-trigger');
    if(trigger){
      const modal = document.getElementById(trigger.dataset.stmtTarget);
      if(modal) modal.classList.add('open');
      return;
    }
    const closeBtn = e.target.closest('.stmt-modal-close');
    if(closeBtn){
      const overlay = closeBtn.closest('.stmt-modal-overlay');
      if(overlay) overlay.classList.remove('open');
      return;
    }
    if(e.target.classList && e.target.classList.contains('stmt-modal-overlay')){
      e.target.classList.remove('open');
    }
  });
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
      document.querySelectorAll('.stmt-modal-overlay.open').forEach(o => o.classList.remove('open'));
    }
  });
}

function initHwFilters(){
  const list = document.getElementById('hw-list');
  if(!list) return;
  const unitChips = document.querySelectorAll('.chip-filter [data-hw-unit]');
  const topicChips = document.querySelectorAll('.chip-filter [data-hw-topic]');
  const countEl = document.getElementById('hw-filter-count');
  const cards = Array.from(list.querySelectorAll('.hw-q[data-unit]'));
  let activeUnit = 'all';
  let activeTopic = 'all';

  function apply(){
    let visible = 0;
    cards.forEach(card => {
      const show = (activeUnit === 'all' || card.dataset.unit === activeUnit)
                && (activeTopic === 'all' || card.dataset.topic === activeTopic);
      card.style.display = show ? '' : 'none';
      if(show) visible++;
    });
    if(countEl) countEl.textContent = `${visible} of ${cards.length} question${cards.length===1?'':'s'}`;
  }

  unitChips.forEach(chip => {
    chip.addEventListener('click', () => {
      unitChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeUnit = chip.dataset.hwUnit;
      apply();
    });
  });
  topicChips.forEach(chip => {
    chip.addEventListener('click', () => {
      topicChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeTopic = chip.dataset.hwTopic;
      apply();
    });
  });

  apply();
}

function initHwQuestion(qEl){
  const checkBtn = qEl.querySelector('.hw-check');
  const resetBtn = qEl.querySelector('.hw-reset');
  const scoreEl = qEl.querySelector('.hw-score');
  const notesEl = qEl.querySelector('.hw-notes');
  if(!checkBtn) return;

  function fields(){
    return Array.from(qEl.querySelectorAll('input[data-correct], select[data-correct]'));
  }

  function normalize(str){
    return (str || '').toString().trim().toLowerCase().replace(/[$,%]/g,'').replace(/\s+/g,' ');
  }

  function checkField(el){
    const correctRaw = el.dataset.correct;
    const tol = parseFloat(el.dataset.tol || '0');
    let userVal = el.tagName === 'SELECT' ? el.value : el.value;

    if(el.tagName === 'SELECT'){
      const ok = normalize(userVal) === normalize(correctRaw);
      el.classList.remove('correct','incorrect');
      el.classList.add(ok ? 'correct' : 'incorrect');
      return ok;
    }

    // numeric text input
    const userNum = parseFloat((userVal || '').toString().replace(/[$,%\s]/g,''));
    const correctNum = parseFloat(correctRaw);
    let ok;
    if(isNaN(userNum)){
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

  function check(){
    const flds = fields();
    let right = 0;
    flds.forEach(el => { if(checkField(el)) right++; });
    if(scoreEl) scoreEl.textContent = `${right} / ${flds.length} correct`;
    if(notesEl){
      notesEl.classList.toggle('show', right < flds.length);
    }
  }

  function reset(){
    fields().forEach(el => {
      el.classList.remove('correct','incorrect');
      if(el.tagName === 'SELECT') el.selectedIndex = 0;
      else el.value = '';
    });
    if(scoreEl) scoreEl.textContent = '';
    if(notesEl) notesEl.classList.remove('show');
  }

  checkBtn.addEventListener('click', check);
  if(resetBtn) resetBtn.addEventListener('click', reset);
}
