import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import {Switch, Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route path='/shop/hats' >HatsPage</Route>
      </Switch>
    </div>
    
  );
}

export default App;
