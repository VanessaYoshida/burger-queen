import React from 'react';
import ShoppingCart from 'components/ui/ShoppingCart/ShoppingCart';
import ButtonAppBar from 'components/ui/TopBar/ButtonAppBar';

const Cart = (props) => {
  const clickBack = () => {
    props.history.push(`/salao`);
  }

  return (
    <>
      <ButtonAppBar btnText="Voltar" click={clickBack} />
      <ShoppingCart></ShoppingCart>
    </>
  )
}

export default Cart;