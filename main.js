const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

// JS Para la hamburguesa 

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
//   console.log('Click');
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    // console.log('Click');
    mobileMenu.classList.toggle('inactive');
  }
  