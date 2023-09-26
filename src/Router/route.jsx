import { createBrowserRouter } from "react-router-dom";

import Error from "../Page/Error/Error";
import Home from "../Page/Home/Home";
import MainLayOut from "../Layouts/MainLayOut";
import Donation from "../Page/Donation/Donation";
import Statistics from "../Page/Statistics/Statistics";
import DonationDetails from "../Page/DonationDetails/DonationDetails";


const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
                loader:()=>fetch('./donation.json')
            },
            {
                path: '/donationDetails/:id',
                element: <DonationDetails></DonationDetails>,
                loader:()=>fetch('./donation.json')
            }
        ]
    }
])

export default route;