// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href'))
        .scrollIntoView({
          behavior: 'smooth'
        });
    });
  });
  
  
  // Animasi muncul saat scroll
  
  const cards = document.querySelectorAll('.card, .timeline-item, .edu-card');
  
  window.addEventListener('scroll', () => {
  
    cards.forEach(card => {
  
      const top = card.getBoundingClientRect().top;
  
      if(top < window.innerHeight - 100){
        card.classList.add('show');
      }
  
    });
  
  });