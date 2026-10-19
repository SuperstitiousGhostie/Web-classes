/*Kylie P. Number Quiz, 10-19-26 */
"use strict";
let intScore = 0;
const sa1 = 8;
const sa2 = 6;
const sa3 = 12;
const sa4 = 4;
const sa5 = "Elizabeth";

alert("Welcome to Math Quiz! I will give you math problems and you will need solve them.")
let answ1 = parseInt(prompt("What is 5+3?"));
if (answ1 === sa1){
    intScore++
    alert("That answer was correct!")
}
else{
    alert("That answer was incorrect...")
}
let answ2 = parseInt(prompt("What is 10-4?"));
if (answ2 === sa2){
    intScore++
    alert("That answer was correct!")
}
else{
    alert("That answer was incorrect...")
}
let answ3 = parseInt(prompt("What is 4x3?"));
if (answ3 === sa3){
    intScore++
    alert("That answer was correct!")
}
else{
    alert("That answer was incorrect...")
}
let answ4 = parseInt(prompt("What is 20/5"));
if (answ4 === sa4){
    intScore++
    alert("That answer was correct!")
}
else{
    alert("That answer was incorrect...")
}
alert("You're on a role! Keep going...")
let answ5 = prompt("What is my middle name?")
if (answ5 === sa5){
    intScore++
    alert("That answer was correct!")
}
else{
    alert("That answer was incorrect...")
}
alert("Alright! Adding up your total score...")
if (intScore >= 3){
    alert("Great Job! You got at least three questions right...")
}
alert("Your total score was " + intScore + "/5")