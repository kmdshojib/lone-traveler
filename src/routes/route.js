import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from './../components/login/login';

export const route = createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        children:[
           {
            path:"/login",
            element:<Login />
           } 
        ]
    },
    {
        path:"*",
        element: <h1>We can't process your request right now</h1>
    }
])