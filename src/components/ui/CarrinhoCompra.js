import React, {Component, Fragment} from 'react';
import ItemCarrinho from './ItemCarrinho';

const menu = {
  "breakfast": [
      {item:"Café Americano", price: 5},
      {item:"Café com Leite", price: 7},
      {item:"Sanduíche de Presunto e Queijo", price: 10},
      {item:"Suco de Fruta Natural", price: 7}
  ],
  "lunch": [
      {item:"Hamburguer Simples Bovino", price:10 },
      {item:"Hamburguer Simples de Frango", price:10 },
      {item:"Hamburguer Simples Vegetariano", price:10 },
      {item:"Hamburguer Duplo Bovino", price:15 },
      {item:"Hamburguer Duplo Frango", price:15 },
      {item:"Hamburguer Duplo Vegetariano", price:15 },
      {item:"Queijo", price:1 },
      {item:"Ovo", price:1 },
      {item:"Batata Frita", price:5 },
      {item:"Anéis de Cebola", price:5 },
      {item:"Água 500ml", price:5 },
      {item:"Água 750ml", price:7 },
      {item:"Bebida gaseificada 500ml", price:7 },
      {item:"Bebida gaseificada 750ml", price:10 }
  ]
}

class CarrinhoCompra extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itensTotal: [0, 0, 0, 0],
      totalFinal: 0
    }
  }

  atualizaTotal = (total, id) => {
    
    //pega todos os itens
    let itensTotal = this.state.itensTotal;
    //atualiza o valor do item atual
    itensTotal[id] = total;
  
    this.setState({
      //atualiza o total de cada no estado
      itensTotal: itensTotal,
      totalFinal: itensTotal.reduce((ac, item)=> ac + item)
    })
  }

  render() {
    const categorySelect = (this.state.category === "lunch") ? "lunch" : "breakfast";
    return (
      <Fragment>
      <table border="1">
        <thead>
        <tr>
          <th>Produto</th>
          <th>Quantidade</th>
          <th>Valor</th>
          <th>Total</th>
        </tr>
        </thead>
        <tbody>
          {
            menu[categorySelect].map((product, i) => {
              return <ItemCarrinho key={i} id={i} produto={product.item} quantidade="0" valor={product.price} getTotal={this.atualizaTotal} ></ItemCarrinho>
            })
          }  
          <tr>
            <td colSpan="4">
              Total = {this.state.totalFinal}
            </td>
          </tr>
        </tbody>
      </table>
      
      </Fragment>
    )
  }
}  

export default CarrinhoCompra;