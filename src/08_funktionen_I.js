/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf | call
// teste();


// Funktionsrumpf | callee
// Funktionsdeklaration
function test()
{
    console.log("Hallo, Manuel!");
}
/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

ausgabeNamen();

function ausgabeNamen() {

    let firstName = "Manuel";
    console.log("Hallo, " + firstName + "!");
    
}


/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

ausgabeNamen2("Vladimir");

function ausgabeNamen2(firstName) { // Parameter
    console.log("Hallo, " + firstName + "!");
    
}
/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

ausgabeNamenParams("max", "mütze");

const prompt = require('prompt-sync')({sigint: true});
ausgabeNamenParams(prompt("Vorname? :"),prompt("Name? :")); // Piping

function ausgabeNamenParams(firstName, secondName) {
    console.log("Hallo, " + firstName + " " + secondName + "!");
}


/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle


ausgabeNamenSRP("Max","Mütze");

function ausgabeNamenSRP(firstName, secondName) {
        
// 1. Funktionalität: string composing
const GAP = " ";
let outputStr = "Hallo," + GAP + firstName + GAP + secondName + "!"

// 2. Funktionalität: string output
console.log(outputStr);
}


