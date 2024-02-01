// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.

const numeros = [];

for (i = 0; i <= 100; i++) {
    numeros.push(i);
}

function falarNumeroPar() {
    for (let i = 0; i <= numeros.length; i++) {
    const numero = numeros[i];
        if (numero % 2 === 0) {
            console.log(`O número ${numero} é par.`);
        }
    }
}

falarNumeroPar();