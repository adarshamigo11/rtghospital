// Mobile hamburger menu
var hamburger = document.querySelector('.hamburger');
var navLinks = document.querySelector('.nav-links');
var navOverlay = document.querySelector('.nav-overlay');
if (hamburger) {
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    navOverlay.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });
}
if (navOverlay) {
  navOverlay.addEventListener('click', function() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });
}
// Close menu on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(function(link) {
  link.addEventListener('click', function() {
    if (window.innerWidth <= 768) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      navOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

// Hero carousel
var currentSlide = 0;
var slides = document.querySelectorAll('.hero-slide');
var dots = document.querySelectorAll('.hero-dot');
function goToSlide(n) {
  if (slides.length === 0) return;
  slides[currentSlide].classList.remove('active');
  if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
  currentSlide = n;
  slides[currentSlide].classList.add('active');
  if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}
function nextSlide() {
  if (slides.length === 0) return;
  goToSlide((currentSlide + 1) % slides.length);
}
if (slides.length > 0) setInterval(nextSlide, 4000);