//* Header Area...








// Search Area
const searchIcon = document.getElementById('searchIcon');
const searchInput = document.getElementById('searchInput');

// Open or close the box when clicking on the search icon
searchIcon.addEventListener('click', function () {
  searchInput.classList.toggle('open');
  if (searchInput.classList.contains('open')) {
    searchInput.focus(); // Focuses when search box is opened
    searchInput.style.width = '200px'; // Adjust width
  } else {
    searchInput.style.width = '0'; // Reset width on close
  }
});

// Close the box when the mouse moves out of the box
searchInput.addEventListener('mouseout', function () {
  searchInput.classList.remove('open');
  searchInput.style.width = '0'; // Reset width
});

// Close the search box when exiting the input field (blur event)
searchInput.addEventListener('blur', function () {
  searchInput.classList.remove('open');
  searchInput.style.width = '0'; // Reset width
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






