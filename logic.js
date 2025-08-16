let menu = document.getElementById('menu-icon');
let link = document.getElementById('menu-links');
let close = document.getElementById('close-icon');

menu.addEventListener('click', function () {
  link.classList.toggle('show-menu');
  menu.style.display = "none";
  close.style.display = "block";
});

close.addEventListener('click', function () {
  link.classList.toggle('show-menu');
  close.style.display = "none";
  menu.style.display = "block";
});

const cards = document.querySelectorAll('.solution-card');
let currentIndex = 0;

function highlightCard() {
  cards.forEach(card => card.classList.remove('highlighted'));
  const currentCard = cards[currentIndex];
  currentCard.classList.add('highlighted');
  currentIndex = (currentIndex + 1) % cards.length;
}

highlightCard();
setInterval(highlightCard, 3000);
