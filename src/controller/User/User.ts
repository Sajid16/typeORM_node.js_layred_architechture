import {NextFunction, Request, Response} from "express";
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
            return response.send({
                success: true,
                message: "it is working",
                data: data
            });        
            
        } catch (error) {
            return response.send({
                success: true,
                message: "it is not working",
                data: []
            }); 
        }
    }
}