//* Header Area...
const menuIcon = document.getElementById('menuIcon');
const hamburgerIcon = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close');
const fullscreenMenu = document.getElementById('fullscreenMenu');

// Toggle the menu
menuIcon.addEventListener('click', function() {
    // If the menu is currently closed, show it
    if (fullscreenMenu.style.display === 'none' || fullscreenMenu.style.display === '') {
        fullscreenMenu.style.display = 'flex';
        setTimeout(() => fullscreenMenu.classList.add('open'), 10); // Delay class addition for animation
        hamburgerIcon.style.display = 'none'; // Hide hamburger icon
        closeIcon.style.display = 'inline-block'; // Show close icon
    } else {
        fullscreenMenu.classList.remove('open');
        setTimeout(() => {
            fullscreenMenu.style.display = 'none';
            hamburgerIcon.style.display = 'inline-block'; // Show hamburger icon
            closeIcon.style.display = 'none'; // Hide close icon
        }, 500); // Wait for animation to finish before hiding menu
    }
});


/* Here for Bootstrap slider stop with mauseover*/
  var myCarousel = document.getElementById('carouselExampleCaptions');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000, // Automatic switching time (2 seconds)
    ride: 'carousel' // Start automatically
  });

  // Stopping on mouse hover
  myCarousel.addEventListener('mouseenter', function () {
    carousel.pause(); // Stop automatic switching
  });

  // Restart when mouse is separated
  myCarousel.addEventListener('mouseleave', function () {
    carousel.cycle(); // Start automatic migration
  });





