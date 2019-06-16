import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from 'components/pages/Login/Login';
import Register from 'components/pages/Register/Register';
import HomeReception from 'components/pages/Reception/HomeReception';
import AddRequest from 'components/pages/Reception/Add';
import FinalizaPedido from 'components/pages/Reception/FinalizaPedido';

const App = () => (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route path="/" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/salao" exact component={HomeReception}/>
          <Route path="/addRequest" exact component={AddRequest}/>
          <Route path="/cozinha" exact component={HomeReception}/>
          <Route path="/finalizaPedido" exact component={FinalizaPedido}/>
        </header>
      </div>
    </Router>
  );

export default App;

