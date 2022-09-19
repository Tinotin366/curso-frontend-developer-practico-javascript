const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

// JS Para la hamburguesa 

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

// JS Para el carrito de compras

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
//   console.log('Click');
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    // console.log('Click');
    mobileMenu.classList.toggle('inactive');
  }

function toggleCarritoAside() {
  // console.log('Click');
  aside.classList.toggle('inactive');
}
  