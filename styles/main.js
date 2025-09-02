
// год в футере
document.getElementById('y').textContent = new Date().getFullYear();

// плавный скролл по якорям
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id=a.getAttribute('href').slice(1);
    const el=document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});

// Аккордеон
document.querySelectorAll('.accordion .q').forEach(q=>{
  q.addEventListener('click',()=>{
    const qa=q.parentElement; qa.classList.toggle('open');
    const a=qa.querySelector('.a');
    a.style.maxHeight = qa.classList.contains('open') ? a.scrollHeight+'px' : '0px';
    q.querySelector('b').textContent = qa.classList.contains('open') ? '–' : '+';
  });
});

// Лайтбокс
const lb = document.getElementById('lb');
const lbimg = document.getElementById('lbimg');
const gal = document.getElementById('gal');
if(gal){
  gal.addEventListener('click', (e)=>{
    const img = e.target.closest('img');
    if(!img) return;
    lbimg.src = img.src; lb.style.display='flex';
  });
}
if(lb){ lb.addEventListener('click', ()=> lb.style.display='none'); }
