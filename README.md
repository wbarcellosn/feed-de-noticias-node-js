
# MSX News

Uma aplicação web simples que consome a API da [NewsAPI](https://newsapi.org/), armazena as notícias no backend e as exibe no frontend. O usuário pode pesquisar notícias por título e, ao clicar em "Leia mais", será redirecionado para a página original da notícia.

## Funcionalidades

- Consumo de notícias em tempo real a partir da API externa [NewsAPI](https://newsapi.org/).
- Armazenamento local das notícias no backend utilizando um array.
- Exibição das notícias no frontend com HTML, CSS e JavaScript.
- Funcionalidade de busca por título das notícias.
- Opção de "Leia mais", que redireciona o usuário para a fonte completa da notícia.

## Tecnologias Utilizadas

- **Backend**: 
  - Node.js
  - Express.js
  - Axios
  - CORS
  
- **Frontend**: 
  - HTML
  - CSS
  - JavaScript puro
  
- **API Externa**:
  - [NewsAPI](https://newsapi.org/)

## Requisitos de Instalação

### Pré-requisitos

- Node.js instalado ([Download aqui](https://nodejs.org/))
- Git instalado (opcional, para clonar o repositório)
- Extensão Live Server instalada no VS Code para rodar o frontend

### Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/usuario/msx-news.git
    ```

2. Navegue até a pasta do projeto:
    ```bash
    cd msx-news
    ```

3. Instale as dependências do projeto:
    ```bash
    npm install
    ```
    
4. Navegue até a pasta backend do projeto:
    ```bash
    cd backend
    ```

5.Instale as dependências do backend do projeto:
    ```bash
    npm install
    ```

4. Inicie o servidor Node.js:
    ```bash
    npm start
    ```

5. Acesse o backend no navegador:
    ```bash
    http://localhost:3000
    ```
    
6. Acesse o front no navegador:
    ```bash
    Dentro do arquivo index.htm da pasta frontend, inicie o Live Server no VS Code
    ```

## Como Usar

1. Ao acessar a aplicação, as notícias mais recentes serão carregadas automaticamente do backend.
2. O usuário pode buscar notícias específicas digitando o título ou parte do título no campo de pesquisa.
3. Ao clicar em "Leia mais", o usuário será redirecionado à página original da notícia.

## Estrutura do Projeto

```bash
.
├── backend
│   ├── src
│   │   ├── routes        # Arquivos de rotas
│   │   └── services      # Lógica para consumir a API e outros serviços
│   └── app.js            # Arquivo principal do Node.js
├── frontend
│   ├── css               # Arquivos de estilo (CSS)
│   ├── js                # Arquivos JavaScript (lógica do frontend)
│   └── index.html        # Arquivo HTML principal
├── node_modules          # Módulos do Node.js instalados (compartilhados entre front e back)
├── package.json          # Configurações e dependências globais do projeto
└── README.md             # Documentação do projeto
```

## API Externa

A aplicação consome a API da [NewsAPI](https://newsapi.org/), que fornece notícias de diversas fontes ao redor do mundo. Os dados obtidos incluem título, descrição, URL da fonte e imagem da notícia.
