"use- strict"

let i = "i";

export {i}

let header = document.querySelector('.header');

let modalSearch = document.querySelector('#search-template').innerHTML;

headerSearch.addEventListener('click', function(event){

    function getScrollbarwidth() {
        return window.innerWidth - document.documentElement.clientWidth;
    }

    let scrollbar = getScrollbarwidth();

 document.body.insertAdjacentHTML("beforeend", modalSearch);
 document.body.style.overflow = "hidden";
 header.style.opacity = 0;
 modalSearchInput.focus();
 document.body.style.paddingRight = `${scrollbar}px`

 let cross = document.querySelector('.cross')

cross.addEventListener('click',function(){
    let modal = document.querySelector('.modal');
    modal.remove();
    document.body.style.overflow = "";
    header.style.opacity = "";
    document.body.style.paddingRight = ``

})


});


