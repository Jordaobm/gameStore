# React Challenge - ecommerce

<h1 align="center">
  <img alt="GameStore" width="700px" src="https://github.com/Jordaobm/gameStore/blob/main/documents/assets/1.PNG" />
</h1>

1. Se desejar rodar o projeto em sua máquina para testes e eventuais contribuições (fico extremamente grato), clone o repositório em sua máquina, execute o comando yarn para instalar as depedências do projeto e execute em um terminal `yarn server` para inicializar o servidor local em JSON (FAKE API REST), e em outro terminal execute `yarn start`. O projeto não funcionará se o servidor local em JSON não estiver rodando. (Pois o app depende do server para carregar os produtos)

<h1 align="center">
  <img alt="GameStore" width="700px" src="https://github.com/Jordaobm/gameStore/blob/main/documents/assets/2.PNG" />
</h1>

# Requisitos:

- [x]  Os produtos devem ser renderizados dinamicamente através do products.json anexado, assets.zip anexados também
- [x]  Os valores exibidos no checkout (frete, subtotal e total) devem ser calculados dinamicamente
- [x]  O usuário poderá adicionar e remover produtos do carrinho
- [x]  O usuário poderá ordenar os produtos por preço, popularidade (score) e ordem alfabética.
- [x]  A cada produto adicionado, deve-se somar R$ 10,00 ao frete.
- [x]  O frete é grátis para compras acima de R$ 250,00.

# O que iremos avaliar:

Levaremos em conta os seguintes critérios:

- Cumprimento dos requisitos
- Qualidade do layout e fluidez da UX
- Organização do código e boas práticas
- Domínio das linguagens, bibliotecas e ferramentas utilizadas
- Organização dos commits
- Escrita e cobertura de testes

# Sobre a entrega:

O prazo para entrega do projeto é para dia 14/02/2021 até às 23:59.

Assim que concluir o teste, nos encaminhe a url do repositório onde o teste foi escrito e um link para testarmos.

---

# 💡IDEIA

Desenvolver a parte front-end de um ecommerce de games.

## Ferramentas e bibliotecas utilizadas no projeto:

- React (framework de desenvolvimento)
- axios (integração do front-end com a FAKE API REST)
- json-server (Criação da FAKE API REST com json)
- react-horizontal-scrolling-menu (criação de um scrollView horizontal na Home da aplicação)
- react-icons (icones descritivos)
- react-parallax (criação do efeito parallax na Home da aplicação)
- react-router-dom (navegação mais performática);
- styled-components (estilização dos componentes React por meio de arquivos TS)

### Demais ferramentas e sites que auxiliaram na construção da UI:

- Figma(UI design)

<h1 align="center">
  <img alt="GameStore" width="700px" src="https://github.com/Jordaobm/gameStore/blob/main/documents/assets/3.PNG" />
</h1>

### Requisitos:

- [x]  Os produtos devem ser renderizados dinamicamente através do products.json anexado, assets.zip anexados também.
- [x]  Os valores exibidos no checkout (frete, subtotal e total) devem ser calculados dinamicamente.
- [x]  O usuário poderá adicionar e remover produtos do carrinho.
- [x]  O usuário poderá ordenar os produtos por preço, popularidade (score) e ordem alfabética.
- [x]  A cada produto adicionado, deve-se somar R$ 10,00 ao frete.
- [x]  O frete é grátis para compras acima de R$ 250,00.

### Implementações e correções feitas após o feedback do corretor do desafio:

- [ ]  Faltou uma versão online da aplicação para testarmos.
- [x]  Responsividade
- [x]  Faltou um loading, na tela de detalhes de produto, a demora em carregar a imagem em background, gera uma quebra na tela
- [x]  Botão de continuar comprando na tela de detalhes de produto está desalinhado, quebra na versão mobile
- [x]  Poderia ser possivel alterar a quantidade de produtos apartir do carrinho
- [x]  Faltou a opção de adicionar um jogo na lista de favoritos
- [x]  O Conceito de requisitos não funcionais está errado
- [x]  json-server deveria entrar como dev-dependencie
- [x]  poderia utilizar 2 espaços como padrão na identação
- [x]  poderia utilizar 2 espaços como padrão na identação
- [x]  Linhas muito extensas, devem ser quebradas, normalmente utilizamos 80 ou 100 colunas no maximo por linha, no exemplo a seguir a linha tem 289 colunas: src/pages/CartPage/index.tsx linha 7
- [x]  Foi utilizado < h 5> < h 6> < h 3> apenas para estilizar o texto, lembre-se que existe um motivo por tras de cada tag html, lembre-se de utilizar a tag pela semântica, e não pelo visual, o visual fazemos com CSS. (src/pages/CartPage/index.tsx)
- [x]  Código comentado foi commitado. src/pages/Home/index.tsx linha 69
- [x]  Os dois switch cases do código não tem implementação na clausula default
