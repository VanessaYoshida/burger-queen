import React from 'react';
import Login from '../pages/Login/Login';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomeHall from '../pages/Home/Hall';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route path="/" exact component={Login} />
          <Route path="/HomeHall" exact component={HomeHall} />
        </header>
      </div>
    </Router>
  );
}

export default App;

