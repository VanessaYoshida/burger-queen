import React, {Fragment} from 'react';
import ButtonAppBar from 'components/ui/TopBar/ButtonAppBar';
import firebase from 'components/util/config/firebaseConfig';
import ButtonAddRequest from 'components/ui/Buttons/Add';
import OrderItemClosed from 'components/ui/OrderItem/OrderItemClosed';
import './reception.css';

// const database = firebase.firestore();
const firebaseAppAuth = firebase.auth();

const HomeReception = (props) => {
  const addOrder = () => {
    props.history.push(`/carrinho`);
  }

  // const getOrders = () => {
  //   const OrderClosed = database.collection("cities").where("status", "===", "fechado");
  // }
  
  const clickLogout = () => {
    firebaseAppAuth.signOut().then(() => {
      localStorage.removeItem('userName');
      props.history.push(`/`);
    })
  }
  
  return (
    <Fragment>
      <ButtonAppBar btnText="Sair" click={clickLogout}/>
      <main className="Reception">
        <header>
          <ButtonAddRequest text="Novo Pedido" color="secondary" onClick={() => addOrder()}/>
        </header>
        <body>
          <p><b>Pedidos Prontos</b></p>
          <OrderItemClosed orderNumber="1" orderTime="19:07" waitingTime="10 min" clientName="Luffy" status="pronto"></OrderItemClosed>
          <OrderItemClosed orderNumber="2" orderTime="19:08" waitingTime="11 min" clientName="Nami" status="pronto"></OrderItemClosed>
        </body>  
      </main>  
    </Fragment>
  );
}
  
  export default HomeReception;
