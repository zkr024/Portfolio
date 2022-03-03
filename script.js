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

const cardOne = [{
  name: 'Multi Post Stories',
  nameTwo: 'Keeping track of hundreds  of components website',
  technologies: ['html', 'Bootstrap', 'Ruby on rails'],
  image: 'images/SnapshootPortfolio.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  liveVersion: 'see live',
  source: 'see source',
},
{
  name: 'Multi Post Stories second project',
  nameTwo: 'Keeping track of hundreds  of components website',
  technologies: ['html', 'Bootstrap', 'Ruby on rails'],
  image: 'images/gym2.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  liveVersion: 'see live',
  source: 'see source',
},
{
  name: 'Multi Post Stories third project',
  nameTwo: 'Keeping track of hundreds  of components website',
  technologies: ['html', 'Bootstrap', 'Ruby on rails'],
  image: 'images/SnapshootPortfolio.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  liveVersion: 'see live',
  source: 'see source',
},
{
  name: 'Multi Post Stories fourth project',
  nameTwo: 'Keeping track of hundreds  of components website',
  technologies: ['html', 'Bootstrap', 'Ruby on rails'],
  image: 'images/gym2.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  liveVersion: 'see live',
  source: 'see source',
},
{
  name: 'Multi Post Stories fifth project',
  nameTwo: 'Keeping track of hundreds  of components website',
  technologies: ['html', 'Bootstrap', 'Ruby on rails'],
  image: 'images/SnapshootPortfolio.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  liveVersion: 'see live',
  source: 'see source',
},
{
  name: 'Multi Post Stories sixth project',
  nameTwo: 'Keeping track of hundreds  of components website',
  technologies: ['html', 'Bootstrap', 'Ruby on rails'],
  image: 'images/gym2.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  liveVersion: 'see live',
  source: 'see source',
}];

function createPopup(cardnumber) {
  // 1st part: adding classes and content //
  // Container to keep all the tags for the popup window //
  const container = document.createElement('section');
  container.classList.toggle('popup_container');
  const popup = document.createElement('div');
  popup.classList.toggle('popup');
  // Title for the desktop & Mobile version //
  const popupDesk = document.createElement('div');
  popupDesk.classList.toggle('popup_desktop');
  const title = document.createElement('h2');
  title.textContent = cardnumber.name;
  const titledesk = document.createElement('h3');
  titledesk.textContent = cardnumber.nameTwo;
  // Close icon //
  const link = document.createElement('a');
  link.classList.add('closePopup');
  link.setAttribute('href', '#');
  const imgPopup = document.createElement('img');
  imgPopup.setAttribute('src', 'images/cancel.svg');
  imgPopup.setAttribute('alt', 'cancel icon');
  // List of the languages buttons //
  const languages = document.createElement('ul');
  languages.classList.add('languages');
  cardnumber.technologies.forEach((element) => {
    const itemList = document.createElement('li');
    itemList.classList.add('lang_li');
    itemList.textContent = element;
    languages.appendChild(itemList);
  });
  const details = document.createElement('div');
  details.classList.toggle('popup_details');
  // Container for the image //
  const imgCont = document.createElement('div');
  imgCont.classList.toggle('img');
  const image = document.createElement('img');
  image.setAttribute('src', cardnumber.image);
  image.setAttribute('alt', 'Multi post image');
  // container for the description area //
  const info = document.createElement('div');
  info.classList.toggle('popup_info');
  const descript = document.createElement('p');
  descript.textContent = cardnumber.description;
  const access = document.createElement('ul');
  access.classList.toggle('access_info');
  // Last list //
  const liOne = document.createElement('li');
  const linkOne = document.createElement('a');
  linkOne.classList.add('access_button');
  linkOne.setAttribute('href', '#');
  linkOne.textContent = cardnumber.liveVersion;
  const imgIcon = document.createElement('img');
  imgIcon.setAttribute('src', 'images/Export.svg');
  imgIcon.setAttribute('alt', 'export icon');
  const liTwo = document.createElement('li');
  const linkTwo = document.createElement('a');
  linkTwo.classList.add('access_button');
  linkTwo.setAttribute('href', '#');
  linkTwo.textContent = cardnumber.source;
  const imgIconTwo = document.createElement('img');
  imgIconTwo.setAttribute('src', 'images/Group.svg');
  imgIconTwo.setAttribute('alt', 'github icon');
  // Tags identation //
  const work = document.querySelector('.work');
  container.appendChild(popup);
  popup.appendChild(popupDesk);
  popupDesk.appendChild(title);
  popupDesk.appendChild(titledesk);
  popupDesk.appendChild(link);
  link.appendChild(imgPopup);
  popup.appendChild(languages);
  popup.appendChild(details);
  details.appendChild(imgCont);
  imgCont.appendChild(image);
  details.appendChild(info);
  info.appendChild(descript);
  info.appendChild(access);
  access.appendChild(liOne);
  liOne.appendChild(linkOne);
  linkOne.appendChild(imgIcon);
  access.appendChild(liTwo);
  liTwo.appendChild(linkTwo);
  linkTwo.appendChild(imgIconTwo);
  work.appendChild(container);
}

createPopup(cardOne[0]);

const popupWindow = document.getElementsByClassName('access_button');
const closePopup = document.querySelector('.closePopup');
const popupContainer = document.querySelector('.popup_container');

for (let i = 0; i < popupWindow.length; i += 1) {
  popupWindow[i].addEventListener('click', () => {
    popupContainer.classList.toggle('appear');
  });
}

closePopup.addEventListener('click', () => {
  popupContainer.classList.remove('appear');
});

// variables for the mobile form //
const mobileForm = document.getElementById('mobile-form');
const emailForm = document.getElementById('email-address');
const smTxt = document.getElementById('smText');

// variables for the desktop form //
const desktopForm = document.getElementById('desktop-form');
const emailDesktop = document.getElementById('email');
const smTxtDeskTop = document.getElementById('smText-desktop');

const warning = 'Unable to send the form, please use only lowercase letters for the email.';

// Function for the error - Mobile form //
mobileForm.addEventListener('submit', (e) => {
  if (/[A-Z]/.test(emailForm.value)) {
    e.preventDefault();
    smTxt.textContent = warning;
    smTxt.classList.add('error');
    setTimeout(() => {
      smTxt.textContent = '';
      smTxt.classList.remove('error');
    }, 3000);
  }
});

// Function for the error - desktop form //
desktopForm.addEventListener('submit', (e) => {
  if (/[A-Z]/.test(emailDesktop.value)) {
    e.preventDefault();
    smTxtDeskTop.textContent = warning;
    smTxtDeskTop.classList.add('error');
    setTimeout(() => {
      smTxtDeskTop.textContent = '';
      smTxtDeskTop.classList.remove('error');
    }, 3000);
  }
});