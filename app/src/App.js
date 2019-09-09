import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Homepage from "./pages/homepage/homepage";
import Navbar from "./components/navbar/navbar.component";
import SignInForm from './components/signInForm/signInForm.component';
import Products from "./pages/Products/Products";
import SignUpForm from './components/signUpFrom/signUpForm.component'
import Cart from "./components/cart/cart.component";

import {connect} from "react-redux";


class App extends Component {

    render() {
        console.log(localStorage)
        return (
            <div>
                <div>
                    <Navbar/>
                    <Switch>
                        <Route path={'/'} exact component={Homepage}/>
                        <Route path={'/products/:category/:type'} component={Products}/>
                        <Route path={`/signin`} component={SignInForm}/>
                        <Route path={`/signup`} component={SignUpForm}/>
                        <Route path={`/cart`} component={Cart}/>
                    </Switch>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state=>{
  return{
      cart:state.cart,
      signIn:state.signIn
  }
};
export default connect(mapStateToProps)(App);
