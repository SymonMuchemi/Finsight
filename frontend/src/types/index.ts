interface User {
    id: number;
    username: string;
    email: string;
    password: string;
}

export type loginUser = Omit<User, 'id' | 'username'>;
export type registerUser = Omit<User, 'id'>;

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface AuthResponse {
    message: string;
    details: { token: string; };
}

export interface ResponseBody {
    message: string;
    details: any;
}
