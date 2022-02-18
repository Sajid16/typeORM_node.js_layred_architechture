import {Users} from "../../controller/User/User";

export const userRoutes = [
    {
    method: "get",
    route: "/api/users",
    controller: Users,
    action: "getUsers"
    },
    {
    method: "post",
    route: "/api/users",
    controller: Users,
    action: "createUser"
    },
    {
    method: "put",
    route: "/api/users",
    controller: Users,
    action: "updateUser"
    },
    {
    method: "delete",
    route: "/api/users/:id",
    controller: Users,
    action: "deleteUser"
    },
    {
    method: "get",
    route: "/api/users/:id",
    controller: Users,
    action: "getUserDetails"
    }
]
