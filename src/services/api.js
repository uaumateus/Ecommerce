import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:7889/api',
    headers: {'Content-Type': 'application/json;charset=utf-8'}
});

export default api;