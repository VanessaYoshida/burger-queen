import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import ButtonDefault from 'components/ui/Buttons/Default';

class OrderItemClosed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderNumber: props.orderNumber,
      orderTime: props.orderTime,
      waitingTime: "",
      clientName: props.clientName,
      status: props.status
    }
  }

  orderDelivered = () => {
    console.log("Oi")
  }

  render(){
    return(
      <>
        <Card>
          Pedido: {this.state.orderNumber} <br></br>
          Nome do Cliente: {this.state.clientName} <br></br>
          Tempo de Espera: {this.state.waitingTime} <br></br>
          <ButtonDefault text="Pedido Entregue" onClick={this.orderDelivered}/>
        </Card>
      </>
    )
  }
}  

export default OrderItemClosed;