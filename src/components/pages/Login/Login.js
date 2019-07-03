import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import firebase from 'components/util/config/firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';
import ButtonDefault from 'components/ui/Buttons/Default';
import Input from 'components/ui/Form/input';
import logo from './img/Burger-Queen.png';
import 'components/pages/Login/login.css';
import Card from '@material-ui/core/Card';

const firebaseAppAuth = firebase.auth();
const database = firebase.firestore();

class Login extends Component {
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
          localStorage.setItem('userName', data.displayName);
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
        <Card className="card">    
        <div>
        <img src={logo} alt="img-logo" className="img-logo"/>   
        </div>
        <div className="input">
        <Input text="E-mail" type="email" placeholder="E-mail"
        value={email}
        onChange={(e) => this.handleChange(e, "email")} />
        <Input text="Senha" type="password" placeholder="Senha"
        value={password}
        onChange={(e) => this.handleChange(e, "password")}
        />
        <ButtonDefault text="Entrar" color="primary" onClick={this.signIn}/>
        </div>
        <div className="boxRegister">
        <Link to="/cadastro" className="linkRegister"><span className="textRegister">Não tem conta?</span> Cadastre-se </Link>
        </div>
        </Card>
      </div>
      )
    }
  }
  
  export default withFirebaseAuth({
    firebaseAppAuth,
  })(Login);
