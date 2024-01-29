function escrevaMeuNome (nome){
    return 'Meu nome é ' + nome + '. ';
}

//escrevaMeuNome('Vitor');
//escrevaMeuNome('Renan');

function verificarIdade(nome, idade) {
    if (idade >= 18) {
        console.log(escrevaMeuNome(nome) + 'Eu sou maior de idade.');
    } else {
        console.log(escrevaMeunome(nome) + 'Eu sou menor de idade');
    }
}
verificarIdade('Rennan', 23);
//verificarIdade(11);