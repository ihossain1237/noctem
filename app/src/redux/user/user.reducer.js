import {LOAD_USER, LOAD_USER_FAIL, UNLOAD_USER} from "../action.types";


const initialState = {
  firstName:null,
  middleName:null,
  lastName:null,
  email:null
};

const userReducer = (state=initialState,action)=>{
  const {type,payload} = action;
  switch (type) {
      case LOAD_USER:{
          const {firstName,middleName,lastName,email} = payload;
          return{
              ...state,
              firstName,
              middleName,
              lastName,
              email
          }
      }
      case LOAD_USER_FAIL:
      case UNLOAD_USER:{
          return {
              ...state,
              firstName: null,
              middleName: null,
              lastName: null,
              email: null
          }
      }
      default:
          return state;
  }
};

export default userReducer;