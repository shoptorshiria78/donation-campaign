import { createBrowserRouter } from "react-router-dom";
import Home from "./Page/Home/Home";
import Error from "../Page/Error/Error";


const route = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
        errorElement: <Error></Error>,
        children:[
            {
              path: '/',
              element:<Home></Home>
             },
             
        ]
    }
])

export default route;