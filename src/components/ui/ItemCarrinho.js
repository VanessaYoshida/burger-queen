import React, {Component} from 'react';

class ItemCarrinho extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      produto: props.produto,
      quantidade: parseInt(props.quantidade),
      valor: parseFloat(props.valor),
      total: 0
    }
  }

  menos = () => {
    let qtde = this.state.quantidade - 1;
    let total = qtde *this.state.valor;
    this.setState({
      quantidade: qtde,
      total: total
    });
    this.props.getTotal(total, this.state.id);
  }

  mais = () => {
    let qtde = this.state.quantidade + 1;
    let total = qtde *this.state.valor;
    this.setState({
      quantidade: qtde,
      total: total
    });
    this.props.getTotal(total, this.state.id);
  }

  render() {
    return (
      <>
        <tr>
          <td>{this.state.produto}</td>
          <td>
            <button onClick={this.menos}> - </button>  
            {this.state.quantidade}
            <button onClick={this.mais}> + </button>  
          </td>
          <td>{this.state.valor}</td>
          <td>{this.state.total}</td>
        </tr>
      </>  
    )
  }
}  

export default ItemCarrinho;