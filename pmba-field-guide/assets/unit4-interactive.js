// ============================================================
// MGT 6050 Unit 4 — "Fairness Climate Diagnostic" drill.
// Classify a scenario (mostly drawn from the Lehman Brothers case)
// against Henley & Price's fairness-climate research.
// ============================================================

document.addEventListener('DOMContentLoaded', initFairnessAudit);

const FAIRNESS_SCENARIOS = [
  {
    text: "A CEO and four allies take 25% of the year-end bonus pool for themselves, without discussing the full allocation with the rest of the board first.",
    type: "breaker",
  },
  {
    text: "A team leader includes every member in decisions that affect the team, and when a decision has to deviate from the usual process, explains the reasoning fully to everyone.",
    type: "builder",
  },
  {
    text: "Two co-leaders privately negotiate one of their own exit packages, then present it to the rest of the leadership team as already decided rather than open for discussion.",
    type: "breaker",
  },
  {
    text: "A manager consistently applies the same procedures to every team member, and openly explains any exceptions to the whole team.",
    type: "builder",
  },
  {
    text: "A leader skips a contentious meeting where major concerns are being discussed, allowing the group to voice doubts for the first time without any pushback from leadership.",
    type: "breaker",
  },
  {
    text: "A team actively works to build a strong 'we before me' mindset among its members, believing team interests should outweigh individual desires.",
    type: "builder",
  },
  {
    text: "Several senior team members receive minimal raises despite strong individual performance, while allies of the decision-maker receive large increases — with no consistent rationale shared with the group.",
    type: "breaker",
  },
  {
    text: "A large, newly-merged team makes a deliberate effort to create more opportunities for junior or quiet members to voice opinions on policies and procedures.",
    type: "builder",
  },
];

const FAIRNESS_TYPES = {
  "builder": {
    label: "Builds fairness climate",
    explain: "This reflects the practices Henley & Price's research associates with a stronger fairness climate: consistent procedures, real voice and inclusion in decisions, clear explanations for any deviations, and a collective (\"we before me\") orientation.",
  },
  "breaker": {
    label: "Breaks fairness climate",
    explain: "This reflects exactly the pattern that predicts a fairness-climate collapse: concentrated rewards for insiders, decisions made without consultation, and no consistent explanation offered to those left out — the same pattern that triggered Lehman Brothers' partner exodus.",
  },
};

function initFairnessAudit(){
  const tool = document.getElementById('fairness-audit-tool');
  if(!tool) return;

  const scenarioEl = document.getElementById('fairness-scenario');
  const optionsEl = document.getElementById('fairness-options');
  const feedbackEl = document.getElementById('fairness-feedback');
  const newBtn = document.getElementById('fairness-new');

  let current = null;
  let usedIndices = [];

  function pickScenario(){
    if(usedIndices.length >= FAIRNESS_SCENARIOS.length) usedIndices = [];
    let idx;
    do { idx = Math.floor(Math.random() * FAIRNESS_SCENARIOS.length); } while(usedIndices.includes(idx));
    usedIndices.push(idx);
    return FAIRNESS_SCENARIOS[idx];
  }

  function render(){
    current = pickScenario();
    scenarioEl.textContent = current.text;
    feedbackEl.classList.remove('show');
    feedbackEl.innerHTML = '';
    const typeKeys = Object.keys(FAIRNESS_TYPES);
    optionsEl.innerHTML = typeKeys.map(key => `
      <button type="button" class="adj-option" data-type="${key}">${FAIRNESS_TYPES[key].label}</button>
    `).join('');
    optionsEl.querySelectorAll('.adj-option').forEach(btn => {
      btn.addEventListener('click', () => answer(btn));
    });
  }

  function answer(btn){
    const chosen = btn.dataset.type;
    const correct = chosen === current.type;
    optionsEl.querySelectorAll('.adj-option').forEach(b => {
      b.disabled = true;
      if(b.dataset.type === current.type) b.classList.add('correct');
      else if(b === btn) b.classList.add('incorrect');
    });
    feedbackEl.classList.add('show');
    feedbackEl.innerHTML = `<b>${correct ? "Correct!" : "Not quite — correct answer: " + FAIRNESS_TYPES[current.type].label}</b>${FAIRNESS_TYPES[current.type].explain}`;
  }

  newBtn.addEventListener('click', render);
  render();
}
