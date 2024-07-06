<<<<<<< HEAD
import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";
import Signup from "../pages/Authentication/Signin";
import NoPage from "../pages/NoPage/NoPage";
import CertificateComponent from "../pages/Certificate";
import CertificateList from "../pages/CertificateList";
import ProtectedRoute from "./ProtectedRoutes";


const router = createBrowserRouter([
    {
        path: "/",
        element: (
        <ProtectedRoute>
            <Home />
        </ProtectedRoute>
    ),
    },
    {
        path: "*",
        element: <NoPage />,
    },
   
    {
        path: "/Signup",
        element: <Signup />,
    },
    {
        path: "/certificate/:id",
        element: (
        <ProtectedRoute>
            <CertificateComponent />
        </ProtectedRoute>)
    },
    {
        path: "/myCertificate/:id",
        element: <CertificateList/>
    }


]);




const Router = () => {
    return (
            <RouterProvider router={router} />
    )
};

export default Router;
=======
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
>>>>>>> 8f30ee90b351a4d5d388d83cef02cc77953d738d
