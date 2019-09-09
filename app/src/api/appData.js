import axios from 'axios';

const appData =axios.create({
    baseURL:'http://localhost:5000/api',

});

export default appData;