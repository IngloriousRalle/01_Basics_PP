/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/


// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// // Funktion zum Lesen einer Zahl
// function getNumber(question) {
//     return new Promise((resolve) => {
//         rl.question(question, (input) => {
//             const number = parseFloat(input);
//             if (!isNaN(number)) {
//                 resolve(number);
//             } else {
//                 console.log("Ungültige Eingabe. Bitte geben Sie eine Zahl ein.");
//                 resolve(getNumber(question)); // Wiederholen, falls ungültig
//             }
//         });
//     });
// }

// // Funktion zum Lesen der Rechenoperation
// function getOperation() {
//     return new Promise((resolve) => {
//         rl.question("Wählen Sie eine Rechenart (+, -, *, /): ", (operation) => {
//             if (["+", "-", "*", "/"].includes(operation)) {
//                 resolve(operation);
//             } else {
//                 console.log("Ungültige Rechenart. Bitte wählen Sie zwischen +, -, *, /.");
//                 resolve(getOperation()); // Wiederholen, falls ungültig
//             }
//         });
//     });
// }

// // Berechnung
// function calculate(a, b, operation) {
//     switch (operation) {
//         case "+":
//             return a + b;
//         case "-":
//             return a - b;
//         case "*":
//             return a * b;
//         case "/":
//             if (b === 0) {
//                 console.log("Division durch 0 ist nicht erlaubt.");
//                 return null;
//             }
//             return a / b;
//         default:
//             return null;
//     }
// }

// // Hauptprogramm
// async function main() {
//     console.log("Willkommen zum einfachen Rechner!");
    
//     const a = await getNumber("Geben Sie die erste Zahl ein: ");
//     const b = await getNumber("Geben Sie die zweite Zahl ein: ");
//     const operation = await getOperation();

//     const result = calculate(a, b, operation);
//     if (result !== null) {
//         console.log(`Ergebnis: ${a} ${operation} ${b} = ${result}`);
//     } else {
//         console.log("Die Berechnung konnte nicht durchgeführt werden.");
//     }

//     rl.close();
// }

// main();



/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/


// module: addition a + b |  test:
output(add(3,2));
output(add(3,-2));
output(add(3,0));
function add(a,b) {
    return a + b;
}


// module: output | test:
function output(outputData) {
    
}
// module: multiplication a * b |  test:
// output(multiply(3,2));
// output(multiply(3,-2));
// output(multiply(3,0));
function multiply(a,b) {
	return  a * b;
}

// module: subtraction a - b |  test:
// output(subtract(3,2));
// output(subtract(3,-2));
// output(subtract(3,0));
// output(subtract(0,2));
function subtract(a,b) {
	return a - b;
}

// module: addition a + b |  test:
// output(add(3,2));
// output(add(3,-2));
// output(add(3,0));
function add(a,b) {
    return a + b;
}

// module: output | test:
// output("hi");
// output(2);
// output(true);
function output(outputData) {
    console.log(outputData);
}