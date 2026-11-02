//Kylie P. loops week 5
"use strict"
let fragile = 0;
let loaded = 0;
let inspect = 0;
let crate = 0;

for (crate = 0; crate < 20; crate++) {

if (crate % 5 === 0){
fragile++;
} else if (crate % 2 === 0 && !crate % 5 === 0) {
loaded++;
} else{
inspect++;
}
}

alert(`Crate Summary
  ___________________________________

    Fragile crates ............. ${fragile}
    Loaded crates .............. ${loaded}
    Inspected crates ........... ${inspect}

  ___________________________________
    Total crates loaded: ${crate}`)