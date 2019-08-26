import {combineReducers} from "redux";
import shopReducer from "./Shop/shop-reducers";
import authReducer from './auth/auth-reducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers(
    {
        shop: shopReducer,
        auth: authReducer,
        form: formReducer
    }
);

export default rootReducer;