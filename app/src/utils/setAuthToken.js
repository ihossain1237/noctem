import appData from "../api/appData";
import axios from 'axios';
const setAuthToken = ({token}) =>{
    console.log(token)
  if (token){
      appData.defaults.headers.common['x-auth-token'] = token;
  } else {
      delete appData.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;