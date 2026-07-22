# GameStore

<h1 align="center">
  <img alt="GameStore — página inicial" width="700px" src="https://github.com/Jordaobm/gameStore/blob/main/documents/assets/1.PNG" />
</h1>

Front-end de e-commerce de games construído a partir de um desafio técnico. Passei por ele todas as etapas normais de um produto real: modelagem de carrinho, cálculo dinâmico de frete e total, ordenação de catálogo, favoritos e responsividade — e depois recebi um feedback de revisão de código que apliquei de volta no projeto (indentação, quebra de linha, uso semântico de HTML, tratamento de `default` em `switch`). Foi um dos primeiros lugares onde acostumei a receber code review e efetivamente incorporar as observações, não só corrigir para agradar quem revisou.

## Funcionalidades

- Catálogo de produtos renderizado dinamicamente
- Carrinho de compras: adicionar, remover e alterar quantidade
- Cálculo dinâmico de frete (R$ 10,00 por produto, grátis acima de R$ 250,00) e total do pedido
- Ordenação por preço, popularidade e ordem alfabética
- Lista de favoritos
- Layout responsivo (desktop e mobile)

<h1 align="center">
  <img alt="GameStore — detalhe do produto" width="700px" src="https://github.com/Jordaobm/gameStore/blob/main/documents/assets/2.PNG" />
</h1>

## Stack

- React + TypeScript
- styled-components
- react-router-dom
- react-parallax e react-horizontal-scrolling-menu (efeitos da Home)
- ESLint (airbnb) + Prettier

O catálogo de produtos é lido de um `products.json` local — o projeto usava originalmente uma fake API com `json-server` via Axios, mas troquei por import direto do JSON para simplificar a publicação da build sem precisar de um servidor rodando em paralelo.

## Como rodar localmente

```bash
yarn install
yarn start
```

Aplicação sobe em `http://localhost:3000`.

Outros scripts disponíveis:

```bash
yarn build   # build de produção
yarn test    # testes
yarn server  # fake API standalone via json-server (legado, não usada pelo app atual)
```

<h1 align="center">
  <img alt="GameStore — carrinho" width="700px" src="https://github.com/Jordaobm/gameStore/blob/main/documents/assets/3.PNG" />
</h1>

## Status

Projeto sem deploy público ativo no momento — para visualizar, rode localmente pelos passos acima.
