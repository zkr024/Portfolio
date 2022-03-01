const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.close_button');
const closeMenu = document.querySelector('.close_port');
const closeMenuTwo = document.querySelector('.close_about');
const closeMenuThree = document.querySelector('.close_contact');
const burgerMenu = document.querySelector('.burger_menu');

menu.addEventListener('click', () => {
  burgerMenu.classList.toggle('menu_active');
});

closeButton.addEventListener('click', () => {
  burgerMenu.classList.toggle('menu_active');
});

closeMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('menu_active');
});

closeMenuTwo.addEventListener('click', () => {
  burgerMenu.classList.toggle('menu_active');
});

closeMenuThree.addEventListener('click', () => {
  burgerMenu.classList.toggle('menu_active');
});

const allProjects = document.querySelector('.project')
const sectionCards = {name:'multi-post Stories',
                      technologies: ['HTML', 'CSS', 'JavaScript'],
                      image: './images/',
                      description: 'Lorem',
                      button: ['see live', 'see source']
                     };

function createCard(projectName){
  let blur = document.createElement('div');
  blur.classList.add('blur');

  document.body.appendChild(blur);
}

createCard(sectionCards)
