import React, {Component, Fragment} from 'react';
import ButtonAppBar from 'components/ui/TopBar/ButtonAppBar';
import firebase from 'components/util/config/firebaseConfig';
import OrderItemOpened from 'components/ui/OrderItem/OrderItemOpened';
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

  addOrder = () => {
    this.props.history.push(`/carrinho`);
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

  render() {
    return (
      <Fragment>
        <ButtonAppBar btnText="Sair" click={this.clickLogout}/>
        <div>
          <p>Pedidos Abertos</p>
          {
            this.state.ordersOpened.map((order) => {
              return <OrderItemOpened key={order.orderNumber} orderNumber={order.orderNumber} orderTime={order.date} clientName={order.nameClient} status={order.status}></OrderItemOpened>
            })
          }
          <hr></hr>
          </div>  
      </Fragment>
    );
  }
}
  
  export default HomeKitchen;
