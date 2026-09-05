// ============================================================
// MGT 6050 Unit 3 — "Amazon Culture Audit" drill.
// Classify a real Amazon practice against Hansen's healthy-debate
// playbook or Edmondson's psychological safety requirement.
// ============================================================

document.addEventListener('DOMContentLoaded', initCultureAudit);

const CULTURE_SCENARIOS = [
  {
    text: "Employees are expected to sharply critique a colleague's idea in a meeting, then fully align behind whatever decision is ultimately made (\"disagree and commit\").",
    type: "healthy",
  },
  {
    text: "The Anytime Feedback Tool lets an employee send criticism about a colleague straight to that colleague's manager — the manager knows who sent it, but the subject of the criticism usually doesn't.",
    type: "unsafe",
  },
  {
    text: "At the annual Organization Level Review, managers debate and reassign subordinates' rankings, knowing the lowest-ranked employees may be let go.",
    type: "unsafe",
  },
  {
    text: "A meeting starts with the leader asking a genuine, non-leading question, then deliberately calling on a junior employee to share a dissenting view.",
    type: "healthy",
  },
  {
    text: "Employees describe making quiet pacts with colleagues to bury the same person in the feedback tool at once, or to praise each other in exchange.",
    type: "unsafe",
  },
  {
    text: "A manager tells the team, before a big proposal goes out, to assume it fails and list the most likely reasons why (a pre-mortem).",
    type: "healthy",
  },
];

const CULTURE_TYPES = {
  "healthy": {
    label: "Matches Hansen's healthy-debate playbook",
    explain: "This reflects genuine, rigorous debate aimed at a better decision — asking real questions, drawing out dissent, and stress-testing assumptions — without threatening anyone's standing on the team.",
  },
  "unsafe": {
    label: "Undermines psychological safety (Edmondson)",
    explain: "Even if it looks like \"rigorous feedback,\" the mechanism ties disagreement to anonymous reporting or ranking that can end someone's job — the opposite of Edmondson's \"felt permission for candor\" and Hansen's requirement that people can speak up without fear of retribution.",
  },
};

function initCultureAudit(){
  const tool = document.getElementById('culture-audit-tool');
  if(!tool) return;

  const scenarioEl = document.getElementById('culture-scenario');
  const optionsEl = document.getElementById('culture-options');
  const feedbackEl = document.getElementById('culture-feedback');
  const newBtn = document.getElementById('culture-new');

  let current = null;
  let usedIndices = [];

  function pickScenario(){
    if(usedIndices.length >= CULTURE_SCENARIOS.length) usedIndices = [];
    let idx;
    do { idx = Math.floor(Math.random() * CULTURE_SCENARIOS.length); } while(usedIndices.includes(idx));
    usedIndices.push(idx);
    return CULTURE_SCENARIOS[idx];
  }

  function render(){
    current = pickScenario();
    scenarioEl.textContent = current.text;
    feedbackEl.classList.remove('show');
    feedbackEl.innerHTML = '';
    const typeKeys = Object.keys(CULTURE_TYPES);
    optionsEl.innerHTML = typeKeys.map(key => `
      <button type="button" class="adj-option" data-type="${key}">${CULTURE_TYPES[key].label}</button>
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
    feedbackEl.innerHTML = `<b>${correct ? "Correct!" : "Not quite — correct answer: " + CULTURE_TYPES[current.type].label}</b>${CULTURE_TYPES[current.type].explain}`;
  }

  newBtn.addEventListener('click', render);
  render();
}
