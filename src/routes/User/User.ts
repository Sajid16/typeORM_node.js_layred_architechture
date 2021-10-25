import {Users} from "../../controller/User/User";

export const userRoutes = [
    {
    method: "get",
    route: "/api/users",
    controller: Users,
    action: "getUsers"
    }
]
