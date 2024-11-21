import axios from "axios";
import { loginUser, registerUser, AuthResponse, ResponseBody } from "../types";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
    baseURL: baseURL,
});


api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['auth-token'] = token;
    }
    return config;
});

export const authApi = {
    login: async (credentials: loginUser): Promise<AuthResponse> => {
        const { data } = await api.post('/auth/login', credentials);

        const token = data.details.token;

        localStorage.setItem('token', token);
        return data;
    },

    register: async (credentials: registerUser): Promise<ResponseBody> => {
        const { data } = await api.post('/auth/register', credentials);
        return data;
    },

    logout: () => {
        localStorage.removeItem('token');
    }
};
