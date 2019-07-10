# Burger Queen

Nesse projeto o objetivo foi criar um App em React para uma Hamburgueria. Nela existem 2 tipos de cadastros, um deles é para o atendente e o outro para a pessoa que está na cozinha. Cada tipo de usuário pode ver só o que está dentro de sua função no restaurante.

Link para acessar o site: [Burger Queen](https://burger-queen-eba7f.firebaseapp.com)

## Índice

* [Instalação](#Instalação)
* [Resumo do Projeto](#Resumo-do-Projeto)
* [Linguagem de programação](#Linguagem-de-programação)
* [Autoria](#Autoria)
* [Personas](#Personas)
* [Organização](#Organização)
* [Protótipo](#Protótipo)
* [Teste de Usabilidade](#Teste-de-usabilidade)
* [Objetivos de Aprendizagem](#Objetivos-de-Aprendizagem)
* [Histórias de Usuário implementadas](#Histórias-de-Usuário-implementadas)

#Instalação
```node

> npm install
> npm start

```

## Resumo do Projeto
Desta vez temos um projeto 100% por demanda. Um pequeno restaurante de hambúrgueres chamado Burger Queen, que está crescendo, necessita uma interface em que se possa realizar pedidos utilizando um tablet, e enviá-los para a cozinha para que sejam preparados de forma ordenada e eficiente. 
Eles tem uma proposta de serviço 24 horas foi muito bem recebida e, para continuar a crescer, precisam de um sistema que os ajude a receber pedidos dos clientes.
A interface deve mostrar os dois menus (café da manhã e restante do dia), cada um com todos os seus produtos. O usuário deve poder escolher que produtos adicionar e a interface deve mostrar o resumo do pedido com o custo total.

## Linguagem de programação
Essa página foi desenvolvida em JavaScript (ES6 +), HTML e CSS e empacotada de forma automatizada. E o objetivo principal foi utilizar a biblioteca React. E para armazenar os dados foi utilizado o banco de dados Firebase.

## Autoria
Esse projeto foi desenvolvido de forma individual por Vanessa Yoshida.

## Personas
![persona](/public/assets/img/persona-renata.png)
![persona](/public/assets/img/persona-hugo.png)

## Organização
Trello e Project do Git Hub.

## Protótipo
[Protótipo Burger Queen](https://xd.adobe.com/view/22849aa8-f906-4d2c-6881-aa86234d765d-54b5/?fullscreen)

## Teste de Usabilidade
De acordo com o teste, percebi que os usuários encontram facilmente os botões para poder fazer login ou se cadastrar, e fazer um novo pedido ou finalizar um pedido. Pois os botões estão com as tarefas escritas e tem cores diferenciadas para ficar mais fácil de identificá-lo. As tarefas estão fáceis de serem executadas.

## Objetivos de Aprendizagem
O objetivo principal foi aprender a construir uma interface web usando React. Esse framework front-end ataca o seguinte problema: como manter a interface e estado sincronizados. Portanto, esta experiência espera familiarizá-la com o conceito de estado da tela, e como cada mudança no estado vai refletir na interface (por exemplo, toda vez que adicionamos um produto para um pedido, a interface deve atualizar a lista de pedidos e o total). A interface deve ser projetada especificamente para rodar em tablets.

Tópicos: react, pwa, offline-first, service-worker.  

## Histórias de Usuário implementadas

#### [História de usuário 1] Usuário deve ter seu perfil (login/senha) para acessar o sistema.

Eu como funcionário do restaurante quero entrar na plataforma e ver apenas a
tela imporante para o meu trabalho.

##### Implementações funcionando

O que deve acontecer para satisfazer as necessidades do usuário?

* Criar login e senha.
* Criar tipo de usuário (cozinha / salão).
* Entrar na tela correta para cada usuário.

#### [História de usuário 2] Garçom/Garçonete deve ser capaz de anotar o pedido do cliente

Eu como garçom/garçonete quero poder anotar o pedido de um cliente para não
depender da minha memória, saber quanto cobrar e poder enviar os pedidos para a
cozinha para serem preparados em ordem.

##### Implementações funcionando

O que deve acontecer para satisfazer as necessidades do usuário?

* Anotar o nome do cliente.
* Adicionar o nome do garçom/garçonete ao pedido
* Adicionar produtos aos pedidos.
* Excluir produtos.
* Ver resumo e o total da compra.
* Enviar o pedido para a cozinha (guardar em algum banco de dados).
* Funcionar bem e se adequar a um _tablet_.

#### [História de usuário 3] Chefe de cozinha deve ver os pedidos

Eu como chefe de cozinha quero ver os pedidos dos clientes em ordem, poder marcar que estão prontos e poder notificar os garçons/garçonetes que o pedido está pronto para ser entregue ao cliente.

##### Implementações funcionando

* Ver os pedidos à medida em que são feitos.
* Em progresso a implementação de alteração para pedido pronto.
