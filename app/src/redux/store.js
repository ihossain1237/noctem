import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./root-reducer";
import reduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;