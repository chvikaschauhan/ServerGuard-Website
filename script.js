const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    siteNav.classList.toggle('is-open', !isOpen);
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
      siteNav.classList.remove('is-open');
    });
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

// Configure with the country code and phone number only (no +, spaces, or punctuation).
const whatsappPhoneNumber = '918755715537';
const whatsappMessage = 'Hello, I want to know more about ServerGuard';
document.querySelectorAll('[data-whatsapp-chat]').forEach((link) => {
  link.href = `https://wa.me/${whatsappPhoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
});

// Lift the floating control above the footer while the footer is in view.
const whatsappButtons = document.querySelectorAll('.whatsapp-float');
const footer = document.querySelector('footer');
if (whatsappButtons.length && footer) {
  const updateWhatsAppPosition = () => {
    const footerTop = footer.getBoundingClientRect().top;
    const baseOffset = window.matchMedia('(max-width: 700px)').matches ? 17 : 22;
    const extraOffset = Math.max(0, window.innerHeight - footerTop);
    whatsappButtons.forEach((button) => {
      button.style.setProperty('--whatsapp-bottom', `calc(${baseOffset + extraOffset}px + env(safe-area-inset-bottom))`);
    });
  };

  window.addEventListener('scroll', updateWhatsAppPosition, { passive: true });
  window.addEventListener('resize', updateWhatsAppPosition);
  updateWhatsAppPosition();
}
