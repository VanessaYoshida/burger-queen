import React from 'react';
import firebase from 'components/util/config/firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';
import ButtonDefault from 'components/ui/Buttons/Default';
import Input from 'components/ui/Form/input';
import InputBirthday from 'components/ui/Form/inputBirthday';
import RadioButton from 'components/ui/Form/radioButton';
import ButtonAppBar from 'components/ui/TopBar/ButtonAppBar';
import Grid from '@material-ui/core/Grid';
import 'components/pages/Register/register.css';

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
      typeUser: "salao"
    };
  }
  
  handleChange = (event, element) => {
    const newState = this.state;
    newState[element] = event.target.value
    this.setState(newState);
  }
  
  createUser = () => {
    const { email, password, displayName, lastName, dateOfBirth, typeUser} = this.state;
    const { history: { push } } = this.props;
    this.props.createUserWithEmailAndPassword(email, password)
    .then((response) => { 
      if (response) {
        database.doc(`users/${response.user.uid}`)
        .set({
          email,
          displayName,
          lastName,
          dateOfBirth,
          typeUser
        })
        .then(() => {
          alert("Cadastrado com Sucesso!");
          push(`/${typeUser}`);
        });
      }
    })
  }

  clickLogout = () => {
    firebaseAppAuth.signOut().then(() => {
      this.props.history.push(`/`);
    })
  }
  
  render() {
    if (this.props.error) {
      if(this.props.error === "The email address is already in use by another account."){
        alert("O seu e-mail já está cadastrado.")
      } else {
        alert(this.props.error);
      }
    }
    return (
      <div>
      <ButtonAppBar clickLogout={this.clickLogout} />
      <div class="PageRegister"> 
        <h3>Cadastre-se</h3>
        <Grid container spacing={3}>  
          <Grid item xs={12}>
          <Input text="E-mail" type="text" value={this.state.email}
          onChange={(e) => this.handleChange(e, "email")} 
          />
          <Input text="password" type="password" value={this.state.password}
          onChange={(e) => this.handleChange(e, "password")}
          />
          <Input text="Nome" type="text" value={this.state.displayName}
          onChange={(e) => this.handleChange(e, "displayName")} 
          />
          <Input text="Sobrenome" type="text" value={this.state.lastName}
          onChange={(e) => this.handleChange(e, "lastName")} 
          />
          <InputBirthday text="Data de Nascimento" type="date" value={this.state.dateOfBirth}
          onChange={(e) => this.handleChange(e, "dateOfBirth")} 
          />
          <RadioButton value={this.state.typeUser} onChange={(e) => this.handleChange(e, "typeUser")}
          />
          <ButtonDefault text="Cadastrar" color="primary" onClick={this.createUser} />  
          </Grid>
        </Grid>
      </div> 
      </div>
      )
    }
  }
  
  export default withFirebaseAuth({
    firebaseAppAuth,
  })(Register);
