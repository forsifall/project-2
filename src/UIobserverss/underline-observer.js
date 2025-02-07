"use strict"

let o = "o"

export {o};

let underlines = document.querySelectorAll('.underline');

let observeUnderline = (enties,observer) => {
    enties.forEach((entry) => {

        if(entry.isIntersecting) {

            entry.target.classList.add('underLine-animation-observer');

            
        } else {
            entry.target.classList.remove('underLine-animation-observer')
        }

    })
}

let observer = new IntersectionObserver(observeUnderline);

underlines.forEach((elem) => observer.observe(elem));