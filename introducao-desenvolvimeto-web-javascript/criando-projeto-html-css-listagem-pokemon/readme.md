# Curso: Criando um Projeto com HTML//CSS para Listagem de Pokémon
-  Vai ter uma branch para todo o curso.
-  Vai ter um commit para cada período de estudo.
-  Ao fazer um commit, falar sobre o que foi feito e em qual curso.
-  Fazer um push a cada commit.
-  Mudanças na pasta ou mudanças próprias nos arquivos ou na pasta serão feitas na branch main.
-  Fazer apenas anotações mais importantes, classificando elas de acordo com o assunto que ela se enquadra, por exemplo, seu falar sobre funções, escreverei um subtítulo chamado **sobre funções**, e logo abaixo, escreverei a anotação.
-  A partir do próximo bootcamp, usar um arquivo Readme para todos os cursos.
<hr>

## Sobre Normalize
-  O normalize serve para deixar as configurações do css padronizadas para todos os navegadores. Podemos usar a normalize do cdnjs.com através do link: **https://cdnjs.com/libraries/normalize**
-  É importante sempre usar o normalize quando iniciar um projeto.

## Sobre organização de arquivos
-  É importante sempre criar pastas e arquivos para deixar o projeto bem organizado.
    -  Podemos por exemplo criar as seguintes pastas: assets; dentro de assets, criamos a pasta css e js; dentro de css colocamos nossos arquivos css e dentro do js colocamos nossos arquivos js; dentro de assets deixamos o arquivo index.
-  É importante colocarmos o link desses arquivos no nosso arquivo html para ele puxar todas as informações desses arquivos.
-  Assim como usamos o cdn para o normalize, precisamos fazer a mesma coisa para as fontes que queremos usar.
-  Uma boa prática e técnica que existe para agilizar o nosso projeto, é começar a estilizar os elementos primeiramente para mobile, o nome comumente usado para isso é **mobile first**. Isso evita muita reescrita de código.
-  O **"rem"** é uma medida relativa ao tamanho da fonte que o usuário está usando. Usar ele no lugas da mediada **"px"** é bom porque deixa a estilização mais maleável para cada usuário.

# Anotações sobre Dominando o Protocolo HTTP e Integrando com a PokeAPI

## Dominando o Protocolo HTTP

- **Entendendo o Funcionamento do Protocolo HTTP:**
  - Protocolo fundamental da web para comunicação entre clientes e servidores.
  - Composto por uma variedade de métodos de solicitação (GET, POST, PUT, DELETE, PATCH) para interagir com recursos na web.

- **Seções de Dados:**
  - Áreas básicas de transmissão de dados em uma solicitação HTTP, incluindo cabeçalhos (headers), corpo (body) e status code.

- **Métodos de Requisição HTTP:**
  - GET: Solicita dados de um recurso específico.
  - POST: Envia dados para serem processados por um recurso específico.
  - PUT: Atualiza um recurso específico com os dados fornecidos.
  - DELETE: Remove um recurso específico.
  - PATCH: Aplica modificações parciais a um recurso.

- **Query String e Path Params:**
  - Formas de enviar parâmetros em uma requisição HTTP.
  - Query string: Pares de chave-valor adicionados à URL após o ponto de interrogação.
  - Path params: Parâmetros incluídos no caminho de identificação do recurso na URL.

- **Headers:**
  - Metadados adicionados às solicitações HTTP para fornecer informações adicionais sobre a requisição ou o cliente.
  - Exemplos incluem cabeçalhos de autorização, tipo de conteúdo, e controle de cache.

- **Status Code:**
  - Indica o resultado da solicitação HTTP.
  - Exemplos comuns incluem 200 (OK), 404 (Not Found), 500 (Internal Server Error).

### Exemplo de Requisição HTTP com Fetch API:

```javascript
const baseURL = 'https://pokeapi.co/api/v2';
const limit = 10; // Limitando a 10 pokémons por página
const offset = 0; // Começando a partir do primeiro pokémon

const fetchPokemons = async () => {
  try {
    const response = await fetch(`${baseURL}/pokemon?limit=${limit}&offset=${offset}`);
    if (!response.ok) {
      throw new Error('Failed to fetch pokemons');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
};

fetchPokemons().then(pokemons => console.log(pokemons));
```

