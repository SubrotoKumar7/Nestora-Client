import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllProperty from "../pages/AllProperty";
import AddProperty from "../pages/AddProperty";
import MyRatings from "../pages/MyRatings";
import Details from "../pages/Details";

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
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
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
                loader: ({params})=> fetch(`/properties.json/${params.id}`),
                Component: Details
            }
        ]
    }
])

export default router;