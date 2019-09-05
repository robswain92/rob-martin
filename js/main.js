// Toggle the mobile nav

const navToggler = document.querySelector('.navbar-toggler');
const mobileNav = document.querySelector('#mobile-nav');
const hamburger = document.querySelector('.hamburger');
const hamburger1 = document.querySelector('.hamburger1');
const hamburger2 = document.querySelector('.hamburger2');
let navIsOpen = false;

function toggleNav() {
  if (!navIsOpen) {
    mobileNav.classList.add('mobile-open');
    hamburger.classList.add('open');
    hamburger1.classList.add('open1');
    hamburger2.classList.add('open2');
  } else {
    mobileNav.classList.remove('mobile-open');
    hamburger.classList.remove('open');
    hamburger1.classList.remove('open1');
    hamburger2.classList.remove('open2');
  }

  navIsOpen = !navIsOpen;
}

navToggler.addEventListener('click', toggleNav);

// Close mobile nav when clicking on a link

const mobileNavLink = document.querySelectorAll('.mobile-nav__link');

for (i = 0; i < mobileNavLink.length; i++) {
  mobileNavLink[i].addEventListener('click', toggleNav);
}

// Change navbar background colour on scroll

const navbar = document.querySelector('.navbar');
const about = document.querySelector('#about');

function navbarChange() {
  if (window.scrollY < 1) {
    navbar.classList.remove('scrolled');
  } else {
    navbar.classList.add('scrolled');
  }
}

window.addEventListener('scroll', navbarChange);
