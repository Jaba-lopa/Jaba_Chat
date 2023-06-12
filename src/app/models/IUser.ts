export interface IUser {
    username: string;
    user_id: string;
}

export interface IUsers extends Array<IUser>{};