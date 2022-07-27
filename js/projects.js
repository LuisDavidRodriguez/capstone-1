/* eslint-disable no-plusplus */
/* eslint-disable max-len */
const speakersContainer = document.querySelector('#speakersContainer');
const showMoreBtn = document.querySelector('#showMoreSpeakers');
const speakersData = [
  {
    image: 'images/presenters/speaker_01.png',
    name: 'Yoachi Benkeler 1',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/speaker_01.png',
    name: 'Yoachi Benkeler 2',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/speaker_01.png',
    name: 'Yoachi Benkeler 3',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/speaker_01.png',
    name: 'Yoachi Benkeler 4',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/speaker_01.png',
    name: 'Yoachi Benkeler 5',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/speaker_01.png',
    name: 'Yoachi Benkeler 6',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/speaker_01.png',
    name: 'Yoachi Benkeler 7',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/speaker_01.png',
    name: 'Yoachi Benkeler 8',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/speaker_01.png',
    name: 'Yoachi Benkeler 9',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/speaker_01.png',
    name: 'Yoachi Benkeler 10',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/speaker_01.png',
    name: 'Yoachi Benkeler 11',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/speaker_01.png',
    name: 'Yoachi Benkeler 12',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/speaker_01.png',
    name: 'Yoachi Benkeler 13',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
];

function createCards(arr = speakersData) {
  const arrCards = [];
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
    arrCards.push(card);
    index++;
  });

  return arrCards;
}

function showCards(arrCards, step) {
  const itemsDisplayed = speakersContainer.getElementsByClassName('card-speakers').length;

  // once we got how many itemst are already displayed we want to start from there to itemDisplayed + step
  const limit = step + itemsDisplayed;

  for (let i = itemsDisplayed; i < limit; i++) {
    // if the iteration is out of the bounds
    if (i === arrCards.length) return 0;
    speakersContainer.append(arrCards[i]);
  }

  // how many items are left to be displayed
  return arrCards.length - speakersContainer.getElementsByClassName('card-speakers').length;
}

function uptateButtons(itemsLeft) {
  // check if there is no items to display
  if (itemsLeft === 0) {
    showMoreBtn.style.display = 'none';
  }
  showMoreBtn.innerHTML = `Show ${itemsLeft} MORE <i class="fa-solid fa-angle-down"></i>`;
}

export default function loadSpeakers(step = 3) {
  // ask for the width of the documet
  const cards = createCards();

  // check if there is not cards hide the buttons show and hide
  if (cards.length === 0) {
    showMoreBtn.style.display = 'none';
    return;
  }

  // check if there is less data to show tan the step, if there is only 2 or 3 cards and for movile the step is 3 and for desktop the step is 10 hide the buttons
  if (cards.length <= step) {
    showMoreBtn.style.display = 'none';
  }

  uptateButtons(showCards(cards, step));

  showMoreBtn.addEventListener('click', () => {
    uptateButtons(showCards(cards, step));
  });
}