// ============================================================
// MGT 6050 mock test — draws a random subset of multiple-choice
// questions from QUIZ_QUESTIONS (the same bank behind the Unit 1
// quiz, itself built from the notes/flashcards/study guide),
// renders them all at once, grades on submit, and shows explanations.
// ============================================================

document.addEventListener('DOMContentLoaded', initTeamworkMockTest);

function initTeamworkMockTest(){
  const startScreen = document.getElementById('mt-start');
  const testScreen = document.getElementById('mt-test');
  const resultsBar = document.getElementById('mt-results');
  const questionsWrap = document.getElementById('mt-questions');
  const submitBtn = document.getElementById('mt-submit');
  const retakeBtn = document.getElementById('mt-retake');
  const newTestBtn = document.getElementById('mt-new-test');
  const poolCountEl = document.getElementById('mt-pool-count');

  // Prefer a combined multi-unit pool if the page provides one (MGT_MOCK_POOL / MGT_MOCK_LABELS),
  // otherwise fall back to the single-unit QUIZ_QUESTIONS / SOURCE_LABELS globals.
  const QUESTION_POOL = (typeof MGT_MOCK_POOL !== 'undefined') ? MGT_MOCK_POOL
    : (typeof QUIZ_QUESTIONS !== 'undefined' ? QUIZ_QUESTIONS : null);
  const LABELS = (typeof MGT_MOCK_LABELS !== 'undefined') ? MGT_MOCK_LABELS
    : (typeof SOURCE_LABELS !== 'undefined' ? SOURCE_LABELS : {});

  if(!startScreen || !QUESTION_POOL) return;

  poolCountEl.textContent = QUESTION_POOL.length;
  let currentSet = [];
  const optionLetters = ['A','B','C','D'];

  function shuffled(arr){
    const a = [...arr];
    for(let i=a.length-1;i>0;i--){ const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
    return a;
  }

  function startTest(count){
    const n = Math.min(count, QUESTION_POOL.length);
    currentSet = shuffled(QUESTION_POOL).slice(0, n);

    questionsWrap.innerHTML = currentSet.map((q, i) => `
      <div class="hw-q mt-q" data-q-index="${i}">
        <h3><span class="hw-num">Q${i+1}</span>${LABELS[q.source] || 'Synthesis'}</h3>
        <p class="quiz-question" style="margin-top:0;">${q.prompt}</p>
        <div class="mc-options" data-correct-index="${q.correctIndex}">
          ${q.options.map((opt, oi) => `
            <button type="button" class="mc-option" data-index="${oi}">
              <span class="opt-letter">${optionLetters[oi]}</span><span>${opt}</span>
            </button>
          `).join('')}
        </div>
        <div class="hw-notes">
          <b id="mt-fb-${i}">Explanation</b>
          ${q.explanation}
        </div>
      </div>
    `).join('');

    // click-to-select (not graded yet)
    questionsWrap.querySelectorAll('.mc-options').forEach(group => {
      group.querySelectorAll('.mc-option').forEach(btn => {
        btn.addEventListener('click', () => {
          group.querySelectorAll('.mc-option').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
        });
      });
    });

    startScreen.style.display = 'none';
    resultsBar.style.display = 'none';
    testScreen.style.display = 'block';
    submitBtn.style.display = 'inline-block';
    submitBtn.disabled = false;
    retakeBtn.style.display = 'none';
    window.scrollTo({top: testScreen.offsetTop - 90, behavior:'smooth'});
  }

  function submitTest(){
    let right = 0;
    const groups = Array.from(questionsWrap.querySelectorAll('.mc-options'));

    groups.forEach((group, i) => {
      const correctIndex = parseInt(group.dataset.correctIndex, 10);
      const selected = group.querySelector('.mc-option.selected');
      const selectedIndex = selected ? parseInt(selected.dataset.index, 10) : -1;
      const correct = selectedIndex === correctIndex;
      if(correct) right++;

      group.querySelectorAll('.mc-option').forEach(btn => {
        btn.classList.add('disabled');
        btn.disabled = true;
        const idx = parseInt(btn.dataset.index, 10);
        if(idx === correctIndex) btn.classList.add('correct');
        else if(idx === selectedIndex) btn.classList.add('incorrect');
      });

      const q = currentSet[i];
      const fbLabel = document.getElementById(`mt-fb-${i}`);
      if(fbLabel){
        fbLabel.textContent = correct ? (q.correctFeedback || "That's right.") : (q.incorrectFeedback || "Not quite.");
      }
      const notesEl = group.closest('.hw-q').querySelector('.hw-notes');
      if(notesEl) notesEl.classList.toggle('show', !correct);

      let badge = group.closest('.hw-q').querySelector('.mt-q-score');
      if(!badge){
        badge = document.createElement('div');
        badge.className = 'mt-q-score';
        group.closest('.hw-q').insertBefore(badge, notesEl);
      }
      badge.textContent = correct ? 'Correct' : (selectedIndex === -1 ? 'Not answered' : 'Incorrect');
    });

    const total = groups.length;
    const pct = total ? Math.round((right/total)*100) : 0;
    let msg = "Solid \u2014 review the explanations on anything marked wrong.";
    if(pct === 100) msg = "Perfect score. You know this unit cold.";
    else if(pct >= 80) msg = "Strong grasp of the material \u2014 a light review will lock it in.";
    else if(pct < 50) msg = "Worth another pass through the source sections and flashcards before retesting.";

    resultsBar.style.display = 'block';
    resultsBar.innerHTML = `
      <div class="eyebrow">Results</div>
      <div class="score">${right} / ${total}</div>
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
