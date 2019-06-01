# Burger Queen

## Índice

* [Resumo do Projeto](#Resumo-do-Projeto)
* [Linguagem de programação](#Linguagem-de-programação)
* [Autoria](#Autoria)
* [Definição do Produto](#Definição-do-produto)
* [Necessidades dos Usuários](#Necessidades-dos-Usuários)
* [Personas](#Personas)
* [Organização](#Organização)
* [Protótipo](#Protótipo)
* [Teste de Usabilidade](#Teste-de-usabilidade)
* [Objetivos de Aprendizagem](#Objetivos-de-Aprendizagem)

## Resumo do Projeto
Desta vez temos um projeto 100% por demanda. Um pequeno restaurante de hambúrgueres chamado Burger Queen, que está crescendo, necessita uma interface em que se possa realizar pedidos utilizando um tablet, e enviá-los para a cozinha para que sejam preparados de forma ordenada e eficiente. 
Eles tem uma proposta de serviço 24 horas foi muito bem recebida e, para continuar a crescer, precisam de um sistema que os ajude a receber pedidos dos clientes.
A interface deve mostrar os dois menus (café da manhã e restante do dia), cada um com todos os seus produtos. O usuário deve poder escolher que produtos adicionar e a interface deve mostrar o resumo do pedido com o custo total.

## Linguagem de programação
Essa página foi desenvolvida em JavaScript (ES6 +), HTML e CSS e empacotada de forma automatizada. E o objetivo principal foi utilizar a biblioteca React. E para armazenar os dados foi utilizado o banco de dados Firebase.

## Autoria
Esse projeto foi desenvolvido de forma individual por Vanessa Yoshida.

## Definição do Produto

O aplicativo deve ser um _Single Page App_. Os pedidos serão enviados por meio de um _tablet_, mas **não queremos um aplicativo nativo**, mas sim um aplicativo Web que seja **responsivo** e possa funcionar **offline**.

Precisamos pensar bem sobre o UX para aqueles que vão receber os pedidos, o tamanho e a aparência dos botões, a visibilidade do estado atual do pedido, etc.

O aplicativo deve usar scripts `npm-scripts` e ter` start`, ` build` e `deploy`, que são responsáveis por iniciar, empacotar e implantar o aplicativo, respectivamente.

Este projeto inclui um _boilerplate_ com o código necessário para começar. A parte de back-end já foi resolvida. O _boilerplate_ inclui os seguintes arquivos/pastas com configurações do Firebase(hosting, firestore e functions):

```text
./04-burger-queen/
├── firebase.json
├── firestore.indexes.json
├── firestore.rules
├── functions
│   ├── index.js
│   ├── package.json
└── README.md
```

A parte da interface não está incluída, então, você deve definir a estrutura das
pastas e arquivos que considera necessários. Você pode estruturá-los de acordo
com as convenções do React. Portanto, os _setups_ necessários para
executá-los serão feitos por você.

## Necessidades dos Usuários

## Personas

## Organização

## Protótipo

## Teste de Usabilidade

## Objetivos de Aprendizagem
O objetivo principal é aprender a construir uma interface web usando React. Esse framework front-end ataca o seguinte problema: como manter a interface e estado sincronizados. Portanto, esta experiência espera familiarizá-la com o conceito de estado da tela, e como cada mudança no estado vai refletir na interface (por exemplo, toda vez que adicionamos um produto para um pedido, a interface deve atualizar a lista de pedidos e o total). A interface deve ser projetada especificamente para rodar em tablets.

Como objetivo SECUNDÁRIO, você deve seguir as recomendações para PWAs (Progressive Web Apps), que inclui conceitos como offline. Para orientá-las sobre este tema,recomendamos que você use Lighthouse, que é uma ferramenta do Google que nos ajuda a garantir que nossos aplicativos web sigam "boas práticas".

Tópicos: react, pwa, offline-first, service-worker.  



#### [História de usuário 1] Usuário deve ter seu perfil (login/senha) para acessar o sistema.

Eu como funcionário do restaurante quero entrar na plataforma e ver apenas a
tela imporante para o meu trabalho.

##### Critérios de aceitação

O que deve acontecer para satisfazer as necessidades do usuário?

* Criar login e senha.
* Criar tipo de usuário (cozinha / salão).
* Entrar na tela correta para cada usuário.

##### Definição de pronto

O acordado abaixo deve acontecer para dizer que a história está terminada:

* Você deve ter recebido _code review_ de pelo menos uma parceira.
* Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
* Você deu deploy de seu aplicativo e marcou sua versão (tag git).

***

#### [História de usuário 2] Garçom/Garçonete deve ser capaz de anotar o pedido do cliente

Eu como garçom/garçonete quero poder anotar o pedido de um cliente para não
depender da minha memória, saber quanto cobrar e poder enviar os pedidos para a
cozinha para serem preparados em ordem.

##### Critérios de aceitação

O que deve acontecer para satisfazer as necessidades do usuário?

* Anotar o nome do cliente.
* Adicionar o nome do garçom/garçonete ao pedido
* Adicionar produtos aos pedidos.
* Excluir produtos.
* Ver resumo e o total da compra.
* Enviar o pedido para a cozinha (guardar em algum banco de dados).
* Funcionar bem e se adequar a um _tablet_.

##### Definição de pronto

O acordado abaixo deve acontecer para dizer que a história está terminada:

* Você deve ter recebido _code review_ de pelo menos uma parceira.
* Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
* Você deu deploy de seu aplicativo e marcou sua versão (tag git).

***

#### [História de usuário 3] Chefe de cozinha deve ver os pedidos

Eu como chefe de cozinha quero ver os pedidos dos clientes em ordem, poder marcar que estão prontos e poder notificar os garçons/garçonetes que o pedido está pronto para ser entregue ao cliente.

##### Critérios de aceitação

* Ver os pedidos à medida em que são feitos.
* Marcar os pedidos que foram preparados e estão prontos para serem servidos.
* Ver o tempo que levou para preparar o pedido desde que chegou, até ser marcado como concluído.

##### Definição de pronto

* Você deve ter recebido _code review_ de pelo menos uma parceira.
* Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
* Você deu deploy de seu aplicativo e marcou sua versão (tag git).

***

#### [História de usuário 4] Garçom/Garçonete deve ver os pedidos prontos para servir

Eu como garçom/garçonete quero ver os pedidos que estão prontos para entregá-los rapidamente aos clientes.

##### Critérios de aceitação

* Ver a lista de pedidos prontos para servir.
* Marque os pedidos que foram entregues.

##### Definição de pronto

* Você deve ter recebido _code review_ de pelo menos uma parceira.
* Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
* Você deu deploy de seu aplicativo e marcou sua versão (tag git).
* Os dados devem ser mantidos intactos, mesmo depois que um pedido terminado. Tudo isso para poder ter estatísticas no futuro.

***
