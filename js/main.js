import loadSpeakers from './projects.js';
import populateProgram from './program.js';

let previousState = false;
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

function loadFirstTime() {
  // check what is the width of the window, if we are in a desktop we show 6 cards
  const width = window.innerWidth;
  if (width <= 1200) {
    loadSpeakers(3);
  } else {
    loadSpeakers(6);
  }
}

loadFirstTime();

window.addEventListener('resize', () => {
  /*
  * I set this listener in that way every time the navigator is resized
  * check if it is necesary to reload the cards in that way if you open
  * the navigator wider and then resise we reload the cards for movile o desktop
  * you can see. open yor navigator in desktop you will see 6 cards and remain 14 then resize to
  * mobile now you will see only 3 and 17 remain with out need of refresh
  * also every time you press show more in desctop you will show 6 cards on the other hand
  * mobile just will display 3 cards each press
  * without this listener if you start the navigation in desktop and resize to mobile with out
  * refresh the cards shown would be 6 and the steps 6 each time
  */
  const width = window.innerWidth;
  const breakPoint = width <= 1200;
  if (breakPoint !== previousState) {
    loadFirstTime();
    previousState = breakPoint;
  }
});
