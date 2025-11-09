import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllProperty from "../pages/AllProperty";
import AddProperty from "../pages/AddProperty";
import MyRatings from "../pages/MyRatings";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            },
            {
                path: 'all-property',
                Component: AllProperty
            },
            {
                path: 'add-property',
                element: <AddProperty></AddProperty>
            },
            {
                path: 'my-ratings',
                element: <MyRatings></MyRatings>
            }
        ]
    }
])

export default router;