import { createBrowserRouter } from "react-router-dom";

import Error from "../Page/Error/Error";
import Home from "../Page/Home/Home";
import MainLayOut from "../Layouts/MainLayOut";
import Donation from "../Page/Donation/Donation";
import Statistics from "../Page/Statistics/Statistics";


const route = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        errorElement: <Error></Error>,
        children:[
            {
              path: '/',
              element:<Home></Home>
             },
             {
                path: '/donation',
                element:<Donation></Donation>
               },
               {
                path: '/statistics',
                element:<Statistics></Statistics>
               },
        ]
    }
])

export default route;