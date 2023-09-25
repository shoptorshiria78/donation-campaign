import swal from 'sweetalert';

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";



const DonationDetails = () => {

    const params = useParams();
    const cards = useLoaderData();

    const [card, setCard] = useState({})

    useEffect(() => {
        const findCard = cards.find(card => card.id === JSON.parse(params.id));
        console.log(findCard);
        setCard(findCard);
    }, [cards, params])

    const handleDonation = ()=>{
        

        const addDonation = [];

        const donatedItems = JSON.parse(localStorage.getItem('donate'));
        if(!donatedItems){
            addDonation.push(card);
            localStorage.setItem('donate', JSON.stringify(addDonation));
        }
        else{
                addDonation.push(...donatedItems, card);
                localStorage.setItem('donate',JSON.stringify(addDonation));
                swal("Good job!", "You have donated!", "success");
        }

    }

    return (
        <div className="max-w-[1100px] space-y-3 mx-auto mb-10 ">
            <div className="relative">
                <img className="w-full  h-[80vh]" src={card.img} alt="" />
                <div className="bg-gradient-to-r from-black to-black opacity-50 h-24 absolute w-full top-[356px] "></div>
                <div className=" absolute top-[384px]  ">
                    <button className={`bg-[${card.color_text_btn_bg}] h-10 px-5 rounded text-white ml-7` } onClick={handleDonation}>Donate $<span>{card.price}</span></button>
                </div>
            </div>
            <h1 className="text-3xl font-bold">{card.title}</h1>
            <p>{card.description}</p>

        </div>
    );
};

export default DonationDetails;