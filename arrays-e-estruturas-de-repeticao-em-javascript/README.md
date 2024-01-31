# Curso: Arrays e Estruturas de Repetição em JavaScript
## Informações sobre estudos e dicas gerais
-  Vai ter uma branch para todo o curso.
-  Vai ter um commit para cada período de estudo.
-  Ao fazer um commit, falar sobre o que foi feito e em qual curso.
-  Fazer um push a cada commit.
-  Vai ter uma pasta para cada módulo do curso.
-  Mudanças na pasta ou mudanças próprias nos arquivos ou na pasta serão feitas na branch main.
-  Fazer apenas anotações mais importantes, classificando elas de acordo com o assunto que ela se enquadra, por exemplo, seu falar sobre funções, escreverei um subtítulo chamado **sobre funções**, e logo abaixo, escreverei a anotação.
-  A partir do próximo bootcamp, usar um arquivo Readme para todos os cursos.
<hr>

## Entendendo Arrays
 ### Sobre Listas(Arrays)
 -  Para adicionar um novo elemento em uma lista usamos a sintaxe: **"nomdeDalista.push('Novo elemento');"**.
 -  Também posso adicionar um novo elemento na lista da seguinte maneira: **"nomeDaLista[posição em que quer adicionar] = 'novo elemento'"**.  
    Posso usar essa mesma sintaxe para substituir um lugar na lista Fazendo isso, o elemento que estava anteriormente na posição se perde.
-  Uma lista pode começar vazia.
-  Posso ter tipos diferentes de elementos na minha lista, por exemplo, strings e números.
-  Para remover um item da lista, eu posso usar, usando como exemplo a constante alunos, **"alunos.pop();"**. Fazer isso remove o último item da lista. Para remover o primeiro item da lista ao invés do último poderíamos usar o **"alunos.shift()"**. 
    Também posso mostrar o item que eu removi da lista usando, **"console.log(alunos.pop());"**.
-  Para sabermos o tamanho de uma lista usamo o **"lista.length"**.
### Sobre Estruturas de Repetição
-  A estrutura de repetição "**for"** é dividio em três partes.
    -  Na Primeira parte fica a declaração do nosso index, a nossa variável de controle.
    -  A segunda parte fica a estrutura condicional. Ela retorna um booleano, que vai dizer se entra ou não no for.
    -  A terceira parte é o incremento da váriavel que vamos utilizar na estrutura condicional. Após uma execução do nosso código que está dentro do **for** ele vai verificar se a nossa condição ainda é verdadeira, e vai incrementar mais uma vez o código, até a condição ser falsa.
-  O primeiro index na programação sempre vai começar em zero, exceto em raras ocasiões.
-  Uma string, é um array de caracteres.
