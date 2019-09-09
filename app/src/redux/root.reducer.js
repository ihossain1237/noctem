import {combineReducers} from "redux";
import shopReducer from "./Shop/shop.reducers";
import {reducer as formReducer} from 'redux-form';
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import signInReducer from "./signIn/signIn.reducer";
import signUpReducer from './signUp/signUp.reducer';
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
const persistConfig = {
  key:'root',
  storage,
  whitelist:['cart','signIn','user']
};
const rootReducer = combineReducers(
    {
        shop: shopReducer,
        form: formReducer,
        signIn:signInReducer,
        signUp:signUpReducer,
        user:userReducer,
        cart:cartReducer


    }
);

export default persistReducer(persistConfig,rootReducer);