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
