import React from 'react';
import ButtonDefault from 'components/ui/Buttons/Default'
import firebase from 'components/util/config/firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';
import OutlinedTextFields from 'components/ui/Form/input';
import Form from 'react-bootstrap/Form';

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
      <input value={this.state.email}
      placeholder="E-mail"
      onChange={(e) => this.handleChange(e, "email")} />
      <input
      id="password"
      name="password"
      placeholder="Senha"
      value={this.state.password}
      onChange={(e) => this.handleChange(e, "password")}
      />
      <ButtonDefault text="Entrar" onClick={this.createUser}/>
      <p>Ou</p>
      <ButtonDefault text="Cadastre-se" onClick={this.signIn}/>
      
      
      <OutlinedTextFields text="E-mail"/>
      <OutlinedTextFields text="Senha"/>
      <Form>
      <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
      Digite o seu e-mail cadastrado no Burger Queen.
      </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicChecbox">
      </Form.Group>
      </Form>
      
      </div>
      )
    }
  }
  
  export default withFirebaseAuth({
    firebaseAppAuth,
  })(Login);
