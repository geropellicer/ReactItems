import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './components/nav';
import Home from './views/home';
import Shop from './views/shop';
import About from './views/about';
import Versus from './views/versus';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>  
          <Route path="/shop" exact component={Shop}/>  
          <Route path="/about" exact component={About}/>  
          <Route path="/versus" exact component={Versus}/>  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
