window.addEventListener('load', () => {
  document.querySelector('.hero h2').style.opacity = '1';
  document.querySelector('.hero h2').style.transform = 'translateY(0)';
  document.querySelector('.hero p').style.opacity = '1';
  document.querySelector('.hero p').style.transform = 'translateY(0)';
  document.querySelector('.hero a').style.opacity = '1';
  document.querySelector('.hero a').style.transform = 'translateY(0)';
});
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });
sections.forEach(sec => observer.observe(sec));