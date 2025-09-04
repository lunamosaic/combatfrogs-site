// Reveal animation
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
reveals.forEach(r => observer.observe(r));

// Footer year
document.getElementById('y').textContent = new Date().getFullYear();
