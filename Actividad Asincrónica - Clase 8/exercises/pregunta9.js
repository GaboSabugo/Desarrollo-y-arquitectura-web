let texto2 = "Indrescriptiblemente fantastico";
let espacio = texto2.indexOf(" ");
let final = texto2.substring(0, 1).toUpperCase() + texto2.substring(1, espacio +1).toLowerCase() + 
texto2.substring(espacio + 1, espacio + 2).toUpperCase() + texto2.substring(espacio + 2).toLocaleLowerCase();
console.log("La palabra final es: " + final);