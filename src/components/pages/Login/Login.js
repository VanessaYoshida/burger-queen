import React from 'react';
import ButtonDefault from 'components/ui/Buttons/Default'
import firebase from 'components/util/config/firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';
import OutlinedTextFields from 'components/ui/Form/input';

const firebaseAppAuth = firebase.auth();

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  
  handleChange = (event, element) => {
    const newState = this.state;
    newState[element] = event.target.value
    this.setState(newState);
  }
  
  createUser = () => {
    this.props.createUserWithEmailAndPassword(this.state.email, this.state.password);
  }
  
  signIn = () => {
    this.props.signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {
      alert("uhul");
    });
  }
  
  render() {
    return (
      <div>
      <OutlinedTextFields text="E-mail" value={this.state.email}
      placeholder="E-mail"
      onChange={(e) => this.handleChange(e, "email")} />
      <OutlinedTextFields text="Senha"
      text="password"
      placeholder="Senha"
      value={this.state.password}
      onChange={(e) => this.handleChange(e, "password")}
      />
      <ButtonDefault text="Entrar" onClick={this.createUser}/>
      <p>Ou</p>
      <ButtonDefault text="Cadastre-se" onClick={this.signIn}/>
      </div>
      )
    }
  }
  
  export default withFirebaseAuth({
    firebaseAppAuth,
  })(Login);
