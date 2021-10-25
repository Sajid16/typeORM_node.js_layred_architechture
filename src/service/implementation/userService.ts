import { IUser } from "../abstraction/IUser";
import {getRepository} from "typeorm";
import { User } from "../../entity/User";

export class UserService implements IUser {

    private readonly userRepository: any;
    constructor(){
        this.userRepository = getRepository(User);
    }


    async getAllUsers(): Promise<object> {
        try {
            let data = await this.userRepository.find();
            return data;
        } catch (error) {
            throw new Error("Method not implemented.");   
        }
    }


    getUserById(): object {
        throw new Error("Method not implemented.");
    }
    
}