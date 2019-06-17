import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import ButtonDefault from 'components/ui/Buttons/Default';
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
          <ButtonDefault text="Ver Pedido" onClick={this.orderDelivered}/>
        </Card>
      </>
    )
  }
}  

export default OrderItemOpened;