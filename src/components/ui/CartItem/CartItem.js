import React, {Component} from 'react';

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
    let total = newAmount *this.state.value;
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
            <button onClick={this.minus}> - </button>  
            {this.state.amount}
            <button onClick={this.plus}> + </button>  
          </td>
          <td>{this.state.value}</td>
          <td>{this.state.total}</td>
        </tr>
      </>  
    )
  }
}  

export default CartItem;