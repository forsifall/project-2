"use strict"

let y = "u";

export {y}

let profile = document.querySelector('.sigIn');
let sigInButton = null;
let registrButton = null;

//---------отслеживаем клик значка профиля и делаем действия нужные при клике----------

profile.addEventListener('click', createSigInInterface);



// ______________________функции_____________________________



function borderBottom() {
    event.target.classList.add('border-bottom');
}


function createSigInInterface() {

    createModal()


    let cross = document.querySelector('.profile__cross');
    cross.addEventListener('click', function() {
        
        removeModal()
    
    })
    
    formsListener()
}


//создаем модальное окно профиля
function createModal () {
    
    let sigInWindow = document.querySelector('#profileModalWindow').innerHTML;
    document.body.insertAdjacentHTML("beforeend",sigInWindow);
    document.querySelector('.profile__header span:nth-child(2)').classList.add('border-bottom');

    document.body.style.overflow = "hidden";
    document.querySelector('.header').style.display ="none";

}

//убираем модальное окно профиля
function removeModal() {

    document.querySelector('.modal').remove();
    document.body.style.overflow = "";
    document.querySelector('.header').style.display ="";

}

//отслеживаем клики по регистрации и входу

function formsListener() {
    registrButton = document.querySelector('.profile__header span:nth-child(2)');
    sigInButton = document.querySelector('.profile__header span:nth-child(1)');
   
   registrButton.addEventListener('click', function(){
       if(sigInButton.classList.contains('border-bottom')) {
           sigInButton.classList.remove('border-bottom');
       }
       
       document.getElementById("email").value = "";
       document.getElementById("password").value = "";
   
       borderBottom();
   })
   
   sigInButton.addEventListener('click', function(){
       if(registrButton.classList.contains('border-bottom')) {
           registrButton.classList.remove('border-bottom');
       } 
       
       document.getElementById("email").value = "";
       document.getElementById("password").value = ""; 
   
       borderBottom();
   })
}

export {sigInButton, registrButton, removeModal}
export {createSigInInterface}
export {profile}

