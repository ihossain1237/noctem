import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Homepage from "./pages/homepage/homepage";
import Navbar from "./components/navbar/navbar";

import Products from "./pages/Products/Products";
import Account from "./components/log-in/account";

function App() {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route path={'/'} exact component={Homepage}/>
                <Route path={'/products/:type/:item'} component={Products}/>
                <Route path={`/login`} component={Account}/>
            </Switch>
        </div>
    );
}

export default App;
