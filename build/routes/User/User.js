"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
var User_1 = require("../../controller/User/User");
exports.userRoutes = [
    {
        method: "get",
        route: "/api/users",
        controller: User_1.Users,
        action: "getUsers"
    },
    {
        method: "post",
        route: "/api/users",
        controller: User_1.Users,
        action: "createUser"
    },
    {
        method: "put",
        route: "/api/users",
        controller: User_1.Users,
        action: "updateUser"
    },
    {
        method: "delete",
        route: "/api/users/:id",
        controller: User_1.Users,
        action: "deleteUser"
    },
    {
        method: "get",
        route: "/api/users/:id",
        controller: User_1.Users,
        action: "getUserDetails"
    }
];
//# sourceMappingURL=User.js.map