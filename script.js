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


const cardOne = {name:['Multi Post Stories','Keeping track of hundreds  of components website'],
              technologies: ['html', 'Bootstrap', 'Ruby on rails'],
              image: 'images/SnapshootPortfolio.png',
              description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
              liveVersion:'see live',
              source: 'see source'
};

function createPopup (cardnumber){

  //use the documentFragment method for the lists//
  const fragment = document.createDocumentFragment();

  //1st part: adding classes and content//
  //Container to keep all the tags for the popup window//
  let container = document.createElement('section');
  container.classList.toggle('popup_container');
  
  let popup = document.createElement('div');
  popup.classList.toggle('popup');
  
  //Title for the desktop & Mobile version//
  let popupDesk = document.createElement('div');
  popupDesk.classList.toggle('popup_desktop');
  let title = document.createElement('h2');
  title.textContent = cardnumber.name[0];
  let titledesk = document.createElement('h3'); 
  titledesk.textContent = cardnumber.name[1];
  
  //Close icon//
  let link = document.createElement('a');
  link.classList.add('closePopup');
  link.setAttribute('href','#');
  let imgPopup = document.createElement('img');
  imgPopup.setAttribute('src','images/cancel.svg');
  imgPopup.setAttribute('alt','cancel icon');
  
  //List of the languages buttons//
  let languages = document.createElement('ul');
  languages.classList.add('languages') ////****check the class name */
    for (let languagesButtons of cardnumber.technologies) {
      let itemList = document.createElement('li');
      let aimg = document.createElement('a');
      itemList.appendChild(aimg);
      aimg.setAttribute('href','#');
      aimg.textContent = languagesButtons;
      fragment.appendChild(itemList);
    }
    languages.appendChild(fragment);
    
  let details = document.createElement('div');
  details.classList.toggle('popup_details');
  
  //Container for the image//
  let imgCont = document.createElement('div');
  imgCont.classList.toggle('img');
  let image = document.createElement('img');
  image.setAttribute('src', cardnumber.image);  ////image////
  image.setAttribute('alt','Multi post image');
  
  //container for the description area//
  let info = document.createElement('div');
  info.classList.toggle('popup_info');
  
  let descript = document.createElement('p');
  descript.textContent = cardnumber.description;
  let access = document.createElement('ul');
  access.classList.toggle('access_info');

  //Last list//
  
  let liOne = document.createElement('li');
  let linkOne = document.createElement('a');
  linkOne.classList.add('access_button');
  linkOne.setAttribute('href','#');
  linkOne.textContent = cardnumber.liveVersion;
  let imgIcon = document.createElement('img');
  imgIcon.setAttribute('src', 'images/Export.svg');
  imgIcon.setAttribute('alt','export icon');
  let liTwo = document.createElement('li');
  let linkTwo = document.createElement('a');
  linkTwo.classList.add('access_button');
  linkTwo.setAttribute('href','#');
  linkTwo.textContent = cardnumber.source;
  let imgIconTwo = document.createElement('img');
  imgIconTwo.setAttribute('src', 'images/Group.svg');
  imgIconTwo.setAttribute('alt','github icon');
   
  //Tags identation//
  const work = document.querySelector('.work')
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
  liOne.appendChild(linkOne)
  linkOne.appendChild(imgIcon)
  access.appendChild(liTwo);
  liTwo.appendChild(linkTwo);
  linkTwo.appendChild(imgIconTwo);
   
  work.appendChild(container);
}

createPopup(cardOne);




const popupWindow = document.querySelector('#access_popup');
const closePopup = document.querySelector('.closePopup');
const popupContainer = document.querySelector('.popup_container');

popupWindow.addEventListener('click', () => {
  popupContainer.classList.toggle('appear')
})

closePopup.addEventListener('click', () => {
  popupContainer.classList.remove('appear')
})





















