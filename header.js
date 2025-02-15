// header.js

document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.querySelector('.site-header__hamburger');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  const closeBtn = document.querySelector('.mobile-menu-overlay__close');

  hamburgerBtn.addEventListener('click', () => {
    mobileMenuOverlay.classList.add('is-open');
  });

  closeBtn.addEventListener('click', () => {
    mobileMenuOverlay.classList.remove('is-open');
  });
});
