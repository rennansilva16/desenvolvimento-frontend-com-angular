// 1) Crie um programa que dado um número imprima a sua tabuada.

function calcularTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        return `${numero} x ${i}: ${numero * i}`;
    }
}
calcularTabuada(3);