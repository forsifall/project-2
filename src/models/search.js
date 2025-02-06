"use strict"

let v = "v";
export {v};


headerSearch.addEventListener('click', function(event) {

    let search = document.querySelector('.modal-search__input');
    let clear = document.querySelector('.modal-search__interection-buttons span:first-child');

clear.addEventListener('click', function(event){
    search.value = "";
    search.focus()
    let inputEvent = new Event('input');
    search.dispatchEvent(inputEvent);

})

});

headerSearch.addEventListener('click', function(event){
                           
    let form = document.forms.searchForm;
    let searchSubmit = form.searchModal;

    let cards = document.querySelector('.card__container').children;
    let cardsValue = Array.from(cards, function(item){
        return item.getAttribute('name-card');
    });
    
    function showCards(index,inputValue) {
       
        let modalContent = document.querySelector('.modal-search__content');
        modalContent.append(cards[index].cloneNode(true));
        

    }
    
    function hideCards() {
        let modalContent = document.querySelector('.modal-search__content');
        modalContent.replaceChildren();
    }

    searchSubmit.addEventListener('input', function(event){

        hideCards();

        let inputValue = searchSubmit.value.trim();
        
        if(inputValue !== "") {

        cardsValue.forEach((current,index) => {
            if(current.includes(inputValue)) {
                
                showCards(index,inputValue);
            } 
        })

        if(document.querySelector('.modal-search__content').firstElementChild) return;
        
        createNotFound();

    } else {
           createNotFound()
    }

    })

})

function createNotFound() {
    let modalContent = document.querySelector('.modal-search__content');
    let notFound = document.createElement('div');
    notFound.append(document.createElement('span').innerHTML = "ничего не найдено");
    notFound.classList.add('not-found');
    modalContent.append(notFound);
}

