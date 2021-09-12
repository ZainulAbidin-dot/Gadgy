// hamburger toggle
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function () {
  document.querySelector('.mb-navbar').classList.toggle('active');
});


// cart dropdown
const cartIcon = document.querySelector('.cart');
cartIcon.addEventListener('click', () => {
  document.querySelector('.cartdrop').classList.add('show');
  document.body.style.overflow = 'hidden'
})

document.querySelector('.close-cart').addEventListener('click', () => {
  document.querySelector('.cartdrop').classList.remove('show');
  document.body.style.overflow = ''
})