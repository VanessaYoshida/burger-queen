import React from 'react';
import firebase from 'components/util/config/firebaseConfig';
import ButtonDefault from 'components/ui/Buttons/Default'
import withFirebaseAuth from 'react-with-firebase-auth';
import OutlinedTextFields from 'components/ui/Form/input';

const firebaseAppAuth = firebase.auth();
const database = firebase.firestore();

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      displayName: "",
      lastName: "",
      dateOfBirth: "",
      typeUser: "",
      listItem: []
    };
  }

  componentDidMount() {
    database.collection('users').get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({ listItem: data });
      });
  }
  
    handleChange = (event, element) => {
      const newState = this.state;
      newState[element] = event.target.value
      this.setState(newState);
    }
    
  handleClick = () => {
    const user = {
      email: this.state.email,
      displayName: this.state.displayName,
      lastName: this.state.lastName,
      dateOfBirth: this.state.dateOfBirth,
      typeUser: this.state.typeUser
    }
    database.collection('users').add(user)
    this.setState({
      listItem: this.state.listItem.concat(user)
    })
  }

  createUser = () => {
    this.props.createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((response) => { 
      console.log(response);
      database.doc(`user/${response.user.uid}`)
      .set({
        email: this.state.email,
        displayName: this.state.displayName,
        lastName: this.state.lastName,
        dateOfBirth: this.state.dateOfBirth,
        typeUser: this.state.typeUser
      });
  })
  }

  signIn = () => {
    const { email, password } = this.state;
    const { signInWithEmailAndPassword, history: { push } } = this.props;

    signInWithEmailAndPassword(email, password)
    .then(() => {
      push('/HomeReception')
    });
  }

  render() {
    return (
      <div>
        <OutlinedTextFields text="E-mail" type="text" value={this.state.email}
          onChange={(e) => this.handleChange(e, "email")} 
        />
        <OutlinedTextFields text="password" type="password" value={this.state.password}
          onChange={(e) => this.handleChange(e, "password")}
        />
        <OutlinedTextFields text="Nome" type="text" value={this.state.displayName}
          onChange={(e) => this.handleChange(e, "displayName")} 
        />
        <OutlinedTextFields text="Sobrenome" type="text" value={this.state.lastName}
          onChange={(e) => this.handleChange(e, "lastName")} 
        />
        <OutlinedTextFields text="Data de Nascimento" type="date" value={this.state.dateOfBirth}
          onChange={(e) => this.handleChange(e, "dateOfBirth")} 
        />
        <OutlinedTextFields text="Tipo de Usuário" type="text" value={this.state.typeUser}
          onChange={(e) => this.handleChange(e, "typeUser")} 
        />
        <ButtonDefault text="Cadastrar" color="primary" onClick={this.createUser} />
      </div>
      )
    }
  }
  
  export default withFirebaseAuth({
    firebaseAppAuth,
  })(Register);
