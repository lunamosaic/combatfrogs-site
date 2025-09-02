
// year
const y = document.getElementById('y'); if(y) y.textContent = new Date().getFullYear();
// smooth anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id=a.getAttribute('href').slice(1), el=document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});
// accordion
document.querySelectorAll('.accordion .q').forEach(q=>{
  q.addEventListener('click',()=>{
    const qa=q.parentElement, a=qa.querySelector('.a');
    qa.classList.toggle('open'); a.style.maxHeight = qa.classList.contains('open') ? a.scrollHeight+'px' : '0px';
    q.querySelector('b').textContent = qa.classList.contains('open') ? '–' : '+';
  });
});
// lightbox
const lb=document.getElementById('lb'), lbimg=document.getElementById('lbimg'), gal=document.getElementById('gal');
if(gal){ gal.addEventListener('click', e=>{ const img=e.target.closest('img'); if(!img) return; lbimg.src=img.src; lb.style.display='flex'; }); }
if(lb){ lb.addEventListener('click', ()=> lb.style.display='none'); }
