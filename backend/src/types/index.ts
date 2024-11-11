export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

export interface Alert {
    id: number;
    userId: number;
    assertType: string;
    symbol: string;
    condition : string;
}

export interface AlertLog {
    id: number;
    alertId: number;
    message: string;    
}

export enum condition {
    GREATER_THAN = 'GREATER_THAN',
    LESS_THAN = 'LESS_THAN',
    PERCENTAGE = 'PERCENTAGE'
}

export type CreateAlert = Omit<Alert, 'id'>;
export type CreateAlertLog = Omit<AlertLog, 'id'>;
export type CreateUser = Omit<User, 'id'>;
export type UpdateUser = Partial<User>;

export interface ResponseBody {
    code: number, 
    message: string,
    details: any
}
