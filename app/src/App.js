import React, {Component} from 'react';
import {Router,Route, Switch} from 'react-router-dom';
import './App.scss';
import Homepage from "./pages/homepage/homepage";
import Navbar from "./components/navbar/navbar.component";
import SignInForm from './components/signInForm/signInForm.component';
import Products from "./pages/Products/Products";
import SignUpForm from './components/signUpFrom/signUpForm.component'
import Cart from "./components/cart/cart.component";
import history from "./history";

    history.listen((location,action)=>{
        window.scrollTo(0,0);
    });

    const App =()=> {
        return (
            <div>
                <Router history={history}>
                    <Navbar/>
                    <Switch>
                        <Route path={'/'} exact component={Homepage}/>
                        <Route path={'/products/:category/:type'} component={Products}/>
                        <Route path={`/signIn`} component={SignInForm}/>
                        <Route path={`/signUp`} component={SignUpForm}/>
                        <Route path={`/cart`} component={Cart}/>
                    </Switch>
                </Router>
            </div>
        );
    };

export default App;
