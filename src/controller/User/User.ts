import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../../entity/User";
// import {ReturnResponse} from "../../response/response";
// import {errorLogHandler} from "../../errorLogHandler/errorLogHandler";

export class Users {

    constructor()
    {
        
    }

    private userRepository = getRepository(User);
    // private Response = new ReturnResponse();

    async getUsers(request: Request, response: Response, next: NextFunction) { 
        try {

            let data = await this.userRepository.find();
            return response.send({
                success: true,
                message: "it is working",
                data: data
            });
                
            
        } catch (error) {
            //errorLogHandler(`UPAZILLA-CONFIGURATION: ERROR FOUND IN GETTING UPAZILLA LIST`);
            // return await this.Response.InternalServerError(response, false, 'Error found in getting district list');
            return response.send({
                success: true,
                message: "it is not working",
                data: []
            }); 
        }
    }
}