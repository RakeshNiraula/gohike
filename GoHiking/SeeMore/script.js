document.addEventListener('DOMContentLoaded', function() {
    const seeMoreBtn = document.getElementById('seeMoreBtn');
    const hiddenCards = document.getElementById('hiddenCards');
  
    seeMoreBtn.addEventListener('click', function() {
      hiddenCards.style.display = 'block';
      seeMoreBtn.style.display = 'none';
    });
  });
  