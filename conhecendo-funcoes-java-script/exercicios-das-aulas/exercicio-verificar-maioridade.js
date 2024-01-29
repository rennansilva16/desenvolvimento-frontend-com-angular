function escrevaMeuNome (nome){
    console.log('Meu nome é ' + nome);
}

//escrevaMeuNome('Vitor');
//escrevaMeuNome('Renan');

function verificarMaioridade (nome, idade){
    if (idade <18){
        verificacao = 'é menor de idade.';
    } else {
        verificacao = 'é maior de idade.';
    }
    console.log('O ', nome, verificacao);
}

verificarMaioridade('Rennan', 23);