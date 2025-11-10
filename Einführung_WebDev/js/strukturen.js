'use strict'

let i = 0;

for(let i=0; i<5; i++) {
    document.write("<h2>Hallöleeeee</h2>");
}

while(i<5) {
    document.write("<h2>Hallooooo</h2>");
    document.write(`5<sup>${i}</sup> = ${pow(5,i)}`);
    i++;
}

do {
    document.write("<h2>Huhuuuuu</h2>");
    i++;
} while(i<5);

console.log("i: " + i);



function pow(basis, exponent) {
    return basis**exponent;
}

function zeilenweise(text) {
    for(let zeichen of text) {
        document.write(zeichen + "<br>");
    }
    document.write("<br>");
}

let text = "Simmeldingdong";
zeilenweise(text);

let mitarbeiter = new Array(
    new Array("Name", "Vorname", "Gehalt", "Sprache"),
    new Array("Grimm", "André", 187, "DE"),
    new Array("Bonk", "Michael", 67, "EN"),
    new Array("Müller", "Carlos", 3, "ES"),
    new Array("Barié", "Daniel", -5, "idk")
);


function createTable(dataArray) {
    let resultString = "<table>";
    for(let i=0; i<dataArray.length; i++) {
        if(i === 0) {
            resultString += createTableHeader(dataArray[i]);
        } else {    
            resultString += "<tr>"; 
            for(let zelle of dataArray[i]) {
                resultString += "<td>" + zelle + "</td>"; 
            }
            resultString += "</tr>"; 
        }
    }
    resultString += "</table>" + "<br>";
    document.write(resultString); 
}

function createTableHeader (headerRow) {
    let resultString = "<thead><tr>";
    for(let cell of headerRow) {
        resultString += "<th>" + cell + "</th>"; 
    }
    return resultString += "</tr></thead>";
}

createTable(mitarbeiter);