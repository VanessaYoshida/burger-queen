import React, {Component} from 'react';
import firebase from 'components/util/config/firebaseConfig';
import ButtonAppBar from 'components/ui/TopBar/ButtonAppBar';
import OrderItemOpened from '../../ui/OrderItem/OrderItemOpened';
import ButtonDefault from 'components/ui/Buttons/Default';

const database = firebase.firestore();

class ShowOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderOpened: [],
      itens: [],
      status:""
    }
    this.getOrders();
  }

  clickBack = () => {
    this.props.history.push(`/cozinha`);
  }

  getOrders = () => {
    const orderNumber = localStorage.getItem('orderNumber');
    const orderOpened = database.collection("orders").where("orderNumber", "==", parseInt(orderNumber));

    orderOpened.get().then((querySnapshot) => {
      let order = [];
      let itensOrder = [];
        querySnapshot.forEach(function(doc) {
          order.push(doc.data())
        });
        
        this.setState({
          orderOpened: order
        })
        let itens = order.map((order) => order.itens.map((item) => item))
        itensOrder.push(itens);
    })
  }

  closeOrder = (orderNumber) => {
    // database.collection("orders").where("orderNumber", "==", parseInt(orderNumber)).set({status: "fechado"});
  }
  
  render(){
    return (
      <>
        <ButtonAppBar btnText="Voltar" click={this.clickBack}/>
          {
            this.state.orderOpened.map((order) => {  
              return <div key={order.orderNumber}>
              <OrderItemOpened orderNumber={order.orderNumber} orderTime={order.date} clientName={order.nameClient} status={order.status}></OrderItemOpened>  
              <p>Status: {order.status}</p>
              <p> Nome do Atendente: {order.nameEmployee}</p>
              </div>
            })
          }
          {
            this.state.orderOpened.map((item, index) => {return <div key={item.orderNumber}>{item.itens[index].product}
            <ButtonDefault text="Fechar Pedido" color="primary" onClick={() => this.closeOrder(item.orderNumber)}/>
          </div>})
          }
       </>    
    );
  }
}
  
  export default ShowOrder;
