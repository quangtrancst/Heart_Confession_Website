document.addEventListener('DOMContentLoaded', function() {
  const description = document.getElementById('description');
  const arrows = document.querySelectorAll('.arrow-indicator');
  const buttons = document.querySelector('.button-container');
  const question = document.getElementById('question');
  const heart = document.querySelector('.heart');

  // Initially hide the buttons, question, and each arrow
  buttons.style.display = 'none';
  arrows.forEach(arrow => {
    arrow.style.display = 'none';
  });
  question.style.opacity = '0';

  // Show description after 1 second
  setTimeout(function() {
    description.classList.add('show');
    // Show arrows after description appears
    setTimeout(function() {
      arrows.forEach(arrow => {
        arrow.style.display = 'block';
        arrow.style.opacity = '1'; // ensure they are visible
      });
      // Ensure buttons are hidden when description and arrows appear
      buttons.style.display = 'none';
    }, 500); // Arrows appear slightly after description
  }, 1000);

  // Handle heart click
  heart.addEventListener('click', function() {
    // Hide description and arrows
    description.classList.remove('show');
    arrows.forEach(arrow => {
      arrow.style.display = 'none';
    });
    // Show question and buttons
    question.style.opacity = '1';
    buttons.style.display = 'flex';
    // Toggle heart beat effect
    heart.classList.toggle('beat');
  });

  // Move btn2 on hover/touch
  const btn2 = document.querySelector('.btn2');
  function moveButton() {
    const btnWidth = btn2.offsetWidth;
    const btnHeight = btn2.offsetHeight;
    const maxX = window.innerWidth - btnWidth;
    const maxY = window.innerHeight - btnHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    btn2.style.position = 'absolute';
    btn2.style.left = randomX + 'px';
    btn2.style.top = randomY + 'px';
  }
  
  btn2.addEventListener('mousemove', moveButton);
  btn2.addEventListener('touchstart', moveButton);

  // Add this to your existing script.js file - after the moveButton function
  const btn1 = document.querySelector('.btn1');
  btn1.addEventListener('click', function() {
    window.location.href = './result.html';
  });
});