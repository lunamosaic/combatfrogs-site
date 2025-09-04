// год в футере
const y=document.getElementById('y'); if(y) y.textContent=new Date().getFullYear();

// плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href').slice(1), el=document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'}); }
  });
});

// подхватываем твои SVG без переименований: берём первый существующий из списка
function tryLoad(img){
  const list=(img.getAttribute('data-candidates')||'').split(',').map(s=>s.trim()).filter(Boolean);
  if(!list.length) return;
  let i=0; img.onerror=()=>{ i++; if(i<list.length) img.src=list[i]; };
  img.src=list[0];
}
['svg-combat','svg-unit','svg-soon'].forEach(id=>{
  const el=document.getElementById(id);
  if(el) tryLoad(el);
});
