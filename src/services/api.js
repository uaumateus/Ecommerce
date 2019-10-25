import axios from 'axios';
import { getToken } from "./auth";

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {'Content-Type': 'application/json;charset=utf-8'}
});

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;