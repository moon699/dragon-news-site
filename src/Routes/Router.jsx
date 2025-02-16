import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import NewsLayout from "../Layout/NewsLayout";
import Auth from "../Layout/Auth";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../Layout/AuthLayout";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
    path: "/",
    element: <Navigate to={"/category/01"} />
},
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: ({params}) =>
                    fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
            },
        ],
    },
    {
        path: '/news',
        element: <h1><NewsLayout></NewsLayout></h1>,
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <h2>Login</h2>
            }, {
                path: "/auth/register",
                element: <h2>Register</h2>
            },
        ]
    },
    {
        path: '*',
        element: <h1>Error</h1>
    }
])

export default Router;