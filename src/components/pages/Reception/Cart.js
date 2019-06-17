import React from 'react';
import ShoppingCart from 'components/ui/ShoppingCart/ShoppingCart';
import ButtonAppBar from 'components/ui/TopBar/ButtonAppBar';
import './reception.css';

const Cart = (props) => {
  const clickBack = () => {
    props.history.push(`/salao`);
  }

  return (
    <>
      <ButtonAppBar btnText="Voltar" click={clickBack} />
      <main className="Reception">
        <ShoppingCart></ShoppingCart>
      </main>
    </>
  )
}

export default Cart;