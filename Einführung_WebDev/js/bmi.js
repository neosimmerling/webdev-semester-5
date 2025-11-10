'use strict'

document.addEventListener('DOMContentLoaded', init);

function init() {
    calcButton.addEventListener('click', calcBMI);
    // calcButton.addEventListener('click', function () { werWars(this)});
    // koerper.addEventListener('click',  function () { werWars(this)}, true);
    // formular.addEventListener('click',  function () { werWars(this)});
}

function werWars(element) {
    alert(element.nodeName);
}

/* BMI = kg/(cm*cm) */
function calcBMI() {
    let bmi = mass.value / ((size.value/100)**2);  /* **2 = Quadrat */
    console.debug("mass: " + mass.value);
    console.debug("size: " + size.value);
    console.debug("BMI: " + bmi);

    out.style.backgroundColor = setColor(bmi);
    out.style.color = "black";
    out.value = bmi;
}

function setColor(bmi){
    let color = "transparent";
    if (bmi < 18.5) color = "cyan";
    else if (bmi <= 24.9) color = "green";
    else if (bmi <= 30) color = "yellow";
    else if (bmi <= 35) color = "orange";
    else if (bmi <= 40) color = "red";
    else color = "darkred";

    return color;
}