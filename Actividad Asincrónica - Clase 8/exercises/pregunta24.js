function suma(numero3, numero4) {
    if (typeof numero3 !== 'number' || typeof numero4 !== 'number') {
        throw new Error('Ambos argumentos deben ser números');
    }   
    return numero3 + numero4;
}

let resultado24 = suma(10, 20);

console.log(resultado24);