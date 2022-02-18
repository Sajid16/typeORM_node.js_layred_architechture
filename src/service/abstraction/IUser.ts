import { userModel } from "../../models/User/userModel";

export interface IUser {
    getAllUsers(): Promise<object>;
    getUserById(id: number): Promise<object>;
    createNewUser(inputData: userModel): Promise<object>;
    updateOneUser(inputData: userModel): Promise<object>;
    deleteUser(id: number): Promise<object>;
}