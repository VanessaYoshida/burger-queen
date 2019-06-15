import React, {Fragment} from 'react';
import ButtonAppBar from 'components/ui/TopBar/ButtonAppBar';
import firebase from 'components/util/config/firebaseConfig';
import ButtonAddRequest from 'components/ui/Buttons/Add';
import './reception.css';
const firebaseAppAuth = firebase.auth();

const HomeReception = (props) => {
  const addOrder = () => {
    props.history.push(`/addRequest`);
  }
  
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
        <p>Pedidos Abertos</p>
        <hr></hr>
      </div>
      <div>
        <p>Pedidos Prontos</p>
        <hr></hr>
        </div>  
    </Fragment>
  );
}
  
  export default HomeReception;
