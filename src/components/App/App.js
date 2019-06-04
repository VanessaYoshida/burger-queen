import React from 'react';
import Login from 'components/pages/Login/Login';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomeReception from 'components/pages/Home/Reception';
import OutlinedTextFields from 'components/ui/Form/input'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route path="/" exact component={Login} />
          <Route path="/HomeReception" exact component={HomeReception} />
          <Route path="/OutlinedTextFields" exact component={OutlinedTextFields} />
        </header>
      </div>
    </Router>
  );
}

export default App;

