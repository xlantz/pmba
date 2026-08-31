// ============================================================
// MGT 6050 Unit 2 interactive widgets.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initPsychSafetyAssessment();
  initTriageStepper();
});

/* ================= Psychological Safety Self-Assessment (Edmondson's 7-item survey) ================= */
const PSS_ITEMS = [
  "If I make a mistake on this team, it is not held against me.",
  "Members of this team are able to bring up problems and tough issues.",
  "People on this team sometimes accept others for being different.",
  "It is safe to take a risk on this team.",
  "It isn't difficult to ask other members of this team for help.",
  "No one on this team would deliberately act in a way that undermines my efforts.",
  "Working with members of this team, my unique skills and talents are valued and utilized.",
];

function initPsychSafetyAssessment(){
  const tool = document.getElementById('pss-tool');
  if(!tool) return;

  const itemsWrap = document.getElementById('pss-items');
  const resultEl = document.getElementById('pss-result');
  const submitBtn = document.getElementById('pss-submit');
  const resetBtn = document.getElementById('pss-reset');

  itemsWrap.innerHTML = PSS_ITEMS.map((text, i) => `
    <div class="pss-item" data-item="${i}">
      <div class="pss-item-text">${i+1}. ${text}</div>
      <div class="pss-scale" data-q="${i}">
        <button type="button" data-val="1">1 &mdash; Strongly disagree</button>
        <button type="button" data-val="2">2</button>
        <button type="button" data-val="3">3 &mdash; Neutral</button>
        <button type="button" data-val="4">4</button>
        <button type="button" data-val="5">5 &mdash; Strongly agree</button>
      </div>
    </div>
  `).join('');

  const answers = new Array(PSS_ITEMS.length).fill(null);

  itemsWrap.querySelectorAll('.pss-scale').forEach(scale => {
    const qIdx = parseInt(scale.dataset.q, 10);
    scale.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        scale.querySelectorAll('button').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        answers[qIdx] = parseInt(btn.dataset.val, 10);
      });
    });
  });

  function score(){
    if(answers.some(a => a === null)){
      resultEl.classList.add('show');
      resultEl.innerHTML = `<p style="color:#fff;">Answer all 7 items to see your result.</p>`;
      return;
    }
    const total = answers.reduce((a,b) => a+b, 0);
    const avg = total / PSS_ITEMS.length;
    let band, msg;
    if(avg >= 4.2){
      band = 'High psychological safety';
      msg = "This matches what Edmondson's research associates with teams that surface problems early, learn from mistakes, and let diverse expertise actually pay off.";
    } else if(avg >= 3.2){
      band = 'Moderate psychological safety';
      msg = "Some room to grow. Revisit the four tactics: make clear why voices matter, admit fallibility, actively invite input, and respond with curiosity instead of blame.";
    } else {
      band = 'Low psychological safety';
      msg = "This range is linked to suppressed problem-reporting and underused expertise. Worth raising directly with the team — naming the pattern is itself often the first step (see Rozovsky's \u201COuch\u201D example from Unit 1).";
    }
    resultEl.classList.add('show');
    resultEl.innerHTML = `
      <div class="score">${total} / 35</div>
      <p><strong>${band}</strong> (average ${avg.toFixed(1)} / 5)</p>
      <p>${msg}</p>
    `;
    resultEl.scrollIntoView({behavior:'smooth', block:'nearest'});
  }

  function reset(){
    answers.fill(null);
    itemsWrap.querySelectorAll('.pss-scale button').forEach(b => b.classList.remove('selected'));
    resultEl.classList.remove('show');
    resultEl.innerHTML = '';
  }

  submitBtn.addEventListener('click', score);
  resetBtn.addEventListener('click', reset);
}

/* ================= Triage / Stabilization / Long-Term Care stepper ================= */
const TRIAGE_STAGES = [
  {
    label: 'Triage',
    detail: "Look for critical problems within the team (is the work still relevant? is the interpersonal foundation cracked?) and across teams (is staffing coordinated? is multi-team membership overloading people?).",
  },
  {
    label: 'Stabilization',
    detail: "Apply targeted fixes matched to what triage found: re-scope or disband irrelevant work, bring in a neutral third party for cracked interpersonal foundations, centralize staffing rules, reduce overload from multi-team membership.",
  },
  {
    label: 'Long-Term Care',
    detail: "Stabilizing isn't the finish line. Run recurring health checks watching for the same five disaster ingredients recurring, and set deliberate limits on stretching star performers across too many teams.",
  },
];

function initTriageStepper(){
  const stepper = document.getElementById('triage-stepper');
  const detailEl = document.getElementById('triage-detail');
  if(!stepper || !detailEl) return;

  stepper.innerHTML = TRIAGE_STAGES.map((s, i) => `
    <div class="triage-node" data-stage="${i}" tabindex="0" role="button" aria-label="${s.label}">
      <span class="tn-num">${i+1}</span>${s.label}
    </div>
  `).join('');

  function show(i){
    stepper.querySelectorAll('.triage-node').forEach(n => n.classList.remove('active'));
    stepper.querySelector(`[data-stage="${i}"]`).classList.add('active');
    detailEl.innerHTML = `<b>${TRIAGE_STAGES[i].label}</b>${TRIAGE_STAGES[i].detail}`;
  }

  stepper.querySelectorAll('.triage-node').forEach(node => {
    const i = parseInt(node.dataset.stage, 10);
    node.addEventListener('click', () => show(i));
    node.addEventListener('keydown', (e) => { if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); show(i); } });
  });

  show(0);
}
