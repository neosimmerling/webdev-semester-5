'use strict'        //strenger Modus
// var = global
// let = lokal

var zahl = 10;
var zahl2 = 187;

const pi = 3.14;

const user = "Simmi";

console.log("Zahl = " + zahl);
console.log("Pi = " + pi);

console.warn("Achtung, der " + user + " kommt!");
{
    let zahl2 = 25;
    console.log(zahl2 + "+" + zahl + "=" + (zahl+zahl2));
}

// wird 187, weil zahl2 in Zeile 19 lokal definiert ist (let), 
console.log("Zahl2 = " + zahl2);

let namen = ["Treder", "Simmi", "Zschäck", "Jochen", "Walter", "Bergner"]
console.log(namen[3]);      //Index beginnt bei 0

let mitarbeiter = new Array(
    new Array("Schmidt", "Grimm", "Günther", 187),
    new Array("Helga", "André", "Daniel", 67)
);

console.log(mitarbeiter[1][1] + " " + mitarbeiter[0][1]);
console.error(`Verdienst: ${mitarbeiter[0][3] - mitarbeiter[1][3]}`);   // 187 - 67

console.debug("+++ Eine Debug-Meldung +++");
console.log("Dies könnte eine Logdatei sein");
console.info("Infoooooo");
console.warn("ACHTUNG ACHTUNG");
console.error("Satz mit X, das war wohl Nix!");