/*
Testes/Treino Aula - Conceito Básico Sobre Funções


function incrementarJuros (valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo 
}
 return(incrementarJuros(100, 10));
 return(incrementarJuros(100, 15));
 return(incrementarJuros(100, 20));
 */





/*
Testes/Treino Aula - Como Organizar Funções


function calcularJuros() {

}

function main() {
   return('Programa principal');
   calcularJuros();
}

main();
*/





/*
Testes/Treino Aula - Exemplo Prático com Funções


function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return ('Abaixo do peso');
    } else if (imc >= 18.5 && imc < 25) {
        return ('Peso normal');
    } else if (imc >= 25 && imc < 30) {
        return ('Acima do peso');
    } else if (imc >= 30 && imc < 40) {
        return ('Obeso');
    } else {
        return ('Obesidade Grave');
    }

}
function main() {
    const peso = 65;
    const altura = 1.70;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}

main();
*/




/*
Testes/Treino Aula - Funções Invocada Imediatamente


function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return ('Abaixo do peso');
    } else if (imc >= 18.5 && imc < 25) {
        return ('Peso normal');
    } else if (imc >= 25 && imc < 30) {
        return ('Acima do peso');
    } else if (imc >= 30 && imc < 40) {
        return ('Obeso');
    } else {
        return ('Obesidade Grave');
    }

}

(function () {
    const peso = 75;
    const altura = 1.75;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();
*/