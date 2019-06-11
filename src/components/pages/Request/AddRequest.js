// import React from 'react';
// import firebase from 'components/util/config/firebaseConfig';
// import ButtonDefault from 'components/ui/Buttons/Default';
// import ButtonAppBar from 'components/ui/TopBar/ButtonAppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';
// import AddShopping from 'components/ui/Buttons/AddShopping';
// import PillsTabs from 'components/ui/AppBar/Period';

// const firebaseAppAuth = firebase.auth();


// const menu = {
//   "breakfast": [
//       {item:"Café Americano", price: 5},
//       {item:"Café com Leite", price: 7},
//       {item:"Sanduíche de Presunto e Queijo", price: 10},
//       {item:"Suco de Fruta Natural", price: 7}
//   ],
//   "lunch": [
//       {item:"Hamburguer Simples Bovino", price:10 },
//       {item:"Hamburguer Simples de Frango", price:10 },
//       {item:"Hamburguer Simples Vegetariano", price:10 },
//       {item:"Hamburguer Duplo Bovino", price:15 },
//       {item:"Hamburguer Duplo Frango", price:15 },
//       {item:"Hamburguer Duplo Vegetariano", price:15 },
//       {item:"Queijo", price:1 },
//       {item:"Ovo", price:1 },
//       {item:"Batata Frita", price:5 },
//       {item:"Anéis de Cebola", price:5 },
//       {item:"Água 500ml", price:5 },
//       {item:"Água 750ml", price:7 },
//       {item:"Bebida gaseificada 500ml", price:7 },
//       {item:"Bebida gaseificada 750ml", price:10 }
//   ]
// }

// class AddRequest extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       buy: []
//     }
//   }

//   clickBuy = (option) => {
//     const itemIndex = this.state.buy.findIndex((product) => {
//       return product.item === option.item;
//     })
//     if (itemIndex < 0) {
//       const newItem = {
//         ...option,
//         amount: 1
//       };
//     this.setState({
//       buy: this.state.buy.concat(newItem)
//     });
//   } else {
//       let newBuy = this.state.buy;
//       newBuy[itemIndex].amount += 1;
//       this.setState({
//         buy: newBuy
//       })
//     }
//   }

//   clickDelete = (option) => {
//     const itemIndex = this.state.buy.findIndex((product) => {
//       return product.item === option.item;
//     });
//     let newBuy = this.state.buy;
//     newBuy[itemIndex].amount -= 1;

//     const amount = newBuy[itemIndex].amount;

//     if (amount > 0){
//       this.setState({
//         buy: newBuy
//       });
//     } else {
//       newBuy.splice(itemIndex, 1);
//       this.setState({
//         buy: newBuy
//       });
//     }  
//   }

//   clickLogout = () => {
//     firebaseAppAuth.signOut().then((response) => {
//       console.log(response)
//       this.props.push(`/`);
//     })
//   }

//   render() {
//     const valorTotal = this.state.buy.reduce((acc, cur) => {
//       return acc + (cur.amount * cur.price)
//     }, 0);
//     return (
//       <div>
//         <ButtonAppBar>
//           <Toolbar>
//             <Button id="sair" onClick={() => this.clickLogout}/>
//           </Toolbar>
//         </ButtonAppBar>
//         <PillsTabs />
//         {
//           menu.breakfast.map((product, index) => {
//             return <ButtonDefault text={product.item} key={index} color="primary" onClick={() => this.clickBuy(product)}/>
//           })
//         }
//         <hr></hr>
//         <h1> Itens Comprados </h1>
//         {
//           this.state.buy.map((product, i) => {
//             return <div key={i}>
//               <p key={i}>{product.item} / {product.price * product.amount} / {product.amount} </p>
//               <ButtonDefault text="Deletar" onClick={() => this.clickDelete(product)} />
//               </div>
//           })
//         }
//         <hr></hr>
//         <h1> Total </h1>
//         <p> Valor Total: {valorTotal}</p>
//         <AddShopping></AddShopping>
//       </div>
//     );
//   }
// }

// export default AddRequest;
