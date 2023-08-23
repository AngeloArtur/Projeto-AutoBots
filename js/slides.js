function hideSlide() {
    slider.forEach(element => element.classList.remove('on'));
}

function showSlide() {
    slider[slideIndex].classList.add('on')
}

function nextSlide() {
    hideSlide()
    if(slideIndex === slider.length-1) {
        slideIndex = 0;
    } else{
        slideIndex++;
    }
    showSlide()
}

function previewSlide() {
    hideSlide()
    if(slideIndex === 0) {
        slideIndex = slider.length-1;
    } else{
        slideIndex--;
    }
    showSlide()
}

const slider = document.querySelectorAll('.slider');
const btnPreview = document.getElementById('btn-preview');
const btnNext = document.getElementById('btn-next');

let slideIndex = 0

btnNext.addEventListener('click', nextSlide)
btnPreview.addEventListener('click', previewSlide)