"use strict"

export {gallerey1TextSectionM}

let gallerey1TextSectionM = document.querySelector('.gallerey1__text-sectionM');

let textM = document.querySelectorAll('.text-animation-off');

function addClass() {

    let coordsTrigger = gallerey1TextSectionM.getBoundingClientRect().bottom + document.documentElement.scrollTop;

    if( coordsTrigger < document.documentElement.scrollTop + window.innerHeight ) {

        textM.forEach((current)=>{
                        current.classList.add('text-animation-on');
                    })
        textAnimationLSpan.classList.add('text-animation-left-on');
        textAnimationLH1.classList.add('text-animation-left-on');
        textAnimationRSpan.classList.add('text-animation-right-on');
        textAnimationRH1.classList.add('text-animation-right-on');
        
        return
    }  
    
      textM.forEach((current)=>{
            current.classList.remove('text-animation-on');
        })
    textAnimationLSpan.classList.remove('text-animation-left-on');
    textAnimationLH1.classList.remove('text-animation-left-on');
    textAnimationRSpan.classList.remove('text-animation-right-on');
    textAnimationRH1.classList.remove('text-animation-right-on');
}


function throttle(callback, ms) {

    let timer = null;

    return function(...args) {
        if(timer) return;

        timer = setTimeout(() => {
            callback();

            clearTimeout(timer);
            timer = null;

        },ms);
    }
}

let textAnimationOptimized = throttle(addClass,300);

document.addEventListener('scroll', textAnimationOptimized);

