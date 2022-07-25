/* eslint-disable linebreak-style */
const burgerButton = document.querySelector('.menu-button');
const burgerBars = document.querySelector('.menu-button span');

burgerButton.addEventListener('click', () => {
  burgerBars.classList.toggle('open');
});