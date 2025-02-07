"use strict"

let tt = 'tt';

export {tt}

let texts = document.querySelectorAll('.textNormal');

let textIsObserve = (entries,text) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('textNormalAnimation');

            text.unobserve(entry.target);
        }

    }) 
}

let options = {
    rootMargin: "0px 0px -200px 0px",
}

let observer = new IntersectionObserver(textIsObserve,options);

texts.forEach((elem) => observer.observe(elem));