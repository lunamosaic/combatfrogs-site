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

// ===== Allowlist modal logic =====
(function(){
  const openBtn = document.getElementById('open-wl');
  const modal   = document.getElementById('wl-modal');
  const closeEls= modal ? modal.querySelectorAll('[data-close]') : [];
  const form    = document.getElementById('allowlist-form');
  const msg     = document.getElementById('wl-msg');

  function open(){ if(!modal) return; modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; }
  function close(){ if(!modal) return; modal.setAttribute('aria-hidden','true'); document.body.style.overflow=''; msg && (msg.textContent=''); }

  openBtn && openBtn.addEventListener('click', open);
  closeEls.forEach(el=>el.addEventListener('click', close));
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') close(); });

  // submit
  form && form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    if(!form.action) { alert('Form action URL missing'); return; }
    msg.textContent = 'Sending…'; msg.dataset.state='pending';
    try{
      const res  = await fetch(form.action, { method:'POST', body:new FormData(form) });
      const json = await res.json().catch(()=>({}));
      if(res.ok && (json.ok===true || Object.keys(json).length)){
        msg.textContent='Thanks! Application received 👊'; msg.dataset.state='ok'; form.reset();
        setTimeout(close, 1200);
      } else { throw new Error('Submit failed'); }
    }catch(err){
      msg.textContent='Error. Try again later.'; msg.dataset.state='err';
    }
  });
})();
