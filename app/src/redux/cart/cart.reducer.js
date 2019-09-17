import {ADD_TO_CART, CLEAR_CART, DELETE_FROM_CART, LOAD_CART, REMOVE_FROM_CART, UNLOAD_CART} from "../action.types";
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
        items: cartOperation(ADD_TO_CART,state.items,payload,state.email)
      };
    case REMOVE_FROM_CART:
      return{
        ...state,
        items: cartOperation(REMOVE_FROM_CART,state.items,payload,state.email)
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        items: cartOperation(DELETE_FROM_CART,state.items,payload,state.email)
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
    case CLEAR_CART:
      return {
        ...state,
        items:cartOperation(CLEAR_CART,null,null,state.email)
      };
    default:
      return state;
  }

};

export default cartReducer;