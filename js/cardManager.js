/* Luis David Rodriguez Valades object to manage the cards */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
export default class CardsManager {
  constructor(parentContainer) {
    this.cards = [];
    this.itemsRemain = 0;
    this.parentContainer = parentContainer;
    this.itemsDisplayed = 0;
    this.step = 3;
  }

  addElement(nodeElement) {
    this.cards.push(nodeElement);
  }

  get cardLength() {
    return this.cards.length;
  }

  set setStep(step = 3) {
    this.step = step;
  }

  reset() {
    this.cards = [];
    this.removeCards();
  }

  setItemsDisplayed() {
    this.itemsDisplayed = this.parentContainer.getElementsByClassName('card-speakers').length;
  }

  setItemsRemain() {
    this.itemsRemain = this.cards.length - this.itemsDisplayed;
  }

  showCards() {
    // once we got how many itemst are already displayed we want to start from there to itemDisplayed + step
    const limit = this.step + this.itemsDisplayed;
    for (let i = this.itemsDisplayed; i < limit; i++) {
      // if the iteration is out of the bounds
      if (i === this.cards.length) {
        this.itemsRemain = 0;
        break;
      }
      // when the card is added to the parent now is displayed add a transition to disappear the card
      this.cards[i].classList.add('translate');
      this.parentContainer.append(this.cards[i]);
    }

    // calculate again the items remain and items displayed to always have the newest values
    this.setItemsDisplayed();
    this.setItemsRemain();

    // remove the transition you must give a little delay once the card is displayed
    // the card is hidden once the timer goes of it remove the translate class
    // and the cards are shown with a little and nice effect
    setTimeout(() => {
      const item = this.parentContainer.querySelectorAll('.card-speakers');
      item.forEach((element) => {
        element.classList.remove('translate');
      });
    }, 200);
  }

  removeCards() {
    this.parentContainer.innerHTML = '';
    this.setItemsDisplayed();
    this.setItemsRemain();
  }
}