# Curso: Primeiros Passos com Java Script da Dio  
## Informações sobre estudos e dicas gerais  
-  Vai ter uma Branch para cada modúlo do curso.  
-  Serão feitos commits após cada aula.
-  Mudanças na pasta ou mudanças próprias nos arquivos ou na pasta serão feitas na branch main.  
-  Para executar um programa no terminal, é preciso primeiramente entrar em cada pasta onde está o arquivo usando o **"./"**.  
Uma boa dica também, é usar a tecla **tab** depois de colocar as primeiras letras da pasta ou arquivo, para completar o resto do nome.  
-  Para recortar e colar algo selecionado, usamos o **CTRL + X** para recortar e o **CTRL V** para colar.  
-  
-  Para arrastar uma linha de código sem precisar copiar e colar, para onde quisermos, basta **segurarmos o alt e usar as teclas cima ou baixo.**  
-  Para formatarmos o nosso código usamos o atalho **ALT + SHIFT + F.**  

## Variáveis e Operadores

### Apresentação inicial  
Teremos sempre três arquivos:
- Aula.
- Ecercício
- Resolução do Professor.  

Foi falado na aula como será a dinâmica do curso.
<hr>

### Console e Como Declarar Variáveis  
#### Anotações da aula  
- Para executar o arquivo iremos usar o comando **"node + nome-do-arquivo.js"**.  
- O comando **"console.log('');"** serve para imprimir algo.
- Podemos usar dois tipos de variáveis: O **"let"** e o **"const"**. O let é uma variável que pode ter seu valor modificado a qualquer momento e a variável const não pode ter seu valor alterado.
#### O que foi feito no código  
- Teste das váriaveis **"let"** e **"const"**.
- Teste do comando **"console.log('');"**.
<hr>

### Diferenças Entre Variáveis e Tipos de Operadores  
#### Anotações da Aula
- Não precisamos usar as **"aspas simples('')"** no comando console.log ao usar nomes de variaveis.
#### O que foi feito no código
- Imprimiu o valor da variável let usando o **"console.log(variavel);"**.
- Testes, imprimindo usando as variáveis let e const.
<hr>

### Exercício Cálculo de Valor de uma Viagem
#### Anotações da Aula  
- Apresentação do exercício proposto.  
#### O que foi feito no código
- Anotação do exercício proposto no arquivo de exercício.  
<hr>

### Resolução Guiada do Exercício - Parte 1  
#### Anotações da Aula
-  Para comentar um trecho de código usar o **"/*** para abrir o bloco de comentário, e **"*/** para fechar o bloco de comentário.
-  Digitar as primeiras letras do arquivo ao executar um programa e apertar a tecla tab, faz com que o resto do nome do arquivo seja digitado sozinho.
-  É importante sempre finalizar as linhas de código com **"ponto e vírgula"** por convenção e para não dar problema no código.
-  Sempre por o ponto e vírgula colado no código.
#### O que foi feito no código  
-  Resolução do exercício proposto.
<hr>

### Resolução Guiada do Exercício - Parte 2  
#### Anotações da Aula  
-  Uma forma simples de arredondar uma variável quebrada é converter a variável em um texto usando o **".toFixed"**. o trecho de código fica assim: **console.log(valorGasto.toFixed(2));**.  
Entre os parêntes após o toFixed, colocamos o número de casas decimais que queremos que mostre no resultado.  
#### O que foi feito no código
-  Teste usando número que resultasse em uma variável quebrada.
-  Uso do toFixed para arredondar o número quebrado.
<hr>

## Estruturas Condicionais  

### Conceito de Boolean e Condicionais 
#### Anotações da aula 
-  O **boolean** serve para expressar um valor verdadeiro ou falso.
-  As **condicionais** serve para ver se uma determinada situação é verdadeiro ou falso.  
#### O que foi feito no código
-  Teste de condicionais e booleans.  
<hr>

### Exemplo com resto de divisão
#### Anotações da aula  
-  Para ver se um número é igual a outro usamos três sinais de igualdade, **"==="**.
-  Para verificar o resto de uma divisão utilizamos o seguinte trecho de código: **"(numero % 2) === 0;"**
-  Condicionais sempre retornaram valores booleanos.  
#### O que foi feito no código  
-  Programa criado para ver se um valor é par ou ímpar.  
<hr>

### Tipos de Operadores de Igualdade  
#### Anotações da aula  
-  Dois iguais também serve como sinal de igualdade.
-  Usando dois sinais de igualdade, ele ignora se é número ou string.
-  É usado os três sinais de iguais para fazer as comparações de maneira explícita.  
#### O que foi feito no código  
-  Teste explicando o uso de dois e três sinais de iguais respectivamente.
<hr>

### Estrutura Condicional com If e Else
#### Anotações da Aula
-  O "**if"** é um operador condicional.
-  O if serve para verificar se um trecho de código será executado ou não.
-  Podemos usar a negação em uma condicional usando o **"!"**.
-  Ao usar a negação não precisamos criar outra condicional.  
-  Podemos comentar uma linha de código usando a tecla **/** duas vezes.
#### O que foi feito no código
-  Foi feito exemplos de programas para verificar se um número é par ou ímpar usando operadores condicionais.
-  Foi feito um exemplo usando o operador de negação e apenas o if.
-  Outro exemplo foi feito usando o else.
-  Programa alterado para ver se número é divisível por 5.  
<hr>

### Estrutura Condicional com Else If  
#### Anotações da Aula  
-  O **"else if"** serve para executar um comando específico caso o if não seja executado.  
Com o else if sendo executado, as outras condicionais não são mais executadas.  
-  Eu posso colocar quantos else if eu quiser. 
#### O que foi feito no código  
-  Código alterado usando o else if como condicional caso o número escolhido seja 0.
<hr>

### Revisão e Dicas de Boas Práticas  
#### Anotações da aula  
-  É uma convenção, quando estivermos colocando nomes em variáveis booleanas, colocar o prefixo **"is"**.  
-  Se for colocar em português, podemos usar o **"eh"**.
Podemos usar como exemplo o nome **"isNumeroEPar"**.  
#### O que foi feito no código  
-  Testes de revisão no código.
-  Alteração do código utilizando prefixo convencional no nome e diminuição nas linhas de código.
<hr>

### Exercício - Incremento do Cálculo de Valor de uma Viagem  
#### Anotações da aula  
-  Realizar incremento no exercício anterior do cálculo de valor uma viagem.
-  Nesse exercício será utilizado 5 váriaveis:  
1 - Preço do Etanol.  
2 - Preço da gasolina.  
3 - O tipo de combustível que está no carro.  
4 - Gasto médio de combustível do carro por km.  
5 - Distância em km da viagem.
#### O que foi feito no código  
-  Tentativa de resolução do código sem funcionar completamente(falta saber como será feito a escolha de etanol ou gasolina).
<hr>

### Resolução Guiada do Exercício  
#### Anotações da Aula  
-  No Java Script, por convenção, colocamos strings sempre por aspas simples ou pela crase.
-  Ao criar uma váriavel dentro de um bloco de código, dentro de um if por exemplo, aquela variável só irá funcionar dentro daquele bloco de código.  
Para fazer com que funcione fora do bloco de código, temos que criar a varável fora do bloco de código.  
#### O que foi feito no código
-  Resolução do exercício proposto com auxilio do professor.
<hr>