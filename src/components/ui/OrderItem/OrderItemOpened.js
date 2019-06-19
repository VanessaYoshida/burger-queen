import React, {Component} from 'react';
import moment from 'moment';

class OrderItemOpened extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderNumber: props.orderNumber,
      orderTime: props.orderTime,
      waitingTime: "",
      clientName: props.clientName,
      status: props.status,
    }
    setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick = () => { 
    let orderTime = this.state.orderTime;
    let momentDate = moment(orderTime.toDate()).toNow(true);
    this.setState({
      waitingTime: momentDate
    })
  }

  render(){
    return(
      <>
        <p>Pedido: {this.state.orderNumber} </p>
        <p>Nome do Cliente: {this.state.clientName}</p>
        <p>Tempo de Espera: {this.state.waitingTime} </p>
      </>
    )
  }
}  

export default OrderItemOpened;