import {ADD_TO_CART, LOAD_CART, REMOVE_FROM_CART, UNLOAD_CART} from "../action.types";
import {cartOperation} from "./cart.utils";


const initialState = {
  items:[],
  email:null
};

const cartReducer = (state=initialState,action)=>{
  const {type,payload} = action;
  delete state.id;
  switch (type) {
    case ADD_TO_CART:
      return{
        ...state,
        items: cartOperation(ADD_TO_CART,state.items,payload)
      };
    case REMOVE_FROM_CART:
      return{
        ...state,
        items: cartOperation(REMOVE_FROM_CART,state.items,payload)
      };
    case LOAD_CART:
      return {
        ...state,
        items: payload.items,
        email: payload.email,
      };
    case UNLOAD_CART:
      return {
        ...state,
        email: null,
        items: []
      };
    default:
      return state;
  }

};

export default cartReducer;