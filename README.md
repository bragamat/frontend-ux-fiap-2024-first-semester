# React + Vite

Este é um projeto de blog desenvolvido em React utilizando o framework Bootstrap
para a criação de componentes visuais. O projeto segue uma estrutura organizada
com componentes reutilizáveis e páginas distintas para exibir os posts.

## Stack Utilizada no Projeto
- React.js
- Vitejs
- Bootstrap
- Contentful

## React Design patterns
- Hooks customizados
- render null
- Dotfiles

## Ferramentas de Deploy
- Docker
- Nginx
- Railway
- Pode ser visualizado online aqui!

## .ENV
- Utilizando um recurso nativo de nossa ferramente de `bundler`, podemos
adicionar variaveis de ambientes com o prefixo `VITE_` dentro de um arquivo
.env; As chaves esperadas estao escritas no `.env_sample`

## Estrutura de Componentes
* Footer.jsx: Componente responsável por exibir o rodapé do blog.
* Header.jsx: Componente responsável por exibir o cabeçalho do blog.
* Layout.jsx: Componente de layout que envolve todas as páginas do blog, incluindo o cabeçalho e o rodapé.

## Páginas
* Home.jsx: A página inicial do blog, onde são exibidos os posts mais recentes. Esta página tem um design simplificado, exibindo apenas uma lista dos 3 últimos posts.
* Post.jsx: Página responsável por exibir os detalhes de um post específico. Aqui são apresentadas todas as informações relacionadas a um post, incluindo título, conteúdo, categoria, etc.
* Posts.jsx: Esta é a página que exibe todos os posts do blog, com suporte a paginação. Os posts são exibidos em uma lista paginada para facilitar a navegação do usuário.

## Como Executar o Projeto
* Clone este repositório para o seu ambiente local.
* Certifique-se de ter o `Node.js` instalado em sua máquina na versao esperada
conforme escrito no `package.json` --  `engine` version.
* No diretório do projeto, execute o comando `npm install` para instalar as dependências necessárias.
* Após a instalação das dependências, execute o comando `npm run dev` para iniciar o servidor de desenvolvimento.
* Abra o navegador e acesse http://localhost:3000 para visualizar o blog.
