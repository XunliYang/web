document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initMembersCarousel();
});

function initMobileNavigation() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (!mobileToggle || !navLinks) return;

  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileToggle.classList.toggle('active');
    const isExpanded = navLinks.classList.contains('active');
    mobileToggle.setAttribute('aria-expanded', isExpanded);
  });

  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
      navLinks.classList.remove('active');
      mobileToggle.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
  });

  const dropdowns = navLinks.querySelectorAll('.dropdown');
  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    if (toggle) {
      toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          dropdown.classList.toggle('active');
          const isExpanded = dropdown.classList.contains('active');
          toggle.setAttribute('aria-expanded', isExpanded);
        }
      });
    }
  });
}

function initMembersCarousel() {
  const carouselTrack = document.querySelector('.carousel-track');
  if (!carouselTrack) return;

  const originalContent = carouselTrack.innerHTML;
  carouselTrack.innerHTML = originalContent + originalContent;
}