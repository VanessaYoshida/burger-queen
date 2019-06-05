import React from 'react';
import Button from 'components/ui/Buttons/Default'
import firebase from 'util/config/firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';

const firebaseAppAuth = firebase.auth();

class Register extends React.Component {
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
        <Button text="criar usuário" onClick={this.createUser} />
        <Button text="loga com usuario" onClick={this.signIn} />
      </div>
      )
    }
  }
  
  export default withFirebaseAuth({
    firebaseAppAuth,
  })(Register);
