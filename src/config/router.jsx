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
