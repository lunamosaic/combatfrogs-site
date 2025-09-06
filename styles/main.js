// Footer year
const y=document.getElementById('y'); if(y) y.textContent=new Date().getFullYear();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href').slice(1), el=document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'}); }
  });
});

// Reveal on scroll
const io=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));


// === Allowlist Modal (landing-lite) ===
(function(){
  const FORM_URL = 'REPLACE_WITH_YOUR_FORM_URL'; // TODO: paste your Google Form / Apps Script URL
  const btn = document.getElementById('joinBtn');
  const modal = document.getElementById('allowlistModal');
  if(!btn || !modal) return;

  const frame = document.getElementById('wlFrame');
  const direct = document.getElementById('wlDirect');
  const spinner = modal.querySelector('.spinner');
  const closeEls = modal.querySelectorAll('[data-close]');

  let loaded = false, lastFocus = null;

  function openModal(){
    lastFocus = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    if(!loaded && FORM_URL){
      frame.src = FORM_URL;
      if(direct) direct.href = FORM_URL;
    }
    const closeBtn = modal.querySelector('.modal__close');
    if (closeBtn) closeBtn.focus();
    document.addEventListener('keydown', onKey);
  }
  function closeModal(){
    modal.hidden = true;
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onKey);
    if (lastFocus) lastFocus.focus();
  }
  function onKey(e){
    if(e.key === 'Escape') closeModal();
    if(e.key === 'Tab'){
      const f = modal.querySelectorAll('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])');
      if(!f.length) return;
      const first=f[0], last=f[f.length-1];
      if(e.shiftKey && document.activeElement===first){e.preventDefault();last.focus();}
      else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first.focus();}
    }
  }

  btn.addEventListener('click', openModal);
  closeEls.forEach(el => el.addEventListener('click', closeModal));
  modal.addEventListener('click', (e)=>{ if(e.target.classList.contains('modal__backdrop')) closeModal(); });
  if (frame) frame.addEventListener('load', ()=>{ loaded = true; if(spinner) spinner.style.display = 'none'; });
})();
