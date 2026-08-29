// ============================================================
// Interactive widgets shared across pages.
// Each init function no-ops if its root element isn't on the page.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initProductivityFormula();
  initTeamDiagnostic();
  initPracticeLab();
});

/* ================= Team Productivity Formula (MGT 6050) ================= */
function initProductivityFormula(){
  const widget = document.getElementById('productivity-widget');
  if(!widget) return;

  const potentialInput = document.getElementById('pf-potential');
  const lossesInput = document.getElementById('pf-losses');
  const synergyInput = document.getElementById('pf-synergy');
  const potentialVal = document.getElementById('pf-potential-val');
  const lossesVal = document.getElementById('pf-losses-val');
  const synergyVal = document.getElementById('pf-synergy-val');
  const svg = document.getElementById('pf-svg');
  const readout = document.getElementById('pf-actual');
  const readoutWrap = readout ? readout.closest('.formula-readout') : null;

  function render(){
    const potential = parseInt(potentialInput.value, 10);
    const losses = parseInt(lossesInput.value, 10);
    const synergy = parseInt(synergyInput.value, 10);
    const actual = potential - losses + synergy;

    potentialVal.textContent = potential;
    lossesVal.textContent = losses;
    synergyVal.textContent = synergy;
    readout.textContent = actual;

    readoutWrap.classList.remove('positive','negative');
    readoutWrap.classList.add(actual >= potential ? 'positive' : 'negative');

    // scale: 0..140 maps to 0..380px
    const scale = 380 / 140;
    const potW = Math.max(0, potential) * scale;
    const actW = Math.max(0, Math.min(140, actual)) * scale;
    const actualColor = actual >= potential ? 'var(--gold-deep)' : 'var(--rust)';

    svg.innerHTML = `
      <rect x="10" y="20" width="380" height="1" fill="var(--paper-3)"></rect>
      <text x="10" y="14" font-family="IBM Plex Mono, monospace" font-size="9" fill="var(--text-soft)">POTENTIAL</text>
      <rect x="10" y="24" width="${potW}" height="26" rx="4" fill="#DCD6C4"></rect>
      <text x="${10+potW+8}" y="42" font-family="IBM Plex Mono, monospace" font-size="11" fill="var(--text-soft)">${potential}</text>

      <text x="10" y="76" font-family="IBM Plex Mono, monospace" font-size="9" fill="var(--text-soft)">ACTUAL (POTENTIAL − LOSSES + SYNERGY)</text>
      <rect x="10" y="86" width="${actW}" height="26" rx="4" fill="${actualColor}"></rect>
      <text x="${10+actW+8}" y="104" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="600" fill="var(--ink)">${actual}</text>

      <line x1="${10+potW}" y1="20" x2="${10+potW}" y2="118" stroke="var(--text-soft)" stroke-dasharray="2 3" stroke-width="1"></line>
    `;
  }

  [potentialInput, lossesInput, synergyInput].forEach(el => el.addEventListener('input', render));
  render();
}

/* ================= Team Diagnostic Tool (MGT 6050) ================= */
function initTeamDiagnostic(){
  const tool = document.getElementById('team-diagnostic');
  if(!tool) return;

  const checks = Array.from(tool.querySelectorAll('.diagnostic-checks input[type="checkbox"][data-element]'));
  const mutualCheck = tool.querySelector('input[data-element="mutual"]');
  const conflictCheck = document.getElementById('diag-conflict');
  const growthCheck = document.getElementById('diag-growth');
  const stageEl = document.getElementById('diag-stage');
  const explainEl = document.getElementById('diag-explain');

  const LABELS = {
    small: 'a small enough number of people',
    skills: 'complementary skills',
    purpose: 'a common, owned purpose',
    goals: 'specific performance goals',
    approach: 'a common working approach',
    mutual: 'mutual accountability',
  };

  function evaluate(){
    const checkedKeys = checks.filter(c => c.checked).map(c => c.dataset.element);
    const count = checkedKeys.length;
    const missing = Object.keys(LABELS).filter(k => !checkedKeys.includes(k));

    let stage, cls, explain;

    if(conflictCheck.checked){
      stage = 'Pseudo-Team';
      cls = 'stage-pseudo';
      explain = 'Conflict without the underlying discipline is the lowest point on the performance curve — worse than a plain working group, because individual effort creates friction instead of results. The only way out is refocusing on performance: goals, work-products, and how members contribute.';
    } else if(count === 6 && growthCheck.checked){
      stage = 'High-Performing Team';
      cls = 'stage-high';
      explain = 'All six team-basics elements are in place, plus deep mutual commitment to each other\u2019s growth. This is the top of the curve — and many project teams never last long enough to reach it, so this is worth protecting.';
    } else if(count === 6){
      stage = 'Real Team';
      cls = 'stage-real';
      explain = 'All six elements are checked, including the decisive one \u2014 mutual accountability. This clears the minimum bar for a real team.';
    } else if(mutualCheck.checked && count >= 4){
      stage = 'Real Team';
      cls = 'stage-real';
      explain = `Mutual accountability is checked and most other elements are in place. Tighten up: ${missing.map(k=>LABELS[k]).join(', ')}.`;
    } else if(count >= 3){
      stage = 'Potential Team';
      cls = '';
      explain = `Real progress, but the group hasn't crossed into a real team yet. Missing: ${missing.map(k=>LABELS[k]).join(', ')}${!mutualCheck.checked ? ' \u2014 and mutual accountability specifically is the steepest gap to close.' : '.'}`;
    } else if(count >= 1){
      stage = 'Working Group';
      cls = '';
      explain = `Mostly individual effort so far, with only ${count} element${count===1?'':'s'} in place. Missing: ${missing.map(k=>LABELS[k]).join(', ')}.`;
    } else {
      stage = 'Check the boxes above';
      cls = '';
      explain = 'Tick what\u2019s actually true of the group to see where it likely sits on the performance curve.';
    }

    stageEl.textContent = stage;
    stageEl.className = 'diag-stage ' + cls;
    explainEl.textContent = explain;
  }

  [...checks, conflictCheck, growthCheck].forEach(el => el.addEventListener('change', evaluate));
  evaluate();
}

