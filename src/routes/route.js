import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/home";
import Register from "../components/register/register";
import Main from "../layout/Main";
import PostReview from "../post-review/postreview";
import Login from './../components/login/login';
import AllServices from './../components/allservices/allservices';
import ServicesDetails from "../components/servicedetails/servicesdetails";
import Blog from "../components/blog/blog";

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
               element:<AllServices />,
               loader: async () => fetch("http://localhost:5000/allservice")
           },

           {    
               path:"/servicedetails/:id",
               element:<ServicesDetails />,
               loader:async ({params}) => fetch(`http://localhost:5000/servicedetails/${params.id}`),
           },
           {
                path:"/blog",
                element:<Blog />
           }
        ]
    },
    {
        path:"*",
        element: <h1>We can't process your request right now</h1>
    }
])