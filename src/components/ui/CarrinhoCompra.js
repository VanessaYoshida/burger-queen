import React, {Component, Fragment} from 'react';
import ItemCarrinho from './ItemCarrinho';

const menu = {
  "breakfast": [
      {id:0, item:"Café Americano", price: 5},
      {id:1, item:"Café com Leite", price: 7},
      {id:2, item:"Sanduíche de Presunto e Queijo", price: 10},
      {id:3, item:"Suco de Fruta Natural", price: 7}
  ],
  "lunch": [
      {id:4, item:"Hamburguer Simples Bovino", price:10 },
      {id:5, item:"Hamburguer Simples de Frango", price:10 },
      {id:6, item:"Hamburguer Simples Vegetariano", price:10 },
      {id:7, item:"Hamburguer Duplo Bovino", price:15 },
      {id:8, item:"Hamburguer Duplo Frango", price:15 },
      {id:9, item:"Hamburguer Duplo Vegetariano", price:15 },
      {id:10, item:"Queijo", price:1 },
      {id:11, item:"Ovo", price:1 },
      {id:12, item:"Batata Frita", price:5 },
      {id:13, item:"Anéis de Cebola", price:5 },
      {id:14, item:"Água 500ml", price:5 },
      {id:15, item:"Água 750ml", price:7 },
      {id:16, item:"Bebida gaseificada 500ml", price:7 },
      {id:17, item:"Bebida gaseificada 750ml", price:10 }
  ]
}

class CarrinhoCompra extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itensTotal: [],
      totalFinal: 0
    }
  }

  handleChange = (event, element) => {
    const newState = this.state;
    newState[element] = event.target.value
    this.setState(newState);
  }

  atualizaTotal = (total, id) => {
    let itensTotal = this.state.itensTotal;
    itensTotal[id] = total;
  
    this.setState({
      itensTotal: itensTotal,
      totalFinal: itensTotal.reduce((ac, item)=> ac + item)
    })
  }

  changeCategory = (e) => {
    this.handleChange(e, "category");
    this.setState({
      itensTotal: [],
      totalFinal: 0
    })
  }

  render() {
    const categorySelect = (this.state.category === "lunch") ? "lunch" : "breakfast";
    return (
      <Fragment>
      <select className="categoryMenu" value=       {this.state.category} onChange={this.changeCategory} >
          <option value="breakfast" >Café da Manhã</option>
          <option value="lunch">Almoço ou Janta</option>
      </select>     
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
              return <ItemCarrinho key={product.id} id={i} produto={product.item} quantidade="0" valor={product.price} getTotal={this.atualizaTotal} ></ItemCarrinho>
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