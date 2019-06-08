import React from 'react';
import ButtonDefault from 'components/ui/Buttons/Default';
import firebase from 'components/util/config/firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';
import OutlinedTextFields from 'components/ui/Form/input';
import { Link } from 'react-router-dom'

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
  
  signIn = () => {
    const { email, password } = this.state;
    const { history: { push } } = this.props;

    firebaseAppAuth.signInWithEmailAndPassword(email, password)
    .then(() => {
      push('/HomeReception')
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
      <OutlinedTextFields text="E-mail" type="text" value={email}
      placeholder="E-mail"
      onChange={(e) => this.handleChange(e, "email")} />
      <OutlinedTextFields text="Senha"
      type="password"
      placeholder="Senha"
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
