import {ADD_TO_CART, CLEAR_CART, DELETE_FROM_CART, LOAD_CART, REMOVE_FROM_CART, UNLOAD_CART} from "../action.types";
import appData from "../../api/appData";

export const addToCart = (item) => dispatch =>{
  dispatch({
      type:ADD_TO_CART,
      payload:item
  })
};

export const removeFromCart = (item) => dispatch=>{
  dispatch({
      type: REMOVE_FROM_CART,
      payload: item
  })
};

export const deleteFromCart = (item)=>dispatch=>{
  dispatch({
      type:DELETE_FROM_CART,
      payload:item
  })
};

export const unLoadCart = ()=>dispatch=>{
  dispatch({
      type:UNLOAD_CART
  })
};

export const clearCart= () => dispatch =>{
    console.log('clear cart')
  dispatch({
      type:CLEAR_CART
  })
};

export const loadCart = (email) =>async dispatch=>{
    const body = JSON.stringify({email});
    console.log(body);
    const config ={
        headers:{
            "Content-Type":"application/json"
        }
    };
    const cart = await appData.post('/cart',body,config);
    console.log(cart.data);
    dispatch({
        type:LOAD_CART,
        payload:cart.data.cart
    })
};