/* ================= Accounting Practice Lab (ACCTG 6000) ================= */
function initPracticeLab(){
  const tool = document.getElementById('practice-lab-tool');
  if(!tool) return;

  const typeSelect = document.getElementById('lab-type');
  const newBtn = document.getElementById('lab-new');
  const promptEl = document.getElementById('lab-prompt');
  const answerInput = document.getElementById('lab-answer');
  const unitEl = document.getElementById('lab-unit');
  const checkBtn = document.getElementById('lab-check');
  const feedbackEl = document.getElementById('lab-feedback');

  const TYPES = ['roa','margin','turnover','roe','roa-decomp','equity-mult','roe-leverage'];
  let current = null;

  function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
  function roundTo(n, nearest){ return Math.round(n/nearest)*nearest; }
  function fmt(n){ return '$' + n.toLocaleString('en-US'); }

  function genROA(){
    const assets = pick([4,5,6,8,10,12,15,18,20,25,30,40,50]) * 1000000;
    const targetPct = pick([2,3,4,5,6,8,9,10,12,15,18,20]);
    const ni = roundTo(assets * targetPct/100, 1000);
    const answer = Math.round((ni/assets*100) * 100) / 100;
    return {
      prompt: `A company reports Net Income of ${fmt(ni)} and Average Total Assets of ${fmt(assets)}. Calculate its ROA.`,
      unit: '%', answer, tolerance: 0.15,
      steps: [`ROA = Net Income \u00f7 Average Total Assets`, `= ${fmt(ni)} \u00f7 ${fmt(assets)}`, `= ${answer}%`],
    };
  }
  function genMargin(){
    const sales = pick([5,6,8,10,12,15,20,25,30,40,50]) * 1000000;
    const targetPct = pick([1,2,3,4,5,6,8,10,12,15,20]);
    const ni = roundTo(sales * targetPct/100, 1000);
    const answer = Math.round((ni/sales*100) * 100) / 100;
    return {
      prompt: `A company reports Net Income of ${fmt(ni)} and Net Sales of ${fmt(sales)}. Calculate its Net Profit Margin.`,
      unit: '%', answer, tolerance: 0.15,
      steps: [`Net Profit Margin = Net Income \u00f7 Net Sales`, `= ${fmt(ni)} \u00f7 ${fmt(sales)}`, `= ${answer}%`],
    };
  }
  function genTurnover(){
    const assets = pick([3,4,5,6,8,10,12,15,20,25]) * 1000000;
    const targetX = pick([0.5,0.8,1,1.2,1.5,2,2.5,3,4]);
    const sales = roundTo(assets * targetX, 100000);
    const answer = Math.round((sales/assets) * 100) / 100;
    return {
      prompt: `A company reports Net Sales of ${fmt(sales)} and Average Total Assets of ${fmt(assets)}. Calculate its Total Asset Turnover.`,
      unit: 'x', answer, tolerance: 0.05,
      steps: [`Total Asset Turnover = Net Sales \u00f7 Average Total Assets`, `= ${fmt(sales)} \u00f7 ${fmt(assets)}`, `= ${answer}x`],
    };
  }
  function genROE(){
    const equity = pick([2,3,4,5,6,8,10,12,15,20]) * 1000000;
    const targetPct = pick([5,8,10,12,15,18,20,22,25,30]);
    const ni = roundTo(equity * targetPct/100, 1000);
    const answer = Math.round((ni/equity*100) * 100) / 100;
    return {
      prompt: `A company reports Net Income of ${fmt(ni)} and Average Stockholders' Equity of ${fmt(equity)}. Calculate its ROE.`,
      unit: '%', answer, tolerance: 0.15,
      steps: [`ROE = Net Income \u00f7 Average Stockholders' Equity`, `= ${fmt(ni)} \u00f7 ${fmt(equity)}`, `= ${answer}%`],
    };
  }
  function genROADecomp(){
    const margin = pick([2,3,4,5,6,8,10,12,15,20]);
    const turnover = pick([0.5,0.8,1,1.5,2,2.5,3,4]);
    const answer = Math.round((margin/100*turnover*100) * 100) / 100;
    return {
      prompt: `A company has a Net Profit Margin of ${margin}% and a Total Asset Turnover of ${turnover}x. Calculate its ROA.`,
      unit: '%', answer, tolerance: 0.15,
      steps: [`ROA = Net Profit Margin \u00d7 Total Asset Turnover`, `= ${margin}% \u00d7 ${turnover}`, `= ${answer}%`],
    };
  }
  function genEquityMult(){
    const equity = pick([2,3,4,5,6,8,10,12,15]) * 1000000;
    const targetX = pick([1.2,1.5,1.8,2,2.5,3,3.5,4]);
    const assets = roundTo(equity * targetX, 100000);
    const answer = Math.round((assets/equity) * 100) / 100;
    return {
      prompt: `A company has Average Total Assets of ${fmt(assets)} and Average Stockholders' Equity of ${fmt(equity)}. Calculate its Equity Multiplier.`,
      unit: 'x', answer, tolerance: 0.05,
      steps: [`Equity Multiplier = Average Total Assets \u00f7 Average Stockholders' Equity`, `= ${fmt(assets)} \u00f7 ${fmt(equity)}`, `= ${answer}x`],
    };
  }
  function genROELeverage(){
    const roa = pick([2,3,4,5,6,8,10,12,15]);
    const mult = pick([1.2,1.5,1.8,2,2.5,3,3.5,4]);
    const answer = Math.round((roa*mult) * 100) / 100;
    return {
      prompt: `A company has an ROA of ${roa}% and an Equity Multiplier of ${mult}. Calculate its ROE.`,
      unit: '%', answer, tolerance: 0.15,
      steps: [`ROE = ROA \u00d7 Equity Multiplier`, `= ${roa}% \u00d7 ${mult}`, `= ${answer}%`],
    };
  }

  const GENERATORS = {
    'roa': genROA, 'margin': genMargin, 'turnover': genTurnover, 'roe': genROE,
    'roa-decomp': genROADecomp, 'equity-mult': genEquityMult, 'roe-leverage': genROELeverage,
  };

  function newProblem(){
    const chosenType = typeSelect.value === 'mixed' ? pick(TYPES) : typeSelect.value;
    current = GENERATORS[chosenType]();
    promptEl.textContent = current.prompt;
    unitEl.textContent = current.unit === '%' ? '(%)' : '(x)';
    answerInput.value = '';
    answerInput.focus();
    feedbackEl.classList.remove('show','correct','incorrect');
    feedbackEl.innerHTML = '';
  }

  function checkAnswer(){
    if(!current) return;
    const raw = answerInput.value.trim().replace('%','').replace('x','').replace('X','');
    const val = parseFloat(raw);
    if(isNaN(val)){
      feedbackEl.classList.add('show');
      feedbackEl.classList.remove('correct'); feedbackEl.classList.add('incorrect');
      feedbackEl.innerHTML = `<b>Enter a number</b>Type just the number (e.g. ${current.answer}) \u2014 the unit is shown next to the box.`;
      return;
    }
    const correct = Math.abs(val - current.answer) <= current.tolerance;
    feedbackEl.classList.add('show');
    feedbackEl.classList.toggle('correct', correct);
    feedbackEl.classList.toggle('incorrect', !correct);
    const stepsHtml = `<ol>${current.steps.map(s => `<li>${s}</li>`).join('')}</ol>`;
    if(correct){
      feedbackEl.innerHTML = `<b>Correct \u2014 ${current.answer}${current.unit}</b>${stepsHtml}`;
    } else {
      feedbackEl.innerHTML = `<b>Not quite \u2014 correct answer is ${current.answer}${current.unit}</b>Here's how to get there:${stepsHtml}`;
    }
  }

  newBtn.addEventListener('click', newProblem);
  checkBtn.addEventListener('click', checkAnswer);
  answerInput.addEventListener('keydown', (e) => { if(e.key === 'Enter'){ e.preventDefault(); checkAnswer(); } });
  typeSelect.addEventListener('change', newProblem);

  newProblem();
}
