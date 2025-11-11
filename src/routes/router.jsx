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
import Private from "../private/Private";
import UpdateProperty from "../pages/UpdateProperty";

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
                element: <Private><AddProperty></AddProperty></Private>
            },
            {
                path: 'my-ratings',
                element: <Private><MyRatings></MyRatings></Private>
            },
            {
                path: 'details/:id',
                loader: () => fetch('/properties.json'),
                element: <Private><Details></Details></Private>
            },
            {
                path: 'my-property',
                element: <Private><MyProperty></MyProperty></Private>
            },
            {
                path: 'update/:id',
                element: <Private><UpdateProperty></UpdateProperty></Private>
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