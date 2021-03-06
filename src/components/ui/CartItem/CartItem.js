import React, {Component} from 'react';
import './cartItem.css';

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      product: props.product,
      amount: parseInt(props.amount),
      value: parseFloat(props.value),
      total: 0
    }
  }

  minus = () => {
    let newAmount = this.state.amount - 1;
    let total = newAmount * this.state.value;
    this.setState({
      amount: newAmount,
      total: total
    });
    this.props.getTotal(total, this.state.id);
    this.props.getData({
      amount: newAmount,
      total: total,
      id: this.state.id,
      product: this.state.product,
      value: this.state.value
    });
  }

  plus = () => {
    let newAmount = this.state.amount + 1;
    let total = newAmount * this.state.value;
    this.setState({
      amount: newAmount,
      total: total
    });
    this.props.getTotal(total, this.state.id);
    this.props.getData({
      amount: newAmount,
      total: total,
      id: this.state.id,
      product: this.state.product,
      value: this.state.value
    });
  }

  render() {
    return (
      <>
        <tr>
          <td>{this.state.product}</td>
          <td>
            <button className="buttonTable" onClick={this.minus}> - </button>  
            <span className="amount">{this.state.amount}</span>
            <button className="buttonTable" onClick={this.plus}> + </button>  
          </td>
          <td>R${this.state.value}</td>
          <td>R${this.state.total}</td>
        </tr>
      </>  
    )
  }
}  

export default CartItem;