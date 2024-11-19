import axios from "axios";
import { loginUser, registerUser } from "../types";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
    baseURL: baseURL,
});


export const login = async (user: loginUser) => {
    try {
        const response = await api.post("/auth/login", user);
        return response;
    } catch (error: any) {
        return error.toString();
    }
}

export const register = async (user: registerUser) => {
    console.log(import.meta.env.VITE_API_BASE_URL);
    try {
        const response = await api.post("/auth/register", user);
        console.log(response);
        return response;
    } catch (error: any) {
        return error.response.data;
    }
}



