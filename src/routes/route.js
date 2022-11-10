import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/home";
import Register from "../components/register/register";
import Main from "../layout/Main";
import PostReview from "../post-review/postreview";
import Login from './../components/login/login';
import AllServices from './../components/allservices/allservices';
import ServicesDetails from "../components/servicedetails/servicesdetails";
import Blog from "../components/blog/blog";
import Addservice from "../components/addservice/addservice";
import Reviews from "../components/Review/revews";
import PrivateRoute from "./privateroute";

export const route = createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        children:[
            {
               path:"/",
               element: <Home />,
               loader: async () => fetch("https://travelia-server-kmdshojib.vercel.app/service")
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
               loader: async () => fetch("https://travelia-server-kmdshojib.vercel.app/allservice")
           },

           {    
               path:"/servicedetails/:id",
               element:<ServicesDetails />,
               loader:async ({params}) => fetch(`https://travelia-server-kmdshojib.vercel.app/servicedetails/${params.id}`),
           },
           {
                path:"/blog",
                element:<Blog />
           },
           {
                path:"/addservice",
                element:<PrivateRoute><Addservice /></PrivateRoute>
           },
           {
                path:"/myreviews",
                element:<PrivateRoute><Reviews /></PrivateRoute>
           }
        ]
    },
    {
        path:"*",
        element: <h1>We can't process your request right now</h1>
    }
])