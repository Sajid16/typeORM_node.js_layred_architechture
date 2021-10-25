export interface IUser {
    getAllUsers(): Promise<object>;
    getUserById(): object;
}