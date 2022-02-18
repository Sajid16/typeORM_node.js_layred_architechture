import {NextFunction, Request, Response} from "express";
import { CommonCode } from "../../helpers/commonCode";
import { IUser } from "../../service/abstraction/IUser";
import { UserService } from "../../service/implementation/userService";
// import {ReturnResponse} from "../../response/response";
// import {errorLogHandler} from "../../errorLogHandler/errorLogHandler";

export class Users {

    private readonly _userService: IUser;
    constructor()
    {
        this._userService = new UserService();
    }

    async getUsers(request: Request, response: Response, next: NextFunction) { 
        try {

            let data = await this._userService.getAllUsers();
            if(data){
                return response.send({
                    success: true,
                    message: CommonCode.successMessage,
                    data: data
                });  
            } else{
                return response.send({
                    success: false,
                    message: CommonCode.failMessage
                });  
            }          
            
        } catch (error) {
            return response.send({
                success: true,
                message: CommonCode.errorMessage
            }); 
        }
    }

    async createUser(request: Request, response: Response, next: NextFunction) { 
        try {

            let data = await this._userService.createNewUser(request.body);
            if(data){
                return response.send({
                    success: true,
                    message: CommonCode.successMessage,
                    data: data
                });  
            } else{
                return response.send({
                    success: false,
                    message: CommonCode.failMessage
                });  
            }      
            
        } catch (error) {
            return response.send({
                success: true,
                message: CommonCode.errorMessage
            }); 
        }
    }


    async updateUser(request: Request, response: Response, next: NextFunction) { 
        try {

            let data = await this._userService.updateOneUser(request.body);
            if(data){
                return response.send({
                    success: true,
                    message: CommonCode.successMessage,
                    data: data
                });  
            } else{
                return response.send({
                    success: false,
                    message: CommonCode.failMessage
                });  
            }      
            
        } catch (error) {
            return response.send({
                success: true,
                message: CommonCode.errorMessage
            }); 
        }
    }


    async deleteUser(request: Request, response: Response, next: NextFunction) { 
        try {
            let userId = request.params.id;
            let data = await this._userService.deleteUser(Number(userId));
            if(data){
                return response.send({
                    success: true,
                    message: CommonCode.successMessage,
                    data: data
                });  
            } else{
                return response.send({
                    success: false,
                    message: CommonCode.failMessage
                });  
            }      
            
        } catch (error) {
            return response.send({
                success: true,
                message: CommonCode.errorMessage
            }); 
        }
    }

    async getUserDetails(request: Request, response: Response, next: NextFunction) { 
        try {
            let userId = request.params.id;
            let data = await this._userService.getUserById(Number(userId));
            if(data){
                return response.send({
                    success: true,
                    message: CommonCode.successMessage,
                    data: data
                });  
            } else{
                return response.send({
                    success: false,
                    message: CommonCode.failMessage
                });  
            }          
            
        } catch (error) {
            return response.send({
                success: true,
                message: CommonCode.errorMessage
            }); 
        }
    }
}