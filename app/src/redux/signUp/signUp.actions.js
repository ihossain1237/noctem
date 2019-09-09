import appData from "../../api/appData";
import {SIGN_UP_FAIL, SIGN_UP_SUCCESS} from "../action.types";
import {signIn} from "../signIn/signIn.actions";

export const signUp = ({firstName,middleName,lastName,email,password})=>async dispatch=>{
    const body = JSON.stringify({firstName,middleName,lastName,email,password});
    const config = {
        headers:{
            "Content-Type":"application/json"
        }
    };
    try {
        const res = await appData.post('/signUp',body,config);
        dispatch({
            type:SIGN_UP_SUCCESS,
            payload:res.data
        });
        dispatch(signIn(email,password));
    }catch (error) {
        dispatch({
            type:SIGN_UP_FAIL,
            payload:error.response.data
        })
    }



};