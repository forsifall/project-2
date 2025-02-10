"use strict"

import { profile } from "../modal-window/sigInInterface.js";

let m = 'mm';
export{m}

let profileInterface = document.createElement('div');

function createProfileInterface() {

    if(deleteProfileInterface()) return;
 
profileInterface.classList.add('profile-interface');
profileInterface.insertAdjacentHTML('beforeend', `<button type="button" class="profile__sigOut">выход</button>`);
document.body.append(profileInterface);
setCoordsProfile(profile);

console.log('dqdwq')

}

function setCoordsProfile(element) {

    let top = element.getBoundingClientRect().bottom + 20;
    let left = element.getBoundingClientRect().left - profileInterface.offsetWidth + element.offsetWidth;
    
    profileInterface.style.top = top + 'px';
    profileInterface.style.left = left + 'px';
}

function deleteProfileInterface() {

    if(document.querySelector('.profile-interface')) {
        profileInterface.innerHTML = "";
        document.querySelector('.profile-interface').remove();
        return true;
    }; 

}

function setAvatar(email) {

    let icon = document.querySelector('.profile');

    let firstStr = email[0];

    icon.replaceWith(firstStr.toUpperCase());

}

function setDefaultAvatar() {

    let iconContainer = document.querySelector('.sigIn');

    let svg = document.createElement('span');
    svg.insertAdjacentHTML('beforeend', `    <svg xmlns="http://www.w3.org/2000/svg" class="profile" width="28" height="28" viewBox="0 0 24 24"><path fill="var(--dark-color-40)" d="M12 12.75c3.942 0 7.987 2.563 8.249 7.712a.75.75 0 0 1-.71.787c-2.08.106-11.713.171-15.077 0a.75.75 0 0 1-.711-.787C4.013 15.314 8.058 12.75 12 12.75m0-9a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5"/></svg>
 `);
    svg.classList.add('profile');

    iconContainer.innerHTML = svg.innerHTML;

}

export {createProfileInterface, deleteProfileInterface}
export {setAvatar, setDefaultAvatar}
