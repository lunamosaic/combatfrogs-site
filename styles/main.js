const y=document.getElementById('y'); if(y) y.textContent=new Date().getFullYear();

// плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href').slice(1), el=document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'}); }
  });
});

// лайтбокс
const lb=document.getElementById('lb'), lbimg=document.getElementById('lbimg'), gal=document.getElementById('gal');
if(gal){ gal.addEventListener('click',e=>{ const img=e.target.closest('img'); if(!img) return; lbimg.src=img.src; lb.style.display='flex'; }); }
if(lb){ lb.addEventListener('click',()=>lb.style.display='none'); }
