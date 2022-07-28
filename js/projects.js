/* eslint-disable no-plusplus */
/* eslint-disable max-len */
const speakersContainer = document.querySelector('#speakersContainer');
const showMoreBtn = document.querySelector('#showMoreSpeakers');
const hideMoreBtn = document.querySelector('#hideSpeakers');

const speakersData = [
  {
    image: 'images/presenters/1.png',
    name: 'Yoachi Benkeler 1',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/2.png',
    name: 'Yoachi Benkeler 2',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/3.png',
    name: 'Yoachi Benkeler 3',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/4.png',
    name: 'Yoachi Benkeler 4',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/5.png',
    name: 'Yoachi Benkeler 5',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/6.png',
    name: 'Yoachi Benkeler 6',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/7.png',
    name: 'Yoachi Benkeler 7',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/8.png',
    name: 'Yoachi Benkeler 8',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/9.png',
    name: 'Yoachi Benkeler 9',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/10.png',
    name: 'Yoachi Benkeler 10',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/11.png',
    name: 'Yoachi Benkeler 11',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/12.png',
    name: 'Yoachi Benkeler 12',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/13.png',
    name: 'Yoachi Benkeler 13',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/14.png',
    name: 'Yoachi Benkeler 14',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/15.png',
    name: 'Yoachi Benkeler 15',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/16.png',
    name: 'Yoachi Benkeler 16',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/17.png',
    name: 'Yoachi Benkeler 17',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/18.png',
    name: 'Yoachi Benkeler 18',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/19.png',
    name: 'Yoachi Benkeler 19',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/20.png',
    name: 'Yoachi Benkeler 20',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
];

class CardsManager {
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
      this.parentContainer.append(this.cards[i]);
    }

    this.setItemsDisplayed();
    // how many items are left to be displayed
    this.setItemsRemain();
  }

  removeCards() {
    this.parentContainer.innerHTML = '';
    this.setItemsDisplayed();
    this.setItemsRemain();
  }
}

const cardManager = new CardsManager(speakersContainer);

function createCards(arr = speakersData) {
  let index = 0;
  arr.forEach((speaker) => {
    const card = document.createElement('div');
    const image = document.createElement('img');
    const cardBody = document.createElement('div');
    const title = document.createElement('h3');
    const carier = document.createElement('p');
    const divition = document.createElement('hr');
    const expirience = document.createElement('p');

    card.id = `speaker${index}`;
    card.classList.add('card-speakers', 'col-12-base', 'col-12-desktop', 'col-5-xlarge');
    card.classList.add('invisible');
    image.classList.add('card-img');
    cardBody.classList.add('card-body');
    title.classList.add('card-title');
    carier.classList.add('card-text-1');
    divition.classList.add('hr-1');
    expirience.classList.add('card-text-2');

    image.setAttribute('src', speaker.image);
    title.textContent = speaker.name;
    carier.textContent = speaker.carier;
    expirience.textContent = speaker.expirience;

    cardBody.append(title, carier, divition, expirience);
    card.append(image, cardBody);
    cardManager.addElement(card);
    index++;
  });
}

function loadItems() {
  cardManager.showCards();

  // check if the items remain are less than the step we hidde both buttons
  if (cardManager.itemsRemain < cardManager.step) {
    showMoreBtn.style.display = 'none';
    hideMoreBtn.style.display = 'none';
  }

  // check if the items are more than 0 we hide the hideButton
  if (cardManager.itemsRemain > 0) {
    hideMoreBtn.style.display = 'none';
  }

  showMoreBtn.innerHTML = `Show ${cardManager.itemsRemain} MORE <i class="fa-solid fa-angle-down"></i>`;
  showMoreBtn.style.display = 'block';
}

export default function loadSpeakers(step = 3) {
  // reset the cards to be able to reload from 0. this is not nesesarly
  // if we dont want to use the listener of width
  cardManager.reset();
  cardManager.setStep = step;
  createCards();
  loadItems(step);
}

showMoreBtn.addEventListener('click', () => {
  cardManager.showCards();

  if (cardManager.itemsRemain === 0) {
    showMoreBtn.style.display = 'none';
    hideMoreBtn.style.display = 'block';
    return;
  }
  showMoreBtn.innerHTML = `Show ${cardManager.itemsRemain} MORE <i class="fa-solid fa-angle-down"></i>`;
});

hideMoreBtn.addEventListener('click', () => {
  cardManager.removeCards();
  loadItems();
});