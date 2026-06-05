function validateInteger(numero) {

    if (!Number.isInteger(numero)) {
        alert("El número " + numero + " no es entero. Se redondeará.");
        return Math.round(numero);
    }

    return numero;
}

function suma(numero1, numero2) {

    numero1 = validateInteger(numero1);
    numero2 = validateInteger(numero2);

    return numero1 + numero2;
}

let resultado27 = suma(10.7, 20.3);

console.log(resultado27);