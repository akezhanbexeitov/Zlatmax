import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

// ==================== Spoilers ====================
const arrowDown = document.querySelector('._icon-arrow-down')
const phoneList = document.querySelector('.phones-header__list')

arrowDown.addEventListener('click', () => {
    if (phoneList.style.maxHeight == 0) {
        phoneList.style.padding = 15 + 'px'
        phoneList.style.maxHeight = phoneList.scrollHeight + 30 + 'px';
    } else {
        phoneList.style.maxHeight = null;
        phoneList.style.padding = 0 + 'px';
    }
})
