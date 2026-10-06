/* Learning-path helpers for ACCTG unit pages:
   - tier filter (Test core / Understand it / Go deeper)
   - open the source-block named in the URL hash
*/
(function(){
  function openBlock(block){
    if(!block) return;
    const t = block.querySelector('.source-toggle');
    if(!block.classList.contains('open')) { if(t) t.click(); } else if(t) t.setAttribute('aria-expanded','true');
  }
  function initTierFilter(){
    const bar = document.querySelector('.tier-filter');
    if(!bar) return;
    const btns = bar.querySelectorAll('[data-tier-filter]');
    const blocks = document.querySelectorAll('.source-block[data-tier]');
    btns.forEach(b => b.addEventListener('click', () => {
      btns.forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      const f = b.dataset.tierFilter;
      blocks.forEach(bl => {
        const tiers = (bl.dataset.tier || '').split(' ');
        const show = f === 'all' || tiers.includes(f) || (f === 'core' && tiers.includes('test'));
        bl.classList.toggle('tier-hidden', !show);
      });
    }));
  }
  function initHash(){
    const h = location.hash.replace('#','');
    if(!h) return;
    const el = document.getElementById(h);
    if(el && el.classList.contains('source-block')){
      openBlock(el);
      setTimeout(() => el.scrollIntoView({block:'start'}), 60);
    }
  }
  document.addEventListener('DOMContentLoaded', () => { initTierFilter(); initHash(); });
  window.addEventListener('hashchange', initHash);
})();
