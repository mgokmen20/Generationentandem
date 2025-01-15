//* Header Area...
const menuIcon = document.getElementById('menuIcon');
const hamburgerIcon = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close');
const fullscreenMenu = document.getElementById('fullscreenMenu');

// Toggle the menu
menuIcon.addEventListener('click', function () {
    // Menü açık değilse aç
    if (!fullscreenMenu.classList.contains('open')) {
        fullscreenMenu.classList.add('open'); // CSS animasyon sınıfı eklenir
        hamburgerIcon.style.display = 'none'; // Hamburger simgesini gizle
        closeIcon.style.display = 'inline-block'; // Kapat simgesini göster
    } else {
        fullscreenMenu.classList.remove('open'); // CSS animasyon sınıfı çıkarılır
        hamburgerIcon.style.display = 'inline-block'; // Hamburger simgesini geri getir
        closeIcon.style.display = 'none'; // Kapat simgesini gizle
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





