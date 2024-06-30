import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";
import Signin from "../pages/Authentication/Signin";
import Signup from "../pages/Authentication/Signup";
import NoPage from "../pages/NoPage/NoPage";
import MyState from "../context/myState";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "*",
        element: <NoPage />,
    },
    {
        path: "/signin",
        element: <Signin />,
    },
    {
        path: "/Signup",
        element: <Signup />,
    },


]);




const Router = () => {
    return (
        <MyState>
            <RouterProvider router={router} />
        </MyState>
    )
};

export default Router;
