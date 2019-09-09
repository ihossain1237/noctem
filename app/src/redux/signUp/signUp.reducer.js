import {SIGN_UP_FAIL, SIGN_UP_SUCCESS} from "../action.types";

const initialState = {
  isSignedUp:false,
  token:null
};


 const signUpReducer = (state=initialState,action)=>{
  const {type,payload} = action;

  switch (type) {
      case SIGN_UP_SUCCESS:
          return{
              ...state,
              isSignedUp: true,
              token: payload
          };
      case SIGN_UP_FAIL:
          return {
              ...state,
              isSignedUp: false,
              token: null
          };
      default:
          return state;
  }


};

 export default signUpReducer;