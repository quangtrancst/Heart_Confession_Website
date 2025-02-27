// Create falling hearts
const heartContainer = document.getElementById('hearts');
const heartSymbols = ['❤️', '💕', '💗', '💓', '💖'];

for (let i = 0; i < 30; i++) {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
  heart.style.left = Math.random() * 100 + '%';
  heart.style.fontSize = Math.random() * 20 + 10 + 'px';
  heart.style.animationDuration = Math.random() * 3 + 2 + 's';
  heart.style.animationDelay = Math.random() * 5 + 's';
  heartContainer.appendChild(heart);
}