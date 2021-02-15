# React Challenge - ECOMMERCE

1. Se desejar rodar o projeto em sua máquina para testes e eventuais contribuições (fico extremamente grato), clone o repositório em sua máquina, execute o comando yarn para instalar as depedências do projeto e execute em um terminal `yarn server` para inicializar o servidor local em JSON (FAKE API REST), e em outro terminal execute `yarn start`. O projeto não funcionará se o servidor local em JSON não estiver rodando. (Pois o app depende do server para carregar os produtos)

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

## Demais ferramentas e sites que auxiliaram na construção da UI:

- Figma(UI design)

### Requisitos Funcionais:

- [x]  O usuário pode adicionar produtos do carrinho
- [x]  O usuário pode deletar produtos do carrinho
- [x]  O usuário pode listar produtos por preço, popularidade, ordem alfabética e também pode pesquisar pelo nome do produto;

### Requisitos Não Funcionais:

- [x]  A aplicação deve mostrar ao usuário se ele está conectado à API.
- [x]  A aplicação deve mostrar ao usuário, na Home, qual o produto com melhor availação como um destaque na tela inicial.
- [x]  A aplicação dará um feedback visual quando o usuário estiver com o mouse em cima do produto para que ele saiba qual produto estará acessando.
- [x]  A aplicação deve mostrar ao usuário, na pagina de produtos, um banner do produto selecionado.
- [x]  A aplicação deve mostrar ao usuário se o produto em questão, na página destinada ao mesmo, se ele já está no carrinho e a quantidade que se encontra no carrinho.
- [x]  A aplicação deve mostrar ao usuário se o produto em questão, na página destinada ao mesmo, se ele já esta no grupo dos produtos favoritos do usuário.
- [x]  Na página de Games, o usuário deve poder listar todos os produtos, ordenar conforme o filtro selecionado e também pesquisar pelo produto. Ele deve poder acessar o produto diretamente desta página também.
- [x]  Na página de Favoritos, o usuário deve poder ver os produtos que ele favoritou, podendo acessá-los desta página.
- [x]  Na página de carrinho, o usuário deve poder ver os produtos adicionados ao carrinho.
- [x]  Ainda no carrinho, o usário deve poder ver o valor de cada produto de forma individual, valor agredado à quantidade, valor subtotal da compra (sem o frete) e valor total da compra (com o frete).
- [x]  Caso o valor subtotal da compra exceda os R$250,00, o frete será totalmente grátis.
- [x]  O carrinho ainda deve informar em verde quando o frete é grátis e em vermelho quando ele for adicionado ao total.
- [x]  O usuário, da página de carrinho, se desejar, deve poder retornar às compras pelo link "Continue comprando".
- [x]  No cabeçalho da aplicação, no icone de carrinho, deve ser possível ver o número de itens que há dentro do carrinho. (OBS: Ele mostrará apenas a quantidade de itens diferentes dentro do carrinho. Se houver uma quantidade maior de um determinado produto, ela não será contabilizada. Somente contabilizará produtos diferentes, da mesma forma que o "Item()" que está na página de carrinho, sessão de resumo).