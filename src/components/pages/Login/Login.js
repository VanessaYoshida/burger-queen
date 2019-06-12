import React from 'react';
import firebase from 'components/util/config/firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';
import { Link } from 'react-router-dom';
import ButtonDefault from 'components/ui/Buttons/Default';
import Input from 'components/ui/Form/input';
import logo from './img/Burger-Queen.png';
import 'components/pages/Login/login.css';

const firebaseAppAuth = firebase.auth();
const database = firebase.firestore();

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
  
  signIn = () => {
    const { email, password } = this.state;
    const { history: { push } } = this.props;
    
    firebaseAppAuth.signInWithEmailAndPassword(email, password)
    .then((response) => {
      if (response) {
        database.doc(`users/${response.user.uid}`).get()
        .then((response) => {
          const data = response.data();
          push(`/${data.typeUser}`); 
        })
      }
    })
    .catch((response) => {
      if(response.message === "The password is invalid or the user does not have a password." 
      || response.message === "There is no user record corresponding to this identifier. The user may have been deleted."){
        alert("E-mail ou senha inválidos.");
      } else {
        alert(response.message);
      }
    })  
  }
  
  render() {
    const { email, password } = this.state;
    return (
      <div className="PageLogin"> 
        <div className="container">      
          <div>
            <img src={logo} alt="img-logo" className="img-logo"/>   
          </div>
          <div class="input">
            <Input text="E-mail" type="email" placeholder="E-mail"
            value={email}
            onChange={(e) => this.handleChange(e, "email")} />
            <Input text="Senha" type="password" placeholder="Senha"
            value={password}
            onChange={(e) => this.handleChange(e, "password")}
            />
          </div>
          <ButtonDefault text="Entrar" color="primary" onClick={this.signIn}/>
          <Link to="/Register" className="linkRegister"><span className="textRegister">Não tem conta?</span> Cadastre-se </Link>
        </div>
      </div>
      )
    }
  }
  
  export default withFirebaseAuth({
    firebaseAppAuth,
  })(Login);
