import React, {Component, Fragment} from 'react';
import ButtonAppBar from 'components/ui/TopBar/ButtonAppBar';
import firebase from 'components/util/config/firebaseConfig';
import ButtonAddRequest from 'components/ui/Buttons/Add';
import OrderItemClosed from 'components/ui/OrderItem/OrderItemClosed';
import ButtonDefault from 'components/ui/Buttons/Default';
import Card from '@material-ui/core/Card';
import './reception.css';

const database = firebase.firestore();
const firebaseAppAuth = firebase.auth();

class HomeReception extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ordersClosed: []
    }
    this.getOrders();
  }

  addOrder = () => {
    this.props.history.push(`/carrinho`);
  }

  getOrders = () => {
    const ordersClosed = database.collection("orders").where("status", "==", "fechado").orderBy("orderNumber","asc");
    ordersClosed.get().then((querySnapshot) => {
      if (querySnapshot.docs.length > 0) {
        let orders = [];
        querySnapshot.forEach(function(doc) {
          orders.push(doc.data())
        });
        this.setState({
          ordersClosed: orders
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
    database.collection("orders")
    .where("orderNumber", "==", parseInt(orderNumber))
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          console.log(doc.id, " => ", doc.data());
          database.collection("orders").doc(doc.id).update({status: "entregue"});
      });
  })
  alert("Pedido Entregue com sucesso.");
  this.props.history.push("/salao");
  }
  
  render() {
    return (
      <Fragment>
        <ButtonAppBar btnText="Sair" click={this.clickLogout}/>
        <main className="Reception">
          <header>
            <ButtonAddRequest text="Novo Pedido" color="secondary" onClick={() => this.addOrder()}/>
          </header>
          <section>
            <p><b>Pedidos Prontos</b></p>
            {
              this.state.ordersClosed.map((order, index) => {
                return <div key={order.orderNumber}><Card>
                  <OrderItemClosed orderNumber={order.orderNumber} orderTime={order.date} clientName={order.nameClient} status={order.status}></OrderItemClosed>
                  <ButtonDefault text="Pedido Entregue" color="primary" onClick={() => this.orderDelivered(order.orderNumber)}/>
                  </Card></div>
              })
            }
          </section>  
        </main>  
      </Fragment>
    );
  }
}
  
  export default HomeReception;
