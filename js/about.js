const burgerButton = document.querySelector('.menu-button');
const burgerBars = document.querySelector('.menu-button span');
const menuModal = document.querySelector('#menuModal');
const menuList = document.querySelector('#menuModalList');

menuList.addEventListener('click', () => {
  burgerBars.classList.toggle('open');
  menuModal.classList.toggle('open');
});

burgerButton.addEventListener('click', () => {
  burgerBars.classList.toggle('open');
  menuModal.classList.toggle('open');
});