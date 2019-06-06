import React from 'react';
import ButtonAppBar from 'components/ui/TopBar/ButtonAppBar';
import ButtonDefault from 'components/ui/Buttons/Default';

const cardapio = {
  "breakfast": [
      {item:"Café Americano", preco: 5},
      {item:"Café com Leite", preco: 7},
      {item:"Sanduíche de Presunto e Queijo", preco: 10},
      {item:"Suco de Fruta Natural", preco: 7}
  ],
  "lunch": [
      {item:"Hamburguer Simples Bovino", preco:10 },
      {item:"Hamburguer Simples de Frango", preco:10 },
      {item:"Hamburguer Simples Vegetariano", preco:10 },
      {item:"Hamburguer Duplo Bovino", preco:15 },
      {item:"Hamburguer Duplo Frango", preco:15 },
      {item:"Hamburguer Duplo Vegetariano", preco:15 },
      {item:"Queijo", preco:1 },
      {item:"Ovo", preco:1 },
      {item:"Batata Frita", preco:5 },
      {item:"Anéis de Cebola", preco:5 },
      {item:"Água 500ml", preco:5 },
      {item:"Água 750ml", preco:7 },
      {item:"Bebida gaseificada 500ml", preco:7 },
      {item:"Bebida gaseificada 750ml", preco:10 }
  ]
}



class HomeReception extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comprar: []
    }
  }

  cliqueDaCompra = (opcao) => {
    const itemIndex = this.state.comprar.findIndex((produto) => {
      return produto.item === opcao.item;
    })
    if (itemIndex < 0) {
      const newItem = {
        ...opcao,
        quantidade: 1
      };
    this.setState({
      comprar: this.state.comprar.concat(newItem)
    });
  } else {
      let newComprar = this.state.comprar;
      newComprar[itemIndex].quantidade += 1;
      this.setState({
        comprar: newComprar
      })
    }
  }

  cliqueDeleta = (opcao) => {
    const itemIndex = this.state.comprar.findIndex((produto) => {
      return produto.item === opcao.item;
    });
    let newComprar = this.state.comprar;
    newComprar[itemIndex].quantidade -= 1;

    const quantidade = newComprar[itemIndex].quantidade;

    if (quantidade > 0){
      this.setState({
        comprar: newComprar
      });
    } else {
      newComprar.splice(itemIndex, 1);
      this.setState({
        comprar: newComprar
      });
    }  
  }

  render() {
    const valorTotal = this.state.comprar.reduce((acc, cur) => {
      return acc + (cur.quantidade * cur.preco)
    }, 0);
    return (
      <div>
        <ButtonAppBar />
        {
          cardapio.breakfast.map((produto, index) => {
            return <ButtonDefault text={produto.item} key={index} color="primary"onClick={() => this.cliqueDaCompra(produto)}/>
          })
        }
        <hr></hr>
        <h1> Itens Comprados </h1>
        {
          this.state.comprar.map((produto, i) => {
            return <div key={i}>
              <p key={i}>{produto.item} / {produto.preco * produto.quantidade} / {produto.quantidade} </p>
              <ButtonDefault text="Deletar" onClick={() => this.cliqueDeleta(produto)} />
              </div>
          })
        }
        <hr></hr>
        <h1> Total </h1>
        <p> Valor Total: {valorTotal}</p>
      </div>
    );
  }
}

export default HomeReception;
