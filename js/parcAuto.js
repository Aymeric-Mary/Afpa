"use strict"

let mercedes = new Car('AB-123-CD','Grise',800,90,55,5);
mercedes.repaint("Bleu");
mercedes.refuel(50);
mercedes.move(1000, 80);
mercedes.refuel(40);
alert(mercedes.getLevelFuel());
console.log(mercedes.getMsg())
console.log(mercedes.toString());