document.addEventListener('DOMContentLoaded', () => {
  // Remove no-js class to enable animations (progressive enhancement)
  document.documentElement.classList.remove('no-js');
  
  initMobileNavigation();
  initScrollAnimations();
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
    const toggle = dropdown.querySelector('.nav-link');
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

function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.mission-card, .component-card, .extension-card, .workflow-step, .timeline-item, .timeline-event-card, .step-card, .leadership-card, .tsc-page-member, .lfn-staff-member, .usecase-preview-card, .event-card-full');

  if (animatedElements.length === 0) return;

  // Add initial state classes
  animatedElements.forEach(el => {
    el.classList.add('animate-on-scroll');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible');
        // Unobserve after animation to prevent re-triggering
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  });

  animatedElements.forEach(el => observer.observe(el));
}

