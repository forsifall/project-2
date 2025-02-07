"use strict"

let o = "o"

export {o};

let underlines = document.querySelectorAll('.underline');

let observeUnderline = (enties,observer) => {
    enties.forEach((entry) => {

        if(entry.isIntersecting) {
            console.log('наблюдаю линию');

            entry.target.classList.add('underLine-animation-observer');

            observer.unobserve(entry.target);
        } 

    })
}

let observer = new IntersectionObserver(observeUnderline);

underlines.forEach((elem) => observer.observe(elem));