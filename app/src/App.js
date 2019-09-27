import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Homepage from "./pages/homepage/homepage";
import Navbar from "./components/navbar/navbar.component";
import SignInForm from './components/signInForm/signInForm.component';
import Products from "./pages/Products/Products";
import SignUpForm from './components/signUpFrom/signUpForm.component'
import Cart from "./components/cart/cart.component";
import DataInputForm from "./components/dataInputForm/dataInputForm.component";
import DataInput from "./components/dataInput/dataInput";



class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar/>
                    <Switch>
                        <Route path={'/'} exact component={Homepage}/>
                        <Route path={'/products/:category/:type'} component={Products}/>
                        <Route path={`/signIn`} component={SignInForm}/>
                        <Route path={`/signUp`} component={SignUpForm}/>
                        <Route path={`/cart`} component={Cart}/>
                        <Route path={`/dev`} exact component={DataInput}/>
                    </Switch>
                </div>
            </div>
        );
    }
}
export default App;
