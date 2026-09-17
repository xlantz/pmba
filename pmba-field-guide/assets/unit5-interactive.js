// ============================================================
// MGT 6050 Unit 5 — "Creativity practices" diagnostic.
// Classify a practice as supporting or undermining creative,
// innovative output, drawing on all three sources.
// ============================================================

document.addEventListener('DOMContentLoaded', initCreativityAudit);

const CREATIVITY_SCENARIOS = [
  {
    text: "A team leader gives every member a shared, clearly-understood vision of what the project is actually trying to achieve, and checks that everyone is genuinely committed to it.",
    type: "supports",
  },
  {
    text: "A team is told to simply ask an AI chatbot, 'How can we improve customer satisfaction?' and use whatever comes back as the final answer.",
    type: "undermines",
  },
  {
    text: "Before using an AI tool, team members spend 20 minutes individually generating their own ideas, then bring them to the group.",
    type: "supports",
  },
  {
    text: "A team accepts an AI chatbot's very first suggested solution without asking any follow-up questions.",
    type: "undermines",
  },
  {
    text: "A director shows an unfinished, rough version of a scene to the whole crew for feedback, well before it's polished.",
    type: "supports",
  },
  {
    text: "A peer review group is given formal authority to force a director to make specific changes to their film.",
    type: "undermines",
  },
  {
    text: "New hires are told at orientation about times the company's own leadership made significant mistakes, to signal that questioning things is welcome.",
    type: "supports",
  },
  {
    text: "A postmortem uses the exact same fixed template every single time, and mostly highlights what went well.",
    type: "undermines",
  },
  {
    text: "A manager assumes that adding more people with different job functions to a team will automatically produce more innovative results, with no other changes.",
    type: "undermines",
  },
  {
    text: "A team designates one member to consolidate ideas after a brainstorm, then has the AI critique and challenge those ideas before a final decision is made.",
    type: "supports",
  },
];

const CREATIVITY_TYPES = {
  "supports": {
    label: "Supports creativity/innovation",
    explain: "This reflects a practice the research (or Pixar's own experience) directly associates with better creative output — whether it's a shared vision, individual ideation before groupthink sets in, showing unfinished work safely, or genuine follow-up questioning of an AI's suggestions.",
  },
  "undermines": {
    label: "Undermines creativity/innovation",
    explain: "This reflects exactly the pattern the sources warn against — treating AI as an oracle instead of a conversation partner, giving a feedback group real authority (which breaks candid feedback), assuming diversity alone guarantees innovation, or letting a process like a postmortem become predictable enough to game.",
  },
};

function initCreativityAudit(){
  const tool = document.getElementById('creativity-audit-tool');
  if(!tool) return;

  const scenarioEl = document.getElementById('creativity-scenario');
  const optionsEl = document.getElementById('creativity-options');
  const feedbackEl = document.getElementById('creativity-feedback');
  const newBtn = document.getElementById('creativity-new');

  let current = null;
  let usedIndices = [];

  function pickScenario(){
    if(usedIndices.length >= CREATIVITY_SCENARIOS.length) usedIndices = [];
    let idx;
    do { idx = Math.floor(Math.random() * CREATIVITY_SCENARIOS.length); } while(usedIndices.includes(idx));
    usedIndices.push(idx);
    return CREATIVITY_SCENARIOS[idx];
  }

  function render(){
    current = pickScenario();
    scenarioEl.textContent = current.text;
    feedbackEl.classList.remove('show');
    feedbackEl.innerHTML = '';
    const typeKeys = Object.keys(CREATIVITY_TYPES);
    optionsEl.innerHTML = typeKeys.map(key => `
      <button type="button" class="adj-option" data-type="${key}">${CREATIVITY_TYPES[key].label}</button>
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
    feedbackEl.innerHTML = `<b>${correct ? "Correct!" : "Not quite — correct answer: " + CREATIVITY_TYPES[current.type].label}</b>${CREATIVITY_TYPES[current.type].explain}`;
  }

  newBtn.addEventListener('click', render);
  render();
}
