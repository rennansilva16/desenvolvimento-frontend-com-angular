const {gets, print} = require('./funcoes-auxiliares');

const quantidadeDeAlunos = gets();
/*
    Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    Saída:
    98
*/

let maiorValor = 0;

for(i = 0; i < quantidadeDeAlunos; i++){
    let numeroSorteado = gets();
    if (numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}
print(maiorValor);
