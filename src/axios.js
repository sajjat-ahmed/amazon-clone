import axios from 'axios';

const instance = axios.create({
    baseURL: '...' // THE API (cloud functon) URL
})

export default instance;