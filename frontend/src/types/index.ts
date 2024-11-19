interface User {
    id: number;
    username: string;
    email: string;
    password: string;
}

export type loginUser = Omit<User, 'id' | 'username'>;
export type registerUser = Omit<User, 'id'>;
