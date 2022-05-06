import routerAdmin from "./routes.admin";
import routerClient from "./routes.client";
import {Error404} from "../pages"
import {BasicLayout} from "../layouts"
import {ClientLayout} from "../layouts"

const routes = [
    ...routerAdmin, 
    ...routerClient, 
    {
        layout: BasicLayout,
        Component: Error404
    }
];

export default routes;