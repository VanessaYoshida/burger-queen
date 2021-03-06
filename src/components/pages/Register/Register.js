import React, {Component} from 'react';
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

class Register extends Component {
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

  clickBack = () => {
    this.props.history.push(`/`);
  }
  
  render() {
    if (this.props.error) {
      if(this.props.error === "The email address is already in use by another account."){
        alert("O seu e-mail já está cadastrado.")
      } else {
        alert(this.props.error);
      }
    }
    const { email, password, displayName, lastName, dateOfBirth, typeUser } = this.state;
    return (
      <>
      <ButtonAppBar btnText="Voltar" click={this.clickBack} />
      <div className="PageRegister"> 
        <h3>Cadastre-se</h3>
        <Grid container spacing={3}>  
          <Grid item xs={12}>
            <Input text="E-mail" type="text" value={email}
            onChange={(e) => this.handleChange(e, "email")} 
            />
            <Input text="password" type="password" value={password}
            onChange={(e) => this.handleChange(e, "password")}
            />
            <Input text="Nome" type="text" value={displayName}
            onChange={(e) => this.handleChange(e, "displayName")} 
            />
            <Input text="Sobrenome" type="text" value={lastName}
            onChange={(e) => this.handleChange(e, "lastName")} 
            />
            <InputBirthday text="Data de Nascimento" type="date" value={dateOfBirth}
            onChange={(e) => this.handleChange(e, "dateOfBirth")} 
            />
            <RadioButton value={typeUser} onChange={(e) => this.handleChange(e, "typeUser")}
            />
            <ButtonDefault text="Cadastrar" color="primary" onClick={this.createUser} />  
          </Grid>
        </Grid>
      </div> 
      </>
      )
    }
  }
  
  export default withFirebaseAuth({
    firebaseAppAuth,
  })(Register);
