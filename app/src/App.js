import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Homepage from "./pages/homepage/homepage";
import Navbar from "./components/navbar/navbar.component";
import SignInForm from './components/signInForm/signInForm.component';
import Products from "./pages/Products/Products";
import SignUpForm from './components/signUpFrom/signUpForm.component'
import Cart from "./components/cart/cart.component";



class App extends Component {
    render() {
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
export default App;
