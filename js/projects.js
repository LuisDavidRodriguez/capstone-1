const speakersContainer = document.querySelector('#speakersContainer');
const showMoreBtn = document.querySelector('#showMoreSpeakers');
const hideMoreBtn = document.querySelector('#hideMoreSpeakers');
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
]

export default function populateSpeakers (arr = speakersData) {

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
    speakersContainer.append(card);
    index++;
  });

}











