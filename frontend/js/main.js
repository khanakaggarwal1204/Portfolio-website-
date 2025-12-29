document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  const progressBars = document.querySelectorAll('.progress');
window.addEventListener('scroll', () => {
  progressBars.forEach(bar => {
    bar.style.width = bar.getAttribute('style').match(/\d+%/)[0];
  });
});
