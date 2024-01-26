/*
O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
*/

function formulaImc(peso, altura) {
    let imc = peso / (altura * altura);
    return imc
}

function main() {
    valorImc = formulaImc(60, 1.70);
    if (valorImc < 18.5) {
        imc = console.log('Abaixo do peso');
        return imc
    }
    else if (valorImc >= 18.5 && valorImc < 25) {
        imc = console.log('Peso normal');
        return imc
    }
    else if (valorImc >= 25 && valorImc < 30) {
        imc = console.log('Acima do peso');
        return imc
    }
    else if (valorImc >= 30 && valorImc < 40) {
        imc = console.log('Obeso');
        return imc
    }
    else {
        imc = console.log('Obesidade Grave');
        return imc
    }
}
main();