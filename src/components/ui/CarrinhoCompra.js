import React, {Component} from 'react';
import ItemCarrinho from './ItemCarrinho';

class CarrinhoCompra extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itensTotal: [0, 0, 0, 0],
      totalFinal: 0
    }
  }

  atualizaTotal = (total, id) => {
    
    //pega todos os itens menos o atual
    let itensTotal = this.state.itensTotal.filter((item, index) => index !== id);
    //atualiza o valor do item atual
    itensTotal[id] = total;
  
    this.setState({
      //atualiza o total de cada no estado
      itensTotal: itensTotal,
      totalFinal: itensTotal.reduce((ac, item)=> ac + item)
    })
  }

  render() {
    return (
      <>
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
        <ItemCarrinho id="0" produto="Café com leite" quantidade="0" valor="5" getTotal={this.atualizaTotal} ></ItemCarrinho>
        <ItemCarrinho id="1" produto="Café puro" quantidade="0" valor="10" getTotal={this.atualizaTotal} ></ItemCarrinho>
        <ItemCarrinho id="2" produto="Pão com manteiga" quantidade="0" valor="7" getTotal={this.atualizaTotal} ></ItemCarrinho>
        <ItemCarrinho id="3" produto="coxinha de frango" quantidade="0" valor="2" getTotal={this.atualizaTotal}></ItemCarrinho>
        <tr>
          <td colSpan="4">
            Total = {this.state.totalFinal}
          </td>
        </tr>
        </tbody>
      </table>
      </>
    )
  }
}  

export default CarrinhoCompra;