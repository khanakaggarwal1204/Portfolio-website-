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
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const response = await fetch('http://localhost:5000/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message })
  });

  const data = await response.json();
  alert(data.message);
  contactForm.reset();
});