Este exemplo demonstra como fazer uma solicitação GET para a PokeAPI para obter uma lista de pokémons. Os parâmetros `limit` e `offset` são usados para controlar a quantidade de resultados e a partir de qual resultado começar.

## Integrando com a PokeAPI

- **Endpoint:**
  - URL específica de um serviço web que fornece acesso a um recurso.
  - Utilizado para fazer requisições e obter dados da API.

- **Fetch API:**
  - Método moderno do JavaScript para fazer requisições HTTP assíncronas.
  - Retorna uma Promise que é resolvida quando a resposta da requisição está disponível.

### Exemplo de Integração com a PokeAPI:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pokédex</title>
</head>
<body>
  <h1>Minha Pokédex</h1>
  <ul id="pokemonList"></ul>

  <script>
    const baseURL = 'https://pokeapi.co/api/v2';
    const limit = 10;
    const offset = 0;

    const fetchPokemons = async () => {
      try {
        const response = await fetch(`${baseURL}/pokemon?limit=${limit}&offset=${offset}`);
        if (!response.ok) {
          throw new Error('Failed to fetch pokemons');
        }
        const data = await response.json();
        return data.results;
      } catch (error) {
        console.error(error);
      }
    };

    const displayPokemons = async () => {
      const pokemons = await fetchPokemons();
      const pokemonList = document.getElementById('pokemonList');
      pokemons.forEach(pokemon => {
        const listItem = document.createElement('li');
        listItem.textContent = pokemon.name;
        pokemonList.appendChild(listItem);
      });
    };

    displayPokemons();
  </script>
