// Mobile menu //
import {
  menu, closeButton, closeMenu, closeMenuTwo, closeMenuThree, mobileForm, burgerMenu, emailForm, smTxt, work, popupWindow,
} from './variables.js';

import createPopUp from './createPopUp.js';
import cardOne from './popUpArray.js';

export const openMenu = menu.addEventListener('click', () => {
  burgerMenu.classList.toggle('menu_active');
});

export const closeMenuButton = closeButton.addEventListener('click', () => {
  burgerMenu.classList.toggle('menu_active');
});

export const closeTheMenu = closeMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('menu_active');
});

export const closeTheMenuTwo = closeMenuTwo.addEventListener('click', () => {
  burgerMenu.classList.toggle('menu_active');
});

export const closeTheMenuThree = closeMenuThree.addEventListener('click', () => {
  burgerMenu.classList.toggle('menu_active');
});

// caps error for the form //
export const formError = mobileForm.addEventListener('submit', (e) => {
  if (/[A-Z]/.test(emailForm.value)) {
    e.preventDefault();
    smTxt.textContent = 'Unable to send the form, please use only lowercase letters for the email.';
    smTxt.classList.add('error');
    setTimeout(() => {
      smTxt.textContent = '';
      smTxt.classList.remove('error');
    }, 3000);
  }
});

// Open & close pop-up //

export const openPopUp = work.addEventListener('click', (e) => {
  for (let i = 0; i < popupWindow.length; i += 1) {
    if (e.target.classList.contains(i)) {
      createPopUp(cardOne[i]);
      const popupContainer = document.querySelector('.popup_container');
      popupContainer.classList.add('appear');
    }
  }
});

work.addEventListener('click', (e) => {
  if (e.target.classList.contains('closing')) {
    const popupContainer = document.querySelector('.popup_container');
    work.removeChild(popupContainer);
  }
});