import React, {Component} from 'react';
import ButtonAppBar from 'components/ui/TopBar/ButtonAppBar';
import firebase from 'components/util/config/firebaseConfig';
import ButtonAddRequest from 'components/ui/Buttons/Add';

const firebaseAppAuth = firebase.auth();

class HomeReception extends Component {
  
  addOrder = () => {
    this.props.history.push(`/breakfast`);
  }

  clickLogout = () => {
    firebaseAppAuth.signOut().then(() => {
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
