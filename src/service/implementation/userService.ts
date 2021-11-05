import { IUser } from "../abstraction/IUser";
import { getRepository } from "typeorm";
import { User } from "../../entity/User";
import { userModel } from "../../models/User/userModel";

export class UserService implements IUser {

    private readonly userRepository: any;
    constructor() {
        this.userRepository = getRepository(User);
    }
    async createNewUser(inputData: userModel): Promise<object> {
        try {
            const insertUser = {
                firstName: inputData.firstName,
                lastName: inputData.lastName,
                age: inputData.age
            };
            let insertUserResponse = await this.userRepository.save(insertUser);
            return insertUserResponse;
        } catch (error) {
            throw new Error("Method not implemented.");
        }
    }

    async updateOneUser(inputData: userModel): Promise<object> {
        try {
            const updateUser = {
                firstName: inputData.firstName,
                lastName: inputData.lastName,
                age: inputData.age
            };
            let updateUserResponse = await this.userRepository.update(inputData.id, updateUser);
            return updateUserResponse.affected;
        } catch (error) {
            throw new Error("Method not implemented.");
        }
    }
    async deleteUser(id: number): Promise<object> {
        try {
            let deleteUserResponse = await this.userRepository.delete(id);
            return deleteUserResponse.affected;
        } catch (error) {
            throw new Error("Method not implemented.");
        }
    }


    async getAllUsers(): Promise<object> {
        try {
            let data = await this.userRepository.find();
            return data;
        } catch (error) {
            throw new Error("Method not implemented.");
        }
    }


    async getUserById(id: number): Promise<object> {
        try {
            let UserDetailResponse = await this.userRepository.findOne(id);
            return UserDetailResponse;
        } catch (error) {
            throw new Error("Method not implemented.");
        }
    }

}