</body>
</html>
```

Este exemplo incorpora a lógica JavaScript para fazer uma requisição para a PokeAPI e exibir os nomes dos pokémons em uma lista no HTML. Os pokémons são obtidos através da função `fetchPokemons()` e, em seguida, iterados para criar elementos de lista (`<li>`) que são adicionados ao HTML dinamicamente.

--- 

## Utilizando a Função Map para Diminuir a Verbosidade do Nosso Código

### 1. `Pokemons.map`

- **Explicação:** A função `map` é um método disponível em arrays em JavaScript que é usado para iterar sobre cada elemento de um array e aplicar uma função a cada elemento. No contexto das suas anotações, parece que `Pokemons` é um array de objetos representando pokémons, e `map` está sendo usado para realizar alguma operação em cada elemento desse array.

### 2. Função Transformadora

- **Explicação:** Uma função transformadora é uma função que recebe um input e retorna um output transformado de alguma maneira. No contexto do `map`, a função fornecida como argumento para `map` é uma função transformadora que é aplicada a cada elemento do array.

### 3. Index

- **Explicação:** O parâmetro `index` é opcional na função fornecida para o método `map`. Ele representa o índice do elemento atual sendo processado no array. Isso pode ser útil em certas situações para realizar operações com base na posição do elemento no array.

### 4. Parâmetro

- **Explicação:** Um parâmetro é uma variável que é passada para uma função quando ela é chamada. No contexto de `map`, a função fornecida como argumento pode aceitar um ou mais parâmetros, dependendo do que é necessário para realizar a transformação desejada em cada elemento do array.

### 5. Concatenar

- **Explicação:** Concatenar é o ato de unir duas ou mais strings ou arrays em uma única string ou array. No contexto das suas anotações, parece que você está concatenando elementos de uma lista para formar uma string que será atribuída à propriedade `innerHTML` de algum elemento HTML.

### 6. `pokemonList.InnerHTML += newHtml`

- **Explicação:** Essa linha de código está adicionando uma nova string HTML à propriedade `innerHTML` de algum elemento HTML chamado `pokemonList`. Isso provavelmente está sendo feito dentro de um loop ou após o processamento de uma lista de elementos.

### 7. `const newHtml = newList.join("")`

- **Explicação:** O método `join` é usado em arrays para concatenar todos os elementos do array em uma única string, separados por um separador especificado (no caso das suas anotações, nenhum separador está sendo usado, pois o parâmetro é uma string vazia `""`). O resultado é armazenado na variável `newHtml`.

### 8. `.join`

- **Explicação:** O método `join` é usado para unir os elementos de um array em uma string, conforme mencionado anteriormente.

### 9. `.innerHTML`

- **Explicação:** A propriedade `innerHTML` é usada para obter ou definir o conteúdo HTML de um elemento. Quando definida, ela substitui todo o conteúdo HTML existente dentro do elemento pelo novo conteúdo atribuído.

### 10. Criar Função Usando `=>{}`

- **Explicação:** Isso se refere à sintaxe de arrow functions em JavaScript. As arrow functions são uma maneira concisa de escrever funções em JavaScript, especialmente quando a função é pequena e simples. A sintaxe básica é `() => {}`, onde `() ` representa os parâmetros da função (se houver) e `{}` representa o corpo da função.

---

## "Revisando o Nosso Código E Entendendo Os Próximos Passos"

### 1. Como Manipular uma Promise

- **Explicação:** Promises são objetos usados em JavaScript para operações assíncronas. Manipular uma Promise envolve lidar com seu estado (pendente, resolvido ou rejeitado) e os valores que ela eventualmente produzirá.

### 2. Como Manipular uma Lista de Objetos

- **Explicação:** Manipular uma lista de objetos envolve iterar sobre ela, acessar propriedades específicas de cada objeto e realizar operações com esses objetos conforme necessário.

### 3. Como Transformar Essa Lista de Objetos em Outro Tipo

- **Explicação:** Transformar uma lista de objetos em outro tipo pode envolver converter os objetos em um formato diferente (por exemplo, de JSON para um objeto JavaScript) ou modificar a estrutura da lista de alguma maneira (por exemplo, filtrar ou mapear os objetos).

### 4. Como Juntar Esses Objetos de uma Forma Fácil, Concatenar Eles

- **Explicação:** Juntar objetos de uma forma fácil geralmente envolve usar métodos como `concat` ou `push` para adicionar objetos a uma lista ou usar operadores de concatenação para unir strings que representam os objetos.

### 5. Como Manipular o HTML

- **Explicação:** Manipular o HTML envolve acessar elementos HTML no DOM (Modelo de Objeto de Documento) usando JavaScript e realizar alterações nesses elementos, como alterar seu conteúdo, estilo ou atributos.

### 6. `promise`

- **Explicação:** Uma promise em JavaScript é um objeto que representa um valor que pode estar disponível agora, no futuro ou nunca. Promises são usadas para operações assíncronas.

### 7. `fetch(url)`

- **Explicação:** A função `fetch` é usada para fazer requisições HTTP assíncronas em JavaScript. Ela retorna uma promise que eventualmente resolve com a resposta da requisição.

### 8. `Promise.all([])`

- **Explicação:** O método `Promise.all` é usado para aguardar que todas as promises em um array sejam resolvidas. Ele retorna uma nova promise que resolve com um array de resultados quando todas as promises do array original forem resolvidas com sucesso.

### 9. `.then`

- **Explicação:** O método `then` é usado em promises para especificar o que deve acontecer depois que a promise for resolvida com sucesso. Ele recebe uma função de callback que será chamada com o valor resolvido da promise.

### 10. `.then((response) => response.json())`

- **Explicação:** Esta é uma cadeia de métodos `then` que está sendo usada para processar a resposta de uma requisição fetch e extrair o corpo da resposta como JSON.

### 11. `return fetch(url)`

- **Explicação:** Esta linha de código está fazendo uma requisição fetch para a URL especificada e retornando a promise resultante para que ela possa ser encadeada com outros métodos `then`.

---

## "Convertendo o Modelo do PokeApi para Nosso Modelo"

### 1. `<script src=’’></script>`

- **Explicação:** Essa tag HTML é usada para importar arquivos JavaScript externos para um documento HTML. O atributo `src` especifica o URL do arquivo JavaScript que será importado.

### 2. Destructuring

- **Explicação:** Destructuring é uma técnica em JavaScript que permite extrair dados de arrays ou objetos em variáveis individuais de forma mais concisa. Isso é útil quando você deseja acessar propriedades de objetos ou elementos de arrays de uma maneira mais simplificada e direta.

### 3. Listas

- **Explicação:** No contexto de JavaScript, uma lista geralmente se refere a uma estrutura de dados que contém uma coleção de elementos ordenados. Em JavaScript, listas são frequentemente representadas como arrays, que podem conter qualquer tipo de dado e podem ser facilmente manipuladas e percorridas.

---
