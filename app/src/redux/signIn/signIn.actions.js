import appData from "../../api/appData";
import {
    SIGN_IN_SUCCESS,
    SIGN_IN_FAIL, SIGN_OUT
} from "../action.types";
import {loadUser, unLoadUser} from "../user/user.action";
import {loadCart, unLoadCart} from "../cart/cart.actions";
export const signIn = (email,password)=>async dispatch=>{

    const body = JSON.stringify({email,password});

    const config ={
        headers:{
            "Content-Type":"application/json"
        }
    };

    try{
      const res = await appData.post('/signIn',body,config);
      dispatch({
          type:SIGN_IN_SUCCESS,
          payload:email
      });
      dispatch(loadUser(res.data));
      dispatch(loadCart(email));
    }catch (error) {

        dispatch({
            type:SIGN_IN_FAIL,
            payload: error.response.data
        })
    }


};

export const signOut = () =>async dispatch=>{

    dispatch({
        type:SIGN_OUT
    });
    dispatch(unLoadUser());
    dispatch(unLoadCart());

};
