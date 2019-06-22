import React, {Component, Fragment} from 'react';
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

  closeOrder = () => {
    const orderNumber = localStorage.getItem('orderNumber');
    database.collection("orders")
    .where("orderNumber", "==", parseInt(orderNumber))
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          console.log(doc.id, " => ", doc.data());
          database.collection("orders").doc(doc.id).update({status: "fechado"});
      });
  })
}
  
  render(){
    const orders = this.state.orderOpened;
    return (
      <Fragment>
        <ButtonAppBar btnText="Voltar" click={this.clickBack}/>
          {
            orders.map((order) => {  
              return (<div key={order.orderNumber}>
              <OrderItemOpened orderNumber={order.orderNumber} orderTime={order.date} clientName={order.nameClient} status={order.status}></OrderItemOpened>  
              <p>Status: {order.status}</p>
              <p> Nome do Atendente: {order.nameEmployee}</p>
              <table>
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
                  order.itens.map((item, index) => 
                  {
                    return (
                      <tr key={index}>
                        <td>{item.product}</td>
                        <td>{item.amount}</td>
                        <td>{item.value}</td>
                        <td>{item.total}</td>
                      </tr>
                    )
                  })  
                }
                </tbody>
              </table>
              <ButtonDefault text="Fechar Pedido" color="primary" onClick={() => this.closeOrder(order.orderNumber)}/>
              </div>)
            })
          }
      </Fragment>    
    );
  }
}
  
  export default ShowOrder;
