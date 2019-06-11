import React from 'react';
import Login from 'components/pages/Login/Login';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Register from 'components/pages/Register/Register';
import HomeReception from 'components/pages/Home/Reception';
import RequestBreakfast from 'components/pages/Request/Breakfast';
import RequestLunch from 'components/pages/Request/Lunch';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route path="/" exact component={Login}/>
          <Route path="/Register" exact component={Register}/>
          <Route path="/salao" exact component={HomeReception}/>
          <Route path="/breakfast" exact component={RequestBreakfast}/>
          <Route path="/lunch" exact component={RequestLunch}/>
          <Route path="/cozinha" exact component={HomeReception}/>
        </header>
      </div>
    </Router>
  );
}

export default App;

