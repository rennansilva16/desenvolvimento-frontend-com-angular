/* 
Faça um programa para cálcular o valor de uma viagem.

Você terá três variáveis. Sendo elas:
1 - Preço do Combustível.
2 - Gasto médio de combustível do carro por KM.
3 - Distância em km da viagem.
*/
const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto);