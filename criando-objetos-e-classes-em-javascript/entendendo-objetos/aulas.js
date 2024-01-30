/*
TESTES/TREINOS - AULA: ESTRUTURA BÁSICA DE UM OBJETO

const vitor = {
    nome: 'Vitor J Guerra',
    idade: 25
};

console.log(vitor.nome);
console.log(vitor.idade);
console.log(vitor);
*/

/*
TESTES/TREINOS - AULA: EDITANDO INFORMAÇÕES DE UM OBJETO

const vitor = {
    nome: 'Vitor J Guerra',
    idade: 25
};

vitor.altura = 1.69;

 delete vitor.nome;

console.log(vitor);
*/

/*
TESTES/TREINOS - AULA: CRIANDO MÉTODOS PARA O OBJETO

const pessoa = {
    nome: 'Vitor J Guerra',
    idade: 25,

    descrever: function () {
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
    }
};

pessoa.descrever();
*/

/*
TESTES/TREINOS - AULA: ACESSANDO DINÂMICAMENTE VALORES DE UM OBJETO

const pessoa = {
    nome: 'Vitor J Guerra',
    idade: 25,

    descrever: function () {
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
    }
};

pessoa['nome'] = 'teste';
pessoa.nome = 'teste';
*/