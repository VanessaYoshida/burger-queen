import React, {Component, Fragment} from 'react';
import firebase from 'components/util/config/firebaseConfig';
import CartItem from '../CartItem/CartItem';
import AddShopping from 'components/ui/Buttons/AddShopping';
import Input from 'components/ui/Form/input';

const database = firebase.firestore();

const menu = {
  "breakfast": [
    {id:0, item:"Café Americano", price: 5},
    {id:1, item:"Café com Leite", price: 7},
    {id:2, item:"Sanduíche de Presunto e Queijo", price: 10},
    {id:3, item:"Suco de Fruta Natural", price: 7}
  ],
  "lunch": [
    {id:4, item:"Hamburguer Simples Bovino", price:10 },
    {id:5, item:"Hamburguer Simples de Frango", price:10 },
    {id:6, item:"Hamburguer Simples Vegetariano", price:10 },
    {id:7, item:"Hamburguer Duplo Bovino", price:15 },
    {id:8, item:"Hamburguer Duplo Frango", price:15 },
    {id:9, item:"Hamburguer Duplo Vegetariano", price:15 },
    {id:10, item:"Queijo", price:1 },
    {id:11, item:"Ovo", price:1 },
    {id:12, item:"Batata Frita", price:5 },
    {id:13, item:"Anéis de Cebola", price:5 },
    {id:14, item:"Água 500ml", price:5 },
    {id:15, item:"Água 750ml", price:7 },
    {id:16, item:"Bebida gaseificada 500ml", price:7 },
    {id:17, item:"Bebida gaseificada 750ml", price:10 }
  ]
}

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderNumber: 1,
      nameClient: "",
      nameEmployee: localStorage.getItem('userName'),
      category: "breakfast",
      date: new Date(),
      status: "aberto",
      cartItens:[],
      itensTotal: [],
      totalFinal: 0
    }
  }

  handleChange = (event, element) => {
    const newState = this.state;
    newState[element] = event.target.value
    this.setState(newState);
  }

  updateTotal = (total, id) => {
    let itensTotal = this.state.itensTotal;
    itensTotal[id] = total;
    this.setState({
      itensTotal: itensTotal,
      totalFinal: itensTotal.reduce((acc, item) => acc + item)
    })
  }

  changeCategory = (e) => {
    this.handleChange(e, "category");
    this.setState({
      itensTotal: [],
      totalFinal: 0
    })
  }

  dataItemCart = (data) => {
    let cartItens = this.state.cartItens;
    cartItens[data.id] = data;
    this.setState({
      cartItens: cartItens
    })
  }

  clickBuy = () => {
    const {nameClient, category, cartItens, totalFinal} = this.state;
    database.collection("orders").orderBy("orderNumber", "desc").limit(1).get()
    .then(function(querySnapshot) {
      let newOrderNumber = 0;
      if (querySnapshot.docs.length > 0) {
        querySnapshot.forEach(function(doc) {
          newOrderNumber = doc.data().orderNumber;
        });
      }
      let itens = cartItens.filter((item) => item !== "null" && item.amount > 0);
      database.collection("orders").add({
        orderNumber: parseInt(newOrderNumber) + 1,
        nameClient,
        category,
        itens,
        totalFinal
      })
    })
  }

  render() {
    const categorySelect = (this.state.category === "lunch") ? "lunch" : "breakfast";
    return (
      <Fragment>
        <Input text="Nome do Cliente" type="text" value={this.state.nameClient}
        onChange={(e) => this.handleChange(e, "nameClient")} required 
        />  
        <select className="categoryMenu" value={this.state.category} onChange={this.changeCategory}>
          <option value="breakfast">Café da Manhã</option>
          <option value="lunch">Almoço ou Janta</option>
        </select>     
        <table border="1">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Valor</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {
              menu[categorySelect].map((product, i) => {
                return <CartItem key={product.id} id={i} product={product.item} amount="0" value={product.price} getTotal={this.updateTotal} getData={this.dataItemCart}></CartItem>
              })
            }  
            <tr>
              <td colSpan="4">
                Total = {this.state.totalFinal}
              </td>
            </tr>
          </tbody>
        </table>
        <AddShopping onClick={this.clickBuy}/>
      </Fragment>
    )
  }
}  

export default ShoppingCart;