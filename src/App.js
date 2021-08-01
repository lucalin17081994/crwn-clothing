import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import {Switch, Route} from 'react-router-dom'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    };
  }
  unsubscrubeFromAuth=null;

  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({ currentUser: user });
      console.log('user2', this.state.currentUser );
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
    console.log('unsubbeed', this.currentUser)
  }

 

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/signin' component={SignInAndSignUpPage}></Route>
        </Switch>
      </div>
      
    );
  }
}

export default App;
