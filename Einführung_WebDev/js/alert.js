alert("Hallöle, jetzt geht's ab");

let userName = window.prompt("Eingabe Vorname:");

alert(`Willkommen ${userName}`);

if(confirm("Are you ready?")) {
    alert("Es geht los :)");
} else {
    alert("Es geht nicht los :(");
}