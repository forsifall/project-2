"use strict"

let t = "t"

export {t}

let buttons = document.querySelectorAll('.gallerey2__buttons');
let photos = document.querySelectorAll(".gallerey2__photo");
let prevImages = 0;

function showImage(currentImage) {
    photos[prevImages].classList.remove('active');
    photos[currentImage].classList.add('active');
    prevImages = currentImage;
}

buttons.forEach((current) => {
    current.addEventListener("click",function(event){
        if(event.target.parentElement.matches('.gallerey2__buttons.prev')) {
         
            let currentImage = prevImages - 1;

            if(currentImage < 0) {
                currentImage = 0;
                return;
            }
            showImage(currentImage)
        }

        else if(event.target.parentElement.matches('.gallerey2__buttons.next')) {
            
            let currentImage = prevImages + 1;

            if(currentImage > photos.length - 1) {
                currentImage = photos.length -1;
                return;
            }
            showImage(currentImage)
        }
    })
})

