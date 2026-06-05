function validateInteger(numero) {
    return Number.isInteger(numero);
}

function suma(numero1, numero2) {

    if (!validateInteger(numero1)) {
        alert("El primer número no es entero. Se redondeará.");
        numero1 = Math.round(numero1);
    }

    if (!validateInteger(numero2)) {
        alert("El segundo número no es entero. Se redondeará.");
        numero2 = Math.round(numero2);
    }

    return numero1 + numero2;
}

let resultado26 = suma(10.7, 20.3);

console.log(resultado26);