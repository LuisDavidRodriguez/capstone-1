/* eslint-disable no-plusplus */
/* eslint-disable max-len */
const speakersContainer = document.querySelector('#speakersContainer');
const showMoreBtn = document.querySelector('#showMoreSpeakers');
const hideMoreBtn = document.querySelector('#hideSpeakers');

const speakersData = [
  {
    image: 'images/presenters/1.png',
    name: 'Nahomi Perez 1',
    carier: 'English teacher, brazilian straightening',
    expirience: 'My experience with straightening was really incredible',
  },
  {
    image: 'images/presenters/2.png',
    name: 'Yovanna Gutierrez 2',
    carier: 'Private company secretary,organic straightening ',
    expirience: 'I fell in love with my hair,I cant believe it turned out so perfect, thank you'
  },
  {
    image: 'images/presenters/3.png',
    name: 'Marlene Sanchez 3',
    carier: 'Gastronomy student,straightening shine gold',
    expirience: 'I super super recommend it, they leave your hair super straight',
  },
  {
    image: 'images/presenters/4.png',
    name: 'Matha Herrera 4',
    carier: 'Primary math teacher, organic smoothing',
    expirience: 'Happy super happy attend the expo you will not regret it',
  },
  {
    image: 'images/presenters/5.png',
    name: 'Lorena Mola 5',
    carier: 'Secondary physical education teacher, silk gloss straightening',
    expirience: 'My hair is left without frizz, without volume',
  },
  {
    image: 'images/presenters/6.png',
    name: 'Yara Ortiz 6',
    carier: 'Secondary physical education teacher, argan hair mask',
    expirience: 'I love this organic brand, it really is perfect',
  },
  {
    image: 'images/presenters/7.png',
    name: 'Beatriz Villalobos 7',
    carier: 'Chemical engineering student,hair growth shampoo',
    expirience: 'I had used several brands to grow my hair and had not been successful until I met yaz fortozo my hair has grown quite a bit',
  },
  {
    image: 'images/presenters/8.png',
    name: 'Yara Marquez 8',
    carier: 'Communication, organic straightening',
    expirience: 'My hair really needed help, im happy',
  },
  {
    image: 'images/presenters/9.png',
    name: 'Lucila beffman 9',
    carier: 'Degree in natural sciences, smoothing chocolate',
    expirience: 'Grateful for the treatment, explanation, and attention, my hair was incredible',
  },
  {
    image: 'images/presenters/10.png',
    name: 'Lara Rodriguez 10',
    carier: 'Cosmetologist, chocolate hair mask',
    expirience: 'After bleaching, this mask has hydrated my hair, I recommend the brand, go to the exhibition',
  },
  {
    image: 'images/presenters/11.png',
    name: 'Gloria Vazquez 11',
    carier: 'International trade, organic straightening',
    expirience: 'After wasting so much time ironing my hair every day, wasting time and money, knowing this straightening has been the best',
  },
  {
    image: 'images/presenters/12.png',
    name: 'Yug Cortez 12',
    carier: 'Political Science, Argan Hair Mask',
    expirience: 'It has hydrated my hair a lot, it is rich and not greasy, the best thing is that it is organic, I love that',
  },
  {
    image: 'images/presenters/13.png',
    name: 'Dominica Tellez 13',
    carier: 'Housewife, Brazilian Straightening',
    expirience: 'It has been an excellent option for me, I highly recommend it.',
  },
  {
    image: 'images/presenters/14.png',
    name: 'Sonia Colkin 14',
    carier: 'Commercial manager, organic straightening',
    expirience: 'If you want to save time, this option is ideal for you, you will no longer have to spend time ironing your hair',
  },
  {
    image: 'images/presenters/15.png',
    name: 'Julia Monroe 15',
    carier: 'Student in nutrition, organic straightening',
    expirience: 'To you who will read this, I highly recommend it, it does not mistreat the hair, on the contrary, your hair is super soft',
  },
  {
    image: 'images/presenters/16.png',
    name: 'Vianey Pineda 16',
    carier: 'Public accountant, japanese smoothing',
    expirience: 'I am delighted that I have not felt discomfort when applying this straightening, I recommend it',
  },
  {
    image: 'images/presenters/17.png',
    name: 'Sandra Peralta 17',
    carier: 'Language teacher, smooth shampoo',
    expirience: 'If you want to continue keeping your hair straight, I recommend this shampoo, it leaves it incredible without frizz and hydrated',
  },
  {
    image: 'images/presenters/18.png',
    name: 'Mayra Fuentes 18',
    carier: 'Student in business administration, organic straightening and maintenance kit',
    expirience: 'Happy with the collection, they gave me a kit and it is perfect to keep my hair straight',
  },
  {
    image: 'images/presenters/19.png',
    name: 'Dennise Nuñez 19',
    carier: 'Public accountant, organic straightening',
    expirience: 'This straightening is not uncomfortable like others, and it leaves the hair super beautiful, I recommend it',
  },
  {
    image: 'images/presenters/20.png',
    name: 'Brenda Valderas 20',
    carier: 'Diving, organic straightening and argan hair mask',
    expirience: 'With my activity I had horrible hair, these products have helped me a lot to restore it, I recommend them go to the expo',
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