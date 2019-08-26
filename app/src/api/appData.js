import axios from 'axios';

const appData = axios.create({
    baseURL: 'http://localhost:3001'
});

export default appData;