import React from 'react';
import ButtonAppBar from 'components/ui/TopBar/ButtonAppBar';
import firebase from 'components/util/config/firebaseConfig';
import ButtonAddRequest from 'components/ui/Buttons/Add';

const firebaseAppAuth = firebase.auth();

class HomeReception extends React.Component {
  
  addOrder = () => {
    this.props.history.push(`/addRequest`);
  }

  clickLogout = () => {
    console.log("clicou para sair");
    firebaseAppAuth.signOut().then((response) => {
      console.log(response);
      this.props.history.push(`/`);
    })
  }

  render() {
    return (
      <div>
        <ButtonAppBar clickLogout={this.clickLogout}  />
        <ButtonAddRequest onClick={() => this.addOrder()}/>
      </div>
    );
  }
}

export default HomeReception;
