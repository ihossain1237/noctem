import axios from 'axios';
const appData =axios.create({
    baseURL:'/api/',

});

export default appData;