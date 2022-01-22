import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import { Request, Response } from "express";
import * as bodyParser from "body-parser";
import * as cors from 'cors';
import { Routes } from "./routes/routes";

createConnection().then(async connection => {

    const app = express();
    app.use(bodyParser.json());

    //const allowedOrigins = ORIGINURLS;

    // const options: cors.CorsOptions = {
    // origin: allowedOrigins
    // };

    // app.use(cors(options));

    app.use(express.json());

    // register express routes from defined application routes
    Routes.forEach(routeArray => {
        routeArray.forEach(route => {
            (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
                const result = (new (route.controller as any))[route.action](req, res, next);
            });

        });

    });

    // start express server
    app.listen(3003);

    console.log("Express server has started on port 3003. Open http://localhost:3003 to see results");

}).catch(error => console.log(error));
