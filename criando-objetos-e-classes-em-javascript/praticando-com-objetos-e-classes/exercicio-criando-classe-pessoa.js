/*
    2) Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
    do seu IMC;

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    apresentarImc() {
        return this.peso / (this.altura * this.altura)
        // `Olá meu nome é ${this.nome} e o meu imc é ${this.peso / (this.altura * this.altura)}.`;
    }

    classificarImc() {
        const imc = this.apresentarImc();
        if (imc < 18.5) {
            return `${this.nome} está abaixo do peso`;
        } else if (imc >= 18.5 && imc < 25) {
            return `${this.nome} está com o peso normal`;
        } else if (imc >= 25 && imc < 30) {
            return `${this.nome} está acima do peso`;
        } else if (imc >= 30 && imc < 40) {
            return `${this.nome} está com obesidade`;
        } else {
            return `${this.nome} está com obesidade grave`;
        }
    }
}

    const jose = new Pessoa('José', 70, 1.75);

    console.log(jose.classificarImc());