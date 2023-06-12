import axios from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

export const API_URL_USER = 'http://localhost:8080/apiUser';
export const API_URL_ROOM = 'http://localhost:8080/apiRoom';

const $api = axios.create({
    baseURL: API_URL_USER,
    withCredentials: true,
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('tokenJabaChat')}`;
    return config;
})

$api.interceptors.response.use((config) => {
    return config;
}, async (err) => {
    const originalRequest = err.config;
    if (err.response.status == 401 && err.config && !err.config._isRetry) {
        originalRequest._isRetry = true;
        try{
            const response = await axios.post<AuthResponse>(`${API_URL_USER}/refresh`, { withCredentials: true });
            localStorage.setItem('tokenJabaChat', response.data.accessToken);
            return $api.request(originalRequest);
        } catch(err) {
            console.log(err);
        }
    }
})

export default $api;