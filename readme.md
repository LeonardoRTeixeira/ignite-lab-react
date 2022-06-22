# Projeto Frontend com ReactJS

### Objetivo:

Desenvolvimento de um pequeno projeto com base nas aulas da semana de especialização em ReactJS, promovido pela Rocketseat em Junho de 2022. 

### O projeto: 

- Consiste em implementar uma interface web de video-aulas, utilizando um Headless CMS (nesse projeto, o GraphCMS); 
- Estruturação inicial do projeto foi feita com [Vite](https://vitejs.dev/);
- Estilização foi baseada no [TailwindCSS](https://tailwindcss.com/);
- Consumo de dados em GraphQL via [GraphCMS](https://graphcms.com/);


### Utilitários nesse projeto:

- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/) para estilização das páginas;
- [PostCSS](https://postcss.org/)
- [Autoprefixer](https://github.com/postcss/autoprefixer)
- [ApolloClient](https://www.apollographql.com/)
- [Graphql](https://graphql.org/)
- [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm#installing-and-updating) para gerenciamento da versão do NodeJS;


### Iniciar o projeto:

Esse projeto foi estruturado e iniciado usando o [ViteJS](https://vitejs.dev/)

```
npm create vite@latest
```


### Dependências: 

1. Dependências de Desenvolvimento:

    ```
    $ npm i tailwindcss postcss autoprefixer -D
    ```

2. Criar arquivo de configuração do PostCSS:

    ```
    npx tailwindcss init -p
    ```

3. Alterar arquivo `tailwindcss.config.js` para informar quais arquivos sejam reconhecidos e tenham os estilos compilados pelo Tailwind:

    ```
    ...
    content: [
        './src/**/*.tsx',
    ],
    ...
    ```
    No caso acima, todos os arquivos `.tsx`.

4. Instalar as dependências do ApolloClient e Graphql:

    ```
    npm i @apollo/client graphql
    ```