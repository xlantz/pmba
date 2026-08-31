// ============================================================
// Team Contract Builder — autosaves to the student's own browser
// (localStorage), section by section. No data leaves the device.
// ============================================================

document.addEventListener('DOMContentLoaded', initTeamContractBuilder);

const TCB_STORAGE_KEY = 'mgt6050-team-contract-v1';

function initTeamContractBuilder(){
  const textareas = document.querySelectorAll('.tcb-section textarea');
  if(!textareas.length) return;

  const statusEl = document.getElementById('tcb-save-status');
  const clearBtn = document.getElementById('tcb-clear');
  const printBtn = document.getElementById('tcb-print');

  function load(){
    let saved = {};
    try {
      saved = JSON.parse(localStorage.getItem(TCB_STORAGE_KEY) || '{}');
    } catch(e){ saved = {}; }
    textareas.forEach(ta => {
      if(saved[ta.id]) ta.value = saved[ta.id];
    });
    updateStatus(Object.keys(saved).length > 0 ? 'Loaded your saved draft from this browser.' : 'Nothing saved yet — your answers save automatically as you type.');
  }

  function save(){
    const data = {};
    textareas.forEach(ta => { data[ta.id] = ta.value; });
    try {
      localStorage.setItem(TCB_STORAGE_KEY, JSON.stringify(data));
      updateStatus('Saved to this browser \u00b7 ' + new Date().toLocaleTimeString());
    } catch(e){
      updateStatus('Could not save (browser storage unavailable).');
    }
  }

  function updateStatus(msg){
    if(statusEl) statusEl.textContent = msg;
  }

  textareas.forEach(ta => {
    ta.addEventListener('input', () => save());
  });

  if(clearBtn){
    clearBtn.addEventListener('click', () => {
      if(!confirm('Clear all saved answers on this device? This cannot be undone.')) return;
      localStorage.removeItem(TCB_STORAGE_KEY);
      textareas.forEach(ta => { ta.value = ''; });
      updateStatus('Cleared.');
    });
  }

  if(printBtn){
    printBtn.addEventListener('click', () => window.print());
  }

  load();
}
