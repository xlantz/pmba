// ============================================================
// ACCTG 6000 Unit 3 — "Classify the adjustment" drill.
// ============================================================

document.addEventListener('DOMContentLoaded', initAdjDrill);

const ADJ_SCENARIOS = [
  { text: "A law firm collects a $6,000 retainer in January for services it will perform over the next three months.", type: "unearned" },
  { text: "A company's employees earn wages during the last week of December but aren't paid until the first week of January.", type: "accrued-expense" },
  { text: "A business pays $9,600 in July for a one-year equipment warranty starting August 1.", type: "prepaid" },
  { text: "A consulting firm completes a project in March but doesn't invoice the client until April.", type: "accrued-revenue" },
  { text: "A landlord receives six months of rent in advance from a tenant on January 1.", type: "unearned" },
  { text: "A company uses electricity throughout December but doesn't receive or pay the utility bill until January.", type: "accrued-expense" },
  { text: "A company pays a full year of liability insurance premiums up front on March 1.", type: "prepaid" },
  { text: "A bank has loaned money and earns interest on it throughout December, but the interest isn't paid to the bank by the borrower until January.", type: "accrued-revenue" },
];

const ADJ_TYPES = {
  "prepaid": { label: "Prepaid (Deferred) Expense", explain: "Cash was paid before the expense is recognized — a classic prepaid expense." },
  "unearned": { label: "Unearned (Deferred) Revenue", explain: "Cash was received before the revenue is earned — a classic unearned (deferred) revenue, recorded as a liability until earned." },
  "accrued-expense": { label: "Accrued Expense", explain: "The expense was incurred (economic activity happened) before cash was paid — a classic accrued expense." },
  "accrued-revenue": { label: "Accrued Revenue", explain: "The revenue was earned before cash was received — a classic accrued revenue." },
};

function initAdjDrill(){
  const tool = document.getElementById('adj-drill-tool');
  if(!tool) return;

  const scenarioEl = document.getElementById('adj-scenario');
  const optionsEl = document.getElementById('adj-options');
  const feedbackEl = document.getElementById('adj-feedback');
  const newBtn = document.getElementById('adj-new');

  let current = null;
  let usedIndices = [];

  function pickScenario(){
    if(usedIndices.length >= ADJ_SCENARIOS.length) usedIndices = [];
    let idx;
    do { idx = Math.floor(Math.random() * ADJ_SCENARIOS.length); } while(usedIndices.includes(idx));
    usedIndices.push(idx);
    return ADJ_SCENARIOS[idx];
  }

  function render(){
    current = pickScenario();
    scenarioEl.textContent = current.text;
    feedbackEl.classList.remove('show');
    feedbackEl.innerHTML = '';
    const typeKeys = Object.keys(ADJ_TYPES);
    optionsEl.innerHTML = typeKeys.map(key => `
      <button type="button" class="adj-option" data-type="${key}">${ADJ_TYPES[key].label}</button>
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
    feedbackEl.innerHTML = `<b>${correct ? "Correct!" : "Not quite — correct answer: " + ADJ_TYPES[current.type].label}</b>${ADJ_TYPES[current.type].explain}`;
  }

  newBtn.addEventListener('click', render);
  render();
}
