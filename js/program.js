const programContainer = document.querySelector('#programContainer');
const programData = [
  {
    image: 'images/icons/icon_presenter.png',
    title: 'Lecture',
    description: 'Listen to speakers from varius countries about messeges of sharing and opening.',
  },
  {
    image: 'images/icons/icon_program.png',
    title: 'CC Exhibition',
    description: 'Appreciate various creations applying CC license of artists, organized from Art Center Nabi',
  },
  {
    image: 'images/icons/icon_messages.png',
    title: 'Forum',
    description: 'Have the time to share your thoughts and opinions with experts for each topic.',
  },
  {
    image: 'images/icons/icon_board.png',
    title: 'Workshop',
    description: 'Try creating your own work using open source license rather than just watching.',
  },
  {
    image: 'images/icons/icon_wheel.png',
    title: 'CC Ignite',
    description: 'Get opportunities to network with CC affiliates around the world, also after the summit.',
  },
];

export default function populateProgram(arr = programData) {
  arr.forEach((program) => {
    const card = document.createElement('div');
    const image = document.createElement('img');
    const title = document.createElement('h5');
    const description = document.createElement('p');

    card.classList.add('card-program', 'col-12-base', 'col-5-desktop', 'col-3-large', 'col-2-xlarge');
    image.classList.add('card-img');
    title.classList.add('card-title');
    description.classList.add('card-text-1');

    image.setAttribute('src', program.image);
    title.textContent = program.title;
    description.textContent = program.description;

    card.append(image, title, description);

    programContainer.appendChild(card);
  });
}