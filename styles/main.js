// Год в футере
const y=document.getElementById('y'); if(y) y.textContent=new Date().getFullYear();

// Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href').slice(1), el=document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'}); }
  });
});

/**
 * Универсальная загрузка: берём первый существующий путь из data-candidates.
 * Работает и для IMG, и для фона.
 */
async function pickFirstExisting(urls){
  for(const url of urls){
    try{
      const res = await fetch(url, {method:'HEAD', cache:'no-store'});
      if(res.ok) return url;
    }catch(e){}
  }
  return null;
}

function listFromAttr(el, attr){
  return (el.getAttribute(attr)||'')
    .split(',').map(s=>s.trim()).filter(Boolean);
}

// 1) НЕОН-НАДПИСЬ (одна картинка)
(async ()=>{
  const img = document.getElementById('neon-sign');
  if(!img) return;
  const candidates = listFromAttr(img, 'data-candidates');
  const chosen = await pickFirstExisting(candidates);
  if(chosen) img.src = chosen;
})();

// 2) ФОН КИРПИЧА (PNG из твоих assets, ищем по кандидатам)
(async ()=>{
  const heroBg = document.getElementById('heroBg');
  if(!heroBg) return;
  const candidates = [
    'assets/brick-wall.png',
    'assets/brick.png',
    'assets/wall-brick.png',
    'assets/bg-brick.png',
    'assets/brickwall.png'
  ];
  const chosen = await pickFirstExisting(candidates);
  if(chosen){
    heroBg.style.backgroundImage = `linear-gradient(0deg, rgba(0,0,0,.38), rgba(0,0,0,.38)), url('${chosen}')`;
  } else {
    // fallback — слегка тёмный градиент, чтобы не было пустоты
    heroBg.style.background = 'linear-gradient(180deg,#0d1118,#090b10)';
  }
})();
