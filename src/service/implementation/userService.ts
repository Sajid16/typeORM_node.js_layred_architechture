import { IUser } from "../abstraction/IUser";

export class User implements IUser {
    getAllUsers(): object {
        throw new Error("Method not implemented.");
    }
    
}