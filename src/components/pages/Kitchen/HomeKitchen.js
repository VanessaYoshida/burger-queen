import React, {Component, Fragment} from 'react';
import ButtonAppBar from 'components/ui/TopBar/ButtonAppBar';
import firebase from 'components/util/config/firebaseConfig';
import OrderItemOpened from 'components/ui/OrderItem/OrderItemOpened';
import ButtonDefault from 'components/ui/Buttons/Default';
import Card from '@material-ui/core/Card';
import './homeKitchen.css';

const database = firebase.firestore();
const firebaseAppAuth = firebase.auth();

class HomeKitchen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ordersOpened: [],
    } 
    this.getOrders();
  }  

  getOrders = () => {
    const orderOpened = database.collection("orders").where("status", "==", "aberto").orderBy("orderNumber","asc");
    orderOpened.get().then((querySnapshot) => {
      if (querySnapshot.docs.length > 0) {
        let orders = [];
        querySnapshot.forEach(function(doc) {
          orders.push(doc.data())
        });
        this.setState({
          ordersOpened: orders
        })
      }
    })
  }
  
  clickLogout = () => {
    firebaseAppAuth.signOut().then(() => {
      localStorage.removeItem('userName');
      this.props.history.push(`/`);
    })
  }

  orderDelivered = (orderNumber) => {
    localStorage.removeItem('orderNumber');
    localStorage.setItem('orderNumber', orderNumber);
    this.props.history.push("/mostrarPedido");
  }

  render() {
    return (
      <Fragment>
        <ButtonAppBar btnText="Sair" click={this.clickLogout}/>
        <div>
          <p>Pedidos Abertos</p>
          {
            this.state.ordersOpened.map((order) => {
              return <Card key={order.orderNumber}>
                <OrderItemOpened orderNumber={order.orderNumber} orderTime={order.date} clientName={order.nameClient} status={order.status}></OrderItemOpened>
                <ButtonDefault text="Ver Pedido" color="primary" onClick={() => this.orderDelivered(order.orderNumber)}/>
                </Card>
            })
          }
          <hr></hr>
          </div>  
      </Fragment>
    );
  }
}
  
  export default HomeKitchen;
