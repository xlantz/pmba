// ============================================================
// ACCTG 6000 Unit 6 — "Inventory method effects" diagnostic.
// Given a price trend and an effect, identify which costing
// method produces it.
// ============================================================

document.addEventListener('DOMContentLoaded', initMethodDrill);

const METHOD_SCENARIOS = [
  { text: "Costs are RISING throughout the year. Which method produces the LOWEST cost of goods sold?", type: "fifo" },
  { text: "Costs are RISING throughout the year. Which method produces the HIGHEST ending inventory?", type: "fifo" },
  { text: "Costs are RISING throughout the year. Which method produces the HIGHEST cost of goods sold?", type: "lifo" },
  { text: "Costs are RISING throughout the year. Which method produces the LOWEST ending inventory?", type: "lifo" },
  { text: "Costs are RISING throughout the year. Which method produces the HIGHEST gross profit?", type: "fifo" },
  { text: "Costs are FALLING throughout the year. Which method now produces the LOWEST cost of goods sold?", type: "lifo" },
  { text: "Costs are FALLING throughout the year. Which method now produces the HIGHEST ending inventory?", type: "lifo" },
  { text: "Costs are FALLING throughout the year. Which method now produces the HIGHEST cost of goods sold?", type: "fifo" },
  { text: "Costs are FALLING throughout the year. Which method now produces the LOWEST ending inventory?", type: "fifo" },
];

const METHOD_TYPES = {
  "fifo": {
    label: "FIFO",
    explain: "FIFO expenses the oldest costs first. When costs are rising, that means cheaper old costs go to COGS (lower COGS, higher inventory, higher profit). When costs are falling, the relationship flips — the oldest costs are now the more expensive ones.",
  },
  "lifo": {
    label: "LIFO",
    explain: "LIFO expenses the most recent costs first. When costs are rising, that means more expensive recent costs go to COGS (higher COGS, lower inventory, lower profit). When costs are falling, the relationship flips — the most recent costs are now the cheaper ones.",
  },
};

function initMethodDrill(){
  const tool = document.getElementById('method-drill-tool');
  if(!tool) return;

  const scenarioEl = document.getElementById('method-scenario');
  const optionsEl = document.getElementById('method-options');
  const feedbackEl = document.getElementById('method-feedback');
  const newBtn = document.getElementById('method-new');

  let current = null;
  let usedIndices = [];

  function pickScenario(){
    if(usedIndices.length >= METHOD_SCENARIOS.length) usedIndices = [];
    let idx;
    do { idx = Math.floor(Math.random() * METHOD_SCENARIOS.length); } while(usedIndices.includes(idx));
    usedIndices.push(idx);
    return METHOD_SCENARIOS[idx];
  }

  function render(){
    current = pickScenario();
    scenarioEl.textContent = current.text;
    feedbackEl.classList.remove('show');
    feedbackEl.innerHTML = '';
    const typeKeys = Object.keys(METHOD_TYPES);
    optionsEl.innerHTML = typeKeys.map(key => `
      <button type="button" class="adj-option" data-type="${key}">${METHOD_TYPES[key].label}</button>
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
    feedbackEl.innerHTML = `<b>${correct ? "Correct!" : "Not quite — correct answer: " + METHOD_TYPES[current.type].label}</b>${METHOD_TYPES[current.type].explain}`;
  }

  newBtn.addEventListener('click', render);
  render();
}
