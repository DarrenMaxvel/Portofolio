// Handle color change of navbar on scroll
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var firstSection = document.querySelector('#home');
  
    // Calculate the transition position (halfway through the first section)
    var transitionPosition = firstSection.offsetTop + (firstSection.offsetHeight / 8);
    
    var scrollPosition = window.scrollY;
  
    // Add or remove the 'colored' class based on scroll position
    if (scrollPosition >= transitionPosition) {
        navbar.classList.add('colored');
    } else {
        navbar.classList.remove('colored');
    }
  });

  // JavaScript for interactive hover effect
  document.addEventListener("mousemove", function(e) {
    const heroText = document.querySelector(".hero-text");
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
  
    // Calculate offset from the center
    const offsetX = (clientX - innerWidth / 2) / 30;
    const offsetY = (clientY - innerHeight / 2) / 30;
  
    // Apply the transform with the calculated offsets
    heroText.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;
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
  document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section'); // Select all sections
  
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 // Trigger when 30% of the section is visible
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add class when in view
            } else {
                entry.target.classList.remove('visible'); // Remove class when out of view
            }
        });
    }, options);
  
    sections.forEach(section => {
        observer.observe(section); // Observe each section
    });
  });