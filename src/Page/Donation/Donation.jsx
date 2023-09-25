import { useEffect, useState } from "react";
import swal from 'sweetalert';
import DonatedCard from "../../Component/DonatedCard/DonatedCard";


const Donation = () => {

    const[donatedCard, setDonatedCard]=useState([]);
   

    useEffect(()=>{
        const donatedItems = JSON.parse(localStorage.getItem('donate'));
        if(donatedItems){
            setDonatedCard(donatedItems);
        }

        else{
             
            swal("Oops", "No data found!", "error");
        }
    },[])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-[1100px] mx-auto mt-8 gap-4">
            {
                donatedCard.map((card, idx)=> <DonatedCard card={card} key={idx}></DonatedCard>)
            }
        </div>
    );
};

export default Donation;