import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth , createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { currentUserSelector } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';



import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/sign-up-sign-in/sign-up-sign-in.component';
import Header from './components/header/header.component';
import CheckOut from './pages/checkout/checkout.component';






class App extends React.Component {
  
  unsubscribeFromAuth = null;

  

  componentDidMount() {
    const { setCurrentUser } = this.props; 

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            
              id: snapShot.id,
              ...snapShot.data()
            
          })
        })
      }else {
        setCurrentUser(user)
      };
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
      <Header />
      <Switch >
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/sign-in' render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInSignUpPage />} />
        <Route exact path='/checkout' component={CheckOut} />
      </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
