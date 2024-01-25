/* 
Incremento do programa para cálcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do Etanol.  
2 - Preço da gasolina.  
3 - O tipo de combustível que está no carro.  
4 - Gasto médio de combustível do carro por km.  
5 - Distância em km da viagem.

Imprima no console o valor que será gasto para realizar essa viagem.
*/
const precoEtanol = 3.79;
const precoGasolina = 5.79;
let tipoDeCombustivel = 0
const kmPorLitros = 10;
const distanciaEmKm = 100;

let litrosConsumidos = litrosConsumidos = distanciaEmKm / kmPorLitros;
let valorGasto = 0;


if (gasolina) {
    valorGasto = litrosConsumidos * precoGasolina;
} else {
    valorGasto = litrosConsumidos * precoEtanol;
}

console.log(valorGasto.toFixed(2));