# Curso: Conhececendo Funções JavaScript 
## Informações sobre estudos e dicas gerais  
-  Vai ter uma Branch para cada modúlo do curso.  
-  Serão feitos commits após cada aula.
-  Mudanças na pasta ou mudanças próprias nos arquivos ou na pasta serão feitas na branch main.  
<hr>

## O poder das Funções na Qualidade do Seu Código  
### Conceito Básico Sobre Funções  
#### Anotações da aula
-  Funções são um pequeno trecho de código que podemos usar a qualquer momento que quisermos.  
-  as funções tem a seguinte sintaxe: **"function teste() {  }"**
-  Uma maneira simples de chamarmos uma função que queremos,é usar a seguinte sintaxe, sendo o nome da função, teste: **"teste()"**.  
-  Entre os parênteses ao criar a função, ficam os parâmetros da função.  
-  Em outras linguages, chamamos uma função que não está devolvendo nada de procedimentos.  
-  É possível passar mais de um parâmetro dentro de uma função, basta separarmos por vírgulas.  
#### O que foi feito no código  
-  Exemplos explicando como funcionam as funções.
-  Trecho de código explicando como usar uma função, usando o exemplo de incrementar juros em cima de um valor.  
<hr>

### Como Organizar Funções  
#### Anotações da aula  
-  Agora, vamos fazer sempre o nosso código principal dentro de uma função que chamaremos de main.  
-  Criaremos outras funções fora da nossa função main, e chamaremos essas outras funções sempre que precisarmos dela.  
-  Vamos resolver o exercício do cálculo de IMC dentro de funções para ir se acostumando com as funções.  
#### O que foi feito no código  
-  Criação de função com cálculo IMC.
-  Criação da função main com impressão das mensagems de imc.  
-  Exercício proposto, usando funções, resolvido e funcionando.  
<hr>  

### Exemplo Prático com Funções  
#### Anotações da aula  
-  É importante colocar todo trecho de código que pudermos isolar, dentro de uma função.  
#### O que foi feito no código  
-  Resolução do exercício proposto usando três funções: A main, a de classificação do imc e a do cálculo de imc.
-  Resolução do exercício proposto mais simplificado e mais legível comparado ao da tentativa do exercício.  
<hr>

### Funções Invocada Imediatamente  
#### Anotações da aula  
-  Funções no JavaScript também são valores que conseguimos manipular.  
-  As funções também são objetos. Podemos usar o valor delas como váriaveis e parâmetros para outras funções também.  
-  Também podemos reatribuir novos valores para funções.  
-  Ao colocarmos **parênteses** entre uma função e depois **abrirmos e fecharmos parênteses logo após o fechamento de parênteses dessa função**, ao executarmos o código, essa função é invocada imediatamente.  
A sintaxe disso fica dessa forma: **"( function () { *"aqui vai o código da função"* }) ();"**.  
Ao fazer isso eu posso até tirar o nome dessa função, sendo chamada de função não nomeada. E essa função fica existindo apenas dentro desse parênteses, sem ser possível chama-lá em outro lugar do código.  
Isso serve para executarmos determinados trechos de código apenas uma vez.  
<hr>  

### Exercício Guiado 1 - Função escrevaMeuNome  
#### Anotações da aula  
-  Fazer uma função que escreva o seu nome.  
-  Ao criar funções é recomendado escrever o nome da função usando verbos.  
#### O que foi feito no código  
-  Exercício proposto feito criando função para escrever apenas o meu nome, chamando ela imediatamente.  
-  Resolução guiada criando função para escrever o nome de alguém, colocando o nome ao chamar a função.  
<hr>

### Exercício Guiado 2 - Função verificarIdade  
#### Aotações da aula  
-  Fazer uma função que veja se você é maior de idade.  
#### O que foi feito no código  
-  Exercício proposto feito criando função para verificar se tal pessoa é menor ou maior de idade. Função criado usando como parâmetro, o nome da pessoa e a idade.  
-  Resolução Guiada do exercício proposto, verificando apenas a idade da pessoa.  
<hr>  

### Exercício Guiado 3 -Invocando Função Dentro de Outra Função  
#### Anotações da aula  
-  Fazer a junção das funções escrevaMeuNome e verificarIdade, chamando a função escrevaMeuNome dentro da função verificar Idade.  
#### O que foi feito no código  
-  Exercício feito com correções depois de assitir a aula de resolução. Foi corrigido a parte de contatenar uma string com a outra, e foi ocrrigido o erro undefined, que estava sendo gerado por causa que a função escrevaMeuNome estava retornando um console.log, mas, deveria retornar apenas o texto.  
-  Resolução guiada do exercício.  