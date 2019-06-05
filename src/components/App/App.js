import React from 'react';
import Login from 'components/pages/Login/Login';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import Register from 'components/pages/Register/Register'
import HomeReception from 'components/pages/Home/Reception';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route path="/" exact component={Login}/>
          {/* <Route path="/Register" exact component={Register} /> */}
          <Route path="/HomeReception" exact component={HomeReception} />
        </header>
      </div>
    </Router>
  );
}

export default App;

