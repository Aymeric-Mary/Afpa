"use strict"

let nbArray = [];
let count = 0;
let sum = 0;
let msg = "";

while(true){
    let nb = parseInt(prompt("Entrez un nombre entier" + (count + 1)));
    if(nb === 0) break;
    console.log("Vous venez d'entrer le nombre : " + nb);
    nbArray[count] = nb;
    sum += nbArray[count];
    count++;
}

msg += count + " nombres saisis" + "\n";
msg += "compris entre " + Math.min(...nbArray) + " et " + Math.max(...nbArray) + "\n"
msg += "Pour une somme de " + sum + "\n"
msg += "Et une moyenne de " + (sum / count).toFixed(2);

alert(msg);
console.log(msg);