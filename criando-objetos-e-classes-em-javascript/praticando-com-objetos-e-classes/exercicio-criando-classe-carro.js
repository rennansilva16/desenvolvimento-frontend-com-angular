/*
    1) Crie uma classe para representar carros. 
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
    Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
    gasto em reais para realizar este percurso.
*/

class Carro {
    tipo;
    marca;
    cor;
    gastoMedioPorKm;

    constructor (tipo, marca, cor, gastoMedioPorKm) {
        this.tipo = tipo;
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = 1 / gastoMedioPorKm
        // gastoMedioPorKmRodado = litrosConsumidos / distanciaPercorridaEmKm;
    }

    calculoCombustivel (distanciaEmKm, precoCombustivel) {
        return `O custo com combustível gasto no ${this.tipo} na viagem será: ` + distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const hb20 = new Carro('HB 20', 'Hyundai', 'Preto', 16)
const fordka = new Carro('Ford Ka', 'Ford', 'Branco', 13)

console.log(hb20.calculoCombustivel(60, 4.49));
console.log(fordka.calculoCombustivel(60, 4.49));