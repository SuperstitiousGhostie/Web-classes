//Kylie P. 10-26-26
//
"use strict";

let choice = prompt(`What math operation would you like to do? 
    add
    subtract
    multipy
    divide
    exit`);

    let num1;
    let num2;

switch(choice) {
        case 'add':
            num1 = Number(prompt("Pick a number."));
            num2 = Number(prompt("Pick another number."));
            let sum = (num1) + (num2);
            alert(num1 + "+" + num2 + "=" + sum);
     break;

         case 'subtract':
            num1 = Number(prompt("Pick a number."));
            num2 = Number(prompt("Pick another number."));
            let difference = (num1) - (num2);
            alert(num1 + "-" + num2 + "=" + difference);
     break;

         case 'multiply':
            num1 = Number(prompt("Pick a number."));
            num2 = Number(prompt("Pick another number."));
            let product = (num1) * (num2);
            alert(num1 + "*" + num2 + "=" + product);
     break;

        case 'divide':
            alert("Remember you cannot divide by zero.")
            num1 = Number(prompt("Pick a number."));
            num2 = Number(prompt("Pick another number."));
            let quotient = (num1) / (num2);
            alert(num1 + "/" + num2 + "=" + quotient);
     break;

        case 'exit':
        case '':
        alert("Exiting program...");
    break;

        default:
        alert("You have entered an invalid input");
    break;
}