import React, {Component} from 'react';
import ButtonAppBar from 'components/ui/TopBar/ButtonAppBar';

class ShowOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderNumber: "",
      nameClient: "",
      nameEmployee: "",
      category: "",
      date: "",
      status: "",
      cartItens:[],
      itensTotal: [],
      totalFinal: 0
    }
  }
  
  render(){
    return (
      <>
      <ButtonAppBar btnText="Sair" click={clickLogout}/>
      
      </>
      );
    }
  }
  
  export default ShowOrder;
