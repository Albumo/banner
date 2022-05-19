const sliderElements = document.querySelectorAll('.card');
let currentElement = 0;
const lastElement = sliderElements.length - 1;

function AddRedClass() {

    let nextElement = currentElement + 1;
    if (nextElement > lastElement) nextElement = 0;

    sliderElements[nextElement].classList.add('show');
    sliderElements[currentElement].classList.remove('show');

    currentElement++;
    if (currentElement > lastElement) currentElement = 0;
}
setInterval(AddRedClass, 2000);