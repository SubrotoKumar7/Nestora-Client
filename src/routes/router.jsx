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
import Loader from "../components/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          fetch("https://nestora-server-api.vercel.app/latest-properties"),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "all-property",
        loader: () => fetch("https://nestora-server-api.vercel.app/properties"),
        hydrateFallbackElement: <Loader></Loader>,
        Component: AllProperty,
      },
      {
        path: "add-property",
        element: (
          <Private>
            <AddProperty></AddProperty>
          </Private>
        ),
      },
      {
        path: "my-ratings",
        element: (
          <Private>
            <MyRatings></MyRatings>
          </Private>
        ),
      },
      {
        path: "details/:id",
        loader: ({ params }) =>
          fetch(
            `https://nestora-server-api.vercel.app/properties/${params.id}`
          ),
        hydrateFallbackElement: <Loader></Loader>,
        element: <Details></Details>
      },
      {
        path: "my-property",
        element: (
          <Private>
            <MyProperty></MyProperty>
          </Private>
        ),
      },
      {
        path: "update/:id",
        element: (
          <Private>
            <UpdateProperty></UpdateProperty>
          </Private>
        ),
      },
      {
        path: "*",
        Component: NotFound,
      }
    ],
  },
  {
    path: "login",
    Component: Login,
  },
  {
    path: "register",
    Component: Register,
  },
]);

export default router;
