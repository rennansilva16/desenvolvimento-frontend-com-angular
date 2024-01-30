# Curso: Criando Objetos e Classes em JavaScript   
## Informações sobre estudos e dicas gerais  
-  Vai ter uma branch para todo o curso.
-  Vai ter um commit para cada período de estudo.  
-  Ao fazer um commit, falar sobre o que foi feito e em qual curso e especificar a data do dia.  
-  Fazer um push a cada commit.
-  Vai ter uma pasta para cada módulo do curso.  
-  Mudanças na pasta ou mudanças próprias nos arquivos ou na pasta serão feitas na branch main.  
-  No módulo Praticando com Objetos e Classes, parei de escrever anotações sobre a aula e sobre o código feito de cada aula do módulo, para otimizar o tempo de estudo.  

    Decidi fazer apenas anotações que fossem mais importantes. Portanto, a partir desse módulo, por tempo indeterminado, farei apenas as anotações mais importantes durante o curso, classificando elas de acordo com o assunto que ela se enquadra. Por exemplo, seu falar sobre funções, escreverei um subtítulo chamado **sobre funções**, e logo abaixo, escreverei a anotação.  
<hr>  

## Entendendo Objetos  
### Estrutura básica de um Objeto  
#### Anotações da aula  
-  O console, do console.log, é um objeto. E ele tem vários métodos que podem ser usados.  
-  A forma mais simples de escrever um objeto é da seguinte forma: **"const nomeDaVariavel { aqui vai as propriedades e valores do objeto };  
-  Um objeto é uma coleção de valores, ele agrupa valores. E ele funciona através de chave e valor.  
Por exemplo, em um objeto que chamamos de **vitor** temos uma chave que se chama **nome** e temos o valor dessa chave que se chama **'Vitor J Guerra',**.  
#### O que foi feito no código  
-  Testes explicando como funcionam os objetos.  
<hr>

### Editando Informações de Um Objeto  
#### Anotações da aula  
-  Um objeto no JavaScript é uma coleção dinâmica de chave e valor, ou seja, eu posso adicionar, remover ou alterar chaves e valores das propriedades.  
-  É possivel adicionar uma nova chave-valor fora do objeto que criamos com a seguinte sintaxe: **"nomeDoObjeto.nomeDaChave = valor;"**  
-  Para remover, usamos a sintaxe: **"delete nomeDoObjeto.nomeDaChave;"**
#### O que foi feito no código  
-  Testes ensinando como adicionar e remover uma chave-valor de um objeto.  
<hr>

### Criando Métodos Para o Objeto  
#### Anotações da aula  
-  No JavaScript conseguimos utilizar funções dentro de objetos.  
-  Chamamos uma função dentro de um objeto de método.  
-  Usamos a seguinte sintaxe para adicionar uma função dentro de um objeto: **"nomdeDaFuncao: function () { aqui vai tudo o que vai na funcao }.  
-  Para chamarmos o valor de uma chave dentro de um console.log, por exemplo, usamos a palavra reservada, **"this"**. Essa palavra reservada diz respeito ao contexto a onde essa função está sendo executada. Se ela está dentro de um objeto por exemplo, ela assume o objeto, por exemplo: **"console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');"**.  
-  É possível também substituir os valores de uma função que está dentro de um objeto.  
#### O que foi feito no código  
-  Exemplos de como utilizar uma função dentro de um objeto, usando o this.  
-  Exemplo de como substituir os valores de uma função que está dentro de um objeto.  
<hr>

### Acessando Dinamicamente Valores de um Objeto  
#### Anotações da aula  
-  Eu posso através de um string, acessar dinâmicamente um atributo de um objeto. Fazemos isso usando a seguinte sintaxe: **"nomeDoObjeto['chave do objeto']"**.  

#### O que foi feito no código  
-  Exemplos como acessar os valores de um objeto de forma dinâmica.
<hr>

## Entendendo Classes  
### Como Criar Classes Instâncias  
#### Anotações da aula  
-  As classe são como um objeto deve ser e  as instâncias são as ocorrências de uma classe, ou seja, uma determinada pessoa é uma ocorrência da classe Pessoa, que pode possuir várias ocorrências, sendo elas, outras pessoas.  
-  Podemos criar novas instâncias fora da nossa classe usando a sintaxe, **"new Pessoa();"**
#### O que foi feito no código  
-  Exemplo do uso de classe.  
-  Exemplos da criação de instâncias dentro de classes.  
<hr>  

### Criando Com Constructor  
#### Anotações da aula  
-  Usamos o **constructor** para passar quais parâmetros devemos ter na nossa instância. Assim, quando criarmos uma nova instância, iremos estar chamando o constructor.  
-  
#### O que foi feito no código  
-  Exemplo de uso do constructor.  
-  Correção no código que estava dentro do console log da função, adicionando a crase ao invés de aspas simples.  
<hr>  

### Funções Recebendo Objetos  
#### Anotações da aula  
-  Podemos usar objetos já criados dentro de funções.  
#### O que foi feito no código  
-  Exemplo de como usar objetos dentro de funções.  
<hr>  

## Praticando com Objetos e Classes  
