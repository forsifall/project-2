"use strict"

 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
 import { createProfileInterface, deleteProfileInterface, setAvatar, setDefaultAvatar } from "../components/profileInterface.js";

 import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut 
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

 import { 
    registrButton, 
    sigInButton, 
    removeModal, 
    createSigInInterface, 
    profile 
} from "../modal-window/sigInInterface.js";

 const firebaseConfig = {
   apiKey: "AIzaSyAYwK76qgh1fSdJtBIINP4CbVAkuOVjy1U",
   authDomain: "steam-lat-6fe15.firebaseapp.com",
   projectId: "steam-lat-6fe15",
   storageBucket: "steam-lat-6fe15.firebasestorage.app",
   messagingSenderId: "718960036534",
   appId: "1:718960036534:web:545033039a06aed52fb417",
   measurementId: "G-2W2PELX4L1"
 };

 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);


 enter()

document.addEventListener('DOMContentLoaded', function(){
    
    onAuthStateChanged(auth, (user) => {
        if (user) {
       
            profile.removeEventListener('click',createSigInInterface);
            profile.addEventListener('click', createProfileInterface);
            setAvatar(user.email)

            alert(`вошeл: ${user.email}`);
          
        } else {

            profile.removeEventListener('click', createProfileInterface)
            deleteProfileInterface();
            setDefaultAvatar();
            profile.addEventListener('click', createSigInInterface);

            alert('не зареган');
        }
      });
});



//форма

    document.addEventListener('click',function(event){

        if(event.target !== document.querySelector('.profile__submit')) return;

        event.preventDefault();
 
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        //создаем пользователя
        if(registrButton.classList.contains('border-bottom')) {
    
            createUser(email,password)

        }

        //вход пользователя
         else if(sigInButton.classList.contains('border-bottom')) {

            removeModal() 

            // window.location.reload();

            sigInUser(email,password)
    
        }
    })



    // _________________________функции_________________________


function createUser(email,password) {

    let registreation = createUserWithEmailAndPassword(auth, email, password);

    registreation.then((result) => {

        alert(`пользователь зарегестрирован${result}`)
      
    });

    registreation.catch((error)=> alert(`ошибка ${error}`));

}

function sigInUser(email,password) {

    let sigInPromise = signInWithEmailAndPassword(auth,email,password);

    sigInPromise.then((user) => {

        alert(`здравствуйте, ${email}`);
       
    }) 

    sigInPromise.catch((error) => alert(`ошибка ${error}`));

}


function enter() {

    document.addEventListener('click', function(event){
        if(event.target !== document.querySelector('.profile__sigOut')) return;

        if(!confirm('вы действительно хотите выйти?')) return;

        signOut(auth)

        // window.location.reload()

    })

}