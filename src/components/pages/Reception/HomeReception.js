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
      <div className="HomeReception" >
        <ButtonAddRequest text="Novo Pedido" color="secondary" onClick={() => addOrder()}/>
      </div>
      <div>
        <p>Pedidos Prontos</p>
        <OrderItemClosed orderNumber="1" orderTime="19:07" clientName="Luffy" status="pronto"></OrderItemClosed>
        <OrderItemClosed orderNumber="1" orderTime="19:07" clientName="Luffy" status="pronto"></OrderItemClosed>
        <OrderItemClosed orderNumber="1" orderTime="19:07" clientName="Luffy" status="pronto"></OrderItemClosed>
        <hr></hr>
        </div>  
    </Fragment>
  );
}
  
  export default HomeReception;
