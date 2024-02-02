# Curso: Importação e Exportação com JavaScript
-  Vai ter uma branch para todo o curso.
-  Vai ter um commit para cada período de estudo.
-  Ao fazer um commit, falar sobre o que foi feito e em qual curso.
-  Fazer um push a cada commit.
-  Vai ter uma pasta para cada módulo do curso.
-  Mudanças na pasta ou mudanças próprias nos arquivos ou na pasta serão feitas na branch main.
-  Fazer apenas anotações mais importantes, classificando elas de acordo com o assunto que ela se enquadra, por exemplo, seu falar sobre funções, escreverei um subtítulo chamado **sobre funções**, e logo abaixo, escreverei a anotação.
-  A partir do próximo bootcamp, usar um arquivo Readme para todos os cursos.
<hr>

## Sobre Importações e Exportações
-  Podemos importar e exportar funções criadas em outros arquivos.
    -  Para exportar, precisamos usar o **"module.exports"**, seguido das funções que queremos importar, usando-as como atributos dentro do objeto **module.exports**.
    -  Para importar, usamos, dentro do arquivo em que vamos usar as funções, o **"require"**. Devemos usa-lo da seguinte forma, por exemplo: **"const funcoes = require('./caminho-para-a-pasta-onde-estao-as-funcoes');"**