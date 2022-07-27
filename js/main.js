import loadSpeakers from './projects.js';
import populateProgram from './program.js';
/* eslint-disable linebreak-style */
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

populateProgram();

const width = window.innerWidth;
if (width <= 760) {
  loadSpeakers(3);
} else {
  loadSpeakers(6);
}
