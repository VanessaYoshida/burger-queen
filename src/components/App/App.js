import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from 'components/pages/Login/Login';
import Register from 'components/pages/Register/Register';
import HomeReception from 'components/pages/Reception/HomeReception';
import HomeKitchen from 'components/pages/Kitchen/HomeKitchen';
import Cart from 'components/pages/Reception/Cart';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Route path="/" exact component={Login}/>
        <Route path="/cadastro" exact component={Register}/>
        <Route path="/salao" exact component={HomeReception}/>
        <Route path="/cozinha" exact component={HomeKitchen}/>
        <Route path="/carrinho" exact component={Cart}/>
      </header>
    </div>
  </Router>
);

export default App;

