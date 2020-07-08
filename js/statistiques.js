"use strict"

let count = 0;
let sum = 0;
let greater;
let smaller;
let msg;

while (true) {
     let nb = parseInt(prompt("Entrez le nombre " + count));
     if(nb === 0) break;
     if((typeof smaller === 'undefined' || nb < smaller)) {
         smaller = nb;
     }
     if(typeof greater === 'undefined' || nb > greater){
        greater = nb;
     }
     sum += nb;
     console.log("Vous venez d'entrer : " + nb);
     count++;
}
msg = count + " nombres saisis" + "\n" + "compris entre " + smaller + " et " + greater + "\n" + "Pour une somme de " + sum + "\n" + "Et une moyenne de " + (sum / count).toFixed(2);
console.log(msg);
alert(msg);