import appData from "../../api/appData";
import axios from 'axios'
import setAuthToken from "../../utils/setAuthToken";
import {LOAD_USER, LOAD_USER_FAIL, UNLOAD_USER} from "../action.types";


export const loadUser = token => async dispatch=>{
    setAuthToken(token);
  try {

      const res = await appData.get('/signIn');
     
      dispatch({
          type:LOAD_USER,
          payload:res.data
      })
  }catch (e) {
      dispatch({
          type: LOAD_USER_FAIL
      })
  }
};

export const unLoadUser = () =>dispatch=>{
  dispatch({
      type:UNLOAD_USER
  })
};