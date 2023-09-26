import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

import { styled } from '@mui/system';




const Statistics = () => {

    const [donatedPrice, setDonatedPrice] = useState(0);
    const [totalDonatedPrice, setTotalDonatedPrice] = useState(0);
    const totalDonation = useLoaderData();
    const donatedItems = JSON.parse(localStorage.getItem('donate'));
    // console.log(totalDonation, donatedItems);

    useEffect(() => {
        const totalDonationPrice = totalDonation.reduce((pValue, cValue) => pValue + cValue.price, 0);
        setTotalDonatedPrice(totalDonationPrice);


        const donatedItemPrice = donatedItems.reduce((pValue, cValue) => pValue + cValue.price, 0);
        setDonatedPrice(donatedItemPrice);
        console.log(totalDonationPrice, donatedItemPrice);

    }, [donatedItems, totalDonation])

    const data = [
        { label: 'Total Donation', value: (totalDonatedPrice - donatedPrice), color: '#FF444A' },
        { label: 'Your Donation ', value: donatedPrice, color: '#00C49F' },

    ];

    const sizing = {
        margin: { right: 5 },
        width: 400,
        height: 300,
        legend: { hidden: true },
    };
    const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

    const getArcLabel = (params) => {
        const percent = params.value / TOTAL;
        return `${(percent * 100).toFixed(1)}%`;
    };

    return (
        <div className="flex justify-center items-center w-[400px] md:w-[600px] lg:w-[1100px] mx-auto mt-20 h-[80vh]">
            <div>
                <div className="flex justify-center items-center mb-10" >
                    <PieChart
                        series={[
                            {
                                outerRadius: 150,
                                data,
                                arcLabel: getArcLabel,
                            },
                        ]}
                        sx={{
                            [`& .${pieArcLabelClasses.root}`]: {
                                fill: 'white',
                                fontSize: 14,
                            },
                        }}
                        {...sizing}
                    />
                </div>
                <div className=" flex justify-center items-center mb-10" >
                    <div className="flex items-center">
                        <p className="text-xs md:text-base font-medium">Your Donation</p>
                        <div className=" border-[#00C49F] border-4 ml-3 w-16 md:w-24 h-0">

                        </div>
                    </div>
                    <div className="flex items-center ml-4">
                        <p className="text-xs md:text-base font-medium">Total Donation</p>
                        <div className=" border-[#FF444A] border-4 w-16 md:w-24 h-0 ml-3">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Statistics;

