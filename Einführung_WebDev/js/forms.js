'use strict'

document.addEventListener('DOMContentLoaded', init);

function init() {
    let inputs = document.querySelectorAll('.fancy-label>input');
    for(let element of inputs) {
        scaleLabel(element, true);
        element.addEventListener('focus', function () { scaleLabel(this, false); });
        element.addEventListener('blur', function () { scaleLabel(this, true); });
    }
}

function scaleLabel(element, isPlaceholder) {
    if(isPlaceholder === true) {
        if(element.value === "") {
            element.parentNode.children[0].classList.add('like-placeholder'); 
        }
    } else {
        element.parentNode.children[0].classList.remove('like-placeholder');
    }
}