'use strict'

function init() {
let mainHeader = document.getElementById('main-header');
console.debug(mainHeader);
    for (let element of document.getElementsByClassName('test')) {
        element.style.color = "green";
    }
    document.getElementsByName('hallo')[0].style.background = "grey";   /* [0] =  nur das erste Element */

    for(let element of document.getElementsByTagName('h2')) {
        element.style.fontStyle = "italic";     /* kursiv */
    }
    document.querySelector('.blah .test').style.fontSize = "larger";

    testChapter.style.backgroundColor = "white";
}

document.addEventListener('DOMContentLoaded', init);