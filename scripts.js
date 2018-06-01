const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;

// Set first img opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
  // Reset imgs opacity before style applied
  imgs.forEach(img => img.style.opacity = 1);

  // Change current image to source of clicked image
  current.src = e.target.src;

  // Add .fade-in class to current
  current.classList.add('fade-in');

  // Remove .fade-in class
  setTimeout(() => {
    current.classList.remove('fade-in');
  }, 500);

  // Change the opacity to opacity var
  e.target.style.opacity = opacity;

}
