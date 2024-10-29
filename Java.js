// Handle color change of navbar on scroll
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var firstSection = document.querySelector('#home');

  // Calculate the transition position (halfway through the first section)
  var transitionPosition = firstSection.offsetTop + (firstSection.offsetHeight / 4.5);
  
  var scrollPosition = window.scrollY;

  // Add or remove the 'colored' class based on scroll position
  if (scrollPosition >= transitionPosition) {
      navbar.classList.add('colored');
  } else {
      navbar.classList.remove('colored');
  }
});

// Highlight the active section link in the navbar based on scroll
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  sections.forEach((section, index) => {
      const top = section.offsetTop - 50; // Adjust for padding/margin
      const bottom = top + section.clientHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= top && scrollPosition < bottom) {
          navLinks.forEach(link => link.classList.remove('active'));
          navLinks[index].classList.add('active');
      }
  });
});
