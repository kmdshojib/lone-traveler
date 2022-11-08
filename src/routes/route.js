import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/home";
import Register from "../components/register/register";
import Main from "../layout/Main";
import PostReview from "../post-review/postreview";
import Login from './../components/login/login';
import AllServices from './../components/allservices/allservices';

export const route = createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        children:[
            {
                path:"/",
                element: <Home />,
                loader: async () => fetch("http://localhost:5000/service")
            },
           {
            path:"/login",
            element:<Login />
           },
           {
            path:"/register",
            element:<Register />
           },
           {
            path:"/review",
            element:<PostReview />
           },
           {
            path:"/allservices",
            element:<AllServices />
           }
        ]
    },
    {
        path:"*",
        element: <h1>We can't process your request right now</h1>
    }
])