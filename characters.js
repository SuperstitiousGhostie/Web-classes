"use strict";
alert("Welcome to the Adventure Realm! Let's create your hero!")
let charName = prompt("Whats is your character's name?");
let charPet = prompt("What kind of pet does ${charName} have?");
let charPower = prompt("What is [charName]'s special superpower?");
let fightMon = confirm("Does ${charName} like fighting monsters?");
alert("Gathering magic for ${charName}... almost ready!")
alert("=================================");
alert("You named your superhero ${charName}, they have a pet ${charPet}. They are able to ${charPower}. Do they like fighting monsters? ${fightMon}.");
alert("=================================");