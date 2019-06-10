import React from 'react';
import firebase from 'components/util/config/firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';
import { Link } from 'react-router-dom';
import ButtonDefault from 'components/ui/Buttons/Default';
import Input from 'components/ui/Form/input';
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
      // sessionStorage['userID'] = userCredential.user.uid;
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
      <Input text="E-mail" type="email" placeholder="E-mail"
      value={email}
      onChange={(e) => this.handleChange(e, "email")} />
      <Input text="Senha" type="password" placeholder="Senha"
      value={password}
      onChange={(e) => this.handleChange(e, "password")}
      />
      <ButtonDefault text="Entrar"  color="primary" onClick={this.signIn}/>
      <p>Ou</p>
      <Link to="/Register"> Cadastre-se </Link>
      </div>
      )
    }
  }
  
  export default withFirebaseAuth({
    firebaseAppAuth,
  })(Login);
