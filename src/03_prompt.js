
const prompt = require('prompt-sync')({sigint: true});

// Alles muss man selber machen lassen!
 let firstName = prompt("Vormane?:");
 let familyName = prompt("Name?:");
 console.log("Hallo, " + firstName + " " + familyName +"!");