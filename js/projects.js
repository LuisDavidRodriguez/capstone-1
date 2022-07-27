const speakersContainer = document.querySelector('#speakersContainer');
const speakersData = [
  {
    image: 'images/presenters/speaker_01.png',
    name: 'Yoachi Benkeler',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/speaker_01.png',
    name: 'Yoachi Benkeler',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/speaker_01.png',
    name: 'Yoachi Benkeler',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/speaker_01.png',
    name: 'Yoachi Benkeler',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/speaker_01.png',
    name: 'Yoachi Benkeler',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/speaker_01.png',
    name: 'Yoachi Benkeler',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/speaker_01.png',
    name: 'Yoachi Benkeler',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/speaker_01.png',
    name: 'Yoachi Benkeler',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/speaker_01.png',
    name: 'Yoachi Benkeler',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/speaker_01.png',
    name: 'Yoachi Benkeler',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/speaker_01.png',
    name: 'Yoachi Benkeler',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'images/presenters/speaker_01.png',
    name: 'Yoachi Benkeler',
    carier: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    expirience: 'Benkeler studies commons-based peer production, and plbleshed hes seminal book The Wealth of Networks in 2006',
  },
]

export default function populateSpeakers (arr = speakersData) {

  arr.forEach((speaker) => {
    const card = document.createElement('div');
    const image = document.createElement('img');
    const cardBody = document.createElement('div');
    const title = document.createElement('h3');
    const carier = document.createElement('p');
    const divition = document.createElement('hr');
    const expirience = document.createElement('p');

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

    speakersContainer.appendChild(card);
  });
  

}