// Navbar
const menuOpenIcon = document.getElementById('menuOpenIcon');
menuOpenIcon.addEventListener('click', () => {
  const navbarList = document.querySelector('.navbar-list');
  navbarList.classList.toggle('showNavbar');

  if (window.matchMedia('(max-width: 768px)').matches) {
    if (navbarList.classList.contains('showNavbar')) {
      menuOpenIcon.classList.add('fa-times');
      menuOpenIcon.classList.remove('fa-bars');
      navbarList.style.left = '0';
      document.body.style.overflow = 'hidden';
    } else {
      menuOpenIcon.classList.remove('fa-times');
      menuOpenIcon.classList.add('fa-bars');
      document.body.style.overflow = 'scroll';
      navbarList.style.left = '-100%';
    }
  }
});

// Featured Chefs
const speakers = [
  {
    image: 'assets/chef_01.png',
    name: 'Wolfgang Puck',
    profession: 'Spago Beverly Hills',
    description: 'Renowned for innovative creations, Chef Wolfgang Puck is the force behind Spago Beverly Hills. With global flavors and exquisite techniques, he has redefined fine dining.',
  },
  {
    image: 'assets/chef_02.png',
    name: 'Enrique Olvera',
    profession: 'Pujol',
    description: 'Chef Enrique Olvera is the creative genius behind Pujol, known for avant-garde Mexican cuisine. His expertise and dedication to flavors have earned international acclaim.',
  },
  {
    image: 'assets/chef_03.png',
    name: 'Carlos Gaytán',
    profession: 'Tzuco Chicago',
    description: 'Chef Carlos Gaytán brings a unique blend of Mexican and French flavors to Tzuco Chicago. His innovative approach and attention to detail have earned him critical acclaim.',
    class: 'hidden',
  },
  {
    image: 'assets/chef_04.png',
    name: 'Gabriela Cámara',
    profession: 'Contramar',
    description: 'Chef Gabriela Cámara is the mastermind behind Contramar, a culinary icon in Mexico City. Her fresh and vibrant approach to seafood has garnered international recognition.',
    class: 'hidden',
  },
  {
    image: 'assets/chef_05.png',
    name: 'Jose Ramon Castillo',
    profession: 'Que Bo! Chocolate',
    description: 'Chef Jose Ramon Castillo is a pioneer in Mexico\'s artisanal chocolate industry. Through innovative techniques, he has elevated chocolate to new heights.',
    class: 'hidden',
  },
  {
    image: 'assets/chef_06.png',
    name: 'Elena Reygadas',
    profession: 'Rosetta',
    description: 'Chef Elena Reygadas offers an unforgettable dining experience at Rosetta. Her culinary style blends Italian and Mexican traditions for a harmonious fusion of flavors.',
    class: 'hidden',
  },
];

const printProgram = () => {
  const speakersSection = document.getElementById('featuredSpeakers');
  speakers.forEach((speaker) => {
    const ulSpeakers = document.createElement('ul');
    ulSpeakers.classList.add('speakers__list__container');
    ulSpeakers.classList.add(`${speaker.class}`);
    ulSpeakers.innerHTML = `
    <li class="featured__speakers__item">
        <div class="speaker__description__container">
            <figure>
                <img src="${speaker.image}" alt="" class="featured__speaker__image">
            </figure>
            <div class="featured__speaker__nameAndProfession">
                <h3 class="featured__speaker__name">${speaker.name}</h3>
                <h4 class="featured__speaker__profession">${speaker.profession}</h4>
                <hr>
                <p class="featured__speaker__description">${speaker.description}</p>
            </div>
        </div>
    </li>
    `;
    speakersSection.appendChild(ulSpeakers);
  });
};

// Show more button
const speakerButton = document.getElementById('speakersButton');
const showMore = () => {
  if (window.matchMedia('(max-width: 767px)').matches) {
    const elements = document.querySelectorAll('.hidden');
    elements.forEach((el) => {
      el.style.display = 'none';
    });

    speakerButton.addEventListener('click', () => {
      speakerButton.classList.toggle('show');
      elements.forEach((el) => {
        if (speakerButton.classList.contains('show')) {
          el.style.display = 'block';
          speakerButton.innerHTML = `
          LESS
          <i class="fa-solid fa-chevron-up"></i>
          `;
        } else {
          el.style.display = 'none';
          speakerButton.innerHTML = `
          MORE
          <i class="fa-solid fa-chevron-down"></i>
          `;
        }
      });
    });
  }
};

printProgram();
showMore();
