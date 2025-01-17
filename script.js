//* Header Area...
const menuIcon = document.getElementById('menuIcon');
const hamburgerIcon = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close');
const fullscreenMenu = document.getElementById('fullscreenMenu');
const body = document.body;

// Toggle the menu
menuIcon.addEventListener('click', function () {
    // Menü açık değilse aç
    if (!fullscreenMenu.classList.contains('open')) {
        fullscreenMenu.classList.add('open');
        hamburgerIcon.style.display = 'none';
        closeIcon.style.display = 'inline-block';
        body.style.overflow = 'hidden'; 
    } else {
        fullscreenMenu.classList.remove('open');
        hamburgerIcon.style.display = 'inline-block';
        closeIcon.style.display = 'none';
        body.style.overflow = 'auto'; 
    }
});

// Search Area
const searchIcon = document.getElementById('searchIcon');
const searchInput = document.getElementById('searchInput');

searchIcon.addEventListener('click', function() {
  searchInput.classList.toggle('open');
  if (searchInput.classList.contains('open')) {
    searchInput.focus(); // Arama kutusu açıldığında focus'lanır
    searchInput.style.width = '200px'; // Arama kutusu açıldığında genişliği ayarla
    searchInput.style.right = '0';
  } else {
    searchInput.style.width = '0'; // Arama kutusu kapandığında genişliği sıfırla
    searchInput.style.right = '0';
  }
});

// Input alanından çıkıldığında (blur eventi) arama kutusunu kapat
searchInput.addEventListener('blur', function() {
  searchInput.classList.remove('open');
  searchInput.style.width = '0'; // Arama kutusu kapandığında genişliği sıfırla
  searchInput.style.right = '0';
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





