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