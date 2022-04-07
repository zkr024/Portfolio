import { work } from './variables.js';

function createPopUp(cardNumber) {
  work.innerHTML += `
    <section class="popup_container">
        <div class="popup">
            <div class="popup_desktop">
                <h2>${cardNumber.name}</h2>
                <h3>${cardNumber.nameTwo}</h3>
                <a class="closePopup" href="#">
                    <img src="images/cancel.svg" alt="cancel icon" class="closing">
                </a>
            </div>
            <ul class="languages">
                <li class="lang_li">${cardNumber.technologies[0]}</li>
                <li class="lang_li">${cardNumber.technologies[1]}</li>
                <li class="lang_li">${cardNumber.technologies[2]}</li>
            </ul>
            <div class="popup_details">
                <div class="img">
                    <img src="${cardNumber.image}" alt="Multi post image">
                </div>
                <div class="popup_info">
                    <p>${cardNumber.description}</p>
                    <ul class="access_info">
                        <li>
                            <a class="access_button" href="${cardNumber.linkDemo}">${cardNumber.liveVersion}
                                <img src="images/Export.svg" alt="export icon">
                            </a>
                        </li>
                        <li>
                            <a class="access_button" href="${cardNumber.LinkRepo}">${cardNumber.repo}
                                <img src="images/Group.svg" alt="github icon">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    `;
}

export default createPopUp;