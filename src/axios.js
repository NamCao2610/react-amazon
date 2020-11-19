import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-amazo-dd46f.cloudfunctions.net/api'
    //'http://localhost:5001/amazo-dd46f/us-central1/api'
})

export default instance;
