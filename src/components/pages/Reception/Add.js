import React, {Component, Fragment} from 'react';
import firebase from 'components/util/config/firebaseConfig';
import ButtonDefault from 'components/ui/Buttons/Default';
import ButtonAddRequest from 'components/ui/Buttons/Add';
import ButtonAppBar from 'components/ui/TopBar/ButtonAppBar';
import AddShopping from 'components/ui/Buttons/AddShopping';
import Input from 'components/ui/Form/input';
import './reception.css';

const firebaseAppAuth = firebase.auth();
const database = firebase.firestore();

const menu = {
  "breakfast": [
      {item:"Café Americano", price: 5},
      {item:"Café com Leite", price: 7},
      {item:"Sanduíche de Presunto e Queijo", price: 10},
      {item:"Suco de Fruta Natural", price: 7}
  ],
  "lunch": [
      {item:"Hamburguer Simples Bovino", price:10 },
      {item:"Hamburguer Simples de Frango", price:10 },
      {item:"Hamburguer Simples Vegetariano", price:10 },
      {item:"Hamburguer Duplo Bovino", price:15 },
      {item:"Hamburguer Duplo Frango", price:15 },
      {item:"Hamburguer Duplo Vegetariano", price:15 },
      {item:"Queijo", price:1 },
      {item:"Ovo", price:1 },
      {item:"Batata Frita", price:5 },
      {item:"Anéis de Cebola", price:5 },
      {item:"Água 500ml", price:5 },
      {item:"Água 750ml", price:7 },
      {item:"Bebida gaseificada 500ml", price:7 },
      {item:"Bebida gaseificada 750ml", price:10 }
  ]
}

class AddRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameClient: "",
      idEmployee: "",
      category: "breakfast",
      buy: []
    }
  }


  handleChangeSelect = (event, element) => {
    const newState = this.state;
    newState[element] = event.target.value
    this.setState(newState);
  }

  clickAddItem = (option) => {
    const itemIndex = this.state.buy.findIndex((product) => {
      return product.item === option.item;
    })
    if (itemIndex < 0) {
      const newItem = {
        ...option,
        amount: 1
      };
    this.setState({
      buy: this.state.buy.concat(newItem)
    });
  } else {
      let newBuy = this.state.buy;
      newBuy[itemIndex].amount += 1;
      this.setState({
        buy: newBuy
      })
    }
  }

  clickDelete = (option) => {
    const itemIndex = this.state.buy.findIndex((product) => {
      return product.item === option.item;
    });
    let newBuy = this.state.buy;
    newBuy[itemIndex].amount -= 1;

    const amount = newBuy[itemIndex].amount;

    if (amount > 0){
      this.setState({
        buy: newBuy
      });
    } else {
      newBuy.splice(itemIndex, 1);
      this.setState({
        buy: newBuy
      });
    }  
  }

  clickBuy = () => {
    console.log(database)
    const {nameClient, idEmployee, category, buy} = this.state;
    const { history: { push } } = this.props;
    database.collection("orders").doc("idEmployee").set({
      nameClient,
      idEmployee,
      category,
      buy
    })
    .then((response) => {
      console.log(response)
    })
  }

  clickLogout = () => {
    firebaseAppAuth.signOut().then(() => {
      this.props.history.push(`/`);
    })
  }

  render() {
    console.log(this.state.buy);
    console.log(this.state.category);
    const valorTotal = this.state.buy.reduce((acc, cur) => {
      return acc + (cur.amount * cur.price)
    }, 0);
    const categorySelect = (this.state.category === "lunch") ? "lunch" : "breakfast";
    return (
      <Fragment>
        <ButtonAppBar clickLogout={this.clickLogout} />
        <Input text="Nome do Cliente" type="text" value={this.state.nameClient}
            onChange={(e) => this.handleChange(e, "nameClient")} 
            /> 
        <select className="categoryMenu" value={this.state.category} onChange={(e) => this.handleChangeSelect(e, "category")} >
          <option value="breakfast" >Café da Manhã</option>
          <option value="lunch">Almoço ou Janta</option>
        </select>    
        {
          menu[categorySelect].map((product, index) => {
            return <div key={index}>
              
            <p>Produto: {product.item}</p>
            <ButtonAddRequest text="" key={index} color="primary" onClick={() => this.clickAddItem(product)}/>
            <ButtonDefault text="Deletar" color="secondary" onClick={() => this.clickDelete(product)} />
            </div>
          })
        }
        <hr></hr>
        <h1> Itens Comprados </h1>
        {
          this.state.buy.map((product, i) => {
            return <div key={i}>
              <p>{product.item} / {product.price * product.amount} / {product.amount} </p>
              <ButtonDefault text="Deletar" onClick={() => this.clickDelete(product)} />
              </div>
          })
        }
        <hr></hr>
        <h1> Total </h1>
        <p> Valor Total: {valorTotal}</p>
        <AddShopping onClick={() => this.clickBuy()}/>
      </Fragment>
    );
  }
}

export default AddRequest;
