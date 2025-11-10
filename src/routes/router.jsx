import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllProperty from "../pages/AllProperty";
import AddProperty from "../pages/AddProperty";
import MyRatings from "../pages/MyRatings";
import Details from "../pages/Details";
import NotFound from "../pages/NotFound";
import MyProperty from "../pages/MyProperty";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
                loader: ()=> fetch('/properties.json')
            },
            {
                path: 'all-property',
                loader: () => fetch('/properties.json'),
                Component: AllProperty
            },
            {
                path: 'add-property',
                element: <AddProperty></AddProperty>
            },
            {
                path: 'my-ratings',
                element: <MyRatings></MyRatings>
            },
            {
                path: 'details/:id',
                loader: () => fetch('/properties.json'),
                Component: Details
            },
            {
                path: 'my-property',
                Component: MyProperty
            }
        ]
    },
    {
        path: '*',
        Component: NotFound
    },
    {
        path: 'login',
        Component: Login
    },
    {
        path: 'register',
        Component: Register
    }

])

export default router;